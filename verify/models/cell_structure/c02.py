"""C02 The cell membrane: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "made": {"key": "proteins_lipids_carbs", "C02-M1": "proteins_cellulose", "C02-M2": "proteins_lipids_only", "C02-M3": "proteins_carbs_only"},
    "fluid": {"key": "lipid_f", "C02-M4": "carbohydrate_f", "C02-M5": "glycoprotein_f", "C02-M6": "polysaccharide_f"},
    "permeable": {"key": "selectively_permeable", "C02-M7": "freely_permeable", "C02-M8": "impermeable_m", "C02-M9": "semipermeable_m"},
    "model": {"key": "singer_nicolson", "C02-M10": "danielli_davson", "C02-M11": "watson_crick", "C02-M12": "schleiden_schwann"},
    "rbc": {"key": "decide_blood_group", "C02-M13": "no_role", "C02-M14": "carry_oxygen", "C02-M15": "make_antibodies"},
}
MODELS = mixed_models("C02", TABLE, 15)
