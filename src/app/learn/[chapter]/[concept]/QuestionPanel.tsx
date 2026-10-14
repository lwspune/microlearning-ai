"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { RenderedInlineNodes, RenderedRichText } from "@/components/RenderedRichText";
import { withCourse } from "@/content/courses";
import { daysUntil } from "@/engine/review";
import type { Progress, Question } from "@/server/learning";
import { type AnswerResult, submitAnswer } from "../../actions";
import type { RefresherInfo } from "./SlideDeck";
import { SolutionReveal } from "./SolutionReveal";
import { FigureFrame } from "@/figures/FigureFrame";
import { FigureView } from "@/figures/FigureView";
import { CheckIcon } from "@/components/icons";
import { card, primaryButton, secondaryButton } from "@/components/ui";

/** Questions answered in a refresher before offering the way back. */
const REFRESHER_QUESTIONS = 2;

function StreakDots({ streak, needed }: { streak: number; needed: number }) {
  return (
    <p className="flex items-center gap-2 text-sm text-muted">
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: needed }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-6 rounded-full transition-colors duration-300 motion-reduce:transition-none ${i < streak ? "bg-success" : "bg-border"}`}
          />
        ))}
      </span>
      <span>
        {Math.min(streak, needed)} of {needed} in a row
      </span>
    </p>
  );
}

/** A burst of dots behind the mastery check; static (hidden) when motion is reduced. */
function Sparks() {
  const dots = [
    // Kept to the band around the check mark, clear of the text below it.
    [18, 14, "bg-accent"], [28, 30, "bg-success"], [36, 8, "bg-accent"], [64, 8, "bg-success"],
    [72, 30, "bg-accent"], [82, 14, "bg-success"], [44, 26, "bg-success"], [56, 26, "bg-accent"],
  ] as const;
  return (
    <span className="pointer-events-none absolute inset-0 hidden motion-safe:block" aria-hidden="true">
      {dots.map(([x, y, color], i) => (
        <span
          key={i}
          className={`absolute h-2 w-2 rounded-full ${color} animate-spark`}
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 60}ms` }}
        />
      ))}
    </span>
  );
}

