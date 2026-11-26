"""C03 Kp and its relation to Kc: Kp = Kc (RT)^dn, dn = gaseous moles of products - of reactants (R = 0.0821).
params["q"]:
  "ammonia": named (dn = -2). "hi": named (dn = 0). "n2o4": inputs Kc, T (dn = +1). "dn": named. "equal": named.
M1 flips the sign of dn; M2 counts all the moles; M3 sets Kp = Kc; M4 counts only the products; M5 uses dn = -1; M6 adds
all the moles; M7 divides by RT; M8 squares RT; M9 leaves Kc unchanged; M10 subtracts the wrong way; M11 counts solids;
M12 gives the total gas moles; M13 sets T = 0 K; M14 sets R = 1; M15 thinks all species are solids."""
from chemistry import BOOK, sig

from ._mix import mixed_models

R = BOOK["R_atm"]

TABLE = {
    "ammonia": {"key": "rt_minus_2", "C03-M1": "rt_plus_2", "C03-M2": "rt_plus_4", "C03-M3": "kp_eq_kc"},
    "hi": {"key": "kp_eq_kc", "C03-M4": "rt_plus_2", "C03-M5": "rt_minus_1", "C03-M6": "rt_plus_3"},
    "n2o4": {"key": lambda v: sig(v["Kc"] * R * v["T"]), "C03-M7": lambda v: sig(v["Kc"] / (R * v["T"])),
             "C03-M8": lambda v: sig(v["Kc"] * (R * v["T"]) ** 2), "C03-M9": lambda v: sig(v["Kc"])},
    "dn": {"key": "gas_products_minus_reactants", "C03-M10": "reactants_minus_products", "C03-M11": "counts_solids", "C03-M12": "total_gas"},
    "equal": {"key": "dn_zero", "C03-M13": "zero_kelvin", "C03-M14": "r_is_one", "C03-M15": "all_solids"},
}
MODELS = mixed_models("C03", TABLE, 15)
