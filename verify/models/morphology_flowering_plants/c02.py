"""C02 The stem and its modifications: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "beet_arum": {"key": "beet_root_arum_stem", "C02-M1": "beet_stem_arum_root", "C02-M2": "beet_stem_arum_leaf", "C02-M3": "beet_stem_arum_infl"},
    "rhizome": {"key": "nodes_buds", "C02-M4": "stores_food", "C02-M5": "underground_t", "C02-M6": "brown_colour"},
    "stolon": {"key": "stolon_s", "C02-M7": "rhizome_s", "C02-M8": "bulb_s", "C02-M9": "stem_tendril"},
    "thorn": {"key": "apical_bud", "C02-M10": "whole_leaf", "C02-M11": "root_t", "C02-M12": "leaf_apex"},
    "phylloclade": {"key": "phylloclade_s", "C02-M13": "leaf_t", "C02-M14": "stem_tendril", "C02-M15": "rhizome_s"},
}
MODELS = mixed_models("C02", TABLE, 15)
