"""C03 Solving by factorisation: answer models (the key, and one per misconception).

Inputs give the equation in one of two forms:
- standard: a, b, c for a x^2 + b x + c = 0 (the stem may print it unarranged; a, b, c are
  after moving every term to the left);
- product: k, p1, p2, d for k (x - p1)(x - p2) = d, with d != 0.
Params: optional "factors", the book's linear factors as strings in x (e.g. ["sqrt(2)*x + 5",
"x + sqrt(2)"]) where a root is irrational; otherwise the factors are read off rational roots.
Every answer is the FiniteSet of roots. The key solves the equation directly with sympy, never
by splitting the middle term.
"""
from sympy import FiniteSet, Poly, Rational, S, Symbol, expand, simplify, solve, sqrt, sympify

_x = Symbol("x")


def _abc(v):
    if "a" in v:
        return v["a"], v["b"], v["c"]
    k, p1, p2, d = v["k"], v["p1"], v["p2"], v["d"]
    a, b, c = Poly(expand(k * (_x - p1) * (_x - p2) - d), _x).all_coeffs()
    return a, b, c


def _roots(v):
    a, b, c = _abc(v)
    return [simplify(r) for r in solve(a * _x**2 + b * _x + c, _x)]


def key(v, p):
    return FiniteSet(*_roots(v))


def _differs(v, s):
    if s == key(v, {}):
        raise ValueError("gives the key")
    return s


def m1(v, p):
    """Reads each root off its factor with the printed sign: (x - 4) gives x = -4."""
    return _differs(v, FiniteSet(*[-r for r in _roots(v)]))


def m2(v, p):
    """Divides both sides by the variable, so the root 0 is lost."""
    a, b, c = _abc(v)
    if c != 0:
        raise ValueError("no root 0 to lose")
    return _differs(v, FiniteSet(*[r for r in _roots(v) if r != 0]))


def m3(v, p):
    """x^2 = k: takes only the positive square root."""
    a, b, c = _abc(v)
    if b != 0 or -c / a <= 0:
        raise ValueError("not x^2 = positive number")
    return _differs(v, FiniteSet(sqrt(-c / a)))


def m4(v, p):
    """Takes the two split numbers (product ac, sum b) as the roots, with their signs changed:
    the roots of x^2 + b x + ac = 0, which are a times the true roots."""
    a, b, c = _abc(v)
    if a == 1:
        raise ValueError("a = 1: the split numbers give the roots")
    return _differs(v, FiniteSet(*[a * r for r in _roots(v)]))


def m5(v, p):
    """From the factor (k x + m) = 0 writes x = -m, forgetting to divide by k."""
    if "factors" in p:
        fs = [sympify(f, locals={"x": _x}) for f in p["factors"]]
        a, b, c = _abc(v)
        prod = expand(fs[0] * fs[1])
        if simplify(prod.coeff(_x, 2) * b - prod.coeff(_x, 1) * a) != 0 or simplify(prod.coeff(_x, 2) * c - prod.subs(_x, 0) * a) != 0:
            raise ValueError("factors don't multiply to the equation")
        vals = [-f.subs(_x, 0) for f in fs]
    else:
        rs = _roots(v)
        if not all(r.is_rational for r in rs):
            raise ValueError("irrational roots: give the factors")
        vals = [Rational(r).p for r in rs]
    return _differs(v, FiniteSet(*vals))


def m6(v, p):
    """Product = nonzero number: sets each printed factor to zero anyway."""
    if "p1" not in v:
        raise ValueError("not a product equal to a number")
    return _differs(v, FiniteSet(v["p1"], v["p2"]))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
