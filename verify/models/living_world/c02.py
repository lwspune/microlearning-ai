"""C02 Herbaria, keys and museums: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "seasonal": {"key": "herbarium_a", "C02-M1": "museum_a", "C02-M2": "botanical_garden_a", "C02-M3": "flower_show_a"},
    "specimen": {"key": "dried_pressed", "C02-M4": "living_potted", "C02-M5": "in_formalin", "C02-M6": "photograph_s"},
    "label": {"key": "lower_right", "C02-M7": "upper_left", "C02-M8": "centre_l", "C02-M9": "back_of_sheet"},
    "key": {"key": "contrasting_characters", "C02-M10": "similar_characters", "C02-M11": "colour_only", "C02-M12": "size_only"},
    "flora": {"key": "flora_manual", "C02-M13": "herbarium_a", "C02-M14": "museum_a", "C02-M15": "dictionary_a"},
}
MODELS = mixed_models("C02", TABLE, 15)
