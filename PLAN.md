# Concept Ladder — Plan

(Called MicroLearning AI until 2026-10-19.)

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
  review. **v2 (2026-10-15):** each question counts by its latest answer;
  mastered at 3 different questions right with none left to retry (a miss
  comes back until answered right). Bayesian knowledge tracing (BKT) only once real data exists to tune it.
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
- **Two groups, mutually exclusive:** *K-12* (Maharashtra Board,
  CBSE, MHT-CET, JEE Main, NDA) and *Graduates* (CDS, AFCAT, CAPF). Every
  course belongs to exactly one group; a student picks their group once and
  only sees its courses (a cookie now, the profile once roles exist).
  Renamed from *11th + 12th* on 2026-10-18 (owner).
- **Boards split by standard** (owner, 2026-10-18): a board's page shows one
  standard at a time (Std XI / Std XII switch, remembered per browser, shared
  across boards). Entrance exams span both years, so their pages list both
  under headings.
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
(K-12 / Graduates) with a sliding indicator, course cards that rise in
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
- **Google sign-in (branch `google-sign-in`, approved 2026-10-20):**
  anyone may continue with Google and becomes a solo student
  (`claim_student_profile`); a guest links Google and keeps their progress;
  Google's own button plus One Tap, as in PYQ Vault. Details: RUNBOOK 2b.9.
- **Later:** staff reset a student's password (own academy only, new one
  shown once).

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

