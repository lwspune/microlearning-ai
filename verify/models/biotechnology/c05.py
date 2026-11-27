"""C05 Transgenic plants: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "bt_cotton": {"key": "insect_resistance", "C05-M1": "shelf_life", "C05-M2": "vitamin_a_rich", "C05-M3": "iron_rich"},
    "flavr": {"key": "shelf_life", "C05-M4": "disease_resistance", "C05-M5": "iron_content", "C05-M6": "yield_i"},
    "golden": {"key": "beta_carotene", "C05-M7": "ferritin_iron", "C05-M8": "flavonoids_c", "C05-M9": "phytase_c"},
    "tomato": {"key": "chalcone_isomerase", "C05-M10": "phytoene_synthase", "C05-M11": "ferritin_g", "C05-M12": "phytase_g"},
    "oil": {"key": "arabidopsis_g", "C05-M13": "phytase_g", "C05-M14": "holandric_g", "C05-M15": "oncogene_g"},
}
MODELS = mixed_models("C05", TABLE, 15)
