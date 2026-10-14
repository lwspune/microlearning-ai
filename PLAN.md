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
| M1 | Repo, PWA shell, Supabase schema + DB constraints, content import | **Done** 2026-10-13: scaffold, TS content, validator, sympy verify, /review, Supabase schema (DB-enforced rules, RLS), content:seed. Dev DB seeded |
| M2 | Concept flow + mastery/unlock engine (test-first) | **Done** 2026-10-13: guest sign-in, cards → questions → mastery, server-side grading (`record_attempt`), `npm run e2e` golden path |
| M1b | Pull real PYQs from PYQ Vault by concept tag (read-only import script) | After M2: the loop runs on authored items first |
| M3 | Misconception routing + review queue | **Done** 2026-10-13: repeated mistake → refresher of the root concept (or a revise note); spaced review 1/3/7/14/30 days with Review today; a refresher counts as the root's review |
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

## M2 detailed plan (approved 2026-10-13)

Goal: a student opens the app on a phone, picks a concept, learns it through
cards, answers questions one at a time, and masters it. Answers are checked
server-side.

1. **Sign-in:** Supabase **anonymous sign-in** as the guest mode. Every
   visitor gets a real (anonymous) user, so their progress is stored with no
   separate guest system. Later they link Google to keep it. Google sign-in
   needs an OAuth client from Google Cloud (you create it), so it can follow
   when ready. New dependencies: `@supabase/supabase-js` + `@supabase/ssr`
   (sessions in Next.js cookies).
2. **Engine (pure TypeScript, test-first)** in `src/engine/`:
   - **Unlock:** a published concept is available when all of its
     *published* prerequisite ancestors are mastered. Unpublished ones are
     assumed known, so in the pilot C06, C14 and C25 all start open.
   - **Mastery** is enforced in the database (`record_attempt`) so it can't
     be farmed or raced: 3 *different* questions answered correctly since the
     last wrong answer. The app reads the target from the database.
   - **Next question:** an unseen question first. Once all have been seen,
     the least recently answered.
3. **Recording an answer (server-side, one transaction):** a server action
   grades the answer from the database. The client never receives the key or
   the misconception tags before answering. A `record_attempt` database
   function writes the attempt and the new state atomically, and refuses a
   stale double-submit.
4. **Screens (mobile-first):**
   - `/learn/complex-numbers`: the chapter map, showing each concept's state
     (locked / open / learning / mastered).
   - `/learn/complex-numbers/[concept]`: cards for hook → reveal → intuition
     → formal → worked example, then questions one at a time.
   - Feedback after each answer: right, or the remediation for the specific
     mistake that option reveals.
   - "Mastered" screen, then back to the map.
   Routing to the fallback concept is M3. Many fallbacks point to concepts
   not written yet, so M3 also has to handle that case.
5. **Tests:** engine unit tests · DB tests for `record_attempt` (atomic,
   owner-only, no client writes) · a browser golden-path script (guest →
   learn → answer → mastered) · screenshot sheet.

**Split out as M2b (its own branch):** the three interactive visuals
(Argand-plane widgets). They're independent of the engine and big enough to
review on their own.

## Follow-ups (logged 2026-10-13)

- **Before a public launch:** CAPTCHA on guest (anonymous) sign-ins. Supabase
  rate-limits them to 30/hour per IP, but bots could still create users.
  Also a periodic cleanup of guest users inactive for N days.
- **Google sign-in** (needs your Google Cloud OAuth client). Guests link
  Google to keep their progress across devices.
- **M3 must handle fallbacks to unwritten concepts.** Most pilot
  misconceptions route to concepts not authored yet (e.g. C05, C10, C11).

## M2c: slide lessons with voiceover (approved 2026-10-13)

Decided: **both modes** (self-paced slides + Coursera-style lecture),
**pre-generated AI voice**, **tablet first** (landscape), phones supported.

1. **Slides from existing content.** Each concept becomes a deck: hook →
   reveal → the idea → precisely (split into one slide per point when long) →
   worked example (one step per slide) → questions. No rewrite of the
   approved explanations.
2. **Narration scripts** (new content field, one per slide). Maths is written
   as it's *spoken* ("z bar", "a plus i b", "the square root of 2"), because
   text-to-speech can't read LaTeX. I draft them; you review them on
   `/review`, which gets an audio player per slide. A check ensures every
   slide has a script.
