"""C03 Incircle of a triangle: answer models (the key, and one per misconception).

Angles are in degrees (plain numbers). params["kind"] picks the question:
  name    the point where the bisectors of the angles of a triangle meet (a named point).
  lines   which two lines are drawn to find the centre of the incircle (named).
  radius  which segment is the radius of the incircle (named; I is the incentre).
  touch   where the incircle touches side BC (named point on BC).
  bic     inputs b, c: angles B and C; the bisectors of angles B and C meet at I. Find angle BIC.
  bic_a   input a: angle A only. Find angle BIC.

The key's angle is measured on a triangle built from the angles: the incentre is the point
equidistant from the three sides, found as (aA + bB + cC)/(a + b + c), and angle BIC is read off
the coordinates. It does not use the half-angle rule the concept teaches.
"""
import math

from sympy import Integer, Rational, Symbol, sympify

# Named points (kind "name")
INCENTRE, CIRCUMCENTRE = Symbol("is_incentre"), Symbol("is_circumcentre")
CENTROID, ORTHOCENTRE = Symbol("is_centroid"), Symbol("is_orthocentre")
# Lines that meet at the centre (kind "lines")
ANGLE_BIS, PERP_BIS = Symbol("is_angle_bisectors"), Symbol("is_perpendicular_bisectors_of_sides")
MEDIANS, ALTITUDES = Symbol("is_medians"), Symbol("is_altitudes")
# The radius (kind "radius"): I to the foot of its perpendicular on a side, to a vertex,
# to the midpoint of a side, to where the bisector of the opposite angle meets the side.
R_PERP, R_VERTEX = Symbol("is_I_to_foot_of_perpendicular"), Symbol("is_I_to_vertex")
R_MID, R_BIS = Symbol("is_I_to_midpoint_of_side"), Symbol("is_I_to_bisector_foot")
# The point of contact on BC (kind "touch")
T_PERP, T_MID = Symbol("is_foot_of_perpendicular_from_I"), Symbol("is_midpoint_of_BC")
T_ALT, T_BIS = Symbol("is_foot_of_perpendicular_from_A"), Symbol("is_bisector_of_A_meets_BC")


def _bc(v, p):
    """Angles B and C, from the inputs (with only A given, B + C is all that is known)."""
    if p["kind"] == "bic":
        return sympify(v["b"]), sympify(v["c"])
    if p["kind"] == "bic_a":
        half = (180 - sympify(v["a"])) / 2      # any split of B + C gives the same angle BIC
        return half, half
    raise ValueError("not an angle question")


def _angle_bic(bdeg, cdeg):
    """Angle BIC measured on coordinates: B = (0, 0), C = (1, 0), A from the angles at B and C."""
    B, C = (0.0, 0.0), (1.0, 0.0)
    tb, tc = math.tan(math.radians(bdeg)), math.tan(math.radians(cdeg))
    x = tc / (tb + tc)
    A = (x, x * tb)
    a = math.dist(B, C)
    b = math.dist(C, A)
    c = math.dist(A, B)
    s = a + b + c
    I = ((a * A[0] + b * B[0] + c * C[0]) / s, (a * A[1] + b * B[1] + c * C[1]) / s)
    u, w = (B[0] - I[0], B[1] - I[1]), (C[0] - I[0], C[1] - I[1])
    ang = math.degrees(math.acos((u[0] * w[0] + u[1] * w[1]) / (math.hypot(*u) * math.hypot(*w))))
    whole = round(ang * 2) / 2
    if abs(ang - whole) > 1e-6:
        raise ValueError("angle BIC is not a whole or half degree")
    return Rational(int(round(whole * 2)), 2)


NAMED_KEY = {"name": INCENTRE, "lines": ANGLE_BIS, "radius": R_PERP, "touch": T_PERP}


def key(v, p):
    k = p["kind"]
    if k in NAMED_KEY:
        return NAMED_KEY[k]
    b, c = _bc(v, p)
    if b + c >= 180:
        raise ValueError("no triangle")
    return _angle_bic(float(b), float(c))


def m1(v, p):
    """Takes the incentre for the circumcentre: perpendicular bisectors of the sides, a centre
    equally far from the vertices (so the radius runs to a vertex)."""
    table = {"name": CIRCUMCENTRE, "lines": PERP_BIS, "radius": R_VERTEX}
    if p["kind"] in table:
        return table[p["kind"]]
    raise ValueError("M1 needs a question about the centre or the radius")


def m2(v, p):
    """Takes an angle bisector for a median: the bisector from A goes to the midpoint of BC,
    so the centre is the centroid and the circle touches each side at its midpoint."""
    table = {"name": CENTROID, "lines": MEDIANS, "radius": R_MID, "touch": T_MID}
    if p["kind"] in table:
        return table[p["kind"]]
    raise ValueError("M2 needs a named question")


def m3(v, p):
    """Takes an angle bisector for an altitude: the line from a vertex perpendicular to the
    opposite side. For angle BIC: angle IBC = 90 - C and angle ICB = 90 - B, so BIC = B + C."""
    table = {"name": ORTHOCENTRE, "lines": ALTITUDES, "touch": T_ALT}
    if p["kind"] in table:
        return table[p["kind"]]
    if p["kind"] in ("bic", "bic_a"):
        b, c = _bc(v, p)
        if b >= 90 or c >= 90:
            raise ValueError("an altitude from an obtuse base angle falls outside")
        return Integer(180) - (90 - c) - (90 - b)
    raise ValueError("M3 does not apply to the radius")


def m4(v, p):
    """Believes the incircle touches a side where the bisector of the opposite angle meets it,
    so the radius runs from I along that bisector to the side."""
    table = {"radius": R_BIS, "touch": T_BIS}
    if p["kind"] in table:
        return table[p["kind"]]
    raise ValueError("M4 needs a question about the radius or the point of contact")


def m5(v, p):
    """Forgets that a bisector halves the angle: uses angle IBC = B and angle ICB = C."""
    b, c = _bc(v, p)
    return Integer(180) - b - c


def m6(v, p):
    """Slip: halves B and C correctly but gives their sum, angle IBC + angle ICB, as angle BIC."""
    b, c = _bc(v, p)
    return (b + c) / 2


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
