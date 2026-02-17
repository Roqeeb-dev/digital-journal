import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Deep Dives | Digital Journal",
  description: "Extended thinking on topics that deserve more than a note.",
};

export default function DeepDives() {
  return (
    <main>
      <SectionHero
        pillText="Deep Dives"
        headingText="Long form explorations"
        paragraphText="Extended thinking on topics that deserve more than a note."
      />
    </main>
  );
}