3. **Audio generation is an offline script, never a public endpoint**
   (English_AI_Tutor's lesson: its public TTS function was a cost-attack
   risk). `npm run content:audio` sends each script to the TTS service and
   uploads the MP3s to Supabase Storage. File names hash the script and voice,
   so only changed slides are regenerated. Each slide's duration is stored
   for the lecture timeline.
4. **Self-paced mode:** full-screen slide stage (16:9 on tablet, stacked on
   phone). Swipe, arrow keys and Back/Next buttons; progress dots; a 🔊 button
   plays that slide's narration and stops when the student moves on. Question
   slides use the existing server-side grading.
5. **Lecture mode:** slides advance in sync with the narration, with play/pause,
   a scrubber across the whole lecture, speed (0.75–1.5×), captions and a
   transcript. Questions follow when the lecture ends. Students switch modes
   at any time; their position is kept.
6. **Accessibility:** captions/transcript for all audio, keyboard navigation,
   focus management on slide change, reduced-motion support, no autoplay
   without a tap (browsers block it anyway).
7. **Tests:** deck building (pure, test-first) · narration completeness
   check · audio manifest check (every slide has audio matching its current
   script) · e2e for both modes on tablet and phone · screenshot sheet.

Order: deck + self-paced mode first (useful without audio) → narration
scripts + review → audio pipeline → lecture mode.

**Parked (2026-10-13):** the voice provider (OpenAI recommended, sample first)
and the API key. Steps 1, 2, 4 and the slide parts of 6–7 go ahead now;
step 3 (audio) and step 5 (lecture mode) wait for that decision.

## M3: routing back to the root gap + review queue (approved 2026-10-13)

**Insight:** with the unlock rule, a student who reaches a concept has
usually already mastered its published prerequisites. So routing back is a
**refresher** (slides plus 2 targeted questions, then straight back), not
re-learning.

### M3a: routing (first)
1. **Trigger:** the same misconception shows up a second time in a learner's
   recent attempts on a concept (window: last 10). Pure TypeScript engine
   function, test-first. The threshold is a tuning knob.
2. **Feedback panel:** besides the remediation, show "This looks like a gap
   in **Conjugate**. Quick refresher (≈2 min) →" plus "Keep trying here".
   - Fallback concept **published:** open its slides in *refresher mode*. A
     banner says "Refresher for Division", and the end offers 2 questions from
     that concept, then "Back to Division →", which returns to the questions slide.
   - Fallback **not published yet**, or an outside topic: show the
     remediation plus "Revise: expanding (x + y)²" (no link).
3. **Return path:** `?from=<slug>` on the refresher URL, validated against
   the chapter, so a student can never be sent off-site.
4. **Data:** no schema change. Attempts already store `misconception_id`,
   and fallbacks are in the database.

### M3b: review queue
1. **Spaced review:** when a concept is mastered it becomes due in 1 day,
   then 3, 7, 14 and 30 days (Leitner boxes). A review is 2 questions: both
   right moves it to the next box; any miss sends it back to box 1, with a
   prompt to reread.
2. **Routing feeds the queue:** a repeated misconception marks its fallback
   concept *due now*.
3. **Map:** a "Review today (n)" section above "Ready for you".
4. **Data:** one migration adds `review_box` and moves the due/advance rule
   into the database (like mastery: atomic and not farmable), test-first
   with DB tests.

**Tests:** engine unit tests (trigger, Leitner intervals) · DB tests for the
review rule · e2e: two repeated mistakes → refresher → back → mastered; a
due concept appears in "Review today".

## Teachers (2026-10-14)

**Now (since 2026-10-14, roles R2):** teachers sign in and open any concept
(`gateFor`: staff never wait on prerequisites); students follow the unlock
rule again (`MASTERY_GATE = true`). Before that, the gate was off for
everyone so teachers could use the chapter as guests.

**Future ideas (discussed, not planned yet):**
- *Present mode:* a projector view per concept (big type, one click per step,
  answer and solution revealed by the teacher, nothing tracked).
- *Ask the class:* a live poll on any question via QR/join code; results by
  option, labelled with each distractor's misconception.
- *Classes:* teacher accounts, several classes per teacher with join codes;
  progress belongs to the student, each class dashboard shows only its
  members (students × concepts, top misconceptions, reviews due).
- *Per-class pacing* would replace the global `MASTERY_GATE`.
- Open questions: phones in class? teacher sign-in (Google or email link)?
  single teachers or schools with an admin?

