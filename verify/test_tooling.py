"""Spec for the chapter-aware build tools (RUNBOOK 3, steps 5 and 6).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import types
import unittest
from pathlib import Path

from build_concepts import out_dir
from build_index import register

INDEX = """\
import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-old.ts";
import { graph } from "./graph.ts";

export const linearProgramming: Chapter = {
  slug: "linear-programming",
  title: "Linear Programming",
  group: "school",
  subject: "maths",
  graph,
  concepts: [c01],
};
"""


class Register(unittest.TestCase):
    ENTRIES = [("c01", "c01-line"), ("c02", "c02-half-plane")]

    def test_replaces_the_imports_and_the_list(self):
        out = register(INDEX, self.ENTRIES)
        self.assertIn('import { c01 } from "./concepts/c01-line.ts";\nimport { c02 } from "./concepts/c02-half-plane.ts";\nimport { graph }', out)
        self.assertNotIn("c01-old", out)
        self.assertIn("  concepts: [c01, c02],\n", out)

    def test_keeps_the_chapter_fields(self):
        out = register(INDEX, self.ENTRIES)
        for line in ['  group: "school",', '  subject: "maths",', "export const linearProgramming: Chapter = {"]:
            self.assertIn(line, out)

    def test_works_from_an_empty_chapter(self):
        empty = INDEX.replace('import { c01 } from "./concepts/c01-old.ts";\n', "").replace("[c01]", "[]")
        self.assertEqual(register(empty, self.ENTRIES), register(INDEX, self.ENTRIES))

    def test_running_twice_changes_nothing(self):
        once = register(INDEX, self.ENTRIES)
        self.assertEqual(register(once, self.ENTRIES), once)


class OutDir(unittest.TestCase):
    def test_writes_into_the_named_chapter(self):
        content = types.SimpleNamespace(CHAPTER="linear-programming")
        self.assertEqual(out_dir(content), Path("src/content/chapters/linear-programming/concepts"))

    def test_takes_the_models_spelling_too(self):
        content = types.SimpleNamespace(CHAPTER="linear_programming")
        self.assertEqual(out_dir(content), Path("src/content/chapters/linear-programming/concepts"))

    def test_content_must_name_its_chapter(self):
        with self.assertRaises(AssertionError):
            out_dir(types.SimpleNamespace())

    def test_an_unknown_chapter_is_refused(self):
        with self.assertRaises(AssertionError):
            out_dir(types.SimpleNamespace(CHAPTER="no-such-chapter"))


if __name__ == "__main__":
    unittest.main()
