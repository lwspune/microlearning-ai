"""C05 ATP balance sheet and RQ: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "glyco_atp": {"key": lambda v: Integer(0) + (v['a'] + 3*v['n']), "C05-M1": lambda v: Integer(0) + (v['a']), "C05-M2": lambda v: Integer(0) + (v['a'] + 2*v['n']), "C05-M3": lambda v: Integer(0) + (2*v['a'] + 3*v['n'])},
    "krebs_atp": {"key": lambda v: Integer(0) + (v['t']*(3*3 + 2 + 1)), "C05-M4": lambda v: Integer(0) + (v['t']*(3 + 1 + 1)), "C05-M5": lambda v: Integer(0) + (v['t']*(3*3 + 3 + 1)), "C05-M6": lambda v: Integer(0) + (v['t']*(3*3 + 2))},
    "net_atp": {"key": lambda v: Integer(0) + (v['p'] - v['c']), "C05-M7": lambda v: Integer(0) + (v['p']), "C05-M8": lambda v: Integer(0) + (v['p'] + v['c']), "C05-M9": lambda v: Integer(0) + (v['c'])},
    "rq": {"key": lambda v: Integer(0) + (v['c']/v['o']), "C05-M10": lambda v: Integer(0) + (v['o']/v['c']), "C05-M11": lambda v: Integer(0) + (v['o'] - v['c']), "C05-M12": lambda v: Integer(0) + (v['c']/(v['c'] + v['o']))},
    "rq_fat": {"key": "less_than_one", "C05-M13": "equal_one", "C05-M14": "more_than_one", "C05-M15": "zero_t"},
}
MODELS = mixed_models("C05", TABLE, 15)
