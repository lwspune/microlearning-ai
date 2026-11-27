"""C01 Levels and patterns of biodiversity: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "graph": {"key": "line_a_power", "C01-M1": "line_a_square", "C01-M2": "line_b_swapped", "C01-M3": "line_b_mixed"},
    "favour": {"key": "forest_canopy", "C01-M4": "invasive_species", "C01-M5": "glaciation_f", "C01-M6": "coextinction_f"},
    "tropics": {"key": "stable_sunny", "C01-M7": "colder_f", "C01-M8": "younger_f", "C01-M9": "less_sunlight"},
    "rivet": {"key": "significance_diversity", "C01-M10": "loss_biodiversity", "C01-M11": "biomagnification_f", "C01-M12": "species_area_f"},
    "sca": {"key": lambda v: Integer(0) + (v['c']*sqrt(v['a'])), "C01-M13": lambda v: Integer(0) + (v['c']*v['a']/2), "C01-M14": lambda v: Integer(0) + (v['c']*v['a']), "C01-M15": lambda v: Integer(0) + (v['c'] + sqrt(v['a']))},
}
MODELS = mixed_models("C01", TABLE, 15)
