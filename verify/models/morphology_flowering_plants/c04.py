"""C04 Inflorescence: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "oldest_racemose": {"key": "at_base", "C04-M1": "at_apex", "C04-M2": "in_middle", "C04-M3": "same_age"},
    "cymose_succession": {"key": "basipetal_s", "C04-M4": "acropetal_s", "C04-M5": "centripetal_s", "C04-M6": "all_together"},
    "solitary_cyme": {"key": "single_limited", "C04-M7": "single_unlimited", "C04-M8": "cluster_limited", "C04-M9": "one_per_plant"},
    "marigold": {"key": "inflorescence_t", "C04-M10": "one_flower", "C04-M11": "many_petals", "C04-M12": "solitary_cyme"},
    "ray_florets": {"key": "neuter_f", "C04-M13": "male_f", "C04-M14": "female_f", "C04-M15": "bisexual_f"},
}
MODELS = mixed_models("C04", TABLE, 15)
