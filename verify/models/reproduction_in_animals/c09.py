"""C09 Gastrulation, pregnancy and the placenta: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "foetus": {"key": "eight_weeks", "C09-M1": "at_birth", "C09-M2": "at_implantation", "C09-M3": "at_fertilization"},
    "placenta": {"key": "placenta", "C09-M4": "umbilical_cord", "C09-M5": "amnion", "C09-M6": "yolk_sac"},
    "hcg": {"key": "hcg", "C09-M7": "fsh", "C09-M8": "oxytocin", "C09-M9": "testosterone"},
    "gastrula": {"key": "three_layers", "C09-M10": "hollow_ball", "C09-M11": "solid_ball", "C09-M12": "one_cell"},
    "zygote_embryo": {"key": "one_cell", "C09-M13": "many_cells", "C09-M14": "haploid", "C09-M15": "foetus"},
}
MODELS = mixed_models("C09", TABLE, 15)
