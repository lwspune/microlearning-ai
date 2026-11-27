# Suggestions

Ideas worth doing later, parked with enough detail to pick up without
re-deriving them. Approved work lives in [PLAN.md](PLAN.md); when an item
here is taken up, its plan moves there.

## Classes and the teacher dashboard (parked 2026-10-14; was Phase 2 R3)

Planned after roles R1–R2; the owner chose to keep things simple for now.

**Database** (one migration, DB tests first)
- `classes` (academy, name, course slug) and `class_members` (class,
  student); a trigger refuses a member who isn't a student of the class's
  own academy (CrackSSB's `batch_members` pattern).
- Writes only through checked functions, called as the signed-in user:
  `create_class(name, course)`, `add_class_members(class, students)`,
  `remove_class_member(class, student)`. Staff act only in their own
  academy; the superadmin in any.
- **Staff read their academy's students' learner data** (taken up
  2026-10-14 by "Student performance" in PLAN.md; classes can build on it). Today
  `learner_concept_state` and `attempts` are readable only by their owner.
  A new read policy (via `private.can_view_person`) lets staff read their
  own academy's students, and no one else's. It widens who sees student
  data, so it needs the full DB-test treatment (another academy's teacher
  sees nothing; students still see only their own).

**Screens**
- `/teach/classes`: the academy's classes, "New class" (name + course).
- A class page:
  - members: add students from the academy, remove one;
  - students × concepts grid for the class's course (mastered / learning /
    not started / review due, shown by symbol as well as colour; scrolls
    sideways on phones);
  - "mistakes the class keeps making": top 5 misconceptions in the last 14
    days, with how many students made each;
  - reviews due per student; summary (average mastered, active in 7 days).
- `/teach` gets a "Classes" card in place of "Coming soon".

**Tests:** DB tests (membership rule, who may create/add/remove, the new
read policy), unit tests for the dashboard numbers (grid, misconception
ranking, averages), and an e2e test (teacher makes a class, students answer
some questions wrongly, the dashboard shows their states and the top
mistake).

**Open decisions (recommended first):**
1. Who sees which classes: every teacher sees all of the academy's classes,
   or each teacher only their assigned ones (needs class–teacher links).
2. Who creates classes: academy admins and teachers, or admins only.
3. A student in several classes (a Board class and a JEE class): allowed;
   progress is shared because concepts are shared within the group.
4. The superadmin sees an academy's classes read-only from `/admin`, or
   nothing for now.

## Server functions next to the database (parked 2026-10-15)

Measured on the live site: 2.4–3.4 s from tapping an answer to its feedback,
2.0–2.9 s of it the `submitAnswer` server action. Vercel runs the functions
in `iad1` (Washington; response id `bom1::iad1::…`) while Supabase is in
`ap-south-1` (Mumbai), and one answer makes ~8 database round trips in a
row, each crossing the world (~250 ms). The same action run from Pune takes
~0.3 s.
- **Fix:** `vercel.json` with `"regions": ["bom1"]` (Next.js's
  `preferredRegion` is deprecated; region is platform config). Every
  server-rendered page that reads the database gets faster, not just answers.
- **Check after:** time answers again with the timing script approach
  (Playwright, server action response time, `x-vercel-id` shows `::bom1::`),
  and delete the guest it creates.
- **Further, if still slow:** verify the session from the JWT locally instead
  of a call to the auth server, and fold "next question + solution" into the
  `record_attempt` call.

## "Show all" on point-by-point slides (parked 2026-10-15)

Slides reveal one point per click (PLAN.md "Slides as points"). A small
"Show all" link below the points would help quick readers and revision. The
owner chose not to add it for now.

## Content slips found while translating (logged 2026-10-28)

A translation copies the English maths exactly, so slips in the English stay
until the English is fixed (then re-translate that concept: its source
fingerprint changes).

- Measures of Dispersion C03, worked example: the die table writes its row
  breaks as `\ ` instead of `\\`, so KaTeX draws all six rows on one line.
  The other tables in that file use `\\`.

## Backfill ledger: Std XII biology fact-check (logged 2026-11-27)

An independent fact-check of the shipped Std XII biology chapters (pushed
e61aaf3). Every marked answer is right; these are an ambiguous item and
loose lines. APPLIED 2026-11-27 on the owner's OK ("Fix all 3 groups"): commits 3e96f99
(options), 3d6a87d (lesson facts), 36ae652 (feedback lines); the judgement call below was left as is.

- reproduction-in-plants C06-Q2: "haploid nuclei in the mature female
  gametophyte" = 8 clashes with C06-Q1 (secondary nucleus is diploid). Reword
  to "nuclei formed by the three mitotic divisions"; lesson line to "7 cells,
  8 nuclei, all haploid until the polar nuclei fuse".
