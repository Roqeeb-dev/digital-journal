import type { User } from "@/types/User";
import { create } from "zustand";

interface Props {
  user: User | null;
  setUser: (data: User | null) => void;
}

export const useAuthStore = create<Props>((set) => ({
  user: null,
  setUser: (data) => {
    set({ user: data });
  },
}));
