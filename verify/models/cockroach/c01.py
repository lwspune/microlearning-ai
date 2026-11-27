"""C01 Classification and external features: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "phylum": {"key": "jointed_chitin", "C01-M1": "no_cell_wall", "C01-M2": "wings_legs", "C01-M3": "nocturnal_t"},
    "insecta": {"key": "class_insecta", "C01-M4": "phylum_arthropoda", "C01-M5": "genus_periplaneta", "C01-M6": "kingdom_animalia"},
    "chitin": {"key": "carbohydrate_t", "C01-M7": "protein_t", "C01-M8": "lipid_t", "C01-M9": "glycoprotein_t"},
    "tergum": {"key": "dorsal_plate", "C01-M10": "ventral_plate", "C01-M11": "lateral_plate", "C01-M12": "soft_cuticle"},
    "male": {"key": "anal_styles", "C01-M13": "anal_cerci", "C01-M14": "broad_abdomen", "C01-M15": "six_gonapophyses"},
}
MODELS = mixed_models("C01", TABLE, 15)
