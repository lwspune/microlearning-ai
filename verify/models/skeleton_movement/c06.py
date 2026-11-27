"""C06 Disorders of muscles and bones: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "menopause": {"key": "less_estrogen", "C06-M1": "more_estrogen", "C06-M2": "more_calcium", "C06-M3": "regular_exercise"},
    "parathormone": {"key": "osteoporosis_t", "C06-M4": "gout_t", "C06-M5": "rheumatoid_arthritis", "C06-M6": "gulls_disease"},
    "report": {"key": "gout_r", "C06-M7": "osteoporosis_r", "C06-M8": "rheumatoid_r", "C06-M9": "fatigue_r"},
    "sprain": {"key": "ligaments_t", "C06-M10": "bone_t", "C06-M11": "cartilage_t", "C06-M12": "muscle_t"},
    "salt": {"key": "osmosis_t", "C06-M13": "plasmolysis_t", "C06-M14": "electrolysis_t", "C06-M15": "photolysis_t"},
}
MODELS = mixed_models("C06", TABLE, 15)
