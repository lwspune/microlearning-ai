"""C03 General solutions of cos theta and tan theta: answer models (the key, and one per misconception).

Inputs: k, the value of the ratio; m (optional, default 1), the multiple in f(m theta) = k.
params["f"]: the ratio, one of cos, sec, tan, cot.
A general solution has many equivalent forms, so every answer is compared by its solution set
over a fixed window: the FiniteSet of all solutions theta with 0 <= theta < 4 pi (radians).
"""
from sympy import FiniteSet, Integer, Rational, acos, atan, ceiling, cos, cot, pi, sec, simplify, tan

FUNCS = {"cos": cos, "sec": sec, "tan": tan, "cot": cot}
BASE = {"cos": "cos", "sec": "cos", "tan": "tan", "cot": "tan"}
LO, HI = Integer(0), 4 * pi


def _args(v, p):
    f = p["f"]
    if f not in FUNCS:
        raise ValueError(f"unknown ratio {f}")
    return f, v["k"], Rational(v.get("m", Integer(1)))


def window(forms, m=Integer(1), divide_period=True):
    """All theta in [0, 4 pi) of the families m theta = n P + c, n in Z, for (P, c) in forms.
    divide_period=False divides only c by m (the M6 slip)."""
    out = set()
    for P, c in forms:
        step = P / m if divide_period else P
        off = c / m
        n = ceiling((LO - off) / step)
        while True:
            th = simplify(n * step + off)
            if not th < HI:
                break
            out.add(th)
            n += 1
    return FiniteSet(*out)


def key(v, p):
    """From the definition: every theta in [0, 4 pi) with f(m theta) = k. The book's values are
    standard, so m theta is a multiple of pi/12: the candidates are theta = j pi / (12 m),
    each checked exactly."""
    f, k, m = _args(v, p)
    fn = FUNCS[f]
    step = pi / (12 * m)
    sols = []
    j = 0
    while j * step < HI:
        th = j * step
        val = fn(m * th)
        if val.is_finite and abs(float(val - k)) < 1e-9 and simplify(val - k) == 0:
            sols.append(th)
        j += 1
    if not sols:
        raise ValueError("no standard-angle solution")
    return FiniteSet(*sols)


def _base(f, k, absolute=False):
    """The base ratio (cos or tan) and its value: sec and cot are turned over."""
    b = BASE[f]
    kb = 1 / k if f in ("sec", "cot") else k
    if k == 0 and f in ("sec", "cot"):
        raise ValueError("can't turn over 0")
    if absolute:
        kb = abs(kb)
    return b, kb


def _alpha(b, kb):
    """The book's alpha: cos^-1 in [0, pi] for cosine, tan^-1 moved into [0, pi) for tangent."""
    if b == "cos":
        if abs(kb) > 1:
            raise ValueError("no solution")
        return simplify(acos(kb))
    a = simplify(atan(kb))
    return a + pi if a < 0 else a


def _right_forms(b, a):
    """cos: m theta = 2n pi +- alpha; tan: m theta = n pi + alpha."""
    return [(2 * pi, a), (2 * pi, -a)] if b == "cos" else [(pi, a)]


def m1(v, p):
    """Drops the minus: cos theta = cos alpha gives theta = 2n pi + alpha only."""
    f, k, m = _args(v, p)
    b, kb = _base(f, k)
    if b != "cos":
        raise ValueError("only for cosine")
    return window([(2 * pi, _alpha(b, kb))], m)


def m2(v, p):
    """Carries cosine's +- over to tangent: theta = n pi +- alpha."""
    f, k, m = _args(v, p)
    b, kb = _base(f, k)
    if b != "tan":
        raise ValueError("only for tangent")
    a = _alpha(b, kb)
    return window([(pi, a), (pi, -a)], m)


def m3(v, p):
    """Swaps the periods: cosine with n pi (theta = n pi +- alpha), tangent with 2n pi (theta = 2n pi + alpha)."""
    f, k, m = _args(v, p)
    b, kb = _base(f, k)
    a = _alpha(b, kb)
    return window([(pi, a), (pi, -a)] if b == "cos" else [(2 * pi, a)], m)


def m4(v, p):
    """Uses the sine form theta = n pi + (-1)^n alpha: n even gives 2k pi + alpha, n odd 2k pi + pi - alpha."""
    f, k, m = _args(v, p)
    b, kb = _base(f, k)
    a = _alpha(b, kb)
    return window([(2 * pi, a), (2 * pi, pi - a)], m)


def m5(v, p):
    """Ignores the sign of a negative value: uses the acute alpha of |k|."""
    f, k, m = _args(v, p)
    b, kb = _base(f, k)
    if not kb < 0:
        raise ValueError("only for a negative value")
    b, ka = _base(f, k, absolute=True)
    return window(_right_forms(b, _alpha(b, ka)), m)


def m6(v, p):
    """For f(m theta), divides only alpha by m: theta = 2n pi +- alpha/m, or n pi + alpha/m."""
    f, k, m = _args(v, p)
    if m == 1:
        raise ValueError("only for a multiple angle")
    b, kb = _base(f, k)
    return window(_right_forms(b, _alpha(b, kb)), m, divide_period=False)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
