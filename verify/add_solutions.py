"""Inserts figures and step-by-step solutions into a concept file's TS source.

build_concepts.py uses it to add `figure`, `worked.figure` and each item's
`solution` (data: dict(figure=..., worked_figure=..., solutions={"C11-Q1":
dict(steps=[...], figure=...)})). Every item needs a solution; figures are
optional. Phase B used it to backfill the existing concepts.
"""
import re

from ts_literal import figure_ts, solution_ts

WORKED_END = "\n    },\n    visualSpec:"
OPTIONS_END = "\n      ],\n"


def already_built(src: str) -> bool:
    """Solutions, the idea figure or the worked figure are in. A question's own figure (in items) doesn't count."""
    explanation = src.split("\n  items: [", 1)[0]
    # The idea figure sits at 4 spaces and the worked one at 6; a formal section's own figure (8) doesn't count.
    return "solution: {" in src or re.search(r"(?m)^ {4}figure: \{|^ {6}figure: \{", explanation) is not None


def add_to_concept(src: str, data: dict) -> str:
    if already_built(src):
        raise ValueError("this concept already has solutions or figures")

    items = [(m.group(1), m.end()) for m in re.finditer(r'(?m)^      id: "(C\d+-Q\d+)",$', src)]
    ids = {i for i, _ in items}
    sols = data["solutions"]
    if missing := sorted(ids - set(sols)):
        raise ValueError(f"no solution for {', '.join(missing)}")
    if unknown := sorted(set(sols) - ids):
        raise ValueError(f"no such item: {', '.join(unknown)}")

    # Items last to first, so earlier positions stay valid.
    for item_id, start in reversed(items):
        end = src.index(OPTIONS_END, start) + len(OPTIONS_END)
        src = src[:end] + solution_ts(sols[item_id], 6) + src[end:]

    assert src.count(WORKED_END) == 1, "can't find the end of the worked example"
    worked = figure_ts(data["worked_figure"], 6) if data.get("worked_figure") else ""
    idea = figure_ts(data["figure"], 4) if data.get("figure") else ""
    return src.replace(WORKED_END, "\n" + worked + "    },\n" + idea + "    visualSpec:")

