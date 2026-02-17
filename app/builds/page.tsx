import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Builds | Digital Journal",
  description: "Things I'm building, breaking, and learning from.",
};

export default function Builds() {
  return (
    <main>
      <SectionHero
        pillText="Builds"
        headingText="Experiments & Mini Projects"
        paragraphText="Things I'm building, breaking, and learning from."
      />
    </main>
  );
}
