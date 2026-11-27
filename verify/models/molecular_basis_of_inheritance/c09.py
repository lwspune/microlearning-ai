"""C09 Genomes and the Human Genome Project: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "genome": {"key": "complete_set", "C09-M1": "one_gene", "C09-M2": "one_chromosome", "C09-M3": "all_proteins"},
    "year": {"key": lambda v: Integer(0) + (2003), "C09-M4": lambda v: Integer(0) + (1953), "C09-M5": lambda v: Integer(0) + (1990), "C09-M6": lambda v: Integer(0) + (2010)},
    "coding": {"key": "under_two", "C09-M7": "about_half", "C09-M8": "all_of_it", "C09-M9": "about_quarter"},
    "snp": {"key": "snps", "C09-M10": "vntrs", "C09-M11": "introns", "C09-M12": "codons"},
    "size": {"key": lambda v: Integer(0) + (3000000000), "C09-M13": lambda v: Integer(0) + (3000000), "C09-M14": lambda v: Integer(0) + (3000000000000), "C09-M15": lambda v: Integer(0) + (46)},
}
MODELS = mixed_models("C09", TABLE, 15)
