"""Registers a chapter's concept files in its index.ts.

Usage: python verify/build_index.py <chapter-slug>
Every concepts/cNN-*.ts that exports `cNN` is imported and listed, in id order.
Only the concept imports and the `concepts: [...]` list change; the chapter's
own fields (title, group, subject, ...) are kept as written.
"""
import re
import sys
from pathlib import Path

CONCEPT_IMPORT = re.compile(r'(?m)^import \{ c\d+ \} from "\./concepts/[^"]+";\n')
GRAPH_IMPORT = 'import { graph } from "./graph.ts";\n'


def register(index_ts: str, entries: list[tuple[str, str]]) -> str:
    """`index_ts` with its concept imports and list replaced by `entries` ((var, file stem) pairs)."""
    out = CONCEPT_IMPORT.sub("", index_ts)
    assert out.count(GRAPH_IMPORT) == 1, "index.ts must import the graph"
    imports = "".join(f'import {{ {var} }} from "./concepts/{stem}.ts";\n' for var, stem in entries)
    out = out.replace(GRAPH_IMPORT, imports + GRAPH_IMPORT)
    out, n = re.subn(r"(?m)^  concepts: \[[^\]]*\],$", f"  concepts: [{', '.join(v for v, _ in entries)}],", out)
    assert n == 1, "index.ts must have one `concepts: [...]` line"
    return out


if __name__ == "__main__":
    assert len(sys.argv) == 2, "usage: python verify/build_index.py <chapter-slug>"
    root = Path("src/content/chapters") / sys.argv[1]
    entries = []
    for f in sorted((root / "concepts").glob("c[0-9][0-9]-*.ts")):
        m = re.search(r"export const (c\d+): Concept", f.read_text(encoding="utf-8"))
        assert m, f"{f.name} doesn't export a concept"
        entries.append((m.group(1), f.stem))
    index = root / "index.ts"
    index.write_text(register(index.read_text(encoding="utf-8"), entries), encoding="utf-8", newline="\n")
    print(f"registered {len(entries)} concepts")
