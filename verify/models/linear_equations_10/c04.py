"""C04 Solving graphically: answer models (the key, and one per misconception).

Inputs: a1, b1, c1, a2, b2, c2 for the simultaneous equations a1 x + b1 y = c1, a2 x + b2 y = c2.
params["ask"] picks the answer:
  "point" -> the solution as x + I*y (a point), or a named answer when there is no single one
  "count" -> how many solutions: ONE, NONE or MANY (named answers)
params["line"] ("1" or "2") and params["axis"] ("x" or "y") pick the axis crossing M2 reads.

The key solves the pair with sympy's linsolve (the definition: the pairs that satisfy both
equations), never by reading a graph.
"""
from sympy import I, Abs, Symbol, linsolve, symbols

ONE = Symbol("one_solution")
NONE = Symbol("no_solution")
MANY = Symbol("infinitely_many")
TWO = Symbol("two_solutions")

_x, _y = symbols("x y")


def _coeffs(v):
    return v["a1"], v["b1"], v["c1"], v["a2"], v["b2"], v["c2"]


def _solve(v):
    """ONE with the point, or NONE / MANY, straight from the two equations."""
    a1, b1, c1, a2, b2, c2 = _coeffs(v)
    sols = linsolve([a1 * _x + b1 * _y - c1, a2 * _x + b2 * _y - c2], _x, _y)
    if not sols:
        return NONE, None
    (sx, sy), = sols
    if sx.free_symbols or sy.free_symbols:
        return MANY, None
    return ONE, (sx, sy)


def key(v, p):
    kind, pt = _solve(v)
    if p.get("ask") == "count" or kind != ONE:
        return kind
    return pt[0] + I * pt[1]


def _point(v):
    kind, pt = _solve(v)
    if kind != ONE:
        raise ValueError("the lines don't meet in one point")
    return pt


def m1(v, p):
    """Reads the crossing point with its coordinates swapped: (y, x)."""
    if p.get("ask") != "point":
        raise ValueError("point items only")
    x, y = _point(v)
    if x == y:
        raise ValueError("x = y: swapping changes nothing")
    return y + I * x


def m2(v, p):
    """Takes the point where one line crosses an axis as the solution."""
    if p.get("ask") != "point":
        raise ValueError("point items only")
    a1, b1, c1, a2, b2, c2 = _coeffs(v)
    a, b, c = (a1, b1, c1) if p.get("line", "1") == "1" else (a2, b2, c2)
    if p.get("axis", "x") == "x":
        if a == 0:
            raise ValueError("the line never crosses the X-axis")
        return c / a
    if b == 0:
        raise ValueError("the line never crosses the Y-axis")
    return I * (c / b)


def m3(v, p):
    """Drops the minus sign of a negative coordinate: (|x|, |y|)."""
    if p.get("ask") != "point":
        raise ValueError("point items only")
    x, y = _point(v)
    if x >= 0 and y >= 0:
        raise ValueError("no negative coordinate")
    return Abs(x) + I * Abs(y)


def m4(v, p):
    """Mixes up the two special cases: parallel lines -> infinitely many, the same line -> none."""
    kind, _ = _solve(v)
    if kind == NONE:
        return MANY
    if kind == MANY:
        return NONE
    raise ValueError("the lines meet in one point")


def m5(v, p):
    """Believes any two lines meet in exactly one point."""
    kind, _ = _solve(v)
    if kind == ONE:
        raise ValueError("the lines do meet in one point")
    return ONE


def m6(v, p):
    """Counts the pair (x, y) as two solutions."""
    if p.get("ask") != "count":
        raise ValueError("count items only")
    return TWO


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
