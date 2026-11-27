"""C04 Air and noise pollution: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "dandiya": {"key": "noise_ban", "C04-M1": "water_pollution", "C04-M2": "soil_pollution", "C04-M3": "smoke_pollution"},
    "co": {"key": "binds_haemoglobin", "C04-M4": "damages_lungs", "C04-M5": "raises_bp", "C04-M6": "blocks_nose"},
    "particulate": {"key": "solids_aerosols", "C04-M7": "co_so2", "C04-M8": "cfc_ozone", "C04-M9": "dust_only"},
    "bs": {"key": "vehicle_emissions", "C04-M10": "noise_levels", "C04-M11": "water_quality", "C04-M12": "building_safety"},
    "natural": {"key": "volcanic_ash", "C04-M13": "vehicle_exhaust", "C04-M14": "cfc_gas", "C04-M15": "plastic_waste"},
}
MODELS = mixed_models("C04", TABLE, 15)
