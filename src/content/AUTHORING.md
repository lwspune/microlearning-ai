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
run both commands.

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
7. **[S]** At least 5 items per concept, so mastery (2–3 in a row on fresh
   items) and the review queue never repeat an item too soon.
8. **[S]** Exactly one correct option, which carries no misconception.
