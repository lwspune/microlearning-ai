"""C05 Absorption, assimilation and egestion: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "quick": {"key": "glucose_drink", "C05-M1": "sugarcane_juice", "C05-M2": "starchy_food", "C05-M3": "protein_food"},
    "sucrose": {"key": "sucrase_t", "C05-M4": "amylase_t", "C05-M5": "pepsin_t", "C05-M6": "lipase_t"},
    "villi": {"key": "villi_capillaries", "C05-M7": "stomach_wall", "C05-M8": "gall_bladder", "C05-M9": "bile_ducts"},
    "stomach": {"key": "alcohol_t", "C05-M10": "sucrose_t", "C05-M11": "starch_t", "C05-M12": "proteins_t"},
    "assimilation": {"key": "assimilation_t", "C05-M13": "absorption_t", "C05-M14": "digestion_t", "C05-M15": "egestion_t"},
}
MODELS = mixed_models("C05", TABLE, 15)
