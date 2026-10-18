"""C06 Limits at infinity: answer models (the key, and one per misconception).

Inputs (sympy expressions in x): N the numerator, D the denominator; the limit is of N/D as x -> oo.
N and D are built from x by sums, products, whole-number powers and square roots.

The key is sympy's limit of N/D itself. The misconceptions read the leading term of N and D:
`_lead` gives (coefficient, degree) of the term that dominates as x -> oo, with switches for
the two misreadings (a power's coefficient left unraised, a root's degree not halved).
"""
from sympy import Add, Integer, Mul, Pow, Rational, Symbol, limit, oo, simplify

DNE = Symbol("dne")


def _x(v):
    for e in (v["N"], v["D"]):
        for s in e.free_symbols:
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _lead(g, x, raise_coeff=True, root_full=False):
    """(c, d): g behaves like c*x**d as x -> oo."""
    if not g.has(x):
        return g, Integer(0)
    if g == x:
        return Integer(1), Integer(1)
    if isinstance(g, Add):
        parts = [_lead(a, x, raise_coeff, root_full) for a in g.args]
        d = max(p[1] for p in parts)
        c = simplify(sum(p[0] for p in parts if p[1] == d))
        if c == 0:
            raise ValueError("leading terms cancel")
        return c, d
    if isinstance(g, Mul):
        c, d = Integer(1), Integer(0)
        for a in g.args:
            ca, da = _lead(a, x, raise_coeff, root_full)
            c, d = c * ca, d + da
        return c, d
    if isinstance(g, Pow) and not g.exp.has(x):
        cb, db = _lead(g.base, x, raise_coeff, root_full)
        if g.exp == Rational(1, 2) and root_full:
            return cb, db
        if g.exp.is_Integer and g.exp > 1 and not raise_coeff:
            return cb, db * g.exp
        return cb**g.exp, db * g.exp
    raise ValueError(f"can't read the leading term of {g}")


def _compare(lead_n, lead_d):
    (cn, dn), (cd, dd) = lead_n, lead_d
    if dn == dd:
        return simplify(cn / cd)
    return Integer(0) if dn < dd else DNE


def _has(e, test):
    return any(isinstance(s, Pow) and test(s.exp) for s in e.atoms(Pow))


def key(v, p):
    x = _x(v)
    L = limit(v["N"] / v["D"], x, oo)
    return DNE if L.is_infinite else simplify(L)


def m1(v, p):
    """Treats x -> oo like x -> 0: keeps only the constant terms (puts x = 0)."""
    x = _x(v)
    d0 = v["D"].subs(x, 0)
    if d0 == 0:
        raise ValueError("the denominator is 0 at x = 0")
    return simplify(v["N"].subs(x, 0) / d0)


def m2(v, p):
    """Reads oo/oo as 1: top and bottom both grow without bound, so they 'cancel'."""
    return Integer(1)


def m3(v, p):
    """Reads oo/oo as 'the limit does not exist'."""
    return DNE


def m4(v, p):
    """Takes the leading coefficient of (ax + b)^n as a, not a^n."""
    if not (_has(v["N"], lambda e: e.is_Integer and e > 1) or _has(v["D"], lambda e: e.is_Integer and e > 1)):
        raise ValueError("no power of a bracket: gives the key")
    x = _x(v)
    return _compare(_lead(v["N"], x, raise_coeff=False), _lead(v["D"], x, raise_coeff=False))


def m5(v, p):
    """Reads the degree of sqrt(g) as the degree of g (sqrt(x^4 + ...) as degree 4, not 2)."""
    if not (_has(v["N"], lambda e: e == Rational(1, 2)) or _has(v["D"], lambda e: e == Rational(1, 2))):
        raise ValueError("no square root")
    x = _x(v)
    return _compare(_lead(v["N"], x, root_full=True), _lead(v["D"], x, root_full=True))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
