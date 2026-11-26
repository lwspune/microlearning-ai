"""C02 Assigning oxidation numbers: named answers, each checked below by solving the charge balance. Elements are 0;
O is -2 (peroxide -1, superoxide -1/2); H is +1; the numbers add up to the species' charge. In CaOCl2 the Cl on Ca is
-1 and the Cl on O is +1.
M1 counts one O atom; M2 flips the sign; M3 leaves out the H atoms; M4 always uses -2 for O; M5 uses the peroxide value;
M6 gives 0; M7 leaves out K; M8 takes K as +2; M9 ignores the ion's charge; M10 counts three O atoms; M11 adds the
charge the wrong way; M12 averages the two Cl atoms; M13 swaps them; M14 makes every Cl -1."""
from sympy import Rational, solve, symbols

from ._mix import mixed_models

x = symbols("x")


def on(total_charge, known):
    """Solve x + sum(known) = total_charge."""
    return solve(x + sum(known) - total_charge, x)[0]


assert on(0, [2 * 1, 3 * -2]) == 4                 # C in H2CO3
assert on(0, [1, 4 * -2]) == 7                     # Mn in KMnO4
assert on(-2, [4 * -2]) == 6                       # S in SO4 2-
assert solve(2 * x + 1, x)[0] == Rational(-1, 2)     # O in superoxide, O2-: 2x = -1

TABLE = {
    "carbonic": {"key": "plus_4", "C02-M1": "plus_2", "C02-M2": "minus_4", "C02-M3": "plus_6"},
    "superoxide": {"key": "minus_half", "C02-M4": "minus_2", "C02-M5": "minus_1", "C02-M6": "zero"},
    "permanganate": {"key": "plus_7", "C02-M7": "plus_8", "C02-M2": "minus_7", "C02-M8": "plus_6"},
    "sulfate": {"key": "plus_6", "C02-M9": "plus_8", "C02-M10": "plus_4", "C02-M11": "plus_10"},
    "bleaching": {"key": "a_minus1_b_plus1", "C02-M12": "both_zero", "C02-M13": "a_plus1_b_minus1", "C02-M14": "both_minus1"},
}
MODELS = mixed_models("C02", TABLE, 14)
