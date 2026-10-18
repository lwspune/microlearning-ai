"""C11 Inverse functions: answer models (the key, and one per misconception).

Inputs: a = the number to find f^{-1} at (optional; without it the answer is the rule f^{-1}(x)).
params:
  f   the rule, a sympy string in x: a x^n + b, or (a x + b)/(c x + d)
"""
from sympy import Poly, Rational, S, Symbol, fraction, root, simplify, solve, solveset, sympify, together

X = Symbol("x", real=True)  # the verifier parses x and y as real symbols
Y = Symbol("y", real=True)
NO_INVERSE = Symbol("no_inverse")


def _f(p):
    return sympify(p["f"], locals={"x": X})


def _at(e, v):
    return simplify(e.subs(X, v["a"])) if "a" in v else simplify(e)


def _real_roots(f, c):
    """The real x with f(x) = c."""
    s = solveset(f - c, X, S.Reals)
    if not s.is_FiniteSet:
        raise ValueError(f"f(x) = {c} has no finite solution set")
    return sorted(s, key=lambda r: float(r))


def _power(f):
    """(a, n, b) when f = a x^n + b with n >= 1, else None."""
    if not f.is_polynomial(X):
        return None
    P = Poly(f, X)
    terms = [m for (m,), c in P.terms() if m > 0]
    if len(terms) != 1:
        return None
    n = terms[0]
    return P.coeff_monomial(X**n), n, P.coeff_monomial(1)


def _mobius(f):
    """(a, b, c, d) when f = (a x + b)/(c x + d), else None."""
    num, den = fraction(together(f))
    if not (num.is_polynomial(X) and den.is_polynomial(X)):
        return None
    N, D = Poly(num, X), Poly(den, X)
    if N.degree() > 1 or D.degree() > 1:
        return None
    return N.coeff_monomial(X), N.coeff_monomial(1), D.coeff_monomial(X), D.coeff_monomial(1)


def key(v, p):
    """From the definition: f^{-1}(c) is the one x with f(x) = c; none if two inputs share an image."""
    f = _f(p)
    if "a" in v:
        xs = _real_roots(f, v["a"])
        if len(xs) > 1:
            return NO_INVERSE
        if not xs:
            raise ValueError("nothing maps to a")
        return xs[0]
    for c in (Rational(7, 3), 5, -2):
        if len(_real_roots(f, c)) > 1:
            return NO_INVERSE
    for g in solve(f - Y, X):
        if simplify(f.subs(X, g) - Y) == 0 and g.subs(Y, 5).is_real:
            return simplify(g.subs(Y, X))
    raise ValueError("no real inverse rule found")


def m1(v, p):
    """Reads the -1 in f^{-1} as a power: f^{-1}(x) taken as 1/f(x)."""
    return _at(1 / _f(p), v)


def m2(v, p):
    """Forgets to invert: f^{-1}(a) taken as f(a), the rule f^{-1} as f itself."""
    return _at(_f(p), v)


def m3(v, p):
    """Undoes f's steps in the same order, not the reverse: a x^n + b gives (root n of x)/a - b."""
    s = _power(_f(p))
    if s is None:
        raise ValueError("f is not a x^n + b")
    a, n, b = s
    return _at(root(X, n) / a - b, v)


def m4(v, p):
    """Carries a term across the = sign without changing its sign: y = a x + b gives x = (y + b)/a."""
    f = _f(p)
    s = _power(f)
    if s is not None:
        a, n, b = s
        if b == 0:
            raise ValueError("no constant term to carry across")
        return _at(root((X + b) / a, n), v)
    m = _mobius(f)
    if m is None:
        raise ValueError("f is not (a x + b)/(c x + d)")
    a, b, c, d = m
    return _at((b + d * X) / (c * X + a), v)


def m5(v, p):
    """Skips the one-one check: solves f(x) = a and keeps the positive root, though another input gives a too."""
    if "a" not in v:
        raise ValueError("needs a value")
    xs = _real_roots(_f(p), v["a"])
    if len(xs) < 2:
        raise ValueError("f takes the value once, so this is the key")
    return xs[-1]


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5}
