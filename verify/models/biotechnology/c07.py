"""C07 Biopatents, biopiracy and bioethics: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "biopiracy": {"key": "unauthorised_use", "C07-M1": "own_invention", "C07-M2": "conservation_b", "C07-M3": "gene_therapy_b"},
    "turmeric": {"key": "cancelled_csir", "C07-M4": "upheld_p", "C07-M5": "given_india", "C07-M6": "never_filed"},
    "neem": {"key": "fungicidal_p", "C07-M7": "sweetness_p", "C07-M8": "timber_p", "C07-M9": "dye_p"},
    "biopatent": {"key": "gm_strains", "C07-M10": "wild_species", "C07-M11": "folk_knowledge", "C07-M12": "whole_biodiversity"},
    "rich": {"key": "developing_n", "C07-M13": "developed_n", "C07-M14": "neither_n", "C07-M15": "equal_n"},
}
MODELS = mixed_models("C07", TABLE, 15)
