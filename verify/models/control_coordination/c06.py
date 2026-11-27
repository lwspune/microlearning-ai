"""C06 The autonomic nervous system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "accident": {"key": "sympathetic_s", "C06-M1": "parasympathetic_s", "C06-M2": "somatic_s", "C06-M3": "voluntary_s"},
    "heart": {"key": "accelerates_h", "C06-M4": "slows_h", "C06-M5": "stops_h", "C06-M6": "no_effect"},
    "bladder": {"key": "contracts_b", "C06-M7": "relaxes_b", "C06-M8": "no_effect", "C06-M9": "blocks_urine"},
    "fibres": {"key": "noradrenaline_t", "C06-M10": "acetylcholine_t", "C06-M11": "dopamine_t", "C06-M12": "insulin_t"},
    "medulla": {"key": "same_hormones", "C06-M13": "secretes_cortisol", "C06-M14": "slows_heart", "C06-M15": "pituitary_control"},
}
MODELS = mixed_models("C06", TABLE, 15)
