import type { LinkProp } from "./Navbar";
import Link from "next/link";
import { X } from "lucide-react";

interface DropdownProps {
  links: LinkProp[];
  isOpen: boolean;
  onclose: () => void;
}

export default function MobileDropdown({
  links,
  isOpen,
  onclose,
}: DropdownProps) {
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
        onClick={onclose}
      />

      {/* Slide-in Drawer */}
      <section
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white rounded-l-2xl z-50 p-6 flex flex-col transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-lg font-semibold text-primary-text">Menu</h2>
          <button
            onClick={onclose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={20} className="text-primary-accent" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.to}
              onClick={onclose}
              className="text-primary-text rounded-lg px-3 py-2 hover:bg-primary-accent/10 hover:translate-x-1 transition-all duration-200"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
