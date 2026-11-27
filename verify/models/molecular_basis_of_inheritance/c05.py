"""C05 Transcription: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "enzyme": {"key": "rna_polymerase", "C05-M1": "dna_polymerase", "C05-M2": "restriction_enzyme", "C05-M3": "rnase"},
    "definition": {"key": "dna_to_rna", "C05-M4": "trna_to_mrna", "C05-M5": "mrna_to_protein", "C05-M6": "mrna_to_trna"},
    "splicing": {"key": "splicing", "C05-M7": "capping", "C05-M8": "tailing", "C05-M9": "translation"},
    "polya": {"key": "tailing", "C05-M10": "capping", "C05-M11": "splicing", "C05-M12": "replication"},
    "template": {"key": "template_strand", "C05-M13": "coding_strand", "C05-M14": "both_strands", "C05-M15": "mrna"},
}
MODELS = mixed_models("C05", TABLE, 15)
