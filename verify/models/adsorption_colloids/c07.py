"""C07 Properties of colloids: named answers. Colloids scatter light, making the beam's path visible (Tyndall effect);
their particles jiggle from uneven bombardment by the medium (Brownian motion); charged particles move to an electrode in
an electric field (electrophoresis); by the Hardy-Schulze rule, ions of higher charge opposite to the sol's coagulate it
faster (Al3+ for a negative As2S3 sol). Milk is an oil-in-water emulsion.
M1 thinks the beam is invisible; M2 thinks light is absorbed; M3 thinks the sol glows; M4 credits convection; M5 thinks
particles are alive; M6 credits charge attraction; M7 describes electro-osmosis; M8 describes coagulation; M9 describes
scattering; M10 picks the smallest ion; M11 picks an ion of the same charge as the sol; M12 picks a heavier ion of lower
charge; M13 says water-in-oil; M14 says gel; M15 says foam."""
from ._mix import mixed_models

TABLE = {
    "tyndall": {"key": "path_visible", "C07-M1": "invisible", "C07-M2": "absorbed", "C07-M3": "glows"},
    "brownian": {"key": "uneven_bombardment", "C07-M4": "convection", "C07-M5": "alive", "C07-M6": "charge_attraction"},
    "electrophoresis": {"key": "particles_to_electrode", "C07-M7": "solvent_moves", "C07-M8": "coagulation_heat", "C07-M9": "scattering"},
    "hardy": {"key": "al3", "C07-M10": "na_ion", "C07-M11": "phosphate", "C07-M12": "ba2"},
    "milk_type": {"key": "oil_in_water", "C07-M13": "water_in_oil", "C07-M14": "gel", "C07-M15": "foam"},
}
MODELS = mixed_models("C07", TABLE, 15)
