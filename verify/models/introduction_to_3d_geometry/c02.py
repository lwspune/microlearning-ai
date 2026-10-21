"""C02 Distance between two points: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  dist     points P, Q (inputs P, Q) -> the distance PQ
  unknown  points P, Q, one coordinate the unknown k (inputs P, Q, d) with PQ = d -> the values of k
           (params["out"] = "value"), or the points that contain k (params["out"] = "point")
Both kinds use a squared-distance rule D2(P, Q); each misconception swaps in its own wrong rule.

The key comes from the definition: Pythagoras twice gives PQ^2 as the sum of the three squared
differences; an unknown coordinate solves PQ^2 = d^2, keeping every real root.
"""
from sympy import FiniteSet, Symbol, Tuple, im, solve, sqrt

_k = Symbol("k")


def _d2_key(P, Q):
    return sum((q - p) ** 2 for p, q in zip(P, Q))


def _d2_plane(P, Q):
    """The plane formula: the z term is dropped."""
    return sum((q - p) ** 2 for p, q in list(zip(P, Q))[:2])


def _d2_add(P, Q):
    """Adding the coordinates instead of subtracting them."""
    return sum((q + p) ** 2 for p, q in zip(P, Q))


def _d2_sum_sq(P, Q):
    """Adding the differences first, then squaring the sum."""
    return sum(q - p for p, q in zip(P, Q)) ** 2


def _roots(v, d2, rhs):
    P, Q = v["P"], v["Q"]
    e = d2(P, Q)
    if _k not in e.free_symbols:
        raise ValueError("the unknown drops out")
    rs = [r for r in solve(e - rhs, _k) if im(r) == 0]
    if not rs:
        raise ValueError("no real value")
    return sorted(set(rs), key=lambda r: float(r))


def _out(v, p, rs):
    if p.get("out") == "point":
        pt = v["P"] if _k in Tuple(*v["P"]).free_symbols else v["Q"]
        return FiniteSet(*[Tuple(*[c.subs(_k, r) for c in pt]) for r in rs])
    return FiniteSet(*rs)


def _model(d2, square_d=True):
    def f(v, p):
        if p["ask"] == "dist":
            return sqrt(d2(v["P"], v["Q"]))
        if p["ask"] == "unknown":
            rhs = v["d"] ** 2 if square_d else v["d"]
            return _out(v, p, _roots(v, d2, rhs))
        raise ValueError(p["ask"])
    return f


key = _model(_d2_key)
m1 = _model(_d2_plane)
m2 = _model(_d2_add)
m4 = _model(_d2_sum_sq)


def m3(v, p):
    """No square root: PQ^2 given as PQ (or the sum of squares set equal to d)."""
    if p["ask"] == "dist":
        return _d2_key(v["P"], v["Q"])
    if p["ask"] == "unknown":
        return _out(v, p, _roots(v, _d2_key, v["d"]))
    raise ValueError(p["ask"])


def m5(v, p):
    """Two values fit, but only the + square root is kept."""
    if p["ask"] != "unknown":
        raise ValueError("only an unknown coordinate has two roots")
    rs = _roots(v, _d2_key, v["d"] ** 2)
    if len(rs) < 2:
        raise ValueError("one root only")
    return _out(v, p, rs[-1:])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
