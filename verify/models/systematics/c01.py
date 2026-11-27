"""C01 Binomial nomenclature: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "correct": {"key": "name_a", "C01-M1": "name_b", "C01-M2": "name_c", "C01-M3": "name_d"},
    "founder": {"key": "linnaeus_s", "C01-M4": "whittaker_s", "C01-M5": "darwin_s", "C01-M6": "diener_s"},
    "parts": {"key": "genus_species", "C01-M7": "species_genus", "C01-M8": "kingdom_genus", "C01-M9": "family_species"},
    "why": {"key": "one_name_worldwide", "C01-M10": "shorter_names", "C01-M11": "local_language", "C01-M12": "only_for_plants"},
    "author": {"key": "author_l", "C01-M13": "location_l", "C01-M14": "large_l", "C01-M15": "leaf_l"},
}
MODELS = mixed_models("C01", TABLE, 15)
