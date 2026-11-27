"""C06 Placentation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "define": {"key": "ovules_placenta", "C06-M1": "sepals_bud", "C06-M2": "leaves_stem", "C06-M3": "flowers_axis"},
    "china_rose": {"key": "axile_p", "C06-M4": "free_central_p", "C06-M5": "parietal_p", "C06-M6": "marginal_p"},
    "papaya": {"key": "parietal_p", "C06-M7": "axile_p", "C06-M8": "marginal_p", "C06-M9": "basal_p"},
    "single_ovule": {"key": "basal_p", "C06-M10": "free_central_p", "C06-M11": "marginal_p", "C06-M12": "axile_p"},
    "free_axis": {"key": "free_central_p", "C06-M13": "axile_p", "C06-M14": "basal_p", "C06-M15": "parietal_p"},
}
MODELS = mixed_models("C06", TABLE, 15)
