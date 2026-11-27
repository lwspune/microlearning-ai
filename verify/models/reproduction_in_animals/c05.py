"""C05 Oogenesis and the ovum: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "count": {"key": lambda v: Integer(0) + (v['p']), "C05-M1": lambda v: Integer(0) + (4*v['p']), "C05-M2": lambda v: Integer(0) + (2*v['p']), "C05-M3": lambda v: Integer(0) + (3*v['p'])},
    "arrest": {"key": "prophase_one", "C05-M4": "metaphase_two", "C05-M5": "interphase", "C05-M6": "anaphase_one"},
    "released": {"key": "secondary_oocyte", "C05-M7": "mature_ovum", "C05-M8": "primary_oocyte", "C05-M9": "oogonium"},
    "zona": {"key": "zona_pellucida", "C05-M10": "corona_radiata", "C05-M11": "theca_externa", "C05-M12": "vitelline_layer"},
    "polar": {"key": "unequal_division", "C05-M13": "equal_division", "C05-M14": "mitosis", "C05-M15": "no_cytokinesis"},
}
MODELS = mixed_models("C05", TABLE, 15)
