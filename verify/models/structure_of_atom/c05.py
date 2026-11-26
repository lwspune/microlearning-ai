"""C05 Bohr's model of the hydrogen atom (book values): r_n = 52.9 n^2 / Z pm; E_n = -2.18e-18 Z^2 / n^2 J; for hydrogen
wavenumber = 109677 (1/n1^2 - 1/n2^2) cm^-1. Shells crowd together further out, so energy gaps decrease.
params["q"]:
  "radius": inputs n, Z. "energy": inputs n, Z. "wavelength": inputs n1, n2 (nm out). "gap": named. "fails": named.
M1 multiplies by Z; M2 divides by Z^2; M3 ignores Z; M4 uses Z, not Z^2; M5 ignores Z; M6 drops the minus sign; M7
leaves the n's unsquared; M8 adds the terms; M9 drops to n = 1; M10 thinks gaps grow outward; M11 thinks gaps are equal;
M12 thinks they stay fixed at zero; M13 thinks it fails for hydrogen; M14 thinks it cannot explain stability; M15 thinks
it fails to give orbit radii."""
from sympy import Rational

from chemistry import sig

from ._mix import mixed_models

A0, E1, RH = Rational(529, 10), Rational(-218, 100) * 10 ** -18, 109677


def _lam_nm(wn_cm):
    return 1 / wn_cm * 10 ** 7


TABLE = {
    "radius": {"key": lambda v: sig(A0 * v["n"] ** 2 / v["Z"], 4), "C05-M1": lambda v: sig(A0 * v["n"] ** 2 * v["Z"], 4),
               "C05-M2": lambda v: sig(A0 * v["n"] ** 2 / v["Z"] ** 2, 4), "C05-M3": lambda v: sig(A0 * v["n"] ** 2, 4)},
    "energy": {"key": lambda v: sig(E1 * v["Z"] ** 2 / v["n"] ** 2), "C05-M4": lambda v: sig(E1 * v["Z"] / v["n"] ** 2),
               "C05-M5": lambda v: sig(E1 / v["n"] ** 2), "C05-M6": lambda v: sig(-E1 * v["Z"] ** 2 / v["n"] ** 2)},
    "wavelength": {"key": lambda v: sig(_lam_nm(RH * (Rational(1, v["n1"] ** 2) - Rational(1, v["n2"] ** 2)))),
                   "C05-M7": lambda v: sig(_lam_nm(RH * (Rational(1, v["n1"]) - Rational(1, v["n2"])))),
                   "C05-M8": lambda v: sig(_lam_nm(RH * (Rational(1, v["n1"] ** 2) + Rational(1, v["n2"] ** 2)))),
                   "C05-M9": lambda v: sig(_lam_nm(RH * (1 - Rational(1, v["n2"] ** 2))))},
    "gap": {"key": "decreasing", "C05-M10": "increasing", "C05-M11": "equal", "C05-M12": "static"},
    "fails": {"key": "many_electron", "C05-M13": "hydrogen", "C05-M14": "stability", "C05-M15": "radii"},
}
MODELS = mixed_models("C05", TABLE, 15)
