"""C12 Absolute maximum and minimum on a closed interval: answer models (the key, and one per misconception).

Inputs: f, a sympy expression in x, continuous on [a, b]; a and b, the ends of the closed interval.
Params: ask, one of
  "max" / "min":     the absolute maximum / minimum value of f on [a, b];
  "maxat" / "minat": the point(s) of [a, b] at which f takes that value.
The key comes from sympy's own maximum()/minimum() over the interval (not from the candidate
method being taught), checked against f at 400 sampled points; the points are the solutions of
f(x) = that value in [a, b]. The misconception models run the candidate method with one wrong rule.
A critical point is where f' = 0, or where f' does not exist while f does.
"""
from sympy import FiniteSet, Interval, S, Symbol, diff, fraction, simplify, solve, solveset, sympify, together
from sympy.calculus.util import continuous_domain, maximum, minimum

x = Symbol("x", real=True)


def _f(v):
    return sympify(v["f"], locals={"x": x}).subs(Symbol("x"), x)


def _ends(v):
    return sympify(v["a"]), sympify(v["b"])


def _ask(p):
    return {"max": ("max", True), "min": ("min", True), "maxat": ("max", False), "minat": ("min", False)}[p["ask"]]


def _finite(s, what):
    if not s.is_FiniteSet:
        raise ValueError(f"{what}: not finitely many points ({s})")
    return list(s)


def _critical(f, dom):
    """Critical points of f in dom: f' = 0, or f' undefined where f is defined."""
    d = diff(f, x)
    pts = set(_finite(solveset(simplify(d), x, dom), "f' = 0"))
    den = fraction(together(d))[1]
    if den.has(x):
        pts |= set(_finite(solveset(den, x, dom), "f' undefined"))
    return [c for c in pts if f.subs(x, c).is_finite]


def _pick(f, cands, kind, want_value):
    """The greatest (kind max) or least value of f over cands, or the point(s) where it occurs."""
    if not cands:
        raise ValueError("no candidates")
    vals = {c: simplify(f.subs(x, c)) for c in cands}
    pick = max if kind == "max" else min
    best = pick(vals.values(), key=lambda t: float(t))
    if want_value:
        return best
    at = sorted({c for c, t in vals.items() if simplify(t - best) == 0}, key=float)
    return at[0] if len(at) == 1 else FiniteSet(*at)


def _value(f, a, b, kind):
    I = Interval(a, b)
    val = maximum(f, x, I) if kind == "max" else minimum(f, x, I)
    fa, fb = float(a), float(b)
    for k in range(401):
        t = float(f.subs(x, fa + (fb - fa) * k / 400).evalf(20))
        assert (t <= float(val) + 1e-9) if kind == "max" else (t >= float(val) - 1e-9), "sampled past the extreme"
    return simplify(val)


def _points(f, a, b, val):
    try:
        at = _finite(solveset(f - val, x, Interval(a, b)), "points")
    except TypeError:  # solveset gives up on some radicals (x^(1/3)); solve, then keep the real roots in [a, b]
        at = [r for r in solve(f - val, x) if r.is_real and a <= r <= b]
    at = sorted(set(at), key=float)
    return at[0] if len(at) == 1 else FiniteSet(*at)


def key(v, p):
    f, (a, b) = _f(v), _ends(v)
    kind, want_value = _ask(p)
    val = _value(f, a, b, kind)
    return val if want_value else _points(f, a, b, val)


def m1(v, p):
    """Ignores the ends: compares f only at the critical points inside (a, b), the local extremes."""
    f, (a, b) = _f(v), _ends(v)
    kind, want_value = _ask(p)
    return _pick(f, _critical(f, Interval.open(a, b)), kind, want_value)


def m2(v, p):
    """Keeps every critical point of f, even those outside [a, b], along with the two ends."""
    f, (a, b) = _f(v), _ends(v)
    kind, want_value = _ask(p)
    crit = _critical(f, continuous_domain(f, x, S.Reals))
    if all(a <= c <= b for c in crit):
        raise ValueError("no critical point outside [a, b]")
    return _pick(f, crit + [a, b], kind, want_value)


def m3(v, p):
    """Mixes up the point and the value: gives the x where the extreme occurs when asked for f(x), and back."""
    f, (a, b) = _f(v), _ends(v)
    kind, want_value = _ask(p)
    val = _value(f, a, b, kind)
    return _points(f, a, b, val) if want_value else val


def m4(v, p):
    """Takes the extremes to be at the ends, as for a monotonic function: compares f(a) and f(b) only."""
    f, (a, b) = _f(v), _ends(v)
    kind, want_value = _ask(p)
    return _pick(f, [a, b], kind, want_value)


def m5(v, p):
    """Mixes up maximum and minimum: does the comparison right but reports the other extreme."""
    swap = {"max": "min", "min": "max", "maxat": "minat", "minat": "maxat"}
    return key(v, {**p, "ask": swap[p["ask"]]})


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5}
