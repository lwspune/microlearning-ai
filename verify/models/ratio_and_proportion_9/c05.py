"""C05 Invertendo to componendo-dividendo: answer models (the key, and one per misconception).

Inputs (sympy):
  kind="fwd": given a/b = t, find (p a^n + q b^n)/(r a^n + s b^n).   inputs t, p, q, r, s, n
  kind="rev": given (p a^n + q b^n)/(p a^n - q b^n) = c/d, find a/b. inputs p, q, n, c, d
"""
from sympy import Symbol, sign, solve

_t = Symbol("t", positive=True)


def _need(p, kind):
    if p["kind"] != kind:
        raise ValueError(f"needs a {kind} question")


def _fwd(v, t, coef=lambda c: c, power=True):
    n = v["n"] if power else 1
    P, Q, R, S = (coef(v[k]) for k in "pqrs")
    den = R * t**n + S
    if den == 0:
        raise ValueError("zero denominator")
    return (P * t**n + Q) / den


def _rev_root(v, tn):
    """a/b from a value of a^n/b^n."""
    sols = [s for s in solve(_t**v["n"] - tn, _t) if s.is_positive]
    if len(sols) != 1:
        raise ValueError("no single positive root")
    return sols[0]


def key(v, p):
    if p["kind"] == "fwd":
        return _fwd(v, v["t"])   # a = t*b substituted straight in; b cancels
    # solve the given equation for a/b = t directly
    P, Q, n, c, d = v["p"], v["q"], v["n"], v["c"], v["d"]
    sols = [s for s in solve(d * (P * _t**n + Q) - c * (P * _t**n - Q), _t) if s.is_positive]
    if len(sols) != 1:
        raise ValueError("no single positive answer")
    return sols[0]


def m1(v, p):
    """Ignores the coefficients: applies componendo / componendo-dividendo to a/b itself."""
    if p["kind"] == "fwd":
        return _fwd(v, v["t"], coef=sign)
    c, d = v["c"], v["d"]
    return _rev_root(v, (c + d) / (c - d))


def m2(v, p):
    """Treats a^n/b^n as if it were a/b (forgets the power)."""
    if v["n"] == 1:
        raise ValueError("needs a power")
    if p["kind"] == "fwd":
        return _fwd(v, v["t"], power=False)
    P, Q, c, d = v["p"], v["q"], v["c"], v["d"]
    return Q * (c + d) / (P * (c - d))   # stops at a^n/b^n


def m3(v, p):
    """Gives the reciprocal: misses (or doubles) the invertendo step."""
    return 1 / key(v, p)


def m4(v, p):
    """Misreads alternendo: from a/b = 7/3 writes a/3 = b/7, so a = 3k, b = 7k."""
    _need(p, "fwd")
    return _fwd(v, 1 / v["t"])


def m5(v, p):
    """Turns componendo-dividendo upside down: pa^n/qb^n = (c - d)/(c + d)."""
    _need(p, "rev")
    P, Q, c, d = v["p"], v["q"], v["c"], v["d"]
    return _rev_root(v, Q * (c - d) / (P * (c + d)))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
