"""C08 Differentiating an integral: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  deriv   phi(x) = integral of f(t) dt from u(x) to v(x); inputs f (in t), u, v (in x, either may be
          a constant) and optionally c -> phi'(x), or phi'(c) when c is given.
  fprime  the integral of g'(x) dx from a to b; inputs g (in x), a, b and optionally G, an
          antiderivative of g' that is continuous on [a, b] (defaults to g) -> the integral.
The deriv key is checked against the definition: a central difference of the numerical integral
at two points. The fprime key integrates g' itself (simplified), never g(b) - g(a).
"""
from sympy import Integer, Integral, N, Rational, Symbol, cancel, diff, integrate, simplify

X = Symbol("x", real=True)
T = Symbol("t")


def _real_x(e):
    """e with any x made the real x the verifier uses, and any t the plain t."""
    if not hasattr(e, "subs"):
        return Integer(e)
    sub = {}
    for s in e.free_symbols:
        if s.name == "x":
            sub[s] = X
        elif s.name == "t":
            sub[s] = T
    return e.subs(sub)


def _ask(p):
    return p.get("ask", "deriv")


# --- deriv -------------------------------------------------------------------------------------

def _limits(v):
    f, u, w = _real_x(v["f"]), _real_x(v["u"]), _real_x(v["v"])
    return f, u, w, diff(u, X), diff(w, X)


def _at(e, v):
    """Evaluate at x = c when the item asks at a point."""
    e = simplify(e)
    return simplify(e.subs(X, v["c"])) if "c" in v else e


def _deriv_check(v, val):
    f, u, w, du, dw = _limits(v)
    pts = [v["c"]] if "c" in v else [Rational(37, 100), Rational(81, 100)]
    h = Rational(1, 10**6)
    for x0 in pts:
        lo = lambda s: N(u.subs(X, s), 40)
        hi = lambda s: N(w.subs(X, s), 40)
        phi = lambda s: Integral(f, (T, lo(s), hi(s))).evalf(40)
        num = (phi(x0 + h) - phi(x0 - h)) / (2 * h)
        got = N(val.subs(X, x0) if hasattr(val, "subs") else val, 40)
        assert abs(got - num) < 1e-8, f"key {val} disagrees with the difference quotient {num} at {x0}"


def _deriv_key(v):
    f, u, w, du, dw = _limits(v)
    val = _at(f.subs(T, w) * dw - f.subs(T, u) * du, v)
    _deriv_check(v, val if "c" in v else simplify(f.subs(T, w) * dw - f.subs(T, u) * du))
    return val


# --- fprime ------------------------------------------------------------------------------------

def _fparts(v):
    g, a, b = _real_x(v["g"]), v["a"], v["b"]
    G = _real_x(v.get("G", g))
    dg = cancel(simplify(diff(g, X)))
    assert simplify(diff(G, X) - dg) == 0, "G is not an antiderivative of g'"
    return g, G, dg, a, b


def _fprime_key(v):
    g, G, dg, a, b = _fparts(v)
    val = simplify(integrate(dg, (X, a, b)))
    num = Integral(dg, (X, a, b)).evalf(30)
    assert abs(N(val, 30) - num) < 1e-12, f"key {val} disagrees with the numeric integral {num}"
    return val


# --- models ------------------------------------------------------------------------------------

def key(v, p):
    return _deriv_key(v) if _ask(p) == "deriv" else _fprime_key(v)


def m1(v, p):
    """Drops the chain-rule factor: f(v(x)) for each moving limit, with no v'(x) or u'(x)."""
    if _ask(p) != "deriv":
        raise ValueError("only for a derivative of an integral")
    f, u, w, du, dw = _limits(v)
    if du in (0, 1) and dw in (0, 1):
        raise ValueError("every limit has derivative 0 or 1: same as the key")
    out = (f.subs(T, w) if dw != 0 else 0) - (f.subs(T, u) if du != 0 else 0)
    return _at(out, v)


def m2(v, p):
    """Adds the lower limit's term instead of subtracting it: f(v)v' + f(u)u'."""
    if _ask(p) != "deriv":
        raise ValueError("only for a derivative of an integral")
    f, u, w, du, dw = _limits(v)
    if du == 0:
        raise ValueError("constant lower limit: same as the key")
    return _at(f.subs(T, w) * dw + f.subs(T, u) * du, v)


def m3(v, p):
    """Lets a constant lower limit a give -f(a): f(v)v' - f(a)."""
    if _ask(p) != "deriv":
        raise ValueError("only for a derivative of an integral")
    f, u, w, du, dw = _limits(v)
    if du != 0:
        raise ValueError("the lower limit moves")
    if simplify(f.subs(T, u)) == 0:
        raise ValueError("f(a) = 0: same as the key")
    return _at(f.subs(T, w) * dw - f.subs(T, u), v)


def m4(v, p):
    """Keeps only the upper limit: f(v)v' for a derivative, G(b) for an integral of g'."""
    if _ask(p) == "deriv":
        f, u, w, du, dw = _limits(v)
        if du == 0:
            raise ValueError("constant lower limit: same as the key")
        return _at(f.subs(T, w) * dw, v)
    g, G, dg, a, b = _fparts(v)
    if simplify(G.subs(X, a)) == 0:
        raise ValueError("G(a) = 0: same as the key")
    return simplify(G.subs(X, b))


def m5(v, p):
    """Puts the limits straight into the integrand: f(v) - f(u), or g'(b) - g'(a)."""
    if _ask(p) == "deriv":
        f, u, w, du, dw = _limits(v)
        return _at(f.subs(T, w) - f.subs(T, u), v)
    g, G, dg, a, b = _fparts(v)
    return simplify(dg.subs(X, b) - dg.subs(X, a))


def m6(v, p):
    """Ignores a jump of g inside [a, b]: takes the integral of g' as g(b) - g(a)."""
    if _ask(p) != "fprime":
        raise ValueError("only for an integral of a derivative")
    g, G, dg, a, b = _fparts(v)
    val = simplify(g.subs(X, b) - g.subs(X, a))
    if simplify(val - _fprime_key(v)) == 0:
        raise ValueError("g has no jump on [a, b]: same as the key")
    return val


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
