"""C03 Link reaction and Krebs cycle: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "site": {"key": "mitochondria_s", "C03-M1": "ribosomes_s", "C03-M2": "grana_s", "C03-M3": "er_s"},
    "acetyl": {"key": "pyruvic_acid", "C03-M4": "glucose_s", "C03-M5": "oxaloacetic_acid", "C03-M6": "citric_acid"},
    "slp": {"key": "succinyl_succinate", "C03-M7": "akg_succinyl", "C03-M8": "succinate_fumarate", "C03-M9": "fumarate_malate"},
    "condense": {"key": "citrate_6c", "C03-M10": "isocitrate_t", "C03-M11": "malate_t", "C03-M12": "akg_t"},
    "fatty": {"key": "glycolysis_s", "C03-M13": "krebs_s", "C03-M14": "ets_s", "C03-M15": "terminal_oxidation"},
}
MODELS = mixed_models("C03", TABLE, 15)
