"""C04 Spermatogenesis and the sperm: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "count": {"key": lambda v: Integer(0) + (4*v['p']), "C04-M1": lambda v: Integer(0) + (v['p']), "C04-M2": lambda v: Integer(0) + (2*v['p']), "C04-M3": lambda v: Integer(0) + (8*v['p'])},
    "spermiogenesis": {"key": "spermiogenesis", "C04-M4": "spermatogenesis", "C04-M5": "spermiation", "C04-M6": "oogenesis"},
    "acrosome": {"key": "golgi_enzymes", "C04-M7": "mitochondria_energy", "C04-M8": "nucleus_genes", "C04-M9": "centriole_tail"},
    "nebenkern": {"key": "mitochondria_middle", "C04-M10": "golgi_head", "C04-M11": "centriole_neck", "C04-M12": "nucleus_head"},
    "chromosomes": {"key": lambda v: Integer(0) + (23), "C04-M13": lambda v: Integer(0) + (46), "C04-M14": lambda v: Integer(0) + (92), "C04-M15": lambda v: Integer(0) + (22)},
}
MODELS = mixed_models("C04", TABLE, 15)
