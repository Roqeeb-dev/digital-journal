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
    <section className="max-w-6xl mx-auto my-20 px-3 md:px-1">
      <PillText text={pillText} />
      <SectionHeading text={headingText} />
      <p className="text-lg md:text-xl/7 max-w-2xl text-secondary-text leading-relaxed">
        {paragraphText}
      </p>
    </section>
  );
}
