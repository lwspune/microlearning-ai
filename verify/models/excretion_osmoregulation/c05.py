"""C05 Osmoregulation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "volume": {"key": "both_hormones", "C05-M1": "adh_only", "C05-M2": "aldosterone_only", "C05-M3": "neither_t"},
    "adh_source": {"key": "posterior_pituitary", "C05-M4": "anterior_pituitary", "C05-M5": "adrenal_cortex", "C05-M6": "jg_cells"},
    "jga": {"key": "renin_t", "C05-M7": "aldosterone_t", "C05-M8": "adh_t", "C05-M9": "angiotensinogen_t"},
    "angiotensinogen": {"key": "liver_t", "C05-M10": "jg_cells", "C05-M11": "adrenal_cortex", "C05-M12": "posterior_pituitary"},
    "blood_loss": {"key": "adh_and_renin", "C05-M13": "adh_inhibited", "C05-M14": "renin_only", "C05-M15": "adh_only"},
}
MODELS = mixed_models("C05", TABLE, 15)
