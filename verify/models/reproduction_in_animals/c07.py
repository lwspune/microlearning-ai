"""C07 Fertilization: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "nuclei": {"key": lambda v: Integer(0) + (1), "C07-M1": lambda v: Integer(0) + (2), "C07-M2": lambda v: Integer(0) + (4), "C07-M3": lambda v: Integer(0) + (8)},
    "site": {"key": "ampulla", "C07-M4": "uterus", "C07-M5": "isthmus", "C07-M6": "vagina"},
    "capacitation": {"key": "capacitation", "C07-M7": "spermiation", "C07-M8": "acrosome_reaction", "C07-M9": "implantation"},
    "acrosome_reaction": {"key": "lytic_enzymes", "C07-M10": "mitochondria_energy", "C07-M11": "tail_beats", "C07-M12": "egg_attracts"},
    "polyspermy": {"key": "cortical_reaction", "C07-M13": "acrosome_reaction", "C07-M14": "capacitation", "C07-M15": "cleavage"},
}
MODELS = mixed_models("C07", TABLE, 15)
