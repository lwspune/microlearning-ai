"""C05 Ionisation enthalpy: named answers. It rises across a period (larger effective nuclear charge, smaller radius: Li
520 < F 1681 kJ/mol) and falls down a group (O > S); the second is larger than the first (the electron leaves a
positive ion); half-filled and full subshells cause dips: N > O, and S (about 1000) lies below P (1060).
M1 thinks Li has more electrons; M2 thinks F's electron is in a higher shell; M3 thinks Li is more electronegative; M4
thinks the second electron is in a higher shell; M5 thinks the atom gains protons; M6 thinks the first electron is a
core electron; M7 follows the trend blindly; M8 puts S above Cl; M9 sets S equal to P; M10 follows the trend for O; M11
calls them equal; M12 thinks they cannot be compared; M13 thinks larger atoms hold electrons tighter; M14 calls them
equal; M15 thinks it depends on charge."""
from ._mix import mixed_models

TABLE = {
    "li_f": {"key": "zeff_radius", "C05-M1": "li_more_electrons", "C05-M2": "f_higher_shell", "C05-M3": "li_electronegative"},
    "second": {"key": "positive_ion", "C05-M4": "higher_shell", "C05-M5": "gains_protons", "C05-M6": "core_first"},
    "sulfur": {"key": "below_p", "C05-M7": "between_p_cl", "C05-M8": "above_cl", "C05-M9": "equal_p"},
    "n_o": {"key": "nitrogen", "C05-M10": "oxygen", "C05-M11": "equal", "C05-M12": "cannot_compare"},
    "o_s": {"key": "sulfur", "C05-M13": "oxygen", "C05-M14": "equal", "C05-M15": "depends_charge"},
}
MODELS = mixed_models("C05", TABLE, 15)
