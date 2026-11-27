"""C01 Basic properties of life: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "not_property": {"key": "decay_p", "C01-M1": "metabolism_p", "C01-M2": "growth_p", "C01-M3": "reproduction_p"},
    "alive": {"key": "irritability_p", "C01-M4": "metabolism_p", "C01-M5": "growth_p", "C01-M6": "reproduction_p"},
    "growth": {"key": "from_within", "C01-M7": "from_outside", "C01-M8": "only_young", "C01-M9": "reversible_g"},
    "metabolism": {"key": "break_and_build", "C01-M10": "only_digestion", "C01-M11": "only_growth", "C01-M12": "only_excretion"},
    "unique": {"key": "responsiveness_p", "C01-M13": "mass_increase", "C01-M14": "movement_only", "C01-M15": "made_of_chemicals"},
}
MODELS = mixed_models("C01", TABLE, 15)
