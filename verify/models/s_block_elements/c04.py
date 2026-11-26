"""C04 Reactions of s-block metals: named answers. 2Na + 2H2O -> 2NaOH + H2. Mg burns in air to MgO and Mg3N2. BeO
reacts with both HCl and NaOH: amphoteric. Na in liquid ammonia gives Na+ and ammoniated electrons: a blue conducting
solution. In Na2O2 (peroxide O is -1) Na is +1.
M1 gives Na2O; M2 gives O2; M3 gives NaH; M4 forgets the nitride; M5 gives a peroxide; M6 gives the hydroxide; M7 calls
BeO basic; M8 calls it acidic; M9 says it reacts with neither; M10 credits metal particles; M11 credits a precipitate;
M12 credits H+ from ammonia; M13 takes O as -2; M14 thinks Na stays at 0; M15 swaps Na and O."""
from ._mix import mixed_models

TABLE = {
    "na_water": {"key": "naoh_h2", "C04-M1": "na2o_h2", "C04-M2": "naoh_o2", "C04-M3": "nah_o2"},
    "mg_air": {"key": "mgo_mg3n2", "C04-M4": "mgo_only", "C04-M5": "mgo2", "C04-M6": "mg_oh_2"},
    "beo": {"key": "amphoteric", "C04-M7": "basic", "C04-M8": "acidic", "C04-M9": "neither"},
    "ammonia": {"key": "ammoniated_electrons", "C04-M10": "metal_particles", "C04-M11": "precipitate", "C04-M12": "h_plus"},
    "na2o2": {"key": "plus_1", "C04-M13": "plus_2", "C04-M14": "zero", "C04-M15": "minus_1"},
}
MODELS = mixed_models("C04", TABLE, 15)
