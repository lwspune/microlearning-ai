# Brief: one agent reworks one published concept's lesson slides (PLAN.md backfill ledger 5)

The prompt that sends you this brief gives: the chapter slug (`<chapter>`), its models package (`<pkg>`),
your concept (`CNN`) and its file, and any figure that clearly teaches it. Repo:
C:\Users\vilas\Downloads\MicroLearningAI, on the chapter's rework branch; do not commit, do not switch
branches. Other agents edit the chapter's other concepts at the same time: touch only your concept file (and
its verifier model `verify/models/<pkg>/cNN.py`, only for a misconception split). Keep your own temporary
files in a subfolder named for you (`<scratchpad>/<chapter>-cNN/`): other agents share the scratchpad, and a
helper script with a common name like `edit.py` gets overwritten.

## Why
The owner reviewed Angle Measurement and asked for: every term defined before it is used; formal slides with real
titles (not "Precisely") and a figure showing what each says; anything that turns shown turning; and no bulky
paragraphs — single, simple sentences as points that appear one per click, the figure building with them.
Angle Measurement, Trigonometry – I and Trigonometry – II were reworked that way and approved.

## Read first
1. `src/content/AUTHORING.md`, all of it, especially rules 12–20.
2. The approved models: `src/content/chapters/angle-measurement/concepts/c01-directed-angles.ts` (turns, xy-plane
   helper `planeOf`), `src/content/chapters/trigonometric-functions/concepts/c04-large-and-negative-angles.ts`
   (unit-circle figure with turns), `c05-fundamental-identities.ts` and
   `src/content/chapters/compound-and-multiple-angles/concepts/c04-double-angles.ts` (formula-heavy concepts
   written as points). Copy their voice, structure and figure style.
3. `src/content/types.ts`: `intuition: string | string[]`; `FormalSection` = `{ title, points, figure? }`;
   `FigureElement` incl. `turn` (an arm rotating from `from` to `to` degrees at 90°/s, tracing the angle).
4. Your concept file, its node in the chapter's `graph.ts` (is it `visual: true`?) and its verifier model.

## What to change (idea slide and formal sections; worked figure only as noted)
- `intuition` → points (array of strings). `formal` → `[{ title, points, figure? }]`, one slide per section.
- **Points:** one short, simple sentence each (aim under 20 words; never over 25 outside `$…$`); at most 6 per
  slide; inline maths only (no `$$`, no line breaks, no bullet characters). A display formula becomes its own
  point; a table becomes one point per row. A section needing more than 6 points is split into two titled
  sections. Titles: up to 6 words, the slide's topic ("Signs in each quadrant", "Three forms of cos 2A").
- **Formulae on phones:** keep each `$…$` short enough to wrap (about 35 characters of source); a long identity
  is said as "$\cos(A + B)$ equals" then the right side as its own piece, or split over two points.
- **Define every term** in plain words in the point that first uses it, before later points rely on it. The idea
  slide defines the everyday words; formal slides don't repeat it. A term an earlier concept of the chapter
  defines gets a short "Recall:" at most. Keep every fact, rule, formula and example the slides had: reorganise,
  don't drop. A claim that holds only for some angles says so ("for an acute $A$"). Never name a concept
  by its code (C01, C04…) in anything a student reads: say what it taught ("the product rule").
- **Figures:** a `visual: true` concept needs a figure on the idea slide and **every formal section**. Others:
  add one only where a picture genuinely teaches; don't decorate pure algebra. **Figure step n appears with
  point n**: number each element's `step` to the point that names it; elements always present (axes, the
  circle) have no step. Use `turn` where an angle sweeps (positive anticlockwise), with a labelled
  `tone: "good"` initial arm. Labels plain Unicode (`sin θ`, `−`, `°`, `π`), no LaTeX; keep labels clear of
  each other and the axes; views contain every element.
- **Worked example:** keep its maths and steps; split any inline equation longer than ~35 characters into shorter
  `$…$` pieces so it wraps on a phone; if its figure shows a rotation, use `turn`.
- **Misconceptions:** check whether one misconception bundles two different student moves so its remediation
  fits only one (Angle C01-M1 did: "drops the minus sign" also covered "945 = 1080 − 135 read as 135", whose
  student never saw a minus sign). If so, split it: new id, retag the affected options, its own remediation,
  update engineNotes, add the model to your `cNN.py` and its MODELS. Otherwise leave misconceptions alone.

## Do NOT change
Item stems, options, values, keys, `verify`, item ids, solution steps or solution figures (solutions stay quick:
no `turn`), the hook, `visualSpec`, `status`.

## Check before reporting
- `node scripts/check-concept.ts <chapter> src/content/chapters/<chapter>/concepts/<file>` prints 0 problems.
- `npx vitest run src/content/chapters/<chapter> src/lessons` passes.
- If you added a figure and a dev server answers on http://localhost:3000, look at `/review/<chapter>/<slug>`
  (its "After point n" frames, light and dark, e.g. with `scripts/figure-sheet.mjs`) for label collisions; say
  if you couldn't.
- Read the points aloud as a student new to the topic: one simple sentence each; nothing used before it is
  defined; each figure step matches its point.

## Report (final message, short)
- each slide: title, its points (short), and what appears in the figure (if any) with which point
- any split (sections or misconceptions), anything added or dropped, anything you were unsure about
