import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeftIcon, LockIcon } from "@/components/icons";
import { card, eyebrow, primaryButton } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { currentUserId } from "@/lib/supabase/server";
import { refresherFrom } from "@/lessons/refresher";
import { getConceptSession } from "@/server/learning";
import { GuestStart } from "../../GuestStart";
import { SlideDeck } from "./SlideDeck";

export function generateStaticParams() {
  return chapters.flatMap((ch) =>
    ch.concepts
      .filter((c) => c.status === "approved")
      .map((c) => ({ chapter: ch.slug, concept: ch.graph.find((n) => n.id === c.id)!.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<"/learn/[chapter]/[concept]">): Promise<Metadata> {
  const { chapter, concept } = await params;
  const node = chapters.find((c) => c.slug === chapter)?.graph.find((n) => n.slug === concept);
  return { title: node?.title ?? "Learn" };
}

async function ConceptSection({
  chapter,
  concept,
  searchParams,
}: {
  chapter: string;
  concept: string;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const userId = await currentUserId();
  if (!userId) {
    return <GuestStart next={`/learn/${chapter}/${concept}`} error={sp.error === "signin"} />;
  }

  const ch = chapters.find((c) => c.slug === chapter)!;
  const refresher = typeof sp.from === "string" ? refresherFrom(ch, concept, sp.from) : null;
  const session = await getConceptSession(chapter, concept, userId, { allowLocked: refresher !== null });
  if (!session) notFound();
  if (session.kind === "locked") {
    return (
      <div className={`${card} mx-auto mt-6 max-w-lg p-8 text-center`}>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-surface text-muted">
          <LockIcon className="h-5 w-5" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold">Not unlocked yet</h2>
        <p className="mt-2 text-muted">This concept builds on earlier ones you haven&apos;t mastered yet.</p>
        <Link href={`/learn/${chapter}`} className={`${primaryButton} mt-6`}>
          Back to the chapter
        </Link>
      </div>
    );
  }
  return (
    <SlideDeck
      // Next keeps visited pages alive (React Activity); a refresher must not inherit the old slide position.
      key={refresher ? `refresher:${refresher.fromSlug}` : "lesson"}
      chapterHref={`/learn/${chapter}`}
      conceptSlug={concept}
      session={session}
      refresher={refresher && { title: refresher.fromTitle, href: `/learn/${chapter}/${refresher.fromSlug}` }}
    />
  );
}

async function ConceptContent({
  params,
  searchParams,
}: {
  params: PageProps<"/learn/[chapter]/[concept]">["params"];
  searchParams: PageProps<"/learn/[chapter]/[concept]">["searchParams"];
}) {
  const { chapter, concept } = await params;
  const ch = chapters.find((c) => c.slug === chapter);
  const node = ch?.graph.find((n) => n.slug === concept);
  const published = ch?.concepts.some((c) => c.id === node?.id && c.status === "approved");
  if (!ch || !node || !published) notFound();

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
        <div>
          <Link href={`/learn/${chapter}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
            <ArrowLeftIcon className="h-4 w-4" /> {ch.title}
          </Link>
          <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-3xl">{node.title}</h1>
        </div>
        <p className={`${eyebrow} pb-1`}>{node.group}</p>
      </div>
      <div className="mt-4">
        <ConceptSection chapter={chapter} concept={concept} searchParams={searchParams} />
      </div>
    </>
  );
}

export default function ConceptPage({ params, searchParams }: PageProps<"/learn/[chapter]/[concept]">) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-6">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <ConceptContent params={params} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
