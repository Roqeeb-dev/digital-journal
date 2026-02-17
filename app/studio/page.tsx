import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Studio | Digital Journal",
  description:
    "A look inside the creative environment. What I use, what inspires me, and what I'm currently tinkering with.",
};

export default function Studio() {
  return (
    <main>
      <SectionHero
        pillText="Studio"
        headingText="Personal workspace & Tools"
        paragraphText="A look inside the creative environment. What I use, what inspires me, and what I'm currently tinkering with."
      />
    </main>
  );
}
