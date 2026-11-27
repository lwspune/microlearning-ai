"""C04 Ecological pyramids: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "largest": {"key": "decomposers_l", "C04-M1": "producers_l", "C04-M2": "primary_l", "C04-M3": "secondary_l"},
    "numbers": {"key": "single_tree", "C04-M4": "grassland_e", "C04-M5": "pond_e", "C04-M6": "ocean_e"},
    "biomass": {"key": "ocean_e", "C04-M7": "grassland_e", "C04-M8": "forest_e", "C04-M9": "single_tree"},
    "energy": {"key": "always_upright", "C04-M10": "always_inverted", "C04-M11": "either_way", "C04-M12": "spindle_shaped"},
    "elton": {"key": "elton_s", "C04-M13": "lindeman_s", "C04-M14": "odum_s", "C04-M15": "darwin_s"},
}
MODELS = mixed_models("C04", TABLE, 15)
