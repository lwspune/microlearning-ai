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

from math import gcd

from sympy import I, Eq, Rational, Symbol, im, re, solve, symbols, sympify

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


# ---------- shared: inequalities as values, objectives, optima ----------
def _q(v):
    return Rational(v.numerator, v.denominator)


def region_value(a, b, op, c):
    """An inequality as one value: the expression that is >= 0 exactly on its region, as written (not rescaled)."""
    f = _q(Fraction(a)) * x + _q(Fraction(b)) * y
    return _q(Fraction(c)) - f if op == "<=" else f - _q(Fraction(c))


def ineq_text(a, b, op, c):
    r"""LaTeX for a x + b y op c with integer coefficients, e.g. x - 2y \le 4."""
    def term(k, v, first):
        if k == 0:
            return ""
        sign = "-" if k < 0 else ("" if first else "+")
        mag = "" if abs(k) == 1 else str(abs(k))
        return f"{sign}{mag}{v}" if first else f" {sign} {mag}{v}"
    lhs = (term(a, "x", True) + term(b, "y", a == 0)).strip()
    rel = r"\le" if op == "<=" else r"\ge"
    return f"{lhs} {rel} {c}"


def _norm(s):
    """A constraint as a canonical <= triple, so equal constraints compare equal whatever their sign or scale."""
    a, b, op, c = lin(s)
    if op == ">=":
        a, b, c = -a, -b, -c
    k = max(abs(a), abs(b))
    return (a / k, b / k, c / k)


def zfun(z):
    f = sympify(z, locals=_LOCALS)
    return _frac(f.coeff(x)), _frac(f.coeff(y))


def zval(z, pt):
    p, q = zfun(z)
    return p * pt[0] + q * pt[1]


def _best(z, pts, goal):
    vals = [zval(z, q) for q in pts]
    return max(vals) if goal == "max" else min(vals)


def _recession(cons):
    every = list(cons) + NONNEG
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

    return [d for d in candidates if d != (0, 0) and recedes(d)]


def unbounded_objective(cons, z, goal):
    """True when Z has no max (or min) on the region: some direction the region runs off along improves Z."""
    p, q = zfun(z)
    for d in _recession(cons):
        v = p * d[0] + q * d[1]
        if (goal == "max" and v > 0) or (goal == "min" and v < 0):
            return True
    return False


def optimal_corners(cons, z, goal):
    cs = corners(cons)
    best = _best(z, cs, goal)
    return [c for c in cs if zval(z, c) == best]


def _unique(pts, what):
    if len(pts) != 1:
        raise ValueError(f"{what} is not a single answer: {pts}")
    return pts[0]


# ---------- C06 >= or <= from the shading: a line through (p, 0) and (0, q), one side shaded ----------
def written_line(p, q):
    """x/p + y/q = 1 as integer a x + b y = c with a > 0 and no common factor."""
    a, b, c = q, p, p * q
    if a < 0 or (a == 0 and b < 0):
        a, b, c = -a, -b, -c
    g = gcd(gcd(int(a), int(b)), int(c))
    return a // g, b // g, c // g


def _origin_op(c, side):
    assert c != 0, "the line must miss the origin"
    origin = "<=" if 0 <= c else ">="
    if side == "origin":
        return origin
    return ">=" if origin == "<=" else "<="


def c06_ineq(kind, p, q, side):
    a, b, c = written_line(p, q)
    if kind == "key":
        return a, b, _origin_op(c, side), c
    if kind == "C06-M1":  # shading above the line read as >=, below as <=
        if b == 0:
            raise ValueError("a vertical line has no above")
        origin_above = 0 > Fraction(c, b)
        above = origin_above if side == "origin" else not origin_above
        return a, b, (">=" if above else "<="), c
    if kind == "C06-M2":  # swaps the intercepts, then tests the origin correctly
        a2, b2, c2 = written_line(q, p)
        return a2, b2, _origin_op(c2, side), c2
    raise ValueError(kind)


def _c06(kind):
    def model(v, p):
        return region_value(*c06_ineq(kind, int(p["p"]), int(p["q"]), p["side"]))
    return model


C06 = {k: _c06(k) for k in ["key", "C06-M1", "C06-M2"]}


# ---------- C07 The system behind a figure: which candidate system is the shaded region ----------
def _system(text):
    return frozenset(_norm(s.strip()) for s in text.split(";"))


def c07_system(kind, cons):
    if kind == "C07-M1":  # above read as >=, below as <=, line by line
        out = []
        for s in cons:
            a, b, op, c = lin(s)
            if b == 0:
                out.append(s)
                continue
            above = (op == ">=" and b > 0) or (op == "<=" and b < 0)
            out.append(f"{con(s)[0]} {'>=' if above else '<='} {c}")
        return out
    if kind == "C07-M2":  # every constraint keeps the origin's side
        return [origin_side(s) for s in cons]
    raise ValueError(kind)


