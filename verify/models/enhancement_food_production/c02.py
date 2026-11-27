"""C02 Tissue culture and single cell protein: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "explant": {"key": "explant_t", "C02-M1": "callus_t", "C02-M2": "clone_t", "C02-M3": "medium_t"},
    "callus": {"key": "callus_t", "C02-M4": "explant_t", "C02-M5": "embryo_t", "C02-M6": "meristem_t"},
    "micro": {"key": "rapid_many", "C02-M7": "needs_seeds", "C02-M8": "one_season", "C02-M9": "variable_offspring"},
    "alga": {"key": "spirulina_o", "C02-M10": "aspergillus_o", "C02-M11": "candida_o", "C02-M12": "trichoderma_o"},
    "candida": {"key": "yeast_o", "C02-M13": "alga_o", "C02-M14": "bacterium_o", "C02-M15": "protozoan_o"},
}
MODELS = mixed_models("C02", TABLE, 15)
