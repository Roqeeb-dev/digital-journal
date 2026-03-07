import { Playfair_Display } from "next/font/google";
import Link from "next/link";

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
    <Link href={`/${category}s`}>
      <article className="border border-secondary-text/10 bg-[#f6f4f0] rounded-xl p-6 sm:p-8 mb-5 transition-all duration-300 cursor-pointer group hover:border-gray-300 hover:shadow-sm">
        <div className="flex items-center gap-2.5 text-xs tracking-widest uppercase text-muted-text">
          <span>{category}</span>
          <span className="w-1 h-1 rounded-full bg-muted-text/30" />
          <span>{date}</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-primary-text mt-4 mb-3 transition-colors duration-300 group-hover:text-yellow-600">
          {title}
        </h3>

        <p className="text-secondary-text text-sm sm:text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      </article>
    </Link>
  );
}
