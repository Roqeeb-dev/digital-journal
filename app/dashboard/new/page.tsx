import Link from "next/link";
import { ChevronLeft, ChevronDown } from "lucide-react";

export const metadata = {
  title: "New Entry | Dashboard",
  description: "Create a new journal entry.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-10 pt-8 pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/dashboard"
          className="flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition"
        >
          <ChevronLeft size={14} />
          <span>Dashboard · New entry</span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm rounded border border-stone-300 text-stone-500 bg-transparent hover:bg-stone-200 transition">
            Save draft
          </button>
          <button className="px-4 py-1.5 text-sm rounded bg-orange-700 text-white hover:bg-orange-800 transition">
            Publish
          </button>
          <button className="px-4 py-1.5 text-sm text-stone-500 hover:text-stone-700 transition">
            Hide details
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
        {/* Writing Area */}
        <div>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-transparent text-5xl font-serif text-stone-700 placeholder:text-stone-300 focus:outline-none leading-tight"
          />
          <input
            type="text"
            placeholder="Subtitle or short description..."
            className="w-full bg-transparent mt-4 text-base text-stone-400 placeholder:text-stone-300 focus:outline-none"
          />
          <div className="border-b border-stone-300 mt-6 mb-8" />
          <textarea
            placeholder="Start writing..."
            className="w-full min-h-[60vh] bg-transparent resize-none text-base leading-relaxed text-stone-600 placeholder:text-stone-300 focus:outline-none"
          />
        </div>

        {/* Details Panel */}
        <aside className="space-y-5">
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            Details
          </h3>

          <Field label="Slug">
            <input
              type="text"
              defaultValue="post-slug"
              className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-transparent focus:outline-none focus:border-stone-400"
            />
          </Field>

          <Field label="Category">
            <div className="relative">
              <select className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-stone-100 focus:outline-none focus:border-stone-400 appearance-none cursor-pointer pr-8">
                <option>Notes</option>
                <option>Builds</option>
                <option>Deep Dives</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
            </div>
          </Field>

          <Field label="Status">
            <div className="relative">
              <select className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-stone-100 focus:outline-none focus:border-stone-400 appearance-none cursor-pointer pr-8">
                <option>Draft</option>
                <option>Published</option>
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
              defaultValue="creativity, process, reflection"
              className="w-full px-3 py-2 text-sm text-stone-600 border border-stone-300 rounded bg-transparent focus:outline-none focus:border-stone-400 placeholder:text-stone-300"
            />
          </Field>

          <div className="flex items-center justify-between pt-4">
            <span className="text-sm text-stone-500">Featured</span>
            <div className="h-6 w-11 rounded-full bg-stone-300 relative cursor-pointer">
              <div className="absolute top-1 left-1 h-4 w-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
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
