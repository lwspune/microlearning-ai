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

    def test_tuples_print_as_plain_pairs(self):
        from sympy import Tuple, sqrt

        self.assertEqual(option_text(Tuple(1, sqrt(2)), None), r"$(1, \sqrt{2})$")

    def test_sets_and_matrices_use_their_latex(self):
        from sympy import FiniteSet, Matrix

        self.assertEqual(option_text(FiniteSet(1, 2), None), r"$\left\{1, 2\right\}$")
        self.assertEqual(option_text(Matrix([[1, 2]]), None), r"$\left[\begin{matrix}1 & 2\end{matrix}\right]$")

    def test_deg_writes_a_degree_sign(self):
        self.assertEqual(option_text(Rational(45, 2), "deg"), r"$\frac{45}{2}^\circ$")
        self.assertEqual(option_text(120, "deg"), r"$120^\circ$")

    def test_pct_writes_a_percent_sign(self):
        self.assertEqual(option_text(60, "pct"), r"$60\%$")

    def test_unit_writes_the_value_then_its_unit(self):
        from sympy import Float

        self.assertEqual(option_text(Float("4.9"), r"unit:m/s"), r"$4.9\ \mathrm{m/s}$")
        self.assertEqual(option_text(12, r"unit:kg\,m^2"), r"$12\ \mathrm{kg\,m^2}$")

    def test_unit_writes_powers_of_ten_with_a_times_sign(self):
        from sympy import Float

        self.assertEqual(option_text(Float("6.67e-11"), r"unit:N\,m^2/kg^2"), r"$6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$")

    def test_unit_writes_large_and_small_numbers_in_powers_of_ten(self):
        from sympy import Float, Integer

        self.assertEqual(option_text(Integer(7110000), "unit:J"), r"$7.11 \times 10^{6}\ \mathrm{J}$")
        self.assertEqual(option_text(Integer(568000), "unit:J"), r"$5.68 \times 10^{5}\ \mathrm{J}$")
        self.assertEqual(option_text(Float("0.000123"), "unit:m"), r"$1.23 \times 10^{-4}\ \mathrm{m}$")
        self.assertEqual(option_text(Integer(18000), "unit:J"), r"$18000\ \mathrm{J}$")

    def test_quadrant_is_unchanged(self):
        self.assertEqual(option_text(4, "quadrant"), "Quadrant IV")


class FourOptions(unittest.TestCase):
    def test_an_item_needs_four_models(self):
        import tempfile, textwrap, os
        from draft_items import draft

        spec = textwrap.dedent("""
            CHAPTER = "linear_programming"
            ITEMS = [dict(id="C01-Q1", stem="Where?", inputs={}, params={"line": "3*x + 2*y = 12", "ask": "x"},
                          fmt="point", models=["key", "C01-M1", "C01-M2"])]
        """)
        with tempfile.NamedTemporaryFile("w", suffix=".py", delete=False) as f:
            f.write(spec)
        try:
            with self.assertRaisesRegex(AssertionError, "4 options"):
                draft(f.name)
        finally:
            os.unlink(f.name)


class ItemFigure(unittest.TestCase):
    def test_a_question_figure_follows_the_stem(self):
        import tempfile, textwrap, os
        from draft_items import draft
        from ts_literal import figure_ts

        fig = {"alt": "A shaded region.", "axes": "xy", "view": {"x": [-1, 5], "y": [-1, 5]}, "elements": []}
        spec = textwrap.dedent(f"""
            CHAPTER = "linear_programming"
            ITEMS = [dict(id="C03-Q1", stem="Where?", inputs={{}},
                          params={{"cons": ["x + y >= 4", "x <= 5", "y <= 5"], "pts": ["3+I*(3)", "2+I*(4)", "5+I*(2)", "-1+I*(5)"]}},
                          models=["key", "C03-M1", "C03-M2", "C03-M3"], figure={fig!r})]
        """)
        with tempfile.NamedTemporaryFile("w", suffix=".py", delete=False) as f:
            f.write(spec)
        try:
            out = draft(f.name)
        finally:
            os.unlink(f.name)
        self.assertIn("      stem: t`Where?`,\n" + figure_ts(fig, 6) + "      verify:", out)


if __name__ == "__main__":
    unittest.main()
