"""C08 Outbreeding devices and pollen-pistil interaction: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "dichogamy": {"key": "dichogamy", "C08-M1": "herkogamy", "C08-M2": "self_incompatibility", "C08-M3": "dioecy"},
    "herkogamy": {"key": "herkogamy", "C08-M4": "dichogamy", "C08-M5": "cleistogamy", "C08-M6": "unisexuality"},
    "recognise": {"key": "stigma", "C08-M7": "ovary", "C08-M8": "ovule", "C08-M9": "filiform_apparatus"},
    "incompatible": {"key": "genetic_block", "C08-M10": "time_gap", "C08-M11": "position_gap", "C08-M12": "no_pollen"},
    "papaya": {"key": "dioecy", "C08-M13": "dichogamy", "C08-M14": "herkogamy", "C08-M15": "cleistogamy"},
}
MODELS = mixed_models("C08", TABLE, 15)
