"""C01 Mendel's experiments and genetic terms: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "allele": {"key": "alleles", "C01-M1": "genotypes", "C01-M2": "phenotypes", "C01-M3": "chromatids"},
    "homozygous": {"key": "homozygous", "C01-M4": "heterozygous", "C01-M5": "hybrid", "C01-M6": "recessive_only"},
    "phenotype": {"key": "phenotype", "C01-M7": "genotype", "C01-M8": "allele_word", "C01-M9": "karyotype"},
    "pea": {"key": "self_pollinating", "C01-M10": "long_lived", "C01-M11": "few_seeds", "C01-M12": "cross_only"},
    "traits": {"key": lambda v: Integer(0) + (7), "C01-M13": lambda v: Integer(0) + (2), "C01-M14": lambda v: Integer(0) + (4), "C01-M15": lambda v: Integer(0) + (23)},
}
MODELS = mixed_models("C01", TABLE, 15)
