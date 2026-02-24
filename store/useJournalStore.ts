import { create } from "zustand";
import { data } from "@/lib/data";
import { persist } from "zustand/middleware";
import type { Content } from "@/lib/notesData";

interface Props {
  journals: Content[];
  addNewJournal: (data: Content) => void;
}

export const useJournalStore = create<Props>((set) => ({
  journals: data,
  addNewJournal(newJournal) {
    set((state) => ({
      journals: [...state.journals, newJournal],
    }));
  },
}));
