"""C05 Cartilage and bone: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "chondrin": {"key": "chondrin_p", "C05-M1": "ossein_p", "C05-M2": "haemoglobin_p", "C05-M3": "renin_p"},
    "pinna": {"key": "elastic_fibres", "C05-M4": "fine_collagen", "C05-M5": "ossein_p", "C05-M6": "fat_droplets"},
    "chondroblast": {"key": "immature_chondrocyte", "C05-M7": "mature_lacuna", "C05-M8": "heparin_secreting", "C05-M9": "phagocytic_c"},
    "perichondrium": {"key": "perichondrium_s", "C05-M10": "periosteum_s", "C05-M11": "sarcolemma_s", "C05-M12": "neurilemma_s"},
    "marrow": {"key": "red_marrow", "C05-M13": "periosteum_s", "C05-M14": "chondrin_p", "C05-M15": "tendon_t"},
}
MODELS = mixed_models("C05", TABLE, 15)
