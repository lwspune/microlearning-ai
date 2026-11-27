"""C07 White blood cells and lymph: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "diapedesis": {"key": "leucocytes_c", "C07-M1": "erythrocytes_c", "C07-M2": "thrombocytes_c", "C07-M3": "adipocytes_c"},
    "largest": {"key": "monocyte_c", "C07-M4": "eosinophil_c", "C07-M5": "basophil_c", "C07-M6": "lymphocyte_c"},
    "fewer": {"key": "leucopenia_t", "C07-M7": "leucocytosis_t", "C07-M8": "anaemia_t", "C07-M9": "leukaemia_t"},
    "tissue": {"key": "interstitial_f", "C07-M10": "blood_f", "C07-M11": "lymph_f", "C07-M12": "water_f"},
    "lymph": {"key": "no_rbc_platelets", "C07-M13": "no_wbc", "C07-M14": "no_water", "C07-M15": "no_plasma"},
}
MODELS = mixed_models("C07", TABLE, 15)
