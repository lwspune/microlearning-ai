import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, LockIcon, RefreshIcon } from "@/components/icons";
import { ProgressRing } from "@/components/ProgressRing";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { card, eyebrow, linkCard, linkCardShape } from "@/components/ui";
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

const isOpen = (s: ConceptState) => s === "available" || s === "learning" || s === "mastered";
const isToDo = (s: ConceptState) => s === "available" || s === "learning";

/** The dot on the chapter path: a check when mastered, a lock when locked. */
function PathNode({ state }: { state: ConceptState }) {
  const shape = "absolute top-4 -left-[13px] grid h-6 w-6 place-items-center rounded-full";
  switch (state) {
    case "mastered":
      return (
        <span className={`${shape} bg-success text-background`}>
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
      );
    case "learning":
      return (
        <span className={`${shape} border-2 border-accent bg-card`}>
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      );
    case "available":
      return <span className={`${shape} border-2 border-accent bg-card`} />;
    case "locked":
      return (
        <span className={`${shape} border border-border bg-surface text-muted`}>
          <LockIcon className="h-3 w-3" />
        </span>
      );
    case "unpublished":
      return <span className={`${shape} border border-dashed border-border-strong bg-surface`} />;
  }
}

function StateLabel({ c }: { c: MapConcept }) {
  const tone =
    c.state === "mastered" ? "text-success" : isToDo(c.state) ? "text-accent" : "text-muted";
  return <span className={`shrink-0 text-sm font-medium ${tone}`}>{STATE_LABEL[c.state]}</span>;
}

function PathRow({ slug, c }: { slug: string; c: MapConcept }) {
  const body = (
    <span className="flex items-start justify-between gap-4">
      <span className="min-w-0">
        <span className={`block font-medium ${isOpen(c.state) ? "" : "text-muted"}`}>{c.title}</span>
        <span className="mt-0.5 block text-sm text-muted">
          <RenderedInlineNodes nodes={c.oneLiner} />
        </span>
      </span>
      <StateLabel c={c} />
    </span>
  );
  return (
    <li className="relative pl-6">
      <PathNode state={c.state} />
      {isOpen(c.state) ? (
        <Link href={`/learn/${slug}/${c.slug}`} className="block rounded-xl px-3 py-3 transition-colors hover:bg-card">
          {body}
        </Link>
      ) : (
        <div className="px-3 py-3">{body}</div>
      )}
    </li>
  );
}

