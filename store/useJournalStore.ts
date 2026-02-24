import { create } from "zustand";
import { persist } from "zustand/middleware";
import { data } from "@/lib/data";
import type { Content } from "@/lib/notesData";

interface Props {
  journals: Content[];
  addNewJournal: (data: Content) => void;
}

export const useJournalStore = create<Props>()(
  persist(
    (set) => ({
      journals: data,
      addNewJournal: (newJournal) =>
        set((state) => ({
          journals: [newJournal, ...state.journals],
        })),
    }),
    {
      name: "journal-storage",
    },
  ),
);
