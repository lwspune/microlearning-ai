"""C01 Classes and names of amines: named answers. Amines are primary, secondary or tertiary by the number of carbon
groups on N (not by the carbon N sits on); N is sp3 with a lone pair (pyramidal). IUPAC: alkanamine; groups on N take
an N- locant, alphabetically; C6H5NH2 is aniline (benzenamine).
M1 counts only the three bonds of N, calling it sp2; M2 counts five electron pairs, sp3d; M3 thinks the lone pair makes
N sp; M4 classifies by the carbon carrying N, as for alcohols; M5 thinks four carbons around N make it quaternary;
M6 counts only alkyl groups, ignoring aryl groups; M7 picks the wrong parent chain; M8 does not alphabetise the N-
prefixes; M9 gives the common name; M10 puts the N-substituent on the ring; M11 confuses aniline with benzylamine."""
from ._table import table_models

ANSWERS = {
    "hybrid": {"key": "sp3", "C01-M1": "sp2", "C01-M3": "sp", "C01-M2": "sp3d"},
    "tert": {"key": "primary", "C01-M4": "tertiary", "C01-M5": "quaternary", "C01-M6": "secondary"},
    "secondary": {"key": "diphenylamine", "C01-M4": "isopropylamine", "C01-M6": "dimethylaniline", "C01-M5": "cyclohexylamine"},
    "name": {"key": "n_ethyl_n_methylpropan_1_amine", "C01-M7": "n_methyl_n_propylethanamine",
             "C01-M8": "n_methyl_n_ethylpropan_1_amine", "C01-M9": "ethylmethylpropylamine"},
    "aniline": {"key": "n_methylaniline", "C01-M10": "methylaniline_4", "C01-M11": "phenylmethanamine",
                "C01-M9": "methylphenylamine_common"},
}
MODELS = table_models("C01", ANSWERS, 11)
