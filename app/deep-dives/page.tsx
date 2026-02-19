import { data } from "@/lib/data";
import SectionHero from "@/components/SectionHero";
import NoteCard from "@/components/NoteCard";

export const metadata = {
  title: "Deep Dives | Digital Journal",
  description: "Extended thinking on topics that deserve more than a note.",
};
const deepDiveData = data.filter((d) => d.category === "deep-dive");

export default function DeepDives() {
  return (
    <main className="px-5 md:px-2 max-w-6xl mx-auto">
      <SectionHero
        pillText="Deep Dives"
        headingText="Long form explorations"
        paragraphText="Extended thinking on topics that deserve more than a note."
      />

      <section className="flex flex-col gap-5">
        {deepDiveData.map((deepdive) => (
          <NoteCard
            id={deepdive.id}
            key={deepdive.id}
            date={deepdive.createdAt}
            title={deepdive.title}
            excerpt={deepdive.excerpt}
            readingTime="2m"
          />
        ))}
      </section>
    </main>
  );
}
