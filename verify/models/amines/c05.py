"""C05 Reactions and tests of amines: named answers. Primary aliphatic amines give N2 with nitrous acid; only primary
amines give the carbylamine (isocyanide) test; primary and secondary amines are acylated, tertiary (no N-H) are not;
with Hinsberg's reagent the primary sulfonamide keeps an acidic N-H and dissolves in NaOH, the secondary does not and
tertiary amines do not react; exhaustive methylation adds one CH3 per N-H then one more to make the quaternary salt.
M1 thinks secondary amines give N2; M2 thinks tertiary amines give N2; M3 thinks any amine with N-H gives N2; M4 thinks
any N-H amine gives the isocyanide; M5 thinks tertiary amines give it; M6 thinks primary amines do not; M7 thinks acyl
chlorides react only with secondary and tertiary amines; M8 thinks secondary amines have no replaceable H; M9 thinks
aromatic amines are too weakly basic to be acylated; M10 thinks the secondary sulfonamide is acidic; M11 thinks tertiary
amines form sulfonamides; M12 thinks sulfonamides never dissolve in alkali; M13 counts all four methyls on N; M14 thinks
one CH3I makes the quaternary salt; M15 counts only the two N-H hydrogens."""
from ._table import table_models

ANSWERS = {
    "nitrous": {"key": "primary", "C05-M1": "secondary", "C05-M2": "tertiary", "C05-M3": "primary_and_secondary"},
    "carbylamine": {"key": "primary", "C05-M4": "secondary", "C05-M5": "tertiary", "C05-M6": "secondary_and_tertiary"},
    "acetyl": {"key": "triethylamine", "C05-M7": "ethylamine", "C05-M8": "diethylamine", "C05-M9": "aniline"},
    "hinsberg": {"key": "ethylamine", "C05-M10": "diethylamine", "C05-M11": "triethylamine", "C05-M12": "none"},
    "methyl": {"key": "three", "C05-M13": "four", "C05-M14": "one", "C05-M15": "two"},
}
MODELS = table_models("C05", ANSWERS, 15)
