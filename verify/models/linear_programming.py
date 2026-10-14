"""Answer and misconception models for Linear Programming.

Each concept maps "key" and each misconception ID to a function
(inputs, params) -> result. The key model is computed directly from the
definition (intercepts by solving, corners by enumerating every pair of
boundary lines in exact rationals, boundedness from the region's recession
directions), never through the shortcut the concept teaches, so it stays an
independent derivation.

Constraints are strings in params["cons"], e.g. "3*x + 2*y <= 12"; x >= 0 and
y >= 0 are implied unless a model drops them. Points are complex numbers
x + y*I, the pair (x, y), as in the Complex Numbers chapter.
"""
from fractions import Fraction
from functools import lru_cache
from itertools import combinations

from sympy import I, Eq, Rational, im, re, solve, symbols, sympify

x, y = symbols("x y", real=True)
_LOCALS = {"x": x, "y": y, "I": I}

NONNEG = ["x >= 0", "y >= 0"]

# Geometry runs in exact Fractions (sympy's solver made a run take ~10 s);
# results go back to sympy only at the model boundary.


@lru_cache(maxsize=None)
def con(s):
    """'a*x + b*y <= c' as (f, op, c) with f linear in x, y (sympy) and op '<=' or '>='."""
    for op in ("<=", ">="):
        if op in s:
            lhs, rhs = s.split(op)
            f = sympify(lhs, locals=_LOCALS) - sympify(rhs, locals=_LOCALS)
            c = -f.subs({x: 0, y: 0})
            return f + c, op, c
    raise ValueError(f"not an inequality: {s}")


def _frac(v):
    v = Rational(v)
    return Fraction(int(v.p), int(v.q))


@lru_cache(maxsize=None)
def lin(s):
    """The constraint as exact (a, b, op, c): a*x + b*y op c."""
    f, op, c = con(s)
    return _frac(f.coeff(x)), _frac(f.coeff(y)), op, _frac(c)


def pt_of(z):
    """A sympy x + y*I as a Fraction pair."""
    return _frac(re(z)), _frac(im(z))


def as_sym(p):
    return Rational(p[0].numerator, p[0].denominator) + I * Rational(p[1].numerator, p[1].denominator)


def holds(s, pt, strict=False):
    a, b, op, c = lin(s)
    px, py = pt if isinstance(pt, tuple) else pt_of(pt)
    v = a * px + b * py
    if strict:
        return v < c if op == "<=" else v > c
    return v <= c if op == "<=" else v >= c


def origin_side(s):
    """The constraint rewritten to keep the origin's side (a line through the origin is kept as is)."""
    f, op, c = con(s)
    if c == 0:
        return s
    keep = "<=" if 0 <= c else ">="
    return f"{f} {keep} {c}"


def feasible(cons, pt, nonneg=True, strict=False):
    every = list(cons) + (NONNEG if nonneg else [])
    return all(holds(s, pt, strict) for s in every)


def meet(s1, s2):
    """The point where two boundary lines meet (Cramer's rule), or None when they are parallel."""
    a1, b1, _, c1 = lin(s1)
    a2, b2, _, c2 = lin(s2)
    det = a1 * b2 - a2 * b1
    if det == 0:
        return None
    return ((c1 * b2 - c2 * b1) / det, (a1 * c2 - a2 * c1) / det)


def intersections(cons, nonneg=True):
    every = list(cons) + (NONNEG if nonneg else [])
    out = []
    for s1, s2 in combinations(every, 2):
        p = meet(s1, s2)
        if p is not None and p not in out:
            out.append(p)
    return out


def corners(cons):
    return [p for p in intersections(cons) if feasible(cons, p)]


def classify(cons, nonneg=True):
    """1 bounded, 2 unbounded, 3 empty (the region always has x, y >= 0 here, so it has a corner if it is not empty)."""
    if not corners(cons):
        return 3
    every = list(cons) + (NONNEG if nonneg else [])
    # Directions the region runs off along: d with a*dx + b*dy on the kept side of 0 for every constraint.
    candidates = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    for s in every:
        a, b, _, _ = lin(s)
        candidates += [(b, -a), (-b, a)]

    def recedes(d):
        for s in every:
            a, b, op, _ = lin(s)
            v = a * d[0] + b * d[1]
            if (op == "<=" and v > 0) or (op == ">=" and v < 0):
                return False
        return True

    return 2 if any(recedes(d) for d in candidates if d != (0, 0)) else 1


def pts(p):
    return [pt_of(sympify(s, locals=_LOCALS)) for s in p["pts"]]


# ---------- C01 Boundary line from intercepts: a*x + b*y = c ----------
def _intercept(which, swap=False, coeff=False):
    def model(v, p):
        f, _, c = con(p["line"].replace("=", "<="))
        a, b = f.coeff(x), f.coeff(y)
        if coeff:
            xi, yi = a, b
        else:
            xi = solve(Eq(f.subs(y, 0), c), x)[0]
            yi = solve(Eq(f.subs(x, 0), c), y)[0]
            if swap:
                xi, yi = c / b, c / a
        return {"x": xi, "y": I * yi, "both": xi + I * yi}[which]
    return model


def _equation(kind):
    def model(v, p):
        a, b = v["p"], v["q"]  # the intercepts (a, 0) and (0, b)
        if kind == "key":
            return x / a + y / b - 1
        if kind == "C01-M1":  # intercepts swapped
            return x / b + y / a - 1
        if kind == "C01-M3":  # the fractions flipped: a x + b y = 1
            return a * x + b * y - 1
        raise ValueError(kind)
    return model


