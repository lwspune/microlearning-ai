"""C04 Kingdom Protista: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "red_tide": {"key": "dinoflagellate_p", "C04-M1": "euglenoid_p", "C04-M2": "chrysophyte_p", "C04-M3": "lichen_p"},
    "plasmodium": {"key": "sporozoan_p", "C04-M4": "amoeboid_p", "C04-M5": "ciliophora_p", "C04-M6": "flagellate_p"},
    "diatoms": {"key": "silica_covers", "C04-M7": "chitin_wall", "C04-M8": "cellulose_only", "C04-M9": "no_wall"},
    "entamoeba": {"key": "amoeboid_p", "C04-M10": "ciliate_p", "C04-M11": "sporozoan_p", "C04-M12": "flagellate_p"},
    "euglena": {"key": "flagellum_chloroplasts", "C04-M13": "cilia_only", "C04-M14": "pseudopodia_only", "C04-M15": "no_locomotion"},
}
MODELS = mixed_models("C04", TABLE, 15)
