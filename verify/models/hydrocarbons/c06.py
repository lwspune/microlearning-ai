"""C06 Alkynes: named answers. A terminal alkyne's H (on an sp carbon, 50% s character) is acidic: acetylene, not ethane,
ethylene or dimethylacetylene. Lindlar's catalyst (Pd-C/quinoline) stops at the alkene: propyne -> propene. HgSO4/H2SO4
adds water to ethyne, giving ethanal (via the enol). HC#CH + LiNH2 -> HC#CLi; with CH3CH2Cl -> but-1-yne.
M1 picks ethane; M2 picks ethylene; M3 picks an internal alkyne; M4 reduces fully; M5 expects an alcohol; M6 expects no
reaction; M7 expects ethanol; M8 expects acetone; M9 expects acetic acid; M10 reduces; M11 moves the triple bond; M12
adds a carbon; M13 thinks the triple bond is weak; M14 calls the carbon sp3; M15 calls alkynes ionic."""
from ._mix import mixed_models

TABLE = {
    "acidic": {"key": "acetylene", "C06-M1": "ethane", "C06-M2": "ethylene", "C06-M3": "dimethylacetylene"},
    "lindlar": {"key": "propene", "C06-M4": "propane", "C06-M5": "propanol", "C06-M6": "no_reaction"},
    "hydration": {"key": "ethanal", "C06-M7": "ethanol", "C06-M8": "acetone", "C06-M9": "acetic_acid"},
    "chain": {"key": "but_1_yne", "C06-M10": "butane", "C06-M11": "but_2_yne", "C06-M12": "pent_1_yne"},
    "why_acidic": {"key": "sp_s_character", "C06-M13": "weak_triple", "C06-M14": "sp3_carbon", "C06-M15": "ionic"},
}
MODELS = mixed_models("C06", TABLE, 15)