## Courses and the animated homepage (approved 2026-10-14, branch `courses-home`)

**Structure:** group → course → subject → chapter → concept.
- **Two groups, mutually exclusive:** *11th + 12th* (Maharashtra Board,
  CBSE, MHT-CET, JEE Main, NDA) and *Graduates* (CDS, AFCAT, CAPF). Every
  course belongs to exactly one group; a student picks their group once and
  only sees its courses (a cookie now, the profile once roles exist).
- **One concept pool per group.** A chapter belongs to one group and one
  subject (everything so far is Maths). Each course covers a subset of its
  group's concepts. Mastery is per concept, so a concept mastered once counts
  in every course of the group that covers it. Pools never share concepts
  across groups.
- **Unique concepts** are the ones exactly one course covers, worked out from
  the coverage data, not flagged by hand.
- **Coverage is verified with you.** Each course's concept list is `draft`
  until you approve it on `/review/courses` (concepts × courses grid, doubtful
  cells marked). Until then the course shows the whole chapter; you confirmed
  the chapter-level mapping (Complex Numbers is in all five 11th + 12th
  courses).
- **Routes:** `/courses/[course]` (chapters by subject, progress from the
  shared pool), `/courses/[course]/[chapter]` (the chapter map limited to the
  course). Concept pages stay `/learn/[chapter]/[concept]`; a validated
  `?course=` brings the student back to the right course map.
- **Unlock per course:** a prerequisite the course doesn't cover counts as
  known, like an unpublished one.
- No database change: the catalog is content in `src/content/courses.ts`;
  courses move into the database when enrolment or classes need them.

**Homepage:** the hero draws the real Complex Numbers concept graph behind
the Argand card (prerequisite edges draw in, a light travels from C01 to the
deepest concept), the headline rises word by word, a group switch
(11th + 12th / Graduates) with a sliding indicator, course cards that rise in
on scroll with a cursor spotlight, and a "How it works" line that draws as
you scroll. CSS + SVG only, no new package; reduced motion shows the finished,
still page.

**Status (2026-10-14, branch `courses-home`):** built; pending your review
and merge. Catalog + validator (`src/content/courses.ts`), course pages,
the remembered group switch, the animated homepage, `/review/courses`.
Complex Numbers coverage is drafted for all five 11th + 12th courses
(doubtful cells marked) and **awaits your check**; until you approve a
course's list, its students see the whole chapter.

## Phase 2: roles (approved 2026-10-14)

CrackSSB's model (its DECISIONS.md D23, D25; UI.md §2), adapted. Four roles
in the database, three areas in the app, layered: a role reaches its own area
and every area below it. Reaching an area never widens whose rows you read;
row level security decides that.

| Role | Lands on | Also opens |
|---|---|---|
| `student` (guest or named) | `/`, `/learn` | |
| `teacher` | `/teach` | student area |
| `academy_admin` | `/teach` (+ Manage) | student area |
| `superadmin` | `/admin` | `/teach` for a picked academy, student area |

Decisions: named accounts sign in with **email + password**, created by
staff (Google later). **No self sign-up now**; planned for later, so nothing
in R1 may block it (a guest could later link an email and get a profile).
Guests stay anonymous students with no profile. The global `MASTERY_GATE`
stayed off until teachers had logins (Backfill ledger 3; on since R2). The first
superadmin is the owner's account, created with `npm run user:create`; the
password is never stored in the repo.

- **R1 (branch `roles-r1`):** `academies` + `profiles` (role, academy, name,
  email, stage) with DB-enforced rules (staff need an academy, a superadmin
  has none, no profile for an anonymous login) and read-only RLS through
  `private` helpers; `/login` + sign-out; `routing.ts` ported from CrackSSB;
  the proxy guards `/teach` and `/admin`; a slim header with the area
  switcher; empty `/teach` and `/admin`; `npm run user:create`; staff always
  open every concept.
  **Status (2026-10-14):** built and checked; pending your review and
  merge. Your superadmin login exists (connect.lwspune@gmail.com).
