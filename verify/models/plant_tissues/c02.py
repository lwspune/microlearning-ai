"""C02 Simple permanent tissues: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "collenchyma": {"key": "living_t", "C02-M1": "dead_t", "C02-M2": "living_and_dead", "C02-M3": "meristematic_t"},
    "lignin": {"key": "uniform_lignin", "C02-M4": "corner_pectin", "C02-M5": "thin_cellulose", "C02-M6": "suberin_wall"},
    "mature_scl": {"key": "dead_narrow", "C02-M7": "living_thick", "C02-M8": "living_thin", "C02-M9": "dead_wide"},
    "jute": {"key": "sclerenchyma_f", "C02-M10": "collenchyma_s", "C02-M11": "parenchyma_s", "C02-M12": "xylem_vessels"},
    "chloro": {"key": "chlorenchyma_t", "C02-M13": "collenchyma_s", "C02-M14": "sclerenchyma_s", "C02-M15": "epidermal_c"},
}
MODELS = mixed_models("C02", TABLE, 15)
