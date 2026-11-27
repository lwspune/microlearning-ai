"""C05 Cranial nerves and reflexes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "not_sensory": {"key": "nerve_iii", "C05-M1": "nerve_i", "C05-M2": "nerve_ii", "C05-M3": "nerve_viii"},
    "facial": {"key": "mixed_n", "C05-M4": "sensory_n", "C05-M5": "motor_n", "C05-M6": "autonomic_n"},
    "eighth": {"key": "auditory_n", "C05-M7": "facial_n", "C05-M8": "abducens_n", "C05-M9": "glossopharyngeal_n"},
    "centre": {"key": "spinal_cord", "C05-M10": "cerebrum_b", "C05-M11": "cerebellum_b", "C05-M12": "pituitary_b"},
    "conditioned": {"key": "conditioned_r", "C05-M13": "unconditioned_r", "C05-M14": "voluntary_r", "C05-M15": "hormonal_r"},
}
MODELS = mixed_models("C05", TABLE, 15)
