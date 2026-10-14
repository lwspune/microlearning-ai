"""Regenerates src/content/chapters/complex-numbers/index.ts from the concept files.

Usage: python verify/build_index.py
Every concepts/cNN-*.ts that exports `cNN` is imported and registered, in id order.
"""
import re
from pathlib import Path

ROOT = Path("src/content/chapters/complex-numbers")
files = sorted((ROOT / "concepts").glob("c[0-9][0-9]-*.ts"))
entries = []
for f in files:
    m = re.search(r"export const (c\d+): Concept", f.read_text(encoding="utf-8"))
    assert m, f"{f.name} doesn't export a concept"
    entries.append((m.group(1), f.stem))

imports = "\n".join(f'import {{ {var} }} from "./concepts/{stem}.ts";' for var, stem in entries)
names = ", ".join(var for var, _ in entries)
(ROOT / "index.ts").write_text(
    f'''import type {{ Chapter }} from "../../types.ts";
{imports}
import {{ graph }} from "./graph.ts";

export const complexNumbers: Chapter = {{
  slug: "complex-numbers",
  title: "Complex Numbers",
  graph,
  concepts: [{names}],
}};
''',
    encoding="utf-8",
    newline="\n",
)
print(f"registered {len(entries)} concepts")
