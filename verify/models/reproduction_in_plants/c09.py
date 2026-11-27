"""C09 Double fertilization: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "triple": {"key": "secondary_nucleus", "C09-M1": "egg_cell", "C09-M2": "synergid", "C09-M3": "antipodal"},
    "ploidy": {"key": lambda v: Integer(0) + (3*v['d']/2), "C09-M4": lambda v: Integer(0) + (v['d']), "C09-M5": lambda v: Integer(0) + (v['d']/2), "C09-M6": lambda v: Integer(0) + (2*v['d'])},
    "grains": {"key": lambda v: Integer(0) + (v['o']), "C09-M7": lambda v: Integer(0) + (v['o']/2), "C09-M8": lambda v: Integer(0) + (2*v['o']), "C09-M9": lambda v: Integer(0) + (v['o']/4)},
    "entry": {"key": "micropyle", "C09-M10": "chalaza", "C09-M11": "integument", "C09-M12": "funicle"},
    "siphonogamy": {"key": "siphonogamy", "C09-M13": "zoidogamy", "C09-M14": "syngamy", "C09-M15": "triple_fusion"},
}
MODELS = mixed_models("C09", TABLE, 15)
