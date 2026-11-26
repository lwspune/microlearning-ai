"""C07 Moles of gases. One mole of any gas at STP occupies 22.4 dm^3 (22 400 cm^3), so n = V / 22.4.
params["q"]:
  "nh3_moles": inputs V (dm^3). "h2_moles": inputs V (dm^3). "n2_molecules": inputs V (cm^3).
  "co2_volume": inputs n (mol). "kclo3_mass": inputs V (dm^3 of O2), M (g/mol of KClO3); 2KClO3 -> 2KCl + 3O2.
M1 multiplies by 22.4; M2 divides 22.4 by the volume; M3 gives molecules instead of moles; M4 uses 22 400 with a volume
in dm^3; M5 treats cm^3 as dm^3; M6 multiplies the volume by N_A; M7 counts N atoms; M8 divides 22.4 by the moles; M9
ignores the moles; M10 gives the mass; M11 ignores the 2 : 3 ratio; M12 inverts the ratio; M13 gives the mass of O2."""
from chemistry import BOOK, MASS, molar_mass, sig

from ._mix import mixed_models

NA, VM = BOOK["N_A"], BOOK["V_m"]

TABLE = {
    "nh3_moles": {"key": lambda v: sig(v["V"] / VM), "C07-M1": lambda v: sig(v["V"] * VM),
                  "C07-M2": lambda v: sig(VM / v["V"]), "C07-M3": lambda v: sig(v["V"] / VM * NA)},
    "h2_moles": {"key": lambda v: sig(v["V"] / VM), "C07-M1": lambda v: sig(v["V"] * VM),
                 "C07-M2": lambda v: sig(VM / v["V"]), "C07-M4": lambda v: sig(v["V"] / (VM * 1000))},
    "n2_molecules": {"key": lambda v: sig(v["V"] / (VM * 1000) * NA), "C07-M5": lambda v: sig(v["V"] / VM * NA),
                     "C07-M6": lambda v: sig(v["V"] * NA), "C07-M7": lambda v: sig(2 * v["V"] / (VM * 1000) * NA)},
    "co2_volume": {"key": lambda v: sig(v["n"] * VM), "C07-M8": lambda v: sig(VM / v["n"]),
                   "C07-M9": lambda v: sig(VM), "C07-M10": lambda v: sig(v["n"] * molar_mass("CO2"))},
    "kclo3_mass": {"key": lambda v: sig(v["V"] / VM * 2 / 3 * v["M"]), "C07-M11": lambda v: sig(v["V"] / VM * v["M"]),
                   "C07-M12": lambda v: sig(v["V"] / VM * 3 / 2 * v["M"]), "C07-M13": lambda v: sig(v["V"] / VM * 2 * MASS["O"])},
}
MODELS = mixed_models("C07", TABLE, 13)
