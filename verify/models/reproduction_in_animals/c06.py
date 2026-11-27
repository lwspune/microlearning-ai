"""C06 The menstrual cycle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "day": {"key": lambda v: Integer(0) + (14), "C06-M1": lambda v: Integer(0) + (1), "C06-M2": lambda v: Integer(0) + (28), "C06-M3": lambda v: Integer(0) + (5)},
    "lh": {"key": "lh_surge", "C06-M4": "fsh_fall", "C06-M5": "progesterone_surge", "C06-M6": "estrogen_fall"},
    "albicans": {"key": "corpus_albicans", "C06-M7": "tunica_albuginea", "C06-M8": "membrana_granulosa", "C06-M9": "zona_pellucida"},
    "luteal": {"key": "progesterone", "C06-M10": "fsh", "C06-M11": "testosterone", "C06-M12": "oxytocin"},
    "ovulation": {"key": "ovulation", "C06-M13": "capacitation", "C06-M14": "gestation", "C06-M15": "copulation"},
}
MODELS = mixed_models("C06", TABLE, 15)
