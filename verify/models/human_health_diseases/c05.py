"""C05 Innate and acquired immunity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "innate": {"key": "phagocytes_c", "C05-M1": "antibody_c", "C05-M2": "t_lymphocytes", "C05-M3": "b_lymphocytes"},
    "antiviral": {"key": "interferons_p", "C05-M4": "histamines_p", "C05-M5": "pyrogens_p", "C05-M6": "allergens_p"},
    "lysozyme": {"key": "tears_f", "C05-M7": "bile_f", "C05-M8": "urine_f", "C05-M9": "rbc_f"},
    "readymade": {"key": "passive_i", "C05-M10": "active_i", "C05-M11": "innate_i", "C05-M12": "autoimmunity_i"},
    "second": {"key": "memory_i", "C05-M13": "no_specificity", "C05-M14": "inborn_i", "C05-M15": "phagocytes_only"},
}
MODELS = mixed_models("C05", TABLE, 15)
