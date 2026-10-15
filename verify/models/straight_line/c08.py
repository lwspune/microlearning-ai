"""C08 Perpendiculars, medians and altitudes: answer models (the key, and one per misconception).

Points are inputs x + y*I (A, B, C for a triangle's vertices; P a point; S, T two points
on a given line). A given line may instead come as coefficients a, b, c of ax + by + c = 0.
Line answers are polynomials in x, y (the line is poly = 0); point answers are Tuples.

params["ask"]:
  "perp"         the line through P perpendicular to the given line (out="yint": its y-intercept)
  "median"       the median from vertex params["at"] (A, B or C)
  "altitude"     the altitude from vertex params["at"]
  "orthocentre"  the meeting point of the altitudes
  "circumcentre" the meeting point of the perpendicular bisectors

The key works from the definitions with dot products and equal distances (a
perpendicular has (X - P).d = 0; the circumcentre is equidistant from the
vertices), never through the slope rule m1*m2 = -1 that the concept teaches.
The misconception models follow the student's slope-based steps with their wrong
rule; for the two centres they use the altitudes from A and B and the bisectors of
AB and AC, as the book does.
"""
from sympy import Rational, Tuple, im, re, solve, symbols

x, y = symbols("x y", real=True)


def pt(z):
    return (Rational(re(z)), Rational(im(z)))


def add(p, q):
    return (p[0] + q[0], p[1] + q[1])


def sub(p, q):
    return (p[0] - q[0], p[1] - q[1])


def half(p):
    return (p[0] / 2, p[1] / 2)


def through(p, q):
    """The line through two points."""
    return (x - p[0]) * (q[1] - p[1]) - (y - p[1]) * (q[0] - p[0])


def normal_to(p, d):
    """The line through p perpendicular to the direction d."""
    return (x - p[0]) * d[0] + (y - p[1]) * d[1]


def with_slope(p, m):
    return y - p[1] - m * (x - p[0])


def slope(d):
    if d[0] == 0:
        raise ValueError("vertical: no slope to turn")
    return d[1] / d[0]


def meet(l1, l2):
    s = solve([l1, l2], [x, y], dict=True)
    if len(s) != 1 or len(s[0]) != 2:
        raise ValueError("the lines don't meet in one point")
    return Tuple(s[0][x], s[0][y])


def yint(line):
    s = solve(line.subs(x, 0), y)
    if len(s) != 1:
        raise ValueError("no single y-intercept")
    return s[0]


def tri(v, p):
    """The vertex the line starts from, and the other two (the opposite side)."""
    names = ["A", "B", "C"]
    at = p.get("at", "A")
    o1, o2 = [pt(v[n]) for n in names if n != at]
    return pt(v[at]), o1, o2


def given(v):
    """(point, direction of the given line)."""
    if "S" in v:
        d = sub(pt(v["T"]), pt(v["S"]))
    else:
        d = (v["b"], -v["a"])
    return pt(v["P"]), d


def finish(line, p):
    return yint(line) if p.get("out") == "yint" else line


# ---------- the key ----------

def key(v, p):
    ask = p["ask"]
    if ask == "perp":
        q, d = given(v)
        return finish(normal_to(q, d), p)
    if ask == "median":
        a, o1, o2 = tri(v, p)
        return through(a, half(add(o1, o2)))
    if ask == "altitude":
        a, o1, o2 = tri(v, p)
        return normal_to(a, sub(o2, o1))
    A, B, C = pt(v["A"]), pt(v["B"]), pt(v["C"])
    if ask == "orthocentre":
        return meet(normal_to(A, sub(C, B)), normal_to(B, sub(C, A)))
    if ask == "circumcentre":
        d2 = lambda q: (x - q[0]) ** 2 + (y - q[1]) ** 2
        return meet((d2(A) - d2(B)).expand(), (d2(A) - d2(C)).expand())
    raise ValueError(ask)


# ---------- misconceptions ----------

def _turned(v, p, rule):
    """The perpendicular line(s) of the question, each drawn with slope rule(m)."""
    ask = p["ask"]
    if ask == "perp":
        q, d = given(v)
        return finish(with_slope(q, rule(slope(d))), p)
    if ask == "altitude":
        a, o1, o2 = tri(v, p)
        return with_slope(a, rule(slope(sub(o2, o1))))
    A, B, C = pt(v["A"]), pt(v["B"]), pt(v["C"])
    if ask == "orthocentre":
        return meet(with_slope(A, rule(slope(sub(C, B)))), with_slope(B, rule(slope(sub(C, A)))))
    if ask == "circumcentre":
        return meet(with_slope(half(add(A, B)), rule(slope(sub(B, A)))), with_slope(half(add(A, C)), rule(slope(sub(C, A)))))
    raise ValueError(f"no perpendicular in a {ask} question")


def m1(v, p):
    """Perpendicular slope taken as -m: the sign changed, not inverted."""
    return _turned(v, p, lambda m: -m)


def _inv(m):
    if m == 0:
        raise ValueError("1/0")
    return 1 / m


def m2(v, p):
    """Perpendicular slope taken as 1/m: inverted, sign kept."""
    return _turned(v, p, _inv)


def m3(v, p):
    """The same slope as the given line: a parallel where a perpendicular is asked."""
    if p["ask"] not in ("perp", "altitude"):
        raise ValueError("only for a single perpendicular line")
    return _turned(v, p, lambda m: m)


def m4(v, p):
    """Median and altitude swapped: the altitude ends at the opposite side's midpoint, the median is perpendicular to it."""
    ask = p["ask"]
    if ask == "median":
        return key(v, {**p, "ask": "altitude"})
    if ask == "altitude":
        return key(v, {**p, "ask": "median"})
    if ask == "orthocentre":  # the altitudes drawn as medians meet at the centroid
        A, B, C = pt(v["A"]), pt(v["B"]), pt(v["C"])
        return Tuple((A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3)
    raise ValueError(f"no median or altitude in a {ask} question")


def m5(v, p):
    """The line from a vertex taken as the perpendicular bisector of the opposite side
    (as in an equilateral triangle): it meets that side at its midpoint and at right angles."""
    ask = p["ask"]
    if ask in ("median", "altitude"):
        _, o1, o2 = tri(v, p)
        return normal_to(half(add(o1, o2)), sub(o2, o1))
    if ask == "orthocentre":  # altitudes drawn as perpendicular bisectors meet at the circumcentre
        return key(v, {**p, "ask": "circumcentre"})
    raise ValueError(f"no line from a vertex in a {ask} question")


def m6(v, p):
    """Midpoint taken as (x1 + x2, y1 + y2): the sum, not halved."""
    ask = p["ask"]
    if ask == "median":
        a, o1, o2 = tri(v, p)
        return through(a, add(o1, o2))
    if ask == "circumcentre":
        A, B, C = pt(v["A"]), pt(v["B"]), pt(v["C"])
        return meet(normal_to(add(A, B), sub(B, A)), normal_to(add(A, C), sub(C, A)))
    raise ValueError(f"no midpoint in a {ask} question")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
