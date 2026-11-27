"""C02 Monohybrid cross, dominance and segregation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "tall": {"key": lambda v: Integer(0) + (3*v['n']/4), "C02-M1": lambda v: Integer(0) + (v['n']/2), "C02-M2": lambda v: Integer(0) + (v['n']/4), "C02-M3": lambda v: Integer(0) + (v['n'])},
    "genotypic": {"key": "one_two_one", "C02-M4": "three_one", "C02-M5": "nine_three", "C02-M6": "one_one"},
    "purity": {"key": "one_allele_each", "C02-M7": "alleles_blend", "C02-M8": "gametes_diploid", "C02-M9": "dominant_only"},
    "f1": {"key": "all_tall", "C02-M10": "half_dwarf", "C02-M11": "all_dwarf", "C02-M12": "intermediate"},
    "homo_tall": {"key": lambda v: Integer(0) + (v['n']/4), "C02-M13": lambda v: Integer(0) + (3*v['n']/4), "C02-M14": lambda v: Integer(0) + (v['n']/2), "C02-M15": lambda v: Integer(0) + (v['n']/3)},
}
MODELS = mixed_models("C02", TABLE, 15)
