"""C02 Equations with swapped coefficients: answer models (the key, and one per misconception).

The pair a1 x + b1 y = c1 (I), a2 x + b2 y = c2 (II), where the coefficients are swapped:
a2 = b1 and b2 = a1 (normal, e.g. 15x + 17y, 17x + 15y), or a2 = -b1 and b2 = -a1
(mixed signs, e.g. 49x - 57y, 57x - 49y). Adding and subtracting give one equation in x + y
and one in x - y; which one comes from adding depends on the signs.
Inputs (sympy numbers): a1, b1, c1, a2, b2, c2. Params:
  ask: "sum"  the value of x + y;
       "diff" the value of x - y;
       "pair" the solution, as x + I*y;
       "tuple" the solution, as Tuple(x, y) (for letters other than x, y, e.g. a and b).
"""
from sympy import I, Matrix, Tuple


def _solve(v):
    """x and y straight from the system (Cramer / matrix inverse), not by adding and subtracting."""
    m = Matrix([[v["a1"], v["b1"]], [v["a2"], v["b2"]]])
    x, y = m.LUsolve(Matrix([v["c1"], v["c2"]]))
    return x, y


def _combos(v):
    """The added and subtracted ((I) - (II)) equations as (coef of x, coef of y, constant),
    and which quantity each gives: "sum" (equal coefficients) or "diff" (opposite ones)."""
    add = (v["a1"] + v["a2"], v["b1"] + v["b2"], v["c1"] + v["c2"])
    sub = (v["a1"] - v["a2"], v["b1"] - v["b2"], v["c1"] - v["c2"])
    out = {}
    for name, (p, q, r) in (("add", add), ("sub", sub)):
        if p == q and p != 0:
            out[name] = "sum"
        elif p == -q and p != 0:
            out[name] = "diff"
        else:
            raise ValueError("coefficients are not swapped")
    assert out["add"] != out["sub"]
    return add, sub, out


def _from_sd(s, d, p):
    """The answer asked for, from x + y = s and x - y = d."""
    if p["ask"] == "sum":
        return s
    if p["ask"] == "diff":
        return d
    x, y = (s + d) / 2, (s - d) / 2
    return Tuple(x, y) if p["ask"] == "tuple" else x + I * y


def _true_sd(v):
    x, y = _solve(v)
    return x + y, x - y


def key(v, p):
    x, y = _solve(v)
    if p["ask"] == "sum":
        return x + y
    if p["ask"] == "diff":
        return x - y
    return Tuple(x, y) if p["ask"] == "tuple" else x + I * y


def m1(v, p):
    """Drops the minus on the subtracted equation: reads -2x + 2y = 10 as x - y = 5
    (or -8x - 8y = -80 as x + y = -10). The quantity from subtracting changes sign."""
    _, _, which = _combos(v)
    s, d = _true_sd(v)
    if which["sub"] == "sum":
        s = -s
        if p["ask"] == "diff":
            raise ValueError("x - y comes from adding here")
    else:
        d = -d
        if p["ask"] == "sum":
            raise ValueError("x + y comes from adding here")
    return _from_sd(s, d, p)


def m2(v, p):
    """Mixes up the two results: takes the added equation as x + y and the subtracted one as
    x - y always (wrong for mixed signs), or reports the other quantity."""
    s, d = _true_sd(v)
    return _from_sd(d, s, p)


def m3(v, p):
    """After adding, forgets to divide by the common coefficient: 32x + 32y = 32 gives x + y = 32."""
    add, _, which = _combos(v)
    if p["ask"] != which["add"]:
        raise ValueError("only the quantity from adding")
    return add[2]


def m4(v, p):
    """From x + y = s and x - y = d, adds to get 2x = s + d but takes x = s + d, then y = s - x."""
    if p["ask"] not in ("pair", "tuple"):
        raise ValueError("only when solving for x and y")
    s, d = _true_sd(v)
    x = s + d
    y = s - x
    return Tuple(x, y) if p["ask"] == "tuple" else x + I * y


def m5(v, p):
    """Combines the left sides one way and the right sides the other: adds the x and y terms
    but subtracts the constants (or the reverse)."""
    add, sub, which = _combos(v)
    q = {which["add"]: (v["c1"] - v["c2"]) / add[0], which["sub"]: (v["c1"] + v["c2"]) / sub[0]}
    if p["ask"] not in q:
        raise ValueError("only for x + y or x - y")
    return q[p["ask"]]


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
