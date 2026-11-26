"""C04 Uses of adsorption and catalysis: named answers. In Haber's process Fe is a heterogeneous catalyst and K2O a
promoter; an inhibitor slows a reaction. Animal charcoal adsorbs the coloured impurities of raw sugar; gas masks adsorb
poisonous gases on activated charcoal.
M1 calls K2O the catalyst; M2 an inhibitor; M3 an adsorbate; M4 thinks charcoal bleaches by oxidation; M5 thinks the sugar
is taken up; M6 thinks charcoal dissolves the colour; M7 thinks an inhibitor speeds a reaction; M8 thinks it is used up;
M9 thinks it shifts the equilibrium; M10 calls Fe homogeneous; M11 an autocatalyst; M12 an inhibitor; M13 thinks the
charcoal takes up oxygen; M14 thinks it reacts with every gas; M15 thinks it only filters dust."""
from ._mix import mixed_models

TABLE = {
    "k2o": {"key": "promoter", "C04-M1": "catalyst", "C04-M2": "inhibitor", "C04-M3": "adsorbate"},
    "sugar": {"key": "adsorbs_colour", "C04-M4": "oxidises", "C04-M5": "takes_sugar", "C04-M6": "dissolves_colour"},
    "inhibitor": {"key": "slows", "C04-M7": "speeds", "C04-M8": "used_up", "C04-M9": "shifts_equilibrium"},
    "iron": {"key": "heterogeneous", "C04-M10": "homogeneous", "C04-M11": "autocatalyst", "C04-M12": "inhibitor"},
    "gas_mask": {"key": "adsorbs_poison", "C04-M13": "takes_oxygen", "C04-M14": "reacts_all", "C04-M15": "dust_only"},
}
MODELS = mixed_models("C04", TABLE, 15)
