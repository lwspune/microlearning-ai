# Concept authoring rules

Content lives in `src/content/chapters/<chapter>/`: `graph.ts` (the
prerequisite graph) and one file per concept in `concepts/`, typed by
[types.ts](types.ts). TypeScript is the single source of truth.

| Check | Command | What it enforces |
|---|---|---|
| Structure | `npm test` ([validate.ts](validate.ts)) | Graph, IDs, fallbacks, tagging, item counts (rules marked **[S]**) |
| Answers | `npm run content:verify` ([verify/](../../verify/)) | Re-derives keys and distractors with sympy (rules marked **[V]**) |
| Review | `/review` in the app | Wording, tone, rendering (rules marked **[R]**) |

To add a concept: write its file, add its misconception models to
`verify/models/<chapter>.py`, register it in the chapter's `index.ts`, and
run both commands. Students only ever see concepts with `status: "approved"`.

To publish: `npm run content:seed`. It re-runs both checks and writes nothing
if either fails; then it seeds each chapter in one transaction. The database
enforces the structural rules again and refuses to delete any item or concept
a student has used: retire it instead of removing it.

## Graph

- **[S]** Edges are hard prerequisites only. No unknown prerequisites, no cycles.
- **[S]** Edges are transitively reduced. If A needs B and B needs C, A does
  not list C (the chapter test pins this).

## Misconceptions

- **[S]** IDs are `<concept>-M<n>`. Once an ID is in use (by an item, attempt
  data or a live build), it is never renumbered or reused. Close gaps only
  while a draft is still unreviewed.
- **[V]** Each misconception must be a model you can simulate: a function in
  `verify/models/` that turns the item's inputs into the wrong answer. If you
  can't write it as a function, it's a slip, not a misconception, and it
  doesn't get an ID.
- **[S]** A fallback is a concept, an external topic, or none (for a
  convention-only mistake). A concept fallback must be a **prerequisite
  ancestor**; otherwise routing would send the student forward.
- **[S]** Every misconception is tagged on at least one option, so some item
  can detect it.

## Check items

1. **[V]** The key is re-derived independently from the definition, never
   copied from a source key. AI-written and textbook keys are both wrong some
   of the time.
2. **[V]** Every wrong option comes from exactly one tagged misconception. The
   verifier re-runs that misconception's model and must land on the option.
3. **[V]** Each option is produced by exactly one model among the item's
   listed ones: the key, or one tagged misconception. In particular, the key
   must not *also* satisfy a listed misconception's model.
   *Learned 2026-10-13 (C25-Q5):* the original key $-1 - i$ was on the
   correct bisector **and** on the "it's a circle" distractor's circle. A
   student holding the misconception would see two valid options and could be
   credited as correct.
4. **[R]** Note when a misconception can't be detected by an item. If its
   model gives the key for some inputs (e.g. C14-M1 in quadrants I and IV),
   record it in `engineNotes`. The engine must then draw a diagnosing item
   from inputs where the model and the key differ.
5. **[R]** The worked example and the hook must not reuse any check item. The
   student has already seen their answers.
6. **[R]** An option's `text` must show exactly its `value`. The verifier
   checks `value`, not the rendered text.
7. **[S]** At least 5 items per concept, so mastery (3 different questions
   right, misses retried until right) and the review queue never repeat an
   item too soon.
8. **[S]** Exactly one correct option, which carries no misconception, and
   **exactly 4 options** (owner's rule, 2026-10-15). The 3 wrong ones each
   come from a modelled mistake; where no conceptual one fits, a modelled
   slip (fallback `none`) is fine, an unmodelled number is not.

## Solutions and figures

Asked for 2026-10-14: every question teaches through an animated
step-by-step solution, and anything that can be pictured on the Argand plane
is. Figures are data ([types.ts](types.ts) `Figure`), drawn by
[FigureView](../figures/FigureView.tsx).

9. **[S]** Every item has a `solution` of at least 2 non-empty steps. It is
   shown only after the learner answers, so it may state the answer. Steps
   are inline text, one move each, ending at the answer. Never refer to an
   option by its letter: the order is shuffled per learner.
10. **[S]** A concept that can be pictured is marked `visual: true` in the
    graph (points, distances, angles, rotations, loci, regions). A visual
    concept has a figure on the idea slide (`explanation.figure`) and on the
    worked example (`worked.figure`).
11. **[S]** In a visual concept, every `point` and `locus` item has a figure
    in its solution. Value items get one too wherever a picture helps (C10
    adds one to every item).
12. **[S]** Figures are well formed: alt text that says what the picture
    shows in words; a view running low to high on both axes; finite
    coordinates; positive radii; distinct points for lines, segments and
    vectors; regions with at least one shape. Element `step`s stay within the
    worked example's or solution's steps.
13. **[S]** Labels are plain text, not LaTeX. Use Unicode: `−` for minus,
    `²`, `√5`, `|z − (1 + 2i)| = 3`.
14. **[R]** Each step adds what its text talks about (worked: `step` = the
    worked step; idea slide: the order it plays in). Check the "After step n"
    frames on `/review`.
15. **[R]** Keep labels off the axis numbers: label a segment lying on the
    real axis above it (`labelAt: "n"`), and a centre on an axis to the side
    (`"nw"`). Labels are kept inside the frame automatically, but check
    collisions on `/review` in light and dark mode.
16. **[S]** A question may show a figure with its stem (`item.figure`, e.g.
    "the shaded region is ..."). It is shown whole, so its elements carry no
    `step`, and it must not give the answer away (a solution figure may).

## Lesson slides

Asked for 2026-10-15 after the owner's review of Angle C01: terms used before
they were defined, text-only "Precisely" slides, no plane where quadrants were
discussed, arms that jumped instead of turning.

17. **[S]** A new visual concept (`status: "draft"`) writes `formal` as
    sections, one slide each, every one with a figure that shows what its
    text says. Every section, in any concept, starts with a bold lead-in of
    up to six words ending in a full stop or colon (`**Directed angle.**`):
    it becomes the slide's title. (Older concepts keep `formal` as text,
    split at blank lines; see the PLAN.md backfill ledger.)
18. **[R]** Define every term the first time a learner meets it, in plain
    words, before using it: "a **ray** is a half-line ...", "**clockwise**,
    the way a clock's hands go". The idea slide defines the everyday words;
    each formal slide defines its own term in its first sentence. Don't
    repeat the idea slide on the formal slides.
19. **[R]** Anything that turns, turns: use a `turn` element (it rotates at
    90° a second and traces the angle) for angles on the idea, formal and
    worked slides. Mark the initial arm (a `good` segment, labelled) and
    label the terminal arm. Keep solution figures quick (arcs, no `turn`):
    learners open them to check an answer, not to watch.
