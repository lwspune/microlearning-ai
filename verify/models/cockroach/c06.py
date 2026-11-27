"""C06 Open circulation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "type": {"key": "open_sinuses", "C06-M1": "closed_vessels", "C06-M2": "no_system", "C06-M3": "double_circuit"},
    "colour": {"key": "no_pigment", "C06-M4": "no_cells", "C06-M5": "only_water", "C06-M6": "no_nutrients"},
    "chambers": {"key": "thirteen_c", "C06-M7": "ten_c", "C06-M8": "twelve_c", "C06-M9": "four_c"},
    "sinus": {"key": "perineural_s", "C06-M10": "pericardial_s", "C06-M11": "perivisceral_s", "C06-M12": "dorsal_aorta"},
    "diastole": {"key": "ostia_inflow", "C06-M13": "aorta_outflow", "C06-M14": "ostia_close", "C06-M15": "ostia_outflow"},
}
MODELS = mixed_models("C06", TABLE, 15)
