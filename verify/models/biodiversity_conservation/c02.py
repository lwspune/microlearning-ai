"""C02 Loss of biodiversity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "terror": {"key": "water_hyacinth", "C02-M1": "algal_bloom", "C02-M2": "increased_bod", "C02-M3": "eutrophication_t"},
    "invasive": {"key": "parthenium_p", "C02-M4": "gloriosa_p", "C02-M5": "michelia_p", "C02-M6": "sansevieria_p"},
    "host": {"key": "coextinction_c", "C02-M7": "overexploitation_c", "C02-M8": "alien_invasion", "C02-M9": "habitat_loss"},
    "prime": {"key": "habitat_loss", "C02-M10": "overexploitation_c", "C02-M11": "alien_invasion", "C02-M12": "coextinction_c"},
    "ew": {"key": "captivity_only", "C02-M13": "fully_extinct", "C02-M14": "endangered_wild", "C02-M15": "least_concern"},
}
MODELS = mixed_models("C02", TABLE, 15)
