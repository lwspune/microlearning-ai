"""C10 DNA fingerprinting: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "knives": {"key": "endonucleases", "C10-M1": "ligases", "C10-M2": "polymerases", "C10-M3": "transcriptase"},
    "vntr": {"key": "vntrs", "C10-M4": "exons", "C10-M5": "codons", "C10-M6": "histones"},
    "order": {"key": "isolate_digest_gel_blot", "C10-M7": "digest_isolate_gel_blot", "C10-M8": "isolate_gel_digest_blot", "C10-M9": "blot_gel_digest_isolate"},
    "southern": {"key": "southern_blotting", "C10-M10": "electrophoresis", "C10-M11": "pcr", "C10-M12": "hybridization"},
    "pcr": {"key": "amplify", "C10-M13": "cut", "C10-M14": "separate", "C10-M15": "join"},
}
MODELS = mixed_models("C10", TABLE, 15)
