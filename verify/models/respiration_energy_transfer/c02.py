"""C02 Glycolysis: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "site": {"key": "cytoplasm_s", "C02-M1": "matrix_s", "C02-M2": "inner_membrane", "C02-M3": "chloroplast_s"},
    "nadh": {"key": lambda v: Integer(0) + (2*v['g']), "C02-M4": lambda v: Integer(0) + (v['g']), "C02-M5": lambda v: Integer(0) + (4*v['g']), "C02-M6": lambda v: Integer(0) + (6*v['g'])},
    "net": {"key": lambda v: Integer(0) + (v['f'] - v['u']), "C02-M7": lambda v: Integer(0) + (v['f']), "C02-M8": lambda v: Integer(0) + (v['f'] + v['u']), "C02-M9": lambda v: Integer(0) + (v['f'] - v['u'] + 3*v['n'])},
    "common_step": {"key": "both_resp", "C02-M10": "aerobic_only", "C02-M11": "anaerobic_only", "C02-M12": "photosynthesis_t"},
    "split": {"key": "g3p_dhap", "C02-M13": "two_pyruvate", "C02-M14": "two_bpg", "C02-M15": "two_acetyl_coa"},
}
MODELS = mixed_models("C02", TABLE, 15)
