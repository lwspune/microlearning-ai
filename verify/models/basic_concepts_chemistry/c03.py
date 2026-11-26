"""C03 Laws of chemical combination. Conservation of mass; definite proportions (water is always 16/18 = 88.9 % O by
mass; every sample of a compound has the same composition); multiple proportions (12 g of C takes 16 g of O in CO and
32 g in CO2, a 1 : 2 ratio); Gay-Lussac's law of gaseous volumes (N2 : H2 : NH3 = 1 : 3 : 2).
params["q"]:
  "water_o": percentage of O in water (no inputs). "multiple": named. "volumes": named.
  "oxygen_used": inputs c (g of C), co2 (g of CO2). "metal_oxide": named.
M1 gives the molar mass of water; M2 uses OH (one H); M3 gives the atomic mass of O; M4 takes two compounds for one,
naming definite proportions; M5 thinks a ratio between two compounds shows conservation of mass; M6 names reciprocal
proportions; M7 thinks a volume ratio shows definite proportions; M8 takes any whole-number ratio for multiple
proportions; M9 thinks gas volumes are conserved like mass; M10 adds the masses; M11 uses 16 g of O per 12 g of C; M12
gives the CO2 mass; M13 thinks two samples of one oxide show multiple proportions; M14 names conservation of mass; M15
names gaseous volumes for solids."""
from chemistry import MASS, sig

from ._mix import mixed_models

O, H, C = MASS["O"], MASS["H"], MASS["C"]

TABLE = {
    "water_o": {"key": lambda v: sig(100 * O / (2 * H + O)), "C03-M1": lambda v: sig(2 * H + O),
                "C03-M2": lambda v: sig(100 * O / (H + O)), "C03-M3": lambda v: sig(O)},
    "multiple": {"key": "multiple", "C03-M4": "definite", "C03-M5": "conservation", "C03-M6": "reciprocal"},
    "volumes": {"key": "gaseous_volumes", "C03-M7": "definite", "C03-M8": "multiple", "C03-M9": "conservation"},
    "oxygen_used": {"key": lambda v: sig(v["co2"] - v["c"]), "C03-M10": lambda v: sig(v["co2"] + v["c"]),
                    "C03-M11": lambda v: sig(v["c"] / C * O), "C03-M12": lambda v: sig(v["co2"])},
    "metal_oxide": {"key": "definite", "C03-M13": "multiple", "C03-M14": "conservation", "C03-M15": "gaseous_volumes"},
}
MODELS = mixed_models("C03", TABLE, 15)
