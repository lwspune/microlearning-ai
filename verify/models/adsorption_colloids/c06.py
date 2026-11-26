"""C06 Preparing and purifying colloids: named answers. Bredig's arc method strikes an arc between metal electrodes under
ice-cold water (with a trace of KOH as stabiliser): the metal vaporises and condenses into a sol. Peptisation turns a
fresh precipitate into a sol with a little electrolyte. Dialysis through a parchment or cellophane membrane lets small
ions out but keeps colloidal particles.
M1 says true solutions; M2 says emulsions; M3 says gels; M4 says coagulation; M5 says dialysis; M6 says electrophoresis;
M7 swaps what passes; M8 thinks both pass; M9 thinks impurities boil off; M10 picks filter paper; M11 picks an arc; M12
picks a magnet; M13 thinks the water dissolves the metal; M14 thinks it starts the arc; M15 thinks it makes a true
solution."""
from ._mix import mixed_models

TABLE = {
    "bredig": {"key": "metal_sols", "C06-M1": "true_solutions", "C06-M2": "emulsions", "C06-M3": "gels"},
    "peptisation": {"key": "peptisation", "C06-M4": "coagulation", "C06-M5": "dialysis", "C06-M6": "electrophoresis"},
    "dialysis": {"key": "ions_pass", "C06-M7": "colloid_passes", "C06-M8": "both_pass", "C06-M9": "boils_off"},
    "membrane": {"key": "parchment", "C06-M10": "filter_paper", "C06-M11": "electric_arc", "C06-M12": "magnet"},
    "cold_water": {"key": "condenses_stabilises", "C06-M13": "dissolves_metal", "C06-M14": "starts_arc", "C06-M15": "true_solution"},
}
MODELS = mixed_models("C06", TABLE, 15)
