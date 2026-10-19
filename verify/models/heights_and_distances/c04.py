"""C04 Towers, flagstaffs and buildings: answer models (the key, and one per misconception).

Every question has two sight lines with one horizontal distance d. Angles are in radians;
a is the smaller angle, b the larger. p["ask"] picks the question type:
  flag     a flagstaff of height v["f"] on a tower; from a ground point the flagstaff's foot is
           at elevation a and its top at b -> the tower's height T
  hill     a target's top seen from the top (angle a) and the foot (angle b) of a building of
           height v["h"] -> the target's height H. Also the building's height when its roof sees
           a tower of height v["h"] at depressions a (top) and b (foot): the same two equations.
  pole     a tower of height v["H"] seen from the top (a) and the foot (b) of a pole -> the pole's height
  subtend  a flagstaff of height v["f"] on a tower of height v["T"], seen from a ground point
           v["x"] from the foot -> tan of the angle the flagstaff subtends there
"""
from sympy import Symbol, atan, expand_trig, simplify, solve, tan

_d = Symbol("d", positive=True)
_u = Symbol("u")


def _tidy(e):
    """Simplified, with tan 2θ expanded so symbolic answers reach their closed forms."""
    return simplify(expand_trig(e))


def _ask(p):
    return p["ask"]


def _solve(eqs, unknown):
    """Solve the two sight-line equations (each expr = 0) for the unknown height."""
    sol = solve(eqs, [unknown, _d], dict=True)
    assert len(sol) == 1, sol
    return _tidy(sol[0][unknown])


def key(v, p):
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "flag":  # T = d tan a, T + f = d tan b
        return _solve([_u - _d * tan(a), _u + v["f"] - _d * tan(b)], _u)
    if ask == "hill":  # H = d tan b, H - h = d tan a
        return _solve([_u - _d * tan(b), _u - v["h"] - _d * tan(a)], _u)
    if ask == "pole":  # H = d tan b, H - p = d tan a
        return _solve([v["H"] - _d * tan(b), v["H"] - _u - _d * tan(a)], _u)
    if ask == "subtend":  # the angle between the sight lines to the foot and the top
        x, T, f = v["x"], v["T"], v["f"]
        return _tidy(tan(atan((T + f) / x) - atan(T / x)))
    raise ValueError(ask)


def m1(v, p):
    """Takes the flagstaff's top as f above the ground, forgetting the tower under it."""
    ask = _ask(p)
    if ask == "flag":  # T = d tan a, f = d tan b
        return _tidy(v["f"] * tan(v["a"]) / tan(v["b"]))
    if ask == "subtend":
        x, T, f = v["x"], v["T"], v["f"]
        return _tidy(tan(atan(f / x) - atan(T / x)))
    raise ValueError("only with a flagstaff")


def m2(v, p):
    """Answers with the other piece of the stacked height, not the height asked."""
    ask = _ask(p)
    if ask == "flag":
        return _tidy(key(v, p) + v["f"])  # the flagstaff's top, T + f
    if ask == "hill":
        return _tidy(key(v, p) - v["h"])  # the rise above the roof, H - h
    if ask == "pole":
        return _tidy(v["H"] - key(v, p))  # the tower above the pole's top, H - p
    raise ValueError("no stacked height asked")


def m3(v, p):
    """Treats the angle between the sight lines, b - a, as an elevation: tan(b - a) = gap / d."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "flag":
        d = v["f"] / tan(b - a)
        return _tidy(d * tan(a))
    if ask == "hill":
        d = v["h"] / tan(b - a)
        return _tidy(d * tan(b))
    if ask == "pole":
        d = v["H"] / tan(b)
        return _tidy(d * tan(b - a))
    if ask == "subtend":
        return v["f"] / v["x"]
    raise ValueError(ask)


def m4(v, p):
    """Adds the two vertical sides where they should be subtracted: gap = d(tan a + tan b)."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "flag":
        d = v["f"] / (tan(a) + tan(b))
        return _tidy(d * tan(a))
    if ask == "hill":
        d = v["h"] / (tan(a) + tan(b))
        return _tidy(d * tan(b))
    if ask == "pole":
        d = v["H"] / tan(b)
        return _tidy(d * (tan(a) + tan(b)))
    raise ValueError("only with two levels")


def m5(v, p):
    """Takes the elevation of the flagstaff's top as the angle the flagstaff subtends."""
    if _ask(p) != "subtend":
        raise ValueError("only for a subtended angle")
    return (v["T"] + v["f"]) / v["x"]


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
