"""C03 Inclination and slope: answer models (the key, and one per misconception).

params["q"] picks the question:
  slope2:   the slope of the line through (x1, y1) and (x2, y2) (intercepts a, b: the points (a, 0), (0, b)).
  yaxis:    the slope of a line making the angle alpha (radians) with the positive Y-axis, anticlockwise.
  incl2:    the inclination, in degrees, of the line through (x1, y1) and (x2, y2).
  on_xaxis: the point B on the X-axis with slope AB = m, for A(xa, ya).
"""
from sympy import Abs, Symbol, Tuple, atan, pi, simplify, sin, solve, sqrt, tan

_b = Symbol("b", real=True)


def _slope(x1, y1, x2, y2):
    """Rise over run, both in the same order."""
    if simplify(x2 - x1) == 0:
        raise ValueError("vertical line: slope not defined")
    return simplify((y2 - y1) / (x2 - x1))


def _incl_deg(m):
    """The inclination in [0, 180) degrees of a line with slope m."""
    th = atan(m)
    if m < 0:
        th += pi
    return simplify(th * 180 / pi)


def _pts(v):
    return v["x1"], v["y1"], v["x2"], v["y2"]


def _one(sols):
    if len(sols) != 1:
        raise ValueError(f"expected one solution, got {sols}")
    return sols[0]


def key(v, p):
    q = p["q"]
    if q == "slope2":
        return _slope(*_pts(v))
    if q == "yaxis":
        return simplify(tan(pi / 2 + v["alpha"]))
    if q == "incl2":
        return _incl_deg(_slope(*_pts(v)))
    if q == "on_xaxis":
        xa, ya, m = v["xa"], v["ya"], v["m"]
        return Tuple(_one(solve((0 - ya) - m * (_b - xa), _b)), 0)
    raise ValueError(q)


def m1(v, p):
    """Run over rise: (x2 - x1) / (y2 - y1), which is cot(theta), not tan(theta)."""
    q = p["q"]
    if q in ("slope2", "incl2"):
        x1, y1, x2, y2 = _pts(v)
        m = _slope(y1, x1, y2, x2)
        return m if q == "slope2" else _incl_deg(m)
    if q == "yaxis":
        return simplify(1 / tan(pi / 2 + v["alpha"]))
    if q == "on_xaxis":
        xa, ya, m = v["xa"], v["ya"], v["m"]
        return Tuple(_one(solve((_b - xa) - m * (0 - ya), _b)), 0)
    raise ValueError(q)


def m2(v, p):
    """Mixed order: (y2 - y1) / (x1 - x2), which flips the sign of the slope."""
    q = p["q"]
    if q == "slope2":
        x1, y1, x2, y2 = _pts(v)
        return simplify((y2 - y1) / (x1 - x2))
    if q == "on_xaxis":
        xa, ya, m = v["xa"], v["ya"], v["m"]
        return Tuple(_one(solve((0 - ya) - m * (xa - _b), _b)), 0)
    raise ValueError("only slopes from two points")


def m3(v, p):
    """Inclination always acute: tan^-1 |m|, even when the slope is negative."""
    if p["q"] != "incl2":
        raise ValueError("only inclinations")
    m = _slope(*_pts(v))
    return simplify(atan(Abs(m)) * 180 / pi)


def m4(v, p):
    """Measures the angle from the Y-axis instead of the positive X-axis."""
    q = p["q"]
    if q == "yaxis":  # takes the angle with the Y-axis as the inclination
        return simplify(tan(v["alpha"]))
    if q == "incl2":  # reports the angle the line makes with the Y-axis
        return simplify(Abs(90 - _incl_deg(_slope(*_pts(v)))))
    raise ValueError(q)


def m5(v, p):
    """Slope as sin(theta): rise over the length of the segment instead of over the run."""
    q = p["q"]
    if q == "slope2":
        m = _slope(*_pts(v))
        return simplify(Abs(m) / sqrt(1 + m**2))
    if q == "yaxis":
        return simplify(sin(pi / 2 + v["alpha"]))
    raise ValueError(q)


def m6(v, p):
    """A point on the X-axis taken as (0, b)."""
    if p["q"] != "on_xaxis":
        raise ValueError("only points on the X-axis")
    xa, ya, m = v["xa"], v["ya"], v["m"]
    return Tuple(0, _one(solve((_b - ya) - m * (0 - xa), _b)))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
