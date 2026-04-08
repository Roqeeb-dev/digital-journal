"use client";

import { Pen } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Pen className="h-5 w-5 text-neutral-800" strokeWidth={1.5} />

      <span
        className={`${playfair.className} text-xl tracking-tight text-neutral-900`}
      >
        Ink
      </span>
    </div>
  );
}
