import { RenderedInlineNodes, RenderedRichText } from "@/components/RenderedRichText";
import { StepList } from "@/components/StepList";
import { FigureFrame } from "@/figures/FigureFrame";
import { FigureView } from "@/figures/FigureView";
import type { RenderedSlide } from "@/lessons/renderDeck";
import type { RenderedInline } from "@/lib/renderedText";

/** Seconds between steps when a figure plays through on its own (the idea slide). */
const FIGURE_STAGGER_S = 0.9;

/** Text beside its figure on tablet and up; the figure below the text on phones. */
function WithFigure({ figure, children }: { figure: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-10">
      <div>{children}</div>
      <div data-slide-figure>
        <FigureFrame>{figure}</FigureFrame>
      </div>
    </div>
  );
}

/**
 * A slide's content, below its heading. Shared by the lesson deck and the review preview
 * (/review/<chapter>/<concept>/slides), so the preview shows exactly what learners see.
 */
/** Points shown so far, the newest rising in; new ones are announced to screen readers. */
function Points({ points, shown }: { points: RenderedInline[][]; shown: number }) {
  return (
    <ul className="space-y-4" aria-live="polite">
      {points.slice(0, shown).map((p, i) => (
        <li key={i} className={`flex gap-3 ${i === shown - 1 ? "motion-safe:animate-rise" : ""}`}>
          <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>
            <RenderedInlineNodes nodes={p} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * `shown`: on a points slide, how many points are revealed (the figure shows its steps up to the
 * same number). Omitted: all of them, as on the review preview's list.
 */
export function SlideBody({ slide, shown }: { slide: RenderedSlide; shown?: number }) {
  switch (slide.kind) {
    case "hook":
      return <RenderedRichText blocks={slide.prompt} />;
    case "reveal":
      return (
        <>
          <RenderedRichText blocks={slide.prompt} className="text-muted" />
          <RenderedRichText blocks={slide.reveal} className="mt-6 rounded-2xl border-l-4 border-accent bg-accent-soft px-5 py-4 motion-safe:animate-rise" />
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
    case "points": {
      const n = shown ?? slide.points.length;
      return slide.figure ? (
        <WithFigure figure={<FigureView figure={slide.figure} upTo={n} className="h-auto w-full" />}>
          <Points points={slide.points} shown={n} />
        </WithFigure>
      ) : (
        <Points points={slide.points} shown={n} />
      );
    }
    case "worked": {
      const body = (
        <>
          <RenderedRichText blocks={slide.prompt} />
          <div className="mt-5">
            <StepList steps={slide.steps} current={slide.steps.length - 1} />
          </div>
          {slide.answer && (
            <p className="mt-6 rounded-2xl bg-success-surface px-5 py-4 motion-safe:animate-rise">
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
