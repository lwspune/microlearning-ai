"""C01 Trends in groups 16, 17 and 18: answer models (the key, and one per misconception).

Every item is an order. params["set"] lists the elements, params["prop"] the property:
  "ege" -- electron gain enthalpy, most negative first;
  "en"  -- electronegativity, increasing;
  "ie"  -- first ionisation enthalpy, increasing.
The key sorts by the book's values (Table 7.2 and the group 17 table); each misconception sorts by its own
wrong rule. The answer is a Symbol naming the order, e.g. "ord_cl_f_br_i".
"""
from sympy import Symbol

# Z, period, group; book values: EGE and IE in kJ/mol, EN on the Pauling scale.
DATA = {
    "N": dict(z=7, period=2, group=15, ie=1402),
    "O": dict(z=8, period=2, group=16, ie=1314, en=3.50, ege=-141),
    "F": dict(z=9, period=2, group=17, ie=1681, en=4.0, ege=-333),
    "P": dict(z=15, period=3, group=15, ie=1012),
    "S": dict(z=16, period=3, group=16, ie=1000, en=2.44, ege=-200),
    "Cl": dict(z=17, period=3, group=17, ie=1256, en=3.2, ege=-349),
    "Br": dict(z=35, period=4, group=17, ie=1142, en=3.0, ege=-325),
    "I": dict(z=53, period=5, group=17, ie=1008, en=2.7, ege=-296),
}


def order_symbol(els):
    return Symbol("ord_" + "_".join(e.lower() for e in els))


def _els(p):
    return p["set"].split(",")


def key(v, p):
    els, prop = _els(p), p["prop"]
    if prop == "ege":  # most negative first
        return order_symbol(sorted(els, key=lambda e: DATA[e]["ege"]))
    return order_symbol(sorted(els, key=lambda e: DATA[e][prop]))


def m1(v, p):
    """EGE and electronegativity taken as the same property: EGE follows EN, EN follows |EGE|."""
    els, prop = _els(p), p["prop"]
    if prop == "ege":
        return order_symbol(sorted(els, key=lambda e: -DATA[e]["en"]))
    if prop == "en":
        return order_symbol(sorted(els, key=lambda e: -DATA[e]["ege"]))
    raise ValueError("ionisation enthalpy is not confused with EGE here")


def m2(v, p):
    """Nuclear charge wins: IE and EN rise with Z, and EGE grows more negative with Z."""
    els, prop = _els(p), p["prop"]
    if prop == "ege":
        return order_symbol(sorted(els, key=lambda e: -DATA[e]["z"]))
    return order_symbol(sorted(els, key=lambda e: DATA[e]["z"]))


def m3(v, p):
    """Over-corrects fluorine's anomaly: F goes to the least negative end, the rest stay in order."""
    if p["prop"] != "ege" or "F" not in _els(p):
        raise ValueError("only for an EGE order with fluorine")
    rest = [e for e in sorted(_els(p), key=lambda e: DATA[e]["ege"]) if e != "F"]
    return order_symbol(rest + ["F"])


def m4(v, p):
    """IE always rises across a period (half-filled np3 ignored) and falls down a group."""
    if p["prop"] != "ie":
        raise ValueError("ionisation enthalpy only")
    return order_symbol(sorted(_els(p), key=lambda e: (-DATA[e]["period"], DATA[e]["group"])))


def m5(v, p):
    """Atoms grow across a period as electrons are added, so IE and EN fall across a period
    (and, correctly, down a group)."""
    if p["prop"] not in ("ie", "en"):
        raise ValueError("IE or EN only")
    return order_symbol(sorted(_els(p), key=lambda e: (-DATA[e]["period"], -DATA[e]["group"])))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
