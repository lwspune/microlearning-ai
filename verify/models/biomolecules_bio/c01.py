"""C01 Biomolecules and metabolism: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "macro": {"key": "macromolecules_m", "C01-M1": "bioelements_m", "C01-M2": "micromolecules_m", "C01-M3": "each_of_these"},
    "metabolism": {"key": "metabolism_t", "C01-M4": "catabolism_t", "C01-M5": "anabolism_t", "C01-M6": "digestion_t"},
    "pool": {"key": "reservoir_p", "C01-M7": "waste_store", "C01-M8": "dna_store", "C01-M9": "water_store"},
    "secondary": {"key": "not_essential_useful", "C01-M10": "essential_growth", "C01-M11": "waste_only", "C01-M12": "harmful_only"},
    "yam": {"key": "antifertility_pills", "C01-M13": "antibiotics_y", "C01-M14": "insulin_y", "C01-M15": "vitamins_y"},
}
MODELS = mixed_models("C01", TABLE, 15)
