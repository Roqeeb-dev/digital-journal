import Hero from "@/components/Hero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import ThoughtStream from "@/components/ThoughtStream";

export const metadata = {
  title: "Home | Digital Journal",
  description:
    "Capture, organize, and explore your thoughts with my intuitive digital journal app.",
  keywords: ["digital journal", "notes", "thoughts", "journal app"],
  authors: [{ name: "Roqeeb" }],
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <CurrentlyExploring />
      <ThoughtStream />
    </main>
  );
}
