# Addendum: Std XI and XII Biology concepts (PLAN.md "Std XI and XII Biology")

Read [agent-brief-concept.md](agent-brief-concept.md) first and follow it; this file changes only what differs for the
Balbharati Std XI and XII Biology books. Where the two disagree, this file wins. The owner chose no agents for biology
(2026-11-27): the lead writes every concept in the main session, so "you" is the lead.

## Who you write for
A Class 11 or 12 Maharashtra State Board (HSC) student, English medium. Use the book's words and names (scientific
names in italics: `*Pisum sativum*`; the book's terms: "microsporangium", "tapetum", "double fertilization"). A Std XII
concept that rests on Std XI Biology writes it as `("ext", "<topic> (Std XI Biology)")`.

## Sources: the chapter's pack
`<scratch>/bio/packs/<book-slug>.md` (built by `<scratch>/bio/pack.mjs`) holds
- the book's exercise rows (`Question_Bank/scripts/{mh-sb-11,stateboard}/data/<slug>-{11,12}-bio.questions.json`): `ref`
  like `Ex Q2(6)`, `subtopic` (the book's section), `stem`, `options` and `answer` for MCQs, and the worked solution
  where PYQ Vault has one (`.ex.solutions.json`, `.mcq-verify.json`);
- Std XII only: the HSC board rows from PYQ Vault (`year`, `qno`, stem, options and the key PYQ Vault derived, solution).
Cite book rows as `source='{ kind: "pyqvault-practice", ref: "mh-sb-12/<slug>-12-bio/<ref>" }'` (Std XI `mh-sb-11/...`)
and board rows as `ref: "mh-hsc-12/<chapter name>/<year> <qno>"`. Re-derive every key; PYQ Vault keys are sometimes wrong:
log the ref and the right answer in `<scratch>/bio/errata.md` for the end-of-build report.
- **The book's own text** is at `Question_Bank/scripts/{mh-sb-11,stateboard}/out/<slug>-{11,12}-bio.text.md`. Grep it
  for every wrong option: if the book names it as true anywhere (a second hormone, a second biofertilizer, a synonym
  such as "efficiency index" for growth rate), it is not a wrong option, whatever standard biology says. A fact-check
  of the shipped Std XII chapters (SUGGESTIONS.md backfill ledger, 2026-11-27) found six such slips.
- Where the book is wrong (a misprint, a clash with its own figure), test the uncontested fact instead of the
  disputed one, and log the erratum.

## Turning biology questions into one-answer MCQs
Most rows are "name", "define", "distinguish" or "explain". Each becomes one MCQ whose wrong options are stated
misconceptions, never random wrong facts:
- **Name / identify:** the key is the structure or process; distractors are its classic confusions (tapetum vs
  endothecium, anther vs ovule, xylem vs phloem, mitosis vs meiosis, T-cell vs B-cell).
- **Distinguish:** ask which feature belongs to one of the pair; distractors are the other's features.
- **Sequence:** the key is the right order; distractors are the orders a stated misconception gives.
- **Numbers that biology does have** (chromosome counts in cells and gametes, ploidy of endosperm, Mendelian ratios,
  ATP counts, Hardy–Weinberg, population growth): numeric models from the definition, exact (`Rational`, `Integer`).
- Named answers are plain identifiers, not Python or sympy names (`tapetum`, `double_fertilization`); check with a
  draft run, which refuses reserved names.

## Notation
Scientific names in `*italics*`. Chemistry inside biology (photosynthesis, respiration) uses mhchem: `$\ce{6CO2 + 12H2O}$`.
Ratios as `$9 : 3 : 3 : 1$`. Genotypes in plain text or `$Tt$`, `$I^AI^B$`. Keep each `$…$` under about 35 characters.

## Figures
No anatomical drawings: the figure helpers draw lines, circles, regions and graphs, not organs. Draw a figure only where
a graph or schematic teaches: growth and population curves (`graph()`), the oxygen dissociation curve, energy pyramids
and food chains (segments, labels), pedigree charts (squares and circles joined by lines), the cell cycle as a circle
of arcs. A Punnett square is a `$$\begin{array}{c|cc} ... \end{array}$$` table in the text, at most 3 columns of
alleles. Labels are plain Unicode (CO₂, Na⁺); the validator rejects `_` in a label.

## Lessons carried over from chemistry
- Models live in `verify/models/<pkg>/cNN.py` with `mixed_models` from that package's `_mix.py` (copy
  `verify/models/hydrocarbons/_mix.py` into a new package).
- Draft items from bash, or strip the BOM: PowerShell 5.1's `>` writes one and it breaks the built file.
- Set `status: "approved"` once the concept is reviewed, before the chapter joins the MH Board course (a catalog test
  enforces it). Misconception ids are contiguous; fallbacks are ancestors, `ext` topics, or `none`.
- Each formal section: 1 to 6 words of title, at most 6 points of at most 25 words.
- Prerequisites stay transitively reduced: never list one that another listed prerequisite already reaches (the
  chapter test enforces it, and so does `<scratch>/bio/lintdraft.py` on draft files).
- Hooks are facts too: "a starfish matches when cut any way", "siblings are never identical" and "our cells carry
  chloroplasts" all shipped in drafts and were caught only by an independent fact-check. Give every draft one before
  it is committed.
