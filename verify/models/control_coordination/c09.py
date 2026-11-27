"""C09 Pituitary, thyroid, parathyroid and thymus: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "bones": {"key": "gh_excess", "C09-M1": "gh_deficit", "C09-M2": "thyroxine_excess", "C09-M3": "pth_excess"},
    "adh": {"key": "diabetes_insipidus", "C09-M4": "diabetes_mellitus", "C09-M5": "myxoedema_d", "C09-M6": "addisons_d"},
    "parathyroid": {"key": "calcium_disturbed", "C09-M7": "early_ageing", "C09-M8": "myxoedema_d", "C09-M9": "high_bp"},
    "eyeballs": {"key": "exophthalmic_goitre", "C09-M10": "cretinism_d", "C09-M11": "myxoedema_d", "C09-M12": "simple_goitre"},
    "thymus": {"key": "thymus_g", "C09-M13": "pineal_g", "C09-M14": "thyroid_g", "C09-M15": "pituitary_g"},
}
MODELS = mixed_models("C09", TABLE, 15)
