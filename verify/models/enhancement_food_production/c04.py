"""C04 Fisheries, bee keeping and lac culture: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "estuary": {"key": "river_meets_sea", "C04-M1": "freshwater_lake", "C04-M2": "deep_sea", "C04-M3": "farm_pond"},
    "rockbee": {"key": "apis_dorsata", "C04-M4": "apis_mellifera", "C04-M5": "apis_indica", "C04-M6": "apis_florea"},
    "lac": {"key": "tachardia_lacca", "C04-M7": "apis_mellifera", "C04-M8": "bombyx_mori", "C04-M9": "culex_m"},
    "shellac": {"key": "purified_lac", "C04-M10": "raw_lac", "C04-M11": "beeswax_p", "C04-M12": "silk_gum"},
    "byproducts": {"key": "fish_byproducts", "C04-M13": "lac_products", "C04-M14": "silk_products", "C04-M15": "honey_products"},
}
MODELS = mixed_models("C04", TABLE, 15)
