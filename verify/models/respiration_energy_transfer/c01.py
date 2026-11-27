"""C01 Respiration and ATP: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "common": {"key": "glucose_s", "C01-M1": "fat_s", "C01-M2": "protein_s", "C01-M3": "oxygen_s"},
    "substrate": {"key": "organic_oxidised", "C01-M4": "inorganic_products", "C01-M5": "glucose_only", "C01-M6": "enzymes_t"},
    "phosphorylation": {"key": "substrate_oxidative", "C01-M7": "photophosphorylation_t", "C01-M8": "oxidative_only", "C01-M9": "substrate_only"},
    "energy": {"key": "released_atp", "C01-M10": "stored_glucose", "C01-M11": "all_heat", "C01-M12": "from_oxygen"},
    "gases": {"key": "o2_in_co2_out", "C01-M13": "co2_in_o2_out", "C01-M14": "no_exchange", "C01-M15": "o2_in_only"},
}
MODELS = mixed_models("C01", TABLE, 15)
