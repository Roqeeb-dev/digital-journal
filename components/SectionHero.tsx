interface HeroProps {
  pillText: string;
  headingText: string;
  paragraphText: string;
}

import PillText from "./PillText";
import SectionHeading from "./SectionHeading";

export default function SectionHero({
  pillText,
  headingText,
  paragraphText,
}: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto mt-16 mb-20">
      <PillText text={pillText} />

      <SectionHeading text={headingText} />

      <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl text-secondary-text">
        {paragraphText}
      </p>
    </section>
  );
}
