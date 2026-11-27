"""C08 Human evolution: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "neanderthal": {"key": lambda v: Integer(0) + (1400), "C08-M1": lambda v: Integer(0) + (900), "C08-M2": lambda v: Integer(0) + (1450), "C08-M3": lambda v: Integer(0) + (600)},
    "link": {"key": "australopithecus", "C08-M4": "homo_habilis", "C08-M5": "homo_erectus", "C08-M6": "neanderthal"},
    "ape": {"key": "tail_present", "C08-M7": "prognathous_face", "C08-M8": "no_chin", "C08-M9": "long_forelimbs"},
    "order": {"key": "aus_ere_nea_sap", "C08-M10": "sap_nea_ere_aus", "C08-M11": "ere_aus_nea_sap", "C08-M12": "aus_nea_ere_sap"},
    "modern": {"key": "homo_sapiens", "C08-M13": "homo_erectus", "C08-M14": "homo_habilis", "C08-M15": "australopithecus"},
}
MODELS = mixed_models("C08", TABLE, 15)
