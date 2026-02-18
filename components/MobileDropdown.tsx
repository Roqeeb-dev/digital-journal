import type { LinkProp } from "./Navbar";
import Link from "next/link";

interface DropdownProps {
  links: LinkProp[];
  isOpen: boolean;
}

export default function MobileDropdown({ links, isOpen }: DropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Right Slide Drawer */}
      <section
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white z-50 p-6 flex flex-col transform transition-transform duration-300 ease-out shadow-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 mt-10">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.to}
              className="text-xl font-medium text-yellow-700 tracking-tight hover:bg-accent transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
