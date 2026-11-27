"""C05 Ecological succession: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "climax": {"key": "climax_c", "C05-M1": "end_c", "C05-M2": "final_c", "C05-M3": "dark_c"},
    "landslide": {"key": "primary_s", "C05-M4": "secondary_s", "C05-M5": "tertiary_s", "C05-M6": "climax_s"},
    "example": {"key": "volcanic_island", "C05-M7": "abandoned_field", "C05-M8": "burnt_savanna", "C05-M9": "cut_forest"},
    "aquatic": {"key": "phytoplankton_p", "C05-M10": "hydrilla_p", "C05-M11": "lichens_p", "C05-M12": "fishes_p"},
    "rock": {"key": "lichens_p", "C05-M13": "mosses_p", "C05-M14": "grasses_p", "C05-M15": "trees_p"},
}
MODELS = mixed_models("C05", TABLE, 15)
