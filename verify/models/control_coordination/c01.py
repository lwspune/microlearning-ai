"""C01 Neurons and glial cells: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "receives": {"key": "dendron_p", "C01-M1": "axon_p", "C01-M2": "nodes_ranvier", "C01-M3": "neurilemma_p"},
    "pns": {"key": "schwann_g", "C01-M4": "oligodendrocytes_g", "C01-M5": "satellite_g", "C01-M6": "astrocytes_g"},
    "outside": {"key": "ganglion_n", "C01-M7": "tract_n", "C01-M8": "nucleus_n", "C01-M9": "nerve_n"},
    "cns": {"key": "oligodendrocytes_g", "C01-M10": "schwann_g", "C01-M11": "microglia_g", "C01-M12": "satellite_g"},
    "saltatory": {"key": "faster_i", "C01-M13": "slower_i", "C01-M14": "same_speed", "C01-M15": "stops_at_nodes"},
}
MODELS = mixed_models("C01", TABLE, 15)
