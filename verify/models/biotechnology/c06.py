"""C06 Transgenic animals and gene therapy: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "mice": {"key": "carry_oncogene", "C06-M1": "resist_cancer", "C06-M2": "make_insulin", "C06-M3": "larger_size"},
    "germline": {"key": "heritable_ethics", "C06-M4": "ineffective_t", "C06-M5": "too_cheap", "C06-M6": "animals_only"},
    "somatic": {"key": "only_patient", "C06-M7": "descendants_too", "C06-M8": "whole_population", "C06-M9": "only_embryos"},
    "therapy": {"key": "replace_gene", "C06-M10": "drug_therapy", "C06-M11": "organ_transplant", "C06-M12": "vaccination_only"},
    "pigs": {"key": "heart_transplant", "C06-M13": "wool_p", "C06-M14": "lac_p", "C06-M15": "silk_p"},
}
MODELS = mixed_models("C06", TABLE, 15)
