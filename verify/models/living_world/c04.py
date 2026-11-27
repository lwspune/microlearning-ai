"""C04 Conserving biodiversity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "groves": {"key": "in_situ_c", "C04-M1": "ex_situ_c", "C04-M2": "zoo_c", "C04-M3": "museum_c"},
    "zoo": {"key": "ex_situ_c", "C04-M4": "in_situ_c", "C04-M5": "sacred_grove_c", "C04-M6": "national_park_c"},
    "shells": {"key": "overexploitation_c", "C04-M7": "beach_beauty", "C04-M8": "toxic_shells", "C04-M9": "tourist_safety"},
    "causes": {"key": "population_overuse", "C04-M10": "natural_only", "C04-M11": "protection_laws", "C04-M12": "gardens_zoos"},
    "individual": {"key": "leave_wild_alone", "C04-M13": "buy_wild_pets", "C04-M14": "more_plastic", "C04-M15": "clear_land"},
}
MODELS = mixed_models("C04", TABLE, 15)
