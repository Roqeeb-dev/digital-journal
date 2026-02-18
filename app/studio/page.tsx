import SectionHero from "@/components/SectionHero";
import Tools from "@/components/Tools";
import CurrentStack from "@/components/CurrentStack";
import Inspirations from "@/components/Inspirations";
import CurrentExperiment from "@/components/CurrentExperiment";

export const metadata = {
  title: "Studio | Digital Journal",
  description:
    "A look inside the creative environment. What I use, what inspires me, and what I'm currently tinkering with.",
};

export default function Studio() {
  return (
    <main className="max-w-6xl mx-auto px-5 md:px-2">
      <SectionHero
        pillText="Studio"
        headingText="Personal workspace & Tools"
        paragraphText="A look inside the creative environment. What I use, what inspires me, and what I'm currently tinkering with."
      />
      <Tools />
      <CurrentStack />
      <Inspirations />
      <CurrentExperiment />
    </main>
  );
}
