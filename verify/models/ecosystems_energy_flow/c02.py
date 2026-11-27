"""C02 Decomposition: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "detritus": {"key": "saprotrophs_o", "C02-M1": "omnivores_o", "C02-M2": "carnivores_o", "C02-M3": "autotrophs_o"},
    "leaching": {"key": "leaching_s", "C02-M4": "humification_s", "C02-M5": "mineralization_s", "C02-M6": "fragmentation_s"},
    "humus": {"key": "humification_s", "C02-M7": "leaching_s", "C02-M8": "catabolism_s", "C02-M9": "mineralization_s"},
    "mineral": {"key": "mineralization_s", "C02-M10": "humification_s", "C02-M11": "leaching_s", "C02-M12": "fragmentation_s"},
    "what": {"key": "dead_remains", "C02-M13": "living_producers", "C02-M14": "inorganic_salts", "C02-M15": "humus_only"},
}
MODELS = mixed_models("C02", TABLE, 15)
