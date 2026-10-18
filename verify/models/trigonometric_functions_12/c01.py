"""C01 Principal solutions: answer models (the key, and one per misconception).

Inputs: k, the value of the ratio; m (optional, default 1), the multiple in f(m theta) = k.
params["f"]: the ratio, one of sin, cos, tan, cot, sec, cosec.
Every answer is the FiniteSet of solutions theta (in radians).
"""
from sympy import FiniteSet, Integer, Rational, acos, asin, atan, cos, cot, csc, pi, sec, simplify, sin, tan

FUNCS = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}
# The reciprocal ratios turned over: cosec -> sin, sec -> cos, cot -> tan.
BASE = {"sin": "sin", "cosec": "sin", "cos": "cos", "sec": "cos", "tan": "tan", "cot": "tan"}
# Quadrants where the base ratio is positive / negative.
QUADS = {"sin": ((1, 2), (3, 4)), "cos": ((1, 4), (2, 3)), "tan": ((1, 3), (2, 4))}


def _args(v, p):
    f = p["f"]
    if f not in FUNCS:
        raise ValueError(f"unknown ratio {f}")
    k, m = v["k"], v.get("m", Integer(1))
    return f, k, m


def key(v, p):
    """From the definition: every theta in [0, 2pi) with f(m theta) = k. The book's values are
    standard, so every solution is a multiple of pi/(12m); each candidate is checked exactly."""
    f, k, m = _args(v, p)
    fn = FUNCS[f]
    n = 24 * m
    sols = [Rational(j, 12 * m) * pi for j in range(n) if simplify(fn(m * Rational(j, 12 * m) * pi) - k) == 0]
    if not sols:
        raise ValueError("no standard-angle solution")
    return FiniteSet(*sols)


def _base_value(f, k):
    """The base ratio's value: cosec, sec and cot are turned over."""
    if f in ("cot", "sec", "cosec"):
        if k == 0:
            raise ValueError("can't turn over 0")
        return 1 / k
    return k


def _ref(b, kb):
    """The reference angle: acute, with |ratio| = |kb|."""
    a = abs(kb)
    alpha = {"sin": asin, "cos": acos, "tan": atan}[b](a)
    if b != "tan" and a > 1:
        raise ValueError("no solution")
    alpha = simplify(alpha)
    if not (0 < alpha < pi / 2):
        raise ValueError("quadrantal: no reference-angle method")
    return alpha


def _in_quadrant(q, alpha):
    return {1: alpha, 2: pi - alpha, 3: pi + alpha, 4: 2 * pi - alpha}[q]


def _phis(b, kb, alpha):
    """The angles phi in [0, 2pi): alpha placed in the quadrants where b has the sign of kb."""
    quads = QUADS[b][0 if kb > 0 else 1]
    return [_in_quadrant(q, alpha) for q in quads]


def _spread(phis, m):
    """theta = phi / m for phi over m full turns: all theta in [0, 2pi)."""
    return FiniteSet(*[(ph + 2 * pi * j) / m for ph in phis for j in range(int(m))])


def m1(v, p):
    """Ignores the sign of the value: places alpha in the quadrants where the ratio is positive."""
    f, k, m = _args(v, p)
    if not k < 0:
        raise ValueError("only for a negative value")
    b, kb = BASE[f], _base_value(f, k)
    return _spread(_phis(b, -kb, _ref(b, kb)), m)


def m2(v, p):
    """Takes the second solution as pi - alpha for every ratio, as for sine."""
    f, k, m = _args(v, p)
    b, kb = BASE[f], _base_value(f, k)
    if b == "sin" or not kb > 0:
        raise ValueError("only for a positive cos or tan family value (sine's own pattern is right)")
    alpha = _ref(b, kb)
    return _spread([alpha, pi - alpha], m)


def m3(v, p):
    """Confuses the principal solutions with the principal value: gives the one value of the
    inverse function (sin^-1 in [-pi/2, pi/2], cos^-1 in [0, pi], tan^-1 in (-pi/2, pi/2),
    cot^-1 in (0, pi), sec^-1 = cos^-1(1/k), cosec^-1 = sin^-1(1/k))."""
    f, k, m = _args(v, p)
    if m != 1:
        raise ValueError("only for f(theta) = k")
    val = {
        "sin": lambda: asin(k), "cos": lambda: acos(k), "tan": lambda: atan(k),
        "cot": lambda: pi / 2 - atan(k), "sec": lambda: acos(1 / k), "cosec": lambda: asin(1 / k),
    }[f]()
    return FiniteSet(simplify(val))


def m4(v, p):
    """Writes the fourth-quadrant solution as -alpha, outside 0 <= theta < 2pi."""
    f, k, m = _args(v, p)
    if m != 1:
        raise ValueError("only for f(theta) = k")
    b, kb = BASE[f], _base_value(f, k)
    alpha = _ref(b, kb)
    quads = QUADS[b][0 if kb > 0 else 1]
    if 4 not in quads:
        raise ValueError("no fourth-quadrant solution")
    return FiniteSet(*[-alpha if q == 4 else _in_quadrant(q, alpha) for q in quads])


def m5(v, p):
    """Solves for m theta in one turn only, then divides by m: misses the solutions from the other turns."""
    f, k, m = _args(v, p)
    if m == 1:
        raise ValueError("only for a multiple angle")
    b, kb = BASE[f], _base_value(f, k)
    return FiniteSet(*[ph / m for ph in _phis(b, kb, _ref(b, kb))])


def m6(v, p):
    """Swaps the standard values of pi/6 and pi/3 (takes sin pi/3 = 1/2, tan pi/6 = sqrt 3)."""
    f, k, m = _args(v, p)
    b, kb = BASE[f], _base_value(f, k)
    alpha = _ref(b, kb)
    swap = {pi / 6: pi / 3, pi / 3: pi / 6}
    if alpha not in swap:
        raise ValueError("only for a reference angle of pi/6 or pi/3")
    return _spread(_phis(b, kb, swap[alpha]), m)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
