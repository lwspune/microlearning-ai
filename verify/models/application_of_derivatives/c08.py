"""C08 Increasing and decreasing functions: answer models (the key, and one per misconception).

Every item asks for the set of x where f is strictly increasing (want = "inc") or strictly
decreasing (want = "dec"), as a sympy Interval or Union of open intervals.
Inputs: f, a sympy expression in x. Params: want, "inc" or "dec".
The key solves f'(x) > 0 (or < 0) on the domain of f, then checks the answer against the
definition: on sampled points, f rises (or falls) inside each piece of the answer and fails to
somewhere in each piece of the domain left out.
"""
from sympy import (
    FiniteSet, Interval, Rational, S, Symbol, Union, diff, oo, simplify, solveset,
    sympify,
)

from sympy.calculus.util import continuous_domain

x = Symbol("x", real=True)


def _f(v):
    return sympify(v["f"], locals={"x": x}).subs(Symbol("x"), x)


def _domain(f):
    return continuous_domain(f, x, S.Reals)


def _sign_set(g, want, dom):
    """Where g > 0 (want "inc") or g < 0 (want "dec"), within dom."""
    rel = g > 0 if want == "inc" else g < 0
    return solveset(rel, x, dom)


def _pieces(s):
    return list(s.args) if isinstance(s, Union) else [s]


def _window(s):
    """Finite sample points inside each interval of s (at most 60 per piece)."""
    out = []
    for iv in _pieces(s):
        if not isinstance(iv, Interval):
            continue
        lo = iv.start if iv.start != -oo else (iv.end - 20 if iv.end != oo else -20)
        hi = iv.end if iv.end != oo else lo + 20 + (abs(lo) if lo < 0 else 0)
        lo, hi = float(lo), float(hi)
        pts = [lo + (hi - lo) * (k + 0.5) / 60 for k in range(60)]
        out.append(pts)
    return out


def _check(f, want, ans, dom):
    """The definition: f strictly monotone on each piece of ans, and not on what dom leaves out."""
    fn = lambda t: float(f.subs(x, t).evalf())
    ok = (lambda a, b: b > a) if want == "inc" else (lambda a, b: b < a)
    for pts in _window(ans):
        vals = [fn(t) for t in pts]
        assert all(ok(a, b) for a, b in zip(vals, vals[1:])), f"key fails the definition on {ans}"
    rest = dom - ans
    for pts in _window(rest):
        if len(pts) < 2:
            continue
        vals = [fn(t) for t in pts]
        assert not all(ok(a, b) for a, b in zip(vals, vals[1:])), f"key misses part of {rest}"


def key(v, p):
    f = _f(v)
    dom = _domain(f)
    ans = _sign_set(diff(f, x), p["want"], dom)
    _check(f, p["want"], ans, dom)
    return ans


def m1(v, p):
    """Reads the sign of f' the wrong way round: reports where f' has the other sign."""
    f = _f(v)
    other = "dec" if p["want"] == "inc" else "inc"
    return _sign_set(diff(f, x), other, _domain(f))


def m2(v, p):
    """Forgets the points where f is undefined: joins the pieces of the answer across them."""
    f = _f(v)
    ans = key(v, p)
    eps = Rational(1, 10**6)
    dom = _domain(f)
    holes = [h for h in dom.boundary if h.is_finite and h not in dom and dom.contains(h - eps) and dom.contains(h + eps)]
    joined = Union(ans, FiniteSet(*[h for h in holes if ans.contains(h - eps) and ans.contains(h + eps)]))
    if joined == ans:
        raise ValueError("no gap in the domain inside the answer")
    return joined


def m3(v, p):
    """Gives f-values, not x-values: each piece (a, b) becomes the interval between f(a) and f(b)."""
    f = _f(v)
    out = []
    for iv in _pieces(key(v, p)):
        if not isinstance(iv, Interval) or not (iv.start.is_finite and iv.end.is_finite):
            raise ValueError("needs finite ends")
        fa, fb = simplify(f.subs(x, iv.start)), simplify(f.subs(x, iv.end))
        if not (fa.is_finite and fb.is_finite):
            raise ValueError("f undefined at an end")
        out.append(Interval.open(min(fa, fb), max(fa, fb)))
    return Union(*out)


def m4(v, p):
    """Tests the sign of f'' instead of f'."""
    f = _f(v)
    return _sign_set(diff(f, x, 2), p["want"], _domain(f))


def m5(v, p):
    """Solves f'(x) = 0 with the signs of the roots flipped: (x + 2)(x + 6) = 0 read as x = 2, 6."""
    f = _f(v)
    fp = diff(f, x)
    if not (f.is_polynomial(x) and fp.as_poly(x).degree() == 2):
        raise ValueError("quadratic f' only")
    out = _sign_set(fp.subs(x, -x), p["want"], _domain(f))
    if out == key(v, p):
        raise ValueError("roots symmetric about 0: same as the key")
    return out


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
