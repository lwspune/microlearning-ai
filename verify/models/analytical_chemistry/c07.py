"""C07 Limiting reagent. The reactant that runs out first limits the product: compare the moles available with the
moles the equation needs.
params["q"]:
  "define": named. "urea": inputs a (g NH3), b (g CO2); 2NH3 + CO2 -> (NH2)2CO + H2O; asks grams of urea.
  "water": inputs a (g H2), b (g O2); 2H2 + O2 -> 2H2O; asks grams of water. "ammonia": named (28 g N2, 3 g H2).
  "excess": inputs a (g N2), b (g H2); N2 + 3H2 -> 2NH3; asks grams of N2 left over.
M1 picks the reactant of smallest mass; M2 picks the reactant left over; M3 picks the smallest coefficient; M4 compares
moles without the mole ratio; M5 thinks both run out together; M6 thinks the product limits; M7 forgets the 2 : 1
ratio; M8 adds the masses; M9 takes O2 moles as water moles; M10 gives the N2 used; M11 subtracts the masses; M12 thinks
nothing is left over."""
from chemistry import molar_mass, sig

from ._mix import mixed_models

NH3, CO2, UREA, H2, O2, W, N2 = (molar_mass(f) for f in ("NH3", "CO2", "CO(NH2)2", "H2", "O2", "H2O", "N2"))


def _urea(v, ratio=True):
    a, b = v["a"] / NH3, v["b"] / CO2
    return min(a / 2, b) if ratio else min(a, b)


def _water(v):
    return min(v["a"] / H2, 2 * v["b"] / O2)


def _n2_used(v):
    return min(v["b"] / H2 / 3, v["a"] / N2)


TABLE = {
    "define": {"key": "used_up_first", "C07-M1": "smallest_mass", "C07-M2": "left_over", "C07-M3": "smallest_coefficient"},
    "urea": {"key": lambda v: sig(_urea(v) * UREA), "C07-M4": lambda v: sig(v["b"] / CO2 * UREA),
             "C07-M7": lambda v: sig(v["a"] / NH3 * UREA), "C07-M8": lambda v: sig(v["a"] + v["b"])},
    "water": {"key": lambda v: sig(_water(v) * W), "C07-M4": lambda v: sig(v["a"] / H2 * W),
              "C07-M8": lambda v: sig(v["a"] + v["b"]), "C07-M9": lambda v: sig(v["b"] / O2 * W)},
    "ammonia": {"key": "h2_limits", "C07-M4": "n2_limits", "C07-M5": "both", "C07-M6": "nh3_limits"},
    "excess": {"key": lambda v: sig(v["a"] - _n2_used(v) * N2), "C07-M10": lambda v: sig(_n2_used(v) * N2),
               "C07-M11": lambda v: sig(v["a"] - v["b"]), "C07-M12": lambda v: sig(0)},
}
MODELS = mixed_models("C07", TABLE, 12)
