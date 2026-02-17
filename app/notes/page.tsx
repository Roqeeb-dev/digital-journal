import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Notes | Digital Journal",
  description:
    "Quick thoughts, small discoveries, and things I want to remember.",
};

export default function Notes() {
  return (
    <main>
      <SectionHero
        pillText="Notes"
        headingText="Short Reflections & Learnings"
        paragraphText="Quick thoughts, small discoveries, and things I want to remember."
      />
    </main>
  );
}
