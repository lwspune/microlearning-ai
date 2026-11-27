"""C02 The human excretory system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "bowman": {"key": "cortex_t", "C02-M1": "medulla_t", "C02-M2": "pelvis_t", "C02-M3": "pyramids_t"},
    "pct_cells": {"key": "brush_border", "C02-M4": "ciliated_cells", "C02-M5": "squamous_cells", "C02-M6": "columnar_cells"},
    "calyx": {"key": "collects_urine", "C02-M7": "joins_ureter", "C02-M8": "in_cortex", "C02-M9": "receives_bertini"},
    "not_part": {"key": "malpighian_tubule", "C02-M10": "malpighian_body", "C02-M11": "glomerulus_t", "C02-M12": "loop_henle"},
    "micturition": {"key": "urination_t", "C02-M13": "urine_formation", "C02-M14": "uremia_t", "C02-M15": "urolithiasis_t"},
}
MODELS = mixed_models("C02", TABLE, 15)
