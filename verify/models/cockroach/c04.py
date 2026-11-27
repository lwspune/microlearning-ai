"""C04 Tracheal respiration: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "spiracle": {"key": "respiratory_s", "C04-M1": "circulatory_s", "C04-M2": "reproductive_s", "C04-M3": "nervous_s"},
    "pairs": {"key": "two_eight", "C04-M4": "eight_only", "C04-M5": "two_only", "C04-M6": "two_ten"},
    "collapse": {"key": "chitin_rings", "C04-M7": "blood_pressure", "C04-M8": "muscle_wall", "C04-M9": "fluid_filled"},
    "transport": {"key": "direct_tracheoles", "C04-M10": "by_haemolymph", "C04-M11": "by_lungs", "C04-M12": "by_skin"},
    "soap": {"key": "spiracles_blocked", "C04-M13": "soap_poison", "C04-M14": "skeleton_dissolves", "C04-M15": "lungs_flooded"},
}
MODELS = mixed_models("C04", TABLE, 15)