/** One question at a time, graded on the server, until the concept is mastered. */
export function QuestionPanel({
  title,
  chapterHref,
  mapHref,
  course,
  conceptSlug,
  refresher,
  initialQuestion,
  progress,
  onReread,
}: {
  title: string;
  /** Base of concept links: /learn/<chapter>. */
  chapterHref: string;
  /** Where "Back to the chapter" goes: the chapter map, or the course's view of it. */
  mapHref: string;
  /** The course the learner came from, kept on refresher links. */
  course?: string;
  conceptSlug: string;
  refresher: RefresherInfo | null;
  initialQuestion: Question;
  progress: Progress;
  onReread: () => void;
}) {
  const [question, setQuestion] = useState<Question>(initialQuestion);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [streak, setStreak] = useState(progress.streak);
  const [mastered, setMastered] = useState(progress.state === "mastered");
  const [celebrate, setCelebrate] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [reviewDue, setReviewDue] = useState(progress.review.due);
  const [reviewCorrect, setReviewCorrect] = useState(progress.review.correct);
  const [reviewOutcome, setReviewOutcome] = useState<{ passed: boolean; inDays: number } | null>(null);
  const [pending, startTransition] = useTransition();
  const groupId = useId();
  const feedbackRef = useRef<HTMLDivElement>(null);

  // On small screens the feedback and Next button can sit below the fold of the slide.
  useEffect(() => {
    if (result) feedbackRef.current?.scrollIntoView({ block: "nearest" });
  }, [result]);

  function check() {
    if (!selected) return;
    setError(null);
    startTransition(async () => {
      const res = await submitAnswer(question.itemId, selected);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setResult(res.data);
      setAnswered((n) => n + 1);
      const review = res.data.review;
      if (review.reviewing) {
        setReviewCorrect(review.correct);
        if (review.done) {
          setReviewDue(false);
          setReviewOutcome({
            passed: review.passed,
            inDays: review.nextReviewAt ? daysUntil(review.nextReviewAt, Date.now()) : 0,
          });
        }
      }
      setStreak(res.data.streak);
      if (res.data.mastered) setMastered(true);
      if (res.data.masteredNow) setCelebrate(true);
    });
  }

  function nextQuestion() {
    if (!result) return;
    setQuestion(result.next);
    setSelected(null);
    setResult(null);
    setCelebrate(false);
  }

  if (celebrate) {
    return (
      <div className={`${card} relative overflow-hidden bg-success-surface p-8 text-center`} aria-live="polite">
        <Sparks />
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success text-background shadow-lift motion-safe:animate-pop">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold text-success">Mastered ✓</h3>
        <p className="mx-auto mt-2 max-w-md">
          You answered {progress.needed} different questions in a row correctly. {title} is mastered.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={refresher?.href ?? mapHref} className={primaryButton}>
            {refresher ? `Back to ${refresher.title} →` : "Back to the chapter"}
          </Link>
          <button type="button" className={secondaryButton} onClick={nextQuestion}>
            Keep practising
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-end gap-2">
        {reviewDue ? (
          <p className="rounded-full border border-border bg-warning-surface px-3 py-1 text-sm font-medium">
            Review · {reviewCorrect} of {progress.review.needed}
          </p>
        ) : mastered ? (
          <p className="inline-flex items-center gap-1.5 rounded-full bg-success-surface px-3 py-1 text-sm font-medium text-success">Mastered ✓</p>
        ) : (
          <StreakDots streak={streak} needed={progress.needed} />
        )}
      </div>

      <fieldset
        className="mt-3 rounded-2xl border border-border bg-surface/50 p-5 md:p-6"
        disabled={pending || result !== null}
        data-item-id={question.itemId}
      >
        <legend className="sr-only">Choose one answer</legend>
        <RenderedRichText blocks={question.stem} />
        {question.figure && (
          <div className="mt-4">
            <FigureFrame>
              <FigureView figure={question.figure} className="h-auto w-full" />
            </FigureFrame>
          </div>
        )}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {question.options.map((o) => {
            const isCorrect = result?.correctKey === o.key;
            const isWrongPick = result && selected === o.key && !result.correct;
            return (
              <label
                key={o.key}
                className={`relative flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3.5 shadow-card transition-colors duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent motion-reduce:transition-none ${
                  isCorrect
                    ? "border-success bg-success-surface"
                    : isWrongPick
                      ? "border-danger bg-danger-surface"
                      : selected === o.key
                        ? "border-accent bg-accent-soft"
                        : "border-border bg-card hover:border-border-strong"
                }`}
              >
                <input
                  type="radio"
                  name={groupId}
                  value={o.key}
                  checked={selected === o.key}
                  onChange={() => setSelected(o.key)}
                  // Invisible but covering the card: the whole card is the hit target, focus and keyboard still work.
                  className="absolute inset-0 cursor-pointer appearance-none rounded-xl opacity-0"
                />
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                    isCorrect
                      ? "bg-success text-background"
                      : isWrongPick
                        ? "bg-danger text-background"
                        : selected === o.key
                          ? "bg-accent text-background"
                          : "border border-border-strong text-muted"
                  }`}
                >
                  {o.label}
                </span>
                <span className="min-w-0 flex-1">
                  <RenderedInlineNodes nodes={o.text} />
                </span>
                {isCorrect && <span className="text-sm font-semibold text-success">✓ Correct answer</span>}
                {isWrongPick && <span className="text-sm font-semibold text-danger">✗ Your answer</span>}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite">
        {error && (
          <p className="mt-4 text-danger" role="alert">
            {error}
          </p>
        )}
        {result && (
          <div className={`mt-4 rounded-2xl border p-5 motion-safe:animate-rise ${result.correct ? "border-success/30 bg-success-surface" : "border-border bg-warning-surface"}`}>
            <p className={`flex items-center gap-2 font-display text-lg font-semibold ${result.correct ? "text-success" : ""}`}>
              {result.correct && <CheckIcon className="h-5 w-5" />}
              {result.correct ? "Correct!" : "Not quite."}
            </p>
            {result.remediation && <RenderedRichText blocks={result.remediation} className="mt-2" />}
            {reviewOutcome && result.review.done && (
              <p className="mt-3 border-t border-border pt-3 font-medium">
                {reviewOutcome.passed
                  ? `Review passed ✓ Next review in ${reviewOutcome.inDays} ${reviewOutcome.inDays === 1 ? "day" : "days"}.`
                  : "Review missed. This concept comes back for review tomorrow; a quick reread helps."}
              </p>
            )}
            {result.route && (
              <div className="mt-3 border-t border-border pt-3">
                <p>This mistake has come up twice, which usually means a gap in an earlier idea.</p>
                {result.route.kind === "refresher" ? (
                  <Link
                    href={withCourse(`${chapterHref}/${result.route.conceptSlug}?from=${conceptSlug}`, course)}
                    className={`mt-3 inline-block ${primaryButton}`}
                  >
                    Quick refresher: {result.route.title} →
                  </Link>
                ) : (
                  <p className="mt-1 font-medium">Worth revising: {result.route.label}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div ref={feedbackRef} className="mt-5 flex flex-wrap gap-3">
        {result && refresher && answered >= REFRESHER_QUESTIONS ? (
          <>
            <Link href={refresher.href} className={primaryButton}>
              Back to {refresher.title} →
            </Link>
            <button type="button" className={secondaryButton} onClick={nextQuestion}>
              One more question
            </button>
          </>
        ) : result && result.review.done && !refresher ? (
          <>
            <Link href={mapHref} className={primaryButton}>
              Back to the chapter
            </Link>
            <button type="button" className={secondaryButton} onClick={nextQuestion}>
              Keep practising
            </button>
          </>
        ) : result ? (
          <button type="button" className={result.route ? secondaryButton : primaryButton} onClick={nextQuestion}>
            {result.route ? "Keep trying here" : "Next question"}
          </button>
        ) : (
          <button type="button" className={primaryButton} onClick={check} disabled={!selected || pending}>
            {pending ? "Checking…" : "Check answer"}
          </button>
        )}
        <button type="button" className={secondaryButton} onClick={onReread}>
          Read the explanation again
        </button>
      </div>
      {/* Below the buttons, so opening it never pushes "Next question" out of reach. */}
      {result?.solution && <SolutionReveal key={question.itemId} solution={result.solution} />}
    </div>
  );
}
