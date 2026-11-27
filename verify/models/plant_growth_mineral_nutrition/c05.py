"""C05 Cytokinins, ethylene and abscisic acid: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "banana": {"key": "ethylene_h", "C05-M1": "auxin_h", "C05-M2": "cytokinin_h", "C05-M3": "gibberellin_h"},
    "aba": {"key": "leaf_fall_dormancy", "C05-M4": "cell_division", "C05-M5": "shoot_elongation", "C05-M6": "cell_elongation_wall"},
    "stress": {"key": "abscisic_h", "C05-M7": "ethylene_h", "C05-M8": "auxin_h", "C05-M9": "cytokinin_h"},
    "ratio": {"key": "shoot_buds", "C05-M10": "roots_form", "C05-M11": "callus_only", "C05-M12": "fruit_ripens"},
    "senescence": {"key": "cytokinin_h", "C05-M13": "ethylene_h", "C05-M14": "abscisic_h", "C05-M15": "auxin_h"},
}
MODELS = mixed_models("C05", TABLE, 15)
