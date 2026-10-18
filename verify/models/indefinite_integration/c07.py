"""C07 Completing the square: answer models (the key, and one per misconception).

Inputs: a, b, c, the quadratic Q(t) = a t^2 + b t + c; optionally g, an expression in x, the
substitution t = g(x) (the integrand then carries g'(x)). Params: kind = "recip" for
g'(x) / Q(g) or "root" for g'(x) / sqrt(Q(g)).

Every model writes Q = a[(t + p)^2 + k] (with its own mistake) and reads off a standard form of
C06 with u = t + p. The key's answer is then checked by differentiating it: d/dx of it must give
the integrand back at sample points, or the key raises. So the key never trusts the method.
"""
from functools import reduce

from sympy import Abs, Add, Rational, Symbol, asin, atan, diff, expand, ilcm, log, nsimplify, sqrt

_X = Symbol("x", real=True)
_SAMPLES = [Rational(n, 7) for n in range(-60, 61, 3)]


def _real(f):
    """f with its x made real (draft_items parses inputs with a plain x)."""
    return f.subs({s: _X for s in f.free_symbols if s.name == "x"})


def _t(v):
    return _real(v["g"]) if "g" in v else _X


def integrand(v, p):
    """The function being integrated, in x."""
    t = _t(v)
    q = v["a"] * t**2 + v["b"] * t + v["c"]
    return diff(t, _X) / (q if p["kind"] == "recip" else sqrt(q))


def _denom(e):
    """The lcm of the rational denominators in e's terms (to clear fractions for display)."""
    dens = [term.as_coeff_Mul()[0].q for term in Add.make_args(expand(e))]
    return reduce(ilcm, dens, 1)


def parts(v, p, mistake=None):
    """(front, form, u, q, t): the answer is front times the standard result for `form` in u, q.

    Forms: plus 1/(u^2 + q^2), minus 1/(u^2 - q^2), diff 1/(q^2 - u^2),
    rplus 1/sqrt(u^2 + q^2), rminus 1/sqrt(u^2 - q^2), rdiff 1/sqrt(q^2 - u^2).
    """
    a, b, c, t, kind = v["a"], v["b"], v["c"], _t(v), p["kind"]
    if mistake == "M5" and abs(a) == 1:
        raise ValueError("a = 1: no factor to take out")
    if mistake == "M3" and (kind != "root" or abs(a) == 1):
        raise ValueError("needs a root and a != 1")
    shift = b / (2 * a)
    k = c / a - (0 if mistake == "M1" else shift**2)
    if mistake == "M6":
        shift = -shift
    if k == 0:
        raise ValueError("a perfect square: no standard form")
    u = t + shift
    if kind == "recip":
        front = 1 / abs(a)
        if a > 0:
            form, q = ("plus", sqrt(k)) if k > 0 else ("minus", sqrt(-k))
        elif k < 0:
            form, q = "diff", sqrt(-k)
        else:
            front, form, q = -front, "plus", sqrt(k)
    else:
        if a < 0 and k > 0:
            raise ValueError("Q < 0 everywhere: no real root")
        front = 1 / sqrt(abs(a))
        if a > 0:
            form, q = ("rplus", sqrt(k)) if k > 0 else ("rminus", sqrt(-k))
        else:
            form, q = "rdiff", sqrt(-k)
    if mistake == "M2":
        u = t
    elif mistake == "M3":
        front = 1 / abs(a)
    elif mistake == "M4":
        form = {"plus": "minus", "minus": "plus", "diff": "minus", "rplus": "rminus", "rminus": "rplus", "rdiff": "rminus"}[form]
    elif mistake == "M5":
        front = front / abs(front)
    return front, form, u, q, t


def pieces(front, form, u, q):
    """The answer as (coefficient, function name, argument pieces), fractions cleared for display.

    atan/asin: (coef, name, num, den) with num/den = u/q; log ratio: (coef, "log", num, den);
    log root: (coef, "logroot", u, radicand).
    """
    if form in ("rplus", "rminus"):
        return front, "logroot", u, expand(u**2 + (q**2 if form == "rplus" else -(q**2)))
    d = ilcm(_denom(u), nsimplify(q).as_coeff_Mul()[0].q)
    if form == "plus":
        return front / q, "atan", expand(d * u), d * q
    if form == "rdiff":
        return front, "asin", expand(d * u), d * q
    if form == "minus":
        return front / (2 * q), "log", expand(d * (u - q)), expand(d * (u + q))
    return front / (2 * q), "log", expand(d * (q + u)), expand(d * (q - u))  # diff


def value(front, form, u, q):
    coef, name, m, n = pieces(front, form, u, q)
    if name == "atan":
        return coef * atan(m / n)
    if name == "asin":
        return coef * asin(m / n)
    if name == "log":
        return coef * log(Abs(m / n))
    return coef * log(Abs(m + sqrt(n)))


def _check(f, v, p, want):
    """True when d/dx f equals the integrand at every sample point where both are real and finite."""
    g, d = integrand(v, p), diff(f, _X)
    seen = 0
    for s in _SAMPLES:
        try:
            gi, di = complex(g.subs(_X, s).evalf()), complex(d.subs(_X, s).evalf())
        except (TypeError, ValueError):
            continue
        if abs(gi.imag) > 1e-12 or abs(di.imag) > 1e-12 or abs(gi.real) > 1e6:
            continue
        seen += 1
        if abs(gi.real - di.real) > 1e-9 * max(1, abs(gi.real)):
            return False
    if seen < 3:
        raise ValueError("too few sample points in the domain")
    return want


def _model(mistake):
    def m(v, p):
        f = value(*parts(v, p, mistake)[:4])
        ok = _check(f, v, p, True)
        if mistake is None and not ok:
            raise ValueError("key's derivative is not the integrand")
        if mistake is not None and ok:
            raise ValueError(f"{mistake} gives a correct antiderivative here")
        return f

    return m


# M1 forgets to subtract (b/2)^2; M2 keeps x where x + p belongs; M3 takes a out of the root as a,
# not sqrt(a); M4 uses the standard form of the other sign; M5 drops the factor taken out in front;
# M6 gets the sign of p wrong.
MODELS = {"key": _model(None), **{f"C07-M{i}": _model(f"M{i}") for i in range(1, 7)}}
