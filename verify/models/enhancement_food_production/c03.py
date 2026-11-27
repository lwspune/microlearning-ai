"""C03 Animal husbandry: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "moet": {"key": "hybrids_p", "C03-M1": "inbreeding_p", "C03-M2": "outbreeding_p", "C03-M3": "outcrossing_p"},
    "mule": {"key": "interspecific_p", "C03-M4": "inbreeding_p", "C03-M5": "insemination_p", "C03-M6": "outbreeding_p"},
    "breed": {"key": "related_descent", "C03-M7": "whole_species", "C03-M8": "hybrid_offspring", "C03-M9": "same_farm"},
    "ranikhet": {"key": "viral_d", "C03-M10": "bacterial_d", "C03-M11": "fungal_d", "C03-M12": "protozoan_d"},
    "superovulate": {"key": "fsh_like", "C03-M13": "insulin_h", "C03-M14": "oxytocin_h", "C03-M15": "thyroxine_h"},
}
MODELS = mixed_models("C03", TABLE, 15)
