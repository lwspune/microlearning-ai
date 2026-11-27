"""C06 Parasitism, predation and defences: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "parasitism": {"key": "gain_harm", "C06-M1": "one_gains_only", "C06-M2": "both_gain", "C06-M3": "gain_neutral"},
    "koel": {"key": "brood_parasitism", "C06-M4": "mutualism_i", "C06-M5": "commensalism_i", "C06-M6": "predation_i"},
    "biocontrol": {"key": "predation_i", "C06-M7": "competition_i", "C06-M8": "mutualism_i", "C06-M9": "commensalism_i"},
    "thorns": {"key": "morphological_d", "C06-M10": "chemical_d", "C06-M11": "camouflage_d", "C06-M12": "mimicry_d"},
    "blend": {"key": "camouflage_d", "C06-M13": "mimicry_d", "C06-M14": "chemical_d", "C06-M15": "commensalism_i"},
}
MODELS = mixed_models("C06", TABLE, 15)
