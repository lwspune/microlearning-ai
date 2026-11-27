"""C02 Sponges, cnidarians and comb jellies: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "minor": {"key": "comb_jelly", "C02-M1": "jelly_fish", "C02-M2": "herdmania_a", "C02-M3": "salpa_a"},
    "ostia": {"key": "porifera_p", "C02-M4": "cnidaria_p", "C02-M5": "ctenophora_p", "C02-M6": "echinodermata_p"},
    "comb": {"key": "ctenophora_p", "C02-M7": "cnidaria_p", "C02-M8": "porifera_p", "C02-M9": "annelida_p"},
    "support": {"key": "spicules_spongin", "C02-M10": "calcareous_ossicles", "C02-M11": "chitin_exoskeleton", "C02-M12": "bony_skeleton"},
    "aurelia": {"key": "medusa_f", "C02-M13": "polyp_f", "C02-M14": "sponge_f", "C02-M15": "comb_jelly"},
}
MODELS = mixed_models("C02", TABLE, 15)
