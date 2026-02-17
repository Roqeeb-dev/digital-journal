"use client";

import { Playfair_Display } from "next/font/google";
import PillText from "./PillText";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function CurrentlyExploring() {
  return (
    <section className="max-w-6xl mx-auto p-6 border border-secondary-text/10 rounded-md bg-soft-highlight">
      <PillText text="Currently Exploring" />
      <h1 className={`${playfair.className} text-3xl my-4`}>
        Advanced Next.js Architecture & SEO
      </h1>
      <p className="text-xl/8 text-secondary-text max-w-xl">
        Deep diving into metadata systems, dynamic rendering strategies, and the
        art of making fast things feel even faster.
      </p>
    </section>
  );
}