def _c01(kind):
    def model(v, p):
        ask = p.get("ask", "x")
        if ask == "equation":
            return _equation(kind)(v, p)
        if kind == "key":
            return _intercept(ask)(v, p)
        if kind == "C01-M1":
            return _intercept(ask, swap=True)(v, p)
        if kind == "C01-M2":
            return _intercept(ask, coeff=True)(v, p)
        raise ValueError(kind)
    return model


C01 = {k: _c01(k) for k in ["key", "C01-M1", "C01-M2", "C01-M3"]}


# ---------- C02 The half-plane test ----------
# Codes: 1 the line and the side containing P; 2 the line and the other side;
# 3 P's side without the line; 4 the other side without the line;
# 5 "the side containing the origin" (said of a line through the origin).
def _c02(kind):
    def model(v, p):
        s = p["cons"][0]
        ref = sympify(p.get("ref", "0"), locals=_LOCALS)
        f, _, c = con(s)
        assert f.subs({x: re(ref), y: im(ref)}) != c, "the test point must not be on the line"
        key = 1 if holds(s, ref) else 2
        if kind == "key":
            return key
        if kind == "C02-M1":  # keeps the side that fails the test
            return 3 - key
        if kind == "C02-M2":  # leaves the line out
            return key + 2
        if kind == "C02-M3":  # tests the origin on a line through it
            if c != 0:
                raise ValueError("the line misses the origin")
            return 5
        raise ValueError(kind)
    return model


C02 = {k: _c02(k) for k in ["key", "C02-M1", "C02-M2", "C02-M3"]}


# ---------- C03 The feasible region: how many of the points are in it ----------
def _c03(kind):
    def model(v, p):
        cons, points = p["cons"], pts(p)
        if kind == "key":
            return sum(feasible(cons, q) for q in points)
        if kind == "C03-M1":  # forgets x >= 0 and y >= 0
            return sum(feasible(cons, q, nonneg=False) for q in points)
        if kind == "C03-M2":  # keeps the origin's side of every line
            return sum(feasible([origin_side(s) for s in cons], q) for q in points)
        if kind == "C03-M3":  # leaves the boundary lines out
            return sum(feasible(cons, q, strict=True) for q in points)
        raise ValueError(kind)
    return model


C03 = {k: _c03(k) for k in ["key", "C03-M1", "C03-M2", "C03-M3"]}


# ---------- C04 Bounded, unbounded or empty: 1 bounded, 2 unbounded, 3 empty ----------
def _c04(kind):
    def model(v, p):
        cons = p["cons"]
        key = classify(cons)
        if kind == "key":
            return key
        if kind == "C04-M1":  # judges by the signs: any >= means unbounded, all <= bounded
            return 2 if any(con(s)[1] == ">=" for s in cons) else 1
        if kind == "C04-M2":  # every first-quadrant region is bounded
            return 1
        if kind == "C04-M3":  # an unbounded region has no feasible points
            if key != 2:
                raise ValueError("only an unbounded region")
            return 3
        if kind == "C04-M4":  # a >= and a <= pull opposite ways, so nothing satisfies both
            ops = {con(s)[1] for s in cons}
            if ops != {"<=", ">="}:
                raise ValueError("needs both a <= and a >= constraint")
            return 3
        raise ValueError(kind)
    return model


C04 = {k: _c04(k) for k in ["key", "C04-M1", "C04-M2", "C04-M3", "C04-M4"]}


# ---------- C05 Corner points ----------
# ask "missing": the corner not listed in params["known"]; ask "count": how many corners.
def _c05(kind):
    def model(v, p):
        cons = p["cons"]
        if p["ask"] == "count":
            if kind == "key":
                return len(corners(cons))
            if kind == "C05-M1":  # keeps every intersection in the first quadrant, unchecked
                return sum(1 for q in intersections(cons) if q[0] >= 0 and q[1] >= 0)
            if kind == "C05-M3":  # leaves out the origin
                n = len(corners(cons))
                if (0, 0) not in corners(cons):
                    raise ValueError("the origin is not a corner")
                return n - 1
            raise ValueError(kind)
        known = [pt_of(sympify(s, locals=_LOCALS)) for s in p["known"]]
        if kind == "key":
            left = [q for q in corners(cons) if q not in known]
            assert len(left) == 1, f"expected one missing corner, got {left}"
            return as_sym(left[0])
        if kind == "C05-M1":  # meets the first two lines without checking the rest
            q = meet(cons[0], cons[1])
            if q is None or feasible(cons, q):
                raise ValueError("the first two lines meet at a real corner")
            return as_sym(q)
        if kind == "C05-M2":  # takes the axis intercept of a line that doesn't bind
            f, _, c = con(cons[0])
            a, b = f.coeff(x), f.coeff(y)
            q = c / a if p["axis"] == "x" else I * c / b
            if feasible(cons, q):
                raise ValueError("that intercept is a real corner")
            return q
        raise ValueError(kind)
    return model


C05 = {k: _c05(k) for k in ["key", "C05-M1", "C05-M2", "C05-M3"]}


MODELS = {"C01": C01, "C02": C02, "C03": C03, "C04": C04, "C05": C05}
