"""C03 Botanical gardens, zoos and biodiversity parks: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "garden": {"key": "botanical_garden_a", "C03-M1": "zoological_park_a", "C03-M2": "biodiversity_park_a", "C03-M3": "herbarium_a"},
    "bpark": {"key": "biodiversity_park_a", "C03-M4": "botanical_garden_a", "C03-M5": "zoological_park_a", "C03-M6": "museum_a"},
    "penguins": {"key": "suited_to_habitat", "C03-M7": "breed_faster", "C03-M8": "to_tame", "C03-M9": "not_needed"},
    "greenhouse": {"key": "controlled_conditions", "C03-M10": "no_water_needed", "C03-M11": "hide_plants", "C03-M12": "faster_growth_only"},
    "kolkata": {"key": "old_banyan", "C03-M13": "penguins_k", "C03-M14": "herbarium_only", "C03-M15": "tea_estate"},
}
MODELS = mixed_models("C03", TABLE, 15)
