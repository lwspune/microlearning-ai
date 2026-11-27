"""C02 Evidences of evolution: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "analogous": {"key": "dolphin_penguin", "C02-M1": "whale_bat", "C02-M2": "thorn_tendril", "C02-M3": "vertebrate_hearts"},
    "archaeopteryx": {"key": "birds_reptiles", "C02-M4": "fishes_amphibians", "C02-M5": "annelids_arthropods", "C02-M6": "chordates_nonchordates"},
    "seymouria": {"key": "seymouria", "C02-M7": "archaeopteryx", "C02-M8": "australopithecus", "C02-M9": "ichthyosaurus"},
    "vestigial": {"key": "appendix", "C02-M10": "heart", "C02-M11": "liver", "C02-M12": "thumb"},
    "homologous": {"key": "same_plan_diff_use", "C02-M13": "diff_plan_same_use", "C02-M14": "same_both", "C02-M15": "non_functional"},
}
MODELS = mixed_models("C02", TABLE, 15)
