"""C04 Principle of chromatography. Components distribute between a stationary and a mobile phase and move at different
rates; R_f = distance moved by the substance / distance moved by the solvent, so 0 <= R_f <= 1. A component held more
strongly by the stationary phase moves more slowly (lower R_f).
params["q"]:
  "rf": inputs s (cm moved by the spot), f (cm moved by the solvent front). Others named.
M1 inverts the ratio; M2 subtracts the distances; M3 uses the gap to the solvent front; M4 thinks R_f is a whole number;
M5 thinks it can be negative; M6 credits boiling points; M7 credits colour only; M8 thinks components react with the
paper; M9 picks steam distillation; M10 picks solvent extraction; M11 picks filtration; M12 thinks stronger holding means
faster; M13 thinks affinity does not matter; M14 thinks the component moves with the solvent front."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "rf": {"key": lambda v: sig(v["s"] / v["f"]), "C04-M1": lambda v: sig(v["f"] / v["s"]),
           "C04-M2": lambda v: sig(v["f"] - v["s"]), "C04-M3": lambda v: sig((v["f"] - v["s"]) / v["f"])},
    "range": {"key": "between_0_and_1", "C04-M1": "above_1", "C04-M4": "whole_number", "C04-M5": "negative"},
    "principle": {"key": "different_rates", "C04-M6": "boiling_points", "C04-M7": "colour", "C04-M8": "react_paper"},
    "industry": {"key": "chromatography", "C04-M9": "steam_distillation", "C04-M10": "solvent_extraction", "C04-M11": "filtration"},
    "affinity": {"key": "slower_lower_rf", "C04-M12": "faster_higher_rf", "C04-M13": "no_effect", "C04-M14": "with_front"},
}
MODELS = mixed_models("C04", TABLE, 14)
