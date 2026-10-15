"use client";

import { type ReactNode, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { card, primaryButton, secondaryButton } from "@/components/ui";
import { type Position, backward, forward, startAt } from "./navigation";
import type { RenderedSlide } from "./renderDeck";
import { SlideBody } from "./SlideBody";

const SWIPE_MIN_PX = 60;

const subscribeFullscreen = (cb: () => void) => {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
};

/**
 * Slides on a stage: swipe, arrow keys or Back/Next. A points slide reveals one point per step
 * before moving on (navigation.ts). Shared by the lesson (with its questions) and the review
 * preview (without), so the preview behaves exactly as learners see it.
 *
 * - `banner`: above the header (the refresher bar).
 * - `questions`: rendered under the slide and kept mounted; given whether the questions slide is
 *   showing, and a way back to the first slide.
 */
export function LessonStage({
  slides,
  label,
  startIndex = 0,
  banner,
  questions,
}: {
  slides: RenderedSlide[];
  label: string;
  startIndex?: number;
  banner?: ReactNode;
  questions?: (api: { active: boolean; reread: () => void }) => ReactNode;
}) {
  const [pos, setPos] = useState<Position>(() => startAt(slides, startIndex));
  const slide = slides[pos.index];

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

  const next = forward(slides, pos);
  const prev = backward(slides, pos);
  const canGoOn = next.index !== pos.index || next.shown !== pos.shown;
  const canGoBack = prev.index !== pos.index || prev.shown !== pos.shown;

  // Move focus to a new slide's heading so screen readers announce it (a new point announces itself).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [pos.index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.target as HTMLElement).closest("input, textarea, select")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        setPos((p) => forward(slides, p));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setPos((p) => backward(slides, p));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides]);

  function toggleFullscreen() {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void stageRef.current?.requestFullscreen();
  }

  return (
    <section
      ref={stageRef}
      aria-roledescription="carousel"
      aria-label={label}
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
        if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > 1.5 * Math.abs(dy)) setPos((p) => (dx < 0 ? forward(slides, p) : backward(slides, p)));
      }}
    >
      {banner}
      <header className="flex items-center gap-4 border-b border-border px-5 py-3">
        <p className="text-sm font-medium tabular-nums text-muted">
          {pos.index + 1} / {slides.length}
        </p>
        {/* One segment per slide; the questions slide is the last. */}
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {slides.map((s, i) => (
            <span
              key={s.id}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 motion-reduce:transition-none ${i <= pos.index ? "bg-accent" : "bg-surface"}`}
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
          aria-label={`${pos.index + 1} of ${slides.length}: ${slide.title}`}
          className="mx-auto max-w-3xl leading-relaxed motion-safe:animate-slide-in md:text-xl"
        >
          <h2 ref={headingRef} tabIndex={-1} className="font-display text-3xl font-semibold tracking-tight outline-none md:text-4xl">
            <RenderedInlineNodes nodes={slide.heading} />
          </h2>
          <div className="mt-5">
            <SlideBody slide={slide} shown={pos.shown} />
          </div>
        </div>
        {questions?.({ active: slide.kind === "questions", reread: () => setPos(startAt(slides, 0)) })}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border bg-surface/60 px-5 py-3">
        <button type="button" className={secondaryButton} onClick={() => setPos(prev)} disabled={!canGoBack}>
          ← Back
        </button>
        {canGoOn && (
          <button type="button" className={primaryButton} onClick={() => setPos(next)}>
            {next.index !== pos.index && slides[next.index].kind === "questions" ? "Try a question →" : "Next →"}
          </button>
        )}
      </footer>
    </section>
  );
}