def _c07(kind):
    def model(v, p):
        cands = p["cands"]
        if kind == "key":
            target = sorted(corners(p["cons"]))
            hits = [i for i, t in enumerate(cands) if sorted(corners([s.strip() for s in t.split(";")])) == target]
        else:
            want = frozenset(_norm(s) for s in c07_system(kind, p["cons"]))
            hits = [i for i, t in enumerate(cands) if _system(t) == want]
        return Rational(_unique(hits, f"{kind}'s system") + 1)
    return model


C07 = {k: _c07(k) for k in ["key", "C07-M1", "C07-M2"]}


# ---------- C08 The corner-point method ----------
def _c08(kind):
    def model(v, p):
        cons, z, goal = p["cons"], p["z"], p["goal"]
        if kind == "key":
            pts = corners(cons)
        elif kind == "C08-M1":  # only the corners on the axes
            pts = [c for c in corners(cons) if c[0] == 0 or c[1] == 0]
        elif kind == "C08-M2":  # every crossing of the constraint lines in the first quadrant, unchecked
            pts = [c for c in intersections(cons) if c[0] >= 0 and c[1] >= 0 and (c != (0, 0) or feasible(cons, c))]
        else:
            raise ValueError(kind)
        best = _best(z, pts, goal)
        if p.get("ask") == "point":
            return as_sym(_unique([c for c in pts if zval(z, c) == best], "the optimum"))
        return _q(best)
    return model


C08 = {k: _c08(k) for k in ["key", "C08-M1", "C08-M2"]}


# ---------- C09 Minimum, negative coefficients, max - min ----------
def _c09(kind):
    def model(v, p):
        cons, z, ask = p["cons"], p["z"], p["ask"]
        cs = corners(cons)
        mx, mn = _best(z, cs, "max"), _best(z, cs, "min")
        if kind == "key":
            return _q({"max": mx, "min": mn, "range": mx - mn}[ask])
        if kind == "C09-M1":  # the minimum is at the origin
            if ask == "max":
                raise ValueError("not about a minimum")
            if (0, 0) in cs and mn == 0:
                raise ValueError("the origin really is the minimum")
            return _q(mx if ask == "range" else Fraction(0))
        if kind == "C09-M2":  # judges by the corner's size (x + y), not by Z
            big = _unique([c for c in cs if c[0] + c[1] == max(d[0] + d[1] for d in cs)], "the largest corner")
            small = _unique([c for c in cs if c[0] + c[1] == min(d[0] + d[1] for d in cs)], "the smallest corner")
            return _q({"max": zval(z, big), "min": zval(z, small), "range": zval(z, big) - zval(z, small)}[ask])
        if kind == "C09-M3":  # drops the minus signs in Z
            pz, qz = zfun(z)
            if pz >= 0 and qz >= 0:
                raise ValueError("Z has no negative coefficient")
            za = f"{abs(pz)}*x + {abs(qz)}*y"
            amx, amn = _best(za, cs, "max"), _best(za, cs, "min")
            return _q({"max": amx, "min": amn, "range": amx - amn}[ask])
        raise ValueError(kind)
    return model


C09 = {k: _c09(k) for k in ["key", "C09-M1", "C09-M2", "C09-M3"]}

NOMAX, NOMIN, EMPTY = Symbol("nomax"), Symbol("nomin"), Symbol("empty")
SEGMENT, TWOPOINTS = Symbol("segment"), Symbol("twopoints")


# ---------- C10 Optimum over an unbounded region ----------
def _c10(kind):
    def model(v, p):
        cons, z, goal = p["cons"], p["z"], p["goal"]
        none = NOMAX if goal == "max" else NOMIN
        if kind == "key":
            return none if unbounded_objective(cons, z, goal) else _q(_best(z, corners(cons), goal))
        if kind == "C10-M1":  # the best corner, without checking
            return _q(_best(z, corners(cons), goal))
        if kind == "C10-M2":  # an unbounded region has no optimum
            if classify(cons) != 2:
                raise ValueError("the region is bounded")
            return none
        if kind == "C10-M3":  # an unbounded region has no feasible points
            return EMPTY
        raise ValueError(kind)
    return model


C10 = {k: _c10(k) for k in ["key", "C10-M1", "C10-M2", "C10-M3"]}


