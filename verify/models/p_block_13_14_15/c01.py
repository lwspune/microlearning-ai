"""C01 Trends in groups 13, 14 and 15: named answers. Ga is smaller than Al because its ten 3d electrons shield poorly.
Ionisation enthalpy rises across (Al 577 < Si 786 < P 1012 kJ/mol): more nuclear charge, smaller radius. M3+ radii
grow down group 13: B3+ < Al3+ < Ga3+ < In3+ < Tl3+. Down a group metallic character rises and ionisation enthalpy
falls.
M1 gives Ga fewer shells; M2 gives Ga fewer protons; M3 calls Ga a nonmetal; M4 thinks nuclear charge falls; M5 adds new
shells across a period; M6 calls P a metal; M7 reverses the order; M8 carries the Ga anomaly over to the ions; M9 thinks
equal charges mean equal radii; M10 thinks metallic character falls; M11 thinks it is constant; M12 thinks it falls then
rises; M13 thinks ionisation enthalpy rises; M14 thinks it is constant; M15 thinks it rises then falls."""
from ._mix import mixed_models

TABLE = {
    "ga_al": {"key": "poor_d_shielding", "C01-M1": "fewer_shells", "C01-M2": "fewer_protons", "C01-M3": "nonmetal"},
    "al_si_p": {"key": "charge_up_radius_down", "C01-M4": "charge_falls", "C01-M5": "new_shells", "C01-M6": "p_metal"},
    "m3_radii": {"key": "b_al_ga_in_tl", "C01-M7": "tl_in_ga_al_b", "C01-M8": "b_ga_al_in_tl", "C01-M9": "all_equal"},
    "metallic": {"key": "increases", "C01-M10": "decreases", "C01-M11": "constant", "C01-M12": "falls_rises"},
    "ie_down": {"key": "decreases", "C01-M13": "increases", "C01-M14": "constant", "C01-M15": "rises_falls"},
}
MODELS = mixed_models("C01", TABLE, 15)
