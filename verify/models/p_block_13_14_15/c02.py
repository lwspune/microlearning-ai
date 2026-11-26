"""C02 The inert pair effect: named answers. Down a group the ns2 pair holds back from bonding, so the lower oxidation
state becomes more stable: Pb shows it most in group 14; Tl+ is more stable than Tl3+ (so Tl3+ salts are oxidising);
PbCl2 is more stable than PbCl4, while GeCl4 is stable.
M1 thinks the effect is strongest at the top; M2 thinks metalloids show it most; M3 picks germanium; M4 calls Tl an inner
transition element; M5 credits its being a metal; M6 credits electronegativity; M7 thinks more chlorine means more stable;
M8 thinks Pb prefers +4 like carbon; M9 thinks Cl cannot oxidise Pb; M10 thinks Tl3+ loses electrons; M11 thinks Tl+ is
unstable; M12 calls Tl a nonmetal; M13 thinks +1 gets less stable down the group; M14 thinks it is constant; M15 thinks
only +3 exists."""
from ._mix import mixed_models

TABLE = {
    "most": {"key": "lead", "C02-M1": "carbon", "C02-M2": "silicon", "C02-M3": "germanium"},
    "thallium": {"key": "inert_pair", "C02-M4": "inner_transition", "C02-M5": "is_metal", "C02-M6": "electronegativity"},
    "pbcl2": {"key": "inert_pair_plus2", "C02-M7": "more_chlorine", "C02-M8": "prefers_plus4", "C02-M9": "cl_cannot_oxidise"},
    "tl3_oxidant": {"key": "gains_two", "C02-M10": "loses_electrons", "C02-M11": "tl_plus_unstable", "C02-M12": "nonmetal"},
    "plus1_trend": {"key": "increases", "C02-M13": "decreases", "C02-M14": "constant", "C02-M15": "only_plus3"},
}
MODELS = mixed_models("C02", TABLE, 15)
