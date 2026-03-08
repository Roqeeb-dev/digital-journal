"use client";

import SectionHero from "@/components/SectionHero";
import NoteCard from "@/components/NoteCard";
import { data } from "@/lib/data";
import { useJournalStore } from "@/store/useJournalStore";

export default function NotesClient() {
  const journals = useJournalStore((state) => state.posts);

  return (
    <main className="px-5 lg:px-2 max-w-6xl mx-auto">
      <SectionHero
        pillText="Notes"
        headingText="Short Reflections & Learnings"
        paragraphText="Quick thoughts, small discoveries, and things I want to remember."
      />

      <section className="flex flex-col gap-5">
        {data.map((post) => (
          <NoteCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  );
}
