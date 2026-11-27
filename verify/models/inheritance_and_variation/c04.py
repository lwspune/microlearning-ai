"""C04 Back cross and test cross: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "name": {"key": "test_cross", "C04-M1": "back_cross_any", "C04-M2": "reciprocal_cross", "C04-M3": "monohybrid_cross"},
    "half": {"key": "heterozygous", "C04-M4": "homozygous_dominant", "C04-M5": "homozygous_recessive", "C04-M6": "pure_line"},
    "all": {"key": "homozygous_dominant", "C04-M7": "heterozygous", "C04-M8": "recessive", "C04-M9": "cannot_tell"},
    "dihybrid": {"key": "one_one_one_one", "C04-M10": "nine_three_three_one", "C04-M11": "three_one", "C04-M12": "one_two_one"},
    "back": {"key": "back_either_parent", "C04-M13": "test_with_dominant", "C04-M14": "same_thing", "C04-M15": "back_unrelated"},
}
MODELS = mixed_models("C04", TABLE, 15)
