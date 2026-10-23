"""C04 Volume of a cone: answer models (the key, and one per misconception).

params["find"]: "vol" (the volume) or "h" (the perpendicular height, from the volume).
Inputs: the radius r or the diameter d; the height h, the slant height l, or the total
surface area S (from which the slant height follows); the volume V when the height is asked;
and pi, the value of pi the stem gives (22/7, or 157/50 for 3.14).

The key works from the definition: the volume is the sum of the circular cross-sections,
whose radius shrinks evenly from r at the base to 0 at the vertex (an integral of their
areas), and the slant height is the distance from the vertex to the rim. Exact pi is used
and the stem's value substituted at the end.
"""
from sympy import Rational, Symbol, integrate, pi, solve, sqrt

_z = Symbol("z", real=True)
_H = Symbol("H", positive=True)
THIRD = Rational(1, 3)


def _volume(r, h):
    """Sum of the cross-sections: a disc of radius r(h - z)/h at height z."""
    return integrate(pi * (r * (h - _z) / h) ** 2, (_z, 0, h))


def _radius(v):
    return v["r"] if "r" in v else v["d"] / 2


def _slant(v, r, P):
    """The slant height: given, or from the total surface area S = pi r (l + r)."""
    if "l" in v:
        return v["l"]
    if "S" in v:
        return v["S"] / (P * r) - r
    raise ValueError("no slant height in the inputs")


def _height(v, r, P):
    """The perpendicular height: given, or the leg of the right triangle with hypotenuse l."""
    if "h" in v:
        return v["h"]
    l = _slant(v, r, P)
    h = sqrt(l**2 - r**2)
    if not (h.is_real and h > 0):
        raise ValueError("slant height not longer than the radius")
    return h


def key(v, p):
    P = v["pi"]
    r = _radius(v)
    if p["find"] == "vol":
        return _volume(r, _height(v, r, P)).simplify().subs(pi, P)
    if p["find"] == "h":
        (h,) = solve(_volume(r, _H).subs(pi, P) - v["V"], _H)
        return h
    raise ValueError(p["find"])


def _with_factor(c, v, p, r=None, h=None):
    """A wrong rule V = c * pi * r^2 * h, run forwards (find V) or backwards (find h)."""
    P = v["pi"]
    r = _radius(v) if r is None else r
    if p["find"] == "vol":
        return c * P * r**2 * (_height(v, r, P) if h is None else h)
    if p["find"] == "h":
        return v["V"] / (c * P * r**2)
    raise ValueError(p["find"])


def m1(v, p):
    """Drops the 1/3: takes the cone's volume to be the cylinder's, pi r^2 h."""
    return _with_factor(1, v, p)


def m2(v, p):
    """Puts the slant height l where the perpendicular height h belongs: (1/3) pi r^2 l."""
    if p["find"] != "vol" or "h" in v:
        raise ValueError("needs a slant height and a volume to find")
    r = _radius(v)
    return _with_factor(THIRD, v, p, h=_slant(v, r, v["pi"]))


def m3(v, p):
    """Finds the height by subtracting lengths, h = l - r, instead of h^2 = l^2 - r^2."""
    if p["find"] != "vol" or "h" in v:
        raise ValueError("needs a slant height and a volume to find")
    r = _radius(v)
    return _with_factor(THIRD, v, p, h=_slant(v, r, v["pi"]) - r)


def m4(v, p):
    """Uses the diameter as the radius."""
    if "d" not in v:
        raise ValueError("the radius is given")
    d = v["d"]
    if p["find"] == "vol" and "h" not in v:
        l = _slant(v, d, v["pi"])
        if l <= d:
            raise ValueError("slant height shorter than the diameter")
        return _with_factor(THIRD, v, p, r=d, h=sqrt(l**2 - d**2))
    return _with_factor(THIRD, v, p, r=d)


def m5(v, p):
    """Takes a half, as for a triangle's area: (1/2) pi r^2 h."""
    return _with_factor(Rational(1, 2), v, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
