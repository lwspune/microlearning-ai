"""C11 Genetic disorders: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "down": {"key": lambda v: Integer(0) + (47), "C11-M1": lambda v: Integer(0) + (46), "C11-M2": lambda v: Integer(0) + (45), "C11-M3": lambda v: Integer(0) + (48)},
    "turner": {"key": "turner", "C11-M4": "klinefelter", "C11-M5": "down", "C11-M6": "normal_female"},
    "klinefelter": {"key": "klinefelter", "C11-M7": "turner", "C11-M8": "down", "C11-M9": "super_female"},
    "pku": {"key": "autosomal_recessive", "C11-M10": "x_linked", "C11-M11": "chromosomal", "C11-M12": "autosomal_dominant"},
    "monosomy": {"key": "two_n_minus_one", "C11-M13": "two_n_plus_one", "C11-M14": "two_n_minus_two", "C11-M15": "three_n"},
}
MODELS = mixed_models("C11", TABLE, 15)
