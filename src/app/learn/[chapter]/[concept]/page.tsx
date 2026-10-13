import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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
      <p className="rounded-lg border border-border bg-surface p-5">
        This concept builds on earlier ones you haven&apos;t mastered yet.{" "}
        <Link href={`/learn/${chapter}`} className="text-accent underline underline-offset-2">
          Back to the chapter
        </Link>
      </p>
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
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <Link href={`/learn/${chapter}`} className="text-sm text-accent underline-offset-2 hover:underline">
          ← {ch.title}
        </Link>
        <h1 className="text-xl font-semibold">{node.title}</h1>
      </div>
      <div className="mt-3">
        <ConceptSection chapter={chapter} concept={concept} searchParams={searchParams} />
      </div>
    </>
  );
}

export default function ConceptPage({ params, searchParams }: PageProps<"/learn/[chapter]/[concept]">) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-4">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <ConceptContent params={params} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
