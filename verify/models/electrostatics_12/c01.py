"""C01 Gauss' law: answer models (the key, and one per misconception).

Flux through a closed surface = q_enclosed / eps0. params["ask"]:
  "sphere":  flux of -4Q at 2a and +2Q at 5a through a sphere of radius 4a about the origin (a named answer);
  "face":    flux, in N m^2/C, through one face of a cube with q_uC microcoulombs at its centre (input q_uC);
  "net":     flux, in N m^2/C, through a closed surface around q1_uC and q2_uC (inputs q1_uC, q2_uC);
  "depends": what the flux through a closed surface depends on (a named answer);
  "double":  what doubling a Gaussian sphere's radius does to the flux (a named answer).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

NAMED = {
    "sphere": {"key": "m4", "C01-M1": "m2", "C01-M2": "p4", "C01-M3": "m4eps"},
    "depends": {"key": "enclosed", "C01-M1": "outside_too", "C01-M8": "size", "C01-M9": "position"},
    "double": {"key": "same", "C01-M10": "quarter", "C01-M11": "four_times", "C01-M8": "doubles"},
}
uC = Rational(1, 10**6)


def _solve(v, p, *, times_eps=False, whole=False, k_form=False, add_mag=False, pos_only=False):
    ask, n = p["ask"], p.get("sf", 3)
    eps0, k = BOOK["eps0"], BOOK["k_e"]

    def flux(q):
        if times_eps:
            return q * eps0
        return k * q if k_form else q / eps0

    if ask == "face":
        f = flux(v["q_uC"] * uC)
        return sig(f if whole else f / 6, n)
    if ask == "net":
        q1, q2 = v["q1_uC"], v["q2_uC"]
        q = abs(q1) + abs(q2) if add_mag else (max(q1, q2) if pos_only else q1 + q2)
        return sig(flux(q * uC), n)
    raise ValueError(f"unknown ask {ask}")


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
    "C01-M1": _m("C01-M1"),  # counts charges outside the surface too
    "C01-M2": _m("C01-M2"),  # drops the sign of the enclosed charge
    "C01-M3": _m("C01-M3", ("face",), times_eps=True),  # multiplies by eps0 instead of dividing
    "C01-M4": _m("C01-M4", ("face",), whole=True),  # forgets that one face of the cube takes a sixth
    "C01-M5": _m("C01-M5", ("face", "net"), k_form=True),  # uses kq, the field's constant, instead of q/eps0
    "C01-M6": _m("C01-M6", ("net",), add_mag=True),  # adds the sizes of the charges, ignoring signs
    "C01-M7": _m("C01-M7", ("net",), pos_only=True),  # counts only the positive charge
    "C01-M8": _m("C01-M8"),  # thinks the flux depends on the size of the surface
    "C01-M9": _m("C01-M9"),  # thinks the position of the charge inside matters
    "C01-M10": _m("C01-M10"),  # thinks the flux falls with distance, as the field does
    "C01-M11": _m("C01-M11"),  # thinks the flux grows with the area
}
