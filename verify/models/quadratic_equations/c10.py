"""C10 Equations that reduce to quadratics: answer models (the key, and one per misconception).

Every item is an equation q(u) = 0, where q is a quadratic in t (v["q"]) and u is the quantity
substituted for t (v["u"], an expression in x: Abs(x - 3), 3**x, log(x, 10), x + 1/x, x**2, sqrt(x)).
p["sub"] names the kind of u (abs | exp | log | recip | sq | sqrt); p["ask"] picks the question:
  roots    the set of real solutions x
  count    how many real solutions there are
  sum      the sum of all real solutions
  product  the product of all real solutions
"""
from sympy import FiniteSet, Integer, Poly, S, Symbol, log, prod, solve, solveset, sqrt

T = Symbol("t")
XR = Symbol("x", real=True)


def _real(u):
    """u with its x made real (draft_items parses x as a plain symbol, the verifier as real)."""
    return u.subs({s: XR for s in u.free_symbols if s.name == "x"})


def _t(q):
    for s in q.free_symbols:
        if s.name == "t":
            return s
    raise ValueError("no t in the quadratic")


def _t_roots(v):
    """The real roots of the quadratic in t."""
    q = v["q"]
    t = _t(q)
    if Poly(q, t).degree() != 2:
        raise ValueError("q is not a quadratic in t")
    return [r for r in solve(q, t) if r.is_real]


def _pre(v, t0):
    """From the definition: the real x with u(x) = t0."""
    s = solveset(_real(v["u"]) - t0, XR, S.Reals)
    if s == S.EmptySet:
        return FiniteSet()
    if not isinstance(s, FiniteSet):
        raise ValueError(f"preimage of {t0} is not a finite set: {s}")
    return s


def _report(xs, p):
    """xs (a FiniteSet of real x) as the item asks for it."""
    ask = p.get("ask", "roots")
    if ask == "roots":
        return xs
    if ask == "count":
        return Integer(len(xs))
    if ask == "sum":
        return sum(xs, S.Zero)
    if ask == "product":
        if not xs:
            raise ValueError("no root to multiply")
        return prod(xs)
    raise ValueError(ask)


def _from_ts(v, p, ts):
    """Undoes the substitution rightly for each t in ts (impossible t give no x)."""
    xs = FiniteSet()
    for t0 in ts:
        xs = xs | _pre(v, t0)
    return _report(xs, p)


def _sub(p):
    return p.get("sub", "")


def key(v, p):
    """Solves q(u(x)) = 0 for real x directly, with no substitution."""
    t = _t(v["q"])
    eq = v["q"].subs(t, _real(v["u"]))
    xs = solveset(eq, XR, S.Reals)
    if xs == S.EmptySet:
        xs = FiniteSet()
    if not isinstance(xs, FiniteSet):
        raise ValueError(f"solution set is not finite: {xs}")
    return _report(xs, p)


def m1(v, p):
    """Stops at t: reports the roots of the quadratic in t as the answer."""
    ts = FiniteSet(*_t_roots(v))
    ask = p.get("ask", "roots")
    if ask == "count":
        return Integer(len(ts))
    return _report(ts, p)


def _impossible(v):
    return [t0 for t0 in _t_roots(v) if not _pre(v, t0)]


def m2(v, p):
    """Keeps a value of t the substituted quantity can't take, undoing it as if it were allowed:
    |x - a| = -2 gives x = a +/- 2, sqrt(x) = -2 gives x = 4; for a count, x + 1/x = 1 or x^2 = -1
    is taken to give two roots and 2^x = -1 one."""
    bad = _impossible(v)
    if not bad:
        raise ValueError("every root in t is allowed")
    ok = [t0 for t0 in _t_roots(v) if t0 not in bad]
    xs = FiniteSet()
    for t0 in ok:
        xs = xs | _pre(v, t0)
    sub, ask = _sub(p), p.get("ask", "roots")
    u = _real(v["u"])
    if sub == "abs":
        a = solve(u.args[0], XR)[0]
        for t0 in bad:
            xs = xs | FiniteSet(a + t0, a - t0)
        return _report(xs, p)
    if sub == "sqrt":
        for t0 in bad:
            xs = xs | FiniteSet(t0**2)
        return _report(xs, p)
    if ask != "count":
        raise ValueError("the kept value gives no real number to report")
    naive = {"recip": 2, "sq": 2, "exp": 1, "log": 1}
    if sub not in naive:
        raise ValueError(sub)
    return Integer(len(xs) + naive[sub] * len(bad))


def m3(v, p):
    """Undoes the substitution on one branch only: |x - a| = t gives x = a + t, x^2 = t gives x = sqrt(t)."""
    sub = _sub(p)
    ok = [t0 for t0 in _t_roots(v) if _pre(v, t0)]
    u = _real(v["u"])
    if sub == "abs":
        a = solve(u.args[0], XR)[0]
        return _report(FiniteSet(*[a + t0 for t0 in ok]), p)
    if sub == "sq":
        return _report(FiniteSet(*[sqrt(t0) for t0 in ok]), p)
    raise ValueError("only a modulus or a square has two branches")


def m4(v, p):
    """Reads the square of the substituted quantity as twice it: 4^x = (2^x)^2 taken as 2 * 2^x,
    (log x)^2 taken as 2 log x. So A t^2 + B t + C = 0 becomes (2A + B) t + C = 0."""
    if _sub(p) not in ("exp", "log"):
        raise ValueError("only for a power or a log")
    q = v["q"]
    t = _t(q)
    A, B, C = Poly(q, t).all_coeffs()
    if 2 * A + B == 0:
        raise ValueError("the t terms cancel")
    t0 = -C / (2 * A + B)
    return _from_ts(v, p, [t0])


def m5(v, p):
    """Rejects every negative t, as if the substituted quantity were always positive:
    log x < 0 for 0 < x < 1, and x + 1/x <= -2 for x < 0, are thrown away."""
    if _sub(p) not in ("log", "recip"):
        raise ValueError("only where u can be negative")
    ok = [t0 for t0 in _t_roots(v) if _pre(v, t0)]
    if not any(t0 < 0 for t0 in ok):
        raise ValueError("no allowed negative t")
    return _from_ts(v, p, [t0 for t0 in ok if t0 >= 0])


def m6(v, p):
    """For t = b^x, takes the sum of the x as log_b of the SUM of the t (log_b t1 + log_b t2 read as log_b(t1 + t2))."""
    if _sub(p) != "exp" or p.get("ask") != "sum":
        raise ValueError("only for the sum of the roots of an exponential equation")
    ok = [t0 for t0 in _t_roots(v) if _pre(v, t0)]
    if len(ok) < 2:
        raise ValueError("needs two allowed t")
    u = _real(v["u"])
    b = u.base
    return log(sum(ok), b)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
