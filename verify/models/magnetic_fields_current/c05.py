"""C05 Biot-Savart law and a long straight wire: answer models (the key, and one per misconception).

Biot-Savart: dB = (mu0 / 4 pi) I dl sin(theta) / r^2. A long straight wire: B = mu0 I / (2 pi r), in circles round it
(right-hand grip). params["ask"]:
  "B":    B, in T, at r_cm from a long straight wire carrying I (inputs I, r_cm);
  "I":    the current, in A, that gives B_uT microtesla at r_cm (inputs B_uT, r_cm);
  "pair": B, in T, at P equidistant from two long parallel wires R_cm apart, each carrying I the same way, the line
          from each wire to P making deg degrees with the plane of the wires (inputs I, R_cm, deg);
  "law", "lines", "pairdir": named answers (the Biot-Savart law; the field lines of a wire into the page; the
          direction of the field at P for the pair).
The key for "pair" adds the two fields as vectors: each is tangent to its own circle, so only the components along the
line joining the wires survive.
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import BOOK, sig

mu0 = BOOK["mu0"]
cm = Rational(1, 100)
micro = Rational(1, 10**6)
NAMED = {
    "law": {"key": "law_sin_r2", "C05-M4": "law_cos", "C05-M5": "law_r1", "C05-M3": "law_2pi"},
    "lines": {"key": "circles_cw", "C05-M6": "radial", "C05-M7": "circles_acw", "C05-M8": "along_wire"},
    "pairdir": {"key": "along_AB", "C05-M7": "along_BA", "C05-M10": "perp_AB", "C05-M8": "along_wires"},
}


def _solve(v, p, *, inv_sq=False, in_cm=False, quarter=False, scalar=False, perp=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = mu0 / (4 * pi) if quarter else mu0 / (2 * pi)  # the constant in B = k I / r
    if ask == "B":
        r = v["r_cm"] * (1 if in_cm else cm)
        return sig(k * v["I"] / (r**2 if inv_sq else r), n)
    if ask == "I":
        r = v["r_cm"] * (1 if in_cm else cm)
        return sig(v["B_uT"] * micro * (r**2 if inv_sq else r) / k, n)
    if ask == "pair":
        R = v["R_cm"] * (1 if in_cm else cm)
        th = v["deg"] * pi / 180
        d = R / (2 * cos(th))  # distance of P from each wire
        B1 = k * v["I"] / d
        if scalar:
            return sig(2 * B1, n)  # adds the sizes, ignoring directions
        # Each field is at right angles to the line from its wire to P, so it makes angle th with the normal to
        # the plane: its component along AB is B1 sin th, and across AB B1 cos th (these cancel for the pair).
        return sig(2 * B1 * (cos(th) if perp else sin(th)), n)
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
    "C05-M1": _m("C05-M1", ("B", "I"), inv_sq=True),  # inverse square for the whole wire
    "C05-M2": _m("C05-M2", ("B", "I", "pair"), in_cm=True),  # leaves the distance in cm
    "C05-M3": _m("C05-M3", ("B", "I"), quarter=True),  # swaps mu0/2pi for the Biot-Savart mu0/4pi (and back)
    "C05-M4": _m("C05-M4"),  # cos(theta) in the Biot-Savart law
    "C05-M5": _m("C05-M5"),  # 1/r in the Biot-Savart law
    "C05-M6": _m("C05-M6"),  # field lines radial
    "C05-M7": _m("C05-M7"),  # the grip rule's sense reversed
    "C05-M8": _m("C05-M8"),  # the field along the wire
    "C05-M9": _m("C05-M9", ("pair",), scalar=True),  # adds the two fields' sizes
    "C05-M10": _m("C05-M10", ("pair",), perp=True),  # keeps the components across the line joining the wires
}
