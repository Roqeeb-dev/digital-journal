import SectionHero from "@/components/SectionHero";
import { buildData } from "@/lib/buildData";
import BuildCard from "@/components/BuildCard";

export const metadata = {
  title: "Builds | Digital Journal",
  description: "Things I'm building, breaking, and learning from.",
};

export default function Builds() {
  return (
    <main className="max-w-6xl mx-auto">
      <SectionHero
        pillText="Builds"
        headingText="Experiments & Mini Projects"
        paragraphText="Things I'm building, breaking, and learning from."
      />

      <section className="px-3 md:px-1 grid gri-cols-1 md:grid-cols-2 gap-6">
        {buildData.map((b, idx) => (
          <BuildCard
            key={idx}
            date={b.date}
            title={b.title}
            description={b.description}
            technologies={b.technologies}
            status={b.status}
          />
        ))}
      </section>
    </main>
  );
}
