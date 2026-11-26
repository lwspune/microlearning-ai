"""C04 Relative velocity: answer models (the key, and one per misconception).

params["ask"]:
  "line":    velocity of A relative to B, in km/h, on one line (inputs vA, vB, signed along A's direction);
  "chain":   speed, in m/s, of a fly relative to the Earth: train vt east, waiter vw east relative to the train,
             fly vf north relative to the waiter (inputs vt, vw, vf);
  "rain":    speed, in m/s, of rain falling vertically at vr relative to a person moving horizontally at vp;
  "river":   time, in s, to cross a river of width d heading straight across at vb relative to water flowing at u;
  "wind":    velocity of a plane relative to the wind (a named answer);
  "formula": the formula for the velocity of A relative to B (a named answer).
"""
from sympy import Abs, Symbol, sqrt

from physics import sig

NAMED = {
    "wind": {"key": "w316_ne", "C04-M2": "w316_nw", "C04-M3": "w200_n", "C04-M6": "w316_18"},
    "formula": {"key": "vA_minus_vB", "C04-M1": "vB_minus_vA", "C04-M2": "vA_plus_vB", "C04-M3": "speed_diff"},
}


def _solve(v, p, *, rev=False, add=False, sizes=False, add_sizes=False, frame=False, resultant=False, slow=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "line":
        a, b = v["vA"], v["vB"]
        if rev:
            return sig(b - a, n)
        if add:
            return sig(a + b, n)
        if sizes:
            return sig(Abs(Abs(a) - Abs(b)), n)
        return sig(a - b, n)
    if ask == "chain":
        t, w, f = v["vt"], v["vw"], v["vf"]
        if add_sizes:
            return sig(t + w + f, n)
        east = w if frame else (t - w if add else t + w)
        return sig(sqrt(east**2 + f**2), n)
    if ask == "rain":
        r, q = v["vr"], v["vp"]
        if sizes:
            return sig(r - q, n)
        if add_sizes:
            return sig(r + q, n)
        if frame:
            return sig(r, n)
        return sig(sqrt(r**2 + q**2), n)
    if ask == "river":
        d, b, u = v["d"], v["vb"], v["u"]
        if resultant:
            return sig(d / sqrt(b**2 + u**2), n)
        if slow:
            return sig(d / (b - u), n)
        if add_sizes:
            return sig(d / (b + u), n)
        return sig(d / b, n)
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
    "C04-M1": _m("C04-M1", ("line",), rev=True),  # v_B - v_A
    "C04-M2": _m("C04-M2", ("line", "chain"), add=True),  # adds where it should subtract, or the reverse
    "C04-M3": _m("C04-M3", ("line", "rain"), sizes=True),  # subtracts the speeds, ignoring directions
    "C04-M4": _m("C04-M4", ("chain", "rain", "river"), add_sizes=True),  # adds the speeds of velocities at an angle
    "C04-M5": _m("C04-M5", ("chain", "rain"), frame=True),  # takes a velocity relative to a moving body as relative to the ground
    "C04-M6": _m("C04-M6"),  # tan(theta) the wrong way up
    "C04-M7": _m("C04-M7", ("river",), resultant=True),  # crossing time from the resultant speed
    "C04-M8": _m("C04-M8", ("river",), slow=True),  # thinks the current slows the crossing
}
