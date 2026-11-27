"""C05 The Calvin cycle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "first_product": {"key": "pga_3", "C05-M1": "rubp_c", "C05-M2": "oaa_c", "C05-M3": "six_carbon"},
    "reduce_phase": {"key": "glycolytic_reversal", "C05-M4": "carboxylation_c", "C05-M5": "regeneration_c", "C05-M6": "photolysis_c"},
    "atp_count": {"key": lambda v: Integer(0) + (3*v['n']), "C05-M7": lambda v: Integer(0) + (2*v['n']), "C05-M8": lambda v: Integer(0) + (v['n']), "C05-M9": lambda v: Integer(0) + (5*v['n'])},
    "turns": {"key": lambda v: Integer(0) + (6*v['g']), "C05-M10": lambda v: Integer(0) + (v['g']), "C05-M11": lambda v: Integer(0) + (3*v['g']), "C05-M12": lambda v: Integer(0) + (12*v['g'])},
    "regenerate": {"key": "accept_co2", "C05-M13": "makes_glucose", "C05-M14": "makes_atp", "C05-M15": "releases_oxygen"},
}
MODELS = mixed_models("C05", TABLE, 15)
