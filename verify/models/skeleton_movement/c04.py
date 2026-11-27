"""C04 Axial and appendicular skeleton: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "ankle": {"key": "tarsals_t", "C04-M1": "carpals_t", "C04-M2": "metacarpals_t", "C04-M3": "metatarsals_t"},
    "atlas": {"key": "ring_no_centrum", "C04-M4": "odontoid_process", "C04-M5": "second_cervical", "C04-M6": "pivot_bone"},
    "cord": {"key": "vertebral_artery", "C04-M7": "spinal_cord_a", "C04-M8": "odontoid_axis", "C04-M9": "occipital_condyle"},
    "lever": {"key": "class_one", "C04-M10": "class_two", "C04-M11": "class_three", "C04-M12": "no_lever"},
    "foramen": {"key": "vertebral_artery", "C04-M13": "spinal_cord", "C04-M14": "odontoid_peg", "C04-M15": "transverse_ligament"},
}
MODELS = mixed_models("C04", TABLE, 15)
