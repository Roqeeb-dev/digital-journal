"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/Dialog";
import { useForm } from "@/hooks/useForm";
import { login } from "@/services/authService";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginClient() {
  const { values, update } = useForm({
    email: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      const res = await login(values.email, values.password);
      setUser(res.user);

      router.replace("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
      setIsShown(true);
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    { key: "email" as const, label: "Email", type: "email" },
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
            Welcome
            <br />
            <em className="text-stone-500 font-normal">back.</em>
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
            disabled={loading}
            className="w-full mt-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors duration-200 bg-stone-950 hover:bg-stone-800 text-[#f5f0e8] font-serif disabled:opacity-60"
          >
            {loading ? "Entering..." : "Enter"}
          </button>
        </form>

        <p className="mt-4 text-sm text-muted-text text-center leading-relaxed">
          This is a private space — for authors only.{" "}
          <span className="italic">Not all paths are meant to be shared.</span>
        </p>

        <Dialog
          isOpen={isShown}
          onClose={() => setIsShown(false)}
          variant="error"
          title="Login Failed"
          description={error || "Invalid email or password."}
        />
      </section>
    </main>
  );
}
