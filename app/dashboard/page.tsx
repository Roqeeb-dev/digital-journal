import Link from "next/link";
import PillText from "@/components/PillText";
import SectionHeading from "@/components/SectionHeading";
import { FileText, Layers, BookOpen, Edit3, Plus } from "lucide-react";

export const metadata = {
  title: "Overview | Dashboard",
  description:
    "Your creative command center — manage journal entries, notes, builds, and deep dives.",
};

const stats = [
  {
    label: "Notes",
    value: 24,
    desc: "Quick thoughts and observations",
    icon: FileText,
  },
  {
    label: "Builds",
    value: 8,
    desc: "Projects and experiments",
    icon: Layers,
  },
  {
    label: "Deep Dives",
    value: 12,
    desc: "Long-form essays and research",
    icon: BookOpen,
  },
  {
    label: "Drafts",
    value: 16,
    desc: "Unfinished pieces in progress",
    icon: Edit3,
  },
];

const recent = [
  {
    title: "On the nature of creative constraints",
    category: "Deep Dives",
    date: "Feb 19",
  },
  {
    title: "Building a personal creative system",
    category: "Builds",
    date: "Feb 18",
  },
  {
    title: "Notes from morning walk",
    category: "Notes",
    date: "Feb 17",
  },
  {
    title: "Redesigning the studio workflow",
    category: "Builds",
    date: "Feb 16",
  },
  {
    title: "The art of digital journaling",
    category: "Deep Dives",
    date: "Feb 14",
  },
];

export default function Dashboard() {
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

      {/* Recent Activity */}
      <section className="mt-16">
        <h2 className="text-sm font-medium text-secondary-text mb-5">
          Recent Activity
        </h2>

        <div className="rounded-2xl bg-surface border border-divider divide-y divide-divider">
          {recent.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-7 py-5 hover:bg-soft-highlight/40 transition"
            >
              <div>
                <p className="text-sm font-medium text-primary-text">
                  {item.title}
                </p>
                <p className="text-xs text-muted-text mt-1">{item.category}</p>
              </div>

              <p className="text-xs text-muted-text">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
