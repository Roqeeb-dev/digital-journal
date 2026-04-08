import Logo from "./Logo";

export default function Footer() {
  const socialLinks = [
    { text: "Github", to: "https://github.com/Roqeeb-dev" },
    {
      text: "LinkedIn",
      to: "https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/",
    },
    { text: "Email", to: "mailto:shafiriyuroqeeb@gmail.com" },
  ];

  return (
    <footer className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-gray-200">
      <section className="space-y-1">
        <Logo />
        <p className="text-sm text-secondary-text tracking-wide">
          Digital Journal & Creative Studio
        </p>
      </section>

      <nav className="flex items-center gap-6">
        {socialLinks.map(({ text, to }, idx) => (
          <a
            key={idx}
            href={to}
            className="text-sm text-[#5F5F5F] hover:text-black transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        ))}
      </nav>
    </footer>
  );
}
