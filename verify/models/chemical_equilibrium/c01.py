"""C01 Reversible reactions and dynamic equilibrium: named answers. In a closed system a reversible reaction reaches
equilibrium when forward and backward rates are equal; concentrations then stay constant though both reactions go on
(the water ionisation equilibrium is dynamic).
M1 calls it static; M2 calls it physical; M3 calls it mechanical; M4 thinks concentrations become equal; M5 thinks both
reactions stop; M6 thinks the forward rate is zero; M7 thinks it goes to completion; M8 thinks it needs heating; M9
thinks there are no products; M10 thinks air would react; M11 thinks heat must be kept in; M12 thinks pressure must be
zero; M13 thinks concentrations keep changing; M14 thinks they all become equal; M15 thinks they are constant because
the reactions stop."""
from ._mix import mixed_models

TABLE = {
    "water": {"key": "dynamic", "C01-M1": "static", "C01-M2": "physical", "C01-M3": "mechanical"},
    "rates": {"key": "rates_equal", "C01-M4": "conc_equal", "C01-M5": "both_stop", "C01-M6": "forward_zero"},
    "reversible": {"key": "both_directions", "C01-M7": "completion", "C01-M8": "needs_heat", "C01-M9": "no_products"},
    "closed": {"key": "products_stay", "C01-M10": "air_reacts", "C01-M11": "keep_heat", "C01-M12": "zero_pressure"},
    "concentrations": {"key": "constant_reactions_go_on", "C01-M13": "keep_changing", "C01-M14": "all_equal", "C01-M15": "reactions_stop"},
}
MODELS = mixed_models("C01", TABLE, 15)
