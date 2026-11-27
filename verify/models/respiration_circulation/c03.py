"""C03 Breathing and lung volumes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "diaphragm": {"key": "flattens_down", "C03-M1": "domes_up", "C03-M2": "relaxes_r", "C03-M3": "unchanged_r"},
    "intercostal": {"key": "diaphragm_m", "C03-M4": "internal_abdominal", "C03-M5": "jaw_muscles", "C03-M6": "bronchial_muscles"},
    "irv": {"key": "irv_v", "C03-M7": "residual_v", "C03-M8": "erv_v", "C03-M9": "vital_capacity_v"},
    "vc": {"key": lambda v: Integer(0) + (v['t'] + v['i'] + v['e']), "C03-M10": lambda v: Integer(0) + (v['t'] + v['i']), "C03-M11": lambda v: Integer(0) + (v['t'] + v['i'] + v['e'] + v['r']), "C03-M12": lambda v: Integer(0) + (v['i'] + v['e'])},
    "membranes": {"key": lambda v: Integer(0) + (5), "C03-M13": lambda v: Integer(0) + (2), "C03-M14": lambda v: Integer(0) + (3), "C03-M15": lambda v: Integer(0) + (4)},
}
MODELS = mixed_models("C03", TABLE, 15)
