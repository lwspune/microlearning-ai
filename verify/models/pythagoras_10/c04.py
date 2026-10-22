"""C04 Theorem of geometric mean: answer models (the key, and one per misconception).

Every item names its shape in params["shape"]. In each, a right-angled triangle has the altitude
from the right-angle vertex to the hypotenuse, cutting it into two parts.
  alt   the two parts a and b given; find the altitude                       (inputs a, b)
  hyp   the altitude h and one part a given; find the whole hypotenuse       (inputs h, a)
  far   the altitude h and one part b given; find the side (leg) that ends
        at the far part's end, the part not given                            (inputs h, b)
  leg   the parts a (far) and b (next to the wanted side) given; find the
        side that meets the hypotenuse at the end of part b                  (inputs a, b)
  proj  the two sides l and m given; find the part of the hypotenuse next to
        side l (its projection)                                              (inputs l, m)

The key places the figure on co-ordinate axes and measures distances: the right-angle vertex
lies on the circle with the hypotenuse as diameter, or a perpendicular meets the hypotenuse's
line. It never quotes the theorem. Each misconception applies its wrong rule to the same parts.
"""
from sympy import Circle, Line, Point, sqrt, sympify

O = Point(0, 0)
X_AXIS = Line(O, Point(1, 0))
Y_AXIS = Line(O, Point(0, 1))


def _d(p, q):
    return sympify(p.distance(q))


def _apex(a, b):
    """Parts a (left of the foot N at O) and b (right): the right-angle vertex above N."""
    P, R = Point(-a, 0), Point(b, 0)
    pts = Circle(Point((b - a) / 2, 0), (a + b) / 2).intersection(Y_AXIS)
    Q = [p for p in pts if p.y > 0][0]
    return P, Q, R


def _far_end(h, a):
    """Altitude h on the y-axis, part a to the left: where the side at a right angle to QP meets the x-axis."""
    P, Q = Point(-a, 0), Point(0, h)
    R = Line(P, Q).perpendicular_line(Q).intersection(X_AXIS)[0]
    return P, Q, R


def key(v, p):
    s = p["shape"]
    if s == "alt":
        P, Q, R = _apex(v["a"], v["b"])
        return Q.y
    if s == "hyp":
        P, Q, R = _far_end(v["h"], v["a"])
        return _d(P, R)
    if s == "far":
        D, F, E = _far_end(v["h"], v["b"])
        return _d(F, E)
    if s == "leg":
        P, Q, R = _apex(v["a"], v["b"])
        return _d(Q, R)
    if s == "proj":
        A, B, D = O, Point(v["l"], 0), Point(0, v["m"])
        X = Line(B, D).projection(A)
        return _d(B, X)
    raise ValueError(f"unknown shape {s}")


def m1(v, p):
    """'Mean' read as the average: the altitude is (PN + NR)/2; a side is the average of its part and the whole."""
    s = p["shape"]
    if s == "alt":
        return (v["a"] + v["b"]) / 2
    if s == "hyp":
        return v["a"] + (2 * v["h"] - v["a"])
    if s == "far":
        other = 2 * v["h"] - v["b"]
        return sqrt(other**2 + v["h"] ** 2)
    if s == "leg":
        return (v["b"] + (v["a"] + v["b"])) / 2
    if s == "proj":
        whole = sqrt(v["l"] ** 2 + v["m"] ** 2)
        return 2 * v["l"] - whole
    raise ValueError(f"unknown shape {s}")


def m2(v, p):
    """Treats QN and QN^2 alike: reports PN x NR as the altitude, or uses the altitude unsquared."""
    s = p["shape"]
    if s == "alt":
        return v["a"] * v["b"]
    if s == "hyp":
        return v["a"] + v["h"] / v["a"]
    if s == "far":
        other = v["h"] / v["b"]
        return sqrt(other**2 + v["h"] ** 2)
    if s == "leg":
        return v["b"] * (v["a"] + v["b"])
    if s == "proj":
        return v["l"] / sqrt(v["l"] ** 2 + v["m"] ** 2)
    raise ValueError(f"unknown shape {s}")


def m3(v, p):
    """Pairs the wrong segments: the altitude with a part and the whole hypotenuse, or a side with the far part."""
    s = p["shape"]
    if s == "alt":
        return sqrt(v["a"] * (v["a"] + v["b"]))
    if s == "hyp":
        return v["h"] ** 2 / v["a"]
    if s == "far":
        whole = v["h"] ** 2 / v["b"]
        return sqrt((whole - v["b"]) ** 2 + v["h"] ** 2)
    if s == "leg":
        return sqrt(v["a"] * (v["a"] + v["b"]))
    if s == "proj":
        whole = sqrt(v["l"] ** 2 + v["m"] ** 2)
        return whole - v["l"] ** 2 / whole
    raise ValueError(f"unknown shape {s}")


def m4(v, p):
    """In the Pythagoras step, takes the longer known side as the hypotenuse and subtracts the squares."""
    s = p["shape"]
    if s == "far":
        other = v["h"] ** 2 / v["b"]
        if other <= v["h"]:
            raise ValueError("the found part is not the longer side")
        return sqrt(other**2 - v["h"] ** 2)
    raise ValueError(f"no Pythagoras step in {s}")


def m5(v, p):
    """Stops at the part the theorem gives: reports it instead of the whole hypotenuse or the side asked for."""
    s = p["shape"]
    if s in ("hyp", "far"):
        known = v["a"] if s == "hyp" else v["b"]
        return v["h"] ** 2 / known
    raise ValueError(f"no later step in {s}")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
