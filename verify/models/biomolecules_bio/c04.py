"""C04 Lipids: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "essential": {"key": "arachidonic_f", "C04-M1": "oleic_f", "C04-M2": "stearic_f", "C04-M3": "palmitic_f"},
    "saturated": {"key": "no_double", "C04-M4": "has_double", "C04-M5": "triple_bonds", "C04-M6": "rings_f"},
    "phospholipid": {"key": "glycerol_two_fa_phosphate", "C04-M7": "glycerol_three_fa", "C04-M8": "glucose_phosphate", "C04-M9": "amino_acids_l"},
    "omega": {"key": "flax_seeds", "C04-M10": "yam_l", "C04-M11": "sugarcane_l", "C04-M12": "wheat_l"},
    "example": {"key": "palmitic_f", "C04-M13": "oleic_f", "C04-M14": "linoleic_f", "C04-M15": "linolenic_f"},
}
MODELS = mixed_models("C04", TABLE, 15)
