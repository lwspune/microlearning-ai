"""C09 Angle, parallel pair and point of intersection: answer models (the key, and one per misconception).

Inputs: the whole coefficients of the general equation
  A x^2 + H2 xy + B y^2 + G2 x + F2 y + C = 0
(so h = H2/2, g = G2/2, f = F2/2), and for a parallel pair the point (px, py).
params["ask"]:
  "tan"      tan(theta) for the acute angle theta between the lines (only A, H2, B are used)
  "point"    the point where the two lines meet, as Tuple(x, y)
  "parallel" the joint equation (a polynomial in x, y, = 0) of the pair through (px, py)
             parallel to A x^2 + H2 xy + B y^2 = 0
"""
from sympy import Abs, Poly, Symbol, Tuple, expand, factor_list, simplify, solve, sqrt

X, Y = Symbol("x", real=True), Symbol("y", real=True)
_m = Symbol("m")


def _abh(v, halve=True):
    """a, h, b as the book reads them (h half the xy coefficient), or with the whole coefficient."""
    return v["A"], v["H2"] / 2 if halve else v["H2"], v["B"]


def _slopes(v):
    """The slopes of the lines of A x^2 + H2 xy + B y^2 = 0: roots of B m^2 + H2 m + A = 0."""
    if v["B"] == 0:
        raise ValueError("a line is vertical (B = 0)")
    r = solve(v["B"] * _m**2 + v["H2"] * _m + v["A"], _m)
    if len(r) != 2:
        raise ValueError("coincident or parallel lines")
    return r


def _general(v):
    return v["A"] * X**2 + v["H2"] * X * Y + v["B"] * Y**2 + v["G2"] * X + v["F2"] * Y + v["C"]


def _point_key(v):
    """Split the equation into its two linear factors and solve them together."""
    s = _general(v)
    lines = [f for f, k in factor_list(s, X, Y)[1] for _ in range(k)]
    if len(lines) != 2 or any(Poly(f, X, Y).total_degree() != 1 for f in lines):
        raise ValueError(f"not two real lines over Q: {lines}")
    sol = solve(lines, [X, Y], dict=True)
    if len(sol) != 1:
        raise ValueError("the lines do not meet in one point")
    return Tuple(simplify(sol[0][X]), simplify(sol[0][Y]))


def _formula(a, h, b, g, f):
    """The book's meeting point ((hf - bg)/(ab - h^2), (gh - af)/(ab - h^2))."""
    d = a * b - h**2
    if d == 0:
        raise ValueError("ab = h^2")
    return Tuple(simplify((h * f - b * g) / d), simplify((g * h - a * f) / d))


def _shift(v, x1, y1, h2=None):
    """a(x - x1)^2 + 2h(x - x1)(y - y1) + b(y - y1)^2, 2h being the xy coefficient (or h2)."""
    h2 = v["H2"] if h2 is None else h2
    return expand(v["A"] * (X - x1) ** 2 + h2 * (X - x1) * (Y - y1) + v["B"] * (Y - y1) ** 2)


def key(v, p):
    ask = p["ask"]
    if ask == "tan":
        # straight from the slopes of the parallel pair through the origin
        m1, m2 = _slopes(v)
        return simplify(Abs((m1 - m2) / (1 + m1 * m2)))
    if ask == "point":
        return _point_key(v)
    if ask == "parallel":
        # each line through the origin, y = m x, moved to pass through (px, py): y - py = m(x - px)
        m1, m2 = _slopes(v)
        x1, y1 = v["px"], v["py"]
        return expand(simplify(v["B"] * (Y - y1 - m1 * (X - x1)) * (Y - y1 - m2 * (X - x1))))
    raise ValueError(ask)


def m1(v, p):
    """Takes the lines of every pair to meet at the origin, as for a x^2 + 2hxy + b y^2 = 0."""
    if p["ask"] != "point":
        raise ValueError("only for the meeting point")
    return Tuple(0, 0)


def m2(v, p):
    """Takes h, g and f as the whole coefficients of xy, x and y (forgets the halves)."""
    ask = p["ask"]
    a, h, b = _abh(v, halve=False)
    if ask == "tan":
        return simplify(Abs(2 * sqrt(h**2 - a * b) / (a + b)))
    if ask == "point":
        return _formula(a, h, b, v["G2"], v["F2"])
    if ask == "parallel":
        return _shift(v, v["px"], v["py"], h2=2 * v["H2"])
    raise ValueError(ask)


def m3(v, p):
    """Flips the sign of the point: shifts to (-x1, -y1), or lands on (-x0, -y0) for the meeting point."""
    ask = p["ask"]
    if ask == "point":
        x0, y0 = _point_key(v)
        if x0 == 0 and y0 == 0:
            raise ValueError("the lines meet at the origin")
        return Tuple(-x0, -y0)
    if ask == "parallel":
        return _shift(v, -v["px"], -v["py"])
    raise ValueError("only for a point")


def m4(v, p):
    """Keeps a x^2 + 2hxy + b y^2 and picks a constant so the point lies on it: Q(x, y) = Q(x1, y1)."""
    if p["ask"] != "parallel":
        raise ValueError("only for the parallel pair")
    q = lambda x, y: v["A"] * x**2 + v["H2"] * x * y + v["B"] * y**2
    return expand(q(X, Y) - q(v["px"], v["py"]))


def m5(v, p):
    """Drops the 2: tan(theta) = |sqrt(h^2 - ab) / (a + b)|."""
    if p["ask"] != "tan":
        raise ValueError("only for the angle")
    a, h, b = _abh(v)
    return simplify(Abs(sqrt(h**2 - a * b) / (a + b)))


def m6(v, p):
    """Drops the modulus: tan(theta) = 2 sqrt(h^2 - ab) / (a + b), negative when a + b < 0."""
    if p["ask"] != "tan":
        raise ValueError("only for the angle")
    a, h, b = _abh(v)
    if (a + b) > 0:
        raise ValueError("a + b > 0: the same as the key")
    return simplify(2 * sqrt(h**2 - a * b) / (a + b))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
