"""C02 Adding and subtracting vectors: answer models (the key, and one per misconception).

params["ask"]:
  "line":  two forces along +x and -x (named);
  "R":     |P + Q| for sizes P, Q at angle th degrees (inputs P, Q, th);
  "sub":   |A - B| for sizes P (= A), Q (= B) at angle th degrees;
  "dir":   the angle, in degrees, of P + Q from P (inputs P, Q, th), e.g. a boat heading P across a stream Q;
  "tri":   AC in terms of AB and CB in a triangle ABC (named).
The key works from components: P along x, Q at th to it, R = (P + Q cos th, Q sin th).
"""
from sympy import Symbol, asin, atan2, cos, pi, sin, sqrt

from physics import sig

NAMED = {
    "line": {"key": "five_negx", "C02-M1": "twentyfive_negx", "C02-M2": "five_posx", "C02-M3": "eighteen"},
    "tri": {"key": "ab_minus_cb", "C02-M8": "ab_plus_cb", "C02-M9": "cb_minus_ab", "C02-M1": "lengths_subtract"},
}


def _deg(x):
    return x * 180 / pi


def _solve(v, p, *, add_sizes=False, pyth=False, minus=False, wrong_line=False, use_sin=False, heading=False,
           no_reverse=False):
    ask = p["ask"]
    P, Q, th = v["P"], v["Q"], v["th"] * pi / 180
    if ask in ("R", "sub"):
        sub = ask == "sub" and not no_reverse
        if add_sizes:
            return sig(abs(P - Q) if ask == "sub" else P + Q)
        if pyth:
            return sig(sqrt(P**2 + Q**2))
        if minus:
            sub = not sub
        qx, qy = (-Q * cos(th), -Q * sin(th)) if sub else (Q * cos(th), Q * sin(th))
        return sig(sqrt((P + qx) ** 2 + qy**2))
    if ask == "dir":
        if heading:
            return 0
        if use_sin:
            return sig(_deg(asin(Q * sin(th) / P)))
        a = atan2(Q * sin(th), P + Q * cos(th))
        return sig(90 - _deg(a) if wrong_line else _deg(a))
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
    "C02-M1": _m("C02-M1", ("R", "sub"), add_sizes=True),  # adds (or subtracts) the sizes like numbers
    "C02-M2": _m("C02-M2"),  # gives the resultant the first force's direction
    "C02-M3": _m("C02-M3", ("R", "sub"), pyth=True),  # always uses Pythagoras, whatever the angle
    "C02-M4": _m("C02-M4", ("R",), minus=True),  # uses -2PQ cos(theta) when adding
    "C02-M5": _m("C02-M5", ("dir",), wrong_line=True),  # measures the angle from the wrong line
    "C02-M6": _m("C02-M6", ("dir",), use_sin=True),  # takes sin(alpha) = Q/P
    "C02-M7": _m("C02-M7", ("dir",), heading=True),  # thinks the boat goes where it is headed
    "C02-M8": _m("C02-M8", ("sub",), no_reverse=True),  # forgets to reverse B when subtracting
    "C02-M9": _m("C02-M9"),  # subtracts the wrong way round
}
