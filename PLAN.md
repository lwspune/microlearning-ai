# MicroLearning AI — Plan

An interactive, mobile-first learning tool. It breaks a complex chapter into
interlinked **atomic concepts**. Each concept has an explanation and questions,
and a learning engine routes the student by mastery and misconceptions.

## Decisions (2026-10-12)

| Decision | Choice | Why |
|---|---|---|
| Product | Separate product; uses PYQ Vault as a content source | PYQ Vault already has concept units, concept-tagged PYQs and a verification process |
| Integration | **Build-time import** of PYQ Vault content into this app's own content files. No shared DB, no runtime API | Decoupled: a PYQ Vault schema change can't break the live app; re-imports are safe to repeat |
| Audience | Class 11–12 + entrance aspirants (JEE Mains / NDA / MHT-CET maths) | Matches the pilot chapter and the existing PYQ corpus |
| Content scope | Curated chapters only (no "upload your chapter") | Content correctness must be verifiable |
| Pilot chapter | **Complex Numbers** | PYQ Vault has notes for it in 3 exams (NDA, MHT-CET, JEE) and a dense web of prerequisites inside the chapter |
| Platform | Mobile-first **PWA** (opens in any browser; installable to home screen) | Same stack as PYQ Vault; KaTeX works natively; no app store. Go native (Expo) only after retention is proven |
| Backend | **Separate Supabase project** | Isolates learner data and RLS |
| Language | English only for now | |
| Stack | Next.js · Supabase · Tailwind · Vitest · KaTeX (mirrors PYQ Vault) | Known stack; no new framework |

## Content model

Content is code: authored as files, reviewed in git (the review is the human
approval step), seeded into the DB. Learner data is stored only in the DB.

```
concepts        id, chapter, slug, title, one_liner, status(draft|approved)
concept_prereqs concept_id → prereq_id   (DB: no self-loops; trigger blocks cycles)
explanations    concept_id, kind(intuition|formal|worked|visual), body
misconceptions  id, concept_id, description, remediation, fallback_prereq_id
items           id, concept_id, stem, answer, source(pyqvault|authored), source_ref, verified
item_options    item_id, text, is_correct, misconception_id   ← wrong option → why
learner_concept_state  user, concept, state, mastery, streak, next_review_at
attempts        user, item, chosen_option, correct, misconception_id, at
```

- Students are only ever served content that is both `approved` and `verified`.
  This is enforced in the DB (a view or RLS), not just in app code.
- Mastery is computed on the server only.

## Learning engine

- Concept states: `locked → available → learning → mastered → review_due`.
- Unlock: a concept opens when **all** its prerequisites are `mastered`.
- Mastery v1: 2–3 correct in a row on fresh items, then Leitner-style spaced
  review. Bayesian knowledge tracing (BKT) only once real data exists to tune it.
- Remediation: a wrong option → the hint for its misconception. A second miss
  on the same misconception → route to that misconception's `fallback_prereq`.
- Unlock, mastery and routing are pure functions, built test-first.

## AI roles

- **Offline authoring:** chapter → draft concept graph → human review →
  explanations → items with misconception-mapped wrong options →
  **blind re-derivation gate** (as in PYQ Vault) → approve.
- **Live tutor (server-side only):** "explain differently", hint ladder, "why
  was I wrong". It only uses the concept's approved content and is
  rate-limited per user. Free-text grading is deferred to v2.

## MVP scope

- One chapter: Complex Numbers.
- Screens: chapter map · concept flow (cards: hook → explain → check) ·
  feedback/hint sheet · "Today" review queue · tutor sheet.
- Auth: Supabase (Google). Guests can try the first 2–3 concepts.
- **Out of scope:** uploads, Marathi, more chapters, native app, payments,
  teacher views.
- Success metrics: before/after 10-PYQ diagnostic · chapter completion rate ·
  return rate after 7 days.

## Milestones

| # | What | Status |
|---|---|---|
| M0 | Concept graph + 3 complete concepts as reviewable files, **no app**. Validates granularity and misconception quality | **Done** 2026-10-13: graph and 3 concepts approved; now TypeScript in `src/content/` (rules: [src/content/AUTHORING.md](src/content/AUTHORING.md)) |
| M1 | Repo, PWA shell, Supabase schema + DB constraints, content import | |
| M2 | Concept flow + mastery/unlock engine (test-first) | |
| M1b | Pull real PYQs from PYQ Vault by concept tag (read-only import script) | After M2: the loop runs on authored items first |
| M3 | Misconception routing + review queue | |
| M4 | AI tutor | |
| M5 | Pilot with a small group of real students; measure | |

## M1 detailed plan (proposed 2026-10-13)

Steps 1–5 don't need Supabase. Step 6 needs the hosted dev project, because
there's no Docker here, so no local Supabase.

1. **Scaffold:** Next.js 16 (App Router, TS strict, Tailwind, ESLint) + Vitest.
   The PWA uses Next's built-in `app/manifest.ts`, so it's installable with no
   PWA package. Offline support is deferred. KaTeX is the only extra dependency
   (math rendering; PYQ Vault uses it too).
2. **Content is TypeScript:** `src/content/types.ts` +
   `src/content/chapters/complex-numbers/{graph.ts, concepts/*.ts}`. TS becomes the
   **single source of truth**. The M0 markdown concept files are retired
   (git history keeps them). Review happens in the app instead (step 5).
3. **Content validation tests (test-first):** the graph is acyclic and all its
   references resolve · exactly one correct option per item · every wrong option
   is tagged with a misconception from the same concept · IDs are unique ·
   fallbacks are valid · ≥5 items per authored concept.
4. **Answer verification is data-driven:** each option carries a sympy
   expression for how it's computed (the key, or the misconception's model).
   `npm run content:verify` exports the content to JSON, and a Python verifier
   applies AUTHORING.md rules 1–3. Python + sympy is a dev-only tool (no JS
   CAS is as reliable; PYQ Vault uses sympy too).
5. **Review route:** `/review/[concept]` renders a concept with KaTeX in a
   mobile layout. It's for content review now and becomes the base of the
   concept flow in M2.
6. **Supabase schema** (SQL migrations):
   - The tables in "Content model" above, with FKs, CHECKs and uniques.
   - A trigger that rejects cycles in `concept_prereqs`.
   - A deferred trigger enforcing exactly one correct option per item.
   - Students read content only through views that expose
     `approved AND verified` rows.
   - Learner tables are owner-only under RLS. Clients never write mastery
     directly; it's updated server-side only.
   - Integration tests run against the dev project.
7. **Seed:** `npm run content:seed` runs the validation tests, then `verify`,
   then upserts the content in one transaction. It fails before any write if
   either check fails.

**Definition of done for M1:** lint + tests + verify pass · `/review` checked in
a browser at phone and desktop width · schema tests pass against the dev
project.
