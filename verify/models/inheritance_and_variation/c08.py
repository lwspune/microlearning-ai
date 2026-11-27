"""C08 The chromosomal theory, linkage and crossing over: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "theory": {"key": "sutton_boveri", "C08-M1": "watson_crick", "C08-M2": "miller_urey", "C08-M3": "oparin_haldane"},
    "least": {"key": "p_and_s", "C08-M4": "p_and_q", "C08-M5": "r_and_s", "C08-M6": "s_and_t"},
    "groups": {"key": lambda v: Integer(0) + (23), "C08-M7": lambda v: Integer(0) + (46), "C08-M8": lambda v: Integer(0) + (22), "C08-M9": lambda v: Integer(0) + (2)},
    "stage": {"key": "pachytene", "C08-M10": "leptotene", "C08-M11": "diplotene", "C08-M12": "metaphase"},
    "between": {"key": "non_sister_homologous", "C08-M13": "sister_chromatids", "C08-M14": "non_homologous", "C08-M15": "whole_chromosomes"},
}
MODELS = mixed_models("C08", TABLE, 15)
