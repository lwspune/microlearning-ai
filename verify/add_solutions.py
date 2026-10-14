"""Adds figures and step-by-step solutions to existing concept files (Phase B).

Usage: python verify/add_solutions.py <data.py>
  data.py defines SOLUTIONS = {"C11": dict(figure=..., worked_figure=...,
  solutions={"C11-Q1": dict(steps=[...], figure=...), ...})}; both figures are
  optional, a solution's figure too. Every item of the concept needs a solution.
Writes into src/content/chapters/complex-numbers/concepts/cNN-*.ts, leaving
everything else as it is, and removes the concept from backfill.ts. Then run
npm test and check the figures on /review (RUNBOOK 3, steps 5b and 7).
"""
import importlib.util
import re
import sys
from pathlib import Path

from ts_literal import figure_ts, solution_ts

CHAPTER = Path("src/content/chapters/complex-numbers")
WORKED_END = "\n    },\n    visualSpec:"
OPTIONS_END = "\n      ],\n"


def add_to_concept(src: str, data: dict) -> str:
    if "solution: {" in src or "figure: {" in src:
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


def drop_backfill(src: str, ids: list[str]) -> str:
    for cid in ids:
        line = f'  "{cid}",\n'
        if line not in src:
            raise ValueError(f"{cid} is not pending backfill")
        src = src.replace(line, "")
    return src


if __name__ == "__main__":
    spec = importlib.util.spec_from_file_location("data", sys.argv[1])
    data = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(data)
    for cid, d in data.SOLUTIONS.items():
        [path] = (CHAPTER / "concepts").glob(f"{cid.lower()}-*.ts")
        path.write_text(add_to_concept(path.read_text(encoding="utf-8"), d), encoding="utf-8", newline="\n")
        print("wrote", path)
    backfill = CHAPTER / "backfill.ts"
    backfill.write_text(drop_backfill(backfill.read_text(encoding="utf-8"), list(data.SOLUTIONS)), encoding="utf-8", newline="\n")
    print("backfill: removed", ", ".join(data.SOLUTIONS))
