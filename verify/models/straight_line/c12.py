"""C12 Lines through an intersection: answer models (the key, and one per misconception).

Inputs: the two lines L1 = a1 x + b1 y + c1, L2 = a2 x + b2 y + c2 (as the student should write
them, everything on the left), and the extra condition's numbers: v (an intercept) or px, py (a point).
Params: cond = "xint" | "yint" | "xaxis" | "point"; rhs = the lines (e.g. "2", "12") the stem writes
as a x + b y = k, which C12-M5 moves across without changing the sign.
Each model returns a polynomial in x, y; the line is that polynomial = 0.
"""
from sympy import Rational, linsolve, solve, symbols

x, y = symbols("x y", real=True)
_k = symbols("k")


def _lines(v):
    L1 = v["a1"] * x + v["b1"] * y + v["c1"]
    L2 = v["a2"] * x + v["b2"] * y + v["c2"]
    return L1, L2


def _meet(L1, L2):
    """The meeting point, by solving the pair."""
    sol = linsolve([L1, L2], [x, y])
    if not sol:
        raise ValueError("the lines don't meet")
    (px, py), = sol
    return px, py


def _through(P, Q):
    """The line through two points, from the two-point form (cross-multiplied)."""
    (x1, y1), (x2, y2) = P, Q
    if (x1, y1) == (x2, y2):
        raise ValueError("the two points coincide")
    return (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1)


def _with_condition(P, cond, v):
    """The line through P that meets the condition, from the geometry (no family)."""
    if cond == "xint":
        return _through(P, (v["v"], 0))
    if cond == "yint":
        return _through(P, (0, v["v"]))
    if cond == "xaxis":
        return y - P[1]
    if cond == "point":
        return _through(P, (v["px"], v["py"]))
    raise ValueError(f"unknown condition {cond}")


def key(v, p):
    return _with_condition(_meet(*_lines(v)), p["cond"], v)


def m1(v, p):
    """Stops at L1 + L2 = 0 (k = 1): a line through the point, but the condition is never used."""
    L1, L2 = _lines(v)
    return L1 + L2


def m2(v, p):
    """Takes the intercepts of ax + by + c = 0 as c/a and c/b (sign dropped): so it meets the
    intercept condition with the intercept's sign reversed."""
    cond = p["cond"]
    if cond not in ("xint", "yint"):
        raise ValueError("no intercept in this item")
    return _with_condition(_meet(*_lines(v)), cond, {"v": -v["v"]})


def m3(v, p):
    """Puts the intercept on the other axis (uses -c/a for the Y-intercept, -c/b for the X-intercept)."""
    other = {"xint": "yint", "yint": "xint"}
    if p["cond"] not in other:
        raise ValueError("no intercept in this item")
    return _with_condition(_meet(*_lines(v)), other[p["cond"]], v)


def m4(v, p):
    """'Parallel to the X-axis' read as 'no y term': sets the y-coefficient to 0, a vertical line."""
    if p["cond"] != "xaxis":
        raise ValueError("not a parallel-to-X-axis item")
    return x - _meet(*_lines(v))[0]


def m5(v, p):
    """Moves the constant of a x + b y = k across without changing its sign (writes a x + b y + k = 0),
    then does everything else right."""
    rhs = p.get("rhs", "")
    if not rhs:
        raise ValueError("every line is already in the form ... = 0")
    w = dict(v)
    for n in rhs:
        w["c" + n] = -v["c" + n]
    return _with_condition(_meet(*_lines(w)), p["cond"], v)


def m6(v, p):
    """Finds k for L1 + kL2 = 0 correctly, then writes the line as kL1 + L2 = 0."""
    L1, L2 = _lines(v)
    F = (L1 + _k * L2).expand()
    cond = p["cond"]
    if cond == "xint":
        eq = F.subs({x: v["v"], y: 0})
    elif cond == "yint":
        eq = F.subs({x: 0, y: v["v"]})
    elif cond == "point":
        eq = F.subs({x: v["px"], y: v["py"]})
    elif cond == "xaxis":
        eq = F.coeff(x)
    else:
        raise ValueError(f"unknown condition {cond}")
    ks = solve(eq, _k)
    if len(ks) != 1:
        raise ValueError("no single k")
    k = Rational(ks[0])
    return (k * L1 + L2).expand()


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
