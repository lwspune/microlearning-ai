"""C09 Sex determination: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "father": {"key": "father_sperm", "C09-M1": "mother_egg", "C09-M2": "both_equally", "C09-M3": "environment"},
    "drone": {"key": "unfertilized_egg", "C09-M4": "fertilized_egg", "C09-M5": "royal_jelly", "C09-M6": "worker_egg"},
    "hetero": {"key": "male", "C09-M7": "female", "C09-M8": "both", "C09-M9": "neither"},
    "birds": {"key": "zw", "C09-M10": "xx", "C09-M11": "zz", "C09-M12": "xo"},
    "grasshopper": {"key": "xo", "C09-M13": "xy", "C09-M14": "xx_male", "C09-M15": "zw_male"},
}
MODELS = mixed_models("C09", TABLE, 15)
