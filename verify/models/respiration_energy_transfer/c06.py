"""C06 Anaerobic respiration and fermentation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "muscle": {"key": "lactic_acid", "C06-M1": "ethanol_t", "C06-M2": "acetyl_coa", "C06-M3": "co2_water"},
    "yeast": {"key": "acetaldehyde_t", "C06-M4": "ethanol_t", "C06-M5": "lactic_acid", "C06-M6": "acetyl_coa"},
    "limewater": {"key": "co2_released", "C06-M7": "o2_used", "C06-M8": "alcohol_formed", "C06-M9": "water_formed"},
    "less": {"key": "incomplete_oxidation", "C06-M10": "no_glycolysis", "C06-M11": "more_atp_used", "C06-M12": "no_nadh"},
    "anaerobic_atp": {"key": lambda v: Integer(0) + (2*v['g']), "C06-M13": lambda v: Integer(0) + (4*v['g']), "C06-M14": lambda v: Integer(0) + (38*v['g']), "C06-M15": lambda v: Integer(0) + (8*v['g'])},
}
MODELS = mixed_models("C06", TABLE, 15)
