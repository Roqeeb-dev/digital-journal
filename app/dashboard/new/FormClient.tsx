"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Content } from "@/lib/notesData";
import BackLink from "@/components/BackLink";

export default function FormClient() {
  const [journalDetails, setJournalDetails] = useState<Content>({
    id: new Date().getTime(),
    title: "",
    content: "",
    excerpt: "",
    createdAt: "",
    category: "note",
    tags: ["text"],
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setJournalDetails((prev) => ({
      ...prev,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
  }

  return (
    <main className="min-h-screen max-w-6xl mx-auto bg-stone-100 px-4 lg:px-0 pt-8 pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-12">
        <BackLink />
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm rounded bg-orange-700 text-white hover:bg-orange-800 transition">
            Publish
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
        {/* Writing Area */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={journalDetails.title}
            onChange={handleChange}
            className="w-full bg-transparent text-5xl font-serif text-stone-700 placeholder:text-stone-300 focus:outline-none leading-tight"
          />
          <input
            type="text"
            name="excerpt"
            placeholder="Subtitle or short description..."
            value={journalDetails.excerpt}
            onChange={handleChange}
            className="w-full bg-transparent mt-4 text-base text-stone-400 placeholder:text-stone-300 focus:outline-none"
          />
          <div className="border-b border-stone-300 mt-6 mb-8" />
          <textarea
            placeholder="Start writing..."
            name="content"
            value={journalDetails.content}
            onChange={handleChange}
            className="w-full min-h-[60vh] bg-transparent resize-none text-base leading-relaxed text-stone-600 placeholder:text-stone-300 focus:outline-none"
          />
        </div>

        {/* Details Panel */}
        <aside className="space-y-5">
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            Details
          </h3>

          <Field label="Category">
            <div className="relative">
              <select
                name="category"
                value={journalDetails.category}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-stone-100 focus:outline-none focus:border-stone-400 appearance-none cursor-pointer pr-8"
              >
                <option value="note">Notes</option>
                <option value="build">Builds</option>
                <option value="deep-dive">Deep Dives</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
            </div>
          </Field>

          <Field label="Tags">
            <input
              type="text"
              name="tags"
              placeholder="tag1, tag2, tag3"
              value={journalDetails.tags.join(", ")}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-transparent focus:outline-none focus:border-stone-400 placeholder:text-stone-300"
            />
          </Field>
        </aside>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs text-stone-400">{label}</label>
      {children}
    </div>
  );
}