### 4. Every question has 4 options (asked 2026-10-15, done 2026-10-15)
135 of 230 questions had 3 options, so the answer never sat at D.
- **Done (owner's option a):** a 4th option on every one, each from a
  modelled mistake: new misconceptions per concept (conceptual where one
  fits, otherwise a modelled slip with fallback none), written by 10 agents
  in parallel, each proven by the verifier before merging. Duplicates were
  folded where the mistake was the same (C22); kept apart where it wasn't
  (C30). New options have the key D, so past attempts are unaffected. The
  validator and `draft_items.py` now require 4 options.
- Weakest new distractors (worth a look on /review): C08 maximum items get 0
  (the origin's value), C05-Q4's "1 corner", C04's "Can't tell without the
  objective function" on every C04 item.

### 5. Formal slides: titles, figures, defined terms (logged 2026-10-15, open)
The owner's review of Angle C01 (2026-10-15): terms used before they were
defined, every formal slide titled "Precisely" and text only, quadrants
discussed without a plane, angles drawn instead of turned. Fixed for C01
and for new work (AUTHORING.md 17–19, branch `lesson-slide-figures`).
- **Scope:** every published concept's `formal` text (186 concepts, 773
  formal slides). After the engine change, 227 slides still have no lead-in
  and keep "Precisely"; every visual concept's formal slides have no figure.
- **Blast radius:** content only (the engine already takes both forms);
  each rewritten concept is re-seeded. No item, option or attempt changes.
- **Does it really apply:** titles and definitions, yes, everywhere. Figures
  only where a picture teaches (visual concepts). Rotation only where
  something turns (angles, the unit circle, radians, arg z).
- **Also check while there:** a misconception that bundles two different
  student moves, so its feedback fits only one (C01-M1 told a student who
  picked 135° for 945° about a minus sign the question didn't have; split
  into M1 and M6).
- **Recommendation:** wait for the owner's verdict on C01; then a chapter at
  a time, angle and trigonometry chapters first.
- **Progress:** Angle Measurement (C01–C07) done 2026-10-15: titled slides,
  defined terms, figures, turning arms, and points one per click
  (AUTHORING.md 17–20). Each later chapter gets all of these together.
  Trigonometric Functions (C01–C10) done 2026-10-15, the same way in one
  pass (one agent per concept, my read-through and screen review); C09-M6
  split into M6 and M7. Trigonometry – II (`compound-and-multiple-angles`,
  C01–C10) done 2026-10-15 the same way; no concept there is visual, so
  figures only where a picture teaches (C01, C03–C08, C10); no misconception
  split. Sets and Relations (C01–C16) done 2026-10-15: figures on every
  formal slide of C03–C11, arrow diagrams and grids in C12–C16; no split
  (owner's call 2026-10-15: C02-M4 split into M4 and M5; C12-M2 feedback
  extended). Sequences and
  Series (C01–C14) done 2026-10-15, at most 10 agents at once; figures in
  12 concepts where they teach; C06-M2 feedback extended to name
  t₁ = S₁ (owner's call). Permutations and Combinations (C01–C14) done
  2026-10-15: figures in 11 concepts; C08-M1 split into M1 and M5 (the
  kth-word slip). Binomial Theorem (C01–C09) done 2026-10-15: figures in 7
  concepts; no split. Determinants and Matrices (C01–C12) done 2026-10-16:
  figures on every slide of C06 and in 10 others; no split; 41 matrix row
  breaks mangled to `\ ` by agents' scripts were fixed, and the validator
  now rejects them. Straight Line (C01–C12) done 2026-10-16: 11 concepts
  are visual, so figures on every formal slide, and C07 has them where they
  teach; no split (C06-M2 is one rule,
  "match the form before reading it", with feedback for both forms).
  Circle (C01–C08) done 2026-10-16: all visual, figures on every formal
  slide; no split; its C05 formula that ran off a phone led to
  `scripts/overflow-probe.mjs` (backfill 8). Conic Sections (C01–C14) done
  2026-10-16: all visual, figures on every formal slide, the eccentric
  angle drawn as a turn (C09, C10, C13); no split; 0 phone overflows.
  Complex Numbers (C01–C30) done 2026-10-18: points, defined terms and
  figures; misconceptions split in C03, C10, C14, C24 and C25; backfill
  9(a) fixed; C23's hook reveal split (the only phone overflow).
  Linear Programming (C01–C13) done 2026-10-18: points and defined terms; the
  12 visual concepts got a figure on every formal slide, mostly split from
  their existing pictures (half-plane tests, regions, corners, sliding
  objective lines); no split; 0 phone overflows. This completes the rework
  of every chapter live before 2026-10-15.
- **Wave 4** done 2026-10-18 (branch `std11-stats-probability`): all 17
  rewritten to rules 17–20 before publishing, one agent per concept. Figures
  where they teach: Venn diagrams (Prob C05, C06), trees (C08, C10), a unit
  square (C09), dice grids (C01, C02), number lines (Dispersion C01–C05, C07);
  long hook and worked formulas split; 0 phone overflows. Prob C05 found
  `venn()`'s caption on the frame edge: the helper now puts a two-set caption
  just inside the top and a three-set one bottom left (no shipped figure
  used it).

### 6. Venn labels on the rectangle's top edge (logged 2026-10-15, done 2026-10-15)
Found in the Sets and Relations slide rework: a label at `y` 6.45–6.75 with
`labelAt: "n"` in a 10 × 7 rectangle sits on the top edge. Fixed on the
lesson slides (C03, C04: label at `y` 7.05, view to 7.9).
- **Scope:** 6 solution-figure labels: sets-and-relations C03 (1), C05 (3),
  C08 (1); straight-line C01 (1). Find them with a grep for labels at `y`
  6.4–7 with `labelAt: "n"`.
- **Blast radius:** those figures only; re-seed the chapters.
- **Does it really apply:** C05's three are readable (the halo keeps the text
  clear of the line); C03's ran through its label. Check each by eye.
- **Recommendation:** partial: move only the ones the edge cuts through.
- **Done:** on a closer look only C03-Q4's solution label sat on the edge
  (C05's three are inside its taller 10 × 8 box, C08's is the U corner
  label, straight-line C01 has no rectangle); moved above it, view to 7.9.

### 7. What the books assume, chapter by chapter (logged 2026-10-16, open)
Learning: the textbook's starting point is not the student's. Each chapter
marks the Std X (or other-chapter) knowledge its book assumes as `ext`, and
nothing teaches or checks it; the owner found A.P. missing from Sequences
and Series (now C15–C18). New chapters audit `ext` first (RUNBOOK 2.1).
- **Scope:** 13 chapters, about 45 `ext` items, of two kinds.
  (a) Taught in another chapter but not linked: ⁿCᵣ (Binomial ← Permutations
  and Combinations), standard-angle values, quadrant signs and trig functions
  (Trig II, Circle, Straight Line, Complex ← Trigonometry – I), directed
  angles (Trig I ← Angle), lines, circles, conics (Complex, LPP ← coordinate
  chapters). (b) Std X basics taught nowhere: distance, midpoint and section
  formulas, completing the square, laws of indices, surds, quadratic
  formula, simultaneous equations, linear inequalities, Pythagoras,
  algebraic identities, number systems, ratio, area of a triangle.
- **Blast radius:** (a) wording of `ext` items and fallback topics only (no
  gating: prerequisites don't cross chapters); (b) new opening concepts per
  chapter, a new gate on its first concepts (started ones stay open), new
  verifier models; e2e expectations if a chapter's starting concepts change.
- **Does it really apply:** not every item. Some are taught in Std XI itself
  (trig in this course) or are one-line recalls; the risky ones are those
  whole topics build on (A.P. was one; completing the square under Circle
  and Conics, the distance formula under the coordinate chapters, laws of
  indices under G.P. and Binomial are the likely next).
- **Risk and cost:** (a) small, reversible, an hour; (b) a chapter-sized job
  each, like the A.P. work, and it gates students.
- **Recommendation:** partial. Do (a) now. For (b), the owner picks which
  basics to teach, starting with the ones above; the rest stay `ext`.

### 8. Long maths runs off a phone screen (logged 2026-10-16, done 2026-10-18)
Learning: reading the slide text can't show which formula is too wide, only
the screen can. Found on Circle C05 (now split). `scripts/overflow-probe.mjs`
lists every formula wider than a 390 px slide; RUNBOOK 3 step 7 runs it on
every chapter from Circle on.
- **Scope:** 19 formulas in 7 live chapters (probe, 2026-10-16). 14 are hook
  reveals, which the slide rework leaves alone: Trigonometry – II 4 (sum-to-
  product +338 px, product-to-sum +86 px), Binomial 4 (`(101)^4` +673 px,
  approximation +52 px), Determinants 2 (+240 px, +37 px), Sequences 2
  (+128 px, +41 px), Straight Line 1 (+31 px), Circle 1 (+5 px). 5 are in
  Sequences slides: worked examples of C16 (+33 px), C17 (+120 px),
  recurring decimals (+18 px), sigma formulas (+137 px), and C17 formal 5
  (+17 px).
- **Blast radius:** text only. Splitting `$a = b = c$` into `$a = b$ $= c$`
  changes no maths, no item and no verifier model; a reseed publishes it.
- **Does it really apply:** yes for all 19. Each is cut off or scrolls
  sideways on a 390 px phone, and narrower phones are worse. The worst
  (Binomial, Trigonometry – II, Determinants) hide most of the answer.
- **Risk and cost:** low and reversible; about half an hour plus one
  build/e2e/seed cycle.
- **Recommendation:** do, as one `fix:` commit on the next chapter's branch,
  once the owner agrees.
- **Done 2026-10-18** (owner: yes): a fresh probe of all 13 live chapters
  found 23 formulas, 17 of them in Sequences and Series. Each chain of
  equalities is split at its `=` signs, the longest sums at a `+`; one long
  formula in LP C10 pushed four short ones off with it. The probe now
  reports 0 in every live chapter.

### 9. Feedback a student sees is wrong or uses untaught terms (logged 2026-10-16, done 2026-10-18)
Learning: slide agents read each misconception's feedback closely, and in
Complex Numbers they found shipped feedback that the rework may not touch.
- **Scope:** (a) C27-M1 says "on the other half of the circle it is $-\theta$".
  That holds only for $\theta = \pm\frac{\pi}{2}$; on the other arc the
  argument is $\theta - \pi$. A student who picks "the whole circle" (Q1, Q2)
  reads a false statement. (b) C09-M3's feedback uses $|z|$, which C11
  teaches; C11 is not a prerequisite of C09. (c) C04's worked-example figure
  crowds its "− (1 + 2i)" label between "11 + 10i" and "10 + 8i".
- **Blast radius:** text of two remediations and one label; no item, key or
  model changes. (a) and (b) show only after a wrong answer.
- **Does it really apply:** (a) yes, it is false. (b) yes, but mild: the
  rest of the feedback still works. (c) cosmetic.
- **Risk and cost:** low and reversible; minutes, plus a reseed.
- **Recommendation:** do (a) now: "on the other arc the argument is
  negative ($\theta - \pi$)". (b) reword without $|z|$. (c) with backfill 8.
- **Done (a), 2026-10-18** (owner: yes), on the Complex Numbers slides
  branch: "on the other arc of the circle the argument is $\theta - \pi$,
  not $\theta$".
- **Done (b) and (c), 2026-10-18:** C09-M3 writes the modulus as
  $\sqrt{a^2 + b^2}$ (from squaring and adding the two equations), not $|z|$,
  and checks against $a + ib$; C04's worked-example labels sit apart.

### 10. A key that can be read off the stem (logged 2026-10-18, open)
Learning: Std XII Line and Plane C05-Q6 (draft, fixed before shipping) asked
where two lines meet, and they met at the first line's printed point, so the
key could be copied from the stem. The agent brief now forbids it for new work.
- **Scope:** unknown; shipped items have not been scanned. A first pass:
  flag items whose key text appears verbatim in the stem, then read each.
- **Scan, 2026-10-18 (after wave 2):** 9 of 1695 approved items have the
  key text in the stem; none is a copy-the-answer case. Logic C05-Q3/Q5 and
  Complex C20-Q1 (the answer is a sub-expression by nature), Dispersion
  C06-Q5/Q6 (every option is a name in the table), Sets C08-Q5 (both given
  percentages are options); Probability C09-Q6 (1/4), Limits C04-Q5 (√2) and
  Conics C10-Q2 (x² + y² = 4) are the book's true answers that happen to echo
  a given number, with equally plausible distractors.
- **Recommendation:** decline; change nothing. Close unless the owner wants
  the three coincidences reworded.

### 11. NDA's Linear Inequalities has no one-variable inequalities (logged 2026-10-20, done 2026-10-21)
Learning: the CBSE build (phase 2) adds a pool chapter on linear inequalities
in one variable (rules, number line, systems, word problems). NDA's Linear
Inequalities is only the graphing half of Linear Programming (C01–C04).
- **Scope:** one NDA course chapter; NDA's maps and progress would gain
  concepts. Check NDA's PYQs for one-variable inequalities before proposing.
- **Recommendation:** decide after CBSE phase 2 ships; ask the owner first.
- **Done 2026-10-21 (owner: "fix it"):** NDA's papers ask a double inequality (2020 Apr Q10)
  and a sign question (2019 Sep Q7), so NDA's Linear Inequalities now takes the whole
  `linear-inequalities` chapter, then Linear Programming C01–C04. Same URL; mastery carries over.

### 12. Right angles drawn by hand (logged 2026-10-21, open)
Learning: Std IX and X geometry needs right-angle and equal-side marks on
nearly every figure, so the figure tool now has `rightAngle` and segment
`ticks` (AUTHORING.md 21), drawn at a fixed size on screen. Earlier chapters
drew right angles as three-point `curve`s in plane units, so their size
changes with the view.
- **Scope:** 29 marks: Heights and Distances 24, Application of Derivatives 5.
  No chapter marks equal sides.
- **Does it apply:** only cosmetically; the existing marks are correct and
  readable at their views.
- **Recommendation:** defer; swap them only if a figure is touched anyway, or
  as one small batch with a figure-sheet check. Ask the owner first.

## Sequences and Series opens with A.P. (approved 2026-10-16, branch `series-ap-basics`)

The owner: the chapter "should start with basics of seq and series + ap". The
Std XI book assumes A.P. (Std X), so the chapter adds it at the front.
- **Concepts:** C15 sequences and series; C16 A.P. and its nth term; C17 sum
  of n terms of an A.P.; C18 three or four numbers in A.P. New ids, listed
  first: C01–C14 keep their ids, item ids and every student's progress.
- **Gate:** C16 becomes a prerequisite of C01 (Spotting a G.P.) and C09
  (H.P.). Concepts a student has started stay open; unstarted G.P./H.P. ones
  lock until A.P. is mastered (owner's choice).
- **Items:** NCERT Class 10 Arithmetic Progressions and the Maharashtra SSC
  Algebra board papers (PYQ Vault `ncert-10`, `mh-ssc-10`), verified like the
  rest; written as points with figures from the start.
- **Order:** graph (done), the four concepts (one agent each), checks,
  read-through, sheets, owner review, publish.

## Slides as points, one per click (approved 2026-10-15, branch `progressive-points`)

The owner's review of C02's idea slide: one bulky paragraph overloads; write
single, simple sentences as points that appear one per click, so
understanding builds step by step.
- **Content:** the idea slide and each formal slide may be a list of points:
  one sentence each (about 20 words at most), up to 6 per slide; a formal
  section in points has its own short title. Old text keeps working as a
  paragraph.
- **Deck:** Next (button, → key, swipe) shows the next point; after the last
  one it moves on. Back hides the last point. A slide already read shows all
  its points. New points are announced to screen readers.
- **Figures follow the points:** figure step n appears with point n.
- **Phones:** points stay above the figure (owner, 2026-10-15). No "Show all"
  link (parked).
- **Preview:** `/review/<chapter>/<concept>/slides` clicks through like the
  lesson, so unpublished slides can be checked as learners see them.
- **Content first:** all of Angle Measurement, C01–C07 (owner's choice).
- **Done 2026-10-15:** engine and C01–C07 approved by the owner; merged,
  deployed, published and checked on the live site.

## Answering: tap to answer, retry until right (approved 2026-10-15)

The owner's choices after C01: (b) tap an option to answer, no Check step;
wrong questions are retried until right and count toward mastery, instead of
a miss resetting a run "in a row" and the only help being to reread whole
topics; and measure the wait after answering.
- **Tap to answer** (branch `tap-to-answer`): each option is a button; the
  tapped one shows "Checking…". A mis-tap counts (owner's choice).
- **Retry until right** (branch `retry-wrong`): `record_attempt` counts each
  question by its latest answer; mastered at 3 right with none to retry;
  `learner_concept_state.to_retry`. `nextItem` brings a miss back after one
  other question. Pill: "2 of 3 right · 1 to retry"; "Try again" on a retry.
- **The wait** (measured 2026-10-15 on the live site): 2.4–3.4 s from tap to
  feedback, 2.0–2.9 s of it the server action. Vercel runs functions in
  `iad1` (Washington) while Supabase is in `ap-south-1` (Mumbai): ~8 database
  round trips per answer cross the world. The same action from Pune takes
  ~0.3 s. Fix proposed: functions in `bom1` (`vercel.json` `regions`);
  parked by the owner 2026-10-15 (SUGGESTIONS.md).

## Lesson slides: definitions, figures, rotation (approved 2026-10-15, branch `lesson-slide-figures`)

From the owner's review of Angle C01's slides. Decisions: formal slides are
titled by their bold lead-in; arms turn at 90° a second; built on a branch
of its own, apart from wave 4.
- **A. Formal slides** (`src/lessons/deck.ts`): titled by the section's bold
  lead-in (else the slide it continues; "Precisely" only when there is
  nothing before); a paragraph ending in a colon keeps what it introduces;
  `formal` may be a list of sections, each with its own figure, played like
  the idea slide's. Titles render maths.
- **B. Turning arms** (`turn` figure element): the arm rotates from the
  initial to the terminal arm at 90°/s, its trace drawn alongside and
  winding outward past a full turn; the next step waits for it. Solutions
  keep quick figures.
- **C. C01 rewritten** as the pilot: terms defined, a figure on every
  formal slide, the −820° spin turned; C01-M1 split into M1 and M6.
- **D. Rules:** AUTHORING.md 17–19; checked by the validator (17).
- **Preview:** `/review/<chapter>/<concept>/slides` shows the slides from the
  files, since the lesson reads published content.
- **E. Backfill:** ledger 5, after the owner's verdict on C01.
- **Done 2026-10-15:** C01 approved by the owner; merged, deployed, C01
  published and checked on the live site.

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

**Published 2026-10-15** (approved by you): 13 concepts and the MH Board, CBSE and MHT-CET coverage are approved and seeded (71 items); smoke passes on every route. Pending your merge of `lpp`.

**Status before publishing: the whole chapter was built as drafts.** All 13 concepts,
71 items, 0 verifier problems; every figure checked in light and dark.
New along the way (approved by you): **questions can show a figure** with
their stem (C06, C07, C08-Q4 read a shaded region, as in the exam), with a
migration adding `items.figure` (applied). A chapter with nothing published
shows "Coming soon" on its course page instead of linking to an empty map.
**To publish:** your review on `/review/linear-programming/...`, then set the
13 concepts and the three course coverages you agree with to `approved`
and run `npm run content:seed`. Until it is seeded, the four LPP chapter
routes 404 (`npm run smoke` flags them), so publish before merging.

Earlier: batch 1 (C01–C05, 28 items) built
as drafts, 0 verifier problems, every figure checked in light and dark.
Pending your review on `/review/linear-programming/...`. Written with one
agent per concept (RUNBOOK 3, step 5c), at your request, to go faster.
Choices to check: C04-M4 ("a ≥ and a ≤ always contradict") is the least
certain misconception; C03 items are "how many of these points" counts,
because a misconception whose region contains the true one can't be caught
by a "which point" question.

## Std XI Maths, Maharashtra State Board (approved 2026-10-14)

Goal: the whole Balbharati Std XI Maths book (Part 1 and Part 2, 18
chapters) in the MH Board course, end to end, built autonomously.
Complex Numbers already exists; the other 17 chapters are new
(estimate ~175 concepts, ~900 items).

**Sources.** The textbooks: `C:\Vilas\LWS_Pune\NDA_Subjects_Content\Subjects\Maths\State_Board\11th\Maths`
(chapter PDFs). PYQ Vault's `mh-sb-11` exam has the whole book transcribed
(2,941 questions, worked solutions, a book-section `subtopic` on each):
`Question_Bank/scripts/mh-sb-11/data/<chapter>-11.questions.json`. The PDF
text layer drops surds and fractions, so maths is read from PYQ Vault's
LaTeX or from the page images, never from extracted text (RUNBOOK 6).

**Owner's decisions (2026-10-14):**
1. Concept graphs: **I approve them myself** (no owner checkpoint). Each is
   locked against the book's sections and PYQ Vault's subtopics before any
   content is written.
2. Publishing: **I publish (seed) and merge each wave myself** once every
   gate passes (validator, sympy verifier, my read-through, figure sheets,
   Definition of done). The owner reviews live.
3. Items are based on the book's own exercises, turned into 4-option
   questions; keys are still re-derived by the verifier (the book has
   misprints). Source: `{ kind: "pyqvault-practice", ref: "mh-sb-11/<chapter>/<book ref>" }`.
4. Mathematical induction is **left out** (Part 2 Ch.4 is built as
   Binomial Theorem only).
5. The MH Board course page lists chapters in **Std XI and Std XII**
   sections.
6. **MH Board only** for now; the other courses' coverage of these chapters
   is a later pass. Each new chapter covers its whole book chapter, so it
   needs no coverage list.

**Waves** (a branch each; content written one agent per concept):

| Wave | Chapters |
|---|---|
| 0. Tooling | verifier compares sets, intervals, matrices and tuples; figure `curve` element and an axis-free mode (Venn diagrams); Std XI / XII on chapters and the course page |
| 1. Algebra | Sets and Relations · Sequences and Series · Permutations and Combinations · Binomial Theorem · Determinants and Matrices |
| 2. Trigonometry | Angle and its Measurement · Trigonometry I · Trigonometry II |
| 3. Coordinate geometry | Straight Line · Circle · Conic Sections |
| 4. Statistics and probability | Measures of Dispersion · Probability |
| 5. Calculus | Functions · Limits · Continuity · Differentiation |
| Extra | Complex Numbers: settle the MH Board "unsure" cells against the book |

**Status:**
- Wave 0 done (branch `std11-algebra`).
- Wave 1 done 2026-10-15: 65 concepts, 380 items (Sets and Relations 16 ·
  Sequences and Series 14 · Permutations and Combinations 14 · Binomial
  Theorem 9 · Determinants and Matrices 12), every key and distractor
  verified, read through and figure-checked; published and merged.
- Wave 2 done 2026-10-15: 27 concepts, 159 items (Angle and its Measurement
  7 · Trigonometric Functions 10 · Compound and Multiple Angles 10), same
  gates; published and merged.
- Wave 3 done 2026-10-15: 34 concepts, 204 items (Straight Line 12 · Circle
  8 · Conic Sections 14); equation answers verified as loci; same gates;
  published and merged. The book teaches asymptotes and the hyperbola's
  director circle without exercises, so those items are authored.
- Wave 4 done 2026-10-18: 17 concepts, 102 items (Measures of Dispersion
  7 · Probability 10), every key and distractor verified (0 problems); paused
  2026-10-15 as drafts, then its slides rewritten as points with figures
  (lesson-rework section above); same gates; published and merged. No
  before/after sheet (owner, 2026-10-18: not for chapter content).
- Wave 5 done 2026-10-18 (branch `std11-calculus`): 32 concepts, 187 items
  (Functions 11 · Limits 9 · Continuity 6 · Differentiation 6); graphs locked
  against every book subtopic; written to the points rules from the start;
  every key and distractor verified, every figure sheet checked, 0 phone
  overflows; same gates; published and merged. Agents found two sympy traps,
  now in the prompts: one-sided limits of a `Piecewise` (take the piece on
  that side) and whole-number bases like 24^x (rewrite over primes). The
  slug `differentiation` is Std XI's; the Std XII chapter of the same name
  will need its own slug. This completes the book (17 new chapters plus
  Complex Numbers) apart from the Extra row.
- Extra row done 2026-10-18 (branch `coverage-mh-complex`): MH Board and
  MHT-CET Complex Numbers coverage settled against the book's text and all
  254 exercise and solved-example questions, cross-checked with MHT-CET's
  2026 papers. Kept 22 (C24 circle and C25 perpendicular-bisector loci
  confirmed by section 1.8 and Ex 1.4 Q6); left out C13, C18, C22, C26 and C27
  (not in the book), with C28–C30 already out. Approved by the owner, so
  students of those two courses see the 22. LPP C10 no longer doubtful for
  them (3 of 11 HSC 12 papers' LPP questions minimise over an unbounded
  region). CBSE, JEE Main and NDA coverage unchanged and still draft.

## Std XII Maths, Maharashtra State Board (approved 2026-10-18)

Goal: the Balbharati Std XII Maths book (Part 1 and Part 2, 15 chapters) in
the MH Board course's Std XII section, built the Std XI way. Linear
Programming is already live; the other 14 chapters are new (estimate ~140
concepts, ~850 items).

**Sources.** Textbooks: `C:\Vilas\LWS_Pune\NDA_Subjects_Content\Subjects\Maths\State_Board\12th`
(`Part 01`, `Part 02` chapter PDFs). The whole book is transcribed in PYQ
Vault's State Board pipeline (2,536 questions, a book-section `subtopic` on
each): `Question_Bank/scripts/stateboard/data/<chapter>-12.questions.json`,
exercise solutions in the sibling `*.solutions.json` files. HSC past papers
(`Question_Bank/scripts/mh-hsc-12-pyq/data`) are a small extra pool. Maths is
read from those rows or page images, never from a PDF's text layer.

**Owner's decisions (2026-10-18):**
1. Same autonomy as Std XI: I approve concept graphs myself, and publish
   and merge each wave once every gate passes; the owner reviews live.
2. MH Board course only; other courses' coverage is a later pass.
3. Slugs that clash with a live Std XI chapter take `-12`:
   `differentiation-12`, `trigonometric-functions-12`. Titles stay the book's.
4. Waves in book order (below). Items from the book's exercises, keys
   re-derived by the verifier, refs `mh-sb-12/<chapter>/<book ref>`.
   Agents: one per concept, at most 5 at once.

| Wave | Chapters |
|---|---|
| 1. Logic and algebra | Mathematical Logic · Matrices · Trigonometric Functions |
| 2. Geometry | Pair of Straight Lines · Vectors · Line and Plane |
| 3. Calculus I | Differentiation · Application of Derivatives |
| 4. Calculus II | Indefinite Integration · Definite Integration · Application of Definite Integration · Differential Equations |
| 5. Probability | Probability Distributions · Binomial Distribution |

**Status:**
- Wave 1 done 2026-10-18 (branch `std12-logic-algebra`, paused once at a
  clean point and resumed): 37 concepts, 214 items (Mathematical Logic 11 ·
  Matrices 11 · Trigonometric Functions 15), every key and distractor
  verified, every figure sheet checked, 0 phone overflows; same gates;
  published and merged. Book misprints caught and turned into distractors
  or notes: Logic duality key, Matrices Ex 2.2 Q.6(iii), Trig
  SolvedEx.Cosine.5 (−1/8 for −1/4) and Applications.1(i) (cos B for cos A).
  Lesson: an agent that opens /review for its concept before the lead
  registers it leaves the dev server serving a stale not-found; rewriting
  the chapter index clears it.
- Wave 2 done 2026-10-18 (branch `std12-geometry`): Pair of Straight Lines
  9 concepts / 53 items, Vectors 13 / 77, Line and Plane 11 / 65; every key
  re-derived, every figure sheet checked (about 50 label clashes moved),
  0 phone overflows; same gates; seeded, DoD passed, merged. Book faults
  caught: Line and Plane Misc I Q.5 (no printed option correct) and Q.18
  (skew lines, wrong key), SolvedEx.6 of Vectors 5.5 (34 for −34).
  Lessons, now in the agent brief and prompts: a line's label sits 85% along
  its clipped segment, "n"/"s" labels centre on their anchor, and a key must
  not be readable off the stem (backfill 10). Agents check labels with a
  shared rough renderer before handing back.
- Wave 3 done 2026-10-18 (branch `std12-calculus-1`): Differentiation 12
  concepts / 72 items, Application of Derivatives 10 / 57; every key
  re-derived (hand and sympy), every figure sheet checked (about 30 labels
  moved), 0 phone overflows; same gates; seeded, DoD passed, merged. Paused
  mid-wave for a Windows restart (page file 23 GB, free disk 4.7 GB); resumed
  at 10 agents (owner) with 17 GB free. Book faults worked around: Misc I Q.6
  (log x at x = −1), Ex 2.3 Q.2 at θ = π/2 (dx/dθ = 0), Ex 1.3 Q.3 (iv) (81
  has no usable point).
- Wave 4 done 2026-10-18 (branch `std12-calculus-2`): Indefinite Integration
  11 concepts / 65 items, Definite Integration 7 / 39, Application of Definite
  Integration 4 / 24, Differential Equations 9 / 53; 10 agents at a time.
  Antiderivative keys checked by differentiating back, definite ones by
  numerical integration, ODE keys by an ODE solver (or by hand when a solver
  can't run backwards); about 20 figure labels moved; 0 phone overflows;
  same gates; seeded, DoD passed, merged. Book faults caught: Def Int 4.2
  Ex.1 (151/3 for 57/2), Ex 4.2 I (9) key on the wrong interval, Ex 4.2 II
  (4) key 0 for 8/21; Indef Int Ex 3.2(A) II (14); DE Ex 6.6 Q2 (log 2 =
  0.6912), 6.4 Ex.2 sign, Misc II Q.2 iv). Lesson: a stale not-found review
  page sometimes needs a dev-server restart (RUNBOOK).
- Wave 5 done 2026-10-18 (branch `std12-probability`): Probability
  Distributions 7 concepts / 41 items, Binomial Distribution 4 / 24; every
  key re-derived by hand and by summing the table or integrating the p.d.f.,
  every figure sheet checked (about 10 labels moved), 0 phone overflows; same
  gates; seeded, DoD passed, merged. Book faults worked around: Binomial
  Ex 8.1 Q.4 (ii) (45/1024 for 45/512), ProbDist Ex 7.1 Q.10 and Q.15 keys,
  7.3.2 SolvedEx.1 (minus signs dropped), and two densities that don't
  integrate to 1 (7.4 SolvedEx.4, the 3(1 − 2x²) rows), left out.
- **Std XII done 2026-10-18:** all 15 chapters live (14 new: 134 concepts,
  784 items, plus Linear Programming). With Std XI's 18, all 33 MH Board
  chapters are live.
- **Other courses (owner, 2026-10-18, later):** CBSE, MHT-CET, JEE Main and
  NDA get their own chapters, built later, taking the relevant concepts from
  this pool rather than listing the MH Board chapters with coverage. Check
  each course's chapter names against PYQ Vault first. Not started.

## MHT-CET Maths course (approved 2026-10-19, branch `mhtcet-course`)

Goal: the MHT-CET course gets its own chapters, named and split the way PYQ
Vault names them, each taking its concepts from the MH Board pool. Mastery
stays per concept, so nothing is built twice.

**Sources.** PYQ Vault's live MHT-CET Maths taxonomy (26 chapters, about
3,400 PYQs 2021–2026); its per-subtopic State Board rulings
(`Question_Bank/scripts/syllabus/data/maths-cet-rulings.json`: 81 full, 4
partial); the CET letter for 2024-25 (`NDA_Subjects_Content/Programs/CET_Syllabus`):
whole Std XII, plus ten named Std XI chapters, at 10 of the 50 questions.

**Owner's decisions (2026-10-19, all as recommended):**
1. PYQ Vault's chapter names and split, so a student sees the same chapters
   in both products. Five course chapters combine pool chapters.
2. Measures of Dispersion left out: 0 PYQs in 2025–26, and the current
   syllabus is reported to have dropped it while adding Conic Sections
   (45 PYQs, from 3 before 2025). Confirm with the CET Cell PDF when it is
   published.
3. Three new concepts for gaps the pool lacks: Cayley–Hamilton and matrix
   polynomials (19 PYQs, not in the book), two circles (10 PYQs, a side box
   in the book), angle between curves (8 PYQs, one book exercise). MHT-CET
   only for now; MH Board gets coverage lists that keep its maps unchanged.
   Quadratic Equations (7 PYQs, Std X) skipped.
4. CET-level practice from PYQ Vault's PYQs: later, after the course is live.
5. Phases as below. Phase 2 runs with the Std XI/XII autonomy.

| Std | MHT-CET chapter | Pool chapters | PYQs |
|---|---|---|---|
| XI | Trigonometry - II | compound-and-multiple-angles | 61 |
| XI | Straight Line | straight-line | 75 |
| XI | Circle | circle | 71 |
| XI | Conic Sections | conic-sections | 44 |
| XI | Complex Numbers | complex-numbers (22, approved) | 67 |
| XI | Permutations and Combinations | permutations-and-combinations | 65 |
| XI | Sets, Relations and Functions | sets-and-relations (draft: 7 of 16) + functions | 66 |
| XI | Limits | limits + continuity | 137 |
| XII | Mathematical Logic | mathematical-logic | 151 |
| XII | Determinants and Matrices | determinants-and-matrices (XI) + matrices | 102 |
| XII | Trigonometric Functions | trigonometric-functions-12 | 312 |
| XII | Pair of Straight Lines | pair-of-straight-lines | 73 |
| XII | Vectors | vectors | 334 |
| XII | Line and Plane | line-and-plane | 304 |
| XII | Linear Programming | linear-programming (approved) | 69 |
| XII | Differentiation | differentiation (XI) + differentiation-12 | 237 |
| XII | Applications of Derivative | application-of-derivatives | 253 |
| XII | Indefinite Integration | indefinite-integration | 249 |
| XII | Definite Integration | definite-integration | 132 |
| XII | Applications of Definite Integral | application-of-definite-integration | 78 |
| XII | Differential Equations | differential-equations | 216 |
| XII | Probability Distribution | probability (XI) + probability-distributions | 159 |
| XII | Binomial Distribution | binomial-distribution | 86 |

Not listed: Measures of Dispersion, Sequences and Series (11 PYQs, 1 in
2026), Quadratic Equations, Angle Measurement, Std XI Trigonometric
Functions, Binomial Theorem. Only 3 of the 69 "Sets, Relations and
Functions" PYQs are about sets, so that part's draft list is what Functions
builds on: roster form, power set, intervals, Cartesian product, relations.

**Phases:**
- **Phase 1 (this branch): course chapters made of several pool chapters.**
  A course chapter keeps its `{ chapter, coverage }` shape and may add a
  `title`, a `standard` and `more` parts; its URL stays
  `/courses/<course>/<first pool slug>`, so existing courses don't change.
  Its map merges the parts (one progress ring, one outline); lessons keep
  their `/learn/<pool chapter>/...` URLs, and the lesson's way back goes to
  the course chapter. The MHT-CET catalog above goes in. Before/after sheet
  before merging.
- **Phase 2:** the three new concepts, built the usual way (items from CET
  PYQs, since the book doesn't teach them), with MH Board coverage lists for
  `matrices`, `circle` and `application-of-derivatives`.
- **Phase 3 (later, ask first):** CET-level practice from PYQ Vault.

**Status:**
- Phase 1 done 2026-10-19 (merge 9d22ff8): 23 chapters live, five of them
  joining two pool chapters; owner OK'd the before/after sheet. The Sets
  part's list (C01, C02, C09–C13) is still a draft for the owner on
  `/review/courses`.
- Phase 2 done 2026-10-19 (branch `mhtcet-gap-concepts`): Matrices C12
  Cayley–Hamilton, Circle C09 two circles, Application of Derivatives C11
  angle between curves, 6 items each from CET PYQs (refs like
  `2024 May Q139`); every key re-derived by the verifier and by hand,
  figure sheets checked (about 12 labels moved), 0 phone overflows. MH
  Board's maps unchanged (approved book lists for those chapters). One
  agent per concept, 3 at once. The local golden path kept timing out on
  this machine's hotspot link to Supabase (the same page loaded in 0.5–41 s
  run to run), so it was run against the deployed site instead.
- PYQ Vault keys found wrong while building (fix in PYQ Vault):
  2024 May Q111 (curves y = 2x², x = 2y² don't meet at (1, 1); at
  (1/2, 1/2) the angle is tan⁻¹(3/4)); 2025 April Q141 (the starred option
  is negative, the obtuse angle; the acute one is the log(7/3) option, and
  the CET notes repeat the sign). The two-circles dump also reuses the ref
  2024 May Q146 for two different questions.

## NDA Maths course (approved 2026-10-19, branch `nda-course`)

Goal: NDA gets its own chapters under PYQ Vault's names (31 chapters, 2,280
PYQs), built from the pool, plus the concepts NDA asks that the MH Board
books don't teach. Sources: PYQ Vault's live NDA taxonomy, its 111 NDA →
State Board rulings (`maths-nda-rulings.json`: 87 full, 12 partial, 12 not),
and the UPSC NDA Maths syllabus (the PDFs on disk are scans). NDA leaves out
Mathematical Logic, Linear Programming beyond "linear inequations by
graphs", Pair of Straight Lines, Rolle/LMVT, approximations, continuous
distributions and polar coordinates.

**Owner's decisions (2026-10-19, all as recommended):**
1. PYQ Vault's chapter names.
2. A chapter appears on the NDA page once it has content (no empty "Coming
   soon" cards for chapters still to build).
3. Std X material (Quadratics, Height & Distance, central tendency, Binary)
   is filed under Std XI on the NDA page.
4. Trims of existing chapters are drafts the owner approves on
   `/review/courses`.
5. Phases below; phase 2 runs with the Std XI/XII autonomy.

**Phase 1 (this branch):** a course chapter can take part of a pool chapter
while another course chapter takes the rest (Std XII Trigonometric Functions
feeds Trig Equations C01–C05, Properties of Triangle C07–C11 and Inverse
Trigonometry C12–C15): parts of one pool chapter must list disjoint
concepts, and such a chapter names its own `slug`. Then the 27 NDA chapters
the pool already covers (the 26 in the analysis plus Statistics, which has
dispersion now and grows in phase 2a), with draft lists where NDA trims.

**Phase 2a:** Statistics (mean/median/mode, frequency tables and graphs,
mean deviation, correlation and regression) and Quadratic Equations, about
230 PYQs. **2b:** Logarithms, Height & Distance, Binary Numbers, the sphere.
**2c:** gaps inside existing chapters (a sin θ + b cos θ, special matrices,
derivative of an integral and periodic integrals, greatest-integer
integrals, (a + √b)ⁿ parts and remainders, inradius, probability bounds,
functional equations). About 45 concepts in all, items from NDA PYQs.

**Status:**
- Phase 1 done 2026-10-19 (merge e16f4df): 27 NDA chapters live, Std XII
  Trigonometric Functions split three ways; golden path passed on live.
  NDA's trims are drafts for the owner on `/review/courses`.
- Phase 2a done 2026-10-19 (branch `nda-statistics-quadratics`): new pool
  chapters Statistics (13 concepts, 76 items) and Quadratic Equations (10,
  58), Std XI, from NDA PYQs (refs like `2023 Apr Q111`; NDA-style items
  where no PYQ fits); every key re-derived by hand and by the verifier,
  figure sheets checked (about 10 labels moved), 0 phone overflows. One
  agent per concept, 10 at once. NDA's Statistics is the new chapter, then
  Measures of Dispersion. The median slides teach averaging the two middle
  values for even N; NDA's papers sometimes key the (N+1)/2-th value, and
  the items avoid that case.
- PYQ Vault keys found wrong in 2a (not yet reported): NDA 2022 Apr Q18
  (the equation with roots a, b is x² − (α+β)x + αβ + c = 0, option A; B is
  starred) and NDA 2024 Sep Q112 (options C and D are the same expression;
  only D is starred).
- Owner 2026-10-19: reported NDA 2022 Apr Q18 and 2024 Sep Q112 to PYQ
  Vault; approved every NDA list (branch `nda-lists-approved`, sheet
  `screenshots/2026-10-19-nda-lists/`).
- Phase 2b done 2026-10-19 (branch `nda-phase-2b`, built on the approval
  branch): pool chapters Logarithms (4 concepts, 22 items; NDA's Logarithms
  opens with Functions C07, so Functions is split for NDA), Heights and
  Distances (5, 30), Binary Numbers (4, 24), all Std XI, and the Sphere (2,
  12, Std XII) in NDA's 3D Geometry. Same gates as 2a.
- More PYQ Vault keys found wrong in 2b: NDA 2018 Apr Q11
  (3ˣ = 3 gives x = 1, option C; D = 3 is starred), NDA 2017 Sep Q2
  (remainder then quotient of 46 ÷ 6 is (100)₂ and (111)₂, option B; A is
  starred). Possibly wrong, passage missing from the bank: NDA 2025 Apr Q39
  (key D, (√3 + 3)a/4, vs (3 + √3)a/2 from its own working) and Q40 (the
  starred option is misprinted).
- Phase 2c done 2026-10-19 (branch `nda-phase-2c`): nine NDA-only concepts
  inside book chapters, outside the MH Board and MHT-CET lists: Compound
  Angles C11 (a sin θ + b cos θ), Determinants and Matrices C13 (special
  square matrices), Definite Integration C08–C10 (differentiating an
  integral, periodic integrands, [x] and |x|), Binomial Theorem C10
  (remainders and integer parts), Std XII Trigonometric Functions C16
  (inradius and circumradius), Probability C11 (bounds), Functions C12
  (functional equations); 6 items each. Same gates as 2a; 5 labels moved.
- More PYQ Vault keys found wrong in 2c: NDA 2024 Apr Q12
  (a nonsingular A with A³ = A need not be I, e.g. −I, so "A and B only",
  option A; D is starred). Possibly wrong, passage missing from the bank:
  NDA 2025 Apr Q34 (p = sin α + cos α has least value −√2; 1/√2 is starred)
  and Q96 (f(1)/f(4) = 1/9 is not an option; 9 is starred, i.e. f(4)/f(1)).
  NDA 2025 Apr Q22's worked solution expands (√2 + 1)³ wrongly (7 + 5√2, not
  5 + 7√2), though its key stands.
- Owner 2026-10-19: merged 2c (1c1f74a; golden path passed on live) and
  reported the seven 2b/2c questions above to PYQ Vault (Q22's solution
  slip was not filed). The NDA plan is complete.


## PYQ Vault link (approved 2026-10-19, branch `pyqvault-link-pilot`)

Instead of MHT-CET phase 3 (CET practice inside Concept Ladder, which would copy
PYQ Vault's practice, drill, mocks and analytics), the two sites link both ways:
PYQ Vault is where students practise past papers, Concept Ladder where they learn
the concept behind a miss.

- **Concept Ladder → PYQ Vault:** a course chapter with a `pyqvault` slug (and a
  course with `pyqvault: { exam, subject }`) shows "Practise <course> questions on
  PYQ Vault", opening its chapter page in a new tab (`?ref=conceptladder`).
- **PYQ Vault → Concept Ladder:** a "Learn: <concept> · Concept Ladder" chip beside
  Guide/Notes (`src/lib/links/questionResources.ts`), mapped from PYQ Vault's
  note-concept tag, else the subtopic, else no chip; the lesson link carries
  `?course=<course>&ref=pyqvault`.

**Pilot:** MHT-CET Circle (owner, 2026-10-19: Circle, new tab, OK to change PYQ
Vault on its own branch). Then all 23 MHT-CET chapters (57% of their PYQs carry a
note-concept tag), then NDA.

**Status:**
- Concept Ladder side live 2026-10-19. Another session's commit `70f3052` ("docs:
  keep the GitHub repo name microlearning-ai") swept up this uncommitted work and
  pushed it to main; the owner chose to keep it live and review after the fact.
  Sheets: `screenshots/2026-10-19-pyqvault-link/` (before = live with the link
  removed, which is exactly e8b4832's page). Tests: `practiceLink` and the catalog
  check; the golden path checks the link, its new tab, and its absence elsewhere.
- PYQ Vault side: next.

## CBSE Maths course (approved 2026-10-20, branch `cbse-course`)

Goal: CBSE gets NCERT's Class 11 and 12 chapters under NCERT's names (as PYQ
Vault has them: 14 + 13), built from the pool, plus the few things the MH
Board books don't teach. Sources: PYQ Vault's NCERT section lists and its
NCERT → State Board rulings (`Question_Bank/scripts/syllabus/data/maths-ncert-*.json`,
121 of 128 sections fully in the MH books), the rationalised NCERT exercises in
PYQ Vault (`CBSE Class 11`: 1,159 rows; `CBSE Class 12`: 1,414) and CBSE's
2022–26 board papers (1,766 PYQs).

**Owner's decisions (2026-10-20):**
1. "You approve": I settle and approve the lists myself, against the NCERT
   exercises and the board papers.
2. Phase 2 runs with the Std XI/XII autonomy.
3. `google-button-blue` merged first (afb46cc).

**Phase 1 (this branch):** 25 course chapters the pool covers. Six pool
chapters are split between two CBSE chapters (Sets and Relations three ways;
Functions, Differentiation, Probability, Determinants and Matrices, Vectors two).
What the lists leave out, and why:
- Out of the rationalised books: induction, general and middle terms, polar
  form, square roots and quadratics in Complex Numbers (only Ex 4.1 is left),
  shift of origin, limits at infinity and exponential limits, coefficient of
  variation, elementary operations, properties of determinants, tangents and
  normals, approximations, Rolle and LMVT, limit of a sum, forming a DE by
  eliminating constants, triple products, planes, the binomial distribution.
- Kept though doubtful, because the exercises or papers ask them: dictionary
  rank and chords (P&C Misc), divisibility by the binomial theorem (Ex 7.1 Q13),
  locus and lines through an intersection (Straight Lines Misc), P(A ∪ B ∪ C)
  (Probability Misc Eg.11), correcting a mean (Statistics Misc), |x| integrands,
  intersecting lines and the foot of a perpendicular (papers to 2026), growth
  and cooling models (2024–25 case studies), derivative with respect to another
  function and parametric second derivatives (2024–26).
- Random variables left out: 36 PYQs in 2022–25, none in 2026, and no exercise
  in the current NCERT book. Revisit if the 2027 papers ask them.
- Linear Programming keeps its approved list (C12, C13 unsure).

**Phase 2: the gaps.** New pool chapters, Std XI: Linear Inequalities (one
variable: rules, number line, systems, word problems; NCERT Ex 5.1 + Misc, 59
rows) and Introduction to Three Dimensional Geometry (axes, planes, octants;
distance formula; loci and centroids; Ex 11.1, 11.2 + Misc, 29 rows). One new
concept: Application of Derivatives, absolute maximum and minimum on a closed
interval (11 PYQs 2024–26; MH Board and MHT-CET keep their lists). Items from
NCERT exercises and CBSE PYQs.

**Later (ask first):** PYQ Vault links for CBSE chapters, once PYQ Vault's side is pushed.

**Status:**
- Phase 1 built 2026-10-20: tests first (`courses.test.ts` "CBSE"), sheet
  `screenshots/2026-10-20-cbse-course/`.
- Phase 1 merged 2026-10-21 (e978655); golden path passed on live after fixing two stale
  steps in the e2e (the "Next Page" rename of d8d4905, and a fixed wait before a reload).
- Phase 2 built 2026-10-21 (branch `cbse-gaps`): Linear Inequalities (6 concepts, 35 items)
  and Introduction to Three Dimensional Geometry (5 concepts, 29 items), both Std XI pool
  chapters, and Application of Derivatives C12, absolute extrema (6 items, CBSE PYQs and
  NCERT). MHT-CET pinned to C01–C11 of that chapter, so no other course's map changed.
  One agent per concept, 10 at once; every key re-derived by hand and by the verifier;
  figure sheets checked (C12's labels moved; 3D C01's octant options reworded to say
  "then", since "II and VI" and "VI and II" read alike); 0 phone overflows. No source row
  was found wrong. Ex 11.2 Q3(i)'s solution calls its triangle isosceles; it is also
  right-angled (not a wrong key).

## Std IX and X Maths, Maharashtra State Board (approved 2026-10-21)

Goal: the Balbharati Std IX and Std X books (Part 1 Algebra, Part 2
Geometry; 16 + 13 chapters) in the Maharashtra Board course, built the way
Std XI and XII were. Estimate ~230 new concepts, ~1,300 items.

**Sources.** PYQ Vault has every chapter transcribed with worked solutions:
`Question_Bank/scripts/mh-sb-9/data/<chapter>-9.questions.json` (Std IX) and
`scripts/mh-ssc-10-text/data/<alg|geo>-<chapter>-10.questions.json` (Std X),
plus the SSC board papers 2016–2026 (`scripts/mh-ssc-10/data/alg-*` and
`geo-*`). Textbook PDFs: `C:\Vilas\LWS_Pune\NDA_Subjects_Content\Subjects\State-Board\01. 9th`
and `02. 10th`. Read maths from PYQ Vault's LaTeX or the page images, never
the PDF text layer (Std IX Polynomials' exponents flatten silently).

**Owner's decisions (2026-10-21, "ok" to every recommendation):**
1. One course: the Maharashtra Board course's switch becomes Std IX / X / XI / XII.
2. Std X first (the board year, 11 years of papers), then Std IX. The Std IX
   waves wire the Std X graphs' `ext` items to the new Std IX concepts.
3. Constructions are kept, as step-order and "what this construction gives"
   items; the drawing stays on paper.
4. Proofs are taught in the board's "complete the activity" form: which
   reason justifies this step.
5. Std XI/XII autonomy: I lock each graph against the book and publish and
   merge each wave once every gate passes. The owner reviews live.
6. Reuse a pool concept only where it matches the book exactly (A.P. in Series
   C15–C18, Quadratic Equations C01–C05, Statistics, Heights and Distances,
   Probability, Sets, Cramer's rule, trigonometric ratios), joined with `more`;
   everything else is a new pool chapter with standard 9 or 10.

**Later (ask first):** the Std XI/XII chapters' `ext` items on Std X basics
could become real edges into Std IX/X concepts, so routing reaches the Std X
gap. That reworks shipped graphs (backfill ledger 7).

**Waves** (a branch each; one agent per concept, at most 10 at once; stop
launching below 2 GB free disk):

| Wave | Chapters |
|---|---|
| 0. Tooling | Standards 9–12, the four-year switch, copy; figure marks `rightAngle` and segment `ticks` |
| 1. Std X Algebra | Linear Equations in Two Variables · Quadratic Equations · Arithmetic Progression · Financial Planning · Probability · Statistics |
| 2. Std X Geometry | Similarity · Pythagoras Theorem · Circle · Geometric Constructions · Co-ordinate Geometry · Trigonometry · Mensuration |
| 3. Std IX Algebra | Sets · Real Numbers · Polynomials · Ratio and Proportion · Linear Equations in Two Variables · Financial Planning · Statistics |
| 4. Std IX Geometry | Basic Concepts in Geometry · Parallel Lines · Triangles · Constructions of Triangles · Quadrilaterals · Circle · Co-ordinate Geometry · Trigonometry · Surface Area and Volume |

**Status:**
- Wave 0 built 2026-10-21 (branch `ssc-tooling`): tests first. A year's tab
  appears only once it has chapters, so the switch shows on the course page
  with Wave 1; the two branches merge together, with one before/after sheet.
