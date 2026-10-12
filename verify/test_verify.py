"""Spec for the content verifier (AUTHORING.md rules 1-3).

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import copy
import unittest

from verify_content import verify_chapter


def opt(key, value, correct=False, mid=None):
    return {"key": key, "value": value, "correct": correct, "misconceptionId": mid}


# A C06 division item that is right in every respect: (3+2i)/(1-i).
GOOD_VALUE_ITEM = {
    "id": "C06-Q1",
    "verify": {"kind": "value", "inputs": {"a": "3", "b": "2", "c": "1", "d": "-1"}, "params": {}, "ask": "z"},
    "options": [
        opt("A", "(1+5*I)/2", correct=True),
        opt("B", "3-2*I", mid="C06-M1"),
        opt("C", "1+5*I", mid="C06-M2"),
        opt("D", "(5+5*I)/2", mid="C06-M4"),
    ],
}

# C25: |z-1| = |z+1| as a locus item.
GOOD_LOCUS_ITEM = {
    "id": "C25-Q1",
    "verify": {"kind": "locus", "inputs": {"a": "1", "b": "-1"}, "params": {"flip": ["b"]}, "ask": None},
    "options": [
        opt("A", "x", correct=True),
        opt("B", "y", mid="C25-M3"),
        opt("C", "x**2+y**2-1", mid="C25-M1"),
        opt("D", "0", mid="C25-M2"),
    ],
}

# C25: which point lies on |z+4| = |z-2i| (the fixed version of C25-Q5).
GOOD_POINT_ITEM = {
    "id": "C25-Q5",
    "verify": {"kind": "point", "inputs": {"a": "-4", "b": "2*I"}, "params": {"flip": ["a"]}, "ask": None},
    "options": [
        opt("A", "-4+5*I", correct=True),
        opt("B", "1-I", mid="C25-M2"),
        opt("C", "2+3*I", mid="C25-M3"),
        opt("D", "0", mid="C25-M1"),
    ],
}


def chapter(*items_by_concept):
    return {
        "chapter": "complex-numbers",
        "concepts": [{"id": cid, "items": items} for cid, items in items_by_concept],
    }


def run(*items_by_concept):
    return verify_chapter(chapter(*items_by_concept))


class GoodContentPasses(unittest.TestCase):
    def test_value_locus_and_point_items_pass(self):
        errors = run(("C06", [GOOD_VALUE_ITEM]), ("C25", [GOOD_LOCUS_ITEM, GOOD_POINT_ITEM]))
        self.assertEqual(errors, [])

    def test_ask_projects_the_model_output(self):
        # Re((2+3i)/(3-4i)) = -6/25
        item = {
            "id": "C06-Q4",
            "verify": {"kind": "value", "inputs": {"a": "2", "b": "3", "c": "3", "d": "-4"}, "params": {}, "ask": "re(z)"},
            "options": [
                opt("A", "-6/25", correct=True),
                opt("B", "18/25", mid="C06-M4"),
                opt("C", "6/7", mid="C06-M3"),
                opt("D", "2/3", mid="C06-M1"),
            ],
        }
        self.assertEqual(run(("C06", [item])), [])


class Rule1KeyIsRederived(unittest.TestCase):
    def test_wrong_key_is_flagged(self):
        item = copy.deepcopy(GOOD_VALUE_ITEM)
        item["options"][0]["value"] = "(1-5*I)/2"
        errors = run(("C06", [item]))
        self.assertTrue(any("C06-Q1" in e and "key" in e for e in errors), errors)


class Rule2DistractorMatchesItsMisconception(unittest.TestCase):
    def test_distractor_not_produced_by_its_tag_is_flagged(self):
        item = copy.deepcopy(GOOD_VALUE_ITEM)
        item["options"][1]["misconceptionId"] = "C06-M3"  # 3-2i is M1's output, not M3's
        errors = run(("C06", [item]))
        self.assertTrue(any("C06-Q1" in e and "C06-M3" in e for e in errors), errors)

    def test_unknown_misconception_model_is_flagged(self):
        item = copy.deepcopy(GOOD_VALUE_ITEM)
        item["options"][1]["misconceptionId"] = "C06-M9"
        errors = run(("C06", [item]))
        self.assertTrue(any("C06-M9" in e and "no model" in e for e in errors), errors)

    def test_untagged_distractor_is_flagged(self):
        item = copy.deepcopy(GOOD_VALUE_ITEM)
        item["options"][1]["misconceptionId"] = None
        errors = run(("C06", [item]))
        self.assertTrue(any("C06-Q1" in e and "untagged" in e for e in errors), errors)

    def test_locus_compared_up_to_scale(self):
        item = copy.deepcopy(GOOD_LOCUS_ITEM)
        item["options"][0]["value"] = "-4*x"  # same line as x = 0
        self.assertEqual(run(("C25", [item])), [])


class Rule3EachOptionHasExactlyOneModel(unittest.TestCase):
    def test_duplicate_option_values_are_flagged(self):
        item = copy.deepcopy(GOOD_LOCUS_ITEM)
        item["options"][1]["value"] = "2*x"  # proportional to the key line
        errors = run(("C25", [item]))
        self.assertTrue(any("C25-Q1" in e and "same" in e for e in errors), errors)

    def test_key_point_also_on_a_distractor_locus_is_flagged(self):
        # The original M0 defect: -1-i is on the bisector AND on the M1 circle.
        item = copy.deepcopy(GOOD_POINT_ITEM)
        item["options"][0]["value"] = "-1-I"
        errors = run(("C25", [item]))
        self.assertTrue(any("C25-Q5" in e and "C25-M1" in e for e in errors), errors)

    def test_exactly_one_correct_option(self):
        item = copy.deepcopy(GOOD_VALUE_ITEM)
        item["options"][1]["correct"] = True
        errors = run(("C06", [item]))
        self.assertTrue(any("C06-Q1" in e and "exactly one correct" in e for e in errors), errors)


class ExactAngles(unittest.TestCase):
    def test_angles_are_not_equal_mod_2pi(self):
        # -pi and pi are the same direction but different answers (C14-M2).
        item = {
            "id": "C14-Q4",
            "verify": {"kind": "value", "inputs": {"x": "-5", "y": "0"}, "params": {"range": "principal"}, "ask": "z"},
            "options": [
                opt("A", "-pi", correct=True),
                opt("B", "0", mid="C14-M1"),
                opt("C", "pi", mid="C14-M2"),
                opt("D", "-pi/2", mid="C14-M3"),
            ],
        }
        errors = run(("C14", [item]))
        self.assertTrue(any("C14-Q4" in e and "key" in e for e in errors), errors)


if __name__ == "__main__":
    unittest.main()
