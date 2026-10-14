import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { card, eyebrow, linkCard } from "@/components/ui";
import { requireAreaAt } from "@/server/viewer";

export const metadata: Metadata = { title: "Teach" };

const SOON = [
  { title: "Your classes", body: "Each class follows a course. See who has mastered what, the mistakes the class keeps making, and reviews due." },
];

async function TeachHomeContent() {
  const { profile } = await requireAreaAt("/teach");
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <p className={eyebrow}>Teach</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Welcome, {profile.fullName}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        As a teacher every concept is open to you, whatever you&apos;ve mastered, so you can take any of them in class.
      </p>

      <Link href="/learn" className={`${linkCard} group mt-8 flex items-center justify-between gap-4 p-6`}>
        <span>
          <span className="block font-display text-2xl font-semibold">Open a course</span>
          <span className="mt-1 block text-muted">Teach from the same lessons your students use.</span>
        </span>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
      </Link>

      {profile.academyId && (
        <Link href="/teach/students" className={`${linkCard} group mt-4 flex items-center justify-between gap-4 p-6`}>
          <span>
            <span className="block font-display text-2xl font-semibold">Students</span>
            <span className="mt-1 block text-muted">How each student is doing: what they&apos;ve mastered, their accuracy, and the mistakes they keep making.</span>
          </span>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      )}

      {profile.academyId && (
        <Link href="/teach/people" className={`${linkCard} group mt-4 flex items-center justify-between gap-4 p-6`}>
          <span>
            <span className="block font-display text-2xl font-semibold">People</span>
            <span className="mt-1 block text-muted">
              {profile.role === "academy_admin" ? "Add teachers and students" : "Add students"} and see everyone in your academy.
            </span>
          </span>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      )}

      <h2 className="mt-12 font-display text-2xl font-semibold">Coming next</h2>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {SOON.map((s) => (
          <li key={s.title} className={`${card} p-6`}>
            <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-muted">Coming soon</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-1 text-muted">{s.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

/**
 * Who may be here is checked inside the boundary (requireAreaAt: sign in, or
 * off to your own area). Every page in this area does the same; a session read
 * never sits in a layout (Next.js: authentication with Cache Components).
 */
export default function TeachHome() {
  return (
    <Suspense fallback={<p className="mx-auto w-full max-w-5xl px-4 py-12 text-muted sm:px-6">Loading…</p>}>
      <TeachHomeContent />
    </Suspense>
  );
}
