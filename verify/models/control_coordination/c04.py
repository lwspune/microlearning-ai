"""C04 The human brain: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "contact": {"key": "pia_mater", "C04-M1": "cranium_b", "C04-M2": "dura_mater", "C04-M3": "arachnoid_m"},
    "csf": {"key": "choroid_plexus", "C04-M4": "dura_mater", "C04-M5": "cerebellum_b", "C04-M6": "pituitary_b"},
    "balance": {"key": "cerebellum_b", "C04-M7": "cerebrum_b", "C04-M8": "medulla_b", "C04-M9": "hypothalamus_b"},
    "medulla": {"key": "vital_centres", "C04-M10": "memory_centre", "C04-M11": "vision_centre", "C04-M12": "balance_centre"},
    "callosum": {"key": "joins_hemispheres", "C04-M13": "cerebellum_tree", "C04-M14": "pons_link", "C04-M15": "brain_cover"},
}
MODELS = mixed_models("C04", TABLE, 15)
