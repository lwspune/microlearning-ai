"""C05 Anatomy of root, stem and leaf: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "mesophyll": {"key": "leaf_o", "C05-M1": "root_o", "C05-M2": "stem_o", "C05-M3": "flower_o"},
    "polyarch": {"key": "monocot_root", "C05-M4": "dicot_root", "C05-M5": "monocot_stem", "C05-M6": "dicot_stem"},
    "casparian": {"key": "suberin_s", "C05-M7": "lignin_s", "C05-M8": "cellulose_s", "C05-M9": "cutin_s"},
    "upper_stomata": {"key": "monocot_isobilateral", "C05-M10": "dicot_upside_down", "C05-M11": "dicot_dorsiventral", "C05-M12": "monocot_dorsiventral"},
    "hypodermis": {"key": "collenchyma_h", "C05-M13": "parenchyma_h", "C05-M14": "sclerenchyma_h", "C05-M15": "endodermis_h"},
}
MODELS = mixed_models("C05", TABLE, 15)
