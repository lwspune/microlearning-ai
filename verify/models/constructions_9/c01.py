"""C01 Base, base angle and sum of the other sides: answer models (the key, and one per misconception).

The triangle has base BC (length v["a"], cm) and the given angle at one base vertex (the "angle
vertex"); the other two sides add up to v["s"] (or the perimeter v["p"] is given instead).
params["kind"] picks the question:
  bd       how far along the arm of the given angle point D is marked (a length, cm).
  plan_len Tuple(where the ray is drawn, that length): perimeter given, angle at C.
  plan_seg Tuple(where the ray is drawn, which segment's perpendicular bisector is drawn).
  locate   which point is the third vertex A.
  other    v["x"] is the measured side next to the given angle; the third side (cm). v["beta"]
           is the given angle in degrees.
Named answers (Symbols):
  AT_ANGLE / AT_OTHER    the ray is drawn at the vertex of the given angle / at the other base vertex.
  D_OTHER                seg joining D to the other base vertex (the right segment to bisect).
  D_ANGLE                seg joining D to the angle vertex, D on a ray drawn at the other vertex.
  MARKED                 the marked segment itself (angle vertex to D).
  BASE                   the base BC.
"""
from sympy import Symbol, Tuple, cos, pi, simplify, sqrt, sympify

AT_ANGLE, AT_OTHER = Symbol("at_angle_vertex"), Symbol("at_other_vertex")
D_OTHER, D_ANGLE, MARKED, BASE = Symbol("seg_D_other"), Symbol("seg_D_angle"), Symbol("seg_marked"), Symbol("seg_base")
BIS_ON_RAY = Symbol("bisector_of_D_other_meets_ray")
MID_MARKED = Symbol("midpoint_of_marked")
BASE_BIS_ON_RAY = Symbol("bisector_of_base_meets_ray")
BIS_ON_BASE = Symbol("bisector_of_D_other_meets_base")


def _total(v, p):
    """AB + AC, from the definition of the data: given directly, or perimeter minus the base."""
    if p.get("given", "sum") == "perim":
        return sympify(v["p"]) - sympify(v["a"])
    return sympify(v["s"])


def key(v, p):
    k = p["kind"]
    if k == "bd":                 # D is chosen so that BD = AB + AC
        return _total(v, p)
    if k == "plan_len":
        return Tuple(AT_ANGLE, _total(v, p))
    if k == "plan_seg":
        return Tuple(AT_ANGLE, D_OTHER)
    if k == "locate":
        return BIS_ON_RAY
    if k == "other":
        # The third side straight from the triangle (cosine rule), checked against the given sum.
        a, x, beta = sympify(v["a"]), sympify(v["x"]), sympify(v["beta"]) * pi / 180
        third = simplify(sqrt(a**2 + x**2 - 2 * a * x * cos(beta)))
        if simplify(third - (_total(v, p) - x)) != 0:
            raise ValueError("the measured side does not fit the data")
        return third
    raise ValueError("unknown kind")


def m1(v, p):
    """Subtracts the base from the given total even when it is already AB + AC (reads it as the perimeter)."""
    if p.get("given", "sum") == "perim":
        raise ValueError("with the perimeter given this is the key")
    s, a = sympify(v["s"]), sympify(v["a"])
    if p["kind"] == "bd":
        return s - a
    if p["kind"] == "other":      # D marked at s - a, then AC = AD = (s - a) - x
        return s - a - sympify(v["x"])
    raise ValueError("no length marked")


def m2(v, p):
    """Bisects the marked segment itself: takes A as the midpoint of BD, as if AB = AD."""
    k = p["kind"]
    if k == "plan_seg":
        return Tuple(AT_ANGLE, MARKED)
    if k == "locate":
        return MID_MARKED
    raise ValueError("no segment chosen")


def m3(v, p):
    """Assumes the triangle is isosceles, AB = AC = half the sum: marks half, or bisects the base."""
    k = p["kind"]
    if k == "bd":
        return _total(v, p) / 2
    if k == "plan_len":
        return Tuple(AT_ANGLE, _total(v, p) / 2)
    if k == "plan_seg":
        return Tuple(AT_ANGLE, BASE)
    if k == "locate":
        return BASE_BIS_ON_RAY
    if k == "other":
        return sympify(v["x"])
    raise ValueError("unknown kind")


def m4(v, p):
    """Draws the given angle at the other end of the base (always at B, even when angle C is given)."""
    k = p["kind"]
    if k == "plan_len":
        return Tuple(AT_OTHER, _total(v, p))
    if k == "plan_seg":           # D on the ray from the other vertex, joined to the angle vertex
        return Tuple(AT_OTHER, D_ANGLE)
    raise ValueError("the ray's vertex is not asked")


def m5(v, p):
    """Takes A where the perpendicular bisector of DC cuts the base, not the arm of the angle."""
    if p["kind"] == "locate":
        return BIS_ON_BASE
    raise ValueError("locate only")


def m6(v, p):
    """Marks the whole perimeter AB + AC + BC along the arm, instead of AB + AC."""
    k = p["kind"]
    per = sympify(v["p"]) if p.get("given", "sum") == "perim" else sympify(v["s"]) + sympify(v["a"])
    if k == "bd":
        return per
    if k == "plan_len":
        return Tuple(AT_ANGLE, per)
    if k == "other":              # AC = AD = perimeter - x
        return per - sympify(v["x"])
    raise ValueError("no length marked")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
