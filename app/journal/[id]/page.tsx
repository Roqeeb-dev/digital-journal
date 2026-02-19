"use client";

import { useParams } from "next/navigation";
import BackLink from "@/components/BackLink";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { data } from "@/lib/data";
import { getReadingTime } from "@/utils/getReadingTime";

export default function JournalContent() {
  const params = useParams();
  const { id } = params;
  const selectedJournal = data.find((d) => d.id === Number(id));

  if (!selectedJournal) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-lg text-muted-text">
          Sorry, this content is not ready yet.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm underline text-primary-accent"
        >
          Go back home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Back link */}
      <div className="mb-12">
        <BackLink />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-text mb-6">
        <span>{selectedJournal.createdAt}</span>
        <span>•</span>
        <span>{getReadingTime(selectedJournal.content)} min read</span>
      </div>

      {/* Title */}
      <SectionHeading text={selectedJournal.title} />

      {/* Excerpt */}
      <p className="text-lg leading-relaxed text-secondary-text mb-10 max-w-2xl">
        {selectedJournal.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-14">
        {selectedJournal.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs tracking-wide bg-gray-100 text-secondary-text"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Content */}
      <article className="prose prose-xl prose-neutral max-w-3xl leading-loose tracking-wide prose-p:my-8 prose-headings:mt-16 prose-headings:mb-6 prose-li:my-3 prose-blockquote:my-10 prose-blockquote:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-primary-accent">
        {selectedJournal.content}
      </article>
    </main>
  );
}
