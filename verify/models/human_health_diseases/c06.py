"""C06 B cells and T cells: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "origin": {"key": "bone_marrow", "C06-M1": "lymph_nodes", "C06-M2": "thymus_o", "C06-M3": "liver_o"},
    "stimulate": {"key": "helper_t", "C06-M4": "cytotoxic_t", "C06-M5": "suppressor_t", "C06-M6": "plasma_cells"},
    "perforin": {"key": "perforins_s", "C06-M7": "antibodies_s", "C06-M8": "histamine_s", "C06-M9": "lysozyme_s"},
    "antibodies": {"key": "plasma_cells", "C06-M10": "t_cells", "C06-M11": "macrophages_c", "C06-M12": "rbc_cells"},
    "mature": {"key": "thymus_o", "C06-M13": "bone_marrow", "C06-M14": "spleen_o", "C06-M15": "liver_o"},
}
MODELS = mixed_models("C06", TABLE, 15)
