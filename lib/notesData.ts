export interface Content {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  category: "note" | "deep-dive" | "archive";
  tags: string[];
}

export const notesData: Content[] = [
  {
    id: 1,
    title: "Understanding React Server Components",
    content:
      "React Server Components represent a fundamental shift in how we think about rendering in React applications. Unlike traditional client components, RSCs run exclusively on the server, allowing us to fetch data, access backend resources, and render UI without shipping any JavaScript to the client. This has profound implications for performance, bundle size, and developer experience. The key mental model is to think of your component tree as having both server and client boundaries...",
    excerpt:
      "Exploring the mental models and practical patterns behind React Server Components, and how they change the way we architect modern React applications.",
    createdAt: "2024-02-14T10:30:00Z",
    category: "note",
    tags: ["react", "server-components", "frontend", "architecture"],
  },
  {
    id: 2,
    title: "On Creative Constraints",
    content:
      "I've been thinking about how constraints fuel creativity rather than limit it. When you have infinite options, you freeze. But give yourself a boundary—use only three colors, write in 100 words, build with only CSS—and suddenly ideas flow. It's counterintuitive but true: freedom comes from limitation. This applies to code, design, writing, everything...",
    excerpt:
      "Why working within boundaries often produces the most creative work, and how I've been using constraints to push my own projects forward.",
    createdAt: "2024-02-10T15:45:00Z",
    category: "note",
    tags: ["creativity", "design", "process", "reflection"],
  },
  {
    id: 3,
    title: "Building a Type-Safe Form System",
    content:
      "After wrestling with React Hook Form and Zod for the hundredth time, I decided to document the exact pattern I keep reaching for. The goal: end-to-end type safety from form schema to submission handler, with minimal boilerplate. Here's the setup: define your schema with Zod, infer the TypeScript types, create a resolver, and wire it all together with proper error handling. The beauty of this approach is that you get autocomplete everywhere, runtime validation, and compile-time guarantees all in one...",
    excerpt:
      "A practical guide to building forms with full type safety using React Hook Form, Zod, and TypeScript—the pattern I use in every project.",
    createdAt: "2024-01-28T09:20:00Z",
    category: "deep-dive",
    tags: ["typescript", "forms", "zod", "react-hook-form", "patterns"],
  },
  {
    id: 4,
    title: "What I Learned Rebuilding My Portfolio",
    content:
      "This is the third time I've rebuilt this site from scratch, and I think I finally got it right. Not in the sense that it's perfect—nothing ever is—but right in that it reflects how I actually think and work. I stripped away all the unnecessary animations, the hero sections that scream 'hire me,' and the project galleries that nobody scrolls through. What's left is just writing, and space to think. Sometimes the best design is just getting out of the way...",
    excerpt:
      "Reflections on the third rebuild of this site, why I kept it minimal, and what I learned about presenting work online.",
    createdAt: "2024-01-15T14:00:00Z",
    category: "archive",
    tags: ["meta", "design", "portfolio", "reflection", "minimalism"],
  },
];
