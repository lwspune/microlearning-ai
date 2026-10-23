"""C08 Continued proportion: answer models (the key, and one per misconception).

Params (strings) pick the question; inputs (sympy) give its numbers.
  kind="mean":  a, c given; find b, the mean proportional of a and c.
  kind="first": b, c given; a, b, c in continued proportion; find a.
  kind="third": a, b given; a, b, c in continued proportion; find c.
  kind="sub":   a, b, c given; (a - x), (b - x), (c - x) in continued proportion; find x.
                (b - x) is the mean proportional.
"""
from sympy import Eq, Symbol, simplify, solve, sqrt

_x = Symbol("qx")


def _need(p, *kinds):
    if p["kind"] not in kinds:
        raise ValueError(f"needs a {'/'.join(kinds)} question")


def _one(sols):
    if len(sols) != 1:
        raise ValueError("no single solution")
    return simplify(sols[0])


def _pos(sols):
    """The positive root (the book takes the positive mean proportional)."""
    good = [s for s in sols if s.is_positive]
    return _one(good)


def _sub_solve(first, mid, last):
    """x with (mid - x)^2 = (first - x)(last - x), straight from (first - x)/(mid - x) = (mid - x)/(last - x)."""
    sols = [s for s in solve(Eq((first - _x) * (last - _x), (mid - _x) ** 2), _x)
            if (mid - s) != 0 and (last - s) != 0]
    return _one(sols)


def key(v, p):
    k = p["kind"]
    if k == "mean":
        b = Symbol("qb")
        return _pos(solve(Eq(v["a"] / b, b / v["c"]), b))
    if k == "first":
        a = Symbol("qa")
        return _one(solve(Eq(a / v["b"], v["b"] / v["c"]), a))
    if k == "third":
        c = Symbol("qc")
        return _one(solve(Eq(v["a"] / v["b"], v["b"] / c), c))
    if k == "sub":
        return _sub_solve(v["a"], v["b"], v["c"])
    raise ValueError("unknown kind")


def m1(v, p):
    """Takes the mean proportional as the average: b = (a + c)/2."""
    _need(p, "mean", "first", "third")
    k = p["kind"]
    if k == "mean":
        return (v["a"] + v["c"]) / 2
    if k == "first":
        return 2 * v["b"] - v["c"]
    return 2 * v["b"] - v["a"]


def m2(v, p):
    """Forgets the square: writes b = ac instead of b^2 = ac."""
    _need(p, "mean", "first", "third")
    k = p["kind"]
    if k == "mean":
        return v["a"] * v["c"]
    if k == "first":
        return simplify(v["b"] / v["c"])
    return simplify(v["b"] / v["a"])


def m3(v, p):
    """Squares the first term instead of the middle one: a^2 = bc."""
    _need(p, "first", "third", "sub")
    k = p["kind"]
    if k == "first":
        a = Symbol("qa")
        return _pos(solve(Eq(a ** 2, v["b"] * v["c"]), a))
    if k == "third":
        return simplify(v["a"] ** 2 / v["b"])
    # (a - x)^2 = (b - x)(c - x): the first term taken as the mean proportional.
    return _sub_solve(v["b"], v["a"], v["c"])


def m4(v, p):
    """Loses the minus sign when dividing at the last step: -kx = -m read as x = -m/k."""
    _need(p, "sub")
    return -key(v, p)


def m5(v, p):
    """Expands (b - x)^2 as b^2 - bx + x^2: forgets the 2 in the middle term."""
    _need(p, "sub")
    a, b, c = v["a"], v["b"], v["c"]
    sols = solve(Eq(b ** 2 - b * _x + _x ** 2, (a - _x) * (c - _x)), _x)
    return _one(sols)


def m6(v, p):
    """Halves instead of taking the square root: b = ac/2."""
    _need(p, "mean")
    return v["a"] * v["c"] / 2


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
