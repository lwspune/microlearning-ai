"""C10 Tests for metal ions: named answers. Cu2+ with excess ammonia: deep blue [Cu(NH3)4]2+. Fe3+ with thiocyanate:
blood red; with potassium ferrocyanide: Prussian blue. Cu2+ with ferrocyanide: chocolate brown. Ni2+ with
dimethylglyoxime in ammonia: rosy red precipitate. Group reagents: dil. HCl (group I), H2S in dil. HCl (group II),
NH4Cl + NH4OH (group III), H2S in ammoniacal solution (group IV).
M1 gives Fe3+'s thiocyanate colour; M2 a white precipitate; M3 Prussian blue; M4 Cu2+'s ammonia colour; M5 the
ferrocyanide colour; M6 no change; M7 the thiocyanate colour; M8 the copper-ammonia colour; M9 copper's ferrocyanide
colour; M10 the green of Ni2+ itself; M11 blood red; M12 a black sulfide; M13 group I's reagent; M14 group IV's;
M15 group III's."""
from ._mix import mixed_models

TABLE = {
    "cu": {"key": "deep_blue", "C10-M1": "blood_red", "C10-M2": "white_ppt", "C10-M3": "prussian_blue"},
    "scn": {"key": "blood_red", "C10-M4": "deep_blue", "C10-M5": "prussian_blue", "C10-M6": "no_change"},
    "ferro": {"key": "prussian_blue", "C10-M7": "blood_red", "C10-M8": "deep_blue", "C10-M9": "chocolate_brown"},
    "ni": {"key": "rosy_red_ppt", "C10-M10": "green_solution", "C10-M11": "blood_red", "C10-M12": "black_ppt"},
    "group": {"key": "h2s_acidic", "C10-M13": "dilute_hcl", "C10-M14": "h2s_ammoniacal", "C10-M15": "ammonium_hydroxide"},
}
MODELS = mixed_models("C10", TABLE, 15)
