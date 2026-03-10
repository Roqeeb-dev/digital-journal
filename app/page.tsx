import Hero from "@/components/Hero";
import NoteCard from "@/components/NoteCard";
import JournalCard from "@/components/JournalCard";
import { data } from "@/lib/data";
import { supabase } from "@/lib/supabase";

await supabase.auth.signOut();

export const metadata = {
  title: "Home | Ink",
  description:
    "A minimal platform for thoughtful writing. Explore notes, deep dives, and essays.",
  keywords: ["writing platform", "blog", "notes", "articles"],
  authors: [{ name: "Roqeeb" }],
};

export default function Home() {
  const notes = data.filter((post) => post.category === "note").slice(0, 1);
  const deepDives = data
    .filter((post) => post.category === "deep-dive")
    .slice(0, 1);
  const articles = data
    .filter((post) => post.category === "article")
    .slice(0, 1);

  return (
    <main className="max-w-6xl mx-auto px-5 md:px-3">
      <Hero />

      <section className="mt-16">
        <h2 className="text-sm uppercase tracking-widest text-muted-text mb-6">
          Featured
        </h2>

        {articles.map((post) => (
          <JournalCard key={post._id} post={post} />
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-sm uppercase tracking-widest text-muted-text mb-6">
          Notes
        </h2>

        {notes.map((post) => (
          <NoteCard key={post._id} post={post} />
        ))}
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-sm uppercase tracking-widest text-muted-text mb-6">
          Deep Dives
        </h2>

        {deepDives.map((post) => (
          <NoteCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  );
}
