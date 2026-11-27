"""C02 Whittaker's five kingdoms: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "whittaker": {"key": "whittaker_s", "C02-M1": "linnaeus_s", "C02-M2": "darwin_s", "C02-M3": "haeckel_s"},
    "riccia": {"key": "plantae_k", "C02-M4": "fungi_k", "C02-M5": "protista_k", "C02-M6": "monera_k"},
    "diatoms": {"key": "protista_k", "C02-M7": "monera_k", "C02-M8": "plantae_k", "C02-M9": "fungi_k"},
    "rhizopus": {"key": "fungi_k", "C02-M10": "plantae_k", "C02-M11": "monera_k", "C02-M12": "protista_k"},
    "viruses": {"key": "not_included", "C02-M13": "monera_k", "C02-M14": "protista_k", "C02-M15": "fungi_k"},
}
MODELS = mixed_models("C02", TABLE, 15)
