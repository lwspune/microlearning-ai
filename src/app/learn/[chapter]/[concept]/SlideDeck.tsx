"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { SlideBody } from "@/lessons/SlideBody";
import type { ConceptSession } from "@/server/learning";
import { QuestionPanel } from "./QuestionPanel";
import { withCourse } from "@/content/courses";
import { card, primaryButton, secondaryButton } from "@/components/ui";

type Open = Extract<ConceptSession, { kind: "open" }>;

const SWIPE_MIN_PX = 60;

const subscribeFullscreen = (cb: () => void) => {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
};

/** A concept as full-screen slides: swipe, arrow keys or Back/Next; questions are the last slide. */
export type RefresherInfo = { title: string; href: string };

export function SlideDeck({
  chapterHref,
  mapHref,
  course,
  conceptSlug,
  session,
  refresher,
}: {
  chapterHref: string;
  mapHref: string;
  course?: string;
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
      className={`${card} flex h-[calc(100dvh-11.5rem)] min-h-[26rem] flex-col overflow-hidden md:h-[min(calc(100dvh-13rem),48rem)]`}
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
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-warning-surface px-5 py-2.5 text-sm">
          <span>
            <span className="font-semibold">Refresher</span> for {refresher.title}
          </span>
          <Link href={refresher.href} className="font-medium text-accent underline underline-offset-2">
            Back to {refresher.title} →
          </Link>
        </div>
      )}
      <header className="flex items-center gap-4 border-b border-border px-5 py-3">
        <p className="text-sm font-medium tabular-nums text-muted">
          {index + 1} / {slides.length}
        </p>
        {/* One segment per slide; the questions slide is the last. */}
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {slides.map((s, i) => (
            <span
              key={s.id}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 motion-reduce:transition-none ${i <= index ? "bg-accent" : "bg-surface"}`}
            />
          ))}
        </div>
        {canFullscreen && (
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-lg px-2 py-1 text-sm text-muted hover:bg-surface hover:text-foreground"
            aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
          >
            {isFullscreen ? "Exit full screen" : "⛶ Full screen"}
          </button>
        )}
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-7 md:px-14 md:py-12">
        <div
          key={slide.id}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
          className="mx-auto max-w-3xl leading-relaxed motion-safe:animate-slide-in md:text-xl"
        >
          <h2 ref={headingRef} tabIndex={-1} className="font-display text-3xl font-semibold tracking-tight outline-none md:text-4xl">
            <RenderedInlineNodes nodes={slide.heading} />
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
            mapHref={mapHref}
            course={course}
            conceptSlug={conceptSlug}
            refresher={refresher}
            initialQuestion={session.question}
            progress={session.progress}
            nextConcept={session.nextConcept && { href: withCourse(`${chapterHref}/${session.nextConcept.slug}`, course), title: session.nextConcept.title }}
            onReread={() => go(0)}
          />
        </div>
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border bg-surface/60 px-5 py-3">
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
