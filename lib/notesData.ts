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
];
