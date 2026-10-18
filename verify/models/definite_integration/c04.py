"""C04 Parts and partial fractions with limits: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["mode"]:
- "parts": inputs u (the factor to differentiate), v (the factor to integrate), a, b;
  the item asks for int_a^b u v dx.
- "pf": inputs k, p, q, a, b with p < q; the item asks for
  int_a^b k / ((x + p)(x + q)) dx.
The key is sympy's own definite integral of the integrand (never the method taught);
every wrong answer replays one wrong step of the method. Values with logs are expanded
over primes (log 4/3 -> 2 log 2 - log 3) so equal forms compare equal.
"""
from sympy import Integer, Symbol, diff, expand_log, integrate, log, simplify, sympify

X = Symbol("x", real=True)


def _real(e):
    e = sympify(e)
    return e.subs({s: X for s in e.free_symbols if s.name == "x"})


def _clean(e):
    return expand_log(simplify(e), force=True)


def _mode(p):
    return p.get("mode", "parts")


def _ab(v):
    return _real(v["a"]), _real(v["b"])


def _at(F, a, b):
    """[F]_a^b."""
    return F.subs(X, b) - F.subs(X, a)


def _parts(v, p):
    if _mode(p) != "parts":
        raise ValueError("parts items only")
    u, w = _real(v["u"]), _real(v["v"])
    W = integrate(w, X)
    return u, w, W


def _pf(v, p):
    if _mode(p) != "pf":
        raise ValueError("partial-fraction items only")
    k, pp, qq = (_real(v[s]) for s in ("k", "p", "q"))
    if not pp < qq:
        raise ValueError("needs p < q")
    return k, pp, qq


def _F(v, p):
    """The antiderivative the method writes down, with no constant."""
    if _mode(p) == "parts":
        u, w, W = _parts(v, p)
        return u * W - integrate(diff(u, X) * W, X)
    k, pp, qq = _pf(v, p)
    return k / (qq - pp) * (log(X + pp) - log(X + qq))


def key(v, p):
    a, b = _ab(v)
    if _mode(p) == "parts":
        f = _real(v["u"]) * _real(v["v"])
    else:
        k, pp, qq = _pf(v, p)
        f = k / ((X + pp) * (X + qq))
    return _clean(integrate(f, (X, a, b)))


def m1(v, p):
    """Integrates each factor over [a, b] and multiplies the two results."""
    u, w, _ = _parts(v, p)
    a, b = _ab(v)
    return _clean(integrate(u, (X, a, b)) * integrate(w, (X, a, b)))


def m2(v, p):
    """Drops the boundary term [u int v]_a^b, as if it were always 0."""
    u, w, W = _parts(v, p)
    a, b = _ab(v)
    return _clean(-integrate(diff(u, X) * W, (X, a, b)))


def m3(v, p):
    """Adds the second integral instead of subtracting it."""
    u, w, W = _parts(v, p)
    a, b = _ab(v)
    return _clean(_at(u * W, a, b) + integrate(diff(u, X) * W, (X, a, b)))


def m4(v, p):
    """Splits 1/((x + p)(x + q)) as 1/(x + p) - 1/(x + q), leaving out the factor 1/(q - p)."""
    k, pp, qq = _pf(v, p)
    a, b = _ab(v)
    return _clean(_at(k * (log(X + pp) - log(X + qq)), a, b))


def m5(v, p):
    """Puts in only the upper limit: takes [F]_a^b as F(b)."""
    a, b = _ab(v)
    return _clean(_F(v, p).subs(X, b))


def m6(v, p):
    """Integrates k/((x + p)(x + q)) as k log((x + p)(x + q)), as if the numerator were
    the derivative of the denominator."""
    k, pp, qq = _pf(v, p)
    a, b = _ab(v)
    return _clean(_at(k * log((X + pp) * (X + qq)), a, b))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
