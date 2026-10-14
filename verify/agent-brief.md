# Brief: one agent writes one concept (RUNBOOK 3, parallel batches)

Fill in `<scratchpad>`, `<chapter>`, `<batch>` and `C0N` before sending; add the concept's design
(hook, worked example, misconception IDs/mistakes/fallbacks, solution notes) in the agent's prompt.

Repo: `C:\Users\vilas\Downloads\MicroLearningAI` (Next.js micro-learning app for Indian exam students). **Do not edit any file in the repo.** Write only your output file in the scratchpad:
`<scratchpad>`.

## Read first (skim, don't over-read)
- `src/content/AUTHORING.md` — content rules (esp. 5, 9–15).
- `src/content/types.ts` — `Figure`, `FigureElement`, `Shape` (note `axes: "xy"`).
- One finished concept for tone and shape: `src/content/chapters/complex-numbers/concepts/c30-regions-areas.ts` (and c24 if you want a second).
- `verify/build_concepts.py` docstring — the CONCEPTS entry format you produce.
- `verify/lpp_figures.py` (xy-plane chapters) — figure helpers you MUST use for regions (halfPlane direction is derived there, never typed by hand): `figure(alt, xmax, ymax, elements, margin=None)`, `region(cons, nonneg=True, **extra)`, `line(s, **extra)` (accepts "a*x + b*y = c" or a constraint), `point((x, y), **extra)`, `label((x, y), text, **extra)`. Extra keys: `step`, `label`, `labelAt` (n/s/e/w/ne/nw/se/sw), `tone` (accent/muted/good/bad), `hollow`, `dashed`.
- `verify/models/linear_programming.py` — the answer models (you can import them to double-check numbers).
- Drafted items for your concept: `<scratchpad>/<batch>_items.ts` (search `id: "C0N-Q`). Items are FINAL: do not change stems, options or values. You write their solutions.
- Source notes (PYQ Vault): `C:\Users\vilas\Downloads\Question_Bank\src\app\notes\<exam>\<chapter>\_data\*.ts` (traps are useful).

## Output
A file `<scratchpad>/<batch>_c0N.py` (N = your concept number) that runs standalone:

```python
import sys
sys.path.insert(0, r"C:\Users\vilas\Downloads\MicroLearningAI\verify")
from lpp_figures import figure, region, line, point, label

CONCEPT = dict(
    id="C0N", file="c0N-<graph slug>", var="c0N",
    hook=(prompt, reveal),
    intuition=..., formal=..., visual=...,           # visual = visualSpec, one sentence for a future draggable visual
    worked=dict(prompt=..., steps=[...], answer=..., figure=...),
    misconceptions=[("C0N-M1", mistake, remediation, fallback), ...],   # fallback: ("concept", "C0x") | ("ext", "topic") | ("none",)
    engine_notes=[...],                                                  # optional
    figure=...,                                                          # idea slide
    solutions={"C0N-Q1": dict(steps=[...], figure=...), ...},           # EVERY item
)
```
Use raw strings (`r"..."`) for anything with LaTeX. No backticks, no `${` anywhere.

## Rules (quality bar)
- Text is KaTeX-aware: `$…$` inline, `**bold**`. Short sentences, Indian-exam-student friendly, no fluff. Match c30's density.
- `formal`: blank lines between slide-sized sections; bullet lists fine.
- Hook and worked example must NOT reuse any item's numbers/system (rule 5).
- Solutions: 2–4 steps, one move each, ending at the answer. Never refer to option letters. May state the answer.
- **Every solution gets a figure** (visual concept). Worked example and idea slide get figures. Element `step`s match the step they illustrate (1-based, ≤ number of steps); idea-slide steps are animation order.
- Figure labels: plain Unicode text, no LaTeX: `3x + 2y = 12`, `x + y ≤ 4`, `(4, 0)`, `−` for minus.
- Views: `figure(...)` gives a small negative margin so both axes draw; pick xmax/ymax a bit beyond the interesting points. Keep labels off axis numbers and each other (put line labels with a separate `label(...)` near the line, away from axes; points on an axis: label `n`/`e` away from the axis).
- Tone: the region/answer in accent (default); test points good/bad; rejected candidates `bad` + `hollow=True`; lines that don't bind `muted`/`dashed`.
- Every number you write must be right. Check each with arithmetic (or the models). Misconception IDs and fallbacks exactly as given below.

## Finish
Run `python <your file>` to prove it imports, then run this check and fix anything it reports:
```
python -c "import importlib.util,sys;s=importlib.util.spec_from_file_location('c',sys.argv[1]);m=importlib.util.module_from_spec(s);s.loader.exec_module(m);c=m.CONCEPT;print(sorted(c['solutions']))" <your file>
```
Reply with: the file path, and anything you were unsure about (one line each). Keep the reply short.
