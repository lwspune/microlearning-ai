"""C08 Hormones and how they act: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "receptor": {"key": "cell_surface", "C08-M1": "cytoplasm_r", "C08-M2": "nucleus_r", "C08-M3": "golgi_r"},
    "dna": {"key": "steroid_h", "C08-M4": "protein_h", "C08-M5": "peptide_h", "C08-M6": "catecholamine_h"},
    "tyrosine": {"key": "tyrosine_aa", "C08-M7": "glycine_aa", "C08-M8": "arginine_aa", "C08-M9": "ornithine_aa"},
    "pheromone": {"key": "behaviour_e", "C08-M10": "skin_colour_e", "C08-M11": "excretion_e", "C08-M12": "digestion_e"},
    "discrete": {"key": "set_c", "C08-M13": "set_a", "C08-M14": "set_b", "C08-M15": "set_d"},
}
MODELS = mixed_models("C08", TABLE, 15)
