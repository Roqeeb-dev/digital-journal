export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  authorId: string;
  tags: string[];
  category: "note" | "deep-dive" | "article";
  coverImage?: string;
  readingTime?: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
