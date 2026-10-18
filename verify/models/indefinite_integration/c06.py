"""C06 Standard integrals of quadratic forms: answer models (the key, and one per misconception).

Inputs: A, B, nonzero rationals; the integrand is 1/(A x^2 + B), or 1/sqrt(A x^2 + B) when
params["root"] == "yes". The signs of A and B pick the form (A < 0 < B is a^2 - x^2).
Book frame: take |A| out, so a^2 = |B/A|; under a root only sqrt|A| comes out.
Log-of-root answers are written log|L x + sqrt(L^2 x^2 + L^2 t)| (t = +-a^2, L = sqrt(den t)),
the book's cleared form; it differs from log|x + sqrt(x^2 + t)| only by a constant.
The key is checked from the definition: its derivative must equal the integrand.
"""
from sympy import Abs, Symbol, atan, asin, diff, fraction, log, nsimplify, simplify, sqrt

_X = Symbol("x", real=True)


def _parts(v, p):
    A, B = nsimplify(v["A"]), nsimplify(v["B"])
    if A == 0 or B == 0 or (A < 0 and B < 0):
        raise ValueError("needs A, B nonzero and not both negative")
    root = p.get("root") == "yes"
    a2 = abs(B / A)
    return A, B, root, a2, sqrt(a2), sqrt(abs(A))


def _integrand(A, B, root):
    q = A * _X**2 + B
    return 1 / sqrt(q) if root else 1 / q


def _logroot(t):
    """log|x + sqrt(x^2 + t)|, cleared of fractions inside (differs by a constant)."""
    L = sqrt(fraction(nsimplify(t))[1])
    return log(Abs(L * _X + sqrt(L**2 * _X**2 + L**2 * t)))


def _form(A, B, root, a, front=True):
    """The book's formula with x and a; front=False drops 1/a (or 1/2a) on the rational forms."""
    if root:
        if A > 0:
            return _logroot(B / A)
        return asin(_X / a)
    if A > 0 and B > 0:
        return (1 / a if front else 1) * atan(_X / a)
    if A > 0:
        return (1 / (2 * a) if front else 1) * log(Abs((_X - a) / (_X + a)))
    return (1 / (2 * a) if front else 1) * log(Abs((a + _X) / (a - _X)))


def _outside(A, root):
    """What comes out of the integral when |A| is taken out."""
    return 1 / sqrt(abs(A)) if root else 1 / abs(A)


def key(v, p):
    A, B, root, a2, a, k = _parts(v, p)
    F = _outside(A, root) * _form(A, B, root, a)
    f = _integrand(A, B, root)
    inside = root and A < 0  # sin^-1 form: |x| < a
    for x0 in ((a / 3, -a / 2) if inside else (a * 3, -a * 2)):  # derivative check in the domain
        if abs((diff(F, _X) - f).subs(_X, x0).evalf()) > 1e-9:
            raise ValueError("key fails the derivative check")
    return F


def m1(v, p):
    """Drops the 1/a (tan^-1) or 1/2a (log) in front of the rational forms."""
    A, B, root, a2, a, k = _parts(v, p)
    if root:
        raise ValueError("rational forms only")
    return _outside(A, root) * _form(A, B, root, a, front=False)


def m2(v, p):
    """Carries the 1/a of the tan^-1 form over to the square-root forms."""
    A, B, root, a2, a, k = _parts(v, p)
    if not root:
        raise ValueError("square-root forms only")
    return _outside(A, root) / a * _form(A, B, root, a)


def m3(v, p):
    """Treats dx as d(kx) for A = k^2: uses kx as the variable and never divides by k."""
    A, B, root, a2, a, k = _parts(v, p)
    if k == 1:
        raise ValueError("A = +-1: nothing to divide by")
    return k * key(v, p)


def m4(v, p):
    """Takes |A| out of the square root whole: 1/|A| in front instead of 1/sqrt|A|."""
    A, B, root, a2, a, k = _parts(v, p)
    if not root or k == 1:
        raise ValueError("square-root forms with |A| != 1 only")
    return key(v, p) / k


def m5(v, p):
    """Swaps the two log formulae: uses the x^2 - a^2 result for a^2 - x^2 and back."""
    A, B, root, a2, a, k = _parts(v, p)
    if root or (A > 0 and B > 0):
        raise ValueError("rational log forms only")
    if A > 0:
        F = 1 / (2 * a) * log(Abs((a + _X) / (a - _X)))
    else:
        F = 1 / (2 * a) * log(Abs((_X - a) / (_X + a)))
    return _outside(A, root) * F


def m6(v, p):
    """Reads a^2 as a: takes a = |B/A| without the square root."""
    A, B, root, a2, a, k = _parts(v, p)
    if a2 == a:
        raise ValueError("a = 1: a^2 = a")
    if root and A > 0:
        return _outside(A, root) * _logroot(a2**2 if B > 0 else -a2**2)
    return _outside(A, root) * _form(A, B, root, a2)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
