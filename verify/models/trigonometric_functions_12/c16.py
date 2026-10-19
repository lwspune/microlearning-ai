"""C16 Inradius and circumradius: answer models (the key, and one per misconception).

Inputs (sympy, angles in radians; a missing one is not needed by that question):
  a, b, c  the sides of triangle ABC (a opposite A);
  n        the number of sides of a regular polygon, or I its interior angle (then n is found);
  s1       the side of the regular polygon;
  R, A     a circle's radius and the angle BAC that the chord BC subtends at A on the circle.
Params: ask, what the question asks for
  "R", "r"     the circumradius or inradius of triangle ABC from its sides;
  "pR", "pr"   the circumradius or inradius of the regular polygon;
  "pd"         the diameter of the regular polygon's inscribed circle;
  "chord"      the chord BC from R and A.

The key never uses the formulae being taught: it builds the figure from coordinates and
measures it (the circumcentre is equidistant from the vertices, the incentre equidistant from
the three side lines; a polygon's vertices sit on a circle at equal turns).
"""
from sympy import Rational, acos, cos, cot, csc, pi, radsimp, simplify, sin, solve, sqrt, sqrtdenest, symbols

HALF = Rational(1, 2)


def _tidy(e):
    return sqrtdenest(radsimp(simplify(e)))


def _sides(v):
    a, b, c = v["a"], v["b"], v["c"]
    if not (a + b > c and b + c > a and c + a > b):
        raise ValueError("not a triangle")
    return a, b, c


def _apex(a, b, c):
    """B = (0, 0), C = (a, 0); A above BC with AB = c and AC = b."""
    x = (a**2 + c**2 - b**2) / (2 * a)
    return x, sqrt(c**2 - x**2)


def _area(v):
    a, b, c = _sides(v)
    return _tidy(a * _apex(a, b, c)[1] / 2)


def _n(v):
    if "n" in v:
        return v["n"]
    n = _tidy(2 * pi / (pi - v["I"]))
    if not (n.is_integer and n >= 3):
        raise ValueError("no regular polygon has that interior angle")
    return n


def key(v, p):
    ask = p["ask"]
    if ask in ("R", "r"):
        a, b, c = _sides(v)
        x, y = _apex(a, b, c)
        px, py = symbols("px py")
        if ask == "R":
            # The point on x = a/2 (equidistant from B and C) that is as far from A as from B.
            (k,) = solve((a / 2) ** 2 + py**2 - ((a / 2 - x) ** 2 + (py - y) ** 2), py)
            return _tidy(sqrt((a / 2) ** 2 + k**2))
        # Signed distances to BC, BA and CA are equal (positive inside); r is the distance to BC.
        sol = solve([py - (y * px - x * py) / c, py - ((x - a) * py - y * (px - a)) / b], [px, py], dict=True)[0]
        return _tidy(sol[py])
    if ask in ("pR", "pr", "pd"):
        n, s1 = _n(v), v["s1"]
        v0, v1 = (1, 0), (cos(2 * pi / n), sin(2 * pi / n))
        side = sqrt((v1[0] - v0[0]) ** 2 + (v1[1] - v0[1]) ** 2)
        k = s1 / side  # the unit polygon scaled to side s1: its circumradius is k
        mid = sqrt(((v0[0] + v1[0]) / 2) ** 2 + ((v0[1] + v1[1]) / 2) ** 2)
        return _tidy({"pR": k, "pr": k * mid, "pd": 2 * k * mid}[ask])
    if ask == "chord":
        # A at the bottom of the circle, B and C level at the top; check the angle at A is A.
        R, al = v["R"], v["A"]
        B, C, P = (-R * sin(al), R * cos(al)), (R * sin(al), R * cos(al)), (0, -R)
        u, w = (B[0] - P[0], B[1] - P[1]), (C[0] - P[0], C[1] - P[1])
        ang = acos(_tidy((u[0] * w[0] + u[1] * w[1]) / (u[0] ** 2 + u[1] ** 2)))
        if simplify(ang - al) != 0:
            raise ValueError("construction failed")
        return _tidy(C[0] - B[0])
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """Swaps the two radii: R = area / s and r = abc / (4 area); a polygon's R with cot, r with cosec."""
    ask = p["ask"]
    if ask in ("R", "r"):
        a, b, c = _sides(v)
        D = _area(v)
        return _tidy(D / ((a + b + c) / 2) if ask == "R" else a * b * c / (4 * D))
    if ask in ("pR", "pr", "pd"):
        t = pi / _n(v)
        half = v["s1"] / 2
        return _tidy({"pR": half * cot(t), "pr": half * csc(t), "pd": 2 * half * csc(t)}[ask])
    raise ValueError("no second radius to swap with")


def m2(v, p):
    """Divides the area by the whole perimeter: r = area / (a + b + c)."""
    if p["ask"] != "r":
        raise ValueError("only for the inradius of a triangle")
    a, b, c = _sides(v)
    return _tidy(_area(v) / (a + b + c))


def m3(v, p):
    """Drops the 2 in a = 2R sin A: R = a / sin A = abc / (2 area); a polygon's R = a cosec(pi/n), r = a cot(pi/n)."""
    ask = p["ask"]
    if ask == "R":
        a, b, c = _sides(v)
        return _tidy(a * b * c / (2 * _area(v)))
    if ask in ("pR", "pr", "pd"):
        t = pi / _n(v)
        s1 = v["s1"]
        return _tidy({"pR": s1 * csc(t), "pr": s1 * cot(t), "pd": 2 * s1 * cot(t)}[ask])
    if ask == "chord":
        return _tidy(v["R"] * sin(v["A"]))
    raise ValueError("no a = 2R sin A in the question")


def m4(v, p):
    """Uses the whole angle at the centre (2 pi / n, or 2A) in the right triangle, not half of it."""
    ask = p["ask"]
    if ask in ("pR", "pr", "pd"):
        t = 2 * pi / _n(v)
        half = v["s1"] / 2
        return _tidy({"pR": half * csc(t), "pr": half * cot(t), "pd": 2 * half * cot(t)}[ask])
    if ask == "chord":
        return _tidy(2 * v["R"] * sin(2 * v["A"]))
    raise ValueError("no angle at the centre in the question")


def m5(v, p):
    """Takes the angle at the centre equal to the angle at the circumference: angle BOC = A."""
    if p["ask"] != "chord":
        raise ValueError("only for a chord and an angle on the circle")
    return _tidy(2 * v["R"] * sin(v["A"] / 2))


def m6(v, p):
    """Treats the triangle as right-angled: area = half the product of the two shorter sides."""
    ask = p["ask"]
    if ask not in ("R", "r"):
        raise ValueError("only for a triangle")
    a, b, c = sorted(_sides(v))
    D = HALF * a * b
    return _tidy(a * b * c / (4 * D) if ask == "R" else D / ((a + b + c) / 2))


MODELS = {"key": key, "C16-M1": m1, "C16-M2": m2, "C16-M3": m3, "C16-M4": m4, "C16-M5": m5, "C16-M6": m6}
