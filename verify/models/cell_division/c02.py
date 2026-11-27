"""C02 Mitosis: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "spindle": {"key": "prophase_p", "C02-M1": "metaphase_p", "C02-M2": "anaphase_p", "C02-M3": "telophase_p"},
    "equator": {"key": "metaphase_p", "C02-M4": "prophase_p", "C02-M5": "anaphase_p", "C02-M6": "telophase_p"},
    "incorrect": {"key": "nuclei_metaphase", "C02-M7": "condense_prophase", "C02-M8": "chromatids_anaphase", "C02-M9": "membrane_telophase"},
    "two_groups": {"key": "anaphase_p", "C02-M10": "metaphase_p", "C02-M11": "prophase_p", "C02-M12": "interphase_p"},
    "homotypic": {"key": "same_number", "C02-M13": "halves_number", "C02-M14": "doubles_number", "C02-M15": "same_shape_only"},
}
MODELS = mixed_models("C02", TABLE, 15)
