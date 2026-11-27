"""C02 Algae: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "red": {"key": "phycoerythrin_p", "C02-M1": "fucoxanthin_p", "C02-M2": "chlorophyll_b_p", "C02-M3": "carotene_p"},
    "brown_food": {"key": "laminarin_mannitol", "C02-M4": "floridean_starch", "C02-M5": "true_starch", "C02-M6": "glycogen_f"},
    "green": {"key": "chlorophyceae_a", "C02-M7": "phaeophyceae_a", "C02-M8": "rhodophyceae_a", "C02-M9": "cyanophyceae_a"},
    "chlamy": {"key": "unicellular_motile", "C02-M10": "filamentous_a", "C02-M11": "macroscopic_a", "C02-M12": "colonial_a"},
    "algin": {"key": "phaeophyceae_a", "C02-M13": "chlorophyceae_a", "C02-M14": "rhodophyceae_a", "C02-M15": "cyanophyceae_a"},
}
MODELS = mixed_models("C02", TABLE, 15)
