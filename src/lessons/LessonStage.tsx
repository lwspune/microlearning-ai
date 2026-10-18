"use client";

import { type ReactNode, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { card, primaryButton, secondaryButton } from "@/components/ui";
import { type Position, backward, forward, offersStart, startAt } from "./navigation";
import type { RenderedSlide } from "./renderDeck";
import { SlideBody } from "./SlideBody";

const SWIPE_MIN_PX = 60;

const subscribeFullscreen = (cb: () => void) => {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
};

/**
 * Slides on a stage: swipe, arrow keys or Back/Next. A points slide reveals one point per step
 * before moving on (navigation.ts). Where full screen works, the first slide's button reads Start
 * and opens it. Shared by the lesson (with its questions) and the review preview (without), so the
 * preview behaves exactly as learners see it.
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
  // Set on the first move or full screen, so Start never comes back (even after leaving full screen).
  const [begun, setBegun] = useState(false);
  const slide = slides[pos.index];

  const stageRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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
  const showStart = offersStart(pos, { canFullscreen, isFullscreen, begun });

  function go(to: (p: Position) => Position) {
    setBegun(true);
    setPos(to);
  }

  // Move focus to a new slide's heading so screen readers announce it (a new point announces itself).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [pos.index]);

  // A new point can land below the fold (on phones the figure sits under the points): scroll so the
  // newest point shows, with the figure under it when both fit.
  useEffect(() => {
    const scroller = scrollRef.current;
    const point = scroller?.querySelector<HTMLElement>("ul[aria-live] > li:last-child");
    if (!scroller || !point || pos.shown < 2) return;
    const top = (el: HTMLElement) => el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
    const pointTop = top(point);
    let bottom = pointTop + point.offsetHeight;
    const figure = scroller.querySelector<HTMLElement>("[data-slide-figure]");
    if (figure && top(figure) > pointTop) {
      const figureBottom = top(figure) + figure.offsetHeight;
      if (figureBottom - pointTop <= scroller.clientHeight - 32) bottom = figureBottom;
    }
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (bottom + 16 > scroller.scrollTop + scroller.clientHeight) scroller.scrollTo({ top: bottom + 16 - scroller.clientHeight, behavior });
    else if (pointTop - 16 < scroller.scrollTop) scroller.scrollTo({ top: pointTop - 16, behavior });
  }, [pos.index, pos.shown]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.target as HTMLElement).closest("input, textarea, select")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        setBegun(true);
        setPos((p) => forward(slides, p));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setBegun(true);
        setPos((p) => backward(slides, p));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides]);

  function toggleFullscreen() {
    setBegun(true);
    if (document.fullscreenElement) void document.exitFullscreen();
    // A refusal (the browser or the learner) just leaves the slides where they are.
    else stageRef.current?.requestFullscreen().catch(() => {});
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
        if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > 1.5 * Math.abs(dy)) go((p) => (dx < 0 ? forward(slides, p) : backward(slides, p)));
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

      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-5 py-7 md:px-14 md:py-12">
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
        {questions?.({ active: slide.kind === "questions", reread: () => go(() => startAt(slides, 0)) })}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-border bg-surface/60 px-5 py-3">
        <button type="button" className={secondaryButton} onClick={() => go(() => prev)} disabled={!canGoBack}>
          ← Back
        </button>
        {canGoOn && (
          <button type="button" className={primaryButton} onClick={showStart ? toggleFullscreen : () => go(() => next)}>
            {showStart ? "Start →" : next.index !== pos.index && slides[next.index].kind === "questions" ? "Try a question →" : "Next →"}
          </button>
        )}
      </footer>
    </section>
  );
}
