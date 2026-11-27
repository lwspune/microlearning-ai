"""C05 Joints: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "nasal": {"key": "butt_joint", "C05-M1": "scarf_joint", "C05-M2": "lap_joint", "C05-M3": "serrate_joint"},
    "synchondrosis": {"key": "hyaline_cartilage", "C05-M4": "fibrocartilage_t", "C05-M5": "synovial_fluid", "C05-M6": "ligament_t"},
    "disc": {"key": "symphysis_t", "C05-M7": "synchondrosis_t", "C05-M8": "suture_t", "C05-M9": "synovial_joint"},
    "secretes": {"key": "synovial_membrane", "C05-M10": "articular_cartilage", "C05-M11": "fibrous_layer", "C05-M12": "ligament_s"},
    "biceps": {"key": "elbow_only", "C05-M13": "shoulder_moves", "C05-M14": "all_move", "C05-M15": "wrist_moves"},
}
MODELS = mixed_models("C05", TABLE, 15)
