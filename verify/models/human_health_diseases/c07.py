"""C07 Antibodies and blood groups: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "antibody": {"key": "binds_antigen", "C07-M1": "wbc_invader", "C07-M2": "rbc_secretion", "C07-M3": "blood_cell"},
    "paratope": {"key": "paratopes_a", "C07-M4": "isotopes_a", "C07-M5": "epitopes_a", "C07-M6": "octamer_a"},
    "chains": {"key": "two_heavy_two_light", "C07-M7": "two_chains", "C07-M8": "one_chain", "C07-M9": "four_heavy"},
    "rh": {"key": "rbc_antigen", "C07-M10": "plasma_antibody", "C07-M11": "wbc_protein", "C07-M12": "hormone_r"},
    "group_a": {"key": "anti_b", "C07-M13": "anti_a", "C07-M14": "anti_both", "C07-M15": "anti_none"},
}
MODELS = mixed_models("C07", TABLE, 15)
