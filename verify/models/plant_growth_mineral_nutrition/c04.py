"""C04 Auxins and gibberellins: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "iaa": {"key": "indole_acetic", "C04-M1": "indole_butyric", "C04-M2": "indole_amino", "C04-M3": "inositol_acetic"},
    "cuttings": {"key": "auxin_h", "C04-M4": "gibberellin_h", "C04-M5": "ethylene_h", "C04-M6": "abscisic_h"},
    "precursor": {"key": "tryptophan_aa", "C04-M7": "tyrosine_aa", "C04-M8": "glycine_aa", "C04-M9": "methionine_aa"},
    "apical": {"key": "auxin_h", "C04-M10": "cytokinin_h", "C04-M11": "gibberellin_h", "C04-M12": "ethylene_h"},
    "bolting": {"key": "gibberellin_h", "C04-M13": "auxin_h", "C04-M14": "cytokinin_h", "C04-M15": "abscisic_h"},
}
MODELS = mixed_models("C04", TABLE, 15)
