"""C06 Microbes in industry: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "chloromycetin": {"key": "s_venezuelae", "C06-M1": "s_erythreus", "C06-M2": "p_chrysogenum", "C06-M3": "s_griseus"},
    "beer": {"key": "barley_s", "C06-M4": "wheat_s", "C06-M5": "corn_s", "C06-M6": "molasses_s"},
    "beverages": {"key": "saccharomyces_c", "C06-M7": "s_venezuelae", "C06-M8": "aspergillus_niger", "C06-M9": "s_griseus"},
    "b12": {"key": "pseudomonas_d", "C06-M10": "saccharomyces_c", "C06-M11": "acetobacter_aceti", "C06-M12": "aspergillus_niger"},
    "streptokinase": {"key": "clot_buster", "C06-M13": "antibiotic_u", "C06-M14": "vaccine_u", "C06-M15": "painkiller_u"},
}
MODELS = mixed_models("C06", TABLE, 15)
