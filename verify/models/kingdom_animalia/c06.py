"""C06 Reptiles, birds and mammals: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "birds": {"key": "teeth_b", "C06-M1": "scales_b", "C06-M2": "nucleated_rbc", "C06-M3": "hollow_bones"},
    "four": {"key": "crocodile_a", "C06-M4": "snake_a", "C06-M5": "lizard_a", "C06-M6": "turtle_a"},
    "pinna": {"key": "mammals_only", "C06-M7": "birds_too", "C06-M8": "reptiles_too", "C06-M9": "all_three"},
    "scales": {"key": "epidermal_vs_dermal", "C06-M10": "both_dermal", "C06-M11": "both_epidermal", "C06-M12": "reversed_s"},
    "mammary": {"key": "sweat_glands", "C06-M13": "salivary_glands", "C06-M14": "tear_glands", "C06-M15": "thyroid_glands"},
}
MODELS = mixed_models("C06", TABLE, 15)
