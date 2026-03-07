export interface Journal {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  category: "note" | "deep-dive" | "archive" | "build";
}
