"""Spec for the chemistry helpers models share.

Run: python -m unittest discover -s verify -p "test_*.py"
"""
import unittest

from sympy import Float, Integer, Rational

from chemistry import BOOK, MASS, molar_mass, sig


class Book(unittest.TestCase):
    def test_constants_are_the_values_the_books_print(self):
        self.assertEqual(BOOK["N_A"], Float("6.022e23"))
        self.assertEqual(BOOK["R"], Float("8.314"))
        self.assertEqual(BOOK["R_atm"], Float("0.0821"))
        self.assertEqual(BOOK["F"], Integer(96500))
        self.assertEqual(BOOK["V_m"], Float("22.4"))
        self.assertEqual(BOOK["nernst"], Float("0.0592"))
        self.assertEqual(BOOK["K_w"], Rational(1, 10**14))

    def test_sig_is_the_physics_rounding(self):
        self.assertEqual(sig(Rational(98, 3)), Float("32.7"))


class Masses(unittest.TestCase):
    def test_rounded_atomic_masses_the_books_use(self):
        self.assertEqual(MASS["H"], 1)
        self.assertEqual(MASS["C"], 12)
        self.assertEqual(MASS["O"], 16)
        self.assertEqual(MASS["Cl"], Rational(71, 2))
        self.assertEqual(MASS["Na"], 23)

    def test_molar_mass_reads_a_formula(self):
        self.assertEqual(molar_mass("H2O"), 18)
        self.assertEqual(molar_mass("H2SO4"), 98)
        self.assertEqual(molar_mass("NaCl"), Rational(117, 2))
        self.assertEqual(molar_mass("CH3COOH"), 60)
        self.assertEqual(molar_mass("Ca(OH)2"), 74)
        self.assertEqual(molar_mass("CuSO4.5H2O"), Rational(499, 2))
        self.assertEqual(molar_mass("CO(NH2)2"), 60)

    def test_an_unknown_element_fails_loudly(self):
        with self.assertRaises(KeyError):
            molar_mass("Xx2")


if __name__ == "__main__":
    unittest.main()
