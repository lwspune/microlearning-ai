"""C05 Column, thin layer and paper chromatography: named answers. Column and TLC: adsorption on silica gel or alumina;
paper: partition, with water held in the paper's fibres as the stationary phase and the solvent as the mobile phase.
Spot above the solvent level so the spot does not dissolve into the solvent pool. Colourless spots show under UV
light, in an iodine chamber or with a spraying reagent, not with infrared light. In a column, components move down at
different rates and separate into bands.
M1 swaps the phases; M2 calls the spot the stationary phase; M3 says air; M4 thinks UV light cannot show spots; M5
thinks iodine cannot; M6 thinks spraying reagents cannot; M7 thinks a lower spot is reached faster; M8 thinks it dries
faster; M9 thinks it helps UV viewing; M10 names mobile phases; M11 names a salt; M12 names only filter paper; M13 thinks
bands are packing layers; M14 thinks the solvent changes colour; M15 thinks components react."""
from ._mix import mixed_models

TABLE = {
    "paper_phase": {"key": "water_in_fibres", "C05-M1": "solvent", "C05-M2": "spot", "C05-M3": "air"},
    "cannot_see": {"key": "infrared", "C05-M4": "uv", "C05-M5": "iodine", "C05-M6": "spray"},
    "spot_above": {"key": "not_dissolved_away", "C05-M7": "reached_faster", "C05-M8": "dries_faster", "C05-M9": "uv_view"},
    "materials": {"key": "silica_alumina", "C05-M10": "water_ethanol", "C05-M11": "sodium_chloride", "C05-M12": "filter_paper"},
    "bands": {"key": "different_rates", "C05-M13": "packing_layers", "C05-M14": "solvent_colour", "C05-M15": "react"},
}
MODELS = mixed_models("C05", TABLE, 15)
