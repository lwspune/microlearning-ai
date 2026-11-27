"""C04 Gas transport and respiratory disorders: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "co": {"key": "aff_250_more", "C04-M1": "aff_equal", "C04-M2": "aff_250_less", "C04-M3": "aff_2_more"},
    "asthma": {"key": "asthma_d", "C04-M4": "emphysema_d", "C04-M5": "sinusitis_d", "C04-M6": "laryngitis_d"},
    "alveoli": {"key": "emphysema_d", "C04-M7": "asthma_d", "C04-M8": "sinusitis_d", "C04-M9": "silicosis_d"},
    "sinus": {"key": "sinusitis_d", "C04-M10": "laryngitis_d", "C04-M11": "asthma_d", "C04-M12": "emphysema_d"},
    "oxygen": {"key": "oxyhaemoglobin_t", "C04-M13": "dissolved_plasma", "C04-M14": "bicarbonate_t", "C04-M15": "carbamino_t"},
}
MODELS = mixed_models("C04", TABLE, 15)
