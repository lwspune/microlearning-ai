"""C06 Greatest integer and fractional part: answer models (the key, and one per misconception).

[u] is the greatest integer at or below u; {u} = u - [u].
Params:
  ask: "eval"   the number expr, written with F(u) for [u] and P(u) for {u} (param expr);
       "ineq"   the real x with lo < [x] <= hi (inputs lo, hi);
       "lin"    the real x with c[a x + b] + d = e (inputs a, b, c, d, e);
       "quad"   the real x with [x^2] + p[x] + q = 0 (inputs p, q);
       "range"  the range of f(x) = [x] - x over R.
Each model is a reading of [u] = n: the set of u it believes gives n (`_pre`), or, for M4 and M6,
a rewrite of the equation. The key uses the definition: [u] = n exactly when n <= u < n + 1.
"""
from sympy import Abs, Function, Integer, Interval, Rational, S, Symbol, Union, floor, solveset, sympify

x = Symbol("x", real=True)
F, P = Function("F"), Function("P")
HALF = Rational(1, 2)
NS = range(-12, 13)  # enough integers n for every item's numbers


def _pre(kind, n):
    """The u with [u] = n, as the model reads [u]."""
    n = Integer(n)
    if kind == "floor":
        return Interval.Ropen(n, n + 1)
    if kind == "trunc":  # drops the decimal part: rounds towards 0
        if n > 0:
            return Interval.Ropen(n, n + 1)
        if n < 0:
            return Interval.Lopen(n - 1, n)
        return Interval.open(-1, 1)
    if kind == "round":  # the nearest integer, halves rounded up
        return Interval.Ropen(n - HALF, n + HALF)
    if kind == "closed":  # both ends in: n <= u <= n + 1
        return Interval(n, n + 1)
    raise ValueError(kind)


def _lin_pre(s, a, b):
    """The x with a x + b in the interval s."""
    if s == S.EmptySet:
        return s
    lo, hi = (s.start - b) / a, (s.end - b) / a
    if a > 0:
        return Interval(lo, hi, s.left_open, s.right_open)
    return Interval(hi, lo, s.right_open, s.left_open)


def _square_pre(s):
    """The real x with x^2 in the interval s."""
    lo = solveset(x**2 > s.start if s.left_open else x**2 >= s.start, x, S.Reals)
    hi = solveset(x**2 < s.end if s.right_open else x**2 <= s.end, x, S.Reals)
    return lo & hi


def _solve(kind, v, p):
    """The answer when [u] = n is read as u in _pre(kind, n)."""
    ask = p["ask"]
    if ask == "ineq":
        return Union(*[_pre(kind, n) for n in NS if v["lo"] < n <= v["hi"]])
    if ask == "lin":
        n = (v["e"] - v["d"]) / v["c"]
        return _lin_pre(_pre(kind, n), v["a"], v["b"]) if n.is_integer else S.EmptySet
    if ask == "quad":
        out = S.EmptySet
        for n in NS:
            m = -v["p"] * n - v["q"]
            out = out | (_pre(kind, n) & _square_pre(_pre(kind, m)))
        return out
    if ask == "range":
        out = S.EmptySet
        for n in NS:
            s = _pre(kind, n)
            out = out | Interval(n - s.end, n - s.start, s.right_open, s.left_open)
        return out
    raise ValueError(ask)


def _round(u):
    return floor(u + HALF)


def _eval(p, gi, frac):
    return sympify(p["expr"], locals={"F": F, "P": P}).replace(F, gi).replace(P, frac)


def _has_negative_frac(p):
    e = sympify(p["expr"], locals={"F": F, "P": P})
    return any(a.args[0] < 0 for a in e.atoms(P))


def key(v, p):
    if p["ask"] == "eval":
        return _eval(p, floor, lambda u: u - floor(u))
    return _solve("floor", v, p)


def m1(v, p):
    """Drops the decimal part: [-2.3] = -2, so {-2.3} = -0.3."""
    if p["ask"] == "eval":
        trunc = lambda u: Integer(int(u))
        return _eval(p, trunc, lambda u: u - trunc(u))
    return _solve("trunc", v, p)


def m2(v, p):
    """Takes {x} as the digits after the decimal point: {-1.25} = 0.25."""
    if p["ask"] != "eval" or not _has_negative_frac(p):
        raise ValueError("M2 needs the fractional part of a negative number")
    return _eval(p, floor, lambda u: Abs(u) - floor(Abs(u)))


def m3(v, p):
    """Rounds to the nearest integer: [2.7] = 3."""
    if p["ask"] == "eval":
        return _eval(p, _round, lambda u: u - _round(u))
    return _solve("round", v, p)


def m4(v, p):
    """Reads [u] as ordinary brackets, [u] = u, and solves as usual."""
    ask = p["ask"]
    if ask == "ineq":
        return Interval.Lopen(v["lo"], v["hi"])
    if ask == "lin":
        return solveset(v["c"] * (v["a"] * x + v["b"]) + v["d"] - v["e"], x, S.Reals)
    if ask == "quad":
        return solveset(x**2 + v["p"] * x + v["q"], x, S.Reals)
    raise ValueError("M4 is about equations and inequalities")


def m5(v, p):
    """Takes both ends of a step: [u] = n for n <= u <= n + 1."""
    if p["ask"] == "eval":
        raise ValueError("M5 is about intervals")
    return _solve("closed", v, p)


def m6(v, p):
    """Passes the brackets through powers and multiples: [x^2] = [x]^2, [ax + b] = a[x] + b."""
    ask = p["ask"]
    if ask == "lin":
        if v["a"] == 1:
            raise ValueError("[x + b] = [x] + b is right for an integer b")
        n = ((v["e"] - v["d"]) / v["c"] - v["b"]) / v["a"]
        return _pre("floor", n) if n.is_integer else S.EmptySet
    if ask == "quad":
        return Union(*[_pre("floor", n) for n in NS if n**2 + v["p"] * n + v["q"] == 0])
    raise ValueError("M6 needs [x^2] or [ax + b]")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
