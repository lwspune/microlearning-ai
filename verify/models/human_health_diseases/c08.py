"""C08 Drugs and addiction: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "opium": {"key": "heroin_d", "C08-M1": "caffeine_d", "C08-M2": "psilocybin_d", "C08-M3": "cocaine_d"},
    "tea": {"key": "caffeine_d", "C08-M4": "tannin_d", "C08-M5": "cocaine_d", "C08-M6": "crack_d"},
    "charas": {"key": "cannabis_sativa", "C08-M7": "papaver_somniferum", "C08-M8": "erythroxylum_coca", "C08-M9": "atropa_belladonna"},
    "smoking": {"key": "emphysema_d", "C08-M10": "cirrhosis_d", "C08-M11": "tuberculosis_d", "C08-M12": "malaria_d"},
    "alcohol": {"key": "cirrhosis_d", "C08-M13": "hepatitis_b_d", "C08-M14": "emphysema_d", "C08-M15": "typhoid_d"},
}
MODELS = mixed_models("C08", TABLE, 15)
