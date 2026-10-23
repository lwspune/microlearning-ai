"""Helpers the physics models share.

Options compare exactly (verify_content._same_value), so a physics model returns its answer already rounded:
`sig(x)` is the number an option shows, and key, distractors and verifier all see that same value.
"""
from sympy import Float, Integer, N

# The constants as the Std XI and XII books print them; add one here, from the book, when a chapter first needs it.
BOOK = {
    "g": Float("9.8"),  # m/s^2, unless a question states 10
    "h": Float("6.63e-34"),  # J s
    "c": Integer(3) * 10**8,  # m/s
    "e": Float("1.6e-19"),  # C
    "m_e": Float("9.1e-31"),  # kg
    "R": Float("8.314"),  # J/(mol K)
    "atm": Float("1.013e5"),  # N/m^2, one atmosphere
    "k_B": Float("1.38e-23"),  # J/K, Boltzmann's constant
    "sigma": Float("5.67e-8"),  # W/(m^2 K^4), Stefan's constant
    "b_wien": Float("2.897e-3"),  # m K, Wien's constant
    "u": Float("1.66e-27"),  # kg, atomic mass unit
    "N_A": Float("6.02e23"),  # per mol, Avogadro's number
}


def sig(x, n=3):
    """x to n significant figures: an Integer when that is whole (so it prints 1410, not 1410.0), else a Float."""
    f = float(f"{float(N(x)):.{n}g}")
    return Integer(int(f)) if f.is_integer() else Float(repr(f))
