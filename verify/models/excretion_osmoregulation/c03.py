"""C03 Urine formation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "deproteinised": {"key": "bowman_capsule", "C03-M1": "glomerular_capillaries", "C03-M2": "descending_limb", "C03-M3": "ascending_limb"},
    "glucose": {"key": "proximal_tubule", "C03-M4": "henle_loop", "C03-M5": "dct_t", "C03-M6": "collecting_tubule"},
    "per_day": {"key": lambda v: Integer(0) + (v['r']*60*24/1000), "C03-M7": lambda v: Integer(0) + (v['r']*60/1000), "C03-M8": lambda v: Integer(0) + (v['r']*24/1000), "C03-M9": lambda v: Integer(0) + (v['r']*60*24)},
    "opposing": {"key": lambda v: Integer(0) + (v['g'] - v['e']), "C03-M10": lambda v: Integer(0) + (v['g'] + v['e']), "C03-M11": lambda v: Integer(0) + (v['e']), "C03-M12": lambda v: Integer(0) + ((v['g'] - v['e'])/2)},
    "secretion": {"key": "dct_collecting", "C03-M13": "henle_loop", "C03-M14": "bowman_capsule", "C03-M15": "urinary_bladder"},
}
MODELS = mixed_models("C03", TABLE, 15)
