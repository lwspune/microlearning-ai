"""Spec for writing figures and solutions into concept files (RUNBOOK 3, step 5b).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from add_solutions import add_to_concept
from build_concepts import build
from ts_literal import figure_ts, solution_ts

FIG = {
    "alt": "The point 3 − 2i, with a \"right then down\" path.",
    "view": {"x": [-1, 5], "y": [-3, 1.5]},
    "elements": [
        {"kind": "segment", "from": [0, 0], "to": [3, 0], "label": "3 right", "labelAt": "n", "step": 1},
        {"kind": "point", "at": [3.0, -2], "hollow": True},
        {"kind": "region", "within": [{"kind": "circle", "centre": [0, 0], "r": 2}]},
    ],
}

FIG_TS = """\
      figure: {
        alt: "The point 3 − 2i, with a \\"right then down\\" path.",
        view: { x: [-1, 5], y: [-3, 1.5] },
        elements: [
          { kind: "segment", from: [0, 0], to: [3, 0], label: "3 right", labelAt: "n", step: 1 },
          { kind: "point", at: [3, -2], hollow: true },
          { kind: "region", within: [{ kind: "circle", centre: [0, 0], r: 2 }] },
        ],
      },
"""

# The shape of a concept file before solutions are added (trimmed C11).
CONCEPT = """\
import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c99: Concept = {
  id: "C99",
  status: "approved",
  explanation: {
    intuition: t`Idea.`,
    worked: {
      prompt: t`Find it.`,
      steps: [
        t`One.`,
        t`Two.`,
      ],
      answer: t`$13$`,
    },
    visualSpec: t`Drag it.`,
  },
  items: [
    {
      id: "C99-Q1",
      stem: t`First?`,
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
      ],
    },
    {
      id: "C99-Q2",
      stem: t`Second?`,
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
      ],
    },
  ],
};
"""


class Literals(unittest.TestCase):
    def test_figure_matches_the_pilot_format(self):
        self.assertEqual(figure_ts(FIG, 6), FIG_TS)

    def test_an_xy_figure_says_so_after_its_alt_text(self):
        out = figure_ts({**FIG, "axes": "xy"}, 6)
        self.assertEqual(out, FIG_TS.replace('path.",\n', 'path.",\n        axes: "xy",\n', 1))

    def test_solution_steps_are_template_literals(self):
        self.assertEqual(
            solution_ts({"steps": [r"Subtract: $\sqrt{4}$.", "So $2$."]}, 6),
            "      solution: {\n"
            "        steps: [\n"
            "          t`Subtract: $\\sqrt{4}$.`,\n"
            "          t`So $2$.`,\n"
            "        ],\n"
            "      },\n",
        )

    def test_solution_with_a_figure_nests_it(self):
        out = solution_ts({"steps": ["a", "b"], "figure": FIG}, 6)
        self.assertIn("\n" + figure_ts(FIG, 8), out)
        self.assertTrue(out.endswith("        },\n      },\n"))

    def test_a_backtick_in_a_step_is_refused(self):
        with self.assertRaises(AssertionError):
            solution_ts({"steps": ["a `b`", "c"]}, 6)


class AddToConcept(unittest.TestCase):
    DATA = {
        "figure": FIG,
        "worked_figure": FIG,
        "solutions": {
            "C99-Q1": {"steps": ["One.", "So $1$."]},
            "C99-Q2": {"steps": ["Two.", "So $2$."], "figure": FIG},
        },
    }

    def test_inserts_everything_in_place(self):
        out = add_to_concept(CONCEPT, self.DATA)
        self.assertEqual(out.count("figure: {"), 3)
        self.assertEqual(out.count("solution: {"), 2)
        self.assertIn("      answer: t`$13$`,\n" + figure_ts(FIG, 6) + "    },\n", out)
        self.assertIn("    },\n" + figure_ts(FIG, 4) + "    visualSpec:", out)
        q1 = '        { key: "A", text: t`$1$`, correct: true, value: "1" },\n      ],\n'
        self.assertIn(q1 + solution_ts(self.DATA["solutions"]["C99-Q1"], 6) + "    },\n", out)
        q2 = '        { key: "A", text: t`$2$`, correct: true, value: "2" },\n      ],\n'
        self.assertIn(q2 + solution_ts(self.DATA["solutions"]["C99-Q2"], 6) + "    },\n", out)

    def test_figures_are_optional(self):
        out = add_to_concept(CONCEPT, {"solutions": self.DATA["solutions"]})
        self.assertNotIn("figure:", out.split("items:")[0])

    def test_every_item_needs_a_solution(self):
        with self.assertRaisesRegex(ValueError, "C99-Q2"):
            add_to_concept(CONCEPT, {"solutions": {"C99-Q1": {"steps": ["a", "b"]}}})

    def test_unknown_item_is_refused(self):
        sols = dict(self.DATA["solutions"], **{"C99-Q7": {"steps": ["a", "b"]}})
        with self.assertRaisesRegex(ValueError, "C99-Q7"):
            add_to_concept(CONCEPT, {"solutions": sols})

    def test_running_twice_is_refused(self):
        once = add_to_concept(CONCEPT, self.DATA)
        with self.assertRaisesRegex(ValueError, "already"):
            add_to_concept(once, self.DATA)


class BuildConcepts(unittest.TestCase):
    BASE = dict(
        id="C99", file="c99-x", var="c99",
        hook=("Q?", "A."), intuition="I.", formal="F.", visual="V.",
        worked=dict(prompt="P.", steps=["s1", "s2"], answer="Ans."),
        misconceptions=[("C99-M1", "m", "r", ("none",))],
    )
    ITEMS = [
        "    {\n      id: \"C99-Q1\",\n      options: [\n"
        '        { key: "A", text: t`$1$`, correct: true, value: "1" },\n      ],\n    },',
    ]

    def test_emits_figures_and_solutions_when_given(self):
        c = dict(self.BASE, figure=FIG, solutions={"C99-Q1": {"steps": ["a", "b"]}})
        c["worked"] = dict(c["worked"], figure=FIG)
        out = build(c, self.ITEMS)
        self.assertEqual((out.count("figure: {"), out.count("solution: {")), (2, 1))
        self.assertEqual(out, add_to_concept(build(self.BASE, self.ITEMS), {
            "figure": FIG, "worked_figure": FIG, "solutions": c["solutions"],
        }))

    def test_without_them_the_output_is_unchanged(self):
        self.assertNotIn("solution:", build(self.BASE, self.ITEMS))


if __name__ == "__main__":
    unittest.main()
