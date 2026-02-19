"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-sm border border-gray-200 rounded-sm hover:bg-gray-200 transition-color duration-300 flex items-center space-x-3 py-1 px-3"
    >
      <ArrowLeft size={18} /> <span>Go back</span>
    </button>
  );
}
