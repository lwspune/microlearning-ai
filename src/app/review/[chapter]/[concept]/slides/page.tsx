import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { card } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { LESSON_LANGUAGES, parseLanguage } from "@/content/languages";
import { translateConcept } from "@/content/translate";
import { LessonStage } from "@/lessons/LessonStage";
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
 * `?lang=hi` or `?lang=mr` shows a translation, drafts included.
 */
async function SlidesPreviewContent({
  params,
  searchParams,
}: {
  params: PageProps<"/review/[chapter]/[concept]/slides">["params"];
  searchParams: PageProps<"/review/[chapter]/[concept]/slides">["searchParams"];
}) {
  if (!reviewEnabled()) notFound();
  const { chapter: chapterSlug, concept: conceptSlug } = await params;
  const found = findConcept(chapterSlug, conceptSlug);
  if (!found) notFound();
  const lang = parseLanguage(String((await searchParams).lang ?? ""));
  const translations = (found.chapter.translations ?? []).filter((t) => t.id === found.concept.id);
  const translation = translations.find((t) => t.lang === lang);
  const concept = translation ? translateConcept(found.concept, translation) : found.concept;
  const textLang = translation ? lang : undefined;
  const slides = renderDeck(buildDeck(concept)).filter((s) => s.kind !== "questions");

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Link href={`/review/${chapterSlug}/${conceptSlug}`} className="text-sm text-accent underline-offset-2 hover:underline">
        ← {found.node.title}
      </Link>
      <h1 className="mt-4 text-2xl font-semibold">Slides preview</h1>
      {translations.length > 0 && (
        <nav aria-label="Language" className="mt-2 flex gap-4 text-sm">
          {LESSON_LANGUAGES.filter((l) => l.id === "en" || translations.some((t) => t.lang === l.id)).map((l) => {
            const status = translations.find((t) => t.lang === l.id)?.status;
            const label = `${l.title}${status === "draft" ? " (draft)" : ""}`;
            return (l.id === "en" ? !translation : translation?.lang === l.id) ? (
              <span key={l.id} aria-current="page" className="font-semibold">
                {label}
              </span>
            ) : (
              <Link key={l.id} href={l.id === "en" ? "?" : `?lang=${l.id}`} className="text-accent underline-offset-2 hover:underline">
                {label}
              </Link>
            );
          })}
        </nav>
      )}
      <h2 className="mt-6 text-lg font-semibold">As learners click through</h2>
      <div className="mt-3" data-stage>
        <LessonStage slides={slides} label={`${found.node.title} preview`} lang={textLang} />
      </div>
      <h2 className="mt-10 text-lg font-semibold">Every slide, whole</h2>
      <ol className="mt-4 space-y-8">
        {slides.map((slide, i) => (
          <li key={slide.id} data-slide={slide.id} lang={textLang} className={`${card} px-5 py-7 md:px-14 md:py-12`}>
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

export default function SlidesPreview({ params, searchParams }: PageProps<"/review/[chapter]/[concept]/slides">) {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-5xl px-4 py-8 text-muted">Loading…</main>}>
      <SlidesPreviewContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}
