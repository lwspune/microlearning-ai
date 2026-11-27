"""C07 Muscular tissue: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "pupil": {"key": "smooth_muscle", "C07-M1": "skeletal_muscle", "C07-M2": "cardiac_muscle", "C07-M3": "neuron_only"},
    "smooth_fibre": {"key": "spindle_single", "C07-M4": "syncytial_many", "C07-M5": "striated_bands", "C07-M6": "attached_bones"},
    "skeletal": {"key": "quick_voluntary", "C07-M7": "slow_involuntary", "C07-M8": "autonomic_t", "C07-M9": "more_actin"},
    "discs": {"key": "quick_transfer", "C07-M10": "bone_attachment", "C07-M11": "voluntary_control", "C07-M12": "forming_striations"},
    "myogenic": {"key": "self_impulse", "C07-M13": "nerve_starts", "C07-M14": "voluntary_heart", "C07-M15": "smooth_wall"},
}
MODELS = mixed_models("C07", TABLE, 15)
