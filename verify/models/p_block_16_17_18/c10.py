"""C10 Noble gases and xenon compounds: answer models (the key, and one per misconception).

params["ask"]:
  "ox_shape":      oxidation state of Xe and the shape of params["formula"]. Named answer.
  "lp_shape":      lone pairs on Xe and the shape of params["formula"]. Named answer.
  "product_shape": the xenon compound params["reaction"] gives, and its shape. Named answer.
Xenon has 8 valence electrons; each F takes one in a single bond and each O two in a double bond.
"""
from sympy import Symbol

_ATOMS = {"XeF2": (0, 2), "XeF4": (0, 4), "XeF6": (0, 6), "XeO3": (3, 0), "XeOF4": (1, 4), "XeO2F2": (2, 2)}

_SHAPE = {
    (2, 3): "linear", (4, 2): "square_planar", (6, 1): "distorted_octahedral", (3, 1): "trigonal_pyramidal",
    (5, 1): "square_pyramidal", (4, 1): "see_saw",
    (2, 0): "linear", (3, 0): "trigonal_planar", (4, 0): "tetrahedral", (5, 0): "trigonal_bipyramidal",
    (6, 0): "octahedral",
}
_GEOMETRY = {4: "tetrahedral", 5: "trigonal_bipyramidal", 6: "octahedral", 7: "pentagonal_bipyramidal"}
_AXIAL = {(2, 3): "bent", (4, 1): "trigonal_pyramidal"}  # lone pairs put axial in a trigonal bipyramid

# reaction -> (product, product under M5 (ratio ignored), product under M6 (hydrolysis swapped))
_REACTION = {
    "xe_f2_1_5": ("XeF4", "XeF6", None),         # Xe : F2 = 1 : 5, Ni tube, 400 C, 5-6 atm
    "xef6_complete": ("XeO3", None, "XeOF4"),    # XeF6 + 3H2O -> XeO3 + 6HF
    "xef6_partial": ("XeOF4", None, "XeO3"),     # XeF6 + H2O -> XeOF4 + 2HF
}


def _pairs(formula):
    o, f = _ATOMS[formula]
    return o + f, (8 - 2 * o - f) // 2


def _shape(formula, rule):
    bp, lp = _pairs(formula)
    if rule == "no_lone_pairs":
        return _SHAPE[(bp, 0)]
    if rule == "geometry":
        return _GEOMETRY[bp + lp]
    if rule == "axial":
        if (bp, lp) not in _AXIAL:
            raise ValueError("no trigonal bipyramid with lone pairs")
        return _AXIAL[(bp, lp)]
    return _SHAPE[(bp, lp)]


def _ox(formula, rule):
    o, f = _ATOMS[formula]
    return (o if rule == "o_minus_one" else 2 * o) + f


def _answer(p, rule):
    ask = p["ask"]
    if ask == "ox_shape":
        if rule in ("ratio", "swap_hydrolysis"):
            raise ValueError("does not apply")
        f = p["formula"]
        return Symbol(f"p{_ox(f, rule)}_{_shape(f, rule)}")
    if ask == "lp_shape":
        if rule in ("ratio", "swap_hydrolysis", "o_minus_one"):
            raise ValueError("does not apply")
        f = p["formula"]
        lp = 0 if rule == "no_lone_pairs" else _pairs(f)[1]
        return Symbol(f"lp{lp}_{_shape(f, rule)}")
    if ask == "product_shape":
        if rule == "o_minus_one":
            raise ValueError("does not apply")
        product, ratio, swapped = _REACTION[p["reaction"]]
        if rule == "ratio":
            product = ratio
        elif rule == "swap_hydrolysis":
            product = swapped
        if product is None:
            raise ValueError("does not apply")
        return Symbol(f"{product.lower()}_{_shape(product, rule)}")
    raise ValueError(ask)


def key(v, p):
    return _answer(p, "key")


def m1(v, p):  # lone pairs ignored
    return _answer(p, "no_lone_pairs")


def m2(v, p):  # electron-pair geometry given as the shape
    return _answer(p, "geometry")


def m3(v, p):  # oxygen counted as -1, like fluorine
    return _answer(p, "o_minus_one")


def m4(v, p):  # lone pairs put axial
    return _answer(p, "axial")


def m5(v, p):  # ratio ignored: any fluorine excess gives XeF6
    return _answer(p, "ratio")


def m6(v, p):  # complete and partial hydrolysis of XeF6 swapped
    return _answer(p, "swap_hydrolysis")


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
