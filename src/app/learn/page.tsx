import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { eyebrow, linkCard } from "@/components/ui";
import { chapters } from "@/content/chapters";

export const metadata: Metadata = { title: "Learn" };

export default function LearnIndex() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <p className={eyebrow}>Learn</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Choose a chapter</h1>
      <ul className="mt-8 grid gap-4">
        {chapters.map((ch) => (
          <li key={ch.slug}>
            <Link href={`/learn/${ch.slug}`} className={`${linkCard} group p-6`}>
              <span className="block font-display text-2xl font-semibold">{ch.title}</span>
              <span className="mt-1 block text-muted">
                {ch.concepts.filter((c) => c.status === "approved").length} concepts ready
              </span>
              <span className="mt-4 inline-flex items-center gap-2 font-medium text-accent">
                Open chapter <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
