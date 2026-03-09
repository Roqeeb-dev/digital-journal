import { Post } from "@/types/Post";

export const mockPosts: Post[] = [
  {
    _id: "1",
    title: "Designing for clarity in minimal interfaces",
    slug: "designing-for-clarity-in-minimal-interfaces",
    excerpt:
      "Minimal interfaces are not about removing elements, but about ensuring every element serves a clear purpose.",
    content:
      "Minimal design is often misunderstood as simply removing things from the interface. In reality, it is about clarity. Every element must have intent. Typography, spacing, and hierarchy become the primary tools for guiding the reader's attention. When building writing platforms, the goal is to remove friction between the reader and the content.",
    authorId: "user_1",
    tags: ["design", "ui", "minimalism"],
    category: "article",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    readingTime: 4,
    published: true,
    createdAt: "2026-03-08T10:00:00Z",
    updatedAt: "2026-03-08T10:00:00Z",
  },

  {
    _id: "2",
    title: "A small thought on consistency",
    slug: "a-small-thought-on-consistency",
    excerpt:
      "Consistency compounds over time in ways that motivation never will.",
    content:
      "Consistency is one of the most underrated skills in any discipline. Writing a little every day builds clarity of thought. Coding a little every day builds fluency in systems. Over long periods of time, small deliberate efforts accumulate into significant results.",
    authorId: "user_1",
    tags: ["productivity", "thinking"],
    category: "note",
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    readingTime: 2,
    published: true,
    createdAt: "2026-03-07T14:20:00Z",
    updatedAt: "2026-03-07T14:20:00Z",
  },

  {
    _id: "3",
    title: "Understanding the mental model of React rendering",
    slug: "understanding-the-mental-model-of-react-rendering",
    excerpt:
      "React becomes much easier once you understand that rendering is simply a function of state.",
    content:
      "React's rendering model is based on a simple idea: UI is a function of state. Whenever state changes, React recalculates what the interface should look like. This mental model simplifies reasoning about applications because it removes the need to manually manipulate the DOM.",
    authorId: "user_1",
    tags: ["react", "javascript", "frontend"],
    category: "deep-dive",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    readingTime: 6,
    published: true,
    createdAt: "2026-03-06T09:45:00Z",
    updatedAt: "2026-03-06T09:45:00Z",
  },
];
