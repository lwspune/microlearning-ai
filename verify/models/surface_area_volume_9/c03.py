"""C03 Cone: slant height and surface area: answer models (the key, and one per misconception).

Every item names what it asks in params["find"]:
  r     the base radius, given the perpendicular height h and the slant height l;
  h     the perpendicular height, given the curved surface area csa and either r or l;
  csa   the curved surface area, given r and h;
  cost  the cost of a closed cone (curved surface and base), given r, h and the rate per unit area.
Inputs also carry pi, the value of pi the stem gives (22/7, or 157/50 for 3.14).

The key works from the definitions, not the textbook formulas: the slant height is the distance
from the vertex to the rim, the curved surface adds up thin bands (a surface of revolution), and
the base is a sum of thin rings. Exact pi is used and the stem's value substituted at the end;
unknowns are solved for from those definitions. Each misconception applies its own wrong rule.
"""
from sympy import Point, Symbol, diff, integrate, pi, solve, sqrt

_z = Symbol("z", real=True)
_rho = Symbol("rho", positive=True)
_R = Symbol("R", positive=True)
_H = Symbol("H", positive=True)


def _slant(r, h):
    """Distance from the vertex (0, h) to a point (r, 0) on the rim."""
    return Point(0, h).distance(Point(r, 0))


def _curved(r, h):
    """Area swept by the slanting side x = r(h - z)/h, 0 <= z <= h, turned about the axis."""
    f = r * (h - _z) / h
    return integrate((2 * pi * f * sqrt(1 + diff(f, _z) ** 2)).simplify(), (_z, 0, h)).simplify()


def _base(r):
    """The flat base as a sum of thin rings."""
    return integrate(2 * pi * _rho, (_rho, 0, r))


def _one(sols):
    sols = [s for s in sols if s.is_positive]
    if len(sols) != 1:
        raise ValueError(f"expected one positive solution, got {sols}")
    return sols[0]


def key(v, p):
    P, find = v["pi"], p["find"]
    if find == "r":  # the radius whose rim is l from the vertex
        return _one(solve(_slant(_R, v["h"]) - v["l"], _R))
    if find == "h":
        if "r" in v:  # the height whose curved surface is csa
            return _one(solve(_curved(v["r"], _H).subs(pi, P) - v["csa"], _H))
        # given l: the radius and height with slant l and curved surface csa
        sols = solve([_slant(_R, _H) - v["l"], _curved(_R, _H).subs(pi, P) - v["csa"]], [_R, _H], dict=True)
        return _one([s[_H] for s in sols])
    if find == "csa":
        return _curved(v["r"], v["h"]).subs(pi, P)
    if find == "cost":
        return ((_curved(v["r"], v["h"]) + _base(v["r"])).subs(pi, P) * v["rate"]).simplify()
    raise ValueError(find)


def _model(v, p, hyp=lambda a, b: sqrt(a**2 + b**2), leg=lambda c, a: sqrt(c**2 - a**2),
           csa_uses_h=False, swap=False, base=lambda P, r: P * r**2):
    """The textbook route with one rule swapped out: hyp/leg (Pythagoras), the curved surface, the base."""
    P, find = v["pi"], p["find"]
    if find == "r":
        return leg(v["l"], v["h"])
    if find == "h":
        if "r" in v:
            l_or_h = v["csa"] / (P * v["r"])  # csa = pi r l (or pi r h)
            return l_or_h if csa_uses_h else leg(l_or_h, v["r"])
        if csa_uses_h:
            raise ValueError("needs the radius")
        return leg(v["l"], v["csa"] / (P * v["l"]))
    r, h = v["r"], v["h"]
    curved = P * r * (h if csa_uses_h else hyp(r, h))
    total = curved + base(P, r)
    if find == "csa":
        return total if swap else curved
    if find == "cost":
        return (curved if swap else total) * v["rate"]
    raise ValueError(find)


def m1(v, p):
    """Adds the lengths instead of their squares: l = r + h, a leg = l - the other leg."""
    return _model(v, p, hyp=lambda a, b: a + b, leg=lambda c, a: c - a)


def m2(v, p):
    """Takes the slant height as a leg: finds a leg by adding squares, sqrt(l^2 + other^2)."""
    if p["find"] not in ("r", "h"):
        raise ValueError("finds no leg")
    return _model(v, p, leg=lambda c, a: sqrt(c**2 + a**2))


def m3(v, p):
    """Uses the perpendicular height in place of the slant height: curved surface pi r h."""
    return _model(v, p, csa_uses_h=True)


def m4(v, p):
    """Swaps curved and total surface: leaves the base out of a closed cone, or adds it to the curved surface."""
    if p["find"] not in ("csa", "cost"):
        raise ValueError("asks no surface")
    return _model(v, p, swap=True)


def m5(v, p):
    """Takes the base's area as its circumference 2 pi r."""
    if p["find"] != "cost":
        raise ValueError("no base")
    return _model(v, p, base=lambda P, r: 2 * P * r)


def m6(v, p):
    """Stops at the square: gives l^2 - h^2 (or l^2 - r^2) as the length, without the square root."""
    if p["find"] not in ("r", "h"):
        raise ValueError("finds no length")
    return _model(v, p, leg=lambda c, a: c**2 - a**2)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
