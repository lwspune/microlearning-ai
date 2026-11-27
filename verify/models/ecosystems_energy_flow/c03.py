"""C03 Trophic levels and energy flow: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "lake": {"key": "zooplankton_o", "C03-M1": "phytoplankton_o", "C03-M2": "benthos_o", "C03-M3": "fishes_o"},
    "secondary": {"key": "carnivores_o", "C03-M4": "herbivores_o", "C03-M5": "producers_o", "C03-M6": "autotrophs_o"},
    "ten": {"key": lambda v: Integer(0) + (v['e']/100), "C03-M7": lambda v: Integer(0) + (v['e']/10), "C03-M8": lambda v: Integer(0) + (v['e']/1000), "C03-M9": lambda v: Integer(0) + (v['e'] - 2*v['e']/10)},
    "web": {"key": "linked_chains", "C03-M10": "single_chain", "C03-M11": "one_level", "C03-M12": "decomposers_only"},
    "flow": {"key": "one_way", "C03-M13": "cyclic_f", "C03-M14": "two_way", "C03-M15": "rises_upward"},
}
MODELS = mixed_models("C03", TABLE, 15)
