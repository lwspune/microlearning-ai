"""C02 Light and pigments: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "green": {"key": "green_not_absorbed", "C02-M1": "green_absorbed", "C02-M2": "emits_green", "C02-M3": "absorbs_all"},
    "action": {"key": "rate_measured", "C02-M4": "pigment_absorption", "C02-M5": "green_peak", "C02-M6": "one_pigment"},
    "absorb": {"key": "blue_red", "C02-M7": "green_light", "C02-M8": "red_only", "C02-M9": "blue_only"},
    "antenna": {"key": "more_wavelengths", "C02-M10": "each_centre", "C02-M11": "stores_food", "C02-M12": "makes_atp"},
    "no_accessory": {"key": "less_light_used", "C02-M13": "stops_completely", "C02-M14": "no_change", "C02-M15": "rate_rises"},
}
MODELS = mixed_models("C02", TABLE, 15)
