"""C05 Nervous system and compound eye: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "brain": {"key": "supra_oesophageal", "C05-M1": "sub_oesophageal", "C05-M2": "hypocerebral_g", "C05-M3": "thoracic_g"},
    "nature": {"key": "ventral_solid", "C05-M4": "dorsal_hollow", "C05-M5": "ventral_hollow", "C05-M6": "no_ganglia"},
    "cord": {"key": "nine_ganglia", "C05-M7": "thirteen_ganglia", "C05-M8": "three_ganglia", "C05-M9": "six_ganglia"},
    "ventricular": {"key": "ventricular_g", "C05-M10": "ingluvial_g", "C05-M11": "frontal_g", "C05-M12": "hypocerebral_g"},
    "eye": {"key": "mosaic_movement", "C05-M13": "single_sharp", "C05-M14": "simple_unit", "C05-M15": "sharp_less_motion"},
}
MODELS = mixed_models("C05", TABLE, 15)
