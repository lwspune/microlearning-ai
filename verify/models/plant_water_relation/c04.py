"""C04 Absorption of water by roots: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "organ": {"key": "root_hair", "C04-M1": "lateral_roots", "C04-M2": "root_cap", "C04-M3": "primary_root"},
    "passive": {"key": "passive", "C04-M4": "active", "C04-M5": "by_leaves", "C04-M6": "by_stem"},
    "symplast": {"key": "symplast", "C04-M7": "apoplast", "C04-M8": "vacuolar", "C04-M9": "xylem_route"},
    "apoplast": {"key": "apoplast", "C04-M10": "symplast", "C04-M11": "phloem", "C04-M12": "plasmodesmata"},
    "epiblema": {"key": "epiblema", "C04-M13": "cortex", "C04-M14": "endodermis", "C04-M15": "pericycle"},
}
MODELS = mixed_models("C04", TABLE, 15)
