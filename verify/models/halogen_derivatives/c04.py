"""C04 Physical properties of halides: answer models (the key, and one per misconception).

Two kinds of item (params["kind"]):
  "order"    params["set"] lists four compound codes, labelled I, II, III, IV in that order. The answer
             is the increasing order of boiling point as a Symbol such as o_III_I_IV_II ("III < I < IV < II").
             The key sorts by the measured boiling points in BP; each misconception sorts by its rule.
  "explain"  params["ask"] names the fact to explain; the answer is the reason (EXPLAIN).
"""
from sympy import Symbol

from chemistry import molar_mass

# code: (formula for molar mass, halogen, branched?, boiling point in °C)
COMPOUNDS = {
    "1-chloropropane": ("C3H7Cl", "Cl", 0, 47),
    "2-chloropropane": ("C3H7Cl", "Cl", 1, 36),
    "1-chloro-2-methylpropane": ("C4H9Cl", "Cl", 1, 69),
    "1-iodo-2-methylpropane": ("C4H9I", "I", 1, 120),
    "1-bromopropane": ("C3H7Br", "Br", 0, 71),
    "2-bromopropane": ("C3H7Br", "Br", 1, 59),
    "1-bromo-2-methylpropane": ("C4H9Br", "Br", 1, 91),
    "1-iodobutane": ("C4H9I", "I", 0, 130),
    "1-iodopropane": ("C3H7I", "I", 0, 102),
    "2-iodopropane": ("C3H7I", "I", 1, 89),
}
LABELS = ["I", "II", "III", "IV"]
# Electronegativity order: the more polar C-X bond, the higher M1 thinks the boiling point is.
POLARITY = {"I": 0, "Br": 1, "Cl": 2, "F": 3}

EXPLAIN = {
    "immiscible": {
        "key": "no_h_bond_with_water",
        "C04-M1": "dipoles_hold_each_other",
        "C04-M4": "c_x_non_polar",
        "C04-M5": "h_bond_each_other",
    },
    "branching": {
        "key": "less_surface_contact",
        "C04-M1": "less_polar_bond",
        "C04-M4": "branched_non_polar",
        "C04-M5": "straight_chain_h_bonds",
    },
}


def _set(p):
    if p["kind"] != "order":
        raise ValueError("not an order item")
    return p["set"].split(",")


def _order(p, sort_key):
    codes = _set(p)
    ranked = sorted(range(4), key=lambda i: sort_key(codes[i]))
    return Symbol("o_" + "_".join(LABELS[i] for i in ranked))


def _mass(code):
    return molar_mass(COMPOUNDS[code][0])


def _explain(mid, p):
    if p["kind"] != "explain":
        raise ValueError("not an explain item")
    a = EXPLAIN[p["ask"]]
    if mid not in a:
        raise ValueError("does not apply")
    return Symbol(a[mid])


def key(v, p):
    if p["kind"] == "explain":
        return _explain("key", p)
    return _order(p, lambda c: COMPOUNDS[c][3])


def m1(v, p):
    """Thinks the more polar C-X bond gives the stronger attractions and the higher boiling point,
    so chlorides boil above bromides and iodides."""
    if p["kind"] == "explain":
        return _explain("C04-M1", p)
    if len({COMPOUNDS[c][1] for c in _set(p)}) == 1:
        raise ValueError("one halogen only")
    return _order(p, lambda c: (POLARITY[COMPOUNDS[c][1]], COMPOUNDS[c][3]))


def m2(v, p):
    """Thinks branching raises the boiling point: among isomers, the branched one boils higher."""
    return _order(p, lambda c: (_mass(c), COMPOUNDS[c][2]))


def m3(v, p):
    """Thinks branching outweighs size: every branched halide boils below every unbranched one."""
    return _order(p, lambda c: (-COMPOUNDS[c][2], _mass(c)))


def m4(v, p):
    """Thinks alkyl halides are non-polar."""
    return _explain("C04-M4", p)


def m5(v, p):
    """Thinks alkyl halides form hydrogen bonds, as alcohols do."""
    return _explain("C04-M5", p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
