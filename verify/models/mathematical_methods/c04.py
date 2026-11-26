"""C04 The scalar (dot) product: answer models (the key, and one per misconception).

params["ask"]:
  "dot":  A . B for A = (a1, a2, a3), B = (b1, b2, b3) (inputs a1..b3);
  "work": W = F . s, the same with F = a, s = b;
  "ang":  the angle between A and B, in degrees;
  "perp": the dot product of two perpendicular unit vectors;
  "a":    a for p1 i + p2 j and a i + q2 j to be perpendicular (inputs p1, p2, q2).
The key works from A . B = AxBx + AyBy + AzBz and cos(theta) = A . B / (AB).
"""
from sympy import Abs, Symbol, acos, asin, pi, sqrt

from physics import sig

IH, JH, KH = Symbol("ihat"), Symbol("jhat"), Symbol("khat")


def _vecs(v):
    return [v["a1"], v["a2"], v["a3"]], [v["b1"], v["b2"], v["b3"]]


def _mag(u):
    return sqrt(sum(x**2 for x in u))


def _solve(v, p, *, as_vector=False, no_signs=False, all_pairs=False, use_sin=False, squares=False, sum_mags=False,
           one=False, minus_one=False, two=False, sign_slip=False, parallel=False, unlike=False, mags=False):
    ask = p["ask"]
    if ask in ("dot", "work", "ang"):
        a, b = _vecs(v)
        if as_vector:
            return a[0] * b[0] * IH + a[1] * b[1] * JH + a[2] * b[2] * KH
        if no_signs:
            return sig(sum(Abs(x * y) for x, y in zip(a, b)))
        if all_pairs:
            return sig(sum(a) * sum(b))
        if mags:
            return sig(_mag(a) * _mag(b))
        d = sum(x * y for x, y in zip(a, b))
        if ask != "ang":
            return sig(d)
        if use_sin:
            return sig(asin(d / (_mag(a) * _mag(b))) * 180 / pi)
        den = _mag(a) ** 2 * _mag(b) ** 2 if squares else (_mag(a) + _mag(b) if sum_mags else _mag(a) * _mag(b))
        return sig(acos(d / den) * 180 / pi)
    if ask == "perp":
        return 1 if one else (-1 if minus_one else (2 if two else 0))
    if ask == "a":
        p1, p2, q2 = v["p1"], v["p2"], v["q2"]
        if parallel:  # a / p1 = q2 / p2
            return p1 * q2 / p2
        if unlike:  # p1 q2 + p2 a = 0
            return -p1 * q2 / p2
        a = -p2 * q2 / p1  # p1 a + p2 q2 = 0
        return -a if sign_slip else a
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C04-M1": _m(("dot",), as_vector=True),  # keeps the products as a vector
    "C04-M2": _m(("dot", "work"), no_signs=True),  # drops the minus signs
    "C04-M3": _m(("dot", "work"), all_pairs=True),  # multiplies every component by every other
    "C04-M4": _m(("ang",), use_sin=True),  # uses sin for the angle
    "C04-M5": _m(("ang",), squares=True),  # divides by the squares of the magnitudes
    "C04-M6": _m(("ang",), sum_mags=True),  # divides by the sum of the magnitudes
    "C04-M7": _m(("perp",), one=True),  # unit vectors always give 1
    "C04-M8": _m(("perp",), minus_one=True),  # perpendicular gives -1
    "C04-M9": _m(("perp",), two=True),  # adds the magnitudes
    "C04-M10": _m(("a",), sign_slip=True),  # sign slip in solving
    "C04-M11": _m(("a",), parallel=True),  # uses the condition for parallel vectors
    "C04-M12": _m(("a",), unlike=True),  # multiplies unlike components
    "C04-M13": _m(("work",), mags=True),  # multiplies the magnitudes, ignoring the angle
}
