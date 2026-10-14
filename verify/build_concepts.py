"""Assembles concept files from authored content plus drafted items.

Usage: python verify/build_concepts.py <content.py> <items.ts>
  content.py defines CHAPTER (the chapter slug, e.g. "linear-programming") and
  CONCEPTS (see below); items.ts is draft_items.py output.
Writes src/content/chapters/<CHAPTER>/concepts/<file>.ts for each concept,
with status "draft". Review, then run the normal checks (npm test,
npm run content:verify) before registering the concept in index.ts.

Each CONCEPTS entry:
  dict(id="C01", file="c01-imaginary-unit", var="c01",
       hook=(prompt, reveal), intuition=..., formal=..., visual=...,
       worked=dict(prompt=..., steps=[...], answer=...),
       misconceptions=[(id, mistake, remediation, fallback)],   # fallback: ("concept", "C01") | ("ext", "topic") | ("none",)
       engine_notes=[...],                                         # optional
       figure=..., solutions={"C01-Q1": dict(steps=[...], figure=...)})
  figure (idea slide), worked["figure"] and each solution's figure are
  optional; solutions, when given, must cover every item (AUTHORING.md 9-15).
"""
import importlib.util
import re
import sys
from pathlib import Path

from add_solutions import add_to_concept
from ts_literal import t

CHAPTERS = Path("src/content/chapters")


def out_dir(content) -> Path:
    """The concepts folder of the chapter the content names."""
    slug = getattr(content, "CHAPTER", "").replace("_", "-")  # draft_items specs say "linear_programming"
    assert slug, 'content.py must set CHAPTER, e.g. CHAPTER = "linear-programming"'
    assert (CHAPTERS / slug / "graph.ts").is_file(), f"no chapter {slug} (add its graph first)"
    return CHAPTERS / slug / "concepts"


def q(s: str) -> str:
    """A plain double-quoted string when there's no math, else a t`` literal."""
    return t(s) if ("$" in s or "\\" in s) else '"' + s.replace('"', '\\"') + '"'


def fallback(f) -> str:
    if f[0] == "concept":
        return f'{{ kind: "concept", id: "{f[1]}" }}'
    if f[0] == "ext":
        return f'{{ kind: "ext", topic: "{f[1]}" }}'
    return '{ kind: "none" }'


def items_by_concept(ts: str) -> dict[str, list[str]]:
    blocks = re.split(r"(?m)^    \{\n", ts)
    out: dict[str, list[str]] = {}
    for b in blocks:
        m = re.search(r'id: "(C\d+)-Q\d+"', b)
        if m:
            out.setdefault(m.group(1), []).append("    {\n" + b.rstrip())
    return out


def build(c: dict, items: list[str]) -> str:
    misc = "\n".join(
        f"""    {{
      id: "{mid}",
      mistake: {q(mistake)},
      remediation: {q(rem)},
      fallback: {fallback(fb)},
    }},"""
        for mid, mistake, rem, fb in c["misconceptions"]
    )
    steps = "\n".join(f"        {t(s)}," for s in c["worked"]["steps"])
    notes = ""
    if c.get("engine_notes"):
        notes = "  engineNotes: [\n" + "\n".join(f"    {q(n)}," for n in c["engine_notes"]) + "\n  ],\n"
    out = f"""import type {{ Concept }} from "../../../types.ts";

const t = String.raw;

export const {c["var"]}: Concept = {{
  id: "{c["id"]}",
  status: "draft",
  hook: {{
    prompt: {t(c["hook"][0])},
    reveal: {t(c["hook"][1])},
  }},
  explanation: {{
    intuition: {t(c["intuition"])},
    formal: {t(c["formal"])},
    worked: {{
      prompt: {t(c["worked"]["prompt"])},
      steps: [
{steps}
      ],
      answer: {t(c["worked"]["answer"])},
    }},
    visualSpec: {t(c["visual"])},
  }},
  misconceptions: [
{misc}
  ],
{notes}  items: [
{chr(10).join(items)}
  ],
}};
"""
    if not c.get("solutions"):
        assert not c.get("figure") and not c["worked"].get("figure"), "figures come with solutions"
        return out
    return add_to_concept(out, {
        "figure": c.get("figure"),
        "worked_figure": c["worked"].get("figure"),
        "solutions": c["solutions"],
    })


if __name__ == "__main__":
    spec = importlib.util.spec_from_file_location("content", sys.argv[1])
    content = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(content)
    out = out_dir(content)
    out.mkdir(exist_ok=True)
    items = items_by_concept(Path(sys.argv[2]).read_text(encoding="utf-8"))
    for c in content.CONCEPTS:
        assert c["id"] in items, f"no items for {c['id']}"
        path = out / f"{c['file']}.ts"
        path.write_text(build(c, items[c["id"]]), encoding="utf-8", newline="\n")
        print("wrote", path, f"({len(items[c['id']])} items)")
