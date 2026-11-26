"""C01 Oxidation and reduction: named answers. Oxidation is loss of electrons (rise in oxidation number), reduction gain
of electrons; the oxidising agent is itself reduced. In Sn2+ + 2Fe3+ -> Sn4+ + 2Fe2+, Sn2+ is oxidised; in 2Na + S ->
Na2S, S is the oxidising agent; Mg -> Mg2+ is oxidation; SO2 -> S2Cl2 (S +4 -> +1) is reduction.
M1 swaps oxidation and reduction; M2 calls gain of hydrogen oxidation; M3 calls loss of oxygen oxidation; M4 reverses
which species is oxidised; M5 calls the oxidised species the oxidising agent; M6 labels a product; M7 picks the species
that is oxidised; M8 picks the product; M9 thinks no oxygen means no redox; M10 thinks gaining charge is oxidation; M11
thinks forming a metal is oxidation; M12 thinks any change of charge is oxidation; M13 thinks gaining chlorine is
oxidation; M14 says neither; M15 says both."""
from ._mix import mixed_models

TABLE = {
    "define": {"key": "loss_electrons", "C01-M1": "gain_electrons", "C01-M2": "gain_hydrogen", "C01-M3": "loss_oxygen"},
    "tin": {"key": "sn_oxidised", "C01-M4": "fe_oxidised", "C01-M5": "sn_oxidant", "C01-M6": "fe2_reduced"},
    "sodium": {"key": "sulfur", "C01-M7": "sodium", "C01-M8": "sodium_sulfide", "C01-M9": "none"},
    "oxidised": {"key": "mg_to_mg2", "C01-M10": "o2_to_o2minus", "C01-M11": "cu2_to_cu", "C01-M12": "fe3_to_fe2"},
    "so2": {"key": "reduction", "C01-M13": "oxidation", "C01-M14": "neither", "C01-M15": "both"},
}
MODELS = mixed_models("C01", TABLE, 15)
