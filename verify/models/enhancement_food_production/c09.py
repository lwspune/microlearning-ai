"""C09 Biocontrol agents: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "bt": {"key": "cry_protein", "C09-M1": "viridin_t", "C09-M2": "penicillin_t", "C09-M3": "interferon_t"},
    "alternaria": {"key": "water_hyacinth", "C09-M4": "milk_weed", "C09-M5": "caterpillars_p", "C09-M6": "aphids_p"},
    "phytophthora": {"key": "milk_weed", "C09-M7": "water_hyacinth", "C09-M8": "grasshoppers_p", "C09-M9": "root_rot"},
    "trichoderma": {"key": "soil_pathogens", "C09-M10": "kills_caterpillars", "C09-M11": "kills_weeds", "C09-M12": "fixes_nitrogen"},
    "nosema": {"key": "grasshoppers_p", "C09-M13": "caterpillars_p", "C09-M14": "aphids_p", "C09-M15": "water_hyacinth"},
}
MODELS = mixed_models("C09", TABLE, 15)
