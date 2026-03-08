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
];
