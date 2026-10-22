"""C01 Surface area and volume of solids: answer models (the key, and one per misconception).

Every item names its solid in params["solid"] (cylinder | cone | sphere | hemisphere) and what it
asks in params["find"] (csa: curved surface area | tsa: total surface area | vol: volume).
Inputs: the radius r or the diameter d; the perpendicular height h or the slant height l (cone);
and pi, the value of pi the stem gives (22/7 or 157/50 for 3.14).

The key works from the definitions, not the textbook formulas: volumes add up cross-sections
(integrals of their areas), curved surfaces add up thin bands (surfaces of revolution), and the
slant height is the distance from the vertex to the rim. Exact pi is used throughout and the
stem's value substituted at the end. Each misconception applies its own wrong rule.
"""
from sympy import Rational, Symbol, diff, integrate, pi, sqrt

_z = Symbol("z", real=True)


def _volume(solid, r, h):
    """Sum of cross-sections: the area of the slice at height z, integrated over the solid."""
    if solid == "cylinder":
        return integrate(pi * r**2, (_z, 0, h))
    if solid == "cone":  # radius shrinks linearly from r at the base to 0 at the vertex
        return integrate(pi * (r * (h - _z) / h) ** 2, (_z, 0, h))
    if solid == "sphere":
        return integrate(pi * (r**2 - _z**2), (_z, -r, r))
    if solid == "hemisphere":
        return integrate(pi * (r**2 - _z**2), (_z, 0, r))
    raise ValueError(solid)


def _band(f, a, b):
    """Area swept by the profile x = f(z), a <= z <= b, turned about the axis."""
    return integrate((2 * pi * f * sqrt(1 + diff(f, _z) ** 2)).simplify(), (_z, a, b))


def _disc(r):
    """A flat circular face, as a sum of thin rings."""
    rho = Symbol("rho", positive=True)
    return integrate(2 * pi * rho, (rho, 0, r))


def _curved(solid, r, h):
    if solid == "cylinder":
        return _band(r + 0 * _z, 0, h)
    if solid == "cone":
        return _band(r * (h - _z) / h, 0, h)
    if solid == "sphere":
        return _band(sqrt(r**2 - _z**2), -r, r)
    if solid == "hemisphere":
        return _band(sqrt(r**2 - _z**2), 0, r)
    raise ValueError(solid)


_FLAT = {"cylinder": 2, "cone": 1, "sphere": 0, "hemisphere": 1}


def _measure(solid, find, r, h, P):
    if find == "vol":
        val = _volume(solid, r, h)
    elif find == "csa":
        val = _curved(solid, r, h)
    elif find == "tsa":
        val = _curved(solid, r, h) + _FLAT[solid] * _disc(r)
    else:
        raise ValueError(find)
    return (val.simplify()).subs(pi, P)


def _radius(v):
    return v["r"] if "r" in v else v["d"] / 2


def _height(v, r):
    """The perpendicular height: given, or from the slant height (vertex to rim distance).
    A sphere or hemisphere has none (its radius is passed, and unused)."""
    if "h" in v:
        return v["h"]
    if "l" in v:
        return sqrt(v["l"] ** 2 - r**2)
    return r


def key(v, p):
    r = _radius(v)
    return _measure(p["solid"], p["find"], r, _height(v, r), v["pi"])


# ---- Misconceptions: textbook formulas with one wrong rule each.

def _cone(find, r, h, l, P):
    if find == "vol":
        return Rational(1, 3) * P * r**2 * h
    if find == "csa":
        return P * r * l
    return P * r * (l + r)


def m1(v, p):
    """Cone and cylinder volumes swapped: a cone gets pi r^2 h, a cylinder (1/3) pi r^2 h."""
    if p["find"] != "vol" or p["solid"] not in ("cone", "cylinder"):
        raise ValueError("only cone or cylinder volumes")
    r = _radius(v)
    h = _height(v, r)
    f = 1 if p["solid"] == "cone" else Rational(1, 3)
    return f * v["pi"] * r**2 * h


def m2(v, p):
    """Perpendicular and slant height swapped: h where l belongs, l where h belongs."""
    if p["solid"] != "cone":
        raise ValueError("cones only")
    r, P = _radius(v), v["pi"]
    if p["find"] == "vol":
        if "l" not in v:
            raise ValueError("needs a given slant height")
        return _cone("vol", r, v["l"], None, P)
    if "h" not in v:
        raise ValueError("needs a given perpendicular height")
    return _cone(p["find"], r, None, v["h"], P)


def m3(v, p):
    """Slant height taken as l = r + h (so h = l - r): lengths added instead of their squares."""
    if p["solid"] != "cone":
        raise ValueError("cones only")
    r, P = _radius(v), v["pi"]
    if p["find"] == "vol":
        if "l" not in v:
            raise ValueError("needs a given slant height")
        return _cone("vol", r, v["l"] - r, None, P)
    if "h" not in v:
        raise ValueError("needs a given perpendicular height")
    return _cone(p["find"], r, None, r + v["h"], P)


def m4(v, p):
    """Curved and total surface swapped: the flat faces left out of the total, or added to the curved."""
    if p["find"] == "vol" or p["solid"] == "sphere":
        raise ValueError("surfaces with flat faces only")
    r = _radius(v)
    other = "csa" if p["find"] == "tsa" else "tsa"
    return _measure(p["solid"], other, r, _height(v, r), v["pi"])


def m5(v, p):
    """The diameter used as the radius."""
    if "d" not in v:
        raise ValueError("needs a given diameter")
    w = dict(v)
    w["r"] = w.pop("d")
    return key(w, p)


def m6(v, p):
    """A circle's circumference 2 pi r used for its area pi r^2 (in a base or a flat face)."""
    r, P = _radius(v), v["pi"]
    s = p["solid"]
    if p["find"] == "vol" and s == "cylinder":
        return 2 * P * r * _height(v, r)
    if p["find"] == "tsa" and s in ("cylinder", "hemisphere"):
        curved = _measure(s, "csa", r, _height(v, r), P)
        return curved + _FLAT[s] * 2 * P * r
    raise ValueError("cylinder volume, or a total surface with flat faces")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
