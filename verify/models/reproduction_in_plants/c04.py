"""C04 The male gametophyte: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "first": {"key": "vegetative_generative", "C04-M1": "two_male_gametes", "C04-M2": "four_microspores", "C04-M3": "two_equal_cells"},
    "gametes": {"key": "generative_cell", "C04-M4": "vegetative_cell", "C04-M5": "tapetum_cells", "C04-M6": "mother_cell"},
    "meioses": {"key": lambda v: Integer(0) + (v['g']/8), "C04-M7": lambda v: Integer(0) + (v['g']/2), "C04-M8": lambda v: Integer(0) + (v['g']/4), "C04-M9": lambda v: Integer(0) + (v['g'])},
    "grains": {"key": lambda v: Integer(0) + (4*v['n']), "C04-M10": lambda v: Integer(0) + (v['n']), "C04-M11": lambda v: Integer(0) + (2*v['n']), "C04-M12": lambda v: Integer(0) + (8*v['n'])},
    "tube": {"key": "vegetative_nucleus", "C04-M13": "generative_cell", "C04-M14": "male_gametes", "C04-M15": "exine"},
}
MODELS = mixed_models("C04", TABLE, 15)
