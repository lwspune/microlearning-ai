"""C02 Separate equations from the combined one: answer models (the key, and one per misconception).

Inputs: a, h, b, the coefficients of ax^2 + 2hxy + by^2 = 0 (h is half the xy coefficient).
params["ask"]:
  "lines"  (default) the pair as a polynomial in x, y (= 0), compared up to a constant factor
           (a single line is a linear polynomial);
  "slopes" the set of slopes m = y/x of the two lines;
  "aux"    the auxiliary polynomial in m (= 0), with integer coefficients, no common factor and
           a positive leading coefficient.
The key is the definition: the pair is the set where ax^2 + 2hxy + by^2 vanishes; a line y = mx
lies on it exactly when the point (1, m) does.
"""
from sympy import FiniteSet, Poly, Symbol, expand, solve, sqrt, sympify

x = Symbol("x", real=True)
y = Symbol("y", real=True)
m = Symbol("m")


def _coeffs(v):
    return sympify(v["a"]), sympify(v["h"]), sympify(v["b"])


def _pair(a, h, b):
    return expand(a * x**2 + 2 * h * x * y + b * y**2)


def _ask(P, p):
    ask = p.get("ask", "lines")
    if ask == "lines":
        return P
    q = expand(P.subs({x: 1, y: m}))
    if ask == "slopes":
        if Poly(q, m).degree() != 2:
            raise ValueError("one line is the Y-axis, which has no slope")
        return FiniteSet(*solve(q, m))
    if ask == "aux":
        _, poly = Poly(q, m).clear_denoms()
        _, poly = poly.primitive()
        if poly.LC() < 0:
            poly = -poly
        return poly.as_expr()
    raise ValueError(f"unknown ask {ask!r}")


def key(v, p):
    return _ask(_pair(*_coeffs(v)), p)


def m1(v, p):
    """Auxiliary equation written am^2 + 2hm + b = 0 (a and b swapped): the roots are x/y, read as slopes."""
    a, h, b = _coeffs(v)
    if a == b:
        raise ValueError("a = b: swapping them changes nothing")
    return _ask(_pair(b, h, a), p)


def m2(v, p):
    """Sign of the middle term lost when writing the lines: every slope negated."""
    a, h, b = _coeffs(v)
    if h == 0:
        raise ValueError("h = 0: negating it changes nothing")
    return _ask(_pair(a, -h, b), p)


def m3(v, p):
    """Takes h as the whole xy coefficient, so the middle term is doubled: 2(2h)."""
    a, h, b = _coeffs(v)
    if h == 0:
        raise ValueError("h = 0: doubling it changes nothing")
    return _ask(_pair(a, 2 * h, b), p)


def m4(v, p):
    """Cancels the common factor x (b = 0) or y (a = 0), losing the line x = 0 or y = 0."""
    a, h, b = _coeffs(v)
    if p.get("ask", "lines") != "lines":
        raise ValueError("a single line: asked only for the lines")
    if b == 0:
        return expand(a * x + 2 * h * y)
    if a == 0:
        return expand(2 * h * x + b * y)
    raise ValueError("no common factor: a and b are both nonzero")


def _ratio(v):
    """h = 0: ax^2 + by^2 = 0 is x^2 = r y^2 with r = -b/a > 0."""
    a, h, b = _coeffs(v)
    if h != 0 or a == 0 or b == 0:
        raise ValueError("needs ax^2 + by^2 = 0")
    r = -b / a
    if r <= 0:
        raise ValueError("a and b must have opposite signs")
    return r


def m5(v, p):
    """x^2 = r y^2 read as x = ±r y: forgets the square root."""
    r = _ratio(v)
    if r == 1:
        raise ValueError("r = 1: the root changes nothing")
    return _ask(expand(x**2 - r**2 * y**2), p)


def m6(v, p):
    """x^2 = r y^2 read as x = √r y only: forgets the ± sign, so finds one line (one slope)."""
    r = _ratio(v)
    ask = p.get("ask", "lines")
    if ask == "lines":
        return x - sqrt(r) * y
    if ask == "slopes":
        return FiniteSet(1 / sqrt(r))
    raise ValueError("a single line: asked only for the lines or slopes")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
