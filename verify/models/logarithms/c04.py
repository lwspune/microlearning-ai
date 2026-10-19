"""C04 The unknown in the exponent: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  solve  a^x = b, v["a"], v["b"] rationals built from 2, 3 and 5; the student is given
         log 2 = 0.3010 and log 3 = 0.4771 (base 10) and rounds x to p["dp"] decimal places
  move   x + log_c(1 + p^x) = x log_c q + log_c r with c = p q (v["c"], v["p"], v["q"], v["r"]) -> x
  ineq   x^(log_a x) compared with a^k (v["a"], v["k"]), p["rel"] ">" or "<=" -> the set of x > 0
"""
from sympy import Abs, Interval, N, Rational, Symbol, Union, factorint, floor, log, nsolve, oo, solve, solve_univariate_inequality, sqrt

L2, L3 = Rational("0.3010"), Rational("0.4771")


def _ask(p):
    return p.get("ask", "solve")


def _glog(r):
    """log10 of a rational made of 2, 3 and 5, from the given values (log 5 = 1 - log 2)."""
    r = Rational(r)
    out = Rational(0)
    for sign, n in ((1, r.p), (-1, r.q)):
        for prime, e in factorint(n).items():
            if prime == 2:
                out += sign * e * L2
            elif prime == 3:
                out += sign * e * L3
            elif prime == 5:
                out += sign * e * (1 - L2)
            else:
                raise ValueError(f"no given value for log {prime}")
    return out


def _round(x, p):
    """Round to p["dp"] decimal places, halves away from zero (no ties are used)."""
    k = 10 ** int(p.get("dp", "2"))
    x = Rational(x)
    m = floor(Abs(x) * k + Rational(1, 2))
    return (1 if x >= 0 else -1) * Rational(m, k)


def _solve_given(a, b, p):
    """The correct method with the given values: x = log b / log a, rounded."""
    return _round(_glog(b) / _glog(a), p)


def _t(v):
    """The positive value of t = p^x in t(1 + t) = r (the comparison after moving x into a log)."""
    ts = [t for t in solve(Symbol("t") ** 2 + Symbol("t") - v["r"], Symbol("t")) if t > 0]
    return ts[0]


def _ineq_parts(v, p):
    a, k = v["a"], v["k"]
    lo, hi = a ** (-sqrt(k)), a ** sqrt(k)
    return a, k, lo, hi, p.get("rel", ">")


def key(v, p):
    a = _ask(p)
    if a == "solve":
        exact = log(v["b"]) / log(v["a"])
        x = _round(Rational(str(N(exact, 30))), p)
        if x != _solve_given(v["a"], v["b"], p):
            raise ValueError("the given values round differently from the exact answer")
        return x
    if a == "move":
        c, pp, q, r = v["c"], v["p"], v["q"], v["r"]
        if c != pp * q:
            raise ValueError("needs c = p q")
        y = Symbol("y")
        root = nsolve(y + log(1 + pp**y) / log(c) - y * log(q) / log(c) - log(r) / log(c), y, 1)
        x = log(_t(v)) / log(pp)
        if abs(N(x - root, 20)) > 1e-12:
            raise ValueError("exact form does not match the numerical root")
        return x
    if a == "ineq":
        base, k, _, _, rel = _ineq_parts(v, p)
        x = Symbol("x", positive=True)
        f = log(x) ** 2 - k * log(base) ** 2
        cond = f > 0 if rel == ">" else f <= 0
        return solve_univariate_inequality(cond, x, relational=False, domain=Interval.open(0, oo))
    raise ValueError(a)


def m1(v, p):
    """Turns the quotient of logs into the log of a quotient: x = log b - log a."""
    a = _ask(p)
    if a == "solve":
        return _round(_glog(v["b"]) - _glog(v["a"]), p)
    if a == "move":
        return log(_t(v) / v["p"]) / log(10)
    raise ValueError("only where x = log b / log a")


def m2(v, p):
    """Puts the logs upside down: x = log a / log b, the log of the base on top."""
    a = _ask(p)
    if a == "solve":
        return _round(_glog(v["a"]) / _glog(v["b"]), p)
    if a == "move":
        return log(v["p"]) / log(_t(v))
    raise ValueError("only where x = log b / log a")


def m3(v, p):
    """Takes the log of a number below 1 as positive: log 0.2 = 1 - log 2 instead of log 2 - 1."""
    if _ask(p) != "solve":
        raise ValueError("only for a^x = b with given values")
    a, b = Rational(v["a"]), Rational(v["b"])
    if a >= 1 and b >= 1:
        raise ValueError("needs a number below 1")
    la, lb = Abs(_glog(a)), Abs(_glog(b))
    return _round(lb / la, p)


def m4(v, p):
    """Stops at the helper unknown: gives t = p^x, or the condition on u = log_a x, as the answer for x."""
    a = _ask(p)
    if a == "move":
        return _t(v)
    if a == "ineq":
        _, k, _, _, rel = _ineq_parts(v, p)
        if rel == ">":
            return Interval.open(sqrt(k), oo)
        return Interval.Lopen(0, sqrt(k))
    raise ValueError("only where a helper unknown is used")


def m5(v, p):
    """Takes only the positive square root: u^2 > k read as u > sqrt k (u^2 <= k as u <= sqrt k)."""
    if _ask(p) != "ineq":
        raise ValueError("only for inequalities")
    _, _, _, hi, rel = _ineq_parts(v, p)
    return Interval.open(hi, oo) if rel == ">" else Interval.Lopen(0, hi)


def m6(v, p):
    """Takes the wrong region of a squared inequality: u^2 > k read as between the roots, u^2 <= k as outside."""
    if _ask(p) != "ineq":
        raise ValueError("only for inequalities")
    _, _, lo, hi, rel = _ineq_parts(v, p)
    if rel == ">":
        return Interval.open(lo, hi)
    return Union(Interval.Lopen(0, lo), Interval(hi, oo))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
