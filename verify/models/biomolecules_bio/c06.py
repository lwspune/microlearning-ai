"""C06 Nucleic acids: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "chargaff": {"key": lambda v: Integer(0) + (50 - v['c']), "C06-M1": lambda v: Integer(0) + (100 - v['c']), "C06-M2": lambda v: Integer(0) + (100 - 2*v['c']), "C06-M3": lambda v: Integer(0) + (v['c'])},
    "gc": {"key": "three_h", "C06-M4": "two_h", "C06-M5": "one_h", "C06-M6": "four_h"},
    "rna": {"key": "ribose_uracil", "C06-M7": "deoxyribose_thymine", "C06-M8": "ribose_thymine", "C06-M9": "deoxyribose_uracil"},
    "mrna": {"key": "carries_code", "C06-M10": "carries_amino_acids", "C06-M11": "forms_ribosomes", "C06-M12": "stores_energy"},
    "nucleotide": {"key": "sugar_phosphate_base", "C06-M13": "sugar_base_only", "C06-M14": "amino_acid_phosphate", "C06-M15": "glycerol_fatty_acid"},
}
MODELS = mixed_models("C06", TABLE, 15)
