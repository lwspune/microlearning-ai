"""C02 Vectors and gene cloning: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "crown_gall": {"key": "agrobacterium_b", "C02-M1": "helicobacter_b", "C02-M2": "thermus_b", "C02-M3": "bt_b"},
    "insulin_vector": {"key": "pbr322_v", "C02-M4": "ti_plasmid_v", "C02-M5": "yac_v", "C02-M6": "mac_v"},
    "calcium": {"key": "helps_uptake", "C02-M7": "cuts_dna", "C02-M8": "joins_dna", "C02-M9": "kills_bacteria"},
    "two_enzymes": {"key": "ends_mismatch", "C02-M10": "dna_destroyed", "C02-M11": "too_many_copies", "C02-M12": "no_problem"},
    "marker": {"key": "select_transformants", "C02-M13": "replicate_vector", "C02-M14": "cut_dna", "C02-M15": "make_protein"},
}
MODELS = mixed_models("C02", TABLE, 15)
