"""C08 Angle between a tangent and a chord: answer models (the key, and one per misconception).

Every item has a tangent at Q and a chord through Q. params["kind"] picks the question:
  angle_from_arc   v["a"]: the arc inside the tangent-chord angle; find the angle.
  arc_from_angle   v["g"]: a tangent-chord angle; find the arc inside it.
  alt_inscribed    v["g"]: tangent-chord angle AQR (arc ATSQ inside it); find inscribed angle ATQ.
  two_tangent      v["g"], v["h"]: angles AQP and SQR on either side of Q; find inscribed angle ATS.
  from_central     v["c"]: central angle QOA; find the tangent-chord angle AQR.
  to_central       v["g"]: tangent-chord angle AQR; find the central angle QOA.
Angles and arcs are in degrees.
"""
from sympy import Integer, Rational

HALF = Rational(1, 2)
R90, R180, R360 = Integer(90), Integer(180), Integer(360)


def _key_angle(arc):
    """From the definition: the tangent is perpendicular to radius OQ, and triangle OQA is
    isosceles with vertex angle arc, so the chord meets the tangent at 90 - (180 - arc)/2."""
    return R90 - (R180 - arc) / 2


def _key_arc(angle):
    """The arc whose tangent-chord angle is angle (inverse of _key_angle)."""
    return R180 - 2 * (R90 - angle)


def _check(x, top):
    if not 0 < x < top:
        raise ValueError("out of range")
    return x


def _solve(v, p, arc_of, angle_of):
    """arc_of: the student's arc for a tangent-chord angle; angle_of: the angle for an arc."""
    k = p["kind"]
    if k == "angle_from_arc":
        return _check(angle_of(v["a"]), R180)
    if k == "arc_from_angle":
        return _check(arc_of(v["g"]), R360)
    if k == "alt_inscribed":
        inside = _check(arc_of(v["g"]), R360)
        return _check((R360 - inside) * HALF, R180)
    if k == "two_tangent":
        aq, qs = arc_of(v["g"]), arc_of(v["h"])
        return _check((aq + qs) * HALF, R180)
    if k == "from_central":
        return _check(angle_of(v["c"]), R180)
    if k == "to_central":
        return _check(arc_of(v["g"]), R180)
    raise ValueError("unknown kind")


def key(v, p):
    return _solve(v, p, _key_arc, _key_angle)


def m1(v, p):
    """Takes the tangent-chord angle equal to its intercepted arc (drops the half)."""
    return _solve(v, p, lambda g: g, lambda a: a)


def m2(v, p):
    """Uses the arc on the wrong side of the chord: the other arc, 360 minus the right one."""
    k = p["kind"]
    if k == "angle_from_arc" or k == "from_central":
        return _check((R360 - v["a" if k == "angle_from_arc" else "c"]) * HALF, R180)
    if k == "arc_from_angle" or k == "to_central":
        return _check(R360 - key(v, p), R360)
    if k == "alt_inscribed":   # ATQ taken to stand on arc ATSQ, inside angle AQR
        return _check(_key_arc(v["g"]) * HALF, R180)
    if k == "two_tangent":     # ATS taken to stand on arc ATS instead of arc AQS
        return _check(R180 - key(v, p), R180)
    raise ValueError("unknown kind")


def m3(v, p):
    """Halves the angle to get its arc (and doubles the arc to get the angle)."""
    return _solve(v, p, lambda g: g * HALF, lambda a: 2 * a)


def m4(v, p):
    """Thinks every chord through the point of contact is perpendicular to the tangent."""
    k = p["kind"]
    if k in ("angle_from_arc", "from_central"):
        return R90
    if k in ("arc_from_angle", "to_central"):
        return R180
    raise ValueError("the angle is given")


def m5(v, p):
    """Gives the angle between the chord and radius OQ instead of the angle with the tangent."""
    k = p["kind"]
    if k == "from_central":        # stops at base angle OQA of isosceles triangle OQA
        return _check((R180 - v["c"]) * HALF, R90)
    if k == "to_central":          # takes angle OQA = the given angle, so QOA = 180 - 2g
        return _check(R180 - 2 * v["g"], R180)
    raise ValueError("no radius in the figure")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
