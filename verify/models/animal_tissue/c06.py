"""C06 Nervous tissue: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "hot_plate": {"key": "nervous_tissue", "C06-M1": "muscular_tissue", "C06-M2": "connective_tissue", "C06-M3": "epithelial_tissue"},
    "afferent": {"key": "afferent_n", "C06-M4": "efferent_n", "C06-M5": "interneuron_n", "C06-M6": "neuroglia_c"},
    "axons": {"key": "one_axon", "C06-M7": "two_axons", "C06-M8": "many_axons", "C06-M9": "no_axon"},
    "ranvier": {"key": "nodes_ranvier", "C06-M10": "axon_hillock", "C06-M11": "telodendron_s", "C06-M12": "dendrites_s"},
    "neurilemma": {"key": "neurilemma_s", "C06-M13": "axolemma_s", "C06-M14": "sarcolemma_s", "C06-M15": "perichondrium_s"},
}
MODELS = mixed_models("C06", TABLE, 15)
