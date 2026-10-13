"use client";

import Link from "next/link";
import { useId, useState, useTransition } from "react";
import { RenderedInlineNodes, RenderedRichText } from "@/components/RenderedRichText";
import type { ConceptSession, Question } from "@/server/learning";
import { type AnswerResult, submitAnswer } from "../../actions";

type Open = Extract<ConceptSession, { kind: "open" }>;

const CARD_TITLES = ["Think about this", "The idea", "Precisely", "Worked example"];
const QUESTIONS = CARD_TITLES.length;

const primary = "rounded-md bg-accent px-5 py-3 font-medium text-background hover:opacity-90 disabled:opacity-50";
const secondary = "rounded-md border border-border px-5 py-3 font-medium hover:bg-surface";

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

export function ConceptFlow({ chapterHref, session }: { chapterHref: string; session: Open }) {
  const startedBefore = session.progress.state === "learning" || session.progress.state === "mastered";
  const [step, setStep] = useState(startedBefore ? QUESTIONS : 0);
  const [revealed, setRevealed] = useState(false);
  const [stepsShown, setStepsShown] = useState(1);

  const [question, setQuestion] = useState<Question>(session.question);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [streak, setStreak] = useState(session.progress.streak);
  const [mastered, setMastered] = useState(session.progress.state === "mastered");
  const [celebrate, setCelebrate] = useState(false);
  const [pending, startTransition] = useTransition();
  const groupId = useId();

  const { cards } = session;
  const next = () => setStep((s) => s + 1);

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

  if (step < QUESTIONS) {
    return (
      <section aria-labelledby="card-title">
        <p className="text-sm text-muted">
          Step {step + 1} of {QUESTIONS + 1}
        </p>
        <h2 id="card-title" className="mt-1 text-xl font-semibold">
          {CARD_TITLES[step]}
        </h2>
        <div className="mt-4 rounded-lg border border-border p-5 leading-relaxed">
          {step === 0 && (
            <>
              <RenderedRichText blocks={cards.hook.prompt} />
              {revealed && <RenderedRichText blocks={cards.hook.reveal} className="mt-4 border-t border-border pt-4" />}
            </>
          )}
          {step === 1 && <RenderedRichText blocks={cards.intuition} />}
          {step === 2 && <RenderedRichText blocks={cards.formal} />}
          {step === 3 && (
            <>
              <RenderedRichText blocks={cards.worked.prompt} />
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                {cards.worked.steps.slice(0, stepsShown).map((s, i) => (
                  <li key={i}>
                    <RenderedInlineNodes nodes={s} />
                  </li>
                ))}
              </ol>
              {stepsShown >= cards.worked.steps.length && (
                <p className="mt-3 border-t border-border pt-3">
                  <span className="font-medium">Answer: </span>
                  <RenderedInlineNodes nodes={cards.worked.answer} />
                </p>
              )}
            </>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {step > 0 && (
            <button type="button" className={secondary} onClick={() => setStep((s) => s - 1)}>
              Back
            </button>
          )}
          {step === 0 && !revealed ? (
            <button type="button" className={primary} onClick={() => setRevealed(true)}>
              Reveal
            </button>
          ) : step === 3 && stepsShown < cards.worked.steps.length ? (
            <button type="button" className={primary} onClick={() => setStepsShown((n) => n + 1)}>
              Show next step
            </button>
          ) : (
            <button type="button" className={primary} onClick={next}>
              {step === 3 ? "Try a question" : "Continue"}
            </button>
          )}
        </div>
      </section>
    );
  }

  if (celebrate) {
    return (
      <section className="rounded-lg border border-border bg-success-surface p-6" aria-live="polite">
        <h2 className="text-xl font-semibold text-success">Mastered ✓</h2>
        <p className="mt-2">
          You answered {session.progress.needed} different questions in a row correctly. {session.title} is mastered.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={chapterHref} className={primary}>
            Back to the chapter
          </Link>
          <button type="button" className={secondary} onClick={nextQuestion}>
            Keep practising
          </button>
        </div>
      </section>
    );
  }

  const needed = session.progress.needed;
  return (
    <section aria-labelledby="q-title">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="q-title" className="text-xl font-semibold">
          {mastered ? "Practice" : "Check yourself"}
        </h2>
        {mastered ? <p className="text-sm font-medium text-success">Mastered ✓</p> : <StreakDots streak={streak} needed={needed} />}
      </div>

      <fieldset
        className="mt-4 rounded-lg border border-border p-5"
        disabled={pending || result !== null}
        data-item-id={question.itemId}
      >
        <legend className="sr-only">Choose one answer</legend>
        <RenderedRichText blocks={question.stem} />
        <div className="mt-4 space-y-2">
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
                <span className="font-mono text-sm font-semibold">{o.key}</span>
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
            <p className={`font-semibold ${result.correct ? "text-success" : ""}`}>{result.correct ? "Correct!" : "Not quite."}</p>
            {result.remediation && <RenderedRichText blocks={result.remediation} className="mt-2" />}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {result ? (
          <button type="button" className={primary} onClick={nextQuestion}>
            Next question
          </button>
        ) : (
          <button type="button" className={primary} onClick={check} disabled={!selected || pending}>
            {pending ? "Checking…" : "Check answer"}
          </button>
        )}
        <button type="button" className={secondary} onClick={() => setStep(0)}>
          Read the explanation again
        </button>
      </div>
    </section>
  );
}
