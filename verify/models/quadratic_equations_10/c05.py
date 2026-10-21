"""C05 The quadratic formula: answer models (the key, and one per misconception).

Inputs: L and R, the two sides of the equation as printed (one variable).
Every model returns the set of real roots (a FiniteSet; EmptySet when the square root is not real).
The key solves L - R = 0 directly (sympy's solveset), never through the formula.
"""
from sympy import EmptySet, FiniteSet, Poly, Reals, expand, radsimp, simplify, solveset, sqrt


def _var(v):
    syms = v["L"].free_symbols | v["R"].free_symbols
    if len(syms) != 1:
        raise ValueError("one variable expected")
    return next(iter(syms))


def _abc(P, x):
    c = Poly(expand(P), x).all_coeffs()
    if len(c) != 3:
        raise ValueError("not a quadratic with all three coefficients")
    a, b, c = c
    if a < 0:
        a, b, c = -a, -b, -c
    return a, b, c


def _roots(a, b, D, how="key"):
    """x = (-b +- sqrt(D)) / (2a), or a wrong variant of it."""
    if D < 0:
        return EmptySet
    r = sqrt(D)
    if how == "key":
        xs = [(-b + r) / (2 * a), (-b - r) / (2 * a)]
    elif how == "plus_b":
        xs = [(b + r) / (2 * a), (b - r) / (2 * a)]
    elif how == "root_only":
        xs = [-b + r / (2 * a), -b - r / (2 * a)]
    elif how == "over_2":
        xs = [(-b + r) / 2, (-b - r) / 2]
    return FiniteSet(*[radsimp(simplify(t)) for t in xs])


def _std(v):
    x = _var(v)
    return _abc(v["L"] - v["R"], x)


def key(v, p):
    """The real roots of L = R, solved directly."""
    x = _var(v)
    return solveset(expand(v["L"] - v["R"]), x, Reals)


def m1(v, p):
    """Reads a, b, c as printed, before writing ax^2 + bx + c = 0: the right side keeps its signs (L + R = 0)."""
    if v["R"] == 0:
        raise ValueError("already in standard form")
    a, b, c = _abc(v["L"] + v["R"], _var(v))
    return _roots(a, b, b**2 - 4 * a * c)


def m2(v, p):
    """Starts the numerator with b instead of -b."""
    a, b, c = _std(v)
    return _roots(a, b, b**2 - 4 * a * c, "plus_b")


def m3(v, p):
    """Divides only the square root by 2a: -b +- sqrt(b^2 - 4ac) / 2a."""
    a, b, c = _std(v)
    if b == 0:
        raise ValueError("no -b term to leave out")
    return _roots(a, b, b**2 - 4 * a * c, "root_only")


def m4(v, p):
    """Divides by 2 instead of 2a."""
    a, b, c = _std(v)
    if a == 1:
        raise ValueError("2a = 2 when a = 1")
    return _roots(a, b, b**2 - 4 * a * c, "over_2")


def m5(v, p):
    """With a negative c, works out -4ac as negative: b^2 - 4a|c|."""
    a, b, c = _std(v)
    if not c < 0:
        raise ValueError("needs a negative c")
    return _roots(a, b, b**2 + 4 * a * c)


def m6(v, p):
    """With a negative b, squares only the number and keeps the minus: b^2 becomes -b^2."""
    a, b, c = _std(v)
    if not b < 0:
        raise ValueError("needs a negative b")
    return _roots(a, b, -(b**2) - 4 * a * c)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
