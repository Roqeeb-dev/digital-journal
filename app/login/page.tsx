"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/Dialog";

export default function Login() {
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();

  const isAuthor = password.trim() === process.env.NEXT_PUBLIC_AUTHOR_PASSWORD;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isAuthor) {
      router.replace("/dashboard");
    } else {
      setIsShown(true);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f0e8] px-5">
      <section className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3 font-light">
            Digital Journal
          </p>
          <h1 className="text-4xl text-stone-800 leading-tight font-serif">
            Welcome
            <br />
            <em className="text-stone-500 font-normal">back.</em>
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-5"
        >
          <div className="relative">
            <label
              className={`absolute left-0 tracking-widest uppercase transition-all duration-200 ${
                focused || password
                  ? "top-0 text-[10px] text-amber-700 opacity-100"
                  : "top-4 text-xs text-stone-400 opacity-60"
              }`}
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`w-full pt-6 pb-2 bg-transparent border-0 border-b text-stone-800 text-base outline-none transition-colors duration-200 placeholder-transparent font-serif caret-amber-800 ${
                focused ? "border-amber-800" : "border-[#d6cfc4]"
              }`}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors duration-200 bg-stone-950 hover:bg-stone-800 text-[#f5f0e8] font-serif"
          >
            Enter
          </button>
        </form>

        <p className="mt-4 text-sm text-muted-text text-center leading-relaxed">
          This is a private space — for the author only.{" "}
          <span className="italic">Not all paths are meant to be shared.</span>
        </p>

        <Dialog
          isOpen={isShown}
          onClose={() => setIsShown(false)}
          variant="error"
          title="Unauthorized Attempt"
          description="This action is reserved for the author alone"
        />
      </section>
    </main>
  );
}
