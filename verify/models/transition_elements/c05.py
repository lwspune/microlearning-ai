"""C05 Catalysts, complexes and alloys: answer models (the key, and one per misconception).

Named answers: each item asks why the d-block elements show one property (params["ask"]):
  "mp"           high melting points and hardness,
  "catalyst"     catalytic activity,
  "complex"      complex formation,
  "interstitial" what interstitial compounds such as TiC are like,
  "alloy"        ready alloy formation.
The key is the book's reason; each misconception gives the reason its wrong idea leads to (ANSWERS),
and raises ValueError for a property it says nothing about.
"""
from sympy import Symbol

ANSWERS = {
    "mp": {
        "key": "mp_unpaired_d_bonding",
        "C05-M1": "mp_variable_states",
        "C05-M2": "mp_heavy_atoms",
        "C05-M3": "mp_ns_only",
    },
    "catalyst": {
        "key": "cat_variable_states_surface",
        "C05-M3": "cat_reactive_metal",
        "C05-M4": "cat_used_up",
        "C05-M6": "cat_paramagnetic",
    },
    "complex": {
        "key": "cx_small_charged_vacant_d",
        "C05-M2": "cx_heavy_atoms",
        "C05-M3": "cx_lose_4s_easily",
        "C05-M6": "cx_paramagnetic",
    },
    "interstitial": {
        "key": "int_hard_nonstoichiometric",
        "C05-M1": "int_highest_state",
        "C05-M2": "int_soft_light_atoms",
        "C05-M5": "int_ionic_fixed_formula",
    },
    "alloy": {
        "key": "alloy_similar_size",
        "C05-M1": "alloy_variable_states",
        "C05-M2": "alloy_heavy_dense",
        "C05-M6": "alloy_paramagnetic",
    },
}


def _answer(mid, p):
    a = ANSWERS[p["ask"]]
    if mid not in a:
        raise ValueError("does not apply")
    return Symbol(a[mid])


def key(v, p):
    return _answer("key", p)


def m1(v, p):
    """Credits every d-block property to variable oxidation states."""
    return _answer("C05-M1", p)


def m2(v, p):
    """Credits hardness, high melting points and strong binding to heavy, dense atoms rather than to bonding."""
    return _answer("C05-M2", p)


def m3(v, p):
    """Treats the d-block metals like the s-block metals: only the outer ns electrons count, and they are
    simply reactive metals that lose them easily."""
    return _answer("C05-M3", p)


def m4(v, p):
    """Thinks a catalyst is used up: it combines with the reactants for good and supplies energy."""
    return _answer("C05-M4", p)


def m5(v, p):
    """Thinks interstitial compounds are ordinary ionic compounds with fixed formulas, like salts."""
    return _answer("C05-M5", p)


def m6(v, p):
    """Credits other properties to paramagnetism (unpaired electrons acting as magnets)."""
    return _answer("C05-M6", p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
