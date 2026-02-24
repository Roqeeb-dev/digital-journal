"use client";

import SectionHero from "@/components/SectionHero";
import NoteCard from "@/components/NoteCard";
import { getReadingTime } from "@/utils/getReadingTime";
import { useJournalStore } from "@/store/useJournalStore";

export default function NotesClient() {
  const journals = useJournalStore((state) => state.journals);
  const notesData = journals.filter((d) => d.category === "note");

  return (
    <main className="px-5 lg:px-2 max-w-6xl mx-auto">
      <SectionHero
        pillText="Notes"
        headingText="Short Reflections & Learnings"
        paragraphText="Quick thoughts, small discoveries, and things I want to remember."
      />

      <section className="flex flex-col gap-5">
        {notesData.map((note) => (
          <NoteCard
            id={note.id}
            key={note.id}
            date={note.createdAt}
            title={note.title}
            excerpt={note.excerpt}
            readingTime={`${getReadingTime(note.content)}m read`}
          />
        ))}
      </section>
    </main>
  );
}
