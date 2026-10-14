"""C04 Parallel and perpendicular lines: answer models (the key, and one per misconception).

Points come in as inputs ax, ay, bx, by, ... (sympy numbers; one may be an unknown symbol such as k).
params["form"] says what the item asks:
  altitude    triangle ABC: the slope of the altitude drawn from A.
  parallel    ABCD is a parallelogram (A, B, C given): the slope of side CD.
  perp_k      the line through P, Q (one coordinate unknown) is perpendicular to the line through
              R, S: the unknown. Inputs px, py, qx, qy, rx, ry, sx, sy.
  right_k     triangle ABC is right-angled at A, one coordinate of C unknown: the unknown.
  which_perp  triangle ABC: which two sides are perpendicular. Answer Symbol("at_A"), "at_B",
              "at_C" (the vertex of the right angle) or "none".

The key never uses m1 m2 = -1: it works with direction vectors (run, rise). Two lines are
perpendicular when their directions have zero dot product, parallel when they are multiples.
"""
from sympy import Rational, Symbol, solve, sympify

# ---- points and directions ------------------------------------------------------------------


def _pt(v, n):
    return sympify(v[n + "x"]), sympify(v[n + "y"])


def _dir(p, q):
    return q[0] - p[0], q[1] - p[1]


def _slope(p, q):
    dx, dy = _dir(p, q)
    if dx == 0:
        raise ValueError("vertical line: no slope")
    return dy / dx


def _slope_of_dir(d):
    if d[0] == 0:
        raise ValueError("vertical line: no slope")
    return d[1] / d[0]


def _dot(d, e):
    return d[0] * e[0] + d[1] * e[1]


def _unknown(*exprs):
    syms = set().union(*(sympify(e).free_symbols for e in exprs))
    if len(syms) != 1:
        raise ValueError("needs exactly one unknown")
    return syms.pop()


def _solve_one(eq, *exprs):
    k = _unknown(*exprs)
    sols = solve(eq, k)
    if len(sols) != 1:
        raise ValueError(f"no single value of the unknown: {sols}")
    return sols[0]


def _slope_eq(p, q, m):
    """The line PQ has slope m, written without division: rise = m * run."""
    dx, dy = _dir(p, q)
    return dy - m * dx


# ---- the rules: the slope of the asked line from the slope m of the given one ----------------

def _m1_perp(m):
    """Only the sign changes: the perpendicular slope is -m."""
    return -m


def _m2_perp(m):
    """Only flipped, sign kept: the perpendicular slope is 1/m."""
    if m == 0:
        raise ValueError("1/0")
    return 1 / m


def _m3_perp(m):
    """The conditions swapped: perpendicular lines get equal slopes."""
    return m


def _m3_par(m):
    """The conditions swapped: parallel lines get m1 m2 = -1."""
    if m == 0:
        raise ValueError("-1/0")
    return -1 / m


PERP = {"C04-M1": _m1_perp, "C04-M2": _m2_perp, "C04-M3": _m3_perp}


# ---- forms ----------------------------------------------------------------------------------

def _altitude(v, rule=None, side="BC", slope_of=None):
    """Slope of the altitude from A. rule: the wrong perpendicular rule (None: the key, by
    turning BC's direction through a right angle). side: which side it is drawn perpendicular to.
    slope_of: a wrong way of reading the side's slope from its two points."""
    A, B, C = _pt(v, "a"), _pt(v, "b"), _pt(v, "c")
    p, q = (B, C) if side == "BC" else (A, B)
    if rule is None and slope_of is None:
        dx, dy = _dir(p, q)
        return _slope_of_dir((-dy, dx))  # (run, rise) turned through 90 degrees
    m = slope_of(p, q) if slope_of else _slope(p, q)
    if rule is None:
        if m == 0:
            raise ValueError("perpendicular to a horizontal side is vertical")
        return -1 / m
    return rule(m)


def _parallel(v, rule=None, slope_of=None):
    """Slope of CD in parallelogram ABCD: CD is parallel to AB."""
    A, B = _pt(v, "a"), _pt(v, "b")
    if rule is None and slope_of is None:
        return _slope_of_dir(_dir(A, B))
    m = slope_of(A, B) if slope_of else _slope(A, B)
    return rule(m) if rule else m


def _perp_k(v, rule=None):
    P, Q, R, S = _pt(v, "p"), _pt(v, "q"), _pt(v, "r"), _pt(v, "s")
    if rule is None:
        return _solve_one(_dot(_dir(P, Q), _dir(R, S)), *P, *Q)
    return _solve_one(_slope_eq(P, Q, rule(_slope(R, S))), *P, *Q)


