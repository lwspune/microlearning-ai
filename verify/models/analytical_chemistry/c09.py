"""C09 Equivalents and normality. Equivalent mass = molar mass / n-factor (an acid's replaceable H: H3PO3 is dibasic;
KMnO4 in acid takes 5 electrons; Na2CO3 to CO2 takes 2 H+). Normality = n-factor x molarity. End point: N1V1 = N2V2.
params["q"]:
  "h3po3": no inputs (molar mass 82). "kmno4": no inputs (158). "normality": inputs m (g H2SO4), V (mL).
  "titration": inputs M (mol/L H2SO4), V (mL acid), N (normality of NaOH). "na2co3": no inputs (106).
M1 counts every H; M2 gives the molar mass; M3 multiplies; M4 uses 3 (neutral medium); M5 uses 1 (alkaline medium);
M6 uses the oxidation state 7; M7 gives the molarity; M8 keeps mL; M9 divides by n; M10 takes molarity as normality;
M11 inverts the ratio; M12 forgets to divide by N2; M13 uses n = 1; M14 counts the O atoms; M15 counts every charge."""
from chemistry import molar_mass, sig

from ._mix import mixed_models

H3PO3, KMNO4, H2SO4, NA2CO3 = (molar_mass(f) for f in ("H3PO3", "KMnO4", "H2SO4", "Na2CO3"))

TABLE = {
    "h3po3": {"key": lambda v: sig(H3PO3 / 2), "C09-M1": lambda v: sig(H3PO3 / 3), "C09-M2": lambda v: sig(H3PO3),
              "C09-M3": lambda v: sig(H3PO3 * 2)},
    "kmno4": {"key": lambda v: sig(KMNO4 / 5), "C09-M4": lambda v: sig(KMNO4 / 3), "C09-M5": lambda v: sig(KMNO4),
              "C09-M6": lambda v: sig(KMNO4 / 7)},
    "normality": {"key": lambda v: sig(2 * v["m"] / H2SO4 / (v["V"] / 1000)), "C09-M7": lambda v: sig(v["m"] / H2SO4 / (v["V"] / 1000)),
                  "C09-M8": lambda v: sig(2 * v["m"] / H2SO4 / v["V"]), "C09-M9": lambda v: sig(v["m"] / H2SO4 / 2 / (v["V"] / 1000))},
    "titration": {"key": lambda v: sig(2 * v["M"] * v["V"] / v["N"]), "C09-M10": lambda v: sig(v["M"] * v["V"] / v["N"]),
                  "C09-M11": lambda v: sig(v["N"] * v["V"] / (2 * v["M"])), "C09-M12": lambda v: sig(2 * v["M"] * v["V"])},
    "na2co3": {"key": lambda v: sig(NA2CO3 / 2), "C09-M13": lambda v: sig(NA2CO3), "C09-M14": lambda v: sig(NA2CO3 / 3),
               "C09-M15": lambda v: sig(NA2CO3 / 4)},
}
MODELS = mixed_models("C09", TABLE, 15)
