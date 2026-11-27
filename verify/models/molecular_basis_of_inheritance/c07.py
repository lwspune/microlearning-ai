"""C07 Translation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "site": {"key": "cytoplasm", "C07-M1": "nucleus", "C07-M2": "nucleolus", "C07-M3": "lysosome"},
    "order": {"key": "i_iv_iii_ii", "C07-M4": "iii_iv_i_ii", "C07-M5": "iv_iii_ii_i", "C07-M6": "ii_iii_iv_i"},
    "anticodon": {"key": "trna", "C07-M7": "mrna", "C07-M8": "rrna", "C07-M9": "dna"},
    "bond": {"key": "peptide", "C07-M10": "hydrogen", "C07-M11": "glycosidic", "C07-M12": "phosphodiester"},
    "stop": {"key": "stop_codon", "C07-M13": "aug", "C07-M14": "trna_end", "C07-M15": "intron"},
}
MODELS = mixed_models("C07", TABLE, 15)
