"""C07 Mineral nutrition: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "source": {"key": "from_soil", "C07-M1": "from_photosynthesis", "C07-M2": "from_enzymes", "C07-M3": "from_hormones"},
    "zinc": {"key": "iaa_synthesis", "C07-M4": "stomata_closing", "C07-M5": "chlorophyll_synthesis", "C07-M6": "carbohydrate_oxidation"},
    "necrosis": {"key": "tissue_death", "C07-M7": "yellow_spots", "C07-M8": "darker_green", "C07-M9": "wilting_leaves"},
    "chlorosis": {"key": "yellowing_leaves", "C07-M10": "tissue_death", "C07-M11": "stunted_growth", "C07-M12": "wilting_leaves"},
    "micro": {"key": "molybdenum_el", "C07-M13": "nitrogen_el", "C07-M14": "potassium_el", "C07-M15": "magnesium_el"},
}
MODELS = mixed_models("C07", TABLE, 15)
