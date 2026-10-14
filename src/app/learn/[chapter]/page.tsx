import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import { ChapterMapSection, MapSkeleton } from "@/components/ChapterMap";
import { eyebrow } from "@/components/ui";
import { chapters } from "@/content/chapters";

export function generateStaticParams() {
  return chapters.map((c) => ({ chapter: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/[chapter]">): Promise<Metadata> {
  const { chapter } = await params;
  return { title: chapters.find((c) => c.slug === chapter)?.title ?? "Learn" };
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
        <ArrowLeftIcon className="h-4 w-4" /> All courses
      </Link>
      <Suspense fallback={<MapSkeleton />}>
        <ChapterContent params={params} />
      </Suspense>
    </main>
  );
}
