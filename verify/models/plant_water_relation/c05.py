"""C05 Transpiration: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "pressure": {"key": "increases", "C05-M1": "decreases_rapidly", "C05-M2": "decreases_slowly", "C05-M3": "unaffected"},
    "route": {"key": "stomata", "C05-M4": "cuticle", "C05-M5": "lenticels", "C05-M6": "bark"},
    "evil": {"key": "gas_exchange", "C05-M7": "always_harmful", "C05-M8": "useless", "C05-M9": "cooling_only"},
    "humidity": {"key": "decreases", "C05-M10": "increases", "C05-M11": "unchanged", "C05-M12": "stops"},
    "vapour": {"key": "transpiration", "C05-M13": "guttation", "C05-M14": "soil_evaporation", "C05-M15": "bleeding"},
}
MODELS = mixed_models("C05", TABLE, 15)
