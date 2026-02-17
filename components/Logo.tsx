"use client";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Logo() {
  return <h1 className={`${playfair.className} text-2xl`}>Roqeeb</h1>;
}
