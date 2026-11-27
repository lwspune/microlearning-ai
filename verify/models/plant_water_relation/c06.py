"""C06 Stomata and their movement: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "starch": {"key": "closes", "C06-M1": "opens_partly", "C06-M2": "opens_fully", "C06-M3": "no_change"},
    "cyperus": {"key": "both_shapes", "C06-M4": "kidney_only", "C06-M5": "dumbbell_only", "C06-M6": "no_guard_cells"},
    "potassium": {"key": "k_enters", "C06-M7": "k_leaves", "C06-M8": "water_leaves", "C06-M9": "starch_forms"},
    "turgid": {"key": "turgid", "C06-M10": "flaccid", "C06-M11": "plasmolysed", "C06-M12": "dead"},
    "grass": {"key": "grasses", "C06-M13": "dicots", "C06-M14": "ferns", "C06-M15": "gymnosperms"},
}
MODELS = mixed_models("C06", TABLE, 15)
