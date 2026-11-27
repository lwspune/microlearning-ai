"""C08 Structure of the heart: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "ivc": {"key": "eustachian_v", "C08-M1": "bicuspid_v", "C08-M2": "tricuspid_v", "C08-M3": "thebesian_v"},
    "remnant": {"key": "ligamentum_arteriosum", "C08-M4": "chordae_tendinae", "C08-M5": "fossa_ovalis", "C08-M6": "coronary_sinus"},
    "thickest": {"key": "left_ventricle", "C08-M7": "right_ventricle", "C08-M8": "left_atrium", "C08-M9": "right_atrium"},
    "oxygen": {"key": "pulmonary_veins", "C08-M10": "pulmonary_artery", "C08-M11": "venae_cavae", "C08-M12": "coronary_sinus"},
    "chordae": {"key": "cuspid_valves", "C08-M13": "semilunar_valves", "C08-M14": "eustachian_thebesian", "C08-M15": "vein_valves"},
}
MODELS = mixed_models("C08", TABLE, 15)
