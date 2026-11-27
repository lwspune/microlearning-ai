"""C07 The C₄ pathway: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "maize_wheat": {"key": "oaa_pga", "C07-M1": "pga_oaa", "C07-M2": "oaa_oaa", "C07-M3": "oaa_pep"},
    "acceptor": {"key": "pep_c", "C07-M4": "rubp_c", "C07-M5": "malic_acid", "C07-M6": "pyruvic_acid"},
    "returns": {"key": "pyruvic_acid", "C07-M7": "malic_acid", "C07-M8": "oaa_c", "C07-M9": "pga_3"},
    "carboxylase": {"key": "high_co2", "C07-M10": "no_oxygen", "C07-M11": "no_rubisco", "C07-M12": "pepco_removes_o2"},
    "c4_atp": {"key": lambda v: Integer(0) + (30*v['g']), "C07-M13": lambda v: Integer(0) + (18*v['g']), "C07-M14": lambda v: Integer(0) + (12*v['g']), "C07-M15": lambda v: Integer(0) + (18*v['g'] + 12)},
}
MODELS = mixed_models("C07", TABLE, 15)
