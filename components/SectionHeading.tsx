"use client";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function SectionHeading({ text }: { text: string }) {
  return (
    <h1
      className={`text-2xl md:text-4xl mt-3 mb-0 leading-tight tracking-tight ${playfair.className}`}
    >
      {text}
    </h1>
  );
}
