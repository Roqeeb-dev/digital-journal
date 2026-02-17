"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function Hero() {
  return (
    <main className="max-w-6xl mx-auto py-15">
      <p className="uppercase text-secondaryText font-mono">
        Digital Journal & Creative studio
      </p>
      <h1 className={`${playfair.className} text-6xl my-10 font-bold`}>
        Roqeeb
      </h1>
      <p className="text-xl max-w-[550px] text-secondaryText">
        A living archive of what I build, learn, question, and understand — from
        frontend engineering to quiet reflections.
      </p>
      <div className="mt-5">
        <Link href="/" className="text-primaryAccent text-md">
          Enter journal &rarr;
        </Link>
      </div>
    </main>
  );
}
