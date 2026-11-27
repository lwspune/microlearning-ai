"""C05 The flower: whorls, perianth and aestivation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "insertion": {"key": "epigynous_f", "C05-M1": "hypogynous_f", "C05-M2": "perigynous_f", "C05-M3": "half_inferior"},
    "tepal": {"key": "tepal_t", "C05-M4": "sepal_t", "C05-M5": "petal_t", "C05-M6": "perianth_t"},
    "lily_stamens": {"key": "epiphyllous_t", "C05-M7": "polyphyllous_t", "C05-M8": "gamophyllous_t", "C05-M9": "petaloid_t"},
    "keel": {"key": "keel_p", "C05-M10": "standard_p", "C05-M11": "wings_p", "C05-M12": "free_inner"},
    "sepaloid": {"key": "photosynthesis_t", "C05-M13": "pollination_t", "C05-M14": "pollen_t", "C05-M15": "ovules_t"},
}
MODELS = mixed_models("C05", TABLE, 15)
