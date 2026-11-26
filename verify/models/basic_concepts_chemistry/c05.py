"""C05 Atomic, molecular and formula mass. 1 u = 1/12 of the mass of a carbon-12 atom; average atomic mass weights each
isotope's mass by its abundance; molecular and formula masses add atomic masses (C 12, H 1, O 16, N 14, Cu 63.5).
params["q"]:
  "u": named. "boron": inputs m1, a1, m2, a2 (masses in u, abundances in %). "acetic": CH3COOH (no inputs).
  "cu_nitrate": Cu(NO3)2 (no inputs). "h18": inputs n (atoms), m (u per atom).
M1 takes 1 u as one hydrogen atom; M2 uses the old oxygen scale; M3 confuses 1 u with a mole of carbon; M4 averages
without weights; M5 swaps the abundances; M6 forgets to divide by 100; M7 counts each element once; M8 uses atomic
numbers; M9 drops the H of COOH; M10 ignores the 2 outside the bracket; M11 applies the 2 to N only; M12 treats NO3 as
NO; M13 forgets to multiply; M14 multiplies by Avogadro's number; M15 divides instead of multiplying."""
from chemistry import BOOK, MASS, molar_mass, sig

from ._mix import mixed_models

TABLE = {
    "u": {"key": "twelfth_c12", "C05-M1": "one_h_atom", "C05-M2": "sixteenth_o", "C05-M3": "mole_carbon"},
    "boron": {"key": lambda v: sig((v["m1"] * v["a1"] + v["m2"] * v["a2"]) / 100),
              "C05-M4": lambda v: sig((v["m1"] + v["m2"]) / 2),
              "C05-M5": lambda v: sig((v["m1"] * v["a2"] + v["m2"] * v["a1"]) / 100),
              "C05-M6": lambda v: sig(v["m1"] * v["a1"] + v["m2"] * v["a2"])},
    "acetic": {"key": lambda v: sig(molar_mass("C2H4O2")), "C05-M7": lambda v: sig(MASS["C"] + MASS["H"] + MASS["O"]),
               "C05-M8": lambda v: sig(2 * 6 + 4 * 1 + 2 * 8), "C05-M9": lambda v: sig(molar_mass("C2H3O2"))},
    "cu_nitrate": {"key": lambda v: sig(molar_mass("Cu(NO3)2"), 4), "C05-M10": lambda v: sig(molar_mass("CuNO3"), 4),
                   "C05-M11": lambda v: sig(molar_mass("CuN2O3"), 4), "C05-M12": lambda v: sig(molar_mass("Cu(NO)2"), 4)},
    "h18": {"key": lambda v: sig(v["n"] * v["m"], 5), "C05-M13": lambda v: sig(v["m"], 5),
            "C05-M14": lambda v: sig(v["n"] * v["m"] * BOOK["N_A"]), "C05-M15": lambda v: sig(v["m"] / v["n"])},
}
MODELS = mixed_models("C05", TABLE, 15)
