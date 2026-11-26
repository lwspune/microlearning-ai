"""C01 Kepler's laws: answer models (the key, and one per misconception).

params["ask"]:
  "period": period T2 of an orbit of size r2, given T1 at r1 (inputs T1, r1, r2), in T1's unit;
  "radius": orbit size r2 of a period T2, given r1 and T1 (inputs T1, r1, T2), in r1's unit;
  "speed":  speed at the farthest point r2, given speed v1 at the nearest point r1 (inputs r1, r2, v1);
  "orbit":  which statement about a planet's orbit is right (a named answer).

The key: T^2 / a^3 is the same for every orbit round one body (law of periods); at the nearest and farthest points the
velocity is at right angles to the line from the Sun, so equal areas in equal times give r1 v1 = r2 v2.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "orbit": {"key": "focus_fast_near", "C01-M4": "focus_steady", "C01-M5": "sun_centre", "C01-M6": "focus_fast_far"},
}


def _solve(v, p, *, lin=False, swap=False, inv=False, steady=False, far=False, sq=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "period":
        k = v["r2"] / v["r1"]
        if inv:
            k = 1 / k
        e = 1 if lin else (Rational(2, 3) if swap else Rational(3, 2))
        return sig(v["T1"] * k**e, n)
    if ask == "radius":
        k = v["T2"] / v["T1"]
        if inv:
            k = 1 / k
        e = 1 if lin else (Rational(3, 2) if swap else Rational(2, 3))
        return sig(v["r1"] * k**e, n)
    if ask == "speed":
        k = v["r1"] / v["r2"]
        if steady:
            return sig(v["v1"], n)
        if far:
            return sig(v["v1"] / k, n)
        return sig(v["v1"] * (k**2 if sq else k), n)
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
    "C01-M1": _m("C01-M1", ("period", "radius"), lin=True),  # takes the period proportional to the orbit's size
    "C01-M2": _m("C01-M2", ("period", "radius"), swap=True),  # swaps the powers: T^3 proportional to a^2
    "C01-M3": _m("C01-M3", ("period", "radius"), inv=True),  # thinks a bigger orbit has a shorter period
    "C01-M4": _m("C01-M4", ("speed",), steady=True),  # thinks a planet moves at a steady speed round its orbit
    "C01-M5": _m("C01-M5"),  # puts the Sun at the centre of the ellipse
    "C01-M6": _m("C01-M6", ("speed",), far=True),  # thinks a planet is fastest farthest from the Sun
    "C01-M7": _m("C01-M7", ("speed",), sq=True),  # takes the speed as varying like the force, as 1/r^2
}
