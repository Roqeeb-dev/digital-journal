import { create } from "zustand";
import { persist } from "zustand/middleware";
import { data } from "@/lib/data";
import type { Post } from "@/lib/data";

interface Props {
  posts: Post[];
  addNewPost: (data: Post) => void;
}

export const useJournalStore = create<Props>()(
  persist(
    (set) => ({
      posts: data,
      addNewPost: (newPost) =>
        set((state) => ({
          posts: [newPost, ...state.posts],
        })),
    }),
    {
      name: "journal-storage",
    },
  ),
);
