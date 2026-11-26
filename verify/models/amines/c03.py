"""C03 Boiling points of amines: named answers. Primary and secondary amines hydrogen bond through N-H; tertiary amines
cannot, so for isomers bp is primary > secondary > tertiary; branching lowers bp; N-H bonds are weaker than O-H, so amines
boil below alcohols of similar mass; lower amines dissolve in water by hydrogen bonding with it.
M1 thinks the compact, branched isomer has stronger attractions; M2 thinks NH2 on an inner carbon hydrogen bonds better;
M3 thinks extra methyl branches add van der Waals attraction; M4 thinks more alkyl groups on N raise bp; M5 thinks
secondary amines hydrogen bond most; M6 thinks isomers boil alike; M7 thinks N-H hydrogen bonds beat O-H; M8 thinks amines
do not hydrogen bond; M9 thinks hydrogen bonding lowers bp; M10 thinks tertiary amines lose the lone pair; M11 thinks
isomers differ in mass; M12 thinks boiling breaks covalent bonds; M13 thinks amines ionise completely in water; M14 thinks
amines are nonpolar; M15 thinks amines hydrolyse in water."""
from ._table import table_models

ANSWERS = {
    "butyl": {"key": "n_butylamine", "C03-M1": "tert_butylamine", "C03-M2": "sec_butylamine", "C03-M3": "isobutylamine"},
    "order": {"key": "tri_lt_ethylmethyl_lt_propyl", "C03-M4": "propyl_lt_ethylmethyl_lt_tri",
              "C03-M5": "tri_lt_propyl_lt_ethylmethyl", "C03-M6": "all_equal"},
    "alcohol": {"key": "propane_lt_amine_lt_ethanol", "C03-M7": "propane_lt_ethanol_lt_amine",
                "C03-M8": "propane_eq_amine_lt_ethanol", "C03-M9": "ethanol_lt_amine_lt_propane"},
    "tertiary": {"key": "no_n_h", "C03-M10": "no_lone_pair", "C03-M11": "smaller_mass", "C03-M12": "weaker_c_n"},
    "soluble": {"key": "h_bond_water", "C03-M13": "ionise_completely", "C03-M14": "nonpolar", "C03-M15": "hydrolyse"},
}
MODELS = table_models("C03", ANSWERS, 15)
