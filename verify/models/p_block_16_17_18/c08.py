"""C08 Chlorine and hydrogen chloride: answer models (the key, and one per misconception).

params["ask"] names the reaction; every answer is a named set of products (or a named explanation).
  "nh3_pair":   ammonia in excess with HCl gas, and with chlorine.
  "slaked_lime": chlorine with dry slaked lime, Ca(OH)2.
  "naoh_cold":  chlorine with cold, dilute NaOH.
  "naoh_hot":   chlorine with hot, concentrated NaOH.
  "bleach":     how moist chlorine bleaches.
"""
from sympy import Symbol

# Chlorine is an oxidant: excess NH3 is oxidised to N2 and the HCl formed is taken up as NH4Cl; with an alkali
# chlorine disproportionates (0 -> -1 and +1 cold and dilute, 0 -> -1 and +5 hot and concentrated).
# HCl is only an acid: with NH3 it simply forms NH4Cl.
_KEY = {"nh3_pair": "nh4cl__nh4cl_n2", "slaked_lime": "caocl2_cacl2_h2o", "naoh_cold": "nacl_naocl_h2o",
        "naoh_hot": "nacl_naclo3_h2o", "bleach": "hocl_oxidises_permanent"}
# M1: chlorine acts only as an acid, as HCl does: no oxidation, no disproportionation.
_ACID_ONLY = {"nh3_pair": "nh4cl__nh4cl", "slaked_lime": "cacl2_h2o", "naoh_cold": "nacl_h2o",
              "naoh_hot": "nacl_h2o", "bleach": "acid_destroys_colour"}
# M2: proportions ignored: gives the excess-chlorine product with excess ammonia.
_PROPORTION = {"nh3_pair": "nh4cl__ncl3_hcl"}
# M3: HCl taken as an oxidant like chlorine.
_HCL_OXIDANT = {"nh3_pair": "nh4cl_n2__nh4cl_n2", "bleach": "hcl_oxidises"}
# M4: chlorine bleaches by reduction, like SO2, so the colour returns.
_REDUCTION = {"bleach": "reduction_temporary"}
# M5: the cold-dilute and hot-concentrated alkali products swapped.
_SWAP_T = {"naoh_cold": "nacl_naclo3_h2o", "naoh_hot": "nacl_naocl_h2o", "slaked_lime": "caclo32_cacl2_h2o"}
# M6: all the chlorine taken as oxidised to the oxoanion; the half reduced to chloride is missed.
_OXIDISED_ONLY = {"slaked_lime": "caocl2_h2o", "naoh_cold": "naocl_h2o", "naoh_hot": "naclo3_h2o"}


def _answer(p, table):
    if p["ask"] not in table:
        raise ValueError("does not apply")
    return Symbol(table[p["ask"]])


def key(v, p):
    return _answer(p, _KEY)


def m1(v, p):  # chlorine acts only as an acid
    return _answer(p, _ACID_ONLY)


def m2(v, p):  # proportions in NH3 + Cl2 ignored
    return _answer(p, _PROPORTION)


def m3(v, p):  # HCl taken as an oxidant
    return _answer(p, _HCL_OXIDANT)


def m4(v, p):  # bleaching by reduction
    return _answer(p, _REDUCTION)


def m5(v, p):  # cold/hot alkali products swapped
    return _answer(p, _SWAP_T)


def m6(v, p):  # chloride half missed
    return _answer(p, _OXIDISED_ONLY)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
