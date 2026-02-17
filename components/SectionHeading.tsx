"use client";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function SectionHeading({ text }: { text: string }) {
  return <h1 className={`${playfair.className} text-3xl my-4`}>{text}</h1>;
}
