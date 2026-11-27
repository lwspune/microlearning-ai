"""C08 Cleavage, blastocyst and implantation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "implantation": {"key": "implantation", "C08-M1": "fertilization", "C08-M2": "gestation", "C08-M3": "cleavage"},
    "day": {"key": lambda v: Integer(0) + (7), "C08-M4": lambda v: Integer(0) + (30), "C08-M5": lambda v: Integer(0) + (60), "C08-M6": lambda v: Integer(0) + (21)},
    "rauber": {"key": "cells_of_rauber", "C08-M7": "inner_cell_mass", "C08-M8": "blastomeres", "C08-M9": "morula"},
    "cleavage": {"key": "smaller_cells", "C08-M10": "larger_cells", "C08-M11": "meiosis", "C08-M12": "growth_between"},
    "inner": {"key": "embryo", "C08-M13": "placenta_only", "C08-M14": "chorion_only", "C08-M15": "nothing"},
}
MODELS = mixed_models("C08", TABLE, 15)
