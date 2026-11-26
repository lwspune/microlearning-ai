"""C05 Oxidation and ozonolysis of alkenes: named answers. Hot acidic KMnO4 cleaves C=C: (CH3)2C=CH2 -> acetone + CO2 +
H2O; but-2-ene -> two ethanoic acid. Cold dilute alkaline KMnO4 gives a diol: but-2-ene -> butane-2,3-diol. Ozonolysis
splits C=C into two carbonyls: two ethanal come from but-2-ene; acetone + ethanal from 2-methylbut-2-ene.
M1 picks alkaline KMnO4; M2 picks the hydration reagents; M3 picks NaOH/H2O2; M4 cleaves as with acid; M5 gives a ketone;
M6 gives an alkyne; M7 picks but-1-ene; M8 picks ethene; M9 picks 2-methylpropene; M10 picks 2-methylpropene; M11 picks
pent-2-ene; M12 picks 3-methylbut-1-ene; M13 gives the cold alkaline product; M14 stops at the aldehyde; M15 gives only
CO2."""
from ._mix import mixed_models

TABLE = {
    "acid_kmno4": {"key": "acidic_kmno4", "C05-M1": "alkaline_kmno4", "C05-M2": "hgso4_h2so4", "C05-M3": "naoh_h2o2"},
    "cold_alkaline": {"key": "butane_2_3_diol", "C05-M4": "ethanoic_acid", "C05-M5": "butanone", "C05-M6": "but_2_yne"},
    "two_ethanal": {"key": "but_2_ene", "C05-M7": "but_1_ene", "C05-M8": "ethene", "C05-M9": "methylpropene"},
    "acetone_ethanal": {"key": "methylbut_2_ene_2", "C05-M10": "methylpropene", "C05-M11": "pent_2_ene", "C05-M12": "methylbut_1_ene_3"},
    "acid_but2ene": {"key": "ethanoic_acid", "C05-M13": "butane_2_3_diol", "C05-M14": "ethanal", "C05-M15": "co2_only"},
}
MODELS = mixed_models("C05", TABLE, 15)
