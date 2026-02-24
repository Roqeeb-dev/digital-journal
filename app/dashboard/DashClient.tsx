"use client";

import Link from "next/link";
import PillText from "@/components/PillText";
import SectionHeading from "@/components/SectionHeading";
import { useJournalStore } from "@/store/useJournalStore";
import { buildData } from "@/lib/buildData";
import { FileText, Layers, BookOpen, Plus } from "lucide-react";

export default function DashClient() {
  const journals = useJournalStore((state) => state.journals);

  const noteCount = journals.filter((j) => j.category === "note").length;
  const deepDiveCount = journals.filter(
    (j) => j.category === "deep-dive",
  ).length;
  const buildCount = buildData.length;

  const stats = [
    {
      label: "Notes",
      value: noteCount,
      desc: "Quick thoughts and observations",
      icon: FileText,
    },
    {
      label: "Builds",
      value: buildCount,
      desc: "Projects and experiments",
      icon: Layers,
    },
    {
      label: "Deep Dives",
      value: deepDiveCount,
      desc: "Long-form essays and research",
      icon: BookOpen,
    },
  ];

  return (
    <main className="px-10 pt-10 pb-24 max-w-7xl mx-auto">
      <PillText text="Dashboard" />

      {/* Header */}
      <div className="flex items-center justify-between mt-2">
        <SectionHeading text="Overview" />

        <Link
          href="/dashboard/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent text-white text-sm hover:opacity-90 transition"
        >
          <Plus size={16} />
          New Entry
        </Link>
      </div>

      <p className="text-sm text-secondary-text mt-1">
        Manage your workspace and content
      </p>

      {/* Stats */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-surface border border-divider flex items-start justify-between"
            >
              <div>
                <p className="text-sm text-muted-text">{item.label}</p>
                <p className="text-2xl font-semibold mt-1 text-primary-text">
                  {item.value}
                </p>
                <p className="text-xs text-muted-text mt-1 max-w-[16rem]">
                  {item.desc}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-soft-highlight">
                <Icon size={18} className="text-primary-accent" />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
