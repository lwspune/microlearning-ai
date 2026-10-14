"""C11 Solving inequalities as intervals: answer models (the key, and one per misconception).

Inputs: lhs, rhs (sympy expressions in x). params["op"]: one of < <= > >=.
The inequality is lhs op rhs; every answer is a subset of R (Interval or Union).
"""
from sympy import Interval, S, Symbol, Union, fraction, oo, roots, solveset, together, Poly

x = Symbol("x", real=True)

_OPS = {
    "<": lambda a, b: a < b,
    "<=": lambda a, b: a <= b,
    ">": lambda a, b: a > b,
    ">=": lambda a, b: a >= b,
}
_FLIP = {"<": ">", "<=": ">=", ">": "<", ">=": "<="}


def _ex(v, k):
    return v[k].subs({s: x for s in v[k].free_symbols if s.name == "x"})


def _solve(expr, op):
    return solveset(_OPS[op](expr, 0), x, S.Reals)


def _normal(v, p):
    """lhs − rhs as one fraction N/D, with N's leading coefficient made positive (op flipped if needed)."""
    num, den = fraction(together(_ex(v, "lhs") - _ex(v, "rhs")))
    lc = Poly(num, x).LC()
    op = p["op"]
    if lc < 0:
        num, op = -num, _FLIP[op]
    return num, den, op, lc


def key(v, p):
    """Straight from the definition: the real x that satisfy lhs op rhs."""
    return solveset(_OPS[p["op"]](_ex(v, "lhs"), _ex(v, "rhs")), x, S.Reals)


def m1(v, p):
    """Divides through by the negative leading coefficient without flipping the sign."""
    num, den, op, lc = _normal(v, p)
    if lc > 0:
        raise ValueError("no negative coefficient to divide by")
    return _solve(num / den, p["op"])  # the sign is kept as it was


def m2(v, p):
    """Factor by factor: each linear factor takes the sign of the inequality, and all must hold
    (a product > 0 read as 'both factors > 0', missing the both-negative case)."""
    num, den, op, _ = _normal(v, p)
    rn = roots(Poly(num, x))
    rd = roots(Poly(den, x)) if den.has(x) else {}
    if sum(rn.values()) + sum(rd.values()) < 2:
        raise ValueError("needs two linear factors")
    strict = op.rstrip("=")
    out = S.Reals
    for r in rn:
        out = out.intersect(_solve(x - r, op))
    for r in rd:
        out = out.intersect(_solve(x - r, strict))
    return out


def m3(v, p):
    """Multiplies both sides by the denominator as if it were positive (cross-multiplying)."""
    num, den = fraction(together(_ex(v, "lhs")))
    if not den.has(x):
        raise ValueError("no denominator in x")
    return _solve(num - _ex(v, "rhs") * den, p["op"])


def _toggle(iv):
    a, b = iv.start, iv.end
    lo = True if a == -oo else not iv.left_open
    hi = True if b == oo else not iv.right_open
    return Interval(a, b, lo, hi)


def m4(v, p):
    """Swaps the brackets: square for a strict sign, round for <= or >= (so the denominator's zero
    gets a square bracket too)."""
    k = key(v, p)
    parts = k.args if isinstance(k, Union) else (k,)
    if not all(isinstance(i, Interval) for i in parts):
        raise ValueError("key is not a union of intervals")
    return Union(*[_toggle(i) for i in parts])


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4}
