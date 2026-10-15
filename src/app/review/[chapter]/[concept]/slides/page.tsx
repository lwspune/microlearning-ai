import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { card } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { SlideBody } from "@/lessons/SlideBody";
import { buildDeck } from "@/lessons/deck";
import { renderDeck } from "@/lessons/renderDeck";
import { findConcept, reviewEnabled } from "@/lib/review";

export function generateStaticParams() {
  return chapters.flatMap((ch) =>
    ch.concepts.map((c) => ({ chapter: ch.slug, concept: ch.graph.find((n) => n.id === c.id)!.slug })),
  );
}

export const metadata: Metadata = { title: "Slides preview" };

/**
 * A concept's lesson slides from the content files, as learners will see them once seeded:
 * the deck reads published content, so this is where a change is checked before publishing.
 */
async function SlidesPreviewContent({ params }: { params: PageProps<"/review/[chapter]/[concept]/slides">["params"] }) {
  if (!reviewEnabled()) notFound();
  const { chapter: chapterSlug, concept: conceptSlug } = await params;
  const found = findConcept(chapterSlug, conceptSlug);
  if (!found) notFound();
  const slides = renderDeck(buildDeck(found.concept)).filter((s) => s.kind !== "questions");

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Link href={`/review/${chapterSlug}/${conceptSlug}`} className="text-sm text-accent underline-offset-2 hover:underline">
        ← {found.node.title}
      </Link>
      <h1 className="mt-4 text-2xl font-semibold">Slides preview</h1>
      <ol className="mt-6 space-y-8">
        {slides.map((slide, i) => (
          <li key={slide.id} data-slide={slide.id} className={`${card} px-5 py-7 md:px-14 md:py-12`}>
            <p className="font-mono text-sm text-muted">
              {i + 1} / {slides.length + 1} · {slide.id}
            </p>
            <div className="mx-auto mt-3 max-w-3xl leading-relaxed md:text-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                <RenderedInlineNodes nodes={slide.heading} />
              </h2>
              <div className="mt-5">
                <SlideBody slide={slide} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}

export default function SlidesPreview({ params }: PageProps<"/review/[chapter]/[concept]/slides">) {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-5xl px-4 py-8 text-muted">Loading…</main>}>
      <SlidesPreviewContent params={params} />
    </Suspense>
  );
}
