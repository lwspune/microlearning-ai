"""C02 Distillation: named answers. Simple distillation for liquids with very different boiling points; fractional
distillation for close ones (acetone 329 K and benzene 353 K); reduced pressure for liquids that decompose at their
boiling point (glycerol from spent soap lye). The condenser cools vapour back to liquid; water enters at the bottom so
the jacket fills completely.
M1 uses simple distillation for close boiling points; M2 uses reduced pressure for any mixture; M3 picks sublimation;
M4 picks fractional distillation for a liquid that decomposes; M5 thinks glycerol can be filtered off; M6 thinks it
crystallises; M7 thinks the condenser heats; M8 thinks it separates solids; M9 thinks it measures the boiling point;
M10 thinks the water would boil; M11 thinks nothing changes; M12 thinks the distillate flows back; M13 confuses the
fractional with the reduced-pressure method; M14 confuses distillation with a separating funnel; M15 reverses the
rule."""
from ._mix import mixed_models

TABLE = {
    "acetone": {"key": "fractional", "C02-M1": "simple", "C02-M2": "reduced_pressure", "C02-M3": "sublimation"},
    "glycerol": {"key": "reduced_pressure", "C02-M4": "fractional", "C02-M5": "filtration", "C02-M6": "crystallisation"},
    "condenser": {"key": "cools_vapour", "C02-M7": "heats", "C02-M8": "separates_solids", "C02-M9": "measures_bp"},
    "outlet": {"key": "jacket_not_full", "C02-M10": "water_boils", "C02-M11": "no_change", "C02-M12": "flows_back"},
    "fractional_when": {"key": "close_bp", "C02-M13": "decomposes", "C02-M14": "immiscible", "C02-M15": "far_apart"},
}
MODELS = mixed_models("C02", TABLE, 15)
