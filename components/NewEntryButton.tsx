"use client";

import { useRouter } from "next/navigation";

export default function NewEntryButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard/edit")}
      className="bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-yellow-600 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    >
      + New Entry
    </button>
  );
}
