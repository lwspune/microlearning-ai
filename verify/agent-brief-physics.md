# Addendum: Std XI and XII Physics concepts (PLAN.md "Std XI and XII Physics")

Read [agent-brief-concept.md](agent-brief-concept.md) first and follow it; this file changes only what differs
for the Balbharati Std XI and XII Physics books. Where the two disagree, this file wins. Physics was written in
the main session, one concept at a time (owner, 2026-10-23); since 2026-11-26 up to three concept agents may run at
once, each slot refilled as soon as it frees, and the lead reviews every concept. "You" below is whoever writes the concept.

## Who you write for
A Class 11 or 12 Maharashtra State Board (HSC) student, English medium, who has the book's maths: calculus
from Std XI and XII Maths, vectors, trigonometry. Use the book's words, symbols and sign conventions
($I$ for moment of inertia, $\omega$, $\alpha$, $L$, $\tau$; $T$ for surface tension in Fluids, $T$ for period
in Oscillations). A Std XII concept that rests on Std XI Physics writes that as `("ext", "<topic> (Std XI Physics)")`
until Std XI Physics is live.

## Sources: your chapter's pack
`<scratch>/phy/packs/<chapter>.pack.json` has
- `book`: every question of the book chapter (`ref` like `mh-sb-12/rotational-dynamics-12-phy/Ex.Q2(iii)`, `subtopic`,
  `format`, `question`, the book's `answer` where it prints one, a worked `solution`, and an `erratum` note where
  PYQ Vault found the book's answer wrong: follow the erratum, never the misprint);
- `board`: the chapter's HSC board questions (`ref`, `year`, `question`, `options` and `key` for MCQs,
  `solution`). Board keys were derived by PYQ Vault, not printed by the board: re-derive every one.

Cite rows as given (`source='{ kind: "pyqvault-practice", ref: "<ref>" }'`); at least two items from board rows
where any fit. Rewrite the pack's `\( … \)` LaTeX with `$…$`.

## Turning physics questions into one-answer MCQs
Most rows are subjective. Each becomes one MCQ whose wrong options come from modelled mistakes:
- **Numericals**: ask for the one quantity; the models are the slips (wrong formula, missed square, $r$ for
  $d$, forgot to convert cm to m, used $mg$ for $m$, dropped the factor $\tfrac12$).
- **Derivations** ("Derive / Obtain an expression for …"): ask for the result, or for the step that the
  derivation turns on ("the torque on the rod is …"); never ask the student to reproduce a whole proof.
- **Explain / state / define**: a named answer (`Symbol("…")` values with `text=`); every distractor is a
  stated misconception (for example "a heavier ball rolls down faster"), not a random wrong statement.
- **Laws and definitions** are slide points in the book's words, with symbols defined before use.

## Numbers and units
- SI throughout. Convert in the model, not in your head: a model that forgets to convert is a distractor.
- Models return the answer **already rounded** with `sig(x)` from [physics.py](physics.py) (3 significant
  figures; `sig(x, 2)` when the data has 2), so key, distractors and verifier compare the same number. If two
  models agree after rounding, change the numbers.
- Take constants from `physics.BOOK` (`BOOK["g"]` is 9.8 m/s², the book's value; use 10 only when the question
  says so, and say so in the stem). Add a missing constant to `BOOK`, test first, from the book's printed value.
  Keep $\pi$ exact in the model and round at the end, unless the book's question fixes $\pi = 3.14$ or $22/7$.
- Option text: `fmt="unit:<unit>"` writes `$4.9\ \mathrm{m/s}$` from the value. Write the unit as it goes
  inside `\mathrm{}`: `m/s^2`, `kg\,m^2`, `N\,m`, `rad/s`, `J/(mol\,K)`; separate unit symbols with `\,`.
  Powers of ten print as `6.67 \times 10^{-11}`. A dimensionless answer has no `fmt`.
- In stems and slides, write a quantity in prose as `$4\ \mathrm{kg}$` or `$9.8\ \mathrm{m/s^2}$`, the value
  and unit together, never a bare number.

## Figures
Physics figures use the same `figures.py` helpers and step rules. When a concept needs a shape the helpers
lack (a spring, a pulley, a wave, a P–V curve, a circuit), add the helper to `figures.py` test first, then use it.

## Lessons from review (2026-11-26, Std XI and XII)
- A misconception's fallback is an ancestor in the graph (follow `prereqs`), an `ext` topic, or `none`; nothing else validates.
- Misconception ids are contiguous: renumber after dropping one.
- Named answers are not Python/sympy names (sum, field, minimum, degree, N, S, Q, I, E, pi) and do not start with a digit;
  vector answers are plain symbols (`ihat`), not Tuples.
- Keep distractors well apart from the key: if a modelled slip lands within about 2% of it (e.g. two Doppler formulas that
  differ only at second order), change the item's numbers and keep the ref as a variant.
- Use the book's symbols on the slides (s for specific heat, n and n0 in the Doppler formula) and keep the graph one-liner the same.
- Strings with ``, `	` or `` (ec, 	heta, lpha) must be raw strings in the Python content files.
- Figures: a point with no label leaves `label` out; solution figures use only steps up to the solution's step count (give
  them unstepped copies); element props are typed (`arc` has no `dashed`), so run `npm run typecheck`, which check-concept
  does not replace.
- Check the physics of every figure, not only its labels: field lines leave a bar magnet near its ends, a dip needle tilts
  below the local horizontal, rays leave a raindrop downward (a ray-traced exit needs the normal pointing against the ray).
- Section titles are 1 to 6 words.
