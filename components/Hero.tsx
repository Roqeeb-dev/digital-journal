"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import PillText from "./PillText";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function Hero() {
  return (
    <main className="py-16 md:py-24 px-4 max-w-3xl">
      {/* Pill */}
      <PillText text="Digital Journal & Creative Studio" />

      {/* Name */}
      <h1
        className={`font-serif text-6xl md:text-8xl mt-8 mb-6 font-bold tracking-tight leading-[1.05] ${playfair.className}`}
      >
        Write. Think. Publish
      </h1>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/notes"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900 border-b border-gray-900/30 pb-0.5 hover:border-gray-900 transition-all duration-200"
        >
          Enter journal
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
