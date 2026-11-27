"""C10 Adrenals, pancreas and gonads: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "insulin": {"key": "beta_c", "C10-M1": "alpha_c", "C10-M2": "delta_c", "C10-M3": "pp_c"},
    "pair": {"key": "insulin_pair", "C10-M4": "pth_pair", "C10-M5": "lh_pair", "C10-M6": "thyroxine_pair"},
    "follicle": {"key": "corpus_luteum", "C10-M7": "corpus_albicans", "C10-M8": "corpus_spongiosum", "C10-M9": "corpus_callosum"},
    "abortion": {"key": "progesterone_h", "C10-M10": "estrogen_h", "C10-M11": "relaxin_h", "C10-M12": "oxytocin_h"},
    "corticoids": {"key": "addisons_d", "C10-M13": "cushings_d", "C10-M14": "graves_d", "C10-M15": "diabetes_insipidus"},
}
MODELS = mixed_models("C10", TABLE, 15)