def _right_k(v, rule=None, wrong_pair=False):
    """Right angle at A: AB is perpendicular to AC. wrong_pair: makes AB perpendicular to BC."""
    A, B, C = _pt(v, "a"), _pt(v, "b"), _pt(v, "c")
    if wrong_pair:
        return _solve_one(_dot(_dir(A, B), _dir(B, C)), *C)
    if rule is None:
        return _solve_one(_dot(_dir(A, B), _dir(A, C)), *C)
    return _solve_one(_slope_eq(A, C, rule(_slope(A, B))), *C)


SIDES = {"at_B": ("AB", "BC"), "at_C": ("BC", "CA"), "at_A": ("CA", "AB")}


def _which(v, test):
    P = {"A": _pt(v, "a"), "B": _pt(v, "b"), "C": _pt(v, "c")}
    d = {s: _dir(P[s[0]], P[s[1]]) for s in ("AB", "BC", "CA")}
    hits = [name for name, (s, t) in SIDES.items() if test(d[s], d[t])]
    if len(hits) > 1:
        raise ValueError(f"more than one pair: {hits}")
    return Symbol(hits[0] if hits else "none")


def _slopes_test(rel):
    """A test on two sides' slopes; a vertical side passes no slope test."""
    def test(d, e):
        if d[0] == 0 or e[0] == 0:
            return False
        return rel(_slope_of_dir(d), _slope_of_dir(e))
    return test


WHICH = {
    "key": lambda d, e: _dot(d, e) == 0,
    "C04-M1": _slopes_test(lambda m, n: m != 0 and n == -m),
    "C04-M2": _slopes_test(lambda m, n: m != 0 and n * m == 1),
    "C04-M3": _slopes_test(lambda m, n: m == n),
}


# ---- slope slips (C03) ----------------------------------------------------------------------

def _mixed_order(p, q):
    """(y2 - y1) / (x1 - x2): the points taken in opposite orders on top and bottom."""
    if p[0] == q[0]:
        raise ValueError("vertical line")
    return (q[1] - p[1]) / (p[0] - q[0])


def _run_over_rise(p, q):
    """(x2 - x1) / (y2 - y1): run over rise."""
    if p[1] == q[1]:
        raise ValueError("horizontal line: run over rise is undefined")
    return (q[0] - p[0]) / (q[1] - p[1])


# ---- models ---------------------------------------------------------------------------------

def _form(p):
    return p["form"]


def key(v, p):
    f = _form(p)
    if f == "altitude":
        return _altitude(v)
    if f == "parallel":
        return _parallel(v)
    if f == "perp_k":
        return _perp_k(v)
    if f == "right_k":
        return _right_k(v)
    if f == "which_perp":
        return _which(v, WHICH["key"])
    raise ValueError(f)


def _perp_rule_model(mid):
    def model(v, p):
        f = _form(p)
        if f == "altitude":
            return _altitude(v, rule=PERP[mid])
        if f == "perp_k":
            return _perp_k(v, rule=PERP[mid])
        if f == "right_k":
            return _right_k(v, rule=PERP[mid])
        if f == "which_perp":
            return _which(v, WHICH[mid])
        if f == "parallel" and mid == "C04-M3":
            return _parallel(v, rule=_m3_par)
        raise ValueError(f"{mid} does not apply to {f}")
    return model


m1 = _perp_rule_model("C04-M1")
m2 = _perp_rule_model("C04-M2")
m3 = _perp_rule_model("C04-M3")


def m4(v, p):
    """Pairs vertex A with the wrong side: the altitude from A drawn perpendicular to AB (a side
    through A) instead of the opposite side BC; a right angle at A put between AB and BC."""
    f = _form(p)
    if f == "altitude":
        return _altitude(v, side="AB")
    if f == "right_k":
        return _right_k(v, wrong_pair=True)
    raise ValueError(f"M4 does not apply to {f}")


def m5(v, p):
    """Slope read as (y2 - y1) / (x1 - x2), then the right rule: the sign of the slope flips."""
    f = _form(p)
    if f == "parallel":
        return _parallel(v, slope_of=_mixed_order)
    if f == "altitude":
        return _altitude(v, slope_of=_mixed_order)
    raise ValueError(f"M5 does not apply to {f}")


def m6(v, p):
    """Slope read as run over rise, (x2 - x1) / (y2 - y1), then the right rule."""
    f = _form(p)
    if f == "parallel":
        return _parallel(v, slope_of=_run_over_rise)
    if f == "altitude":
        return _altitude(v, slope_of=_run_over_rise)
    raise ValueError(f"M6 does not apply to {f}")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
