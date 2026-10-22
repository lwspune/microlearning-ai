"""C05 Problems with two triangles: answer models (the key, and one per misconception).

params["type"] names the figure; angles are inputs in degrees.
  bldg:  two buildings facing each other. h = first building, d = road width, th = elevation of the
         second's top from the first's top. Asks the second building's height.
  tree:  a broken tree. d = foot of the tree to where the top touches the ground, th = angle the top
         makes with the ground. Asks the tree's full height.
  poles: two poles, H the taller, h the shorter, th = angle of the wire joining their tops with the
         horizontal. Asks the wire's length.
  river: a tree on the far bank seen at elevation a from the bank, and at b after walking d metres
         straight back. params["find"]: "h" (the tree's height) or "w" (the river's width).

The key places the points on a plane and works from coordinates (lines of sight as lines through the
eye, lengths by the distance formula, the river case by solving the two lines of sight together),
never by the add-the-rectangle route the concept teaches. Each misconception is that route with
its one wrong idea.
"""
from sympy import cos, nsimplify, pi, sin, simplify, solve, sqrt, symbols, tan

_X, _Y = symbols("x y", real=True)


def _r(deg):
    return pi * nsimplify(deg) / 180


def _done(e):
    return nsimplify(simplify(e))


def key(v, p):
    t = p["type"]
    if t == "bldg":
        # Eye at (0, h); the line of sight y = h + x tan(th) meets the second building's line x = d.
        return _done((v["h"] + _X * tan(_r(v["th"]))).subs(_X, v["d"]))
    if t == "tree":
        # Foot B = (0, 0), top lands at D = (d, 0); the break C = (0, c) lies on the line through D
        # rising at th towards B. Height = BC + CD (the fallen piece CD was the top part CA).
        c = v["d"] * tan(_r(v["th"]))
        cd = sqrt((v["d"] - 0) ** 2 + (0 - c) ** 2)
        return _done(c + cd)
    if t == "poles":
        # Shorter top C = (0, h); the wire rises at th, so the taller top A = (x, H) with x = (H - h)/tan th.
        rise = v["H"] - v["h"]
        x = rise / tan(_r(v["th"]))
        return _done(sqrt(x**2 + rise**2))
    if t == "river":
        # Tree foot B = (0, 0), bank C = (x, 0), walked back to D = (x + d, 0); both lines of sight
        # pass through the tree's top (0, y).
        sol = solve([_Y - _X * tan(_r(v["a"])), _Y - (_X + v["d"]) * tan(_r(v["b"]))], [_X, _Y], dict=True)[0]
        return _done(sol[_Y] if p["find"] == "h" else sol[_X])
    raise ValueError(t)


def _river(v, p, base):
    """The river route: base(theta) is the horizontal distance a student takes for height 1 at angle theta.
    The walked distance d is the difference of the two bases."""
    a, b = _r(v["a"]), _r(v["b"])
    h = v["d"] / abs(base(b) - base(a))
    return _done(h if p["find"] == "h" else h * base(a))


def m1(v, p):
    """The vertical side of the right triangle is the whole height (forgets the rectangle or the standing part)."""
    t, th = p["type"], _r(v.get("th", 0))
    if t == "bldg":
        return _done(v["d"] * tan(th))
    if t == "tree":
        return _done(v["d"] * tan(th))
    if t == "poles":
        return _done(v["H"] / sin(th))
    raise ValueError("no rectangle in the river figure")


def m2(v, p):
    """Measures the angle from the vertical: swaps the opposite and adjacent sides of th."""
    t = p["type"]
    if t == "bldg":
        return _done(v["h"] + v["d"] / tan(_r(v["th"])))
    if t == "tree":
        th = _r(v["th"])
        return _done(v["d"] / tan(th) + v["d"] / sin(th))
    if t == "poles":
        return _done((v["H"] - v["h"]) / cos(_r(v["th"])))
    if t == "river":
        return _river(v, p, lambda th: tan(th))
    raise ValueError(t)


def m3(v, p):
    """Takes the given horizontal distance as the slant side (the hypotenuse): uses sin where tan belongs."""
    t = p["type"]
    if t == "bldg":
        return _done(v["h"] + v["d"] * sin(_r(v["th"])))
    if t == "tree":
        # The fallen piece CD is taken as d, and the standing part as d sin(th).
        return _done(v["d"] + v["d"] * sin(_r(v["th"])))
    if t == "river":
        return _river(v, p, lambda th: 1 / sin(th))
    raise ValueError("no horizontal distance is given")


def m4(v, p):
    """Adds where the figure subtracts, or subtracts where it adds."""
    t = p["type"]
    if t == "bldg":
        return _done(v["d"] * tan(_r(v["th"])) - v["h"])
    if t == "poles":
        return _done((v["H"] + v["h"]) / sin(_r(v["th"])))
    if t == "river":
        a, b = _r(v["a"]), _r(v["b"])
        h = v["d"] / (1 / tan(b) + 1 / tan(a))
        return _done(h if p["find"] == "h" else h / tan(a))
    raise ValueError("nothing to add or subtract here")


def m5(v, p):
    """Takes the walked distance as the distance from the foot of the tree to the second point."""
    if p["type"] != "river":
        raise ValueError("only two points of observation")
    h = v["d"] * tan(_r(v["b"]))
    return _done(h if p["find"] == "h" else h / tan(_r(v["a"])))


def m6(v, p):
    """Finds the slant side by multiplying by the ratio instead of dividing (hyp = adj x cos)."""
    t = p["type"]
    if t not in ("tree", "poles"):
        raise ValueError("no slant side to find")
    th = _r(v["th"])
    if t == "tree":
        return _done(v["d"] * tan(th) + v["d"] * cos(th))
    if t == "poles":
        return _done((v["H"] - v["h"]) * sin(th))
    raise ValueError("no slant side to find")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
