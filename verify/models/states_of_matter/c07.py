"""C07 Vapour pressure, surface tension and viscosity: named answers. A liquid boils when its vapour pressure equals the
outside pressure: highest boiling point in a pressure cooker, lowest on a mountain. Surface tension and viscosity rise
with stronger intermolecular forces; viscosity falls on heating. Viscosity is measured in poise.
M1 picks dyne; M2 picks newton; M3 picks gram; M4 picks the open vessel; M5 picks the mountain top; M6 thinks water
always boils at 100 C; M7 ties boiling to 100 C; M8 thinks all molecules move alike; M9 thinks vapour pressure is zero;
M10 thinks heating raises surface tension; M11 thinks weaker forces raise it; M12 credits size alone; M13 thinks
viscosity rises on heating; M14 thinks it is unchanged; M15 thinks it rises then falls."""
from ._mix import mixed_models

TABLE = {
    "unit": {"key": "poise", "C07-M1": "dyne", "C07-M2": "newton", "C07-M3": "gram"},
    "highest_bp": {"key": "pressure_cooker", "C07-M4": "open_vessel", "C07-M5": "mountain_top", "C07-M6": "always_100"},
    "boils": {"key": "vp_equals_external", "C07-M7": "reaches_100", "C07-M8": "same_speed", "C07-M9": "vp_zero"},
    "surface_tension": {"key": "stronger_forces", "C07-M10": "heating", "C07-M11": "weaker_forces", "C07-M12": "size_alone"},
    "viscosity_heat": {"key": "decreases", "C07-M13": "increases", "C07-M14": "unchanged", "C07-M15": "rises_falls"},
}
MODELS = mixed_models("C07", TABLE, 15)
