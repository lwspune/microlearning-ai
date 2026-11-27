"""C01 Meristematic tissue: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "types": {"key": "three_types", "C01-M1": "one_type", "C01-M2": "two_types", "C01-M3": "four_types"},
    "cambium": {"key": "lateral_m", "C01-M4": "apical_m", "C01-M5": "intercalary_m", "C01-M6": "permanent_t"},
    "root_apex": {"key": "subterminal_p", "C01-M7": "terminal_p", "C01-M8": "at_nodes", "C01-M9": "along_sides"},
    "node": {"key": "intercalary_m", "C01-M10": "apical_m", "C01-M11": "lateral_m", "C01-M12": "permanent_t"},
    "mature": {"key": "lost_division", "C01-M13": "still_dividing", "C01-M14": "dead_cells", "C01-M15": "lateral_cells"},
}
MODELS = mixed_models("C01", TABLE, 15)