# ---------- C11 Infinitely many optima ----------
def _c11(kind):
    def model(v, p):
        cons, z, goal, ask = p["cons"], p["z"], p["goal"], p["ask"]
        best = optimal_corners(cons, z, goal)
        pz, qz = zfun(z)
        parallel = any(lin(s)[0] * qz == lin(s)[1] * pz for s in cons)
        if ask == "count":
            if kind == "key":
                return sympify("oo") if len(best) > 1 else Rational(1)
            if kind == "C11-M1":  # stops at the first optimal corner
                return Rational(1)
            if kind == "C11-M2":  # only the tied corners themselves
                return Rational(len(best))
            if kind == "C11-M3":  # parallel to any constraint line means infinitely many
                if not parallel:
                    raise ValueError("Z is parallel to no constraint")
                return sympify("oo")
            raise ValueError(kind)
        if kind == "key":
            return SEGMENT if len(best) > 1 else as_sym(best[0])
        if kind == "C11-M1":  # only one tied corner (either shows it; items list the one nearer the x-axis)
            if len(best) < 2:
                raise ValueError("no tie")
            return as_sym(min(best, key=lambda c: c[1]))
        if kind == "C11-M2":  # only the two tied corners, not the points between
            if len(best) < 2:
                raise ValueError("no tie")
            return TWOPOINTS
        if kind == "C11-M3":
            if not parallel:
                raise ValueError("Z is parallel to no constraint")
            return SEGMENT
        if kind == "C11-M4":  # judges by size: the largest corner for a maximum, the smallest for a minimum
            cs = corners(cons)
            pick = max if goal == "max" else min
            size = pick(d[0] + d[1] for d in cs)
            return as_sym(_unique([c for c in cs if c[0] + c[1] == size], "the extreme corner"))
        raise ValueError(kind)
    return model


C11 = {k: _c11(k) for k in ["key", "C11-M1", "C11-M2", "C11-M3", "C11-M4"]}


# ---------- C12 Formulating an LPP ----------
# A constraint is compared after dividing by its right side, so 60x + 30y <= 480 and 2x + y <= 16 match.
def _scaled(a, b, op, c):
    a, b, c = Fraction(a), Fraction(b), Fraction(c)
    f = _q(a / c) * x + _q(b / c) * y
    return 1 - f if op == "<=" else f - 1


def _c12(kind):
    def model(v, p):
        if p["ask"] == "objective":
            pz, qz, goal = Fraction(p["p"]), Fraction(p["q"]), p["goal"]
            sign = 1 if goal == "max" else -1
            if kind == "key":
                return sign * (_q(pz) * x + _q(qz) * y)
            if kind == "C12-M1":  # the per-unit figures swapped between the products
                return sign * (_q(qz) * x + _q(pz) * y)
            if kind == "C12-M4":  # maximises a cost or minimises a profit
                return -sign * (_q(pz) * x + _q(qz) * y)
            raise ValueError(kind)
        a, b, cap, op = Fraction(p["a"]), Fraction(p["b"]), Fraction(p["cap"]), p["op"]
        scale = Fraction(p.get("bscale", "1"))  # b is in units 1/scale of cap's (minutes against hours: 60)
        if kind == "key":
            return _scaled(a, b / scale, op, cap)
        if kind == "C12-M1":
            return _scaled(b / scale, a, op, cap)
        if kind == "C12-M2":  # "at most" written as >=, "at least" as <=
            return _scaled(a, b / scale, ">=" if op == "<=" else "<=", cap)
        if kind == "C12-M3":  # mixes units
            if scale == 1:
                raise ValueError("no unit change")
            return _scaled(a, b, op, cap)
        raise ValueError(kind)
    return model


C12 = {k: _c12(k) for k in ["key", "C12-M1", "C12-M2", "C12-M3", "C12-M4"]}


# ---------- C13 Solving a word problem end to end ----------
def _swap_first(cons):
    a, b, op, c = lin(cons[0])
    return [f"{b}*x + {a}*y {op} {c}"] + list(cons[1:])


def _c13(kind):
    def model(v, p):
        cons, z, goal = p["cons"], p["z"], p["goal"]
        if kind == "key":
            pts = corners(cons)
        elif kind == "C13-M1":  # swaps the coefficients in the first constraint
            pts = corners(_swap_first(cons))
        elif kind == "C13-M2":  # leaves out the last constraint
            if classify(cons[:-1]) != 1:
                raise ValueError("dropping it leaves no optimum")
            pts = corners(cons[:-1])
        elif kind == "C13-M3":  # makes only one product: the corners on the axes
            pts = [c for c in corners(cons) if c[0] == 0 or c[1] == 0]
        else:
            raise ValueError(kind)
        return _q(_best(z, pts, goal))
    return model


C13 = {k: _c13(k) for k in ["key", "C13-M1", "C13-M2", "C13-M3"]}


MODELS = {
    "C01": C01, "C02": C02, "C03": C03, "C04": C04, "C05": C05, "C06": C06, "C07": C07,
    "C08": C08, "C09": C09, "C10": C10, "C11": C11, "C12": C12, "C13": C13,
}
