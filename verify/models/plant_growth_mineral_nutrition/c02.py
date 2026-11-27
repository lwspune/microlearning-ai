"""C02 Growth rate: arithmetic and geometric: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "geometric": {"key": "geometric_growth", "C02-M1": "arithmetic_growth", "C02-M2": "growth_ratio", "C02-M3": "qualitative_growth"},
    "cells": {"key": lambda v: Integer(0) + (2**v['n']), "C02-M4": lambda v: Integer(0) + (2*v['n']), "C02-M5": lambda v: Integer(0) + (v['n'] + 1), "C02-M6": lambda v: Integer(0) + (2**(v['n'] - 1))},
    "arithmetic": {"key": "one_divides", "C02-M7": "both_divide", "C02-M8": "neither_divides", "C02-M9": "divide_once"},
    "rgr": {"key": lambda v: Integer(0) + ((v['b'] - v['a'])*100/v['a']), "C02-M10": lambda v: Integer(0) + (v['b'] - v['a']), "C02-M11": lambda v: Integer(0) + ((v['b'] - v['a'])*100/v['b']), "C02-M12": lambda v: Integer(0) + (v['b']*100/v['a'])},
    "agr": {"key": "absolute_rate", "C02-M13": "relative_rate", "C02-M14": "grand_period", "C02-M15": "efficiency_index"},
}
MODELS = mixed_models("C02", TABLE, 15)
