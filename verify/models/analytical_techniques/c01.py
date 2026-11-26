"""C01 Filtration and crystallisation: named answers. Filtration leaves a residue on the paper and passes the filtrate;
the paper is moistened so it sticks to the funnel with no air gap. Crystallisation purifies a solid from a solvent that
dissolves it hot but not cold; fractional crystallisation separates two solids of different solubility.
M1 thinks plain crystallisation separates two solids; M2 uses distillation for solids; M3 picks solvent extraction; M4
swaps filtrate and residue; M5 calls the paper the filtrate; M6 thinks filtration gives off vapour; M7 thinks water
dissolves the solid; M8 thinks wetting strengthens the paper; M9 thinks wetting washes the paper; M10 wants a solvent
that dissolves the solid at every temperature; M11 wants one that never dissolves it; M12 wants one that reacts with
it; M13 thinks evaporating to dryness purifies; M14 thinks filtering removes dissolved impurities."""
from ._mix import mixed_models

TABLE = {
    "two_solids": {"key": "fractional_crystallisation", "C01-M1": "crystallisation", "C01-M2": "distillation", "C01-M3": "extraction"},
    "filtrate": {"key": "liquid_through", "C01-M4": "solid_left", "C01-M5": "paper", "C01-M6": "vapour"},
    "moisten": {"key": "no_air_gap", "C01-M7": "dissolve_solid", "C01-M8": "stronger", "C01-M9": "wash_paper"},
    "solvent": {"key": "hot_not_cold", "C01-M10": "always_dissolves", "C01-M11": "never_dissolves", "C01-M12": "reacts"},
    "purify_solid": {"key": "crystallisation", "C01-M2": "distillation", "C01-M13": "evaporate_dry", "C01-M14": "filter_only"},
}
MODELS = mixed_models("C01", TABLE, 14)
