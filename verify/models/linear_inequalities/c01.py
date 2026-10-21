"""C01 Inequalities and their rules: answer models (the key, and one per misconception).

The inequality a*x + b (rel) c*x + d, with x taken from N, Z or R.
Inputs (sympy numbers): a, b, c, d. Params:
  rel: "<", ">", "<=" or ">=";
  dom: "N" (natural numbers, from 1), "Z" (integers) or "R" (real numbers).
Answers: a FiniteSet (or EmptySet) when the solutions are finitely many, a Range for an
unbounded run of whole numbers ({..., 0, 1} or {4, 5, 6, ...}), an Interval for real x.
"""
from sympy import EmptySet, FiniteSet, Interval, Range, Rational, S, Symbol, ceiling, floor, oo, solveset

_x = Symbol("x", real=True)
_FLIP = {"<": ">", ">": "<", "<=": ">=", ">=": "<="}
_SLACK = {"<": "<=", ">": ">=", "<=": "<", ">=": ">"}


def _relation(lhs, rel, rhs):
    return {"<": lhs < rhs, ">": lhs > rhs, "<=": lhs <= rhs, ">=": lhs >= rhs}[rel]


def _whole(interval, dom):
    """The natural numbers or integers lying in a real interval (or union), as a set."""
    if dom == "R":
        return interval
    lo = 1 if dom == "N" else -oo
    if interval == EmptySet:
        return EmptySet
    inf, sup = interval.inf, interval.sup
    first = inf if inf == -oo else (floor(inf) + 1 if (inf in S.Integers and inf not in interval) else ceiling(inf))
    last = sup if sup == oo else (ceiling(sup) - 1 if (sup in S.Integers and sup not in interval) else floor(sup))
    first = first if lo == -oo else (max(first, lo) if first != -oo else lo)
    if first != -oo and last != oo and first > last:
        return EmptySet
    if first != -oo and last != oo:
        return FiniteSet(*range(int(first), int(last) + 1))
    return Range(first, last + 1 if last != oo else oo)


def _from_bound(rel, k, dom):
    """The set of x in dom with x (rel) k."""
    return _whole(solveset(_relation(_x, rel, k), _x, S.Reals), dom)


def _reduce(v, p, const=None):
    """Rule 1 then Rule 2, done right: (a - c) x (rel) d - b, divided by a - c."""
    A = v["a"] - v["c"]
    C = v["d"] - v["b"] if const is None else const
    if A == 0:
        raise ValueError("no x term left")
    rel = p["rel"] if A > 0 else _FLIP[p["rel"]]
    return rel, Rational(C) / A, A


def key(v, p):
    """Straight from the definition: every x in the set that makes the statement true."""
    real = solveset(_relation(v["a"] * _x + v["b"], p["rel"], v["c"] * _x + v["d"]), _x, S.Reals)
    return _whole(real, p["dom"])


def m1(v, p):
    """Divides by a negative coefficient of x but keeps the sign as it was."""
    rel, k, A = _reduce(v, p)
    if A > 0:
        raise ValueError("coefficient of x is positive: nothing to reverse")
    return _from_bound(p["rel"], k, p["dom"])


def m2(v, p):
    """Moves the number b across to the other side without changing its sign: d + b."""
    if v["b"] == 0:
        raise ValueError("no number beside the x term to move")
    rel, k, _ = _reduce(v, p, const=v["d"] + v["b"])
    return _from_bound(rel, k, p["dom"])


def m3(v, p):
    """Treats a strict sign as slack (and a slack one as strict): gets the end point wrong."""
    rel, k, _ = _reduce(v, p)
    if p["dom"] != "R" and k not in S.Integers:
        raise ValueError("the end is not a whole number, so including it changes nothing")
    return _from_bound(_SLACK[rel], k, p["dom"])


def m4(v, p):
    """Counts 0 as a natural number."""
    if p["dom"] != "N":
        raise ValueError("only for natural numbers")
    rel, k, _ = _reduce(v, p)
    got = _from_bound(rel, k, "Z")
    if 0 not in got:
        raise ValueError("0 is not a solution anyway")
    return _from_bound(rel, k, "N") | FiniteSet(0)


def m5(v, p):
    """Rounds a fractional end to the nearest whole number, then keeps the sign."""
    if p["dom"] == "R":
        raise ValueError("only for natural numbers or integers")
    rel, k, _ = _reduce(v, p)
    if k in S.Integers or (k - floor(k)) == Rational(1, 2):
        raise ValueError("no clear rounding")
    r = floor(k + Rational(1, 2))
    return _from_bound(rel, r, p["dom"])


def m6(v, p):
    """Ignores where x comes from: gives the real-number answer for natural or integer x."""
    if p["dom"] == "R":
        raise ValueError("x is already real")
    rel, k, _ = _reduce(v, p)
    return _from_bound(rel, k, "R")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
