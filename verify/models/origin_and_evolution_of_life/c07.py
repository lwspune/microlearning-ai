"""C07 Isolation, speciation and adaptive radiation: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "radiation": {"key": "adaptive_radiation", "C07-M1": "convergent_evolution", "C07-M2": "genetic_drift", "C07-M3": "parallel_evolution"},
    "finches": {"key": "adaptive_radiation", "C07-M4": "industrial_melanism", "C07-M5": "convergent_evolution", "C07-M6": "mutation_theory"},
    "premating": {"key": "seasonal_isolation", "C07-M7": "hybrid_sterility", "C07-M8": "hybrid_inviability", "C07-M9": "hybrid_breakdown"},
    "mule": {"key": "hybrid_sterility", "C07-M10": "seasonal_isolation", "C07-M11": "ethological_isolation", "C07-M12": "geographical_isolation"},
    "speciation": {"key": "speciation", "C07-M13": "hybridization", "C07-M14": "mutation", "C07-M15": "adaptation"},
}
MODELS = mixed_models("C07", TABLE, 15)
