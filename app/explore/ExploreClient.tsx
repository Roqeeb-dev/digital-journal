"use client";

import Link from "next/link";

const mockPosts = [
  {
    id: "1",
    title: "The Quiet Power of Solitude",
    excerpt:
      "In moments of stillness we rediscover the parts of ourselves that noise slowly erodes.",
    author: "roqeeb",
    date: "Mar 7, 2026",
    tags: ["reflection", "life"],
  },
  {
    id: "2",
    title: "A Walk Between Thoughts",
    excerpt:
      "There is something about walking without destination that rearranges the mind.",
    author: "sarah",
    date: "Mar 5, 2026",
    tags: ["writing", "mindfulness"],
  },
  {
    id: "3",
    title: "On Building Things Slowly",
    excerpt: "Speed builds momentum, but patience builds things that last.",
    author: "daniel",
    date: "Mar 3, 2026",
    tags: ["coding", "philosophy"],
  },
];

export default function ExploreClient() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] px-8 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">
            Discover
          </p>

          <h1 className="text-5xl font-serif text-stone-800 leading-tight">
            Explore
            <br />
            <span className="italic text-stone-500 font-normal">
              shared thoughts
            </span>
          </h1>
        </header>

        {/* Search */}
        <div className="mb-12 max-w-xl">
          <input
            type="text"
            placeholder="Search journals..."
            className="w-full bg-transparent border-b border-[#d6cfc4] pb-2 outline-none text-stone-700 placeholder:text-stone-400 font-serif"
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-12 gap-16">
          {/* Journal Feed */}
          <section className="col-span-8 space-y-14">
            {mockPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/journal/${post.id}`}>
                  <h2 className="text-3xl font-serif text-stone-800 group-hover:text-amber-700 transition">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-stone-600 mt-4 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-stone-400 mt-4">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <div className="flex gap-3 mt-4">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-xs text-amber-700 hover:underline"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* Sidebar */}
          <aside className="col-span-4">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-5">
                Popular Tags
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "reflection",
                  "life",
                  "writing",
                  "mindfulness",
                  "coding",
                  "growth",
                  "thinking",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="px-3 py-1 text-xs border border-stone-300 text-stone-600 hover:bg-stone-900 hover:text-[#f5f0e8] transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
