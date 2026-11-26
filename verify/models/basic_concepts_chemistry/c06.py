"""C06 The mole and molar mass. n = m / M; particles = n x N_A (6.022e23); atoms = molecules x atoms per molecule.
params["q"]:
  "water_mass": inputs n (mol); M(H2O) = 18. "urea_moles": inputs m (g); urea CO(NH2)2 = 60.
  "iodine_atoms": inputs m (g of iodine), A (g/mol, I = 127). "glucose_cost": inputs m (g bought), cost (Rs);
  M(C6H12O6) = 180. "h_moles": inputs n (mol of CH3CHO).
M1 gives the molar mass; M2 gives the moles back; M3 divides the molar mass by the moles; M4 uses CONH2 (44) for urea;
M5 multiplies mass by molar mass; M6 gives the moles of atoms; M7 counts I2 molecules; M8 multiplies the mass by N_A;
M9 gives the cost per gram; M10 divides the grams bought by the molar mass; M11 multiplies cost by molar mass; M12
counts H per molecule; M13 gives the moles of molecules; M14 doubles the H count."""
from chemistry import BOOK, molar_mass, sig

from ._mix import mixed_models

NA = BOOK["N_A"]
W, UREA, GLU = molar_mass("H2O"), molar_mass("CO(NH2)2"), molar_mass("C6H12O6")

TABLE = {
    "water_mass": {"key": lambda v: sig(v["n"] * W), "C06-M1": lambda v: sig(W), "C06-M2": lambda v: sig(v["n"]),
                   "C06-M3": lambda v: sig(W / v["n"])},
    "urea_moles": {"key": lambda v: sig(v["m"] / UREA), "C06-M3": lambda v: sig(UREA / v["m"]),
                   "C06-M4": lambda v: sig(v["m"] / molar_mass("CONH2")), "C06-M5": lambda v: sig(v["m"] * UREA)},
    "iodine_atoms": {"key": lambda v: sig(v["m"] / v["A"] * NA), "C06-M6": lambda v: sig(v["m"] / v["A"]),
                     "C06-M7": lambda v: sig(v["m"] / (2 * v["A"]) * NA), "C06-M8": lambda v: sig(v["m"] * NA)},
    "glucose_cost": {"key": lambda v: sig(v["cost"] / v["m"] * GLU), "C06-M9": lambda v: sig(v["cost"] / v["m"]),
                     "C06-M10": lambda v: sig(v["cost"] * v["m"] / GLU), "C06-M11": lambda v: sig(v["cost"] * GLU)},
    "h_moles": {"key": lambda v: sig(4 * v["n"]), "C06-M12": lambda v: sig(4), "C06-M13": lambda v: sig(v["n"]),
                "C06-M14": lambda v: sig(8 * v["n"])},
}
MODELS = mixed_models("C06", TABLE, 14)
