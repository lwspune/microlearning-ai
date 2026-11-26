"""C05 Dalton's law of partial pressures: p_i = x_i P, and P = sum of the p_i. A gas collected over water: dry gas
pressure = total - aqueous tension.
params["q"]:
  "three_gases": inputs P (bar); 28 g N2, 8 g He, 40 g Ne (asks p of N2). "oxygen": inputs mO2, mNe, MNe, P.
  "define": named. "statement": named. "over_water": inputs P, a (mm Hg).
M1 uses the mass fraction; M2 shares the pressure equally; M3 gives the mole fraction; M4 gives the other gas's pressure;
M5 says vapour pressure; M6 says total pressure; M7 says critical pressure; M8 averages; M9 takes the largest; M10 picks
the heaviest gas; M11 adds the aqueous tension; M12 ignores it; M13 gives the aqueous tension."""
from chemistry import molar_mass, sig

from ._mix import mixed_models

N2, HE, NE, O2 = molar_mass("N2"), molar_mass("He"), molar_mass("Ne"), molar_mass("O2")


def _x3():
    n = [28 / N2, 8 / HE, 40 / NE]
    return n[0] / sum(n)


def _xo(v):
    a, b = v["mO2"] / O2, v["mNe"] / v["MNe"]
    return a / (a + b)


TABLE = {
    "three_gases": {"key": lambda v: sig(_x3() * v["P"]), "C05-M1": lambda v: sig(28 / (28 + 8 + 40) * v["P"]),
                    "C05-M2": lambda v: sig(v["P"] / 3), "C05-M3": lambda v: sig(_x3())},
    "oxygen": {"key": lambda v: sig(_xo(v) * v["P"]), "C05-M1": lambda v: sig(v["mO2"] / (v["mO2"] + v["mNe"]) * v["P"]),
               "C05-M2": lambda v: sig(v["P"] / 2), "C05-M4": lambda v: sig((1 - _xo(v)) * v["P"])},
    "define": {"key": "partial_pressure", "C05-M5": "vapour_pressure", "C05-M6": "total_pressure", "C05-M7": "critical_pressure"},
    "statement": {"key": "sum_of_partials", "C05-M8": "average", "C05-M9": "largest", "C05-M10": "heaviest"},
    "over_water": {"key": lambda v: sig(v["P"] - v["a"]), "C05-M11": lambda v: sig(v["P"] + v["a"]),
                   "C05-M12": lambda v: sig(v["P"]), "C05-M13": lambda v: sig(v["a"])},
}
MODELS = mixed_models("C05", TABLE, 13)
