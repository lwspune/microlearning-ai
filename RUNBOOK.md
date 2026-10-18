# Runbook

How this project is built, step by step, so it can be repeated (a new
chapter, a new concept, a new feature) and fine-tuned. When a step changes or
a new lesson turns up, update this file in the same commit.

Related: [PLAN.md](PLAN.md) (what and why) · [src/content/AUTHORING.md](src/content/AUTHORING.md)
(content rules, enforced by checks).

---

## 1. One-time setup

1. `npm ci` · Python 3 with `pip install -r verify/requirements.txt` (sympy).
2. `.env.local` (gitignored, never committed):
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_DB_PASSWORD`,
   `SUPABASE_ACCESS_TOKEN` (personal token, account-wide), `SUPABASE_PROJECT_REF`.
3. Link the CLI once: `npx supabase link --project-ref <ref>` (it reads
   `SUPABASE_DB_PASSWORD` from the environment; don't pass it as an argument).
4. `npm run dev` → http://localhost:3000. `/review` (content review) works in
   dev; in production it needs `REVIEW_ENABLED=true` **at build time**.

## 2. Adding a chapter

1. **Draft the concept graph** in `src/content/chapters/<chapter>/graph.ts`:
   atomic concepts, *hard* prerequisites only, transitively reduced, each
   node mapped to its PYQ Vault source slugs. Get the graph approved
   **before** writing any concept: it's the riskiest decision.
   - **Audit what the book assumes** (`ext`). The book's starting point is
     not the student's: Sequences and Series began at G.P. because the book
     assumes Std X A.P., and the owner caught it (2026-10-16). For each
     `ext` item, mark it (a) taught in another chapter of the app — name
     that chapter in the item and in fallbacks, or (b) a Std X basic taught
     nowhere — ask the owner whether to teach it first as opening concepts
     (as C15–C18 of Sequences and Series), or (c) truly safe to assume.
     Never leave a Std X basic as `ext` without that question.
2. Pin it with a chapter test (node and edge counts, transitive reduction);
   copy `chapters/complex-numbers/complex-numbers.test.ts`.
3. Register the chapter in `src/content/chapters/index.ts`, with its `group`
   (`school` = 11th + 12th, `graduate` = Graduates) and `subject`. The group
   is the concept pool: only that group's courses can use the chapter. A
   `school` chapter also names its `standard` (11 or 12): course pages list
   chapters under 11th and 12th, and the catalog check refuses a missing one.
4. Create `verify/models/<chapter_with_underscores>.py` with a `MODELS` dict.
5. **Add it to its courses** (section 2a). Its course card says "Coming
   soon" until a concept is published, and its routes 404 until it is
   seeded: publish (section 3, step 8) before merging.
6. Then add concepts (section 3).

## 2a. Courses and coverage

Catalog: `src/content/courses.ts` (groups, courses, which concepts each
course covers). `src/content/courses.test.ts` validates it on every `npm test`.

1. **Adding a course:** one entry in `courses` (slug, title, short name,
   group, tagline). With no chapters it shows as "Coming soon".
2. **Adding a chapter to a course:** `{ chapter, coverage }`, where
   `coverage.ids` lists the concepts the course covers and `unsure` marks the
   doubtful ones. Leave `coverage` out only when the course covers the whole
   chapter.
3. **Coverage is verified with the owner.** Write it as `status: "draft"`;
   the owner reviews it on `/review/courses` (concepts × courses grid). Only
   after they approve, set `status: "approved"`: from then on students see
   just those concepts. Until then they see the whole chapter.
4. Concepts covered by exactly one course are unique to it; the grid shows
   them ("only JEE Main"). Mastery is per concept, so it is shared by every
   course in the group.

## 2b. Accounts and roles

Roles: `student`, `teacher`, `academy_admin`, `superadmin` (PLAN.md Phase 2).
Guests are anonymous logins with no profile.

1. **Make a login:** `npm run user:create -- --email a@b.co --name "Name" --role teacher --academy <slug>`.
   The password comes from `USER_PASSWORD` or is typed when asked; never pass it
   as an argument. An email that already has an account is never touched.
2. **Who may open what** is `src/lib/auth/routing.ts` (tested): each role
   reaches its own area and every one below. A page in `/teach` or `/admin`
   calls `requireAreaAt(path)` (`src/server/viewer.ts`) **inside its own
   `<Suspense>`**; never read the session in a layout.
3. **Who may read what** is row level security (`supabase/tests/roles.db.test.ts`):
   own profile; staff their academy's people; the superadmin everyone. Nobody
   signed in writes `profiles` or `academies`.
4. Staff always open every concept (`gateFor`); students follow `MASTERY_GATE`.
5. **Academies and people (in the app):** the superadmin creates academies on
   `/admin` and adds anyone on an academy's page; staff add people on
   `/teach/people`. The database decides who may create whom
   (`can_create_person`, `create_academy`), called **as the signed-in user**
   before any service-role write (`src/server/people.ts`). Passwords are
   generated and shown once; an existing login is never touched.
6. **Usernames** (students without email): the login is
   `<username>@students.microlearning.invalid`, enforced by the database
   (`profiles_username_login`); the sign-in box takes an email or a username.
   Password resets are a later feature (PLAN.md).
7. **Student performance** (`/teach/students`): staff read learner data under
   row level security (`private.can_view_person`: own academy's students; the
   superadmin everyone). Summaries come from the `security_invoker` views
   `learner_summary` and `learner_mistakes`; read them as the viewer
   (`src/server/performance.ts`), never with the service role. Clock-based
   labels ("3 days ago") are made in server functions, not in a component
   (React's purity lint forbids `Date.now()` in render).
8. The advisor warns that `create_academy` and `can_create_person` are
   security-definer functions signed-in users can run: intended, they are the
   API and check the caller themselves.

## 3. Adding a concept (the content loop)

1. **Read the sources.** The PYQ Vault notes for the concept
   (`Question_Bank/src/app/notes/<exam>/<chapter>/_data/*.ts`): their `traps` are
   the best seed for misconceptions.
2. **Design the misconceptions first.** Each one must be a rule you can turn
   into a function (inputs → wrong answer). Check that each pair of models
   gives *different* answers on the inputs you plan to use; if two always
   agree (C10: "clockwise quadrants" ≡ "swapped axes"), drop one.
3. **Write the models** in `verify/models/<chapter>.py`: `key` computed
   straight from the definition (never via the method being taught), plus
   one function per misconception. Raise `ValueError` where a model doesn't
   apply.
4. **Draft the items from the models** with `python verify/draft_items.py <spec.py>`.
   A spec lists each item's stem, inputs and which models give its options
   (key first). The tool computes every value, writes each option's text
   from its value (so text and value can't disagree), varies the correct
   letter, and refuses duplicate options. Use `text=`/`value=` overrides
   only for non-numeric options (loci, phrases) and `fmt=` for pairs (`x =, y =`),
   ± roots, quadrants and `deg` (an angle in degrees). Values may also be sets
   (`{1, 2}`, `EmptySet`), intervals (`Interval.Ropen(1, 2)`, `Union(...)`),
   matrices (`Matrix([[1, 2], [3, 4]])`) or tuples; the verifier compares each
   as what it is, and the drafter writes their LaTeX. Named answers ("one-one",
   "bounded") are sympy symbols with a `text=` override. **Every item has exactly 4 options** (the key and 3
   modelled mistakes; the validator and `draft_items.py` enforce it). Where
   no third conceptual mistake fits, model a common slip (a dropped sign,
   dividing by the wrong number) with fallback `none`; never an unmodelled
   number.
5. **Write the content** (hook + reveal, intuition, formal with blank lines
   between slide-sized sections, worked example, visual spec, misconceptions
   with remediation and an ancestor fallback) as data, then build the files:
   `python verify/build_concepts.py <content.py> <items.ts>`. `content.py`
   sets `CHAPTER` (the slug; the spec's `linear_programming` spelling works
   too); the tool writes that chapter's `concepts/cNN-<slug>.ts` with
   `status: "draft"`. The hook and worked
   example must not reuse an item. Misconception IDs have no gaps.
5b. **Solutions and figures** (AUTHORING.md items 9–15): a 2+ step
   `solution` on every item; for a `visual` concept, figures on the idea
   slide, the worked example, and every point/locus solution, with element
   `step`s matching the steps. Write them as data (Python dicts with the
   `Figure` keys from `types.ts`; `axes: "xy"` for an xy-plane figure, x and y
   with plain numbers, instead of the Argand default; `axes: "none"` for a bare
   frame such as a Venn diagram, built from `region`s of discs and half-planes).
   Function graphs, parabolas and other curves are `curve` elements made by
   `graph()` in `verify/figures.py` (it samples y = f(x) and splits at poles and
   gaps; mark open or closed ends with `point` elements). A new concept takes `figure`,
   `worked["figure"]` and `solutions` in its `build_concepts.py` entry
   (it refuses a missing or unknown item id). For many similar figures, write
   a small Python helper (Phase B used `extreme`, `arg_fig`, `rot_fig`) so
   they stay consistent, then check each one close up.
5c. **Parallel batches (faster, same gates):** once the models and the item
   spec are fixed and drafted, one agent per concept writes its content,
   solutions and figures as a Python `CONCEPT` dict, from
   [verify/agent-brief.md](verify/agent-brief.md) plus that concept's design
   (hook, worked example, misconceptions with fallbacks, solution notes). A
   small combiner sets `CHAPTER` and `CONCEPTS` for `build_concepts.py`. Read
   every agent's output before building: they catch real design flaws
   (C05-M2's wording) but also place labels on lines.
5d. **Question figures** (`figure=` in a `draft_items` spec): the picture the
   question is about, shown whole. For lines that rise to the right, place
   labels by hand after one look at the figure sheet: automatic placement
   (85% along the line, or the middle of its visible part) kept landing on
   another line or the axis numbers.
5e. **Whole-concept agents (Std XI, a whole chapter at once):** one agent per
   concept does steps 1–5d itself, from
   [verify/agent-brief-concept.md](verify/agent-brief-concept.md) plus that
   concept's scope, book refs (a pool, not a quota) and neighbours. Its files:
   `verify/models/<pkg>/cNN.py` (the chapter's models package lazy-loads one
   module per concept), its scratch `cNN_spec.py`/`cNN_content.py`, and the
   built concept file. It checks itself with
   `node scripts/check-concept.ts <chapter-slug> <concept-file.ts>` (validator
   and sympy on that concept alone). At most 20 agents run at once; queue the
   rest. Venn diagrams and number lines come from `venn()` and `number_line()`
   in `verify/figures.py` (`note=` puts a caption top centre, clear of the
   set names). Then read every concept through with
   `node scripts/review-text.ts <concept-file.ts>...` (keys and distractors
   by hand) and look at its figure sheet before registering.
5f. **Reworking a published chapter's slides (PLAN.md backfill ledger 5):**
   a branch per chapter; one agent per concept from
   [verify/agent-brief-slides.md](verify/agent-brief-slides.md), with the
   chapter, models package, concept file and any figure that clearly teaches
   it. Take the "before" preview shots before the agents start (the dev
   server serves the working tree). Then step 7, a read-through with
   `scripts/review-text.ts`, and a check that everything from
   `misconceptions:` down is unchanged unless a split was made (commit a
   split separately). Merge, then `npm run content:seed`.
6. Register: `python verify/build_index.py <chapter-slug>` rewrites only the
   concept imports and `concepts: [...]` in the chapter's `index.ts` (its
   title, group and subject stay as written); the chapter test fails if any
   concept file isn't registered.
7. **Check:** `npm test` (structure) · `npm run content:verify` (sympy:
   every key and distractor) · open `/review/<chapter>/<slug>` at phone width.
   Look for KaTeX errors and sideways scrolling: `node scripts/overflow-probe.mjs <chapter> <slug>...`
   lists every formula wider than a phone slide, with its TeX. Anything on
   a slide you wrote or changed must be split into `$…$ $…$` pieces before
   merging; a hit in shipped text you did not touch goes to the PLAN.md
   backfill ledger. (Punctuation touching
   inline math is kept on its line by the renderer, `renderInline`.) Check every figure in light and dark mode:
   each "After step n" frame, labels clear of axis numbers and of each other.
   A per-figure contact sheet beats a full-page screenshot (figures are too
   small to judge at full-page scale): `node scripts/figure-sheet.mjs <outDir> <chapter> <slug>...`.
   Then read the lesson as a learner meets it, on `/review/<chapter>/<slug>/slides`
   (the live deck reads published content, so this is the only place to see
   unpublished slides): every term defined before it is used, every formal
   slide titled by its lead-in and, in a visual concept, with a figure that
   shows what it says (AUTHORING.md 17–19). Watch each turning arm play.
8. **Review:** the user approves on `/review`. Then set `status: "approved"`,
   commit, run `npm run content:seed`.
9. **Remember the unlock consequence:** publishing a prerequisite *locks*
   the concepts that depend on it for new learners. Update `npm run e2e`
   expectations if the starting concepts change.

## 4. Building a feature

1. **Plan first** (append to PLAN.md) and get approval. Search the codebase
   and PYQ Vault for existing work before proposing anything new.
2. **Branch:** `git switch -c <topic>`. Never work on `main`.
3. **Test-first:** write the test, run it, and see it fail *for the right
   reason* (a stub that returns nothing is fine). Then implement.
   - Pure logic → Vitest (`src/**/*.test.ts`).
   - Database rules → `supabase/tests/*.db.test.ts` (section 5).
   - User flows → `e2e/golden-path.ts`.
4. **Next.js 16 is not the version in training data:** read
   `node_modules/next/dist/docs/` before using an API (see AGENTS.md).
5. **Commits:** conventional (`feat:` `fix:` `test:` `docs:` `refactor:`
   `chore:`), one logical change each. When `package.json` carries changes for
   several commits, stage it in steps (save the final file, write each
   intermediate version, commit, restore, then diff against the saved copy).
6. **Definition of done:**
   - `npm run lint` · `npm run typecheck` · `npm test` · `npm run test:verify` · `npm run test:db` · `npm run content:verify`
   - Deploy build: plain `npm run build` (review pages off, as in production) must pass too.
   - Production check (first stop anything still listening on 3103, *before* building: a leftover server keeps serving its old build, and it also writes its not-found answers for new pages into the new build's `.next/server/route-cache`, so a fresh server then returns 404 for them until you rebuild): `REVIEW_ENABLED=true npm run build`, `npx next start -p 3103`, then `npm run smoke -- http://localhost:3103`, `npm run e2e -- http://localhost:3103` and `npm run e2e:roles -- http://localhost:3103` and `npm run e2e:people -- http://localhost:3103` and `npm run e2e:performance -- http://localhost:3103`
   - Screenshot sheet: before (`main`) vs after, phone + desktop, light + dark (`SCHEME`/`VIEWPORT`/`SHOTS` env on `npm run e2e`). List copy changes old vs new and screens that couldn't be captured. Not for chapter content (new concepts, slide reworks, item fixes): the owner reviews those live (2026-10-18); app and UI changes still need it.
     **Save it in the project:** `screenshots/<date>-<topic>/before-after.png`, raw shots in subfolders beside it (point `SHOTS` there). Never only in a temp folder. `screenshots/` is git-ignored.
   - Leave no test data behind (check `auth.users` and `attempts`).
7. Show the user, then **merge** (`git merge --ff-only`) and delete the branch.

### UI conventions ("calm editorial" design system)

- Colours only through tokens (`bg-card`, `text-muted`, `bg-accent-soft`…);
  never raw hex in components. A new text/background combination goes into
  `tokens.test.ts` first.
- Shared class strings live in `src/components/ui.ts`; icons are inline SVG
  in `src/components/icons.tsx` (decorative, always beside visible text).
- Headings use `font-display`. Motion uses `motion-safe:` / `fig-in`, so it
  is skipped under reduced motion.
- Decorative motion (homepage) lives in `globals.css` under
  `prefers-reduced-motion: no-preference`, animates only transform, opacity
  and stroke offsets, and starts from a finished page: a hidden starting
  state applies only under `@media (scripting: enabled)` (`RevealList`), and
  scroll-linked effects sit inside `@supports (animation-timeline: view())`.
- Keep the accessible names the e2e relies on ("Next →", "← Back",
  "Check answer", "Mastered ✓", "Not quite."…) when restyling.
- Figures inside a card are wrapped in `FigureFrame`, which sets
  `--figure-bg` so label halos match the card.

## 5. Database changes

1. New migration file in `supabase/migrations/` (timestamped). **Never edit
   an applied migration**: fix forward with a new one.
2. Write the DB tests first. They run as `postgres` through the Management API
   inside transactions that are **always rolled back** (`supabase/tests/sql.ts`).
   The project is the live database, so test a migration *before* pushing it:
   `DB_TEST_PENDING=supabase/migrations/<file>.sql` runs it first inside each
   rolled-back transaction. Run only the affected test files, with
   `--no-file-parallelism`: DDL in every transaction otherwise queues on locks.
3. Dry-run the SQL in a rolled-back transaction, then `npx supabase db push --dry-run`,
   then `npx supabase db push --yes`.
4. Run `npm run test:db`, then regenerate types with `npm run db:types`.
5. Check the security advisor (Management API `advisors/security`): only the
   intended "RLS enabled, no policy" INFO notes are acceptable.
6. Rules: business rules live in the database (constraints, triggers);
   functions use `set search_path = ''`; revoke `execute` from `public`,
   `anon`, `authenticated` and grant only what's needed; content is
   server-only; learner data is owner-read-only, written only server-side.

## 6. Lessons learned (each has bitten once)

| Lesson | Where it's enforced |
|---|---|
| A correct answer can *also* satisfy a misconception's model (C25-Q5), so the item can't separate them | verifier rule 3, AUTHORING.md |
| Some misconceptions are undetectable on some inputs (C14-M1 in quadrants I/IV) | `engineNotes` |
| Postgres echoes the failing SQL in its error, so `/attempts/` can "pass" spuriously | assert constraint names or exact messages (`sql.ts`) |
| DB tests broke once real content existed | scope fixtures to their own test chapter `t` |
| Testing a role's access: the lookup itself is denied first | resolve ids before `set local role` |
| `ON DELETE CASCADE` from content to attempts would erase student history | `RESTRICT` (migration `seed_chapter`) |
| With Partial Prefetching, `notFound()` after the shell streams returns 200 (+ noindex) | `npm run smoke` asserts the not-found page, not the status |
| Pages are prerendered, so runtime env vars don't affect them | `REVIEW_ENABLED` must be set at build time |
| Supabase's auth client reads `Date.now()` and Cache Components rejects it while prefetching | `await connection()` in `createSessionClient` |
| Reading `params` outside `<Suspense>` slows instant navigation | read params inside a Suspense child |
| Next keeps the previous page mounted but hidden (React Activity), so text locators match twice | scope e2e locators to a section |
| KaTeX with `trust: true` builds `javascript:` links | `trust: false` plus a test |
| Shipping KaTeX to phones costs about 260 KB | render math on the server (`renderRichText`) |
| Faded rows (`opacity-70`) dropped contrast below AA | no opacity on text; contrast computed, not eyeballed |
| e2e aborted before cleanup and left a guest user | capture the user id early; clean up in `finally` |
| `python -I` hides user-installed packages (sympy) | run the verifier without `-I` (it reads only our own JSON) |
| Shell `sed` edits silently failed on escaped patterns | edit with Python plus `assert old in s`, or the Edit tool |
| New packages: avoid releases under 2 weeks old | pin exact versions (`-E`) |
| A hard-coded "unpublished" example in the smoke check went stale when that concept was published | smoke routes are derived from the content registry |
| Next keeps visited pages alive, so `useState` initial values don't re-run on return: the refresher opened at the old slide 8/8 | give a distinct mode its own `key` (`SlideDeck` in refresher mode); e2e waits on `:visible` / `filter({ visible: true })` |
| Only the review-enabled build was ever checked; the plain production build failed (params read in `generateMetadata` on a fully static page) | Definition of done runs a plain `npm run build` as well |
| Labels on a segment along the real axis, placed below it, sat on the axis numbers | AUTHORING.md item 15; axis numbers get a background halo; labels are clamped into the frame (`FigureView.test.tsx`) |
| Stopping a background `next start` task left the server running, and the next run tested the stale build on that port | before `next start`, check the port (`Get-NetTCPConnection -LocalPort 3103`) and stop the old process |
| Wave 4's Definition of done ran before its two new chapters were seeded: smoke failed their `/learn` and course pages (not-found), as section 2 step 5 predicts | for a new chapter, seed (`npm run content:seed`) before the production check, not only before merging; the code on main doesn't list the chapter yet, so seeding early shows nothing new on the live site |
| A long-running dev server kept serving the old stylesheet after `globals.css` changed (new utilities missing) | if a style change doesn't show, probe the computed style, then restart `npm run dev` |
| A restart didn't help either: Turbopack's cache in `.next/dev` kept serving the old `globals.css` (a new `@keyframes` missing, arms not turning) | stop the server, `rm -rf .next/dev`, start again; check the served CSS contains the new rule |
| "Before" shots from a `git worktree` of `main` failed: Turbopack won't follow a linked `node_modules`, and webpack served the pages unstyled | commit on the branch, `git checkout main` in the project itself, take the shots, check the branch out again (clear `.next/dev` each switch) |
| `git stash --keep-index -u` to test a partly staged commit conflicted on pop when the staged and working copies of a file differed | test a commit by checking it out in a separate worktree instead; never stash over a split file |
| Editing TS/LaTeX through a Python heredoc mangled backslashes four times in one session (`\a` became a bell, `\n` a real line break, `\s` a warning) | edit code or content containing backslashes with the Edit tool, or read replacement text from a file; never type it into a Python string literal |
| A one-off screenshot script signed in as a guest on each run and left 5 guests in the database (the e2e suites delete theirs) | any script that clicks "Start as guest" deletes that guest at the end; after screenshots, list `auth.users` where `is_anonymous` and created in the last hours, and delete your own (0 attempts, times matching your runs) |
| C01's `formal` became a list of sections: the code on main could only read text, so seeding first would have broken C01's lesson on the live site | when content uses a new shape, merge and push, wait for Vercel's production deployment of that commit (`gh api repos/lwspune/microlearning-ai/deployments`), then `npm run content:seed` |
| The same stale dev server kept a new chapter's empty `index.ts` after `build_index.py` filled it ("13 concepts · 0 authored"), so its review pages 404'd | after generating content files, check the authored count on `/review`; restart `npm run dev` if it lags |
| A content agent opened `/review` for its concept before the lead registered it; the dev server then kept serving "not found" for that page, and the figure sheet showed 0 figures (2026-10-18, twice) | a figure sheet with 0 figures for a concept that has figures means a stale not-found: rewrite the chapter `index.ts`; if the page still 404s (an identical rewrite changes nothing), restart `npm run dev` |
| A CHECK constraint passes when its expression is NULL: `items_figure_shape` let a figure with no `alt` through (`jsonb_typeof(null) = 'string'` is NULL) | wrap shape checks in `coalesce(..., false)`; test each malformed shape, not just one |
| A sympy `solve` per line pair made each LPP drafting run take ~11 s | model geometry in exact `Fraction`s (Cramer's rule); convert to sympy only at the model boundary |
| Two classes for one property in a class string (`bg-card` from a shared card plus `bg-accent-soft`) silently picked one | shared styles have colourless shapes (`linkCardShape`); each variant adds one border and one background |
| Hiding answer radios with `sr-only` made Playwright unable to click them | an invisible radio covering the whole card (`absolute inset-0 opacity-0`) stays clickable and focusable |
| A test fixture looked items up by code (`C03-Q1`) and collided with real content once it was published | scope fixture lookups to the fixture's own chapter |
| `npm run x \| tail` reports `tail`'s exit code and can cut off the pass/fail summary, so a check looked "done" without its result | grep for the summary line (`Tests `, `items checked`) and read `${PIPESTATUS[0]}` before reporting a gate as passed |
| Dashed lines rendered solid: `pathLength={1}` (for draw-in) scales the dash array to the whole stroke, and no pilot figure used `dashed` | `pathLength` only on solid strokes; `FigureView.test.tsx` checks dashed elements |
| A DB test expected `column "solution"` but the Management API returns the error JSON-escaped (`\"solution\"`); seed fixtures built as payload objects were missed by a search for `insert into items` | match error codes and words, not quotes (`/23502: null value in column \W*solution/`); after a schema change, search fixtures for the column in both SQL and payload form |
| Python's `write_text` writes CRLF on Windows, so generated files differed from the repo's LF (git normalises on commit, but the working copy and diffs don't) | generators pass `newline="\n"`; one-off edit scripts use `read_bytes`/`write_bytes` |
| Git Bash rewrote a `/` argument into `C:/Program Files/Git/`; with `MSYS_NO_PATHCONV=1`, a `/c/Users/...` output path then went to a new `C:\c\Users\...` folder | pass Windows paths (`C:\...`) to Node scripts and set `MSYS_NO_PATHCONV=1` for URL-path arguments |
| Once the homepage read a cookie it rendered partly at request time; `REVIEW_ENABLED`, set only for the build, then differed between the prerendered shell and the request render: a hydration error (#418) in production only | `next.config.ts` inlines `REVIEW_ENABLED` at build time; never read runtime-only env in a component on a partially prerendered page |
| The e2e screenshot helper waited for every animation to finish, and the hero's loops never do: the run hung silently | `shot()` waits only for finite, time-based animations |
| A failed sign-in emptied the email box: React resets a form after its action runs | return the typed email in the action state and use it as `defaultValue` (`LoginForm`) |
| `build_index.py` regenerated the whole `index.ts` from a template written before chapters had `group` and `subject`, so rerunning it would have dropped them | generators replace only the part they own (`register` in `build_index.py`, `test_tooling.py`) |
| Next's route announcer also has `role="alert"`, so an e2e `getByRole("alert")` read an empty string | scope alerts to the form: `form [role=alert]` |
| A role check awaited in a layout tripped Next's instant-navigation validation (uncached data outside `<Suspense>`) | check the role inside each page's own `<Suspense>` (`requireAreaAt`); no session reads in layouts |
| In `next dev` every page's payload contains the not-found text, so a curl check for it says every route is missing | check routes with `npm run smoke` against a production build |
| Python strings in shell heredocs turned LaTeX escapes into control characters (\t of \times into a tab, \f of \frac into a form feed): three times in one session, once in shipped-looking content | the validator rejects control characters in any content text; write LaTeX with the Edit tool, raw strings, or `chr(92)` |
| A one-column grid item doesn't shrink below its content, so `truncate` inside it never kicked in: long Linear Programming titles pushed a student's concept cards past a phone's width | `min-w-0` on the grid item as well as the truncated text; e2e `noSideScroll` on every staff page |
| A textbook PDF's text layer reads cleanly but drops maths: `pdftotext` on Balbharati Std XI printed "−√3" as "= - 3" and stacked fractions as "3 2" | take maths from PYQ Vault's transcribed LaTeX or the page images; extracted text only for headings and structure |
| Options were sent in stored order, so the answer was always A in hand-authored items | `displayOrder` shuffles per learner in `buildQuestion`; `optionOrder.test.ts` checks the spread across the chapter |
| A production build died with `ENOSPC` while prerendering: drive C was down to 388 KB with the dev server, 11 build workers and a browser running (it recovered to 5 GB once they stopped) | stop `next dev` before `npm run build`; check free space on C first |
| After a production build the old `next dev` (still alive: stopping `npm run dev` doesn't kill its `next` child) answered every review page with 500 | after a build, kill the process on :3000 (`netstat -ano`), `rm -rf .next/dev`, then start `npm run dev` |
| New concepts C15–C18 were placed first in Sequences and Series' graph, and a chapter test pinned that order, but the live map listed them last and "Up next" was C13: the page ordered concepts by code | a test of the data is not a test of the screen: check what the learner sees (the golden path now checks the Sequences map); the map orders by `concepts.position`, which `seed_chapter` writes in graph order |
| Agents' Python edit scripts turned the `\\` row breaks of LaTeX matrices into `\ `, which KaTeX draws as a space: 2×2s showed as one row, with no error | the validator now rejects a single-backslash row break inside any matrix; write such edits with a script file, never a shell heredoc |
| Slide reworks asked agents to split equations over ~35 characters, and the read-through looked fine, yet a Circle formula ran 19 px off a phone slide; a probe then found 19 more in 7 live chapters (one +673 px) | the same lesson again: only the screen shows width. `scripts/overflow-probe.mjs` measures every formula on a phone slide; agents and step 7 run it (PLAN.md backfill 8 holds the shipped ones) |
| 16 content agents each opening a browser grew the page file to 25 GB; drive C fell to 0.2 GB and `next dev` crashed | at most 10 agents at once (owner, 2026-10-18, after a restart; it was 5 while the page file was large); check free disk before each launch, stop below 2 GB, and restart Windows to shrink the page file; agents check figures with `scripts/figure-sheet.mjs` (waits for "load": "networkidle" never comes while other edits hot-reload) |
| Functions ran in Vercel's default region (Washington) while Supabase is in Mumbai: each query cost ~250 ms and a chapter map took ~2 s | `vercel.json` pins `regions` to `bom1`; `src/lib/supabase/region.test.ts` |
| Only 6 agents at a time, but 30 in a row (Complex Numbers), grew the page file to 23 GB again: free disk fell from 6.4 GB to 0.1 GB, and Node crashed in the probe, the shots and even vitest | a cap on agents at once is not enough; the page file grows over a long run and shrinks only on restart. Check free disk before each new agent and stop starting agents below 2 GB; restart the machine between big chapters |

## 7. Fine-tuning knobs

| Knob | Where | Notes |
|---|---|---|
| Mastery streak (3) | `mastery_streak_needed()` SQL function | new migration; the app reads it from the DB |
| Review schedule (1/3/7/14/30 days) | `review_interval()` SQL function | new migration |
| Answers to pass a review (2) | `review_answers_needed()` SQL function | the app reads it from the DB |
| Repeated-mistake trigger (2 in last 10) | `ROUTING_REPEATS`, `ROUTING_WINDOW` in `src/engine/routing.ts` | tested |
| Refresher questions before "Back" (2) | `REFRESHER_QUESTIONS` in `QuestionPanel.tsx` | |
| Next-question choice | `src/engine/nextItem.ts` | tested |
| Unlock rule | `src/engine/unlock.ts` | tested; unpublished prerequisites count as known |
| Mastery gate (on for students since R2; staff never gated) | `MASTERY_GATE` in `src/engine/unlock.ts`, `gateFor` | `false` opens every published concept to everyone; `true` is the unlock rule for students and guests. The e2e reads it and checks whichever applies |
| Course coverage | `coverage.status` in `src/content/courses.ts` | `draft` until the owner approves on `/review/courses` (section 2a) |
| Homepage hero motion | `LAYER_DELAY`, `COMET_START`, `COMET_CYCLE`, `COMET_RUN` in `src/components/home/ConceptGraphBackdrop.tsx` | `COMET_RUN` must match the 80% stop in `@keyframes cg-comet` |
| Remembered group | `ml_group` cookie (`src/server/courses.ts`) | moves to the profile with roles (PLAN.md Phase 2) |
| Min items per concept (5) | `MIN_ITEMS` in `src/content/validate.ts` | |
| Colour tokens | `src/app/globals.css` | `src/app/tokens.test.ts` computes AA contrast for every pair the UI uses; add a pair with any new text/background combination |
| Button, card, eyebrow styles | `src/components/ui.ts` | one border colour and one background per class string (variants use `linkCardShape`) |
| Display font | `Fraunces` in `src/app/layout.tsx` (`font-display`) | |
| Guest sign-in rate limit | Supabase auth config (30/hour/IP) | add CAPTCHA before public launch |
