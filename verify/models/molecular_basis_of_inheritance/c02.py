"""C02 Structure of DNA and RNA: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "uracil": {"key": "uracil", "C02-M1": "guanine", "C02-M2": "cytosine", "C02-M3": "adenine"},
    "pairing": {"key": "thymine_two", "C02-M4": "guanine", "C02-M5": "cytosine", "C02-M6": "thymine_three"},
    "chargaff": {"key": lambda v: Integer(0) + ((100 - 2*v['a'])/2), "C02-M7": lambda v: Integer(0) + (v['a']), "C02-M8": lambda v: Integer(0) + (100 - 2*v['a']), "C02-M9": lambda v: Integer(0) + (100 - v['a'])},
    "antiparallel": {"key": "antiparallel", "C02-M10": "parallel", "C02-M11": "random_direction", "C02-M12": "end_to_end"},
    "strands": {"key": "dna_double_rna_single", "C02-M13": "both_double", "C02-M14": "both_single", "C02-M15": "dna_single_rna_double"},
}
MODELS = mixed_models("C02", TABLE, 15)
