"use client";

import { toolsData } from "@/lib/studioData";
import PillText from "./PillText";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Tools() {
  return (
    <section className="my-5">
      <PillText text="Tools i reach for" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        {toolsData.map(({ tool, subtitle }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between space-x-4 border-b border-gray-200 py-4"
          >
            <p className={`${playfair.className} text-xl`}>{tool}</p>
            <p className="text-secondary-text text-sm italic text-lg">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
