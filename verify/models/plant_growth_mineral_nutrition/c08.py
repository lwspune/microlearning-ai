"""C08 The nitrogen cycle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "denitrification": {"key": "denitrification_p", "C08-M1": "ammonification_p", "C08-M2": "nitrification_p", "C08-M3": "fixation_p"},
    "atp": {"key": lambda v: Integer(0) + (16), "C08-M4": lambda v: Integer(0) + (8), "C08-M5": lambda v: Integer(0) + (32), "C08-M6": lambda v: Integer(0) + (2)},
    "ammonia": {"key": lambda v: Integer(0) + (8*v['n']), "C08-M7": lambda v: Integer(0) + (16*v['n']), "C08-M8": lambda v: Integer(0) + (v['n']/2), "C08-M9": lambda v: Integer(0) + (32*v['n'])},
    "nitrite": {"key": "nitrobacter_b", "C08-M10": "nitrosomonas_b", "C08-M11": "pseudomonas_b", "C08-M12": "rhizobium_b"},
    "heterocyst": {"key": "heterocyst_c", "C08-M13": "akinete_c", "C08-M14": "vegetative_c", "C08-M15": "root_nodule_c"},
}
MODELS = mixed_models("C08", TABLE, 15)
