"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileDropdown from "./MobileDropdown";

export interface LinkProp {
  text: string;
  to: string;
}

export default function Navbar() {
  const links: LinkProp[] = [
    { text: "Journal", to: "/" },
    { text: "Notes", to: "/notes" },
    { text: "Builds", to: "/builds" },
    { text: "Deep Dives", to: "/deep-dives" },
    { text: "Archive", to: "/archive" },
    { text: "Studio", to: "/studio" },
    { text: "Login", to: "/login" },
  ];
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const pathname = usePathname();

  function toggleDropdown() {
    setIsDropdownShown(!isDropdownShown);
  }

  return (
    <header className="relative px-4 md:px-8 max-w-7xl mx-auto backdrop-blur-sm bg-white/80 sticky top-0 py-4 md:py-5 flex items-center justify-between border-b border-gray-100 z-50">
      <Logo />

      <nav className="hidden md:flex items-center gap-7">
        {links.map((link, idx) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={idx}
              href={link.to}
              className={`text-sm transition-colors duration-200 ${
                isActive
                  ? "text-black font-medium"
                  : "text-[#5F5F5F] hover:text-black"
              }`}
            >
              {link.text}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu */}
      {!isDropdownShown ? (
        <Menu
          className="flex md:hidden p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          size={28}
          strokeWidth={1.5}
          onClick={toggleDropdown}
        />
      ) : (
        <X
          className="flex md:hidden p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          size={28}
          strokeWidth={1.5}
          onClick={toggleDropdown}
        />
      )}

      <MobileDropdown
        links={links}
        isOpen={isDropdownShown}
        onclose={() => setIsDropdownShown(false)}
      />
    </header>
  );
}
