import "server-only";
import { type ConceptStatus, conceptStatus, type MistakeRow, rankMistakes } from "@/lib/performance";
import { createAdminClient } from "@/lib/supabase/admin";
import { createSessionClient } from "@/lib/supabase/server";

/**
 * Student performance for staff (PLAN.md "Student performance").
 *
 * Learner data is read AS THE VIEWER: row level security lets staff see their
 * own academy's students and the superadmin everyone, so a student outside
 * that simply comes back empty. Only content (concept titles, misconception
 * wording) is read with the service role; it holds no learner data.
 */

export type StudentSummary = {
  id: string;
  fullName: string;
  login: string;
  mastered: number;
  learning: number;
  reviewsDue: number;
  answered: number;
  correct: number;
  lastActive: string | null;
};

type SummaryRow = { user_id: string | null; mastered: number | null; learning: number | null; reviews_due: number | null; answered: number | null; correct: number | null; last_active: string | null };

function fail(where: string, error: { message: string }): never {
  console.error(`performance: ${where} failed`, error.message);
  throw error;
}

function toSummary(p: { id: string; full_name: string; email: string; username: string | null }, s: SummaryRow | undefined): StudentSummary {
  return {
    id: p.id,
    fullName: p.full_name,
    login: p.username ?? p.email,
    mastered: s?.mastered ?? 0,
    learning: s?.learning ?? 0,
    reviewsDue: s?.reviews_due ?? 0,
    answered: s?.answered ?? 0,
    correct: s?.correct ?? 0,
    lastActive: s?.last_active ?? null,
  };
}

/** Every student in an academy, with their summary, by name. */
export async function academyStudentSummaries(academyId: string): Promise<StudentSummary[]> {
  const db = await createSessionClient();
  const { data: students, error } = await db
    .from("profiles")
    .select("id, full_name, email, username")
    .eq("academy_id", academyId)
    .eq("role", "student")
    .order("full_name");
  if (error) fail("students read", error);
  if (students.length === 0) return [];
  const { data: summaries, error: se } = await db
    .from("learner_summary")
    .select("*")
    .in("user_id", students.map((s) => s.id));
  if (se) fail("summary read", se);
  const byId = new Map(summaries.map((s) => [s.user_id, s]));
  return students.map((p) => toSummary(p, byId.get(p.id)));
}

export type StudentPerformance = {
  summary: StudentSummary;
  academyId: string | null;
  chapters: { slug: string; title: string; groups: { name: string; concepts: { code: string; title: string; status: ConceptStatus }[] }[] }[];
  mistakes: { mistake: string; concept: string; recent: number; lastAt: string }[];
};

/** One student's performance, or null if there's no such student or the viewer may not see them. */
export async function studentPerformance(studentId: string, now: number): Promise<StudentPerformance | null> {
  const db = await createSessionClient();
  const { data: profile, error } = await db
    .from("profiles")
    .select("id, full_name, email, username, role, academy_id")
    .eq("id", studentId)
    .maybeSingle();
  if (error) fail("profile read", error);
  if (!profile || profile.role !== "student") return null;

  const [summary, states, mistakes] = await Promise.all([
    db.from("learner_summary").select("*").eq("user_id", studentId).maybeSingle(),
    db.from("learner_concept_state").select("concept_id, state, next_review_at").eq("user_id", studentId),
    db.from("learner_mistakes").select("misconception_id, recent, total, last_at").eq("user_id", studentId),
  ]);
  if (summary.error) fail("summary read", summary.error);
  if (states.error) fail("state read", states.error);
  if (mistakes.error) fail("mistakes read", mistakes.error);

  // Content only: concept titles and misconception wording.
  const content = createAdminClient();
  const [chapters, concepts, misconceptions] = await Promise.all([
    content.from("chapters").select("id, slug, title").order("slug"),
    content.from("concepts").select("id, chapter_id, code, title, grp").eq("status", "approved").order("code"),
    content.from("misconceptions").select("id, concept_id, mistake"),
  ]);
  if (chapters.error) fail("chapters read", chapters.error);
  if (concepts.error) fail("concepts read", concepts.error);
  if (misconceptions.error) fail("misconceptions read", misconceptions.error);

  const stateOf = new Map(states.data.map((s) => [s.concept_id, { state: s.state, nextReviewAt: s.next_review_at }]));
  const conceptTitle = new Map(concepts.data.map((c) => [c.id, c.title]));
  const misconception = new Map(misconceptions.data.map((m) => [m.id, m]));

  const ranked = rankMistakes(
    mistakes.data.map((m): MistakeRow => ({ misconceptionId: m.misconception_id!, recent: m.recent ?? 0, total: m.total ?? 0, lastAt: m.last_at! })),
  );

  return {
    summary: toSummary(profile, summary.data ?? undefined),
    academyId: profile.academy_id,
    chapters: chapters.data
      .map((ch) => {
        const own = concepts.data.filter((c) => c.chapter_id === ch.id);
        const groups = [...new Set(own.map((c) => c.grp))].map((name) => ({
          name,
          concepts: own
            .filter((c) => c.grp === name)
            .map((c) => ({ code: c.code, title: c.title, status: conceptStatus(stateOf.get(c.id), now) })),
        }));
        return { slug: ch.slug, title: ch.title, groups };
      })
      .filter((ch) => ch.groups.length > 0),
    mistakes: ranked.map((r) => {
      const m = misconception.get(r.misconceptionId);
      return { mistake: m?.mistake ?? "Unknown mistake", concept: (m && conceptTitle.get(m.concept_id)) ?? "", recent: r.recent, lastAt: r.lastAt };
    }),
  };
}
