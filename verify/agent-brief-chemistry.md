# Addendum: Std XI and XII Chemistry concepts (PLAN.md "Std XI and XII Chemistry")

Read [agent-brief-concept.md](agent-brief-concept.md) first and follow it; this file changes only what differs for
the Balbharati Std XI and XII Chemistry books. Where the two disagree, this file wins. The lead locks each chapter's
graph and reviews every concept; agents write whole chapters, up to five at once. "You" is whoever writes the concept.

## Who you write for
A Class 11 or 12 Maharashtra State Board (HSC) student, English medium. Use the book's words, names and symbols
(IUPAC names as the book gives them, $\Delta H$, $E^\circ_{\text{cell}}$, $K_c$, $k$ for a rate constant). A Std XII
concept that rests on Std XI Chemistry writes it as `("ext", "<topic> (Std XI Chemistry)")`.

## Sources: your chapter's pack
`<scratch>/chem/packs/<book-slug>.pack.json` has
- `book`: every row of the book chapter (`ref` like `mh-sb-12/solutions-12-chem/Ex Q.9`, `subtopic`, `format`,
  `stem`, `options` for MCQs, a worked `solution`, `book_answer` where the book prints one, `derived_answer` for an
  MCQ, and an `erratum` where PYQ Vault found the book wrong: follow the erratum, never the misprint);
- `board` (Std XII only): HSC board rows (`ref`, `year`, `stem`, `options` and `key` for MCQs, `solution`). Board
  keys were derived by PYQ Vault, not printed by the board: re-derive every one.

Cite rows as `source='{ kind: "pyqvault-practice", ref: "<ref>" }'`; at least two items from board rows where any
fit. A changed-numbers variant keeps its row's ref. Rewrite the pack's `\( … \)` LaTeX with `$…$`.
PYQ Vault keys and errata are sometimes wrong: say so in your reply, with the ref and the right answer.

## Chemical notation: mhchem
Formulas, ions, equations and states go in `\ce{}` inside `$…$`: `$\ce{H2SO4}$`, `$\ce{SO4^2-}$`, `$\ce{Fe^3+}$`,
`$\ce{CH3CH2OH}$`, `$\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$`, `$\ce{CH3Br + OH- -> CH3OH + Br-}$`. Isotopes `$\ce{^{14}_6C}$`.
Never `\mathrm{H_2O}` for a formula. Units stay as in physics: `$0.5\ \mathrm{mol\,L^{-1}}$`, `$\mathrm{J\,K^{-1}\,mol^{-1}}$`.
- **Phones:** keep each `$…$` under about 35 characters of source. A long equation is two pieces that wrap, split
  before the arrow: `$\ce{CH3CH2Br + KOH}$ $\ce{-> CH2=CH2 + KBr + H2O}$`. Condensed formulas, never drawn
  structures: `$\ce{CH3-CH(OH)-CH3}$`; a benzene ring is `$\ce{C6H5-}$` (phenyl) or named in words.
- Figure labels are plain Unicode (H₂O, Na⁺, ΔH, E°); the validator rejects `_` in a label.

## Turning chemistry questions into one-answer MCQs
Most rows are subjective. Each becomes one MCQ whose wrong options come from modelled mistakes:
- **Numericals** (moles, concentration, colligative properties, pH, $K_{sp}$, enthalpy, cell potential, rate, half
  life, unit-cell density): ask for one quantity; the models are the slips (forgot the van't Hoff factor, used mass for
  moles, $\ln$ for $\log$, multiplied $E^\circ$ by the equation's coefficients (it is intensive), used $n$ wrongly, kept kJ and J
  mixed, °C for K).
- **Reactions** ("what is formed when …"): the key is the product; distractors are the products of stated
  misconceptions (Markovnikov vs anti-Markovnikov, substitution vs elimination, the wrong carbon oxidised, the
  ortho/para vs meta director). Named answers: `Symbol("ethanol")` with `text=r"$\ce{CH3CH2OH}$ (ethanol)"`.
- **Orders and trends** ("arrange in increasing …"): the key is the order; distractors are the reverse and the orders a
  stated misconception gives (size only, ignoring hydrogen bonding, ignoring the inert-pair effect).
- **Names**: IUPAC name answers with distractors from misnumbered chains, wrong principal group, alphabetical order.
- **Explain / state / define**: named answers; every distractor is a stated misconception, not a random wrong statement.
- **Laws, definitions and named reactions** are slide points in the book's words.

## Numbers and models
- Constants and masses from [chemistry.py](chemistry.py): `BOOK` ($N_A$ 6.022e23, $R$ 8.314 and 0.0821, $F$ 96500,
  $V_m$ 22.4, 0.0592 V, $K_w$) and `molar_mass("CuSO4.5H2O")` from the books' rounded atomic masses. When the question
  gives masses or constants, use the question's. Add a missing one to `BOOK`/`MASS` test first.
- Models return the answer **already rounded** with `sig(x)` (3 significant figures; `sig(x, 2)` when the data has
  2), so key, distractors and verifier compare the same number. If two models agree after rounding, change the numbers.
- Logs: `log(x, 10)` in sympy; pH answers to 2 decimal places are fine as `sig(x, 3)` of a value like 4.74.
- Option text: `fmt="unit:mol\,L^{-1}"` writes the value with its unit; `fmt="sci"` for unitless powers of ten.
- Named answers are plain identifiers, not Python/sympy names (sum, N, S, Q, I, E, pi, sin, gamma, beta, Symbol) and
  not starting with a digit: `but_2_ene`, `sn2_inversion`.

## Figures
Few chemistry concepts need one: unit cells and packing, energy profiles, graphs (rate against concentration, $\ln k$
against $1/T$, adsorption isotherms, conductivity against dilution), phase and titration curves. Use the existing
`figures.py` helpers (`graph()`, charts, segments, circles). Don't draw molecular structures. If a concept needs a
helper the file lacks, say so in your reply instead of editing `figures.py` (other agents run at the same time).

## Chapter lessons (from physics review, 2026-11-26)
- A misconception's fallback is an ancestor in the graph (follow `prereqs`), an `ext` topic, or `none`.
- Misconception ids are contiguous: renumber after dropping one.
- Keep distractors well apart from the key (more than about 2%); change the numbers rather than accept a near miss.
- Keep the graph one-liner's content on the slides. The graph node is locked: don't edit `graph.ts`. Leave concepts
  `draft`; the lead approves them, and must set `approved` before registering the chapter in a course (a catalog test
  enforces it; RUNBOOK 3 step 6).
- The Std XII models packages have no `_mix.py`; copy `verify/models/hydrocarbons/_mix.py` into one before using
  `mixed_models` there.
- Strings with `\b`, `\t`, `\f`, `\n`, `\r` after the backslash (`\beta`, `\times`, `\frac`, `\nu`, `\rightarrow`) must
  be raw strings in the Python content files; `\ce` is safe either way but use raw strings throughout.
- Element props are typed: run `npm run typecheck` once at the end, which check-concept does not replace.
- `build_index.py` touches only your chapter's `index.ts`; run it for your chapter alone.
- Section titles are 1 to 6 words.
