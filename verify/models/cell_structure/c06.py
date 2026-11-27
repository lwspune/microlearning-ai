"""C06 The nucleus: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "nucleolus_membrane": {"key": "no_membrane", "C06-M1": "single_membrane", "C06-M2": "double_membrane", "C06-M3": "cell_wall_n"},
    "ribosomes": {"key": "nucleolus_o", "C06-M4": "golgi_o", "C06-M5": "lysosome_o", "C06-M6": "mitochondrion_o"},
    "made_of": {"key": "rrna_proteins", "C06-M7": "dna_only", "C06-M8": "lipids_n", "C06-M9": "starch_n"},
    "karyolymph": {"key": "nucleoplasm_k", "C06-M10": "cytosol_k", "C06-M11": "stroma_k", "C06-M12": "matrix_k"},
    "envelope": {"key": "er_continuous", "C06-M13": "golgi_continuous", "C06-M14": "plasma_continuous", "C06-M15": "mito_continuous"},
}
MODELS = mixed_models("C06", TABLE, 15)
