"""C07 Stepwise oxidation and the amphibolic pathway: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "stepwise": {"key": "more_atp", "C07-M1": "faster_release", "C07-M2": "more_heat", "C07-M3": "no_enzymes"},
    "combustion": {"key": "enzyme_stepwise", "C07-M4": "single_step", "C07-M5": "direct_oxygen", "C07-M6": "no_atp"},
    "amphibolic": {"key": "both_ana_cata", "C07-M7": "only_catabolic", "C07-M8": "only_anabolic", "C07-M9": "both_resp"},
    "fatty_build": {"key": "acetyl_coa", "C07-M10": "akg_t", "C07-M11": "oxaloacetate_t", "C07-M12": "fumarate_t"},
    "common_path": {"key": "all_three", "C07-M13": "carbs_only", "C07-M14": "carbs_fats", "C07-M15": "proteins_only"},
}
MODELS = mixed_models("C07", TABLE, 15)
