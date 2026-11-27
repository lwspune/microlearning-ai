"""C05 Mutualism and commensalism: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "clownfish": {"key": "commensalism_i", "C05-M1": "mutualism_i", "C05-M2": "parasitism_i", "C05-M3": "amensalism_i"},
    "orchid": {"key": "commensalism_i", "C05-M4": "parasitism_i", "C05-M5": "amensalism_i", "C05-M6": "mutualism_i"},
    "lichen": {"key": "mutualism_i", "C05-M7": "commensalism_i", "C05-M8": "parasitism_i", "C05-M9": "competition_i"},
    "hummingbird": {"key": "mutualism_i", "C05-M10": "commensalism_i", "C05-M11": "predation_i", "C05-M12": "parasitism_i"},
    "define": {"key": "one_gains_other_neutral", "C05-M13": "both_gain", "C05-M14": "one_gains_other_harmed", "C05-M15": "both_harmed"},
}
MODELS = mixed_models("C05", TABLE, 15)
