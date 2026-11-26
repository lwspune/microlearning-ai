"""C01 Scalars, vectors and multiplying by a scalar: answer models (the key, and one per misconception).

params["ask"]:
  "equal":  what two equal vectors share (named);
  "which":  which quantity is a vector (named);
  "times":  lambda times a vector of size A towards north (named);
  "m":      m for P = Px i + Py j + Pz k and Q = Qx i - m j + Qz k to have the same direction
            (inputs px, py, qx: the key works from Q = P / k with k = Px / Qx);
  "mag":    the size of lambda * A for |A| = a (inputs lam, a).
"""
from sympy import Abs, Symbol

NAMED = {
    "equal": {"key": "same_size_and_direction", "C01-M1": "same_size", "C01-M2": "same_direction",
              "C01-M3": "same_size_opposite"},
    "which": {"key": "displacement", "C01-M4": "current", "C01-M5": "distance", "C01-M6": "temperature"},
    "times": {"key": "fifteen_south", "C01-M7": "fifteen_north", "C01-M8": "minus_fifteen_scalar",
              "C01-M9": "five_thirds_south"},
}


def _solve(v, p, *, diff=False, flip=False, sign=False, negmag=False, divide=False, keep=False):
    ask = p["ask"]
    if ask == "m":
        px, py, qx = v["px"], v["py"], v["qx"]
        if diff:  # same direction read as "components differ by the same amount": Py - Qy = Px - Qx
            qy = py - (px - qx)
        else:
            k = px / qx
            qy = py * k if flip else py / k
        return qy if sign else -qy  # Q_y = -m, so m = -Q_y
    if ask == "mag":
        lam, a = v["lam"], v["a"]
        if keep:
            return a
        if divide:
            return Abs(a / lam)
        return lam * a if negmag else Abs(lam) * a
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
    "C01-M1": _m("C01-M1"),  # equal sizes make equal vectors
    "C01-M2": _m("C01-M2"),  # the same direction makes equal vectors
    "C01-M3": _m("C01-M3"),  # mixes up equal and negative vectors
    "C01-M4": _m("C01-M4"),  # anything that flows one way is a vector
    "C01-M5": _m("C01-M5"),  # mixes up distance and displacement
    "C01-M6": _m("C01-M6"),  # reads a minus sign as a direction
    "C01-M7": _m("C01-M7"),  # a negative number changes only the size
    "C01-M8": _m("C01-M8", ("mag",), negmag=True),  # a scalar times a vector is a scalar; a size can be negative
    "C01-M9": _m("C01-M9", ("mag",), divide=True),  # divides by the number instead of multiplying
    "C01-M10": _m("C01-M10", ("m",), diff=True),  # same direction means equal differences
    "C01-M11": _m("C01-M11", ("m",), flip=True),  # turns the ratio upside down
    "C01-M12": _m("C01-M12", ("m",), sign=True),  # drops the minus sign in front of m
    "C01-M13": _m("C01-M13", ("mag",), keep=True),  # a scalar only flips the vector, leaving its size
}
