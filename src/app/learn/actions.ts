"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { safeLearnPath } from "@/lib/safeNext";
import { createSessionClient, currentUserId } from "@/lib/supabase/server";
import type { LessonLanguage } from "@/content/languages";
import type { RenderedBlock } from "@/lib/renderedText";
import { renderRichText } from "@/lib/richText";
import { rememberedLanguage } from "@/server/language";
import {
  nextQuestionFor,
  type Question,
  type RenderedSolution,
  type Route,
  routeAfterMiss,
  solutionFor,
  translatedRemediation,
} from "@/server/learning";

export type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const OPTION_KEY = /^[A-D]$/;

/** Signs the visitor in as a guest (anonymous user), then returns to `next`. */
export async function startAsGuest(formData: FormData): Promise<void> {
  const next = String(formData.get("next") ?? "");
  const target = safeLearnPath(next);
  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signInAnonymously();
  if (error) {
    console.error("startAsGuest: anonymous sign-in failed", error.message);
    redirect(`${target}${target.includes("?") ? "&" : "?"}error=signin`);
  }
  redirect(target);
}

export type AnswerResult = {
  correct: boolean;
  correctKey: string;
  remediation: RenderedBlock[] | null;
  /** The language the remediation is in. */
  remediationLang: LessonLanguage;
  /** Different questions right (by latest answer), and missed ones still to retry. */
  streak: number;
  toRetry: number;
  needed: number;
  mastered: boolean;
  masteredNow: boolean;
  /** Set when this wrong answer repeats a recent mistake: where to go to fix the root gap. */
  route: Route | null;
  /** Spaced review: this answer was part of a due review; done = passed or missed. */
  review: { reviewing: boolean; done: boolean; passed: boolean; correct: number; needed: number; nextReviewAt: string | null };
  next: Question;
  /** The answered item's step-by-step solution; sent only now that the attempt is recorded. */
  solution: RenderedSolution | null;
};

type RecordAttemptResult = {
  correct: boolean;
  correct_key: string;
  remediation: string | null;
  streak: number;
  to_retry: number;
  needed: number;
  state: string;
  mastered_now: boolean;
  reviewing: boolean;
  review_done: boolean;
  review_passed: boolean;
  review_correct: number;
  review_needed: number;
  next_review_at: string | null;
};

/** Grades an answer server-side for the signed-in learner and returns the next question. */
export async function submitAnswer(itemId: string, optionKey: string): Promise<ActionResult<AnswerResult>> {
  if (!UUID.test(itemId) || !OPTION_KEY.test(optionKey)) return { ok: false, error: "Invalid answer." };

  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "Your session has ended. Reload the page to continue." };

  const { data, error } = await createAdminClient().rpc("record_attempt", { p_user: userId, p_item: itemId, p_key: optionKey });
  if (error) {
    console.error("submitAnswer: record_attempt failed", error.message);
    return { ok: false, error: "Couldn't save your answer. Please try again." };
  }
  const r = data as RecordAttemptResult;

  try {
    const lang = await rememberedLanguage();
    const [next, solution, route, remediation] = await Promise.all([
      nextQuestionFor(itemId, userId),
      solutionFor(itemId, lang),
      r.correct ? null : routeAfterMiss(itemId, userId),
      r.remediation ? translatedRemediation(itemId, userId, lang) : null,
    ]);
    return {
      ok: true,
      data: {
        correct: r.correct,
        correctKey: r.correct_key,
        remediation: r.remediation ? renderRichText(remediation ?? r.remediation) : null,
        remediationLang: remediation ? lang : "en",
        streak: r.streak,
        toRetry: r.to_retry,
        needed: r.needed,
        mastered: r.state === "mastered",
        masteredNow: r.mastered_now,
        route,
        review: {
          reviewing: r.reviewing,
          done: r.review_done,
          passed: r.review_passed,
          correct: r.review_correct,
          needed: r.review_needed,
          nextReviewAt: r.next_review_at,
        },
        next,
        solution,
      },
    };
  } catch (e) {
    console.error("submitAnswer: loading the next question failed", e);
    return { ok: false, error: "Your answer was saved, but the next question didn't load. Reload the page." };
  }
}
