"""C03 Polymerase chain reaction: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "amplify": {"key": "pcr_t", "C03-M1": "chromatography_t", "C03-M2": "southern_blotting", "C03-M3": "gel_electrophoresis"},
    "faulty": {"key": "annealing_s", "C03-M4": "denaturation_s", "C03-M5": "extension_s", "C03-M6": "no_step"},
    "copies": {"key": lambda v: Integer(0) + (2**v['n']), "C03-M7": lambda v: Integer(0) + (2*v['n']), "C03-M8": lambda v: Integer(0) + (v['n']**2), "C03-M9": lambda v: Integer(0) + (2**(v['n'] - 1))},
    "denature": {"key": "t90_98", "C03-M10": "t40_60", "C03-M11": "t72", "C03-M12": "t37"},
    "taq": {"key": "taq_polymerase", "C03-M13": "dna_ligase", "C03-M14": "restriction_enzymes", "C03-M15": "human_polymerase"},
}
MODELS = mixed_models("C03", TABLE, 15)
