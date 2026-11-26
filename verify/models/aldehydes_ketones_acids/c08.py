"""C08 Preparing carboxylic acids: named answers. RMgX + CO2 (dry ice), then acid, gives RCOOH (one carbon more);
nitriles hydrolyse (via amides) to acids; hot alkaline KMnO4 oxidises any alkyl side chain on benzene to COOH and
cleaves C=C (cyclohexene gives adipic acid); tetralin gives phthalic acid.
M1 thinks CO2 adds no carbon; M2 adds two carbons; M3 thinks the Grignard and CO2 give an alcohol; M4 stops at the
amide; M5 gives the aldehyde; M6 reduces the nitrile to an amine; M7 oxidises only the end carbon of the side chain;
M8 thinks hot KMnO4 leaves the compound unchanged; M9 cuts the side chain off at the wrong bond; M10 stops at the
diol; M11 opens only one side of a fused ring."""
from ._table import table_models

ANSWERS = {
    "dryice": {"key": "ethanoic_acid", "C08-M1": "methanoic_acid", "C08-M2": "propanoic_acid", "C08-M3": "ethanol"},
    "nitrile": {"key": "benzoic_acid", "C08-M4": "benzamide", "C08-M5": "benzaldehyde", "C08-M6": "benzylamine"},
    "propylbenzene": {"key": "benzoic_acid", "C08-M7": "phenylpropanoic_acid", "C08-M8": "unchanged", "C08-M9": "benzene_propanoic"},
    "tetralin": {"key": "phthalic_acid", "C08-M11": "phenylbutanoic_acid", "C08-M8": "unchanged", "C08-M9": "benzoic_acid"},
    "cyclohexene": {"key": "adipic_acid", "C08-M10": "cyclohexane_diol", "C08-M8": "unchanged", "C08-M9": "cyclohexanone"},
}
MODELS = table_models("C08", ANSWERS, 11)
