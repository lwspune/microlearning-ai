"""C04 Percentage composition. Mass % of a part = its mass in one mole / molar mass x 100, water of crystallisation
included. Molar mass from a percentage: M = (atoms x atomic mass) / (fraction).
params["q"]:
  "water_cuso4": % water in CuSO4.5H2O (Cu 63.5). "fe_green": % Fe in FeSO4.7H2O. "n_urea": % N in CO(NH2)2.
  "haemoglobin": inputs pct (% Fe), n (Fe atoms per molecule). "cr_dichromate": % Cr in K2Cr2O7.
M1 counts one water; M2 divides by the anhydrous salt; M3 counts only the O of water; M4 uses the atomic number; M5
counts the waters as one; M6 counts one atom of the element; M7 counts atoms instead of masses; M8 ignores the number of
atoms; M9 forgets the 100; M10 multiplies by the fraction; M11 leaves out potassium."""
from chemistry import MASS, molar_mass, sig

from ._mix import mixed_models

CUSO4_5, FESO4_7, UREA, DICHROMATE = (molar_mass(f) for f in ("CuSO4.5H2O", "FeSO4.7H2O", "CO(NH2)2", "K2Cr2O7"))
W = molar_mass("H2O")
Fe, N, Cr = MASS["Fe"], MASS["N"], MASS["Cr"]

TABLE = {
    "water_cuso4": {"key": lambda v: sig(100 * 5 * W / CUSO4_5), "C04-M1": lambda v: sig(100 * W / CUSO4_5),
                    "C04-M2": lambda v: sig(100 * 5 * W / molar_mass("CuSO4")), "C04-M3": lambda v: sig(100 * 5 * MASS["O"] / CUSO4_5)},
    "fe_green": {"key": lambda v: sig(100 * Fe / FESO4_7), "C04-M2": lambda v: sig(100 * Fe / molar_mass("FeSO4")),
                 "C04-M4": lambda v: sig(100 * 26 / FESO4_7), "C04-M5": lambda v: sig(100 * Fe / molar_mass("FeSO4.H2O"))},
    "n_urea": {"key": lambda v: sig(100 * 2 * N / UREA), "C04-M6": lambda v: sig(100 * N / UREA),
               "C04-M7": lambda v: sig(100 * 2 / 8), "C04-M9": lambda v: sig(2 * N / UREA)},
    "haemoglobin": {"key": lambda v: sig(v["n"] * Fe / (v["pct"] / 100)), "C04-M8": lambda v: sig(Fe / (v["pct"] / 100)),
                    "C04-M9": lambda v: sig(v["n"] * Fe / v["pct"]), "C04-M10": lambda v: sig(v["n"] * Fe * v["pct"] / 100)},
    "cr_dichromate": {"key": lambda v: sig(100 * 2 * Cr / DICHROMATE), "C04-M6": lambda v: sig(100 * Cr / DICHROMATE),
                      "C04-M11": lambda v: sig(100 * 2 * Cr / molar_mass("Cr2O7")), "C04-M9": lambda v: sig(2 * Cr / DICHROMATE)},
}
MODELS = mixed_models("C04", TABLE, 11)
