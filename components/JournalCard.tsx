import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "500",
});

export interface JournalCardProps {
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function JournalCard({
  category,
  date,
  title,
  description,
}: JournalCardProps) {
  return (
    <article className="border border-secondary-text/10 bg-[#f6f4f0] rounded-lg p-6 sm:p-8 mb-6 transition-colors duration-300 cursor-pointer group hover:border-gray-300">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-muted-text">
        <span>{category}</span>
        <span className="w-1 h-1 rounded-full bg-muted-text/40" />
        <span>{date}</span>
      </div>

      <h3
        className={`${playfair.className} text-2xl sm:text-3xl leading-tight text-primary-text mt-3 transition-colors duration-300 group-hover:text-yellow-600`}
      >
        {title}
      </h3>

      <p className="text-secondary-text text-sm sm:text-base leading-relaxed mt-3 max-w-3xl">
        {description}
      </p>
    </article>
  );
}
