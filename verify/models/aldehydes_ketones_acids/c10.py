"""C10 Reactions of carboxylic acids: named answers. Fischer esterification (alcohol, conc. H2SO4) gives an ester and
water; PCl5 or SOCl2 turns -COOH into -COCl; Cl2 with red P (Hell-Volhard-Zelinsky) substitutes an alpha-H; diborane
reduces -COOH (not esters, nitro or halo groups) to -CH2OH; soda-lime decarboxylates sodium salts (sodium acetate gives
methane).
M1 thinks diborane reduces esters; M2 thinks it reduces nitro groups; M3 thinks it reduces halo groups; M4 thinks
esterification releases H2; M5 thinks the alcohol forms an ether; M6 thinks an anhydride forms; M7 replaces the whole
COOH or OH to give an alkyl chloride; M8 substitutes an alpha-H when the OH is replaced; M9 thinks no reaction occurs;
M10 replaces the OH when HVZ substitutes the alpha-H; M11 keeps all the carbons on decarboxylation; M12 gives a
ketone."""
from ._table import table_models

ANSWERS = {
    "diborane": {"key": "acid_group", "C10-M1": "ester_group", "C10-M2": "nitro_group", "C10-M3": "halo_group"},
    "ester": {"key": "ethyl_acetate_water", "C10-M4": "ethyl_acetate_h2", "C10-M5": "diethyl_ether", "C10-M6": "anhydride"},
    "pcl5": {"key": "acetyl_chloride", "C10-M8": "chloroacetic", "C10-M7": "chloroethane", "C10-M9": "no_reaction"},
    "hvz": {"key": "chloroacetic", "C10-M10": "acetyl_chloride", "C10-M9": "no_reaction", "C10-M7": "chloromethane"},
    "sodalime": {"key": "methane", "C10-M11": "ethane", "C10-M12": "acetone", "C10-M9": "no_gas"},
}
MODELS = table_models("C10", ANSWERS, 12)
