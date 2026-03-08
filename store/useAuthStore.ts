import type { Post } from "@/lib/data";
import { create } from "zustand";

export interface User {
  name: string;
  email: string;
  posts: Post[];
  bio?: string;
}

interface Props {
  user: User | null;
  setUser: (data: User) => void;
}

export const useAuthStore = create<Props>((set) => ({
  user: null,
  setUser: (data: User) => {
    set({ user: data });
  },
}));
