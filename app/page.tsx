import Hero from "@/components/Hero";

export const metadata = {
  title: "Home | Digital Journal",
  description:
    "Capture, organize, and explore your thoughts with my intuitive digital journal app.",
  keywords: ["digital journal", "notes", "thoughts", "journal app"],
  authors: [{ name: "Roqeeb" }],
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
