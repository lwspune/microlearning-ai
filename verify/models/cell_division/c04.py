"""C04 Meiosis II and its significance: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "link": {"key": "interkinesis_s", "C04-M1": "interphase_one", "C04-M2": "interphase_two", "C04-M3": "anaphase_one"},
    "sperms": {"key": lambda v: Integer(0) + (v['s']/4), "C04-M4": lambda v: Integer(0) + (v['s']/2), "C04-M5": lambda v: Integer(0) + (v['s']), "C04-M6": lambda v: Integer(0) + (v['s']/8)},
    "pollen": {"key": lambda v: Integer(0) + (v['n']/2), "C04-M7": lambda v: Integer(0) + (v['n']), "C04-M8": lambda v: Integer(0) + (2*v['n']), "C04-M9": lambda v: Integer(0) + (v['n']/4)},
    "evolution": {"key": "crossing_variation", "C04-M10": "keeps_identical", "C04-M11": "doubles_chromosomes", "C04-M12": "no_role"},
    "linked": {"key": "crossing_over", "C04-M13": "mitosis_only", "C04-M14": "synapsis_only", "C04-M15": "never_separate"},
}
MODELS = mixed_models("C04", TABLE, 15)
