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
2. Pin it with a chapter test (node and edge counts, transitive reduction);
   copy `chapters/complex-numbers/complex-numbers.test.ts`.
3. Register the chapter in `src/content/chapters/index.ts`.
4. Create `verify/models/<chapter_with_underscores>.py` with a `MODELS` dict.
5. Then add concepts (section 3).

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
   ± roots and quadrants. Where only two real misconceptions apply, an item
   may have 3 options; never invent a distractor.
5. **Write the content** (hook + reveal, intuition, formal with blank lines
   between slide-sized sections, worked example, visual spec, misconceptions
   with remediation and an ancestor fallback) as data, then build the files:
   `python verify/build_concepts.py <content.py> <items.ts>`, which writes
   `concepts/cNN-<slug>.ts` with `status: "draft"`. The hook and worked
   example must not reuse an item. Misconception IDs have no gaps.
6. Register: `python verify/build_index.py` regenerates the chapter's
   `index.ts`; the chapter test fails if any concept file isn't registered.
7. **Check:** `npm test` (structure) · `npm run content:verify` (sympy:
   every key and distractor) · open `/review/<chapter>/<slug>` at phone width.
   Look for KaTeX errors, sideways scrolling, and brackets stranded at line
   ends (move them inside `$…$`).
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
   - Production check: `REVIEW_ENABLED=true npm run build`, `npx next start -p 3103`, then `npm run smoke -- http://localhost:3103` and `npm run e2e -- http://localhost:3103`
   - Screenshot sheet: before (`main`) vs after, phone + desktop, light + dark (`SCHEME`/`VIEWPORT`/`SHOTS` env on `npm run e2e`). List copy changes old vs new and screens that couldn't be captured.
   - Leave no test data behind (check `auth.users` and `attempts`).
7. Show the user, then **merge** (`git merge --ff-only`) and delete the branch.

## 5. Database changes

1. New migration file in `supabase/migrations/` (timestamped). **Never edit
   an applied migration**: fix forward with a new one.
2. Write the DB tests first. They run as `postgres` through the Management API
   inside transactions that are **always rolled back** (`supabase/tests/sql.ts`).
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
| Min items per concept (5) | `MIN_ITEMS` in `src/content/validate.ts` | |
| Colour tokens | `src/app/globals.css` | recompute contrast for every pair |
| Guest sign-in rate limit | Supabase auth config (30/hour/IP) | add CAPTCHA before public launch |
