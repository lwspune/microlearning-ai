"""C03 Oxidation states and oxides: named answers. N has no d orbitals in its valence shell, so it cannot expand beyond
four bonds (no NCl5; P forms PCl5). Down group 15 the +5 state grows less stable. C is -4 in CH4. Acidity of group 15
oxides falls down the group (N2O5 most acidic); group 13 oxides grow more basic down the group (B2O3 acidic, Al2O3
amphoteric, Tl2O basic).
M1 calls N too large; M2 blames chlorine; M3 thinks N forms no covalent bonds; M4 thinks +5 grows more stable; M5 thinks
it is constant; M6 thinks only N shows +5; M7 flips the sign; M8 gives 0; M9 counts one H; M10 reverses the trend; M11
counts O atoms; M12 picks arsenic; M13 says more acidic; M14 says unchanged; M15 says neutral."""
from ._mix import mixed_models

TABLE = {
    "ncl5": {"key": "no_d_orbitals", "C03-M1": "n_too_large", "C03-M2": "cl_too_electronegative", "C03-M3": "no_covalent"},
    "plus5": {"key": "decreases", "C03-M4": "increases", "C03-M5": "constant", "C03-M6": "only_nitrogen"},
    "ch4": {"key": "minus_4", "C03-M7": "plus_4", "C03-M8": "zero", "C03-M9": "minus_1"},
    "acidic_oxide": {"key": "n2o5", "C03-M10": "bi2o5", "C03-M11": "p4o10", "C03-M12": "as2o5"},
    "group13_oxides": {"key": "more_basic", "C03-M13": "more_acidic", "C03-M14": "unchanged", "C03-M15": "neutral"},
}
MODELS = mixed_models("C03", TABLE, 15)
