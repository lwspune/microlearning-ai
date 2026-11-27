"""C01 Water in the soil and its properties: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "available": {"key": "capillary", "C01-M1": "gravitational", "C01-M2": "hygroscopic", "C01-M3": "combined"},
    "surface": {"key": "cohesion", "C01-M4": "diffusion", "C01-M5": "osmosis", "C01-M6": "gravity"},
    "combined": {"key": "combined", "C01-M7": "capillary", "C01-M8": "hygroscopic", "C01-M9": "gravitational"},
    "film": {"key": "hygroscopic", "C01-M10": "capillary", "C01-M11": "gravitational", "C01-M12": "combined"},
    "adhesion": {"key": "adhesion", "C01-M13": "cohesion", "C01-M14": "surface_tension", "C01-M15": "imbibition"},
}
MODELS = mixed_models("C01", TABLE, 15)
