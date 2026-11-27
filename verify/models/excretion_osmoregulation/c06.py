"""C06 Disorders and other excretory organs: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "urolithiasis": {"key": "kidney_stones", "C06-M1": "urea_blood", "C06-M2": "renal_failure", "C06-M3": "painful_urination"},
    "uremia": {"key": "uremia_t", "C06-M4": "urolithiasis_t", "C06-M5": "micturition_t", "C06-M6": "diabetes_insipidus"},
    "heparin": {"key": "prevent_clotting", "C06-M7": "removes_urea", "C06-M8": "matches_plasma", "C06-M9": "pumps_blood"},
    "holding": {"key": "no_hormones", "C06-M10": "no_urea_removal", "C06-M11": "needs_immunosuppressants", "C06-M12": "needs_donor"},
    "garlic": {"key": "lungs_t", "C06-M13": "kidneys_t", "C06-M14": "mouth_food", "C06-M15": "sweat_glands"},
}
MODELS = mixed_models("C06", TABLE, 15)
