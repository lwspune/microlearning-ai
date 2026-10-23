"""C05 Midpoint theorem: answer models (the key, and one per misconception).

Lengths are in cm (plain numbers, Rational for decimals).

params["ask"]:
  "whole"     input h: the segment joining the midpoints of two sides. Find the third side.
  "half"      input s: a side (the third side); input t (optional): a side the segment touches.
              Find the segment joining the midpoints of the two other sides.
  "perim"     inputs a, b, c: the sides of a triangle. Find the perimeter of the triangle formed
              by joining the midpoints of its sides.
  "conv"      a line through the midpoint M of side RP, parallel to side SP, meets side RS at L.
              Input h = RL, input d = ML. Find RS.
  "varignon"  P, Q, R, S are the midpoints of the sides of quadrilateral ABCD; inputs a = AC and
              b = BD, its diagonals. Find the perimeter of PQRS.

The key never uses the theorem: it places the figure on coordinates, takes midpoints as averages
of coordinates and measures with the distance formula (solving for an unknown side where needed).
"""
from sympy import Line, Point, Rational, Symbol, solve, sqrt

S = Symbol("s", positive=True)


def _mid(p, q):
    return Point((p.x + q.x) / 2, (p.y + q.y) / 2)


def _seg_in_triangle(side):
    """Distance between the midpoints of the other two sides when the third side is `side` (apex anywhere)."""
    b, c, a = Point(0, 0), Point(side, 0), Point(Rational(3, 2), 4)
    return _mid(a, b).distance(_mid(a, c))


def _triangle(a, b, c):
    """B, C, A with BC = a, CA = b, AB = c."""
    x = (c**2 - b**2 + a**2) / (2 * a)
    return Point(0, 0), Point(a, 0), Point(x, sqrt(c**2 - x**2))


def key(v, p):
    ask = p["ask"]
    if ask == "whole":
        return solve(_seg_in_triangle(S) - v["h"], S)[0]
    if ask == "half":
        return _seg_in_triangle(v["s"])
    if ask == "perim":
        B, C, A = _triangle(v["a"], v["b"], v["c"])
        X, Y, Z = _mid(A, B), _mid(B, C), _mid(C, A)
        return (X.distance(Y) + Y.distance(Z) + Z.distance(X)).simplify()
    if ask == "conv":
        R, Sx, P = Point(0, 0), Point(S, 0), Point(Rational(5, 2), 3)
        M = _mid(R, P)
        L = Line(M, Point(M.x + Sx.x - P.x, M.y + Sx.y - P.y)).intersection(Line(R, Sx))[0]
        return solve(R.distance(L) - v["h"], S)[0]
    if ask == "varignon":
        a, b = v["a"], v["b"]
        A, C, B, D = Point(0, 0), Point(a, 0), Point(a / 3, -b / 2), Point(a / 3, b / 2)
        P, Q, R, Sq = _mid(A, B), _mid(B, C), _mid(C, D), _mid(D, A)
        return (P.distance(Q) + Q.distance(R) + R.distance(Sq) + Sq.distance(P)).simplify()
    raise ValueError(ask)


def _scale(v, p, f):
    """The answer when the segment is taken as f times the third side (f = 1/2 is right)."""
    ask = p["ask"]
    if ask == "whole":
        return v["h"] / f
    if ask == "half":
        return f * v["s"]
    if ask == "perim":
        return f * (v["a"] + v["b"] + v["c"])
    if ask == "varignon":
        return 2 * f * (v["a"] + v["b"])
    raise ValueError(ask)


def m1(v, p):
    """Leaves out the 1/2: takes the segment joining the midpoints (or a half-side) as equal to the whole side."""
    if p["ask"] == "conv":
        return v["h"]
    return _scale(v, p, 1)


def m2(v, p):
    """Uses the 1/2 the wrong way round: doubles where it should halve, halves where it should double."""
    if p["ask"] == "conv":
        return v["h"] / 2
    return _scale(v, p, 2)


def m3(v, p):
    """Pairs the segment with a side it touches instead of the third side (the side it is parallel to)."""
    ask = p["ask"]
    if ask == "half":
        if "t" not in v:
            raise ValueError("M3 needs a side the segment touches")
        return v["t"] / 2
    if ask == "conv":
        return 2 * v["d"]
    raise ValueError("M3 needs a segment and a side it touches")


def m4(v, p):
    """Joining the midpoints makes four small triangles, so takes lengths as a quarter (it is the area)."""
    if p["ask"] == "conv":
        raise ValueError("M4 needs a midpoint segment")
    return _scale(v, p, Rational(1, 4))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4}