- reproduction-in-plants C05-M3: right-angled ovule is hemianatropous, not
  "campylotropous-like".
- reproduction-in-animals C07-Q5, formal point, hook: the book's term is
  "cortical reaction", not "zona reaction".
- inheritance-and-variation C09-Q2: wrong option "a worker's egg" is arguably
  right (laying workers' eggs become drones); replace with "an egg fertilized
  by two sperms".
- inheritance-and-variation C06 formal: say which is which, "1 normal : 2
  carriers".
- molecular-basis-of-inheritance C06-Q2 solution: "AUG starts every mRNA" is
  false; "translation begins at AUG".
- origin-and-evolution-of-life C04 worked example and formal: Weismann used
  rats for 21 generations (draft says mice, 22).
- origin-and-evolution-of-life C05 formal title "Sources of variation" lists
  genetic drift; retitle "Factors that change the gene pool".
- plant-growth-mineral-nutrition C04-Q4 (apical dominance): wrong option
  "Ethylene" is right by the book ("ethylene ... causes apical dominance");
  replace with "Abscisic acid".
- plant-growth-mineral-nutrition C02-Q5 (total growth per unit time): wrong
  option "efficiency index" is the book's synonym for growth rate; replace
  with "lag phase".
- plant-growth-mineral-nutrition C07 lesson: the book lists Fe as a
  macroelement and micro as Zn, Cu, Al, Si, Mn, B, Mo, Cl (no Ni).
- plant-water-relation C08 lesson and C08-Q5: mineral uptake is not only
  active (book: some solutes enter passively); soften to "independent of
  water uptake, often active".
- plant-water-relation C07-M8: Priestley line mixes up Joseph and J. H.
  Priestley; say "Dixon and Joly, not Priestley, proposed cohesion–tension".
- enhancement-food-production C08-Q3 (rice biofertilizer): wrong options
  *Azotobacter* (book: "especially rice") and *Azospirillum* (cereals) are
  right by the book; replace with *Rhizobium* and *Trichoderma*.
- enhancement-food-production C09-Q5 (*Nosema*): wrong option "caterpillars"
  is in the book's table; replace with "mealy bugs and white flies" and widen
  the lesson line.
- enhancement-food-production C01 lesson and C01-Q1: the book calls Ratna a
  semi-dwarf variety, not a hybrid (hybrids: Ganga-3, CO-12, Niphad).
- ecosystems-energy-flow C01-M2: "1–5% is the share captured" is false (book:
  2–10% of PAR).
- biodiversity-conservation C05 lesson: BOD is "biochemical", not
  "biological", oxygen demand.
- reproduction-in-animals C11-Q3 (barrier contraceptive): wrong option
  "a Copper-T" is a barrier by the book (IUDs listed under mechanical
  barriers); replace with "vasectomy".
- reproduction-in-animals C12 worked example: the book's IVF transfers the
  embryo to the fallopian tube, not the uterus.
- reproduction-in-animals C01 lesson and worked example: the book calls
  Planaria's method fragmentation; regeneration "differs distinctly from
  reproduction".
- reproduction-in-animals C05 worked example ("up to three" polar bodies):
  the book says the first polar body normally does not divide; C12-M15:
  artificial insemination is into the cervix.
- molecular-basis-of-inheritance C03-Q1 (bp round one octamer, key 146):
  wrong option 200 is also in the book ("200 bps wraps ... 1¾ turns");
  replace with 1000.
- origin-and-evolution-of-life C07, C01, C02-M4 lessons: post-mating barriers
  are gamete mortality, zygote mortality, hybrid sterility; Miller ran sparks
  "for several days" giving urea, amino acids, lactic acid; the fish–amphibian
  link is *Ichthyostega* (or lung fishes).
- Judgement call: reproduction-in-plants C08-Q3 says the stigma decides
  pollen compatibility (book Ex Q2(1)); in gametophytic self-incompatibility
  rejection is often in the style.

## Also parked (details in PLAN.md)

- Staff reset a student's password (PLAN.md Phase 2, "Later"). Self
  sign-up with Google shipped 2026-10-20 (RUNBOOK 2b.9).
- Merge a guest's progress into an existing Google login. Today a guest who
  continues with a Google account that already has a login switches to that
  login and leaves the guest's progress behind (parked 2026-10-20).
- Teacher present mode; "ask the class" live polls (PLAN.md "Teachers").
- CAPTCHA on guest sign-in and cleanup of inactive guests before a public
  launch (PLAN.md "Follow-ups").
