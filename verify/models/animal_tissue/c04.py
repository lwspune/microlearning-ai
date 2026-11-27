"""C04 Areolar, adipose and dense tissue: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "heparin": {"key": "mast_cell", "C04-M1": "fibroblast_c", "C04-M2": "macrophage_c", "C04-M3": "adipocyte_c"},
    "fibre_maker": {"key": "fibroblast_c", "C04-M4": "mast_cell", "C04-M5": "macrophage_c", "C04-M6": "adipocyte_c"},
    "white": {"key": "collagen_p", "C04-M7": "elastin_p", "C04-M8": "chondrin_p", "C04-M9": "ossein_p"},
    "cold": {"key": "adipose_t", "C04-M10": "areolar_t", "C04-M11": "tendon_t", "C04-M12": "cartilage_t"},
    "tendon": {"key": "tendon_t", "C04-M13": "adipose_t", "C04-M14": "areolar_t", "C04-M15": "elastic_cartilage"},
}
MODELS = mixed_models("C04", TABLE, 15)
