"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { RenderedInlineNodes, RenderedRichText } from "@/components/RenderedRichText";
import { daysUntil } from "@/engine/review";
import type { Progress, Question } from "@/server/learning";
import { type AnswerResult, submitAnswer } from "../../actions";
import type { RefresherInfo } from "./SlideDeck";
import { primaryButton, secondaryButton } from "./ui";

/** Questions answered in a refresher before offering the way back. */
const REFRESHER_QUESTIONS = 2;

function StreakDots({ streak, needed }: { streak: number; needed: number }) {
  return (
    <p className="flex items-center gap-2 text-sm text-muted">
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: needed }, (_, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < streak ? "bg-success" : "bg-border"}`} />
        ))}
      </span>
      <span>
        {Math.min(streak, needed)} of {needed} in a row
      </span>
    </p>
  );
}

/** One question at a time, graded on the server, until the concept is mastered. */
export function QuestionPanel({
  title,
  chapterHref,
  conceptSlug,
  refresher,
  initialQuestion,
  progress,
  onReread,
}: {
  title: string;
  chapterHref: string;
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
      <div className="rounded-lg border border-border bg-success-surface p-6" aria-live="polite">
        <h3 className="text-xl font-semibold text-success">Mastered ✓</h3>
        <p className="mt-2">
          You answered {progress.needed} different questions in a row correctly. {title} is mastered.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={refresher?.href ?? chapterHref} className={primaryButton}>
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
          <p className="rounded-full bg-warning-surface px-3 py-1 text-sm font-medium">
            Review · {reviewCorrect} of {progress.review.needed}
          </p>
        ) : mastered ? (
          <p className="text-sm font-medium text-success">Mastered ✓</p>
        ) : (
          <StreakDots streak={streak} needed={progress.needed} />
        )}
      </div>

      <fieldset
        className="mt-3 rounded-lg border border-border p-5"
        disabled={pending || result !== null}
        data-item-id={question.itemId}
      >
        <legend className="sr-only">Choose one answer</legend>
        <RenderedRichText blocks={question.stem} />
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {question.options.map((o) => {
            const isCorrect = result?.correctKey === o.key;
            const isWrongPick = result && selected === o.key && !result.correct;
            return (
              <label
                key={o.key}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                  isCorrect
                    ? "border-success bg-success-surface"
                    : isWrongPick
                      ? "border-danger"
                      : selected === o.key
                        ? "border-accent"
                        : "border-border"
                }`}
              >
                <input
                  type="radio"
                  name={groupId}
                  value={o.key}
                  checked={selected === o.key}
                  onChange={() => setSelected(o.key)}
                  className="h-4 w-4 accent-[var(--accent)]"
                />
                <span className="font-mono text-sm font-semibold">{o.label}</span>
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
          <div className={`mt-4 rounded-lg p-4 ${result.correct ? "bg-success-surface" : "bg-warning-surface"}`}>
            <p className={`font-semibold ${result.correct ? "text-success" : ""}`}>
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
                    href={`${chapterHref}/${result.route.conceptSlug}?from=${conceptSlug}`}
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
            <Link href={chapterHref} className={primaryButton}>
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
    </div>
  );
}
