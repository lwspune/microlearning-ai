"""C04 Concentration and composition of urine: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "hypotonic": {"key": "henle_loop", "C04-M1": "pct_t", "C04-M2": "dct_t", "C04-M3": "collecting_tubule"},
    "gravity": {"key": "increases_t", "C04-M4": "decreases_t", "C04-M5": "unaffected_t", "C04-M6": "stabilises_t"},
    "permeability": {"key": "dct_collecting", "C04-M7": "pct_t", "C04-M8": "descending_limb", "C04-M9": "bowman_capsule"},
    "ascending": {"key": "impermeable_pumps", "C04-M10": "permeable_water", "C04-M11": "impermeable_salts", "C04-M12": "adh_permeable"},
    "colour": {"key": "urochrome_t", "C04-M13": "urea_w", "C04-M14": "uric_acid_w", "C04-M15": "cholesterol_t"},
}
MODELS = mixed_models("C04", TABLE, 15)
