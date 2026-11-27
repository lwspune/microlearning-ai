"""C03 The leaf and its modifications: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "superposed": {"key": "superposed_p", "C03-M1": "alternate_p", "C03-M2": "decussate_p", "C03-M3": "whorled_p"},
    "onion": {"key": "fleshy_scale_leaves", "C03-M4": "discoid_stem", "C03-M5": "adventitious_roots", "C03-M6": "dry_scale_leaves"},
    "veins": {"key": "water_minerals_food", "C03-M7": "water_only", "C03-M8": "food_only", "C03-M9": "support_only"},
    "rachis": {"key": "midrib_t", "C03-M10": "stem_branch", "C03-M11": "petiole_t", "C03-M12": "lateral_vein"},
    "gloriosa": {"key": "leaf_tip_tendril", "C03-M13": "stem_tendril", "C03-M14": "spine_t", "C03-M15": "adventitious_root"},
}
MODELS = mixed_models("C03", TABLE, 15)
