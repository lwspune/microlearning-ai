"""C06 Nutritional and digestive disorders: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "protein": {"key": "kwashiorkor_t", "C06-M1": "jaundice_t", "C06-M2": "cirrhosis_t", "C06-M3": "pancreatitis_t"},
    "symptom": {"key": "oedema_t", "C06-M4": "yellow_eyes", "C06-M5": "whitish_stool", "C06-M6": "overweight_t"},
    "pigment": {"key": "bilirubin_t", "C06-M7": "haemoglobin_t", "C06-M8": "glycogen_t", "C06-M9": "urea_t"},
    "toxic": {"key": "fat_soluble", "C06-M10": "water_soluble", "C06-M11": "both_forms", "C06-M12": "neither_form"},
    "fatty": {"key": "steatosis_t", "C06-M13": "cirrhosis_t", "C06-M14": "fibrosis_t", "C06-M15": "alcoholic_hepatitis"},
}
MODELS = mixed_models("C06", TABLE, 15)
