"""C05 Water pollution and wastes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "sewage": {"key": "high_bod", "C05-M1": "more_oxygen", "C05-M2": "lower_bod", "C05-M3": "no_change"},
    "sugar": {"key": "bagasse_pressmud", "C05-M4": "plastic_waste", "C05-M5": "glass_waste", "C05-M6": "heavy_metals"},
    "eutrophication": {"key": "nutrient_enrichment", "C05-M7": "cooling_water", "C05-M8": "salt_water", "C05-M9": "oil_spill"},
    "bloom": {"key": "oxygen_depletion", "C05-M10": "cleaner_water", "C05-M11": "more_fish", "C05-M12": "lower_bod"},
    "ecosan": {"key": "organic_manure", "C05-M13": "drinking_water", "C05-M14": "biogas_fuel", "C05-M15": "chemical_fertilizer"},
}
MODELS = mixed_models("C05", TABLE, 15)
