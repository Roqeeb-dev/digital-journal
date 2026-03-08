import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Post } from "@/models/Post";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });

interface NoteCardProps {
  post: Post;
}

export default function NoteCard({ post }: NoteCardProps) {
  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const readingTime = `${post.readingTime ?? 1} min read`;

  return (
    <Link href={`/post/${post.slug}`}>
      <section className="py-8 md:py-10 border-b border-divider hover:border-gray-300 transition-colors cursor-pointer group">
        <div className="flex items-center gap-2.5 text-muted-text mb-4">
          <time className="text-xs font-mono tracking-wider uppercase">
            {date}
          </time>

          <span className="text-muted-text/30 text-xs">•</span>

          <p className="text-xs tracking-wide">{readingTime}</p>
        </div>

        <h3
          className={`${playfair.className} text-xl md:text-2xl lg:text-3xl mb-2.5 text-primary-text group-hover:text-yellow-600 transition-colors duration-200 leading-snug`}
        >
          {post.title}
        </h3>

        <p className="text-secondary-text text-sm md:text-base leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
      </section>
    </Link>
  );
}
