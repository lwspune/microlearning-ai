"""C04 Stomata and vascular bundles: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "dumbbell": {"key": "dumbbell_g", "C04-M1": "kidney_g", "C04-M2": "barrel_g", "C04-M3": "rounded_g"},
    "apparatus": {"key": "stomatal_apparatus", "C04-M4": "stoma_only", "C04-M5": "guard_cells_only", "C04-M6": "epidermis_t"},
    "hadro": {"key": "hadrocentric_b", "C04-M7": "leptocentric_b", "C04-M8": "amphivasal_b", "C04-M9": "collateral_b"},
    "concentric": {"key": "always_closed", "C04-M10": "always_open", "C04-M11": "radial_b", "C04-M12": "collateral_b"},
    "monocot_vb": {"key": "collateral_closed", "C04-M13": "collateral_open", "C04-M14": "radial_b", "C04-M15": "concentric_b"},
}
MODELS = mixed_models("C04", TABLE, 15)
