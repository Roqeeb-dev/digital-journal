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
    <footer className="max-w-6xl mx-auto px-3 md:px-1 py-10 flex flex-col md:flex-row items-left md:items-center justify-between gap-6 border-t border-gray-200 my-2">
      <section>
        <Logo />
        <p className="text-secondary-text">
          Digital Journal and creative studio
        </p>
      </section>

      {/* right */}
      <nav className="flex items-center gap-8">
        {socialLinks.map(({ text, to }, idx) => (
          <a
            key={idx}
            href={to}
            className="text-[#5F5F5F] hover:text-black"
            target="__blank"
          >
            {text}
          </a>
        ))}
      </nav>
    </footer>
  );
}
