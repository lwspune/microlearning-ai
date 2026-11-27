"""C04 Chordate features and protochordates: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "herdmania": {"key": "urochordata_s", "C04-M1": "cephalochordata_s", "C04-M2": "vertebrata_s", "C04-M3": "hemichordata_p"},
    "amphioxus": {"key": "cephalochordata_s", "C04-M4": "urochordata_s", "C04-M5": "cyclostomata_s", "C04-M6": "hemichordata_p"},
    "uro_notochord": {"key": "larval_tail", "C04-M7": "whole_life", "C04-M8": "head_only", "C04-M9": "never_n"},
    "cephalo_notochord": {"key": "head_to_tail_life", "C04-M10": "larval_tail", "C04-M11": "absent_n", "C04-M12": "vertebrae_replace"},
    "balanoglossus": {"key": "hemichordata_p", "C04-M13": "annelida_p", "C04-M14": "urochordata_s", "C04-M15": "cephalochordata_s"},
}
MODELS = mixed_models("C04", TABLE, 15)
