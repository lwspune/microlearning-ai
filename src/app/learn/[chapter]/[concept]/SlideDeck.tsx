"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RenderedInlineNodes, RenderedRichText } from "@/components/RenderedRichText";
import { FigureView } from "@/figures/FigureView";
import type { RenderedSlide } from "@/lessons/renderDeck";
import type { ConceptSession } from "@/server/learning";
import { QuestionPanel } from "./QuestionPanel";
import { primaryButton, secondaryButton } from "./ui";

type Open = Extract<ConceptSession, { kind: "open" }>;

const SWIPE_MIN_PX = 60;

/** Seconds between steps when a figure plays through on its own (the idea slide). */
const FIGURE_STAGGER_S = 0.9;

/** Text beside its figure on tablet and up; the figure below the text on phones. */
function WithFigure({ figure, children }: { figure: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-start">
      <div>{children}</div>
      <div className="mx-auto w-full max-w-sm md:max-w-none">{figure}</div>
    </div>
  );
}

function SlideBody({ slide }: { slide: RenderedSlide }) {
  switch (slide.kind) {
    case "hook":
      return <RenderedRichText blocks={slide.prompt} />;
    case "reveal":
      return (
        <>
          <RenderedRichText blocks={slide.prompt} className="text-muted" />
          <RenderedRichText blocks={slide.reveal} className="mt-6 border-l-4 border-accent pl-4" />
        </>
      );
    case "text":
      return slide.figure ? (
        <WithFigure figure={<FigureView figure={slide.figure} stagger={FIGURE_STAGGER_S} className="h-auto w-full" />}>
          <RenderedRichText blocks={slide.body} />
        </WithFigure>
      ) : (
        <RenderedRichText blocks={slide.body} />
      );
    case "worked": {
      const body = (
        <>
          <RenderedRichText blocks={slide.prompt} />
          <ol className="mt-4 list-decimal space-y-3 pl-6">
            {slide.steps.map((s, i) => (
              <li key={i} className={i === slide.steps.length - 1 ? "motion-safe:animate-slide-in" : "text-muted"}>
                <RenderedInlineNodes nodes={s} />
              </li>
            ))}
          </ol>
          {slide.answer && (
            <p className="mt-5 border-t border-border pt-4">
              <span className="font-semibold">Answer: </span>
              <RenderedInlineNodes nodes={slide.answer} />
            </p>
          )}
        </>
      );
      return slide.figure ? (
        <WithFigure figure={<FigureView figure={slide.figure} upTo={slide.step} className="h-auto w-full" />}>{body}</WithFigure>
      ) : (
        body
      );
    }
    case "questions":
      return null;
  }
}

const subscribeFullscreen = (cb: () => void) => {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
};

/** A concept as full-screen slides: swipe, arrow keys or Back/Next; questions are the last slide. */
export type RefresherInfo = { title: string; href: string };

export function SlideDeck({
  chapterHref,
  conceptSlug,
  session,
  refresher,
}: {
  chapterHref: string;
  conceptSlug: string;
  session: Open;
  /** Set when the learner was sent here to fix a gap in a later concept. */
  refresher: RefresherInfo | null;
}) {
  const { slides } = session;
  const questionsIndex = slides.findIndex((s) => s.kind === "questions");
  const startedBefore = session.progress.state === "learning" || session.progress.state === "mastered";
  // A refresher always starts at the beginning: rereading is the point.
  const [index, setIndex] = useState(startedBefore && !refresher ? questionsIndex : 0);
  const slide = slides[index];

  const stageRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const canFullscreen = useSyncExternalStore(
    () => () => {},
    () => document.fullscreenEnabled,
    () => false,
  );
  const isFullscreen = useSyncExternalStore(
    subscribeFullscreen,
    () => document.fullscreenElement !== null,
    () => false,
  );

  const go = useCallback((i: number) => setIndex(Math.max(0, Math.min(slides.length - 1, i))), [slides.length]);

  // Move focus to the new slide's heading so screen readers announce it.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Arrow keys move between radio options; leave them alone there.
      if ((e.target as HTMLElement).closest("input, textarea, select")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  function toggleFullscreen() {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void stageRef.current?.requestFullscreen();
  }

  const next = slides[index + 1];

  return (
    <section
      ref={stageRef}
      aria-roledescription="carousel"
      aria-label={`${session.title} lesson`}
      className="flex h-[calc(100dvh-7.5rem)] min-h-[26rem] flex-col rounded-xl border border-border bg-background md:h-[min(calc(100dvh-8rem),48rem)]"
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") swipeStart.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={(e) => {
        const start = swipeStart.current;
        swipeStart.current = null;
        if (!start) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > 1.5 * Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      {refresher && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl bg-warning-surface px-4 py-2 text-sm">
          <span>
            <span className="font-semibold">Refresher</span> for {refresher.title}
          </span>
          <Link href={refresher.href} className="font-medium text-accent underline underline-offset-2">
            Back to {refresher.title} →
          </Link>
        </div>
      )}
      <header className="flex items-center gap-3 border-b border-border px-4 py-2">
        <p className="text-sm tabular-nums text-muted">
          {index + 1} / {slides.length}
        </p>
        <div className="h-1.5 flex-1 rounded-full bg-surface" aria-hidden="true">
          <div
            className="h-full rounded-full bg-accent transition-[width] motion-reduce:transition-none"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
        {canFullscreen && (
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-md px-2 py-1 text-sm text-muted hover:bg-surface"
            aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
          >
            {isFullscreen ? "Exit full screen" : "⛶ Full screen"}
          </button>
        )}
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-12 md:py-10">
        <div
          key={slide.id}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
          className="mx-auto max-w-3xl leading-relaxed motion-safe:animate-slide-in md:text-xl"
        >
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold outline-none md:text-3xl">
            {slide.title}
          </h2>
          <div className="mt-5">
            <SlideBody slide={slide} />
          </div>
        </div>
        {/* Kept mounted so the current question and its feedback survive a trip back through the slides. */}
        <div hidden={slide.kind !== "questions"} className="mx-auto mt-2 max-w-3xl md:text-lg">
          <QuestionPanel
            title={session.title}
            chapterHref={chapterHref}
            conceptSlug={conceptSlug}
            refresher={refresher}
            initialQuestion={session.question}
            progress={session.progress}
            onReread={() => go(0)}
          />
        </div>
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <button type="button" className={secondaryButton} onClick={() => go(index - 1)} disabled={index === 0}>
          ← Back
        </button>
        {next && (
          <button type="button" className={primaryButton} onClick={() => go(index + 1)}>
            {next.kind === "questions" ? "Try a question →" : "Next →"}
          </button>
        )}
      </footer>
    </section>
  );
}
