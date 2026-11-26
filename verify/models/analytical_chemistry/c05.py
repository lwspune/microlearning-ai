"""C05 Empirical and molecular formulas: named answers, each worked out below from the percentages so a wrong key fails.
Divide each % by the atomic mass, divide by the smallest, scale to whole numbers; molecular = n x empirical,
n = molar mass / empirical formula mass.
M1 takes the mass percentages as the atom ratio; M2 divides by atomic numbers; M3 gives a molecular formula, not the
simplest ratio; M4 rounds 1.5 down to 1; M5 rounds 1.5 up to 2; M6 swaps the two elements; M7 forgets oxygen, found by
difference; M8 divides oxygen's percentage by 32 (O2); M9 stops at the empirical formula; M10 assumes the molecular
formula is twice the empirical one; M11 multiplies only carbon by n; M12 takes n from the carbon mass."""
from sympy import Rational, nsimplify

from ._mix import mixed_models


def ratio(parts, masses):
    moles = [Rational(str(p)) / m for p, m in zip(parts, masses)]
    small = min(moles)
    return [nsimplify(round(float(x / small) * 2) / 2) for x in moles]


assert ratio([79.87, 20.13], [12, 1]) == [1, 3]                         # CH3
assert ratio([75.8, 24.2], [75, 16]) == [1, Rational(3, 2)]             # A2B3
assert ratio([39.62, 20.13, 40.25], [63, 32, 16]) == [1, 1, 4]          # CuSO4
assert ratio([20, 6.7, 46.67, 26.63], [12, 1, 14, 16]) == [1, 4, 2, 1]  # CH4N2O, mass 60

TABLE = {
    "hydrocarbon": {"key": "f_ch3", "C05-M1": "f_c4h", "C05-M2": "f_c2h3", "C05-M3": "f_c2h6"},
    "ab": {"key": "f_a2b3", "C05-M4": "f_ab", "C05-M5": "f_ab2", "C05-M6": "f_a3b2"},
    "copper": {"key": "f_cuso4", "C05-M7": "f_cus", "C05-M8": "f_cuso2", "C05-M1": "f_cu2so2"},
    "urea": {"key": "f_ch4n2o", "C05-M10": "f_c2h8n4o2", "C05-M7": "f_ch4n2", "C05-M8": "f_c2h8n4o"},
    "glucose": {"key": "f_c6h12o6", "C05-M9": "f_ch2o", "C05-M11": "f_c6h2o", "C05-M12": "f_c15h30o15"},
}
MODELS = mixed_models("C05", TABLE, 12)
