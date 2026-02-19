"use client";

import { Playfair_Display } from "next/font/google";

const details = [
  { count: 24, text: "Notes" },
  { count: 23, text: "Builds" },
  { count: 51, text: "Deepdives" },
];
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function Dashboxes() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {details.map((d, idx) => (
        <div
          key={idx}
          className="px-6 py-4 border border-gray-300 rounded-lg bg-surface/20"
        >
          <p className={`${playfair.className} text-2xl mb-1`}>{d.count}</p>
          <p className="text-sm text-secondary-text">{d.text}</p>
        </div>
      ))}
    </section>
  );
}
