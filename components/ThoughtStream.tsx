import PillText from "./PillText";
import { data } from "@/lib/data";
import { buildData } from "@/lib/buildData";
import JournalCard from "./JournalCard";

export default function ThoughtStream() {
  const notes = data.filter((d) => d.category === "note").slice(0, 2);
  const deepDive = data.filter((d) => d.category === "deep-dive").slice(0, 1);
  const builds = buildData.slice(0, 2);

  return (
    <section className="my-12">
      <div className="my-4">
        <PillText text="Thought Stream" />
      </div>

      <section className="grid grid-cols-1 grid-cols-2 gap-6">
        {notes.map((j, idx) => (
          <JournalCard
            key={idx}
            category={j.category}
            date={j.createdAt}
            title={j.title}
            description={j.excerpt}
          />
        ))}
      </section>

      <section>
        {deepDive.map((j, idx) => (
          <JournalCard
            key={idx}
            category={j.category}
            date={j.createdAt}
            title={j.title}
            description={j.excerpt}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 grid-cols-2 gap-6">
        {builds.map((b, idx) => (
          <JournalCard
            key={idx}
            category="EXPERIMENT"
            date={b.date}
            title={b.title}
            description={b.description}
          />
        ))}
      </section>
    </section>
  );
}
