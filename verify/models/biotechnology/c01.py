"""C01 Restriction enzymes: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "scissors": {"key": "restriction_enzymes", "C01-M1": "dna_ligase", "C01-M2": "dna_polymerase", "C01-M3": "reverse_transcriptase"},
    "length": {"key": "len4_8", "C01-M4": "len2_4", "C01-M5": "len8_10", "C01-M6": "len14_18"},
    "hindiii": {"key": "seq_aagctt", "C01-M7": "seq_gaattc", "C01-M8": "seq_agct", "C01-M9": "seq_ggatcc"},
    "nuclease": {"key": "phosphodiester_b", "C01-M10": "hydrogen_b", "C01-M11": "glycosidic_b", "C01-M12": "peptide_b"},
    "palindrome": {"key": "palindrome_t", "C01-M13": "sticky_end_t", "C01-M14": "blunt_end_t", "C01-M15": "primer_t"},
}
MODELS = mixed_models("C01", TABLE, 15)
