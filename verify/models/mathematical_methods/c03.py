"""C03 Resolving vectors: answer models (the key, and one per misconception).

params["ask"]:
  "comp":   the x-component of a vector of size F at th degrees to the x-axis (inputs F, th);
  "unit":   the unit vector along a i + b j, as x ihat + y jhat (inputs a, b);
  "par":    the vector of size n along a i + b j, as x ihat + y jhat (inputs a, b, n);
  "magsum": |v1 + v2| for v1 = (a1, a2, a3), v2 = (b1, b2, b3) (inputs a1..b3);
  "dir":    the angle of v1 + v2, in degrees anticlockwise from +x (inputs a1, a2, b1, b2).
"""
from sympy import Abs, Symbol, atan, atan2, cos, pi, sin, sqrt, tan

from physics import sig


IH, JH = Symbol("ihat"), Symbol("jhat")  # unit vectors: a vector answer is x*ihat + y*jhat


def _deg(x):
    return x * 180 / pi


def _along(a, b, n, how):
    r = sqrt(a**2 + b**2)
    if how == "r2":
        d = r**2
    elif how == "sum":
        d = Abs(a) + Abs(b)
    elif how == "none":
        d = 1
    else:
        d = r
    return n * a / d * IH + n * b / d * JH


def _solve(v, p, *, swap=False, use_tan=False, divide=False, how="r", ones=False, add_mags=False, no_sqrt=False,
           add_comps=False, calc=False, no_signs=False, from_y=False):
    ask = p["ask"]
    if ask == "comp":
        F, th = v["F"], v["th"] * pi / 180
        if swap:
            return sig(F * sin(th))
        if use_tan:
            return sig(F * tan(th))
        return sig(F / cos(th) if divide else F * cos(th))
    if ask in ("unit", "par"):
        if ones:
            return IH + JH
        return _along(v["a"], v["b"], v.get("n", 1), how)
    if ask == "magsum":
        a = [v["a1"], v["a2"], v["a3"]]
        b = [v["b1"], v["b2"], v["b3"]]
        s = [x + y for x, y in zip(a, b)]
        if add_mags:
            return sig(sqrt(sum(x**2 for x in a)) + sqrt(sum(x**2 for x in b)))
        if add_comps:
            return sig(sum(s))
        sq = sum(x**2 for x in s)
        return sig(sq if no_sqrt else sqrt(sq))
    if ask == "dir":
        rx, ry = v["a1"] + v["b1"], v["a2"] + v["b2"]
        if calc:
            return sig(_deg(atan(ry / rx)))
        if no_signs:
            return sig(_deg(atan(Abs(ry / rx))))
        if from_y:
            return sig(_deg(atan(Abs(rx / ry))))
        a = _deg(atan2(ry, rx))
        return sig(a if a >= 0 else a + 360)
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
    "C03-M1": _m(("comp",), swap=True),  # uses sin for the adjacent component
    "C03-M2": _m(("comp",), use_tan=True),  # uses tan
    "C03-M3": _m(("comp",), divide=True),  # divides by cos
    "C03-M4": _m(("unit", "par"), how="r2"),  # divides by the square of the magnitude
    "C03-M5": _m(("unit", "par"), how="sum"),  # divides by the sum of the components
    "C03-M6": _m(("unit",), ones=True),  # thinks a unit vector has components of 1
    "C03-M7": _m(("magsum",), add_mags=True),  # adds the magnitudes
    "C03-M8": _m(("magsum",), no_sqrt=True),  # forgets the square root
    "C03-M9": _m(("magsum",), add_comps=True),  # adds the components
    "C03-M10": _m(("dir",), calc=True),  # takes the calculator's tan^-1 without checking the quadrant
    "C03-M11": _m(("dir",), no_signs=True),  # ignores the signs of the components
    "C03-M12": _m(("dir",), from_y=True),  # inverts the ratio, measuring from the y-axis
    "C03-M13": _m(("par",), how="none"),  # multiplies the vector itself, not its unit vector
}
