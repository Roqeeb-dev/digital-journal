"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/hooks/useForm";

export default function RegisterClient() {
  const { values, update } = useForm({ username: "", password: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.replace("/dashboard");
  }

  const fields = [
    { key: "username" as const, label: "Username", type: "text" },
    { key: "password" as const, label: "Password", type: "password" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f0e8] px-5">
      <section className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3 font-light">
            Digital Journal
          </p>
          <h1 className="text-4xl text-stone-800 leading-tight font-serif">
            Join as
            <br />
            <em className="text-stone-500 font-normal">an author.</em>
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map(({ key, label, type }) => (
            <div key={key} className="relative">
              <label
                className={`absolute left-0 tracking-widest uppercase transition-all duration-200 ${
                  focusedField === key || values[key]
                    ? "top-0 text-[10px] text-amber-700 opacity-100"
                    : "top-4 text-xs text-stone-400 opacity-60"
                }`}
              >
                {label}
              </label>
              <input
                type={type}
                value={values[key]}
                onChange={(e) => update(key, e.target.value)}
                onFocus={() => setFocusedField(key)}
                onBlur={() => setFocusedField(null)}
                className={`w-full pt-6 pb-2 bg-transparent border-0 border-b text-stone-800 text-base outline-none transition-colors duration-200 placeholder-transparent font-serif caret-amber-800 ${
                  focusedField === key ? "border-amber-800" : "border-[#d6cfc4]"
                }`}
                placeholder={label}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors duration-200 bg-stone-950 hover:bg-stone-800 text-[#f5f0e8] font-serif"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-muted-text text-center leading-relaxed">
          A new voice joining the journal.{" "}
          <span className="italic">Every story deserves to be told.</span>
        </p>
      </section>
    </main>
  );
}
