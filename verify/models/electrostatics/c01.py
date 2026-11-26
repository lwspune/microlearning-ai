"""C01 Electric charge and its properties: answer models (the key, and one per misconception).

Charge is quantised, q = ne with e = 1.6e-19 C; conserved; bodies charge by friction, conduction or induction.
params["ask"]:
  "water":  the total positive charge in m grams of water, molar mass M (inputs m, M, NA, e);
  "count":  electrons removed to give a body a charge of q microcoulombs (inputs q, e);
  "share":  charge on sphere B (radius ratio k = rB/rA) after it touches sphere A carrying q (inputs q, k);
  "gain", "rub", "induce": named answers.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "gain": {"key": "gained_electrons", "C01-M4": "lost_electrons", "C01-M1": "lost_protons", "C01-M5": "gained_too_many"},
    "rub": {"key": "silk_negative", "C01-M2": "silk_neutral", "C01-M3": "silk_positive", "C01-M1": "protons_moved"},
    "induce": {"key": "ends_opposite", "C01-M7": "all_negative", "C01-M8": "no_change", "C01-M9": "gains_positive"},
}

MICRO = Rational(1, 10**6)


def _solve(v, p, *, per=10, zero=False, no_micro=False, times_e=False, flip=False, share="radius"):
    ask = p["ask"]
    if ask == "water":
        if zero:
            return 0
        return sig(v["m"] / v["M"] * v["NA"] * per * v["e"])
    if ask == "count":
        q = v["q"] if no_micro else v["q"] * MICRO
        if times_e:
            return sig(q * v["e"])
        return sig(v["e"] / q if flip else q / v["e"])
    if ask == "share":
        q, k = v["q"], v["k"]
        w = {"radius": k / (1 + k), "equal": Rational(1, 2), "inverse": 1 / (1 + k), "area": k**2 / (1 + k**2)}[share]
        return sig(q * w)
    raise ValueError("unknown ask")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1"),  # thinks protons move when a body is charged
    "C01-M2": _m("C01-M2"),  # thinks rubbing creates charge
    "C01-M3": _m("C01-M3"),  # thinks both rubbed bodies get the same charge
    "C01-M4": _m("C01-M4"),  # thinks gaining electrons makes a body positive
    "C01-M5": _m("C01-M5", ("count",), no_micro=True),  # forgets the micro in microcoulomb
    "C01-M6": _m("C01-M6", ("count",), times_e=True),  # multiplies by e instead of dividing
    "C01-M7": _m("C01-M7"),  # thinks induction makes the whole conductor opposite
    "C01-M8": _m("C01-M8"),  # thinks charge moves only on contact
    "C01-M9": _m("C01-M9"),  # thinks the charge jumps across the gap
    "C01-M10": _m("C01-M10", ("share",), share="equal"),  # shares charge equally whatever the size
    "C01-M11": _m("C01-M11", ("share",), share="inverse"),  # gives the smaller sphere the larger share
    "C01-M12": _m("C01-M12", ("share",), share="area"),  # shares charge in the ratio of surface areas
    "C01-M13": _m("C01-M13", ("water",), per=18),  # counts 18 charges per molecule (the molar mass)
    "C01-M14": _m("C01-M14", ("water",), zero=True),  # thinks a neutral body has no charge in it
    "C01-M15": _m("C01-M15", ("water",), per=1),  # counts molecules, not the electrons in each
    "C01-M16": _m("C01-M16", ("count",), flip=True),  # divides e by q
}
