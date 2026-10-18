# Brief: one agent writes one whole concept (RUNBOOK 3, step 5c)

Used for the Std XI chapters (PLAN.md "Std XI Maths"). The prompt that sends you this brief gives:
the chapter slug (`<chapter>`, e.g. `sets-and-relations`), its models package (`<pkg>`, e.g.
`sets_and_relations`), your concept (`CNN`, its slug, title, one-liner, scope), its prerequisite
ancestors (the only concepts a misconception may fall back to), and the book questions to build from.

Repo: `C:\Users\vilas\Downloads\MicroLearningAI` (a Next.js micro-learning app for Indian Class 11–12
students; content is TypeScript, checked by a validator and a sympy verifier). **No git commands.**
You may create or overwrite exactly these files, nothing else:
1. `verify/models/<pkg>/cNN.py` — your answer models.
2. `<scratch>/cNN_spec.py` and `<scratch>/cNN_content.py` — your item spec and content.
3. `src/content/chapters/<chapter>/concepts/cNN-<slug>.ts` — written for you by `build_concepts.py`.

## Read first (skim; don't over-read)
- `src/content/AUTHORING.md` — the rules. Rules 2, 3, 5, 8, 9 matter most.
- `src/content/types.ts` — `Concept`, `Item`, `Figure`, `FigureElement` (note `curve`, `axes: "xy" | "none"`).
- A finished concept for tone, length and shape:
  `src/content/chapters/linear-programming/concepts/c08-corner-point-method.ts`.
- `verify/draft_items.py` docstring (the spec format) and `verify/build_concepts.py` docstring (the content format).
- An existing models file for style: `verify/models/linear_programming.py` (first 200 lines).
- `verify/figures.py` — shared figure helpers (`graph()` for curves; others listed in your prompt).
- Your book questions: `C:\Users\vilas\Downloads\Question_Bank\scripts\mh-sb-11\data\<book-chapter>.questions.json`
  (the refs in your prompt). Each row has `stem`, often `solution`, and sometimes a `_note` on a book misprint.
  Read the maths from these rows, never from a PDF's text layer (it drops surds and fractions).

