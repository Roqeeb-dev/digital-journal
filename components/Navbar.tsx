"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

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
    <header className="sticky top-0 max-w-6xl mx-auto py-10 flex items-center justify-between border-b border-gray-200">
      <Logo />

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
