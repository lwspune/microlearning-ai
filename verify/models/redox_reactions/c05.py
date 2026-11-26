"""C05 Balancing by oxidation number: named answers. Make the total rise equal the total fall, then balance O with water
and H with H+ (acid). Cr2O7 2- (2 Cr, each +6 -> +3: fall 6) + 6Fe2+ (rise 1 each) -> 2Cr3+ + 6Fe3+: 1, 6, 2, 6.
MnO4- (+7 -> +2, fall 5) takes 5 Fe2+. 3CuO + 2NH3 -> 3Cu + N2 + 3H2O (Cu falls 2; two N rise 3 each).
M1 counts the change of one Cr only; M2 forgets the 2 Cr; M3 swaps the coefficients; M4 ignores the changes; M5 uses
Mn's oxidation number; M6 uses the number of Mn atoms plus one; M7 balances atoms but not electrons; M8 counts the N
change twice; M9 leaves CuO at 1; M10 balances atoms only; M11 sets each side's total to zero; M12 gives oxidant and
reductant equal coefficients; M13 adds O2; M14 adds OH- in acid; M15 adds H2O2."""
from ._mix import mixed_models

TABLE = {
    "dichromate": {"key": "c_1_6_2_6", "C05-M1": "c_1_3_2_3", "C05-M2": "c_1_6_1_6", "C05-M3": "c_6_1_2_1"},
    "permanganate": {"key": "five", "C05-M4": "one", "C05-M5": "seven", "C05-M6": "two"},
    "cuo": {"key": "three", "C05-M7": "two", "C05-M8": "six", "C05-M9": "one"},
    "rule": {"key": "rise_equals_fall", "C05-M10": "atoms_only", "C05-M11": "total_zero", "C05-M12": "equal_coefficients"},
    "acid_o": {"key": "water_then_h", "C05-M13": "o2_gas", "C05-M14": "hydroxide", "C05-M15": "peroxide"},
}
MODELS = mixed_models("C05", TABLE, 15)
