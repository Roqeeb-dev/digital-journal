"use client";

import PillText from "./PillText";
import { inspirationsData } from "@/lib/studioData";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Inspirations() {
  return (
    <section>
      <PillText text="People Who Inspire Me" />

      <div className="mt-5">
        {inspirationsData.map((obj, idx) => (
          <div
            key={idx}
            className="flex items-start md:items-center justify-between gap-8 border-b border-gray-100 py-5"
          >
            <p className={`${playfair.className} text-xl shrink-0`}>
              {obj.people}
            </p>
            <p className="text-secondary-text text-sm leading-relaxed text-right">
              {obj.fact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
