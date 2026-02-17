"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";

// Import Google Font
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const links = [
    { text: "Journal", to: "/" },
    { text: "Notes", to: "/notes" },
    { text: "Builds", to: "/builds" },
    { text: "Deep Dives", to: "/deep-dives" },
    { text: "Archive", to: "/archive" },
    { text: "Studio", to: "/studio" },
  ];

  const pathname = usePathname();

  return (
    <header className="max-w-6xl mx-auto py-10 flex items-center justify-between border-b border-gray-200">
      <h1 className={`${playfair.className} text-2xl`}>Roqeeb</h1>

      <nav className="flex items-center gap-8">
        {links.map((link, idx) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={idx}
              href={link.to}
              className={
                isActive ? "text-black" : "text-[#5F5F5F] hover:text-black"
              }
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
