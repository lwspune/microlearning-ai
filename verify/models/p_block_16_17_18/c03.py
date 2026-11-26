"""C03 Oxidation states and hydrides: answer models (the key, and one per misconception).

Two kinds of item:
  * oxidation state (params["q"] == "ox"): inputs c (atoms of the element asked about), o (O atoms),
    h (H atoms) and q (charge); params["grp"] is the element's group. The key solves
    c*x + h*(+1) + o*(-2) = q.
  * named statements (params["q"] in "h2e_acid", "pka", "hx_weakest"): each model gives the
    statement its rule leads to.
"""
from sympy import Integer, Rational, Symbol

STATEMENTS = {
    # Strongest acid among H2O, H2S, H2Se, H2Te. Key: weakest H-Te bond (238 kJ/mol).
    "h2e_acid": {"key": "h2te_weak_bond", "C03-M1": "h2o_most_polar", "C03-M2": "h2o_most_stable",
                 "C03-M3": "h2te_te_most_en"},
    # pKa HCl -7.0, HI -10.0: which is the stronger acid.
    "pka": {"key": "hi_lower_pka", "C03-M1": "hcl_more_polar", "C03-M2": "hcl_more_stable",
            "C03-M3": "hi_i_more_en"},
    # Weakest acid among HF, HCl, HBr, HI. Key: strongest H-F bond (574 kJ/mol).
    "hx_weakest": {"key": "hf_strong_bond", "C03-M1": "hi_least_polar", "C03-M2": "hi_least_stable",
                   "C03-M3": "hf_f_least_en"},
}


def _named(p, mid):
    table = STATEMENTS.get(p["q"])
    if table is None or mid not in table:
        raise ValueError("does not apply to this item")
    return Symbol(table[mid])


def _ox(v, ignore_charge=False, one_o=False):
    q = 0 if ignore_charge else v["q"]
    o = 1 if one_o else v["o"]
    return Rational(q - v["h"] + 2 * o, v["c"])


def key(v, p):
    if p["q"] == "ox":
        return _ox(v)
    return _named(p, "key")


def m1(v, p):
    """Acid strength follows bond polarity: the more electronegative E, the stronger H-E acid."""
    return _named(p, "C03-M1")


def m2(v, p):
    """Takes the more thermally stable hydride to be the stronger acid."""
    return _named(p, "C03-M2")


def m3(v, p):
    """Reverses the electronegativity trend: thinks EN rises down a group."""
    return _named(p, "C03-M3")


def m4(v, p):
    """Forgets the charge of an ion: sets the sum of oxidation states to zero."""
    if p["q"] != "ox" or v["q"] == 0:
        raise ValueError("needs a charged species")
    return _ox(v, ignore_charge=True)


def m5(v, p):
    """Counts the oxygen once, ignoring its subscript."""
    if p["q"] != "ox" or v["o"] < 2:
        raise ValueError("needs more than one O")
    return _ox(v, one_o=True)


def m6(v, p):
    """Takes the element's common negative state as its only one: -2 in group 16, -1 for a halogen."""
    if p["q"] != "ox":
        raise ValueError("oxidation state only")
    return Integer(-2) if p["grp"] == "16" else Integer(-1)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
