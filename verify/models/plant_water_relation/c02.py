"""C02 Diffusion, osmosis and imbibition: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "hypotonic": {"key": "hypotonic", "C02-M1": "isotonic", "C02-M2": "hypertonic", "C02-M3": "anisotonic"},
    "doors": {"key": "imbibition", "C02-M4": "plasmolysis", "C02-M5": "osmosis", "C02-M6": "diffusion"},
    "property": {"key": "solution", "C02-M7": "solute", "C02-M8": "solvent", "C02-M9": "membrane"},
    "shrinks": {"key": "plasmolysis", "C02-M10": "deplasmolysis", "C02-M11": "imbibition", "C02-M12": "guttation"},
    "deplasmolysis": {"key": "hypotonic", "C02-M13": "hypertonic", "C02-M14": "isotonic", "C02-M15": "strong_sugar"},
}
MODELS = mixed_models("C02", TABLE, 15)
