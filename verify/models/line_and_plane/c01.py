"""C01 Vector and Cartesian equations of a line: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  points    inputs A, B (points, as tuples): the line through A and B;
  sym       inputs e1, e2, e3 (the three members of a line written e1 = e2 = e3, each in one of x, y, z):
            that line;
  parallel  inputs P (a point) and e1, e2, e3 (a line, as above): the line through P parallel to it;
  distance  inputs e1, e2, e3 (a line, as above) and d: the point at distance d from the line's base point
            (the point read off its equations), on the side where x increases.

A line answer is compared as a line, whatever point and scale its equation was written with: its value is
the Tuple (foot of the perpendicular from O to the line, then its direction ratios scaled to coprime integers
with the first nonzero one positive). Two equations of one line give the same Tuple. The option text shows
the equation the student would write (RAW gives that point and direction).

The key comes from the definition: the line e1 = e2 = e3 is the set of points where all three equal a common
value t, so solving each for its variable at t = 0 and t = 1 gives two points on it; a line through two points
contains both of them.
"""
from functools import reduce
from math import gcd

from sympy import Matrix, Rational, Symbol, Tuple, nsimplify, solve, sqrt

_t = Symbol("t")


def _v(x):
    return Matrix(list(x))


def _var(e):
    (s,) = e.free_symbols
    return s


def _order(v):
    """e1, e2, e3 in the order x, y, z (each names its own variable)."""
    es = [v["e1"], v["e2"], v["e3"]]
    return sorted(es, key=lambda e: str(_var(e)))


def _on_line(v, t):
    """The point of the line e1 = e2 = e3 where the common value is t (the definition)."""
    return Matrix([solve(e - t, _var(e))[0] for e in _order(v)])


def _ints(d):
    """Direction ratios as coprime integers, keeping the sign (the text a student writes)."""
    d = [Rational(nsimplify(c)) for c in d]
    den = reduce(lambda a, b: a * b // gcd(a, b), [c.q for c in d], 1)
    n = [int(c * den) for c in d]
    g = reduce(gcd, [abs(c) for c in n if c] or [1])
    return Matrix([c // g for c in n])


def _canon(point, d):
    """A line as (foot of the perpendicular from O, primitive direction with first nonzero entry positive)."""
    d = _ints(d)
    if next(c for c in d if c != 0) < 0:
        d = -d
    foot = point - (point.dot(d) / d.dot(d)) * d
    return Tuple(*foot, *d)


# ---------- the (point, direction) each model writes ----------

def _key_raw(v, p):
    ask = p["ask"]
    if ask == "points":
        A, B = _v(v["A"]), _v(v["B"])
        return A, B - A
    base, d = _on_line(v, 0), _on_line(v, 1) - _on_line(v, 0)
    if ask == "sym":
        return base, d
    if ask == "parallel":
        return _v(v["P"]), d
    raise ValueError(f"{ask}: not a line")


def _coeffs(v):
    """The coefficient of x, y and z as written in e1, e2, e3."""
    return Matrix([e.diff(_var(e)) for e in _order(v)])


def m1_raw(v, p):  # the position vector of B taken as the direction
    if p["ask"] != "points":
        raise ValueError("needs two points")
    return _v(v["A"]), _v(v["B"])


def m2_raw(v, p):  # the coefficients of x, y, z taken as direction ratios
    if p["ask"] not in ("sym", "parallel"):
        raise ValueError("needs a line with coefficients")
    pt, _ = _key_raw(v, p)
    return pt, _coeffs(v)


def m3_raw(v, p):  # the point read with the signs as written: (x + 5)/3 read as x1 = 5
    pt, d = _key_raw(v, p)
    return -pt, d


def m4_raw(v, p):  # a negative coefficient ignored: 1 - z read as (z - 1)/1
    if p["ask"] not in ("sym", "parallel"):
        raise ValueError("needs a line with coefficients")
    c = _coeffs(v)
    if all(x > 0 for x in c):
        raise ValueError("no negative coefficient")
    pt, _ = _key_raw(v, p)
    return pt, Matrix([1 / abs(x) for x in c])


def m6_raw(v, p):  # the fixed point dropped: r = lambda b, a line through O
    _, d = _key_raw(v, p)
    return Matrix([0, 0, 0]), d


def _line(raw):
    def f(v, p):
        if p["ask"] == "distance":
            raise ValueError("asks for a point")
        return _canon(*raw(v, p))
    return f


# ---------- the distance item: a point ----------

def _unit_dir(v):
    d = _on_line(v, 1) - _on_line(v, 0)
    d = d / sqrt(d.dot(d))
    return d if d[0] > 0 else -d


def key_distance(v, p):
    return Tuple(*(_on_line(v, 0) + v["d"] * _unit_dir(v)))


def m5_distance(v, p):  # lambda = d, as if the direction ratios were a unit vector
    d = _on_line(v, 1) - _on_line(v, 0)
    d = d if d[0] > 0 else -d
    return Tuple(*(_on_line(v, 0) + v["d"] * d))


def m3_distance(v, p):
    return Tuple(*(-_on_line(v, 0) + v["d"] * _unit_dir(v)))


def m6_distance(v, p):
    return Tuple(*(v["d"] * _unit_dir(v)))


def _either(line, point):
    def f(v, p):
        return point(v, p) if p["ask"] == "distance" else line(v, p)
    return f


def _no_point(v, p):
    raise ValueError("does not apply to the distance item")


RAW = {"key": _key_raw, "C01-M1": m1_raw, "C01-M2": m2_raw, "C01-M3": m3_raw, "C01-M4": m4_raw, "C01-M6": m6_raw}

MODELS = {
    "key": _either(_line(_key_raw), key_distance),
    "C01-M1": _either(_line(m1_raw), _no_point),
    "C01-M2": _either(_line(m2_raw), _no_point),
    "C01-M3": _either(_line(m3_raw), m3_distance),
    "C01-M4": _either(_line(m4_raw), _no_point),
    "C01-M5": _either(_no_point, m5_distance),
    "C01-M6": _either(_line(m6_raw), m6_distance),
}
