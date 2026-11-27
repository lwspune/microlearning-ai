"""C01 Chemical evolution and the origin of life: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "oparin": {"key": "oparin_haldane", "C01-M1": "wallace", "C01-M2": "darwin", "C01-M3": "pasteur"},
    "sequence": {"key": "inorganic_first", "C01-M4": "organic_first", "C01-M5": "cell_first", "C01-M6": "eobiont_early"},
    "ratio": {"key": "one_two_two", "C01-M7": "two_one_one", "C01-M8": "one_one_one", "C01-M9": "two_two_one"},
    "coacervate": {"key": "coacervates", "C01-M10": "eobionts", "C01-M11": "ribosomes", "C01-M12": "viruses"},
    "product": {"key": "amino_acids", "C01-M13": "living_cells", "C01-M14": "dna_molecules", "C01-M15": "whole_proteins"},
}
MODELS = mixed_models("C01", TABLE, 15)
