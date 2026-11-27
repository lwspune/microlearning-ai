"""C08 Transport of minerals and food: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "sucrose": {"key": "sucrose", "C08-M1": "glucose", "C08-M2": "starch", "C08-M3": "fructose"},
    "radial": {"key": "radial", "C08-M4": "tangential", "C08-M5": "upward", "C08-M6": "downward"},
    "tangential": {"key": "tangential", "C08-M7": "radial", "C08-M8": "upward", "C08-M9": "downward"},
    "ions": {"key": "ions", "C08-M10": "salt_crystals", "C08-M11": "organic_compounds", "C08-M12": "gases"},
    "independent": {"key": "independent_active", "C08-M13": "with_water", "C08-M14": "passive_only", "C08-M15": "leaves_only"},
}
MODELS = mixed_models("C08", TABLE, 15)
