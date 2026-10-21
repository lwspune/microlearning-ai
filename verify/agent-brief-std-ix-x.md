# Addendum: Std IX and X concepts (PLAN.md "Std IX and X Maths")

Read [agent-brief-concept.md](agent-brief-concept.md) first and follow it; this file changes only what differs
for the Balbharati Std IX and X books. Where the two disagree, this file wins.

## Who you write for
A Class 9 or 10 Maharashtra State Board (SSC) student, English medium. Shorter sentences than for Std XI, every
step shown, no shortcut that the book doesn't teach. Use the book's words and notation: "simultaneous
equations", $D$, $D_x$, $D_y$ for Cramer's rule, $\Delta$ (or $b^2 - 4ac$) for the discriminant, $t_n$, $S_n$,
$\bar{x}$, $\sum f_i x_i$, CGST/SGST/IGST, FV/MV, NAV. Money is written ₹ outside maths (`₹ 1,770`, `₹ 25`); never
put ₹ inside `$…$`. Indian digit grouping (`1,50,000`) is fine in prose; inside maths write the plain number.

## Sources: your chapter's pack
Your prompt names a pack: `<scratch>/<chapter>.pack.json` with
- `book`: every question of the book chapter (`ref`, `subtopic`, `question`, and usually a worked `solution`);
- `board`: the chapter's SSC board questions 2016–2026 (`ref`, `question`, `options` and `answer` for MCQs,
  `solution`). Board keys were derived by PYQ Vault, not printed by the board: re-derive every one.

Cite the row you built an item from, as given: `source='{ kind: "pyqvault-practice", ref: "<the row's ref>" }'`
(for example `mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.2 Q.1 (4)` or `mh-ssc-10/alg-2024/Q2(B)(iii)`). Mix
both kinds where your concept has board questions: at least two items from board rows when there are any that fit.
Change numbers where the brief says to (two models agreeing, a key readable off the stem); keep the ref.

The pack's `question` text is PYQ Vault's LaTeX in `\( … \)`; rewrite it with `$…$` for this app.

## The book's question forms
- **"Complete the activity"** (fill the boxes): ask for the value of one box, or the next line, with the
  activity's earlier lines in the stem.
- **"Choose the correct alternative"**: a ready MCQ; still model every wrong option as a misconception or slip,
  replacing a book option that nothing explains.
- **Word problems**: keep the book's story and names, shortened; the answer is one number (or one pair), never
  "both of the above".
- **"Show that" / proofs**: ask which reason, step or value completes the argument.

## Fallbacks
`("concept", "Cxx")` only for the ancestors in your prompt. A Std IX topic outside this chapter is
`("ext", "<topic> (Std IX <chapter>)")`, e.g. `("ext", "factorising quadratic expressions (Std IX Polynomials)")`:
the Std IX waves will wire these up, so name the topic plainly.

## Figures
- Geometry (Std IX and X Part 2): mark right angles with `rightAngle` and equal sides with segment `ticks`
  (AUTHORING.md 21); never draw a right angle as a `curve`.
- Data pictures (histogram, frequency polygon, pie diagram): use `axes: "xy"` with plain numbers for bars and
  polygons (bars are four `segment`s each, or a `region` of half-planes), and `axes: "none"` for a pie (a
  `circle`, `segment` radii, and `region`s of `sector` shapes inside the disc). Write a small helper in your
  content file so every figure is built the same way.
- A table of data is display maths (`$$\begin{array}{c|c} … \end{array}$$`), at most 3 columns and 8 rows
  (agent-brief-concept.md section 3).

## Keep tool output small
Don't print whole JSON files or concept files to your context: read the pack with a short script that prints
only the rows your prompt lists, and check your concept with `check-concept.ts`.
