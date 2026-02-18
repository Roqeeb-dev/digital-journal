"use client";

import PillText from "./PillText";
import { inspirationsData } from "@/lib/studioData";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Inspirations() {
  return (
    <section>
      <PillText text="People Who Inspire Me" />

      <div className="my-5">
        {inspirationsData.map((obj, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-gray-200 py-6"
          >
            <p className={`${playfair.className} text-xl`}>{obj.people}</p>
            <p className="text-secondary-text text-sm">{obj.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
