"""C04 Population growth: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "agar": {"key": "exponential_g", "C04-M1": "logistic_g", "C04-M2": "verhulst_g", "C04-M3": "zero_g"},
    "j": {"key": "j_shaped", "C04-M4": "s_shaped", "C04-M5": "flat_line", "C04-M6": "bell_shaped"},
    "levels": {"key": "carrying_capacity", "C04-M7": "zero_population", "C04-M8": "no_limit", "C04-M9": "birth_rate_level"},
    "s": {"key": "s_shaped", "C04-M10": "j_shaped", "C04-M11": "straight_line", "C04-M12": "bell_shaped"},
    "doubling": {"key": lambda v: Integer(0) + (v['n']*2**v['t']), "C04-M13": lambda v: Integer(0) + (2*v['n']*v['t']), "C04-M14": lambda v: Integer(0) + (v['n']*v['t']), "C04-M15": lambda v: Integer(0) + (v['n']*2**(v['t'] - 1))},
}
MODELS = mixed_models("C04", TABLE, 15)
