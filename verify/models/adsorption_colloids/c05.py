"""C05 Colloids and their types: named answers. Colloidal particles are 1e-9 to 1e-6 m across. Gum in water is a
lyophilic sol; fruit jam a gel; milk an emulsion of liquid fat in water. In a soap micelle the hydrocarbon tails point
inward and the ionic heads face the water.
M1 gives true-solution sizes; M2 gives suspension sizes; M3 gives visible sizes; M4 calls gum a true solution; M5 a
suspension; M6 a lyophobic sol; M7 calls jam a sol; M8 an emulsion; M9 a true solution; M10 swaps phase and medium; M11
says gas in liquid; M12 says solid in gas; M13 turns the heads inward; M14 lays the molecules flat; M15 thinks soap never
aggregates."""
from ._mix import mixed_models

TABLE = {
    "size": {"key": "e9_e6", "C05-M1": "e10_e9", "C05-M2": "e6_e4", "C05-M3": "e3_e1"},
    "gum": {"key": "lyophilic", "C05-M4": "true_solution", "C05-M5": "suspension", "C05-M6": "lyophobic"},
    "jam": {"key": "gel", "C05-M7": "sol", "C05-M8": "emulsion", "C05-M9": "true_solution"},
    "milk": {"key": "fat_in_water", "C05-M10": "water_in_fat", "C05-M11": "gas_in_liquid", "C05-M12": "solid_in_gas"},
    "micelle": {"key": "tails_in", "C05-M13": "heads_in", "C05-M14": "flat_layer", "C05-M15": "never_aggregates"},
}
MODELS = mixed_models("C05", TABLE, 15)
