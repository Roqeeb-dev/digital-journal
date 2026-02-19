"use client";

import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideLinks = [
  { text: "Overview", to: "/" },
  { text: "Journal", to: "/journal" },
  { text: "Notes", to: "/notes" },
  { text: "Builds", to: "/builds" },
  { text: "Deep Dives", to: "/deep-dives" },
  { text: "Drafts", to: "/drafts" },
  { text: "Settings", to: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen border-r border-stone-200 bg-[#f5f0e8] flex flex-col px-5 py-7">
      {/* Logo */}
      <div className="mb-8 pb-6 border-b border-stone-200">
        <Logo />
        <p className="text-xs tracking-widest uppercase text-stone-400 mt-1">
          Creative Studio
        </p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {sideLinks.map(({ text, to }, idx) => {
          const href = to === "/" ? "/dashboard" : `/dashboard${to}`;
          const isActive = pathname === href;

          return (
            <Link
              key={idx}
              href={href}
              className={`group flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-all duration-150 ${
                isActive
                  ? "bg-stone-200/70 text-stone-800 font-medium"
                  : "text-stone-500 hover:text-stone-800 hover:bg-stone-300/60"
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full shrink-0 transition-all duration-150 ${
                  isActive
                    ? "bg-amber-600"
                    : "bg-transparent group-hover:bg-stone-400"
                }`}
              />
              {text}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="pt-6 border-t border-stone-200">
        <p className="text-xs text-stone-300 tracking-widest uppercase">
          Author only
        </p>
      </div>
    </aside>
  );
}
