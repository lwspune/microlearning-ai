"""C15 Equations in inverse functions: answer models (the key, and one per misconception).

Inputs: lhs, rhs, the two sides of an equation in x (x real). lhs is a sum of terms c tan^-1(u),
c in {1, -1, 2}; rhs is a constant angle (pi/4, 3 pi/4, tan^-1(3/4), ...).
Every answer is the set of real x that solve it (a FiniteSet; EmptySet when none).

The key is found from the definition: every real x where lhs - rhs = 0, by a sign-change scan of
x = tan t over the whole real line, refined to 50 digits and identified as an exact surd.
The wrong models apply their rule to the tan^-1 terms of lhs.
"""
import math

import mpmath
from sympy import (Add, EmptySet, FiniteSet, N, S, atan, fraction, lambdify, nsimplify, simplify,
                   solveset, sqrt, tan, together, zoo)

SURDS = [sqrt(2), sqrt(3), sqrt(6), sqrt(7)]


def _x(expr):
    syms = list(expr.free_symbols)
    if len(syms) != 1:
        raise ValueError("the equation must be in one unknown")
    return syms[0]


def key(v, p):
    """Every real x with lhs(x) = rhs, found numerically and identified exactly."""
    lhs, rhs = v["lhs"], v["rhs"]
    x = _x(lhs)
    f = lambdify(x, lhs - rhs, "mpmath")
    g = lambdify(x, lhs - rhs, "math")

    def val(xx):
        try:
            y = float(g(xx))
        except (ZeroDivisionError, ValueError, TypeError, OverflowError):
            return None
        return y if math.isfinite(y) else None

    M = 40000
    found = []
    prev = None
    for i in range(1, M):
        xx = math.tan(-math.pi / 2 + math.pi * i / M)
        y = val(xx)
        if y is None:
            prev = None
            continue
        if prev is not None and abs(y) < 0.5 and abs(prev[1]) < 0.5 and prev[1] * y <= 0:
            found.append((prev[0], xx))
        prev = (xx, y)
    roots = set()
    with mpmath.workdps(60):
        for a, b in found:
            r = mpmath.findroot(lambda z: f(z), (a, b), solver="anderson")
            exact = nsimplify(mpmath.nstr(r, 50), SURDS, tolerance=1e-35)
            if abs(complex(N((lhs - rhs).subs(x, exact), 60))) > 1e-45:
                raise ValueError(f"root near {mpmath.nstr(r, 10)} not identified")
            roots.add(simplify(exact))
    return FiniteSet(*roots) if roots else EmptySet


def _terms(lhs):
    """lhs as [(c, u)] with c in {1, 2}: -tan^-1(u) is read as tan^-1(-u)."""
    out = []
    for term in Add.make_args(lhs):
        c, rest = term.as_coeff_Mul()
        if rest.func != atan:
            raise ValueError("every term must be a multiple of tan^-1")
        u = rest.args[0]
        if c < 0:
            c, u = -c, -u
        if c not in (1, 2):
            raise ValueError(f"coefficient {c} not modelled")
        out.append((c, u))
    return out


def _tan_lhs(lhs, slip=False):
    """tan of lhs by the sum or double-angle formula (slip: + in the denominator), and the
    formula's condition (ab < 1 or a^2 < 1) as a function of x."""
    t = _terms(lhs)
    s = 1 if slip else -1
    if len(t) == 1 and t[0][0] == 2:
        a = t[0][1]
        return 2 * a / (1 + s * a**2), a**2
    if len(t) == 2 and t[0][0] == 1 and t[1][0] == 1:
        a, b = t[0][1], t[1][1]
        return (a + b) / (1 + s * a * b), a * b
    raise ValueError("lhs must be tan^-1 a + tan^-1 b or 2 tan^-1 a")


def _solve(T, rhs, lhs):
    """Real x with T(x) = tan(rhs), where every tan^-1 argument of lhs is defined."""
    x = _x(lhs)
    k = tan(rhs)
    num, den = fraction(together(T))
    eq = den if k in (zoo, S.ComplexInfinity) or not k.is_finite else num - k * den
    sols = solveset(eq, x, S.Reals)
    if sols == S.EmptySet:
        return []
    if not isinstance(sols, FiniteSet):
        raise ValueError(f"unexpected solution set {sols}")
    good = []
    for r in sols:
        if all(u.subs(x, r).is_finite for _, u in _terms(lhs)) and (not k.is_finite or den.subs(x, r) != 0):
            good.append(simplify(r))
    return good


def _set(rs):
    return FiniteSet(*rs) if rs else EmptySet


def m1(v, p):
    """Takes tan of both sides and keeps every root of the algebraic equation, unchecked."""
    T, _ = _tan_lhs(v["lhs"])
    return _set(_solve(T, v["rhs"], v["lhs"]))


def m2(v, p):
    """Treats tan^-1 as linear: tan^-1 a + tan^-1 b = tan^-1(a + b), 2 tan^-1 a = tan^-1(2a)."""
    T = sum(c * u for c, u in _terms(v["lhs"]))
    return _set(_solve(T, v["rhs"], v["lhs"]))


def m3(v, p):
    """Slips the sign in the denominator: (a + b)/(1 + ab), 2a/(1 + a^2); keeps every root."""
    T, _ = _tan_lhs(v["lhs"], slip=True)
    return _set(_solve(T, v["rhs"], v["lhs"]))


def m4(v, p):
    """Keeps only the positive roots, as if x had to be positive, instead of checking each."""
    T, _ = _tan_lhs(v["lhs"])
    rs = _solve(T, v["rhs"], v["lhs"])
    if all(r > 0 for r in rs):
        raise ValueError("no root that is 0 or negative")
    return _set([r for r in rs if r > 0])


def m5(v, p):
    """Keeps only the roots with ab < 1 (a^2 < 1), reading the formula's condition as a test of the answer."""
    T, cond = _tan_lhs(v["lhs"])
    x = _x(v["lhs"])
    rs = _solve(T, v["rhs"], v["lhs"])
    kept = [r for r in rs if cond.subs(x, r) < 1]
    if len(kept) == len(rs):
        raise ValueError("every root meets the condition")
    return _set(kept)


MODELS = {"key": key, "C15-M1": m1, "C15-M2": m2, "C15-M3": m3, "C15-M4": m4, "C15-M5": m5}
