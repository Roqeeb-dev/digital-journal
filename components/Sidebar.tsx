"use client";

import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideLinks = [
  { text: "Overview", to: "/" },
  { text: "Journal", to: "/journal" },
  { text: "Notes", to: "/notes" },
  { text: "Builds", to: "/builds" },
  { text: "Deep dives", to: "/deep-dives" },
  { text: "Drafts", to: "/drafts" },
  { text: "Settings", to: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <main className="w-64 border-r border-gray-200 p-4">
      <section className="mb-6">
        <Logo />
        <p className="text-sm/5 text-secondary-text">Creative Studio</p>
      </section>

      <section className="flex flex-col justify-center gap-2">
        {sideLinks.map(({ text, to }, idx) => {
          const isActive = pathname === to;

          return (
            <Link
              key={idx}
              href={`/dashboard${to}`}
              className={`inline-block p-2 hover:bg-gray-200 hover:text-primary-text rounded-md text-secondary-text ${
                isActive ? "bg-soft-highlight text-red-700" : ""
              }`}
            >
              {text}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
