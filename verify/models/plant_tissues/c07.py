"""C07 Wood and cork cambium: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "spring": {"key": "spring_wood", "C07-M1": "autumn_wood", "C07-M2": "heart_wood", "C07-M3": "cork_w"},
    "rings": {"key": "season_contrast", "C07-M4": "tree_size", "C07-M5": "uniform_climate", "C07-M6": "cork_rings"},
    "heart": {"key": "heart_wood", "C07-M7": "sap_wood", "C07-M8": "spring_wood", "C07-M9": "cork_w"},
    "inside": {"key": "phelloderm_c", "C07-M10": "secondary_phloem", "C07-M11": "secondary_xylem", "C07-M12": "new_epidermis"},
    "stopper": {"key": "suberized_walls", "C07-M13": "living_repair", "C07-M14": "lignified_walls", "C07-M15": "lenticels_dry"},
}
MODELS = mixed_models("C07", TABLE, 15)
