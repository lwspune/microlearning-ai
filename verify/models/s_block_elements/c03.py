"""C03 Trends in groups 1 and 2: named answers. Na (496 kJ/mol) < Mg (737): Mg has a larger nuclear charge, smaller
radius and a full 3s. K (227 pm) > Na (186) > Mg (160): K has an extra shell. Alkali metals lose their ns1 electron
easily: very negative E0, strong reducing agents. Li resembles Mg diagonally. Francium is the radioactive alkali metal.
M1 thinks Na has more electrons; M2 puts Mg's electron in a higher shell; M3 calls Na an alkaline earth metal; M4 gives K
a smaller nuclear charge; M5 calls K lighter; M6 gives K fewer electrons; M7 thinks alkali metals gain electrons; M8
calls them oxidising agents; M9 gives them high ionisation enthalpies; M10 picks sodium; M11 picks beryllium; M12 picks
aluminium; M13 picks caesium; M14 picks radium; M15 picks lithium."""
from ._mix import mixed_models

TABLE = {
    "na_mg_ie": {"key": "mg_charge_radius", "C03-M1": "na_more_electrons", "C03-M2": "mg_higher_shell", "C03-M3": "na_group2"},
    "k_na": {"key": "extra_shell", "C03-M4": "smaller_charge", "C03-M5": "lighter", "C03-M6": "fewer_electrons"},
    "e0": {"key": "lose_easily", "C03-M7": "gain_electrons", "C03-M8": "oxidising", "C03-M9": "high_ie"},
    "diagonal": {"key": "magnesium", "C03-M10": "sodium", "C03-M11": "beryllium", "C03-M12": "aluminium"},
    "radioactive": {"key": "francium", "C03-M13": "caesium", "C03-M14": "radium", "C03-M15": "lithium"},
}
MODELS = mixed_models("C03", TABLE, 15)
