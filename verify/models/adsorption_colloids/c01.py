"""C01 Adsorption: named answers. Adsorption concentrates a substance (adsorbate) on a surface (adsorbent); absorption
spreads it through the bulk. Surface particles have unbalanced forces; adsorption is exothermic. Chalk dust is adsorbed
on the blackboard, so writing stays readable.
M1 swaps adsorption and absorption; M2 thinks adsorption is always chemical; M3 thinks it needs heating; M4 says the
chalk is absorbed; M5 says it reacts with the board; M6 says the board dissolves it; M7 swaps adsorbent and adsorbate;
M8 names the air; M9 names the container; M10 calls it endothermic; M11 gives zero enthalpy; M12 limits the heat to
chemisorption; M13 thinks the surface is hotter; M14 thinks the bulk has no particles; M15 thinks surface particles are
ions."""
from ._mix import mixed_models

TABLE = {
    "define": {"key": "surface_only", "C01-M1": "through_bulk", "C01-M2": "always_chemical", "C01-M3": "needs_heat"},
    "chalk": {"key": "adsorbed_surface", "C01-M4": "absorbed", "C01-M5": "reacts", "C01-M6": "board_dissolves"},
    "adsorbent": {"key": "silica_gel", "C01-M7": "water_vapour", "C01-M8": "air", "C01-M9": "container"},
    "enthalpy": {"key": "exothermic", "C01-M10": "endothermic", "C01-M11": "zero_enthalpy", "C01-M12": "only_chemisorption"},
    "surface": {"key": "unbalanced_forces", "C01-M13": "hotter_surface", "C01-M14": "empty_bulk", "C01-M15": "surface_ions"},
}
MODELS = mixed_models("C01", TABLE, 15)