/** The next thing to do, given pride of place. */
function FeaturedCard({ slug, c }: { slug: string; c: MapConcept }) {
  return (
    <Link href={`/learn/${slug}/${c.slug}`} className={`${linkCardShape} group border-accent/30 bg-accent-soft p-6 hover:border-accent/60`}>
      <span className="block">
        <span className={eyebrow}>{c.state === "learning" ? "Continue where you left off" : "Up next"}</span>
        <span className="mt-2 block font-display text-2xl font-semibold">{c.title}</span>
        <span className="mt-1 block text-muted">
          <RenderedInlineNodes nodes={c.oneLiner} />
        </span>
        <span className="mt-4 inline-flex items-center gap-2 font-medium text-accent">
          {STATE_LABEL[c.state]} <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}

function ConceptCard({ slug, c }: { slug: string; c: MapConcept }) {
  return (
    <Link href={`/learn/${slug}/${c.slug}`} className={`${linkCard} h-full p-4`}>
      <span className="flex items-start justify-between gap-3">
        <span className="font-medium">{c.title}</span>
        <StateLabel c={c} />
      </span>
      <span className="mt-1 block text-sm text-muted">
        <RenderedInlineNodes nodes={c.oneLiner} />
      </span>
    </Link>
  );
}

async function ChapterMapSection({ slug }: { slug: string }) {
  const map = await getChapterMap(slug, await currentUserId());
  if (!map) notFound();
  const all = map.groups.flatMap((g) => g.concepts);
  const due = all.filter((c) => isOpen(c.state) && c.due);
  // In progress first, then new ones, in chapter order.
  const toDo = [...all.filter((c) => c.state === "learning"), ...all.filter((c) => c.state === "available")];
  const mastered = all.filter((c) => c.state === "mastered").length;

  return (
    <>
      <div className={`${card} mt-6 grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-6`}>
        <div className="flex items-center gap-5">
          <ProgressRing value={mastered} max={all.length} label={`${mastered} of ${all.length} concepts mastered`} />
          <div>
            <p className="font-display text-2xl font-semibold tabular-nums">
              {mastered} <span className="text-lg font-normal text-muted">/ {all.length}</span>
            </p>
            <p className="text-sm text-muted">concepts mastered</p>
          </div>
        </div>
        <ul className="grid gap-2.5 text-sm">
          {map.groups.map((g) => {
            const done = g.concepts.filter((c) => c.state === "mastered").length;
            return (
              <li key={g.name} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3">
                <span className="truncate text-muted">{g.name}</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-surface" aria-hidden="true">
                  <span className="block h-full rounded-full bg-accent" style={{ width: `${(done / g.concepts.length) * 100}%` }} />
                </span>
                <span className="text-muted tabular-nums">
                  {done}/{g.concepts.length}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 space-y-12">
        {due.length > 0 && (
          <section aria-labelledby="review">
            <h2 id="review" className="flex items-center gap-2 font-display text-xl font-semibold">
              <RefreshIcon className="h-5 w-5 text-accent" />
              Review today ({due.length})
            </h2>
            <p className="mt-1 text-sm text-muted">Two quick questions each keep these fresh.</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {due.map((c) => (
                <li key={c.code}>
                  <Link
                    href={`/learn/${slug}/${c.slug}`}
                    className={`${linkCardShape} flex items-center justify-between gap-3 border-border bg-warning-surface p-4 hover:border-border-strong`}
                  >
                    <span className="font-medium">{c.title}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent">
                      Review <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="ready">
          <h2 id="ready" className="font-display text-xl font-semibold">
            Ready for you
          </h2>
          {toDo.length === 0 ? (
            <p className="mt-2 text-muted">Everything open is mastered. Nice work.</p>
          ) : (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {toDo.map((c, i) => (
                <li key={c.code} className={i === 0 ? "sm:col-span-2" : undefined}>
                  {i === 0 ? <FeaturedCard slug={slug} c={c} /> : <ConceptCard slug={slug} c={c} />}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="outline">
          <h2 id="outline" className="font-display text-xl font-semibold">
            Whole chapter
          </h2>
          <p className="mt-1 text-sm text-muted">How the ideas build on each other. Each one opens once you&apos;ve mastered what it needs.</p>
          {map.groups.map((g) => {
            const done = g.concepts.filter((c) => c.state === "mastered").length;
            return (
              <div key={g.name} className="mt-8">
                <h3 className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-semibold">{g.name}</span>
                  <span className="text-sm text-muted tabular-nums">
                    {done} / {g.concepts.length}
                  </span>
                </h3>
                <ol className="mt-3 ml-3 border-l-2 border-border">
                  {g.concepts.map((c) => (
                    <PathRow key={c.code} slug={slug} c={c} />
                  ))}
                </ol>
              </div>
            );
          })}
        </section>
      </div>
    </>
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
      <p className={`${eyebrow} mt-6`}>Chapter</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">{ch.title}</h1>
      <p className="mt-2 text-muted">One connected idea at a time. Each concept unlocks once you&apos;ve mastered what it builds on.</p>
      <ChapterMapSection slug={chapter} />
    </>
  );
}

export default function ChapterPage({ params }: PageProps<"/learn/[chapter]">) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeftIcon className="h-4 w-4" /> All chapters
      </Link>
      <Suspense fallback={<MapSkeleton />}>
        <ChapterContent params={params} />
      </Suspense>
    </main>
  );
}
