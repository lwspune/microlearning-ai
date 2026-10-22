"""C02 Tangent at a point on the circle: answer models (the key, and one per misconception).

params["kind"] picks the question; angles are in degrees.
  count         how many tangents can be drawn at a point on the circle.
  alt_away      v["x"]: inscribed angle CAB on chord CB; find the angle between the tangent at C and
                the chord, on the side of CB away from A (the angle the construction copies).
  alt_near      v["x"]: as alt_away, but find the angle on A's side of the chord.
  central       v["c"]: central angle (or arc) on chord PQ; find the angle between the tangent at P and
                the chord, on the side of the arc PQ.
  radius_chord  v["r"]: angle OPQ between radius OP and chord PQ; find the angle between the tangent at P
                and the chord, on Q's side of OP.
"""
import math

from sympy import Integer, Rational, Symbol

R90, R180 = Integer(90), Integer(180)
MANY = Symbol("infinitely_many")


def _deg(v):
    """An angle read off the co-ordinates, as an exact half-degree (checked, not assumed)."""
    h = round(2 * v)
    if abs(2 * v - h) > 1e-7:
        raise ValueError("not a half-degree")
    return Rational(h, 2)


def _tangent_chord(arc):
    """From the definition: unit circle, point of contact P = (0, -1), so the radius OP is vertical
    and the tangent at P (perpendicular to it) is the x-axis direction. Q is the point with arc PQ =
    arc, anticlockwise from P. The angle between the tangent ray towards +x and chord PQ is read off
    the co-ordinates."""
    t = math.radians(-90 + float(arc))
    return _deg(math.degrees(math.atan2(math.sin(t) + 1, math.cos(t))))


def _range(a):
    if not 0 < a < R180:
        raise ValueError("out of range")
    return a


def key(v, p):
    k = p["kind"]
    if k == "count":
        return Integer(1)
    if k == "alt_away":       # the inscribed angle stands on arc CB = 2x (inscribed angle theorem)
        return _tangent_chord(2 * v["x"])
    if k == "alt_near":
        return R180 - _tangent_chord(2 * v["x"])
    if k == "central":
        return _tangent_chord(v["c"])
    if k == "radius_chord":   # isosceles triangle OPQ: central angle POQ = 180 - 2r
        return _tangent_chord(R180 - 2 * v["r"])
    raise ValueError("unknown kind")


def m1(v, p):
    """Takes the tangent as perpendicular to a chord through the point (any chord, not the radius)."""
    if p["kind"] == "count":
        return MANY            # one 'tangent' for every chord through the point
    if p["kind"] in ("alt_away", "alt_near", "central"):
        return R90
    raise ValueError("the chord's angle with the radius is given")


def m2(v, p):
    """Copies the arc (twice the inscribed angle, or the central angle) as the tangent-chord angle."""
    k = p["kind"]
    if k == "alt_away":
        return _range(2 * v["x"])
    if k == "alt_near":
        return _range(R180 - 2 * v["x"])
    if k == "central":
        return _range(v["c"])
    if k == "radius_chord":
        return _range(R180 - 2 * v["r"])
    raise ValueError("no angle to copy")


def m3(v, p):
    """Puts the equal angle on the wrong side of the chord (gives the angle on the other side)."""
    if p["kind"] in ("alt_away", "alt_near", "central", "radius_chord"):
        return _range(R180 - key(v, p))
    raise ValueError("no chord")


def m4(v, p):
    """Gives the angle between the chord and the radius instead of the chord and the tangent."""
    k = p["kind"]
    if k == "central":
        return _range((R180 - v["c"]) / 2)
    if k == "radius_chord":
        return v["r"]
    raise ValueError("no radius in the question")


def m5(v, p):
    """Thinks two tangents can be drawn at a point on the circle, as from an outside point."""
    if p["kind"] == "count":
        return Integer(2)
    raise ValueError("count only")


def m6(v, p):
    """Thinks no tangent can be drawn at a point on the circle (only from outside points)."""
    if p["kind"] == "count":
        return Integer(0)
    raise ValueError("count only")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
