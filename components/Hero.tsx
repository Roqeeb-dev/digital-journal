"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import PillText from "./PillText";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function Hero() {
  return (
    <main className="max-w-6xl mx-auto px-5 md:px-3 py-10 md:py-15">
      <PillText text="Digital Journal & Creative studio" />
      <h1
        className={`${playfair.className} text-4xl md:text-6xl my-6 md:my-10 font-bold`}
      >
        Roqeeb
      </h1>
      <p className="text-lg md:text-xl/7 max-w-2xl text-secondary-text leading-relaxed">
        A living archive of what I build, learn, question,{" "}
        <br className="hidden md:block" /> and understand — from frontend
        engineering to quiet reflections.
      </p>
      <div className="mt-6 md:mt-7">
        <Link
          href="/notes"
          className="text-primary-accent text-md hover:text-primary-accent/70"
        >
          Enter journal &rarr;
        </Link>
      </div>
    </main>
  );
}
