"""C06 Angiosperms: dicots and monocots: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "character": {"key": "double_fertilization", "C06-M1": "collateral_bundles", "C06-M2": "radial_bundles", "C06-M3": "seed_formation"},
    "differ": {"key": "enclosed_seed", "C06-M4": "chlorophyll_leaves", "C06-M5": "autotrophy_a", "C06-M6": "siphonogamy_a"},
    "maize": {"key": "no_cambium", "C06-M7": "has_cambium", "C06-M8": "no_xylem", "C06-M9": "short_life"},
    "venation": {"key": "parallel_v", "C06-M10": "reticulate_v", "C06-M11": "no_veins", "C06-M12": "dichotomous_v"},
    "roots": {"key": "tap_root", "C06-M13": "adventitious_root", "C06-M14": "rhizoids_r", "C06-M15": "no_roots_r"},
}
MODELS = mixed_models("C06", TABLE, 15)
