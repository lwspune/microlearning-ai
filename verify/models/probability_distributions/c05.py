"""C05 Probability density function: answer models (the key, and one per misconception).

Inputs: lo, hi, the ends of the range where f is non-zero (f = 0 outside); for ask "prob" also
c, d, the event's interval c < X < d inside the range.
Params:
  f    the p.d.f. on its range, a sympy string in x; for ask "k", the function g in f = k g.
  ask  "k"     the constant k that makes k g a p.d.f.;
       "valid" the number the verdict on "is f a p.d.f.?" hangs on: the key gives the total
               area (1 when f >= 0 and the area is 1);
       "prob"  P(c < X < d).
  event (ask "prob"): "lt" (X < d, c = lo), "gt" (X > c, d = hi), "abs" (|X| < d, c = -d),
        or "between".
The key integrates straight from the definition and is cross-checked by numerical quadrature.
"""
import mpmath
from sympy import Integer, N, Poly, integrate, lambdify, maximum, Interval, symbols, sympify

x = symbols("x", real=True)


def _f(p):
    return sympify(p["f"], locals={"x": x})


def _quad(f, a, b):
    g = lambdify(x, f, "mpmath")
    return float(mpmath.quad(g, [float(N(a)), float(N(b))]))


def _area(f, a, b):
    """The exact integral of f over (a, b), checked against quadrature."""
    s = integrate(f, (x, a, b))
    assert abs(float(N(s)) - _quad(f, a, b)) < 1e-9, (f, a, b, s)
    return s


def key(v, p):
    f, lo, hi = _f(p), v["lo"], v["hi"]
    ask = p["ask"]
    if ask == "k":
        return (1 / _area(f, lo, hi)).simplify()
    if ask == "valid":
        g = lambdify(x, f, "math")
        n = 400
        low = min(g(float(N(lo)) + (float(N(hi)) - float(N(lo))) * i / n) for i in range(n + 1))
        if low < 0:
            raise ValueError("f takes negative values: not a p.d.f. (no area verdict)")
        return _area(f, lo, hi).simplify()
    if ask == "prob":
        return _area(f, v["c"], v["d"]).simplify()
    raise ValueError(ask)


def m1(v, p):
    """Takes the height f(x) for a probability, so it may never pass 1: makes the highest point 1
    (ask k), or rejects f because it rises above 1 (ask valid; the value is that highest height)."""
    f, lo, hi = _f(p), v["lo"], v["hi"]
    top = maximum(f, x, Interval(lo, hi))
    if p["ask"] == "k":
        return (1 / top).simplify()
    if p["ask"] == "valid":
        if top <= 1:
            raise ValueError("f never passes 1: this student agrees with the key")
        return top
    raise ValueError("M1 is modelled on k and validity items")


def m2(v, p):
    """Takes P(c < X < d) as f(d) - f(c): the difference of heights, not the area between."""
    if p["ask"] != "prob":
        raise ValueError("M2 is modelled on probability items")
    f = _f(p)
    return (f.subs(x, v["d"]) - f.subs(x, v["c"])).simplify()


def _no_division(f):
    """The antiderivative with the 1/(n + 1) dropped: each c x^n becomes c x^(n + 1)."""
    poly = Poly(f, x)
    return sum((c * x ** (m[0] + 1) for m, c in poly.terms()), Integer(0))


def m3(v, p):
    """Integrates x^n as x^(n + 1), dropping the division by n + 1."""
    f, lo, hi = _f(p), v["lo"], v["hi"]
    F = _no_division(f)
    if p["ask"] == "prob":
        a, b = v["c"], v["d"]
    else:
        a, b = lo, hi
    s = (F.subs(x, b) - F.subs(x, a)).simplify()
    if p["ask"] == "k":
        if s == 0:
            raise ValueError("the slip gives area 0: no k")
        return (1 / s).simplify()
    return s


def m4(v, p):
    """Ignores the part of the range left of the Y-axis: every integral starts at x = 0 at the
    earliest, as if X were never negative."""
    f, lo, hi = _f(p), v["lo"], v["hi"]
    if p["ask"] == "prob":
        a, b = v["c"], v["d"]
    else:
        a, b = lo, hi
    if a >= 0:
        raise ValueError("no negative part: this student agrees with the key")
    a = Integer(0)
    s = integrate(f, (x, a, b)) if b > a else Integer(0)
    if p["ask"] == "k":
        return (1 / s).simplify()
    return s.simplify()


def m5(v, p):
    """Integrates over the wrong side of the cut: finds P(X < c) when asked for P(X > c), and the
    other way round."""
    if p["ask"] != "prob" or p.get("event") not in ("lt", "gt"):
        raise ValueError("M5 is modelled on one-sided events")
    f, lo, hi = _f(p), v["lo"], v["hi"]
    if p["event"] == "gt":
        return integrate(f, (x, lo, v["c"])).simplify()
    return integrate(f, (x, v["d"], hi)).simplify()


def m6(v, p):
    """Sets k equal to the area under g, instead of solving k x (area) = 1."""
    if p["ask"] != "k":
        raise ValueError("M6 is modelled on k items")
    return integrate(_f(p), (x, v["lo"], v["hi"])).simplify()


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
