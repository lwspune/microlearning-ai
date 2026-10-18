"""C06 Rolle's theorem: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["ask"]:

"c"        The values of c that Rolle's theorem gives for f on [a, b]: the points strictly inside (a, b)
           where f'(c) = 0, as a FiniteSet (EmptySet: "no such c, the theorem does not apply").
"verdict"  Which condition of Rolle's theorem fails for f on [a, b]: CONT (continuity on [a, b]),
           DIFF (differentiability on (a, b)), ENDS (f(a) = f(b)), or HOLDS (none fails).
           The items are chosen so that at most one condition fails.

Inputs: a, b (the ends). Params: ask, f (a sympy expression in x); for a function in two pieces,
also g and k: f on [a, k], g on [k, b]. Each piece is used only on its own side (limit() of a
Piecewise can take the wrong one-sided limit).
"""
from sympy import (
    EmptySet, FiniteSet, Interval, S, Symbol, fraction, limit, simplify,
    solveset, sympify, together,
)
from sympy.calculus.util import continuous_domain

x = Symbol("x", real=True)
h = Symbol("h", positive=True)

HOLDS = Symbol("holds")
CONT = Symbol("continuity")
DIFF = Symbol("differentiability")
ENDS = Symbol("end_values")


def _e(s):
    return sympify(s, locals={"x": x})


def _pieces(v, p):
    """[(expression, lo, hi)] covering [a, b]."""
    a, b = v["a"], v["b"]
    if "g" in p:
        k = _e(p["k"])
        return [(_e(p["f"]), a, k), (_e(p["g"]), k, b)]
    return [(_e(p["f"]), a, b)]


def _ends(v, p):
    ps = _pieces(v, p)
    return simplify(ps[0][0].subs(x, v["a"])), simplify(ps[-1][0].subs(x, v["b"]))


def _continuous(v, p):
    """Each piece continuous on its closed part, and neighbouring pieces meet."""
    ps = _pieces(v, p)
    for f, lo, hi in ps:
        if continuous_domain(f, x, Interval(lo, hi)) != Interval(lo, hi):
            return False
    for (f, _, k), (g, _, _) in zip(ps, ps[1:]):
        if simplify(f.subs(x, k) - g.subs(x, k)) != 0:
            return False
    return True


def _one_sided(f, t, side, ft=None):
    """The one-sided derivative of f at t from the difference quotient (side +1 right, -1 left)."""
    ft = f.subs(x, t) if ft is None else ft
    return limit((f.subs(x, t + side * h) - ft) / (side * h), h, 0)


def _finite(d):
    return d.is_finite and d.is_real


def _candidates(f, lo, hi):
    """Points of [lo, hi] where the formula for f'(x) is undefined (its denominator vanishes)."""
    _, den = fraction(together(f.diff(x)))
    if not den.has(x):
        return set()
    return set(solveset(den, x, Interval(lo, hi)))


def _bad_points(v, p):
    """The points of [a, b] where f has no derivative: (inside, at the ends)."""
    a, b = v["a"], v["b"]
    ps = _pieces(v, p)
    inside, ends = set(), set()
    for f, lo, hi in ps:
        for t in _candidates(f, lo, hi):
            if lo < t < hi:
                left, right = _one_sided(f, t, -1), _one_sided(f, t, 1)
                if not (_finite(left) and _finite(right) and simplify(left - right) == 0):
                    inside.add(t)
    for (f, _, k), (g, _, _) in zip(ps, ps[1:]):
        fk = f.subs(x, k)
        left, right = _one_sided(f, k, -1, fk), _one_sided(g, k, 1, fk)
        if not (_finite(left) and _finite(right) and simplify(left - right) == 0):
            inside.add(k)
    if not _finite(_one_sided(ps[0][0], a, 1)):
        ends.add(a)
    if not _finite(_one_sided(ps[-1][0], b, -1)):
        ends.add(b)
    return inside, ends


def _verdict(v, p):
    fails = []
    if not _continuous(v, p):
        fails.append(CONT)
    if _bad_points(v, p)[0]:
        fails.append(DIFF)
    fa, fb = _ends(v, p)
    if simplify(fa - fb) != 0:
        fails.append(ENDS)
    assert len(fails) <= 1, f"choose an item where at most one condition fails, not {fails}"
    return fails[0] if fails else HOLDS


def _fprime(p):
    assert "g" not in p, "c items use one formula"
    return _e(p["f"]).diff(x)


def key(v, p):
    a, b = v["a"], v["b"]
    if p["ask"] == "verdict":
        return _verdict(v, p)
    assert _verdict(v, p) == HOLDS, "a c item needs the theorem to apply"
    return FiniteSet(*solveset(_fprime(p), x, Interval.open(a, b)))


def m1(v, p):
    """Keeps every real root of f'(c) = 0, without checking that it lies strictly inside (a, b)."""
    if p["ask"] != "c":
        raise ValueError("only for c items")
    return FiniteSet(*solveset(_fprime(p), x, S.Reals))


def m2(v, p):
    """Checks only f(a) = f(b): equal end values mean the theorem applies."""
    if p["ask"] != "verdict":
        raise ValueError("only for verdict items")
    fa, fb = _ends(v, p)
    if simplify(fa - fb) != 0:
        raise ValueError("unequal ends: this gives the key")
    return HOLDS


def m3(v, p):
    """Reads a point where f has no derivative (a corner, a cusp, a vertical tangent) as a break."""
    if p["ask"] != "verdict":
        raise ValueError("only for verdict items")
    inside, ends = _bad_points(v, p)
    if not (inside or ends) or not _continuous(v, p):
        raise ValueError("needs f continuous with a point of [a, b] where it has no derivative")
    return CONT


def m4(v, p):
    """Takes c to be the midpoint of [a, b], as it is for every quadratic."""
    if p["ask"] != "c":
        raise ValueError("only for c items")
    return FiniteSet((v["a"] + v["b"]) / 2)


def m5(v, p):
    """Needs f differentiable on the closed interval [a, b], ends included."""
    if p["ask"] != "verdict":
        raise ValueError("only for verdict items")
    inside, ends = _bad_points(v, p)
    if inside or not ends:
        raise ValueError("applies only where f has no derivative at an end alone")
    return DIFF


def m6(v, p):
    """Thinks the theorem needs f(a) = f(b) = 0, so equal non-zero end values fail it."""
    fa, fb = _ends(v, p)
    if not (simplify(fa - fb) == 0 and fa != 0):
        raise ValueError("needs equal, non-zero end values")
    return ENDS if p["ask"] == "verdict" else EmptySet


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