- **R2 (branch `roles-r2`, approved 2026-10-14):** `create_academy()`
  (superadmin only) and `can_create_person()` (superadmin: anyone; academy
  admin: teachers and students in their academy; teacher: students in their
  academy), checked as the signed-in user before any service-role write.
  Staff paste a list (one person per line: name, then an email **or a
  username**); passwords are generated, shown once, never stored; an existing
  login is never touched. **Usernames** (students often have no email): the
  login is `<username>@students.microlearning.invalid` behind the scenes
  (the database enforces the match), unique across the platform, and the
  sign-in box takes "email or username". Screens: `/admin` (create and list
  academies; each academy's page adds and lists its people, any role),
  `/teach/people` (your academy's people; add the roles you may create).
  Decided: **no guardian-consent tracking** (students come through their
  academies); **password resets later**.
  **Status (2026-10-14):** built and checked; pending your review and merge.
- **Student performance (branch `student-performance`, approved
  2026-10-14):** staff see students' progress without classes. Teachers and
  academy admins see any student in their own academy; the superadmin sees
  everyone (the academy boundary stays). A read policy on
  `learner_concept_state` and `attempts` (`private.can_view_person`) plus two
  `security_invoker` views (`learner_summary`, `learner_mistakes`) do the
  aggregating under row level security. Screens: `/teach/students` (every
  student: mastered, in progress, reviews due, accuracy, last active; search
  by name) and `/teach/students/[id]` (summary, concept by concept, recent
  mistakes); the superadmin reaches students from each academy's page.
  **Status (2026-10-14):** built and checked; pending your review and merge.
- **R3 (parked 2026-10-14):** classes and the teacher dashboard. Kept
  simple for now; the full plan and its open decisions are in
  [SUGGESTIONS.md](SUGGESTIONS.md).
- **Later:** self sign-up; Google sign-in; staff reset a student's
  password (own academy only, new one shown once).

## Backfill ledger

### 1. The correct answer is always option A (logged 2026-10-13, done 2026-10-13: option a)
All 38 live items list the key first, so a student can learn to tap A.
- **Scope:** every published item (C04, C05, C06, C10, C11, C14, C25); new
  concepts avoid it from the start (positions vary per item).
- **Blast radius:** option keys are referenced by `attempts.option_key`, so
  re-lettering stored options would rewrite history. Only one guest exists
  in the dev DB, with 0 attempts.
- **Does it really apply:** yes. Fixed key position is a known test-taking
  cue, and the e2e test even had to look keys up because A was always right.
- **Options:**
  (a) **shuffle the display order per item** (deterministic from the item id)
  and show letters by position, while the stored keys stay as they are. No
  content, database or history change; it covers every item, including future
  ones. (b) Re-letter the stored options: touches content and the DB, and
  would rewrite attempts later.
- **Risk/reversibility:** (a) is UI-only and reverts in one commit.
- **Recommendation:** (a), now, before any real students.
- **Done:** (a), approved. `src/engine/optionOrder.ts` shuffles per learner
  and item (seed `userId:itemId`, so the order is stable on reload);
  `buildQuestion` sends options in display order with a positional `label`.

### 2. Punctuation wraps away from inline maths (logged 2026-10-14, done 2026-10-14: option a)
On a phone, a full stop or comma right after `$…$` could wrap onto its own
line ("so $d = 6$" then "." alone; C02's intuition started a line with ". The
cycle"). Seen in the Phase B learner screenshots.
- **Scope:** every rendered text with math followed by punctuation, across
  all 30 concepts.
- **Blast radius:** one function, `renderInline` in `src/lib/richText.ts`,
  used by every learner and review page. No content or database change.
- **Options:** (a) glue touching punctuation to the math in a `nowrap` span
  in the renderer, test-first; (b) move punctuation inside `$…$` in ~1,000
  strings.
- **Risk/reversibility:** (a) is a few tested lines; reverts in one commit.
- **Done:** (a), approved. `.,;:!?)]` after and `([` before are kept with the
  math (`richText.test.ts`, `RenderedRichText.test.tsx`).

### 3. The mastery gate is off for everyone (logged 2026-10-14, done 2026-10-14)
`MASTERY_GATE = false` opens every concept to every learner so teachers can
use the chapter in class. With roles, staff always open everything, so the
gate can come back on for students.
- **Scope:** `MASTERY_GATE` in `src/engine/unlock.ts`; every student's map.
- **Blast radius:** students would see locked concepts again; teachers who
  still use guest mode in class would too.
- **Does it really apply:** yes, once teachers sign in as teachers.
- **Risk/reversibility:** one constant; reverts in one commit.
- **Recommendation / decision:** keep it off until teachers have logins
  (R2), then turn it on. Owner agreed 2026-10-14.
- **Done:** turned on after R2 merged, approved by the owner (branch
  `mastery-gate-on`). Students unlock concepts by mastery; staff open all.

## Content: all 30 concepts (published 2026-10-14)

- All 30 Complex Numbers concepts are approved and seeded: 159 items, 0
  verifier problems. A new learner starts at C01, the only root of the graph.
- Built in four batches with `verify/draft_items.py` + `verify/build_concepts.py`
  (RUNBOOK section 3).

## Next: step-by-step solutions and visuals (approved 2026-10-14)

Decisions: animated, step-synced figures now (draggable later); a step-by-step
solution for every question, shown after answering; worked examples drive a
figure step by step. New authoring rules, enforced by the validator.
- **Phase A (engine):** SVG Argand-plane figure (points, vectors, circles,
  lines, rays, arcs, regions, angle marks; each element can appear at a step),
  rendered on the server, reduced-motion aware, with alt text. Item solutions
  stored in the DB and returned only after the attempt is recorded. Pilot on
  C10 and C24.
- **Phase B (content):** figures + solutions for all 30 concepts, in batches.
  Needs: `build_concepts.py` to emit `figure`/`solution`; an `ellipse` and a
  hyperbola-branch element for C28. When `backfill.ts` is empty, delete it
  and make `items.solution` NOT NULL for approved concepts (new migration).

**Phase A status (branch `figures-solutions`):** done, pending your review.
`items.solution` column + shape check (migration `20261014120000`); content
rules 9–15 enforced by the validator; SVG figure renderer; figures on idea and
worked slides; "See the solution" after answering; review pages show figures
per step. Pilot: C10 Argand plane and C24 circle locus. The other 28 concepts
are in `backfill.ts`.

**Phase B status (branch `phase-b-content`):** tooling done
(`verify/add_solutions.py`, `build_concepts.py` emits figures and
solutions). Batches 1–3 (Algebra, Geometry & polar, Roots): approved and
seeded. Batch 4, Loci C25–C30 (with new `ellipse` and `hyperbola` figure
elements): approved and seeded. `backfill.ts` is gone, `Item.solution` is
required, and `items.solution` is NOT NULL (migration
`20261014160000_item_solution_required`, applied). Merge checks passed;
pending your go-ahead to merge.

## Premium look and feel (branch `premium-ui`, 2026-10-14)

"Calm editorial" direction, chosen by you: warm paper and ink palette, deep
indigo accent, Fraunces display headings, soft card shadows. Redesigned: the
landing page (hero figure, how it works, chapter cards), chapter list,
chapter map (progress ring + group bars, Continue card, chapter path), lesson
slides (segmented progress, step chips, framed figures), questions (answer
cards, feedback panels), solutions, mastery moment, guest and locked screens.
Behaviour change: mastered concepts leave "Ready for you" and show on the path.
Not restyled: the internal /review pages (they inherit the new tokens).


## Chapter 2: Linear Programming (approved 2026-10-14, branch `lpp`)

Source: PYQ Vault MHT-CET notes (`mht-cet-maths/linear-programming`, 14
`cetlpp-*` concepts with traps). Graph approved as proposed: 13 concepts,
15 edges, in four groups (`src/content/chapters/linear-programming/graph.ts`).

| Group | Concepts |
|---|---|
| Graphing | C01 line from intercepts · C02 half-plane test · C03 feasible region · C04 bounded/unbounded/empty · C05 corner points |
| Reading figures | C06 ≥ or ≤ from the shading · C07 the system behind a figure |
| Optimising | C08 corner-point method · C09 minimum, negatives, max − min · C10 optimum over an unbounded region (NCERT) · C11 infinitely many optima |
| Word problems | C12 formulating an LPP · C13 solving end to end |

- **Step 1 (done):** graph + chapter test; registered; draft coverage in
  MH Board, CBSE and MHT-CET (unsure: C10 for MH Board and MHT-CET; C12–C13
  for CBSE, whose rationalised syllabus may have dropped the LPP types). Not
  in JEE Main (dropped in 2024) or NDA. You check it on `/review/courses`.
- **Step 2:** an x/y axis option on `Figure` (Argand stays the default);
  `build_concepts.py` and `build_index.py` take the chapter;
  `verify/models/linear_programming.py` keys by exact corner enumeration.
- **Step 3:** content in three batches, each reviewed on `/review` before
  seeding: Graphing (C01–C05); Reading figures + Optimising (C06–C11);
  Word problems (C12–C13). Seeding waits for the first approved batch.
