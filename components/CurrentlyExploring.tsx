import PillText from "./PillText";

export default function CurrentlyExploring() {
  return (
    <section className="max-w-6xl mx-auto p-6 border border-secondary-text/20 rounded-md bg-soft-highlight">
      <PillText text="Currently Exploring" />
      <h1>Advanced Next.js Architecture & SEO</h1>
      <p>
        Deep diving into metadata systems, dynamic rendering strategies, and the
        art of making fast things feel even faster.
      </p>
    </section>
  );
}
