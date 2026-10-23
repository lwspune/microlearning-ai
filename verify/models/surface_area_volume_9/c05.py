"""C05 Sphere and hemisphere: answer models (the key, and one per misconception).

Inputs (sympy numbers):
  r or d  radius, or diameter (absent when the radius is found back)
  pi      the value of pi the question gives (22/7, 157/50, or sympy pi when it cancels)
  given   a known measure (params["of"]) when the radius is found back

params:
  solid  "sphere" | "hemisphere"
  find   "sa" (sphere surface) | "csa" | "tsa" (hemisphere surfaces) | "vol" | "r" | "d"
  of     with `given`: which measure (one of the find kinds above) is known

The key builds each measure from its definition: a sphere's surface is four of its
great circles (4*pi*r^2), its volume 4/3*pi*r^3; a hemisphere is half a sphere, and a
solid one adds its flat circle pi*r^2 to the curved half.
"""
from sympy import Rational, Symbol, solve

_R = Symbol("R", positive=True)


def _true(solid, kind, r, pi):
    if solid == "sphere":
        if kind == "sa":
            return 4 * pi * r**2
        if kind == "vol":
            return Rational(4, 3) * pi * r**3
    if solid == "hemisphere":
        if kind == "csa":
            return 2 * pi * r**2
        if kind == "tsa":
            return 2 * pi * r**2 + pi * r**2
        if kind == "vol":
            return Rational(2, 3) * pi * r**3
    raise ValueError(f"no {kind} for a {solid}")


def _radius(v, p, F, use_d_as_r=False):
    if "given" in v:
        sols = [s for s in solve(F(p["solid"], p["of"], _R, v["pi"]) - v["given"], _R) if s.is_positive]
        if len(sols) != 1:
            raise ValueError("no single positive radius")
        return sols[0]
    if "r" in v:
        return v["r"]
    return v["d"] if use_d_as_r else v["d"] / 2


def _answer(v, p, F, use_d_as_r=False, radius_for_d=False):
    r = _radius(v, p, F, use_d_as_r)
    find = p["find"]
    if find == "r":
        return r
    if find == "d":
        return r if radius_for_d else 2 * r
    return F(p["solid"], find, r, v["pi"])


def key(v, p):
    return _answer(v, p, _true)


def m1(v, p):
    """Mixes up a hemisphere's curved and total surface: adds the flat circle to the curved one, drops it from the total."""
    if p["solid"] != "hemisphere":
        raise ValueError("only a hemisphere has two surfaces")

    def F(solid, kind, r, pi):
        swap = {"csa": "tsa", "tsa": "csa"}
        return _true(solid, swap.get(kind, kind), r, pi)
    return _answer(v, p, F)


def m2(v, p):
    """Mixes up the sphere and the hemisphere: uses the whole sphere's formula for a hemisphere, half of it for a sphere."""
    def F(solid, kind, r, pi):
        if solid == "hemisphere":
            return _true("sphere", "vol" if kind == "vol" else "sa", r, pi)
        return _true("hemisphere", "vol" if kind == "vol" else "csa", r, pi)
    return _answer(v, p, F)


def m3(v, p):
    """Mixes up radius and diameter: puts a given diameter in as the radius, or gives the radius when the diameter is asked."""
    if "d" not in v and p["find"] != "d":
        raise ValueError("no diameter in the question")
    return _answer(v, p, _true, use_d_as_r=True, radius_for_d=True)


def m4(v, p):
    """Takes volume as surface area times radius, leaving out the 1/3: 4*pi*r^3 for a sphere, 2*pi*r^3 for a hemisphere."""
    def F(solid, kind, r, pi):
        if kind == "vol":
            return _true(solid, "sa" if solid == "sphere" else "csa", r, pi) * r
        return _true(solid, kind, r, pi)
    if p["find"] != "vol" and p.get("of") != "vol":
        raise ValueError("no volume in the question")
    return _answer(v, p, F)


def m5(v, p):
    """Takes a round surface to have the area of its flat circle: a sphere's surface pi*r^2, a hemisphere's dome pi*r^2."""
    def F(solid, kind, r, pi):
        if kind in ("sa", "csa"):
            return pi * r**2
        if kind == "tsa":
            return 2 * pi * r**2
        return _true(solid, kind, r, pi)
    if p["find"] == "vol" and p.get("of") is None:
        raise ValueError("no surface in the question")
    return _answer(v, p, F)


def m6(v, p):
    """Squares the radius in the volume formula instead of cubing it."""
    def F(solid, kind, r, pi):
        if kind == "vol":
            return _true(solid, kind, r, pi) / r
        return _true(solid, kind, r, pi)
    if p["find"] != "vol" and p.get("of") != "vol":
        raise ValueError("no volume in the question")
    return _answer(v, p, F)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
