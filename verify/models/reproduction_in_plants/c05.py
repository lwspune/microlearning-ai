"""C05 The ovule and megasporogenesis: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "anatropous": {"key": "beside_funicle", "C05-M1": "opposite_funicle", "C05-M2": "at_chalaza", "C05-M3": "at_side"},
    "meiosis": {"key": "megaspore_mother_cell", "C05-M4": "megaspore", "C05-M5": "nucellus", "C05-M6": "integument"},
    "tetrad": {"key": "one_chalazal", "C05-M7": "all_four", "C05-M8": "one_micropylar", "C05-M9": "two_megaspores"},
    "seeds": {"key": lambda v: Integer(0) + (v['s'] + v['s']/4), "C05-M10": lambda v: Integer(0) + (v['s']), "C05-M11": lambda v: Integer(0) + (v['s']/4), "C05-M12": lambda v: Integer(0) + (2*v['s'])},
    "nucellus": {"key": "nucellus", "C05-M13": "chalaza", "C05-M14": "funicle", "C05-M15": "embryo_sac"},
}
MODELS = mixed_models("C05", TABLE, 15)
