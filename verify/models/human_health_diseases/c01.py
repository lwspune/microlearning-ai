"""C01 Health and kinds of disease: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "health": {"key": "complete_wellbeing", "C01-M1": "no_disease", "C01-M2": "physical_only", "C01-M3": "body_mind_only"},
    "acquired": {"key": "after_birth", "C01-M4": "from_birth", "C01-M5": "inherited_only", "C01-M6": "always_infectious"},
    "needles": {"key": "elephantiasis_d", "C01-M7": "aids_d", "C01-M8": "malaria_d", "C01-M9": "hepatitis_b_d"},
    "communicable": {"key": "communicable_d", "C01-M10": "non_communicable_d", "C01-M11": "congenital_d", "C01-M12": "deficiency_d"},
    "cancer": {"key": "non_communicable_d", "C01-M13": "communicable_d", "C01-M14": "congenital_d", "C01-M15": "deficiency_d"},
}
MODELS = mixed_models("C01", TABLE, 15)
