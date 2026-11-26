"""C01 Writing organic structures: named answers. A carbon bonded to 1, 2, 3 or 4 other carbons is primary, secondary,
tertiary or quaternary: C2 of (CH3)3C-CH2CH3 is quaternary; (CH3)3CH has three primary carbons. In bond-line formulas
each corner and line end is a carbon carrying enough H for four bonds. 2-Methylpropane is (CH3)3CH. Phytane,
2,6,10,14-tetramethylhexadecane, has 16 + 4 = 20 carbons.
M1 counts only the methyl branches; M2 thinks a carbon with no H is primary; M3 counts only the chain neighbours; M4
counts every carbon; M5 counts the central carbon; M6 counts only the chain ends; M7 takes corners for H atoms; M8 takes
them for bonds only; M9 takes them for O atoms; M10 writes butane; M11 writes neopentane; M12 writes 2-methylbutane; M13
leaves out the methyl groups; M14 uses the last locant; M15 counts tetramethyl as one carbon."""
from ._mix import mixed_models

TABLE = {
    "classify": {"key": "quaternary", "C01-M1": "tertiary", "C01-M2": "primary", "C01-M3": "secondary"},
    "primary_count": {"key": "three", "C01-M4": "four", "C01-M5": "one", "C01-M6": "two"},
    "bond_line": {"key": "carbon_with_h", "C01-M7": "hydrogen", "C01-M8": "bond_only", "C01-M9": "oxygen"},
    "condensed": {"key": "ch3_3_ch", "C01-M10": "butane", "C01-M11": "neopentane", "C01-M12": "methylbutane"},
    "phytane": {"key": "twenty", "C01-M13": "sixteen", "C01-M14": "fourteen", "C01-M15": "seventeen"},
}
MODELS = mixed_models("C01", TABLE, 15)
