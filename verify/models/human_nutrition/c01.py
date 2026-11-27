"""C01 Teeth and dentition: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "most": {"key": "molars_t", "C01-M1": "premolars_t", "C01-M2": "incisors_t", "C01-M3": "canines_t"},
    "hardest": {"key": "enamel_t", "C01-M4": "dentin_t", "C01-M5": "cementum_t", "C01-M6": "pulp_t"},
    "thecodont": {"key": "socket_jaw", "C01-M7": "two_sets", "C01-M8": "four_types", "C01-M9": "embedded_gum"},
    "diphyodont": {"key": "two_sets", "C01-M10": "four_types", "C01-M11": "socket_jaw", "C01-M12": "one_set"},
    "total": {"key": lambda v: Integer(0) + (4*(v['inc'] + v['can'] + v['pre'] + v['mol'])), "C01-M13": lambda v: Integer(0) + ((v['inc'] + v['can'] + v['pre'] + v['mol'])), "C01-M14": lambda v: Integer(0) + (2*(v['inc'] + v['can'] + v['pre'] + v['mol'])), "C01-M15": lambda v: Integer(0) + (8*(v['inc'] + v['can'] + v['pre'] + v['mol']))},
}
MODELS = mixed_models("C01", TABLE, 15)
