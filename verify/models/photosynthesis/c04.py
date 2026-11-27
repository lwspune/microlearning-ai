"""C04 Photophosphorylation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "non_cyclic": {"key": "oxygen_and_power", "C04-M1": "only_ps1", "C04-M2": "atp_only", "C04-M3": "electrons_return"},
    "cyclic": {"key": "atp_only", "C04-M4": "atp_nadph", "C04-M5": "nadph_only", "C04-M6": "atp_nadph_oxygen"},
    "photolysis": {"key": "ps2_refilled", "C04-M7": "makes_atp_directly", "C04-M8": "ps1_refilled", "C04-M9": "light_alone"},
    "scheme": {"key": "ps2_c", "C04-M10": "ps1_c", "C04-M11": "nadp_c", "C04-M12": "cytochrome_c"},
    "atp_formed": {"key": "protons_diffuse", "C04-M13": "nadp_reduced", "C04-M14": "water_split", "C04-M15": "light_on_adp"},
}
MODELS = mixed_models("C04", TABLE, 15)
