"""C05 Nucleophilic addition: named answers. HCN adds to give cyanohydrins; alcohols (dry HCl) give hemiacetals and
then acetals; NH2OH, NH2NH2 and 2,4-DNP add and lose water (addition-elimination) to give oximes, hydrazones and
2,4-dinitrophenylhydrazones; aldehydes and ketones both react.
M1 stops at the hemiacetal; M2 thinks an ester forms; M3 thinks the alcohol forms an ether by itself; M4 thinks HCN
reduces the C=O, leaving no OH; M5 puts the nucleophile on oxygen; M6 thinks ketones do not undergo nucleophilic
addition; M7 thinks no water is lost; M8 mixes up the ammonia derivatives' products; M9 thinks hydrazine simply
reduces the ketone to an alcohol; M10 confuses the 2,4-DNP test with Tollens' test."""
from ._table import table_models

ANSWERS = {
    "acetal": {"key": "acetal", "C05-M1": "hemiacetal", "C05-M2": "methyl_acetate", "C05-M3": "dimethyl_ether"},
    "hcn": {"key": "cyanohydrin", "C05-M4": "nitrile_no_oh", "C05-M5": "cn_on_o", "C05-M6": "no_reaction"},
    "oxime": {"key": "oxime", "C05-M7": "addition_product", "C05-M8": "hydrazone", "C05-M5": "o_bonded"},
    "hydrazone": {"key": "hydrazone", "C05-M9": "alcohol", "C05-M8": "oxime", "C05-M7": "addition_product"},
    "dnp": {"key": "orange_ppt_both", "C05-M6": "aldehydes_only", "C05-M10": "silver_mirror", "C05-M7": "colourless_adduct"},
}
MODELS = table_models("C05", ANSWERS, 10)
