"""C10 Distance of a point from a line: answer models (the key, and one per misconception).

params["line"]: the line as the book writes it, "lhs = rhs" in x and y (e.g. "12*(x + 6) = 5*(y - 2)").
Distance items: inputs px, py (the point). Points items (params["on"] given, e.g. "y = 0"):
input k, the required distance; the answer is the set of points on the line `on` at distance k
from `line`, a FiniteSet of (x, y) Tuples.

The misconception models work on the line in the book's general form: everything moved to the left,
fractions cleared, coefficients with no common factor (x/3 + y/4 = 1 becomes 4x + 3y - 12 = 0).
"""
from sympy import Abs, FiniteSet, Poly, Rational, Tuple, gcd_list, lcm_list, solve, sqrt, symbols, sympify

x, y = symbols("x y", real=True)
_t = symbols("t", real=True)
_LOC = {"x": x, "y": y}


def _sides(s):
    lhs, rhs = s.split("=")
    return sympify(lhs, locals=_LOC), sympify(rhs, locals=_LOC)


def _general(expr):
    """(a, b, c) of a linear expression scaled to integers with no common factor (sign kept)."""
    p = Poly(expr.expand(), x, y)
    a, b, c = (Rational(p.coeff_monomial(m)) for m in (x, y, 1))
    den = lcm_list([v.q for v in (a, b, c)])
    a, b, c = a * den, b * den, c * den
    g = gcd_list([v for v in (a, b, c) if v != 0])
    return a / g, b / g, c / g


def _line(p, moved_wrong=False):
    """The line as (a, b, c). moved_wrong: the right side carried over without changing its signs."""
    lhs, rhs = _sides(p["line"])
    if moved_wrong:
        if rhs == 0:
            raise ValueError("the line is already ... = 0: nothing to move")
        return _general(lhs + rhs)
    return _general(lhs - rhs)


def _on_points(p):
    """The line `on` as a parametrised point (X(t), Y(t))."""
    lhs, rhs = _sides(p["on"])
    a, b, c = _general(lhs - rhs)
    if b != 0:
        return _t, (-c - a * _t) / b
    return -c / a, _t


# ---------- the key: from the definition (foot of the perpendicular, then the distance formula) ----------

def _true_distance(P, line):
    """Distance from P to the line: find the foot F (on the line, PF perpendicular to it), then |PF|."""
    a, b, c = line
    # Two points on the line give its direction.
    if b != 0:
        A, B = (0, -c / b), (1, (-c - a) / b)
    else:
        A, B = (-c / a, 0), (-c / a, 1)
    dx, dy = B[0] - A[0], B[1] - A[1]
    s = symbols("s", real=True)
    F = (A[0] + s * dx, A[1] + s * dy)
    s0 = solve((F[0] - P[0]) * dx + (F[1] - P[1]) * dy, s)[0]
    fx, fy = F[0].subs(s, s0), F[1].subs(s, s0)
    return sqrt((fx - P[0]) ** 2 + (fy - P[1]) ** 2)


def _point_set(p, dist_eq):
    """Points (X(t), Y(t)) on `on` solving dist_eq(t) = 0."""
    X, Y = _on_points(p)
    sols = solve(dist_eq(X, Y), _t)
    if not sols:
        raise ValueError("no such points")
    return FiniteSet(*[Tuple(X.subs(_t, r), Y.subs(_t, r)) for r in sols])


def _is_points(p):
    return "on" in p


def key(v, p):
    line = _line(p)
    if _is_points(p):
        # distance^2 = k^2 (both sides non-negative), solved for t
        return _point_set(p, lambda X, Y: _true_distance((X, Y), line) ** 2 - v["k"] ** 2)
    return _true_distance((v["px"], v["py"]), line)


# ---------- misconceptions ----------

def _signed(line, X, Y):
    a, b, c = line
    return a * X + b * Y + c


def _formula(v, p, line, denom, modulus=True):
    """|ax1 + by1 + c| / denom, or the points where it equals k (both signs, or + only without modulus)."""
    if _is_points(p):
        if modulus:
            return _point_set(p, lambda X, Y: _signed(line, X, Y) ** 2 - (v["k"] * denom) ** 2)
        return _point_set(p, lambda X, Y: _signed(line, X, Y) - v["k"] * denom)
    val = _signed(line, v["px"], v["py"])
    return (Abs(val) if modulus else val) / denom


def m1(v, p):
    """Takes |ax1 + by1 + c| itself as the distance: never divides by sqrt(a^2 + b^2)."""
    return _formula(v, p, _line(p), 1)


def m2(v, p):
    """Divides by a^2 + b^2, forgetting the square root."""
    a, b, _ = line = _line(p)
    return _formula(v, p, line, a**2 + b**2)


def m3(v, p):
    """Carries the right-hand side across without changing its signs, then uses the right formula."""
    a, b, _ = line = _line(p, moved_wrong=True)
    return _formula(v, p, line, sqrt(a**2 + b**2))


def m4(v, p):
    """Drops the modulus: a negative distance, or only the + case of |u| = k."""
    a, b, _ = line = _line(p)
    if not _is_points(p) and _signed(line, v["px"], v["py"]) >= 0:
        raise ValueError("ax1 + by1 + c is not negative here: dropping the modulus gives the key")
    return _formula(v, p, line, sqrt(a**2 + b**2), modulus=False)


def m5(v, p):
    """Measures along the x-axis (horizontal distance to the line): |ax1 + by1 + c| / |a|."""
    a, b, _ = line = _line(p)
    if a == 0 or b == 0:
        raise ValueError("the line is parallel to an axis: the horizontal distance is the key or infinite")
    return _formula(v, p, line, Abs(a))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5}
