import { data } from "@/lib/data";
import type { Metadata } from "next";
import JournalClient from "./JournalClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const journal = data.find((d) => d.id === Number(id));

  if (!journal) {
    return {
      title: "Content Not Found — Roqeeb",
      description: "The requested journal entry does not exist.",
    };
  }

  return {
    title: `${journal.title} — Roqeeb`,
    description: journal.excerpt,
    keywords: journal.tags.join(", "),
    openGraph: {
      title: journal.title,
      description: journal.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: journal.title,
      description: journal.excerpt,
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <JournalClient id={id} />;
}
