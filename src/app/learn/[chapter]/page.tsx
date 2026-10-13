import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { chapters } from "@/content/chapters";
import type { ConceptState } from "@/engine/unlock";
import { currentUserId } from "@/lib/supabase/server";
import { getChapterMap, type MapConcept } from "@/server/learning";

export function generateStaticParams() {
  return chapters.map((c) => ({ chapter: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/[chapter]">): Promise<Metadata> {
  const { chapter } = await params;
  return { title: chapters.find((c) => c.slug === chapter)?.title ?? "Learn" };
}

const STATE_LABEL: Record<ConceptState, string> = {
  available: "Start",
  learning: "In progress",
  mastered: "Mastered ✓",
  locked: "Locked",
  unpublished: "Coming soon",
};

function ConceptRow({ slug, c }: { slug: string; c: MapConcept }) {
  const open = isOpen(c.state);
  const body = (
    <span className="flex items-start justify-between gap-3">
      <span className="min-w-0">
        <span className={`block font-medium ${open ? "" : "text-muted"}`}>{c.title}</span>
        <span className="mt-0.5 block text-sm text-muted">
          <RenderedInlineNodes nodes={c.oneLiner} />
        </span>
      </span>
      <span
        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
          c.state === "mastered" ? "bg-success-surface text-success" : open ? "bg-accent text-background" : "bg-surface text-muted"
        }`}
      >
        {STATE_LABEL[c.state]}
      </span>
    </span>
  );
  return open ? (
    <Link href={`/learn/${slug}/${c.slug}`} className="block px-4 py-3 hover:bg-surface">
      {body}
    </Link>
  ) : (
    <div className="px-4 py-3">{body}</div>
  );
}

const isOpen = (s: ConceptState) => s === "available" || s === "learning" || s === "mastered";

async function ChapterMapSection({ slug }: { slug: string }) {
  const map = await getChapterMap(slug, await currentUserId());
  if (!map) notFound();
  const ready = map.groups.flatMap((g) => g.concepts).filter((c) => isOpen(c.state));
  const due = ready.filter((c) => c.due);
  return (
    <div className="mt-6 space-y-8">
      {due.length > 0 && (
        <section aria-labelledby="review">
          <h2 id="review" className="text-lg font-semibold">
            Review today ({due.length})
          </h2>
          <p className="mt-1 text-sm text-muted">Two quick questions each keep these fresh.</p>
          <ul className="mt-3 divide-y divide-border rounded-lg border border-border bg-warning-surface">
            {due.map((c) => (
              <li key={c.code}>
                <Link href={`/learn/${slug}/${c.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:underline">
                  <span className="font-medium">{c.title}</span>
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-background">Review</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="ready">
        <h2 id="ready" className="text-lg font-semibold">
          Ready for you
        </h2>
        <ul className="mt-3 divide-y divide-border rounded-lg border border-border">
          {ready.map((c) => (
            <li key={c.code}>
              <ConceptRow slug={slug} c={c} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="outline">
        <h2 id="outline" className="text-lg font-semibold">
          Whole chapter
        </h2>
        <p className="mt-1 text-sm text-muted">How the ideas build on each other. More concepts are on the way.</p>
        {map.groups.map((g) => (
          <div key={g.name} className="mt-5">
            <h3 className="font-semibold">{g.name}</h3>
            <ul className="mt-2 divide-y divide-border rounded-lg border border-border">
              {g.concepts.map((c) => (
                <li key={c.code}>
                  <ConceptRow slug={slug} c={c} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

function MapSkeleton() {
  return <p className="mt-6 text-muted">Loading your progress…</p>;
}

async function ChapterContent({ params }: { params: PageProps<"/learn/[chapter]">["params"] }) {
  const { chapter } = await params;
  const ch = chapters.find((c) => c.slug === chapter);
  if (!ch) notFound();
  return (
    <>
      <h1 className="mt-3 text-2xl font-semibold">{ch.title}</h1>
      <p className="mt-2 text-muted">Pick a concept. Each one unlocks once you&apos;ve mastered what it builds on.</p>
      <ChapterMapSection slug={chapter} />
    </>
  );
}

export default function ChapterPage({ params }: PageProps<"/learn/[chapter]">) {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8">
      <Link href="/learn" className="text-sm text-accent underline-offset-2 hover:underline">
        ← All chapters
      </Link>
      <Suspense fallback={<MapSkeleton />}>
        <ChapterContent params={params} />
      </Suspense>
    </main>
  );
}
