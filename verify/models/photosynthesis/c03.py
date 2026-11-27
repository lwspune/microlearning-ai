"""C03 The light reaction: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "carrier": {"key": "atp_c", "C03-M1": "chlorophyll_c", "C03-M2": "adp_c", "C03-M3": "rubp_c"},
    "photo_oxidation": {"key": "proton_electron_oxygen", "C03-M4": "electron_proton", "C03-M5": "proton_oxygen", "C03-M6": "electron_oxygen"},
    "ps2_centre": {"key": "p680", "C03-M7": "p700", "C03-M8": "chlorophyll_b", "C03-M9": "carotene_c"},
    "refill": {"key": "water_c", "C03-M10": "nadp_c", "C03-M11": "ps1_c", "C03-M12": "co2_c"},
    "acceptor": {"key": "nadp_c", "C03-M13": "oxygen_c", "C03-M14": "adp_c", "C03-M15": "ps2_c"},
}
MODELS = mixed_models("C03", TABLE, 15)
