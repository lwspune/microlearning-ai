"""C02 The flower and its sex organs: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "male": {"key": "androecium", "C02-M1": "gynoecium", "C02-M2": "corolla", "C02-M3": "calyx"},
    "pollen": {"key": "anther", "C02-M4": "ovule", "C02-M5": "stigma", "C02-M6": "filament"},
    "ovules": {"key": "ovary", "C02-M7": "anther", "C02-M8": "style", "C02-M9": "stigma"},
    "receives": {"key": "stigma", "C02-M10": "ovary", "C02-M11": "style", "C02-M12": "filament"},
    "represents": {"key": "male_gametophyte", "C02-M13": "male_gamete", "C02-M14": "microsporangium", "C02-M15": "female_gametophyte"},
}
MODELS = mixed_models("C02", TABLE, 15)
