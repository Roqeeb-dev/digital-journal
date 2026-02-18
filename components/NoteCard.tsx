interface CardProps {
  date: string;
  readingTime: string;
  title: string;
  excerpt: string;
}

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function NoteCard({
  date,
  readingTime,
  title,
  excerpt,
}: CardProps) {
  return (
    <section className="py-8 md:py-10 border-b border-divider hover:border-gray-300 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3 text-muted-text mb-5">
        <time className="text-xs md:text-sm font-mono tracking-wide">
          {date}
        </time>
        <span className="text-muted-text/40">•</span>
        <p className="text-xs md:text-sm">{readingTime}</p>
      </div>

      <h3
        className={`${playfair.className} text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-primary-text group-hover:text-yellow-600 transition-colors leading-snug`}
      >
        {title}
      </h3>

      <p className="text-secondary-text text-base md:text-lg leading-relaxed max-w-2xl">
        {excerpt}
      </p>
    </section>
  );
}
