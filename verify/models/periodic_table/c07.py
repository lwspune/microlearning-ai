"""C07 Metallic character and oxides: named answers. Metallic character falls across a period and rises down a group:
K > Mg > Al > B. Oxides run from basic (Li2O, Na2O) through amphoteric (Al2O3, reacting with both HCl and NaOH) to
acidic (B2O3, CO2). Ge (group 14, valence 4) and S (group 16, valence 2) give GeS2.
M1 reverses the order; M2 and M3 mix up the trends; M4 picks CO2; M5 picks B2O3; M6 calls them equal; M7 calls Al2O3
basic; M8 acidic; M9 neutral; M10 takes Ge's valence as 2; M11 swaps the valencies; M12 takes S's valence as 1; M13
thinks metallic character falls down a group; M14 thinks it is unchanged; M15 thinks it rises then falls."""
from ._mix import mixed_models

TABLE = {
    "metallic": {"key": "k_mg_al_b", "C07-M1": "b_al_mg_k", "C07-M2": "al_mg_b_k", "C07-M3": "mg_al_k_b"},
    "basic_oxide": {"key": "li2o", "C07-M4": "co2", "C07-M5": "b2o3", "C07-M6": "equal"},
    "alumina": {"key": "amphoteric", "C07-M7": "basic", "C07-M8": "acidic", "C07-M9": "neutral"},
    "ge_s": {"key": "ges2", "C07-M10": "ges", "C07-M11": "ge2s", "C07-M12": "ges4"},
    "down_group": {"key": "increases", "C07-M13": "decreases", "C07-M14": "unchanged", "C07-M15": "rises_falls"},
}
MODELS = mixed_models("C07", TABLE, 15)
