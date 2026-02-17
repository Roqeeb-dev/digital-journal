import type { Content } from "./notesData";

export const deepDiveData: Content[] = [
  {
    id: 1,
    title: "Building a Real-Time Collaborative Editor with CRDT",
    content: `When you think about real-time collaboration—Google Docs, Figma, Notion—the problem seems deceptively simple at first. Multiple people editing the same document simultaneously. How hard could it be? Turns out, incredibly hard.

The naive approach is to just broadcast every keystroke to all connected clients and apply them in order. But what happens when two people type at the same position at the same time? What about network latency? What if someone goes offline and comes back? The rabbit hole goes deep, and at the bottom of it, you find CRDTs—Conflict-free Replicated Data Types.

## The Problem with Operational Transformation

Before CRDTs, the dominant approach was Operational Transformation (OT), which Google Docs famously uses. OT works by transforming operations against each other to maintain consistency. If User A inserts "hello" at position 0 and User B deletes character at position 5 simultaneously, you need to transform B's operation to account for A's insertion.

The math gets complicated fast. You need transformation functions for every possible pair of operations. And if you get it wrong, you end up with divergent states across clients—one person sees "helo" while another sees "hello". The implementation complexity is enormous.

## Enter CRDTs

CRDTs take a fundamentally different approach: they guarantee that if all clients eventually receive all updates, they will converge to the same state—without requiring any coordination or consensus protocol. No central server deciding what wins. No transformation functions. Just pure math.

For text editing, we typically use a CRDT called RGA (Replicated Growable Array) or its variants. The core idea is brilliant: instead of thinking of text as a flat string with indices, think of it as a linked list where every character has a globally unique ID.

When you insert a character, you're not inserting at "position 5"—you're inserting "after character with ID xyz". This ID is typically a combination of the client ID and a logical timestamp. So even if two clients insert at the "same position", they're actually inserting after different characters, and the CRDT rules deterministically decide which one comes first.

## Implementation Deep Dive

Let me walk through a simplified implementation. First, we need a way to generate unique IDs:

\`\`\`typescript
class UniqueID {
  constructor(
    public clientId: string,
    public counter: number
  ) {}
  
  compareTo(other: UniqueID): number {
    if (this.counter !== other.counter) {
      return this.counter - other.counter;
    }
    return this.clientId.localeCompare(other.clientId);
  }
}
\`\`\`

Each character in our document is represented as a node:

\`\`\`typescript
interface CharNode {
  id: UniqueID;
  value: string;
  afterId: UniqueID | null; // the character this comes after
  isDeleted: boolean;
}
\`\`\`

The document itself is a set of these nodes. When inserting, we create a new node with a fresh ID and specify which character it comes after. When deleting, we don't actually remove the node—we mark it as deleted. This is crucial for CRDT properties.

The magic happens in the merge logic. When we receive a remote operation, we integrate it into our local document by finding the correct position based on the causal ordering defined by the afterId references.

## Handling Deletions

Deletions are tricky. If User A deletes a character that User B is currently inserting after, what happens? With tombstones (keeping deleted characters around), we can still reference them. The character B inserted will still point to the deleted character's ID, maintaining the causal structure.

Eventually, through garbage collection, we can remove tombstones that are no longer needed—but only when we're sure all clients have seen all operations that might reference them.

## Network Layer

For the network layer, I used WebRTC for peer-to-peer communication with a signaling server for initial connection setup. This is overkill for many use cases—a simple WebSocket server broadcasting operations works fine—but P2P reduces server load and latency.

Each operation is serialized as JSON and broadcast to all connected peers:

\`\`\`typescript
{
  type: 'insert' | 'delete',
  id: { clientId: 'abc', counter: 42 },
  afterId: { clientId: 'xyz', counter: 15 },
  value: 'h',
  timestamp: 1234567890
}
\`\`\`

The receiving client queues these operations and applies them in causal order. If we receive operation N but haven't yet received operation N-1 that it depends on, we buffer it until the dependency arrives.

## The Cursor Problem

One thing that surprised me: cursor positions are almost harder than the text itself. If User A is typing at position 10 and User B inserts text before that position, A's cursor needs to move. But each client has a different representation of positions.

The solution is to anchor cursors to character IDs, not indices. When User A's cursor is "after character with ID xyz", it stays there regardless of what other people insert before it. We only convert to visual indices for rendering.

## Performance Considerations

The naive CRDT implementation is slow—O(n) for every operation because you're searching through the entire document. Real implementations use clever data structures like B-trees or skip lists to get this down to O(log n).

Memory usage is also a concern. Keeping every deleted character around forever isn't sustainable. Production systems implement sophisticated garbage collection that removes tombstones while preserving CRDT semantics.

## What I Learned

Building this taught me that distributed systems are fundamentally about embracing uncertainty. You can't assume everyone sees the same thing at the same time. You can't rely on ordering. All you can do is design your data structures so that convergence is inevitable.

CRDTs are beautiful because they make a hard problem tractable. The tradeoff is complexity in the data structure itself, but once you have that foundation, the application logic becomes almost trivial.

If you're building anything real-time and collaborative, don't roll your own. Use Yjs, Automerge, or one of the mature CRDT libraries. But understanding how they work will make you a better distributed systems engineer.

## Further Reading

- "A comprehensive study of CRDTs" by Shapiro et al.
- The Yjs documentation—brilliantly clear
- Martin Kleppmann's work on Automerge
- Figma's blog post on their multiplayer architecture (they don't use pure CRDTs but the principles apply)

The full code for this implementation is on GitHub, though I warn you: it's educational code, not production-ready. Use a real library.`,
    excerpt:
      "A deep dive into building real-time collaborative editing from first principles, exploring CRDTs, their mathematical foundations, and the practical challenges of making them performant.",
    createdAt: "2024-02-12T08:00:00Z",
    category: "deep-dive",
    tags: [
      "crdt",
      "distributed-systems",
      "real-time",
      "collaboration",
      "algorithms",
    ],
  },

  {
    id: 2,
    title: "Dissecting Next.js App Router: How Streaming Really Works",
    content: `The Next.js App Router with React Server Components feels like magic when it works. You write a component, slap 'use server' on it, and somehow data fetching happens on the server, the HTML streams to the client, and everything just works. But how does it actually work under the hood?

I spent the last two weeks reading through Next.js source code, React's streaming renderer, and the HTTP/2 spec to understand what's really happening. Here's what I found.

## The Big Picture

When you request a page in the App Router, Next.js doesn't send you a complete HTML document. Instead, it sends you a stream—a continuous flow of data that arrives in chunks as the server generates it. This is fundamentally different from traditional SSR where the server waits for everything to be ready before sending a single response.

The stream contains a mix of HTML, JavaScript, and special instructions encoded in a format called RSC Payload (React Server Component Payload). The browser receives these chunks progressively, parses them on the fly, and updates the DOM incrementally.

## Streaming in Practice

Let's trace a request from start to finish. You navigate to /dashboard:

1. Browser sends HTTP request to Next.js server
2. Next.js matches the route to app/dashboard/page.tsx
3. React begins rendering the server component tree
4. As each component resolves, Next.js flushes a chunk to the response stream
5. Browser receives chunks, parses them, renders incrementally
6. When streaming completes, the full page is interactive

The beautiful part: if a component deep in the tree is slow (say, fetching from a database), Next.js can stream everything before it, show the user a loading state, and stream the slow part when it's ready.

## The RSC Wire Format

Here's where it gets interesting. The data format sent over the wire is not HTML. It's a custom format that represents the React component tree with markers for client components, server components, and data.

A simplified chunk looks like this:

\`\`\`
M1:{"id":"./components/Header.tsx","name":"Header","chunks":["client1.js"]}
S2:"<div class='header'>Welcome</div>"
J3:{"user":{"name":"Roqeeb","id":123}}
\`\`\`

- M1 is a module reference (a client component)
- S2 is serialized JSX from a server component  
- J3 is JSON data passed as props

The browser-side React runtime parses these chunks, reconstructs the component tree, and hydrates the parts that need to be interactive.

## Suspense Boundaries and Streaming

Suspense is the key to making streaming useful. When React encounters a Suspense boundary during server rendering, it has a choice:

1. Wait for the suspended component to resolve (blocking)
2. Send a fallback immediately and stream the real content later (streaming)

Next.js chooses option 2. It immediately sends the fallback (your loading spinner), continues rendering other parts of the tree, and when the suspended component resolves, sends a new chunk that tells the browser "replace the fallback with this actual content."

This is why you wrap slow components in Suspense:

\`\`\`tsx
<Suspense fallback={<Spinner />}>
  <SlowDatabaseQuery />
</Suspense>
\`\`\`

Without Suspense, React has no way to know which parts are safe to stream separately. Everything becomes a blocking waterfall.

## The Implications for Data Fetching

In the Pages Router, you had getServerSideProps that ran before rendering. This meant waiting for all data before sending any HTML. The App Router flips this: you fetch data directly in components, and React coordinates the streaming.

This has a subtle but important consequence: you want to fetch data as high in the tree as possible and pass it down, rather than fetching deep in the tree. Fetching deep delays when that entire subtree can stream.

## Selective Hydration

Not everything needs to be interactive. Server Components render to static HTML and never hydrate on the client. Only Client Components (marked with 'use client') get JavaScript sent to the browser.

When React hydrates, it doesn't hydrate the entire tree at once. It uses a technique called Selective Hydration, where:

1. High-priority interactions hydrate first (e.g., user clicking a button)
2. Low-priority parts hydrate in idle time
3. Parts that are off-screen delay hydration until scrolled into view

This is why App Router pages can feel fast even with large JavaScript bundles—most of the hydration happens lazily.

## Cache and Deduplication

Next.js automatically deduplicates fetch requests within a render. If three components all fetch('/api/user'), Next.js makes only one request and shares the result.

This works via React's cache primitive:

\`\`\`typescript
import { cache } from 'react'

const getUser = cache(async (id) => {
  const res = await fetch(\`/api/users/\${id}\`)
  return res.json()
})
\`\`\`

The cache is per-request, not global. Each page render gets a fresh cache. This is crucial for correctness but means you need to think carefully about where you call cached functions.

## Edge Cases and Gotchas

**Serialization boundaries**: Anything sent from server to client must be serializable. Functions, class instances, Dates (they become strings)—all serialize strangely or fail. This is why you sometimes get cryptic errors about non-serializable props.

**Client-Server boundary**: Once you mark a component 'use client', everything it imports is client code. You can't import server-only code (like database clients) into client components. The mental model is: client components are a one-way door.

**Streaming and headers**: Since streaming sends chunks immediately, you can't set HTTP headers or cookies after streaming begins. They must be set before the first chunk. This is why redirect() and cookies() must be called in server components before any await.

## Performance Profile

Streaming has measurable benefits:

- **Time to First Byte (TTFB)**: Lower because we send data before everything is ready
- **Largest Contentful Paint (LCP)**: Often better because critical content renders earlier  
- **Time to Interactive (TTI)**: Can be worse if you stream too much non-critical content that needs hydration

The tradeoff is complexity. Streaming makes reasoning about the request lifecycle harder. You need to think about what chunks arrive when, which components can render independently, and how to structure Suspense boundaries.

## What I Wish I Knew Earlier

1. Streaming is an optimization for perceived performance, not actual performance. The server still does the same work.

2. Suspense boundaries are your control points. Place them strategically around expensive operations.

3. The RSC payload is separate from HTML. Next.js sends both—HTML for initial render, RSC payload for client-side navigations.

4. Not every page benefits from streaming. Simple pages with fast data fetching might be better with traditional SSR.

5. The cache() primitive is your friend. Use it liberally to deduplicate fetches.

## Conclusion

The App Router's streaming architecture is sophisticated. It builds on HTTP/2's multiplexing, React's concurrent rendering, and clever encoding formats to deliver experiences that feel instant.

But sophistication comes with cognitive overhead. You need to understand Server Components, Suspense, streaming, hydration, and caching to use the App Router effectively. When it works, it's magic. When it breaks, debugging requires understanding the entire stack.

Is it worth it? For data-heavy applications where performance matters, absolutely. For simple sites, maybe not. Choose your complexity budget wisely.`,
    excerpt:
      "Taking apart the Next.js App Router to understand streaming SSR, React Server Components, selective hydration, and the wire format that makes it all possible.",
    createdAt: "2024-01-20T11:30:00Z",
    category: "deep-dive",
    tags: [
      "nextjs",
      "react",
      "streaming",
      "ssr",
      "performance",
      "architecture",
    ],
  },

  {
    id: 3,
    title:
      "TypeScript's Type System is Turing Complete: Here's Why That Matters",
    content: `I was writing a complex type transformation the other day—mapping over an object type, transforming each property based on its type, that sort of thing—when I had a realization: TypeScript's type system is a full programming language.

Not metaphorically. Literally. TypeScript's type system is Turing complete, meaning it can compute anything a regular programming language can compute. You can implement FizzBuzz at the type level. You can write a lisp interpreter in types. You can compute Fibonacci numbers without running any JavaScript.

This is both powerful and concerning. Let me explain why.

## What Does Turing Complete Mean?

A system is Turing complete if it can simulate a Turing machine—a theoretical computer that can solve any computational problem given enough time and memory. In practical terms, it means the system has:

1. Conditional logic (if/else)
2. Loops or recursion  
3. State storage

TypeScript's type system has all three:

- Conditional types give us if/else: \`T extends U ? X : Y\`
- Recursive type aliases give us loops
- Generic type parameters act as variables

Combined, these features make the type system as powerful as JavaScript itself—but operating at compile time on types instead of runtime on values.

## A Simple Example: Type-Level Math

Let's write a type that adds two numbers:

\`\`\`typescript
type Add<A extends number, B extends number> = 
  [...BuildTuple<A>, ...BuildTuple<B>]['length']

type BuildTuple<N extends number, Acc extends unknown[] = []> =
  Acc['length'] extends N 
    ? Acc 
    : BuildTuple<N, [...Acc, unknown]>

type Result = Add<5, 3> // type Result = 8
\`\`\`

This works by building tuples of the specified lengths and concatenating them. The length of the result is the sum. We're doing arithmetic using only the type system—no runtime code.

## Recursion and Conditional Logic

Here's a type that reverses a tuple:

\`\`\`typescript
type Reverse<T extends any[]> = 
  T extends [infer First, ...infer Rest]
    ? [...Reverse<Rest>, First]
    : T

type Test = Reverse<[1, 2, 3, 4]> // [4, 3, 2, 1]
\`\`\`

We're pattern matching on the tuple structure (conditional), recursing on the tail, and building up the result. This is classic functional programming, but in types.

## Why This Matters for Real Code

Okay, type-level FizzBuzz is cute, but who cares? Here's why it matters:

**1. Type-safe builders and fluent APIs**

Libraries like tRPC use complex conditional types to provide perfect autocomplete. When you chain method calls, the type system understands the context and narrows types accordingly:

\`\`\`typescript
trpc.user.getById.query({ id: 123 }) // fully typed!
\`\`\`

This requires the type system to track state across method calls, which requires Turing-complete computation.

**2. Framework magic**

React's type definitions use conditional types to infer component props from their implementation. SvelteKit infers loader data types from your route files. This "magic" is just clever type-level programming.

**3. Compile-time validation**

You can enforce business rules at the type level. For example, a type that only accepts valid CSS color strings:

\`\`\`typescript
type CSSColor = \`#\${string}\` | 'red' | 'blue' | /* ... */

function setColor(color: CSSColor) { /* ... */ }
setColor('#fff') // OK
setColor('invalid') // Error!
\`\`\`

The type system is validating strings at compile time.

## The Dark Side: Complexity and Compile Times

TypeScript's powerful type system is a double-edged sword. I've seen production codebases where:

- Type checking takes 30+ seconds
- IntelliSense hangs for 5+ seconds on autocomplete
- Error messages span hundreds of lines

The problem is that Turing-complete systems can have infinite loops. TypeScript has depth limits to prevent this, but hitting those limits produces cryptic errors:

\`\`\`
Type instantiation is excessively deep and possibly infinite.
\`\`\`

Translation: "Your types are too clever. Simplify them."

## Real-World Pain Points

**Overly generic utility types**: Libraries ship with ultra-generic types that work for every use case but take forever to evaluate. Type instantiation depth increases exponentially with nesting.

**Template literal types**: String manipulation at the type level (\`\${Uppercase<T>}\`) is powerful but slow. Autocomplete can freeze when working with large unions of template literals.

**Recursive conditional types**: A recursive type that checks 20 properties in an object can slow IntelliSense to a crawl.

## Guidelines I Follow

After hitting these issues repeatedly, I've developed some rules:

1. **Prefer simple types over clever ones**: A verbose but simple type is better than a concise but complex one.

2. **Avoid deep recursion**: If a type recurses more than 5 levels, consider if you actually need the complexity.

3. **Use \`any\` strategically**: Sometimes the right answer is to give up on perfect types and use \`any\` to cap complexity.

4. **Profile your types**: TypeScript has a \`--generateTrace\` flag that shows which types are slow. Use it.

5. **Keep type computation small**: If a type takes multiple seconds to instantiate, it's too complex.

## The Philosophical Question

Should a type system be Turing complete? 

Arguments for: Expressiveness. You can encode complex invariants and catch bugs at compile time that would otherwise be runtime errors.

Arguments against: Complexity. The type system becomes harder to understand, slower to execute, and more error-prone.

Languages like Rust and Haskell have Turing-complete type systems and embrace the complexity. Others like Go deliberately keep types simple.

TypeScript landed in the middle, somewhat accidentally. The features that make it Turing complete (conditional types, recursion) were added for practical use cases, not to make the type system Turing complete. That was an emergent property.

## What I've Learned

The type system is a tool. Sometimes the right tool is a simple \`interface\`. Sometimes it's a complex conditional type. The skill is knowing which to reach for.

I used to write the cleverest types I could, using every TypeScript feature. Now I write the simplest types that solve the problem. The difference is experience—and spending too many hours debugging type errors.

If you're doing something complex with types, ask yourself: "Could I solve this with a runtime check instead?" Sometimes the answer is yes, and that's okay. Not everything needs to be proven at compile time.

TypeScript's type system is Turing complete. Use that power wisely.`,
    excerpt:
      "Exploring TypeScript's Turing-complete type system, what it enables, the performance costs, and when clever types become too clever.",
    createdAt: "2024-01-05T16:00:00Z",
    category: "deep-dive",
    tags: [
      "typescript",
      "type-systems",
      "computer-science",
      "performance",
      "dx",
    ],
  },
];
