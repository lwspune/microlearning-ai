"""C02 Preparing amines: named answers. Reducing nitriles (Na/ethanol, LiAlH4) gives RCH2NH2 (carbon count kept);
LiAlH4 reduces amides to amines with the same carbons; Hofmann bromamide (Br2, NaOH) gives an amine with one carbon
fewer; Gabriel phthalimide synthesis gives primary amines only; ammonolysis of alkyl halides gives a mixture.
M1 loses the nitrile carbon; M2 hydrolyses to the acid; M3 stops at the aldehyde; M4 keeps the carbon in Hofmann
degradation; M5 stops at the N-bromoamide; M6 confuses LiAlH4 reduction with Hofmann degradation; M7 reduces the amide
to an alcohol; M8 thinks Gabriel synthesis gives a mixture; M9 thinks Gabriel synthesis makes aniline; M10 thinks
ammonolysis gives only the primary amine; M11 thinks ammonia eliminates HX; M12 thinks ammonia
hydrolyses the halide like water; M13 thinks Gabriel synthesis gives secondary amines."""
from ._table import table_models

ANSWERS = {
    "nitrile": {"key": "propan_1_amine", "C02-M1": "ethanamine", "C02-M2": "propanoic_acid", "C02-M3": "propanal"},
    "hofmann": {"key": "methanamine", "C02-M4": "ethanamine", "C02-M5": "n_bromoacetamide", "C02-M2": "acetic_acid"},
    "lialh4": {"key": "ethanamine", "C02-M6": "methanamine", "C02-M7": "ethanol", "C02-M2": "acetic_acid"},
    "gabriel": {"key": "primary_only", "C02-M8": "mixture", "C02-M9": "aniline_too", "C02-M13": "secondary"},
    "ammonolysis": {"key": "mixture", "C02-M10": "ethylamine_only", "C02-M11": "ethene", "C02-M12": "ethanol"},
}
MODELS = table_models("C02", ANSWERS, 13)
