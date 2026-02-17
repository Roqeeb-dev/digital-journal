import SectionHero from "@/components/SectionHero";
import NoteCard from "@/components/NoteCard";
import { data } from "@/lib/data";

export const metadata = {
  title: "Notes | Digital Journal",
  description:
    "Quick thoughts, small discoveries, and things I want to remember.",
};

export default function Notes() {
  const notesData = data.filter((d) => d.category === "note");

  return (
    <main className="max-w-6xl mx-auto">
      <SectionHero
        pillText="Notes"
        headingText="Short Reflections & Learnings"
        paragraphText="Quick thoughts, small discoveries, and things I want to remember."
      />

      <section className="flex flex-col gap-5">
        {notesData.map((note) => (
          <NoteCard
            key={note.id}
            date={note.createdAt}
            title={note.title}
            excerpt={note.excerpt}
            readingTime="2m"
          />
        ))}
      </section>
    </main>
  );
}
