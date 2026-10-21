"""C10 Word problems: answer models (the key, and one per misconception).

Each item tells a story (params "story") about an unknown x, with its numbers as inputs:
- ages:   x = present age; (x - a)(x + b) = P (age a years ago times age b years hence).
- taps:   x = hours for the bigger tap, x + d for the smaller; together they take T hours.
- store:  x = breadth, x + d1 = length, x + d1 + d2 = diagonal of a rectangle.
- grid:   x = trees in a column, x + d in a row, N trees in all.
- consec: x = the smallest of n consecutive natural numbers; their squares add up to S.
- share:  x = students sharing N things; with e more students each gets f fewer.
Params "ask" is the quantity asked, and "other" another quantity of the same story, both as
expressions in x and the inputs.

The key searches the natural numbers for the x that makes the story true (every quantity in it
positive), never by solving the quadratic. The models start from the two roots of the story's
equation: r1, the root the key finds, and r2, the root that makes no sense.
"""
from sympy import Eq, Integer, Symbol, fraction, simplify, solve, sympify, together

_x = Symbol("x")


def _story(v, p):
    """(equation as lhs - rhs, list of quantities that must be positive) for the story."""
    s = p["story"]
    x = _x
    if s == "ages":
        return (x - v["a"]) * (x + v["b"]) - v["P"], [x - v["a"]]
    if s == "taps":
        return 1 / x + 1 / (x + v["d"]) - 1 / v["T"], [x]
    if s == "store":
        return x**2 + (x + v["d1"]) ** 2 - (x + v["d1"] + v["d2"]) ** 2, [x]
    if s == "grid":
        return x * (x + v["d"]) - v["N"], [x]
    if s == "consec":
        return sum((x + i) ** 2 for i in range(int(v["n"]))) - v["S"], [x]
    if s == "share":
        return v["N"] / x - v["N"] / (x + v["e"]) - v["f"], [x]
    raise ValueError(f"unknown story {s}")


def _expr(p, name, v):
    return sympify(p[name], locals={"x": _x, **{k: val for k, val in v.items()}})


def _at(p, name, v, x0):
    return simplify(_expr(p, name, v).subs(_x, x0))


def _key_x(v, p):
    eq, pos = _story(v, p)
    found = [n for n in range(1, 2001)
             if all(q.subs(_x, n) > 0 for q in pos) and eq.subs(_x, n) == 0]
    if len(found) != 1:
        raise ValueError(f"story has {len(found)} natural solutions")
    return Integer(found[0])


def _roots(v, p):
    eq, _ = _story(v, p)
    num, _ = fraction(together(eq))
    rs = [simplify(r) for r in solve(Eq(num, 0), _x)]
    r1 = _key_x(v, p)
    others = [r for r in rs if simplify(r - r1) != 0]
    if len(rs) != 2 or len(others) != 1:
        raise ValueError("needs two distinct roots")
    return r1, others[0]


def key(v, p):
    return _at(p, "ask", v, _key_x(v, p))


def _differs(v, p, val):
    if simplify(val - key(v, p)) == 0:
        raise ValueError("gives the key")
    return val


def m1(v, p):
    """Keeps the root that makes no sense (a negative age or count) and answers from it."""
    r1, r2 = _roots(v, p)
    return _differs(v, p, _at(p, "ask", v, r2))


def m2(v, p):
    """Solves correctly but answers a different quantity of the story (x itself, or the other person's)."""
    r1, _ = _roots(v, p)
    return _differs(v, p, _at(p, "other", v, r1))


def m3(v, p):
    """Reads the roots off the factors with the wrong signs, (x + 10)(x - 9) = 0 giving 10 and -9,
    and keeps the positive one: the root that makes no sense, with its sign changed."""
    r1, r2 = _roots(v, p)
    if simplify(-r2 - r1) == 0:
        raise ValueError("roots are opposites")
    return _differs(v, p, _at(p, "ask", v, -r2))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3}
