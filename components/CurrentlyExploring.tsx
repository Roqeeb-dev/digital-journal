import PillText from "./PillText";
import SectionHeading from "./SectionHeading";

export default function CurrentlyExploring() {
  return (
    <section className="p-8 md:p-10 border border-secondary-text/10 rounded-2xl bg-soft-highlight/30 max-w-2xl">
      <PillText text="Currently Exploring" />

      <SectionHeading text="Advanced Next.js Architecture & SEO" />

      {/* Subtle divider */}
      <div className="w-8 h-px bg-gray-300 mb-5" />

      <p className="text-base md:text-lg leading-[1.85] text-gray-500 max-w-lg font-light">
        Deep diving into metadata systems, dynamic rendering strategies, and the
        art of making fast things feel even faster.
      </p>
    </section>
  );
}
