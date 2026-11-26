"""C08 Molecular orbital theory. Bond order = (N_b - N_a) / 2; zero means the molecule does not exist (He2). O2 has
two unpaired electrons in antibonding pi* orbitals, so it is paramagnetic, which only MO theory explains.
params["q"]:
  "explains": named. "formula": named. "bond_order": inputs Nb, Na. "he2": named. "paramagnetic": named.
M1 credits hybridisation; M2 credits valence bond theory; M3 credits VSEPR; M4 forgets the half; M5 adds the counts; M6
subtracts the wrong way; M7 thinks He2 is stable; M8 gives He2 a single bond; M9 thinks He2 is paramagnetic; M10 thinks
all O2's electrons pair; M11 credits the double bond; M12 puts the unpaired electrons in bonding orbitals."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "explains": {"key": "mot", "C08-M1": "hybridisation", "C08-M2": "vbt", "C08-M3": "vsepr"},
    "formula": {"key": "half_b_minus_a", "C08-M4": "b_minus_a", "C08-M5": "half_b_plus_a", "C08-M6": "a_minus_b"},
    "bond_order": {"key": lambda v: sig((v["Nb"] - v["Na"]) / 2), "C08-M4": lambda v: sig(v["Nb"] - v["Na"]),
                   "C08-M5": lambda v: sig((v["Nb"] + v["Na"]) / 2), "C08-M6": lambda v: sig((v["Na"] - v["Nb"]) / 2)},
    "he2": {"key": "does_not_exist", "C08-M7": "very_stable", "C08-M8": "single_bond", "C08-M9": "paramagnetic"},
    "paramagnetic": {"key": "unpaired_antibonding", "C08-M10": "all_paired", "C08-M11": "double_bond", "C08-M12": "unpaired_bonding"},
}
MODELS = mixed_models("C08", TABLE, 12)
