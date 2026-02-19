import PillText from "./PillText";
import SectionHeading from "./SectionHeading";

export default function CurrentlyExploring() {
  return (
    <section className="p-6 border border-secondary-text/10 rounded-md bg-soft-highlight">
      <PillText text="Currently Exploring" />

      <SectionHeading text="Advanced Next.js Architecture & SEO" />

      <p className="text-md md:text-xl/8 text-secondary-text max-w-xl">
        Deep diving into metadata systems, dynamic rendering strategies, and the
        art of making fast things feel even faster.
      </p>
    </section>
  );
}
