"""C06 Sulfur dioxide and sulfuric acid: answer models (the key, and one per misconception).

params["ask"]:
  "products": what hot concentrated H2SO4 gives with params["reagent"] (HI, HBr, Cu, sugar). Named answer.
  "oxidised": which of HCl, HBr, HI concentrated H2SO4 oxidises to the halogen. Named answer.
  "prepare":  which of HCl, HBr, HI can be made by heating its sodium salt with concentrated H2SO4. Named answer.
"""
from sympy import Symbol

_HX = ["HCl", "HBr", "HI"]  # reducing power rises down the group: HCl < HBr < HI

# Hot concentrated H2SO4 (sulfur +6) is an oxidising and dehydrating agent, itself reduced to SO2.
_KEY = {"HI": "iodine_so2_water", "HBr": "bromine_so2_water", "Cu": "cuso4_so2_water", "sugar": "carbon_water"}
# M1: behaves only as an acid, like the dilute acid: no reaction with HX or copper; hydrolyses sucrose.
_ACID_ONLY = {"HI": "no_reaction", "HBr": "no_reaction", "Cu": "no_reaction", "sugar": "glucose_fructose"}
# M2: an oxidant adds oxygen: the halogen acid becomes its oxoacid, copper its oxide, sugar burns.
_ADDS_O = {"HI": "hio3_so2", "HBr": "hbro3_so2", "Cu": "cuo_so2", "sugar": "co2_water"}
# M5: the acid's H+ is the oxidant, reduced to hydrogen gas (true only of the dilute acid).
_H_OXIDANT = {"HI": "iodine_h2", "HBr": "bromine_h2", "Cu": "cuso4_h2"}
# M6: a dehydrating agent only removes free water (as in drying), so sucrose is left unchanged.
_DRYING = {"sugar": "no_change"}


def _oxidised(rule):
    """The halogen acids concentrated H2SO4 oxidises: those at least as reducing as HBr, under `rule`."""
    if rule == "acid_only":
        return []
    if rule == "all":
        return list(_HX)
    order = _HX[::-1] if rule == "reversed" else _HX  # reversed: thinks HCl is the strongest reducer
    return [h for h in _HX if order.index(h) >= 1]


def _named(hx):
    return Symbol("_".join(h.lower() for h in hx) if hx else "none_of_them")


def _answer(p, rule, table=None):
    if p["ask"] == "products":
        if table is None or p["reagent"] not in table:
            raise ValueError("does not apply")
        return Symbol(table[p["reagent"]])
    if rule is None:
        raise ValueError("does not apply")
    oxidised = _oxidised(rule)
    if p["ask"] == "oxidised":
        return _named(oxidised)
    if p["ask"] == "prepare":  # a salt gives its acid only if the acid is not then oxidised
        return _named([h for h in _HX if h not in oxidised])
    raise ValueError(p["ask"])


def key(v, p):
    return _answer(p, "key", _KEY)


def m1(v, p):  # acts only as an acid
    return _answer(p, "acid_only", _ACID_ONLY)


def m2(v, p):  # an oxidant adds oxygen
    return _answer(p, None, _ADDS_O)


def m3(v, p):  # reducing power of HX falls down the group (reversed)
    if p["ask"] == "products":
        raise ValueError("does not apply")
    return _answer(p, "reversed")


def m4(v, p):  # concentrated H2SO4 oxidises every halogen acid
    if p["ask"] == "products":
        raise ValueError("does not apply")
    return _answer(p, "all")


def m5(v, p):  # H+ is the oxidant: hydrogen gas forms
    return _answer(p, None, _H_OXIDANT)


def m6(v, p):  # dehydrating means drying: removes only free water
    return _answer(p, None, _DRYING)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
