"""C01 Tangent and radius: answer models (the key, and one per misconception).

Every item gives the outside point P's distance d from the centre and either the tangent
segment t from P (params["given"] = "dt") or the angle a between PO and the tangent
(params["given"] = "da", a in radians). params["ask"] names what is asked:
  radius     the radius
  diameter   the diameter
  distance   the centre's distance from the tangent line
  gap        the distance between the tangent and the tangent parallel to it

The key builds the circle with sympy (centre at the origin, unknown radius r), takes sympy's own
tangent line from P, and solves for r from the given length or angle; it never quotes the
tangent theorem. Each misconception applies its wrong rule to the same lengths.
"""
from sympy import Circle, Eq, Line, Point, Symbol, cos, solve, sqrt, tan

O = Point(0, 0)
ASKS = ("radius", "diameter", "distance", "gap")


def _figure(v, p):
    """The circle's radius and one tangent line from P, from the given data."""
    r = Symbol("r", positive=True)
    P = Point(v["d"], 0)
    c = Circle(O, r)
    line = c.tangent_lines(P)[0]
    if p["given"] == "dt":
        A = c.intersection(line)[0]
        eq = Eq(P.distance(A) ** 2, v["t"] ** 2)
    elif p["given"] == "da":
        eq = Eq(cos(Line(P, O).angle_between(line)), cos(v["a"]))
    else:
        raise ValueError("unknown data")
    sols = solve(eq, r)
    if len(sols) != 1:
        raise ValueError("no single circle with this data")
    rv = sols[0]
    return rv, line.subs(r, rv)


def _ask(p, radius):
    """Turns a (right or wrong) radius into what the item asks for."""
    a = p["ask"]
    if a in ("radius", "distance"):
        return radius
    if a in ("diameter", "gap"):
        return 2 * radius
    raise ValueError(f"unknown ask {a}")


def key(v, p):
    rv, line = _figure(v, p)
    a = p["ask"]
    if a == "distance":
        return line.distance(O)
    if a == "gap":
        # The tangent parallel to `line` on the far side, through the reflection of its contact point.
        A = Circle(O, rv).intersection(line)[0]
        B = Point(-A.x, -A.y)
        if len(Circle(O, rv).intersection(line.parallel_line(B))) != 1:
            raise ValueError("the parallel line through B is not a tangent")
        return line.distance(B)
    return _ask(p, rv)


def m1(v, p):
    """Takes OP as a leg (the right angle away from the point of contact): adds the squares."""
    if p["given"] == "dt":
        return _ask(p, sqrt(v["d"] ** 2 + v["t"] ** 2))
    return _ask(p, v["d"] * tan(v["a"]))  # right angle at O: OA = OP tan a


def m2(v, p):
    """Takes the segment from the centre to the outside point as the radius (or the distance)."""
    return _ask(p, v["d"])


def m3(v, p):
    """Mixes up radius and diameter: a radius (or distance) comes out doubled, a diameter (or gap) halved."""
    rv, _ = _figure(v, p)
    if p["ask"] in ("radius", "distance"):
        return 2 * rv
    if p["ask"] in ("diameter", "gap"):
        return rv
    raise ValueError("unknown ask")


def m4(v, p):
    """Takes the tangent segment as the radius (or the distance)."""
    if p["given"] == "dt":
        return _ask(p, v["t"])
    return _ask(p, v["d"] * cos(v["a"]))  # PA, the tangent segment


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
