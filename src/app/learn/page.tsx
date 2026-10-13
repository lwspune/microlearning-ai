import type { Metadata } from "next";
import Link from "next/link";
import { chapters } from "@/content/chapters";

export const metadata: Metadata = { title: "Learn" };

export default function LearnIndex() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Choose a chapter</h1>
      <ul className="mt-6 space-y-3">
        {chapters.map((ch) => (
          <li key={ch.slug}>
            <Link
              href={`/learn/${ch.slug}`}
              className="block rounded-lg border border-border px-4 py-4 font-medium hover:bg-surface"
            >
              {ch.title}
              <span className="mt-1 block text-sm font-normal text-muted">
                {ch.concepts.filter((c) => c.status === "approved").length} concepts ready
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
