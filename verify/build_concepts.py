"""Assembles concept files from authored content plus drafted items.

Usage: python verify/build_concepts.py <content.py> <items.ts>
  content.py defines CONCEPTS (see below); items.ts is draft_items.py output.
Writes src/content/chapters/complex-numbers/concepts/<file>.ts for each concept,
with status "draft". Review, then run the normal checks (npm test,
npm run content:verify) before registering the concept in index.ts.

Each CONCEPTS entry:
  dict(id="C01", file="c01-imaginary-unit", var="c01",
       hook=(prompt, reveal), intuition=..., formal=..., visual=...,
       worked=dict(prompt=..., steps=[...], answer=...),
       misconceptions=[(id, mistake, remediation, fallback)],   # fallback: ("concept", "C01") | ("ext", "topic") | ("none",)
       engine_notes=[...])                                         # optional
"""
import importlib.util
import re
import sys
from pathlib import Path

OUT = Path("src/content/chapters/complex-numbers/concepts")


def t(s: str) -> str:
    assert "`" not in s and "${" not in s, f"can't embed {s[:40]!r} in a template literal"
    return f"t`{s}`"


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
    return f"""import type {{ Concept }} from "../../../types.ts";

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


if __name__ == "__main__":
    spec = importlib.util.spec_from_file_location("content", sys.argv[1])
    content = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(content)
    items = items_by_concept(Path(sys.argv[2]).read_text(encoding="utf-8"))
    for c in content.CONCEPTS:
        assert c["id"] in items, f"no items for {c['id']}"
        path = OUT / f"{c['file']}.ts"
        path.write_text(build(c, items[c["id"]]), encoding="utf-8")
        print("wrote", path, f"({len(items[c['id']])} items)")
