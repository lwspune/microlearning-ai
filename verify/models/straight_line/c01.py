"""C01 Locus and its equation: answer models (the key, and one per misconception).

Inputs: A(ax, ay), and B(bx, by) where the condition names B. Each model returns a polynomial
in x, y; the locus is that polynomial = 0. params["cond"] picks the condition on P(x, y):
  eq       PA = PB
  ratio    PA = k * PB          (input k, k != 1)
  sqratio  PA^2 = s * PB^2      (input s, s != 1)
  diff     PA^2 - PB^2 = c      (input c)
  right    angle APB = 90 degrees
  dist     PA = r               (input r)
"""
from sympy import Matrix, Poly, expand, symbols

x, y = symbols("x y", real=True)
P = Matrix([x, y])


def _pts(v):
    A = Matrix([v["ax"], v["ay"]])
    B = Matrix([v["bx"], v["by"]]) if "bx" in v else None
    return A, B


def _sq(u):
    return (u.T * u)[0]


def key(v, p):
    """Straight from the definitions, with vectors (no expanding of the distance formula)."""
    A, B = _pts(v)
    c = p["cond"]
    if c == "eq":  # the perpendicular bisector: (P - M) . (B - A) = 0, M the midpoint
        return expand(((P - (A + B) / 2).T * (B - A))[0])
    if c in ("ratio", "sqratio"):  # Apollonius circle: centre (A - k^2 B)/(1 - k^2), radius k|AB|/|1 - k^2|
        k2 = v["k"] ** 2 if c == "ratio" else v["s"]
        C = (A - k2 * B) / (1 - k2)
        return expand(_sq(P - C) - k2 * _sq(A - B) / (1 - k2) ** 2)
    if c == "diff":  # |P - A|^2 - |P - B|^2 is linear in P: 2 P.(B - A) + |A|^2 - |B|^2
        return expand(2 * (P.T * (B - A))[0] + _sq(A) - _sq(B) - v["c"])
    if c == "right":  # PA perpendicular to PB: (A - P) . (B - P) = 0
        return expand(((A - P).T * (B - P))[0])
    if c == "dist":
        return expand(_sq(P - A) - v["r"] ** 2)
    raise ValueError("no such condition")


def _d2(Q):
    """The squared distance PQ^2, by the distance formula."""
    return (x - Q[0]) ** 2 + (y - Q[1]) ** 2


def _by_formula(v, p, d2=_d2, square=lambda n: n**2, swap=False):
    """The condition written with a distance formula d2, the way a student does it."""
    A, B = _pts(v)
    if swap:
        A, B = B, A
    c = p["cond"]
    if c == "eq":
        return expand(d2(A) - d2(B))
    if c == "ratio":
        return expand(d2(A) - square(v["k"]) * d2(B))
    if c == "sqratio":
        return expand(d2(A) - v["s"] * d2(B))
    if c == "diff":
        return expand(d2(A) - d2(B) - v["c"])
    if c == "right":  # Pythagoras, with AB^2 a number worked out from the given points
        return expand(d2(A) + d2(B) - _sq(A - B))
    if c == "dist":
        return expand(d2(A) - square(v["r"]))
    raise ValueError("no such condition")


def m1(v, p):
    """Squares the distances but not the number: AP = 2BP becomes AP^2 = 2BP^2, PA = 3 becomes PA^2 = 3."""
    if p["cond"] not in ("ratio", "dist"):
        raise ValueError("no number to square in this condition")
    return _by_formula(v, p, square=lambda n: n)


def m2(v, p):
    """Sign slip in the distance formula: (x + a)^2 + (y + b)^2 for the distance from (a, b)."""
    return _by_formula(v, p, d2=lambda Q: (x + Q[0]) ** 2 + (y + Q[1]) ** 2)


def m3(v, p):
    """Equidistant from A and B read as 'on the line AB' (the line through A and B)."""
    if p["cond"] != "eq":
        raise ValueError("only for PA = PB")
    A, B = _pts(v)
    return expand((x - A[0]) * (B[1] - A[1]) - (y - A[1]) * (B[0] - A[0]))


def m4(v, p):
    """Attaches the multiplier or the order to the wrong point: AP = 2BP read as BP = 2AP,
    PA^2 - PB^2 = c read as PB^2 - PA^2 = c."""
    if p["cond"] not in ("ratio", "sqratio", "diff"):
        raise ValueError("the condition is symmetric in A and B, or has no B")
    return _by_formula(v, p, swap=True)


def m5(v, p):
    """Expects x^2 and y^2 always to cancel, as for PA = PB, and strikes them out: a line."""
    poly = Poly(key(v, p), x, y)
    if poly.total_degree() < 2:
        raise ValueError("the locus is already a line")
    lin = sum(cf * x**i * y**j for (i, j), cf in poly.terms() if i + j < 2)
    if Poly(lin, x, y).total_degree() < 1:
        raise ValueError("nothing in x, y is left")
    return expand(lin)


def m6(v, p):
    """Expands (x - a)^2 as x^2 - 2ax, dropping the a^2."""
    return _by_formula(v, p, d2=lambda Q: x**2 - 2 * Q[0] * x + y**2 - 2 * Q[1] * y)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
