"""C03 Nervous systems in animals: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "hydra": {"key": "nerve_net", "C03-M1": "ladder_type", "C03-M2": "ganglion_chain", "C03-M3": "brain_cord"},
    "flatworm": {"key": "ladder_type", "C03-M4": "nerve_net", "C03-M5": "ganglion_chain", "C03-M6": "brain_cord"},
    "ventral": {"key": "ventral_side", "C03-M7": "dorsal_side", "C03-M8": "lateral_side", "C03-M9": "no_cords"},
    "earthworm": {"key": "ganglion_chain", "C03-M10": "nerve_net", "C03-M11": "ladder_type", "C03-M12": "brain_cord"},
    "cns": {"key": "brain_spinal", "C03-M13": "cranial_spinal_nerves", "C03-M14": "brain_only", "C03-M15": "autonomic_only"},
}
MODELS = mixed_models("C03", TABLE, 15)
