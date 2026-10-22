"""C08 Slope of a line: answer models (the key, and one per misconception).

Three item forms, picked by params["form"]:
  angle   inputs theta (radians): the angle the line makes with the positive X-axis.
  points  inputs x1, y1, x2, y2: the line through (x1, y1) and (x2, y2).
  k       inputs x1, y1, x2, y2 (one of them the letter k) and m: find k so the slope is m.
A line parallel to the Y-axis has no slope: the named answer Symbol("not_defined").
The key uses sympy's Line.slope (or tan of the angle); each misconception applies its wrong rule.
"""
from sympy import Line, Point, Symbol, atan, cos, oo, pi, simplify, sin, solve, sqrt, sympify, tan, zoo

NOT_DEFINED = Symbol("not_defined")
K = Symbol("k")


def _ratio(num, den):
    num, den = simplify(num), simplify(den)
    if den == 0:
        if num == 0:
            raise ValueError("0/0: the two points are the same")
        return NOT_DEFINED
    return simplify(num / den)


def _pts(v):
    return [sympify(v[n], locals={"k": K}) for n in ("x1", "y1", "x2", "y2")]


def _solve_k(rule, v):
    """Solves rule(x1, y1, x2, y2) = m for k."""
    x1, y1, x2, y2 = _pts(v)
    m = sympify(v["m"])
    expr = rule(x1, y1, x2, y2)
    if expr == NOT_DEFINED:
        raise ValueError("no slope to set equal to m")
    sols = solve(expr - m, K)
    if len(sols) != 1:
        raise ValueError(f"expected one k, got {sols}")
    return simplify(sols[0])


def _form(p):
    return p.get("form", "points")


def key(v, p):
    f = _form(p)
    if f == "angle":
        t = sympify(v["theta"])
        val = tan(t)
        return NOT_DEFINED if val in (zoo, oo, -oo) or simplify(cos(t)) == 0 else simplify(val)
    if f == "k":
        x1, y1, x2, y2 = _pts(v)
        m = sympify(v["m"])
        sols = solve(Line(Point(x1, y1), Point(x2, y2)).slope - m, K)
        assert len(sols) == 1
        return simplify(sols[0])
    x1, y1, x2, y2 = _pts(v)
    s = Line(Point(x1, y1), Point(x2, y2)).slope
    return NOT_DEFINED if s in (oo, -oo, zoo) else simplify(s)


def m1(v, p):
    """Across over up: (x2 - x1)/(y2 - y1), which is cot of the angle."""
    if _form(p) == "angle":
        t = sympify(v["theta"])
        return _ratio(cos(t), sin(t))
    rule = lambda x1, y1, x2, y2: _ratio(x2 - x1, y2 - y1)
    if _form(p) == "k":
        return _solve_k(rule, v)
    return rule(*_pts(v))


def m2(v, p):
    """Up over the length of the segment: sin of the angle, not tan."""
    if _form(p) == "angle":
        return simplify(sin(sympify(v["theta"])))
    if _form(p) == "k":
        raise ValueError("not modelled on find-k items")
    x1, y1, x2, y2 = _pts(v)
    return _ratio(y2 - y1, sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))


def m3(v, p):
    """Mixes the order of subtraction: (y2 - y1)/(x1 - x2)."""
    if _form(p) == "angle":
        raise ValueError("no points to subtract")
    rule = lambda x1, y1, x2, y2: _ratio(y2 - y1, x1 - x2)
    if _form(p) == "k":
        return _solve_k(rule, v)
    return rule(*_pts(v))


def _signless(e):
    e = sympify(e)
    return -e if e.is_number and e.is_negative else e


def m4(v, p):
    """Drops the minus signs of negative co-ordinates, then uses the formula."""
    if _form(p) == "angle":
        raise ValueError("no co-ordinates")
    rule = lambda x1, y1, x2, y2: _ratio(_signless(y2) - _signless(y1), _signless(x2) - _signless(x1))
    if _form(p) == "k":
        return _solve_k(rule, v)
    return rule(*_pts(v))


_DEG = {0: 0, sqrt(3) / 3: 30, 1: 45, sqrt(3): 60}


def m5(v, p):
    """Gives the angle itself, in degrees, as the slope."""
    if _form(p) == "angle":
        return simplify(sympify(v["theta"]) * 180 / pi)
    if _form(p) == "k":
        raise ValueError("not modelled on find-k items")
    s = key(v, p)
    if s == NOT_DEFINED:
        return sympify(90)
    for val, deg in _DEG.items():
        if simplify(s - val) == 0:
            return sympify(deg)
        if simplify(s + val) == 0 and val != 0:
            return sympify(180 - deg)
    raise ValueError("the angle is not one of 0, 30, 45, 60, 90 degrees")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
