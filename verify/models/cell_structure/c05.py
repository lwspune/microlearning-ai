"""C05 Mitochondria and plastids: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "mtdna": {"key": "all_three_d", "C05-M1": "naked_only", "C05-M2": "circular_only", "C05-M3": "double_only"},
    "dna_set": {"key": "mito_chloro", "C05-M4": "mito_perox", "C05-M5": "membrane_ribo", "C05-M6": "chloro_golgi"},
    "atp_site": {"key": "oxysomes_o", "C05-M7": "ribosomes_o", "C05-M8": "thylakoids_o", "C05-M9": "lysosomes_o"},
    "leuco": {"key": "colourless_storage", "C05-M10": "green_photosynthesis", "C05-M11": "coloured_petals", "C05-M12": "make_atp"},
    "powerhouse": {"key": "aerobic_atp", "C05-M13": "make_proteins", "C05-M14": "photosynthesise_p", "C05-M15": "store_food"},
}
MODELS = mixed_models("C05", TABLE, 15)
