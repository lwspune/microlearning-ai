"""C06 Area of a sector: answer models (the key, and one per misconception).

Inputs: the radius r, or circ = the area of the whole circle (so r = sqrt(circ / pi));
t = the central angle in radians (an angle the book gives in degrees goes in as radians);
P = the perimeter of the sector.
params["ask"]:
  area       the sector's area, from r and t
  segment    the area between the arc and its chord, from r and t
  perimeter  the sector's perimeter, from r and t
  area_p     the sector's area, from r and its perimeter P
"""
from sympy import cos, pi, sin, sqrt


def _r(v):
    return v["r"] if "r" in v else sqrt(v["circ"] / pi)


def _ask(p, *allowed):
    ask = p.get("ask", "area")
    if ask not in allowed:
        raise ValueError(f"does not apply to ask={ask}")
    return ask


def _fraction_of_disc(r, t):
    """A sector of angle t is the fraction t / (2 pi) of the disc, whose area is pi r^2."""
    return t / (2 * pi) * pi * r**2


def _triangle(r, t):
    """Triangle O P Q with P = (r, 0), Q = (r cos t, r sin t): half the cross product."""
    (px, py), (qx, qy) = (r, 0), (r * cos(t), r * sin(t))
    return (px * qy - qx * py) / 2


def key(v, p):
    """From the definitions: a sector is its share of the disc; a segment is that minus the
    triangle on the chord; the boundary is two radii and the arc (its share of 2 pi r)."""
    ask = _ask(p, "area", "segment", "perimeter", "area_p")
    r = _r(v)
    if ask == "area_p":
        arc = v["P"] - 2 * r
        return _fraction_of_disc(r, arc / r)
    t = v["t"]
    if ask == "area":
        return _fraction_of_disc(r, t)
    if ask == "segment":
        return _fraction_of_disc(r, t) - _triangle(r, t)
    return 2 * r + t / (2 * pi) * 2 * pi * r


def m1(v, p):
    """Degrees left in: uses the number of degrees as theta in 1/2 r^2 theta and s = r theta."""
    ask = _ask(p, "area", "segment", "perimeter")
    r, d = _r(v), v["t"] * 180 / pi
    if ask == "area":
        return r**2 * d / 2
    if ask == "segment":
        return r**2 * d / 2 - r**2 * sin(v["t"]) / 2
    return 2 * r + r * d


def m2(v, p):
    """Area taken as r times s (= r^2 theta), like a rectangle: the 1/2 is dropped."""
    ask = _ask(p, "area", "segment", "area_p")
    r = _r(v)
    if ask == "area_p":
        return r * (v["P"] - 2 * r)
    t = v["t"]
    if ask == "area":
        return r**2 * t
    return r**2 * t - r**2 * sin(t) / 2


def m3(v, p):
    """Gives the arc length s = r theta as the area."""
    ask = _ask(p, "area", "area_p")
    r = _r(v)
    if ask == "area_p":
        return v["P"] - 2 * r
    return r * v["t"]


def m4(v, p):
    """Takes the area between the arc and the chord to be the whole sector."""
    _ask(p, "segment")
    r = _r(v)
    return r**2 * v["t"] / 2


def m5(v, p):
    """Takes the perimeter of a sector to be its arc alone (no radii)."""
    ask = _ask(p, "perimeter", "area_p")
    r = _r(v)
    if ask == "area_p":
        return r * v["P"] / 2
    return r * v["t"]


def m6(v, p):
    """Counts only one radius in the perimeter: P = r + s."""
    ask = _ask(p, "perimeter", "area_p")
    r = _r(v)
    if ask == "area_p":
        return r * (v["P"] - r) / 2
    return r + r * v["t"]


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
