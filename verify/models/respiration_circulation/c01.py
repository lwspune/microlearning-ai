"""C01 Respiratory surfaces: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "amoeba": {"key": "plasma_membrane", "C01-M1": "trachea_tubes", "C01-M2": "external_gills", "C01-M3": "lungs_r"},
    "scorpion": {"key": "book_lungs", "C01-M4": "book_gills", "C01-M5": "tracheae_r", "C01-M6": "gills_r"},
    "limulus": {"key": "book_gills", "C01-M7": "book_lungs", "C01-M8": "internal_gills", "C01-M9": "lungs_r"},
    "tadpole": {"key": "external_gills", "C01-M10": "internal_gills", "C01-M11": "lungs_r", "C01-M12": "skin_only"},
    "surface": {"key": "moist_surface", "C01-M13": "dry_surface", "C01-M14": "thick_surface", "C01-M15": "small_area"},
}
MODELS = mixed_models("C01", TABLE, 15)
