"""C06 The Hardy–Weinberg principle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "q2": {"key": "q_squared", "C06-M1": "p_squared", "C06-M2": "pq", "C06-M3": "two_pq"},
    "q": {"key": lambda v: Integer(0) + (sqrt(v['f'])), "C06-M4": lambda v: Integer(0) + (v['f']), "C06-M5": lambda v: Integer(0) + (1 - v['f']), "C06-M6": lambda v: Integer(0) + (v['f']/2)},
    "carriers": {"key": lambda v: Integer(0) + (2*v['q']*(1 - v['q'])), "C06-M7": lambda v: Integer(0) + (v['q']*(1 - v['q'])), "C06-M8": lambda v: Integer(0) + (v['q']**2), "C06-M9": lambda v: Integer(0) + ((1 - v['q'])**2)},
    "constant": {"key": "random_mating", "C06-M10": "mutation", "C06-M11": "migration", "C06-M12": "non_random_mating"},
    "p": {"key": lambda v: Integer(0) + (1 - v['q']), "C06-M13": lambda v: Integer(0) + (v['q']), "C06-M14": lambda v: Integer(0) + (v['q']**2), "C06-M15": lambda v: Integer(0) + ((1 - v['q'])**2)},
}
MODELS = mixed_models("C06", TABLE, 15)
