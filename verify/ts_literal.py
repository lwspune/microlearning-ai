"""Writes figures and solutions as TypeScript literals, in the concept-file style.

Figures are data (see `Figure` in src/content/types.ts): Python dicts and lists
with the same keys. Each element goes on one line; text steps become t``
literals so LaTeX backslashes survive.
"""
import json


def t(s: str) -> str:
    assert "`" not in s and "${" not in s, f"can't embed {s[:40]!r} in a template literal"
    return f"t`{s}`"


def lit(v) -> str:
    """An inline literal: `{ kind: "point", at: [3, -2] }`."""
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        assert v == v and abs(v) != float("inf"), f"not a finite number: {v}"
        return str(int(v)) if float(v).is_integer() else repr(float(v))
    if isinstance(v, str):
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, (list, tuple)):
        return "[" + ", ".join(lit(x) for x in v) + "]"
    if isinstance(v, dict):
        return "{ " + ", ".join(f"{k}: {lit(x)}" for k, x in v.items()) + " }"
    raise TypeError(f"can't write {v!r} as a literal")


def figure_ts(fig: dict, indent: int) -> str:
    """`figure: {...},` with its key at `indent` spaces."""
    p = " " * indent
    assert set(fig) == {"alt", "view", "elements"}, f"figure keys: {sorted(fig)}"
    elements = "".join(f"{p}    {lit(e)},\n" for e in fig["elements"])
    return (
        f"{p}figure: {{\n"
        f"{p}  alt: {lit(fig['alt'])},\n"
        f"{p}  view: {lit(fig['view'])},\n"
        f"{p}  elements: [\n{elements}{p}  ],\n"
        f"{p}}},\n"
    )


def solution_ts(sol: dict, indent: int) -> str:
    """`solution: { steps: [...], figure? },` with its key at `indent` spaces."""
    p = " " * indent
    assert set(sol) <= {"steps", "figure"}, f"solution keys: {sorted(sol)}"
    steps = "".join(f"{p}    {t(s)},\n" for s in sol["steps"])
    fig = figure_ts(sol["figure"], indent + 2) if sol.get("figure") else ""
    return f"{p}solution: {{\n{p}  steps: [\n{steps}{p}  ],\n{fig}{p}}},\n"
