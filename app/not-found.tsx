"use client";

import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Home className="w-20 h-20 text-yellow-700 mb-6 animate-bounce" />

      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>

      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        Go Back to Dashboard
      </Link>
    </section>
  );
}
