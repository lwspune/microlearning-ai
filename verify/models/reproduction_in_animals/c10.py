"""C10 Parturition and lactation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "signal": {"key": "foetal_signal", "C10-M1": "mother_decides", "C10-M2": "placenta_bursts", "C10-M3": "fixed_day"},
    "oxytocin": {"key": "oxytocin", "C10-M4": "progesterone", "C10-M5": "insulin", "C10-M6": "thyroxine"},
    "colostrum": {"key": "colostrum", "C10-M7": "lactose_milk", "C10-M8": "amniotic_fluid", "C10-M9": "chyme"},
    "iga": {"key": "iga", "C10-M10": "ige", "C10-M11": "igm", "C10-M12": "insulin_c"},
    "relaxin": {"key": "relaxin", "C10-M13": "prolactin", "C10-M14": "thyroxine", "C10-M15": "adrenaline"},
}
MODELS = mixed_models("C10", TABLE, 15)
