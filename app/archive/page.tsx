import SectionHero from "@/components/SectionHero";

export const metadata = {
  title: "Archive | Digital Journal",
  description: "Everything, chronologically. A map of where the mind has been.",
};

const entries = [
  {
    month: "February 2026",
    items: [
      { date: "Feb 14", type: "Note", title: "On the beauty of constraint" },
      { date: "Feb 10", type: "Build", title: "Interactive Scroll Canvas" },
      {
        date: "Feb 7",
        type: "Note",
        title: "React Server Components changed how I think",
      },
      {
        date: "Feb 3",
        type: "Deep Dive",
        title: "The Architecture of Calm Software",
      },
    ],
  },
  {
    month: "January 2026",
    items: [
      {
        date: "Jan 29",
        type: "Note",
        title: "A tiny CSS trick I keep forgetting",
      },
      { date: "Jan 24", type: "Build", title: "Generative Color Palette Tool" },
      {
        date: "Jan 18",
        type: "Deep Dive",
        title: "Why I stopped using useEffect for data fetching",
      },
      { date: "Jan 11", type: "Note", title: "The case for boring technology" },
      { date: "Jan 5", type: "Build", title: "Minimal Markdown Editor" },
    ],
  },
  {
    month: "December 2025",
    items: [
      {
        date: "Dec 28",
        type: "Note",
        title: "End of year, beginning of clarity",
      },
      { date: "Dec 19", type: "Deep Dive", title: "Design tokens done right" },
      { date: "Dec 12", type: "Build", title: "Animated SVG Wave Generator" },
      { date: "Dec 4", type: "Note", title: "On shipping imperfect things" },
    ],
  },
  {
    month: "November 2025",
    items: [
      {
        date: "Nov 27",
        type: "Deep Dive",
        title: "The hidden cost of abstraction",
      },
      {
        date: "Nov 20",
        type: "Build",
        title: "Pomodoro Timer with Ambient Sound",
      },
      { date: "Nov 13", type: "Note", title: "Writing as a thinking tool" },
      {
        date: "Nov 6",
        type: "Note",
        title: "How I structure my side projects",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  Note: "text-stone-500",
  Build: "text-amber-700",
  "Deep Dive": "text-amber-800",
};

export default function Archive() {
  return (
    <main className="px-5 lg:px-2 max-w-6xl mx-auto">
      <SectionHero
        pillText="Archive"
        headingText="Timeline & memory trail"
        paragraphText="Everything, chronologically. A map of where the mind has been."
      />

      <div className="mt-12 pb-24 space-y-16">
        {entries.map((group) => (
          <section key={group.month}>
            <h2 className="text-lg font-semibold text-stone-800 mb-6 italic">
              {group.month}
            </h2>
            <div className="divide-y divide-stone-200">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[80px_100px_1fr] gap-4 py-4 items-baseline hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm text-stone-400">{item.date}</span>
                  <span
                    className={`text-sm font-medium ${typeColors[item.type] ?? "text-stone-500"}`}
                  >
                    {item.type}
                  </span>
                  <span className="text-base text-stone-800">{item.title}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
