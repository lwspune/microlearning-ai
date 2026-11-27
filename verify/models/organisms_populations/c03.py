"""C03 Population attributes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "population": {"key": "same_species_area", "C03-M1": "different_species", "C03-M2": "all_components", "C03-M3": "one_individual"},
    "ideal_births": {"key": "absolute_natality", "C03-M4": "absolute_mortality", "C03-M5": "realized_natality", "C03-M6": "realized_mortality"},
    "real_deaths": {"key": "realized_mortality", "C03-M7": "absolute_mortality", "C03-M8": "absolute_natality", "C03-M9": "realized_natality"},
    "emigration": {"key": "leave_habitat", "C03-M10": "enter_habitat", "C03-M11": "births_e", "C03-M12": "deaths_e"},
    "change": {"key": lambda v: Integer(0) + (v['n'] + v['b'] + v['i'] - v['d'] - v['e']), "C03-M13": lambda v: Integer(0) + (v['n'] + v['b'] + v['i'] + v['d'] + v['e']), "C03-M14": lambda v: Integer(0) + (v['n'] + v['b'] - v['d']), "C03-M15": lambda v: Integer(0) + (v['n'] + v['b'] + v['e'] - v['d'] - v['i'])},
}
MODELS = mixed_models("C03", TABLE, 15)