## 1. Design the misconceptions (before anything else)
3 to 6 misconceptions, each a **rule you can code** (inputs → the wrong answer a student with that idea gets):
a real conceptual error first (the textbook's own warnings and the classic exam traps), then common slips
(dropped sign, wrong formula variant) only where no conceptual one fits. Each needs:
- `mistake` (for the author: what the student believes), `remediation` (shown to the student: 1–2 sentences,
  name the right rule, no blame), and a `fallback`: `("concept", "Cxx")` only for a listed ancestor,
  `("ext", "<topic>")` for a gap outside the chapter (e.g. "factorising quadratics"), or `("none",)` for a slip.
- Check that each pair of models gives **different** answers on the inputs you plan to use, and that none of
  them gives the key. If two always agree, drop one.
- **Don't distort the questions to fit the models.** If the book's natural questions (a positive ratio, an
  upward parabola, a plain A ∩ B) can't get three distinct wrong answers from your misconceptions, add a
  modelled mistake that fits them (a 5th or 6th, often a common slip) rather than rewriting every item the same
  way (all negative ratios, every quadratic flipped). Spread the keys too: no single answer (like
  "symmetric only") should be the key on most items, or a student learns to pick it.

## 2. Models: `verify/models/<pkg>/cNN.py`
```python
"""CNN <title>: answer models (the key, and one per misconception)."""
from sympy import Rational, FiniteSet, Interval, Matrix, Symbol, sqrt  # what you need

def key(v, p):        # v: dict of sympy inputs from the item; p: dict of string params
    ...               # computed straight from the definition, never via the method being taught
def m1(v, p): ...     # one per misconception; raise ValueError("why") where it doesn't apply

MODELS = {"key": key, "CNN-M1": m1, "CNN-M2": m2, "CNN-M3": m3}
```
Return sympy values: numbers (`Rational`, never floats), expressions, `FiniteSet`, `Interval`/`Union`,
`Matrix`, `Tuple`, or a `Symbol("one_one")` for a named answer. The package's `__init__.py` collects every
`cNN.py`; don't edit it.

## 3. Items: `<scratch>/cNN_spec.py`, then draft them
```python
CHAPTER = "<pkg>"
ITEMS = [dict(id="CNN-Q1", stem=r"...", inputs={"a": "3"}, params={...}, models=["key", "CNN-M1", "CNN-M2", "CNN-M3"],
              source='{ kind: "pyqvault-practice", ref: "mh-sb-11/<book-chapter>/Ex 5.1 Q6(ii)" }'), ...]
```
- **5 or 6 items**, each with exactly 4 options: the key and 3 modelled mistakes. Every misconception appears on
  at least one item.
- Build items from the book's questions (its exercises, solved examples and MCQs), turned into one-answer MCQs,
  with the book ref as `source`. The refs in your prompt are a **pool to choose from**, not a list to cover: use
  the questions where three of your misconceptions give three different wrong answers, and show the rest in the
  worked example or solutions. Vary the question types so every misconception is caught somewhere. Change the numbers when a book question would make two models agree. A stem
  stands alone: give every set, value and condition the question needs (book sub-parts often omit them).
- Options: let `draft_items.py` write the text from the value. Overrides: `text={...}` for named answers,
  `fmt="deg"` for degrees, `fmt="pct"` for percentages, `fmt="point"` for (x, y) given as x + I*y.
- Identities ("Prove that L = R") become "L equals" (or "L simplifies to") with R as the key; each model applies
  its wrong rule to L. Values are sympy expressions; the verifier parses option values with `x` and `y` as real
  symbols and every other letter as a plain one, so build them the same way: `Symbol("x", real=True)`,
  `Symbol("y", real=True)`, but `Symbol("t")`, `Symbol("h")`, `Symbol("a")` (a mismatch never matches), and the verifier accepts a match when
  `simplify(a - b) == 0`, so check each model against the key in sympy before relying on it. Give expression
  options `text=` in the book's notation (`$\cot 2x$`, `$\operatorname{cosec}^2\theta$`): sympy's own LaTeX
  writes `\cot{\left(2 x \right)}`. Angles given in degrees go into sympy as radians (`pi/12` for $15^\circ$);
  an answer in degrees uses `fmt="deg"`.
- Data tables are display maths, `$$\begin{array}{c|c} ... \end{array}$$`, and must fit a 390 px phone screen: at
  most 3 short columns (put a long table's rows down the page, value and frequency as two columns), at most 8 rows.
  A wider table doesn't scroll the page but hides its right-hand columns behind a scroll inside the box.
- Percentages: when the question asks for a percentage, the value is the number (`60`) and `fmt="pct"` shows
  `60%`; when it asks "how many", convert to a count first. Never mix the two in one item.
- Draft: `python verify/draft_items.py <scratch>/cNN_spec.py > <scratch>/cNN_items.ts` (run from the repo root).
  It refuses duplicate options; fix the inputs, not the check.

## 4. Content: `<scratch>/cNN_content.py`
```python
import sys
sys.path.insert(0, r"C:\Users\vilas\Downloads\MicroLearningAI\verify")
from figures import graph   # and any helper your prompt names

CHAPTER = "<chapter>"
CONCEPTS = [dict(
    id="CNN", file="cNN-<slug>", var="cNN",
    hook=(prompt, reveal),            # a quick puzzle that the concept resolves; reveal answers it
    intuition=[point, ...],           # the idea slide: up to 6 points, one short sentence each
    formal=[dict(title="Arc length", points=[...], figure=...), ...],   # one slide each; figure: visual concepts
    visual=...,                       # one sentence: a future draggable visual for this idea
    worked=dict(prompt=..., steps=[...], answer=...),   # 3-5 steps, one move each
    misconceptions=[("CNN-M1", mistake, remediation, fallback), ...],
    engine_notes=[...],               # optional (AUTHORING.md rule 4)
    solutions={"CNN-Q1": dict(steps=[...]), ...},       # EVERY item: 2-4 steps ending at the answer
    # visual concepts only: figure=... (idea slide), worked["figure"], and a figure on each solution
)]
```
- Text is KaTeX: `$…$` inline, `$$…$$` display, `**bold**`. Raw strings (`r"..."`). No backticks, no `${`.
- **Write every file with the Write tool**, never through a shell heredoc or `echo`: the shell strips or mangles backslashes (`\times` loses its `\t`, `\\` becomes `\`), and the validator rejects the control characters this leaves.
- Write for a Class 11 Maharashtra Board student: short sentences, the book's notation (e.g. $t_n$, $S_n$,
  ${}^nC_r$ written as `$^nC_r$`: a `$` followed by `{` is a template-literal interpolation), no fluff.
- **Slides are points, not paragraphs** (owner, 2026-10-15; AUTHORING.md 17–20, the validator enforces it).
  The model to copy is Angle Measurement, `src/content/chapters/angle-measurement/concepts/c01-directed-angles.ts`
  to `c07-clock-hands.ts`:
  - `intuition` and each formal section's `points`: one simple sentence per point (aim under 20 words, never
    over 25 outside `$…$`), at most 6 per slide; inline maths only (no `$$`, no line breaks). A display formula
    becomes its own point; a table becomes one point per row. Split a section that needs more than 6 points.
  - **Formulae on phones** (everywhere: hook, slides, worked steps): keep each `$…$` under about 35 characters of
    source, or it runs off a 390 px screen. Split a chain into pieces that wrap, `$f(x + 1) = (x + 1)^2 + 1$
    $= x^2 + 2x + 2$`, and a long sum before its `=`: `$2x^2 + 8x + 8 + x + 2 - 1$ $= 2x^2 + 9x + 9$`.
  - Each formal section has a `title` of up to 6 words (its topic: "Standard position", "Arc length").
  - **Define every term before using it**, in plain words, in the point that first uses it ("a **ray** is a
    half-line …"). The idea slide defines the everyday words; don't repeat it on the formal slides.
  - Points appear one per click and **figure step n appears with point n**: give each point the figure elements
    it talks about; a point that needs no new picture has none. Steps stay within 1..number of points.
- The hook and worked example must not reuse any item's numbers (rule 5). Solutions never mention option letters.
- Figures (visual concepts: the idea slide, **every formal section**, the worked example and each solution;
  others where a picture genuinely teaches): labels are plain Unicode (`A ∩ B`, `x ≤ 3`, `−2`). Element `step`s
  match the point or step they illustrate. Each step's figure adds only what that step's text talks about
  (AUTHORING.md rule 14): a count label appears at the step that computes it. Anything that turns uses a `turn`
  element (it rotates at 90° a second); mark an initial arm with a labelled `tone: "good"` segment. Solutions
  stay quick: no `turn` there (rule 19).

## 5. Build and check (repeat until clean)
From the repo root:
```
python verify/build_concepts.py <scratch>/cNN_content.py <scratch>/cNN_items.ts
node scripts/check-concept.ts <chapter> src/content/chapters/<chapter>/concepts/cNN-<slug>.ts
```
`check-concept.ts` runs the structural validator and the sympy verifier on your concept alone. It must print
`0 problem(s)`. Then read your `.ts` file once, top to bottom, as the student would: every number right, every
option distinct and plausible, every remediation matching its option.

## Reply
The file paths, the misconceptions (one line each), and anything you were unsure of (one line each). Short.
