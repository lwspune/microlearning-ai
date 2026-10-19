"""C02 The sign and size of a logarithm: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  least     v["a"] base, v["f"] a quadratic in x -> the least value of log_a f(x) over real x
  greatest  same inputs -> the greatest value of log_a f(x); Symbol("no_greatest") if there is none
  ineq      v["a"] base, v["u"] an expression in x, v["c"] a number, p["op"] ">" or "<"
            -> the set of real x with log_a u (op) c
  powlog    v["a"] base, v["k"] a positive number -> the set of real x with x^(log_a x) > a^k
  count     v["logs"] a tuple of (base, argument) pairs -> how many of the logs are positive
The key works from the definition: it evaluates the logarithms themselves (sympy's log), finds
ranges with function_range, and solves inequalities by testing a point between the boundary
points inside the domain, never with the sign or monotonic rules being taught.
"""
from sympy import (
    ConditionSet, Integer, Interval, Poly, S, Symbol, Union, diff, log, oo, simplify, solve,
    solve_univariate_inequality, solveset, sqrt,
)
from sympy.calculus.util import function_range

NO_GREATEST = Symbol("no_greatest")
NO_LEAST = Symbol("no_least")


def _ask(p):
    return p.get("ask", "least")


def _x(*exprs):
    """The symbol named x (the verifier parses it as real, draft_items as plain)."""
    for e in exprs:
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _xr(e):
    """e rewritten in a real x, and that x."""
    x = _x(e)
    xr = Symbol("x", real=True)
    return e.subs(x, xr), xr


def _logv(a, u):
    return simplify(log(u) / log(a))


def _sample(lo, hi):
    if lo == -oo and hi == oo:
        return Integer(0)
    if lo == -oo:
        return hi - 1
    if hi == oo:
        return lo + 1
    return (lo + hi) / 2


def _test_solve(g, x, domain):
    """{x in domain : g(x) > 0}, by cutting the domain at the roots of g and testing a point of each piece."""
    found = solveset(g, x, domain)
    if isinstance(found, ConditionSet):
        found = [r for r in solve(g, x) if domain.contains(r) == True]  # noqa: E712 (sympy truth)
    roots = sorted(r for r in found if r.is_real)
    pieces = []
    for part in (domain.args if isinstance(domain, Union) else (domain,)):
        cuts = [part.start] + [r for r in roots if part.start < r < part.end] + [part.end]
        for lo, hi in zip(cuts, cuts[1:]):
            if (g.subs(x, _sample(lo, hi))).evalf() > 0:
                pieces.append(Interval.open(lo, hi))
    return Union(*pieces) if pieces else S.EmptySet


def _domain(u, x):
    return solve_univariate_inequality(u > 0, x, relational=False)


def _quad(v):
    f, x = _xr(v["f"])
    if Poly(f, x).degree() != 2:
        raise ValueError("not a quadratic")
    (x0,) = solve(diff(f, x), x)
    return f, x, x0


def _extreme_f(v, p):
    """The x and the value of f where log_a f is extreme by the correct (monotonic) reading."""
    f, x, x0 = _quad(v)
    lead = Poly(f, x).LC()
    want_low_f = (_ask(p) == "least") == (v["a"] > 1)
    if want_low_f != (lead > 0):
        raise ValueError("f has no extreme of that kind")
    return x0, f.subs(x, x0)


def key(v, p):
    a_ = _ask(p)
    if a_ in ("least", "greatest"):
        f, x = _xr(v["f"])
        rng = function_range(_logv(v["a"], f), x, S.Reals)
        if a_ == "least":
            return simplify(rng.inf) if rng.inf.is_finite and rng.inf in rng else NO_LEAST
        return simplify(rng.sup) if rng.sup.is_finite and rng.sup in rng else NO_GREATEST
    if a_ == "ineq":
        u, x = _xr(v["u"])
        g = _logv(v["a"], u) - v["c"]
        return _test_solve(g if p["op"] == ">" else -g, x, _domain(u, x))
    if a_ == "powlog":
        x = Symbol("x", positive=True)
        a, k = v["a"], v["k"]
        return _test_solve(x ** (log(x) / log(a)) - a**k, x, Interval.open(0, oo))
    if a_ == "count":
        return Integer(sum(1 for (b, y) in v["logs"] if _logv(b, y).evalf() > 0))
    raise ValueError(a_)


