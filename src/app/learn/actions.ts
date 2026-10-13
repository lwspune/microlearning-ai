"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { createSessionClient, currentUserId } from "@/lib/supabase/server";
import type { RenderedBlock } from "@/lib/renderedText";
import { renderRichText } from "@/lib/richText";
import { nextQuestionFor, type Question, type Route, routeAfterMiss } from "@/server/learning";

export type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const OPTION_KEY = /^[A-D]$/;
const LEARN_PATH = /^\/learn(\/[a-z0-9-]+){0,2}$/;

/** Signs the visitor in as a guest (anonymous user), then returns to `next`. */
export async function startAsGuest(formData: FormData): Promise<void> {
  const next = String(formData.get("next") ?? "");
  const target = LEARN_PATH.test(next) ? next : "/learn";
  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signInAnonymously();
  if (error) {
    console.error("startAsGuest: anonymous sign-in failed", error.message);
    redirect(`${target}?error=signin`);
  }
  redirect(target);
}

export type AnswerResult = {
  correct: boolean;
  correctKey: string;
  remediation: RenderedBlock[] | null;
  streak: number;
  needed: number;
  mastered: boolean;
  masteredNow: boolean;
  /** Set when this wrong answer repeats a recent mistake: where to go to fix the root gap. */
  route: Route | null;
  next: Question;
};

type RecordAttemptResult = {
  correct: boolean;
  correct_key: string;
  remediation: string | null;
  streak: number;
  needed: number;
  state: string;
  mastered_now: boolean;
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
    return {
      ok: true,
      data: {
        correct: r.correct,
        correctKey: r.correct_key,
        remediation: r.remediation ? renderRichText(r.remediation) : null,
        streak: r.streak,
        needed: r.needed,
        mastered: r.state === "mastered",
        masteredNow: r.mastered_now,
        route: r.correct ? null : await routeAfterMiss(itemId, userId),
        next: await nextQuestionFor(itemId, userId),
      },
    };
  } catch (e) {
    console.error("submitAnswer: loading the next question failed", e);
    return { ok: false, error: "Your answer was saved, but the next question didn't load. Reload the page." };
  }
}
