"""C10 Blood vessels and blood pressure: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "pulse": {"key": "arteries_v", "C10-M1": "veins_v", "C10-M2": "capillaries_v", "C10-M3": "lymph_vessels"},
    "legs": {"key": "valves_muscles", "C10-M4": "high_vein_pressure", "C10-M5": "pumping_walls", "C10-M6": "gravity_v"},
    "bp": {"key": "bp_120_80", "C10-M7": "bp_80_120", "C10-M8": "bp_140_90", "C10-M9": "bp_100_60"},
    "thicker": {"key": "high_pressure_v", "C10-M10": "low_pressure_v", "C10-M11": "carry_more", "C10-M12": "deoxygenated_v"},
    "angina": {"key": "chest_pain", "C10-M13": "muscle_death", "C10-M14": "high_bp", "C10-M15": "pericarditis_t"},
}
MODELS = mixed_models("C10", TABLE, 15)