def _ineq_rule(v, p, base_above_one, threshold, keep_domain=True):
    """Solves log_a u (op) c as u compared with threshold, the way round set by base_above_one."""
    u, x = _xr(v["u"])
    up = (p["op"] == ">") == base_above_one
    sol = solve_univariate_inequality(u > threshold if up else u < threshold, x, relational=False)
    return sol.intersect(_domain(u, x)) if keep_domain else sol


def m1(v, p):
    """A base below 1 treated like a base above 1: no reversal of sign, order or inequality."""
    a = v.get("a")
    a_ = _ask(p)
    if a_ == "count":
        return Integer(sum(1 for (b, y) in v["logs"] if y > 1))
    if not (a is not None and 0 < a < 1):
        raise ValueError("needs a base below 1")
    if a_ in ("least", "greatest"):
        f, x, x0 = _quad(v)
        lead = Poly(f, x).LC()
        # Reads log_a as increasing: least log at least f, greatest log at greatest f.
        if (a_ == "least") == (lead > 0):
            return _logv(a, f.subs(x, x0))
        return NO_LEAST if a_ == "least" else NO_GREATEST
    if a_ == "ineq":
        return _ineq_rule(v, p, True, v["a"] ** v["c"])
    raise ValueError(a_)


def m2(v, p):
    """Believes a log is never negative (mixes up 'the argument is positive' with 'the log is positive')."""
    a_ = _ask(p)
    if a_ == "count":
        return Integer(sum(1 for (b, y) in v["logs"] if y != 1))
    if a_ == "ineq":
        if v["c"] != 0:
            raise ValueError("only for log compared with 0")
        u, x = _xr(v["u"])
        dom = _domain(u, x)
        if p["op"] == "<":
            return S.EmptySet
        return dom - solveset(u - 1, x, S.Reals)
    if a_ == "powlog":
        # (log_a x)^2 > k with log_a x taken as never negative: log_a x > sqrt(k) only.
        a, k = v["a"], v["k"]
        if not a > 1:
            raise ValueError("base above 1 only")
        return Interval.open(a ** sqrt(k), oo)
    raise ValueError(a_)


def m3(v, p):
    """Takes log_a a = 0 (mixing it up with log_a 1 = 0): the sign changes at x = a, values 1 too low."""
    a_ = _ask(p)
    if a_ == "count":
        return Integer(sum(1 for (b, y) in v["logs"] if (b > 1 and y > b) or (b < 1 and y < b)))
    if a_ in ("least", "greatest"):
        x0, fv = _extreme_f(v, p)
        return _logv(v["a"], fv) - 1
    if a_ == "ineq":
        if v["c"] != 0:
            raise ValueError("only for log compared with 0")
        return _ineq_rule(v, p, v["a"] > 1, v["a"])
    if a_ == "powlog":
        # log_a(a^k) = k log_a a taken as 0: (log_a x)^2 > 0, so every x > 0 but 1.
        return Union(Interval.open(0, 1), Interval.open(1, oo))
    raise ValueError(a_)


def m4(v, p):
    """For the least (greatest) value of log_a f, gives the value of f there, not its log."""
    if _ask(p) not in ("least", "greatest"):
        raise ValueError("only for least or greatest values")
    x0, fv = _extreme_f(v, p)
    return fv


def m5(v, p):
    """Drops the domain: forgets that the log of 0 or of a negative number is undefined."""
    a_ = _ask(p)
    if a_ == "ineq":
        return _ineq_rule(v, p, v["a"] > 1, v["a"] ** v["c"], keep_domain=False)
    if a_ == "powlog":
        a, k = v["a"], v["k"]
        if not a > 1:
            raise ValueError("base above 1 only")
        return Union(Interval.open(-oo, a ** (-sqrt(k))), Interval.open(a ** sqrt(k), oo))
    raise ValueError(a_)


def m6(v, p):
    """Stops at the x where f is least (greatest) and gives that x as the value."""
    if _ask(p) not in ("least", "greatest"):
        raise ValueError("only for least or greatest values")
    x0, fv = _extreme_f(v, p)
    return x0


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
