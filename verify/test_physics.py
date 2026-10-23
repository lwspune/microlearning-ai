"""Spec for the physics helpers models share.

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from sympy import Float, Integer, pi, sqrt, sympify

from physics import BOOK, sig
from verify_content import _same_value


class Sig(unittest.TestCase):
    def test_rounds_to_three_significant_figures_by_default(self):
        self.assertEqual(sig(2 * pi), Float("6.28"))
        self.assertEqual(sig(sqrt(2) * 1000), Integer(1410))

    def test_takes_the_number_of_figures(self):
        self.assertEqual(sig(2 * pi, 2), Float("6.3"))

    def test_keeps_powers_of_ten(self):
        self.assertEqual(sig(Float("6.6743e-11")), Float("6.67e-11"))

    def test_a_whole_answer_stays_whole(self):
        self.assertEqual(sig(Integer(12)), Integer(12))
        self.assertEqual(sig(Float("19.6") * 5), Integer(98))

    def test_survives_the_verifier_round_trip(self):
        # draft_items stores str(value); verify_content re-reads it and compares exactly with the model's output.
        for v in [sig(2 * pi), sig(Float("6.6743e-11")), sig(Float("9.8") / 3), sig(Float("0.000123456"))]:
            self.assertTrue(_same_value(v, sympify(str(v))), v)


class Book(unittest.TestCase):
    def test_constants_are_the_values_the_book_prints(self):
        self.assertEqual(BOOK["g"], Float("9.8"))
        self.assertEqual(BOOK["h"], Float("6.63e-34"))
        self.assertEqual(BOOK["c"], Integer(3) * 10**8)
        self.assertEqual(BOOK["e"], Float("1.6e-19"))
        self.assertEqual(BOOK["m_e"], Float("9.1e-31"))
        self.assertEqual(BOOK["R"], Float("8.314"))


if __name__ == "__main__":
    unittest.main()
