"""C07 Sewage treatment and biogas: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "primary": {"key": "primary_t", "C07-M1": "secondary_t", "C07-M2": "final_t", "C07-M3": "amplification_t"},
    "secondary": {"key": "aerobic_flocs", "C07-M4": "chlorine_only", "C07-M5": "screens_only", "C07-M6": "sand_filters"},
    "gas": {"key": "methane_g", "C07-M7": "co2_gas", "C07-M8": "h2s_gas", "C07-M9": "hydrogen_gas"},
    "percent": {"key": "m50_60", "C07-M10": "m30_40", "C07-M11": "m0_3", "C07-M12": "m90_100"},
    "water": {"key": "w99", "C07-M13": "w50", "C07-M14": "w75", "C07-M15": "w10"},
}
MODELS = mixed_models("C07", TABLE, 15)
