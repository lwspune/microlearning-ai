"""C08 Gene regulation: the lac operon: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "notpart": {"key": "inducer", "C08-M1": "promoter", "C08-M2": "regulator", "C08-M3": "operator"},
    "inducer": {"key": "lactose", "C08-M4": "glucose", "C08-M5": "tryptophan", "C08-M6": "repressor"},
    "binds": {"key": "operator", "C08-M7": "promoter", "C08-M8": "regulator", "C08-M9": "structural_genes"},
    "repressible": {"key": "tryptophan", "C08-M10": "lactose", "C08-M11": "arabinose", "C08-M12": "galactose"},
    "proposed": {"key": "jacob_monod", "C08-M13": "watson_crick", "C08-M14": "sutton_boveri", "C08-M15": "meselson_stahl"},
}
MODELS = mixed_models("C08", TABLE, 15)
