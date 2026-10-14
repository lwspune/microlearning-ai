"""Spec for option text formats in draft_items.py.

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from sympy import I, Rational

from draft_items import option_text


class OptionText(unittest.TestCase):
    def test_default_is_the_latex_of_the_value(self):
        self.assertEqual(option_text(Rational(1, 5), None), r"$\frac{1}{5}$")

    def test_point_writes_the_pair(self):
        self.assertEqual(option_text(4 + 0 * I, "point"), "$(4, 0)$")
        self.assertEqual(option_text(Rational(5, 2) * I - 1, "point"), r"$(-1, \frac{5}{2})$")

    def test_intercepts_writes_both_axis_points(self):
        self.assertEqual(option_text(15 + 20 * I, "intercepts"), "$(15, 0)$ and $(0, 20)$")

    def test_quadrant_is_unchanged(self):
        self.assertEqual(option_text(4, "quadrant"), "Quadrant IV")


if __name__ == "__main__":
    unittest.main()
