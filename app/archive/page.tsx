import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Archive | Digital Journal",
  description: "Everything, chronologically. A map of where the mind has been.",
};

export default function Archive() {
  return (
    <main>
      <SectionHero
        pillText="Archive"
        headingText="Timeline & memory trail"
        paragraphText="Everything, chronologically. A map of where the mind has been."
      />
    </main>
  );
}
