"""C06 Equation of a plane from a normal: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  vec, cart  inputs a (a point), n (a normal): the plane through a with normal n (vector or Cartesian text);
  parallel   inputs a (a point), m (the normal of a given plane r . m = 0): the plane through a parallel to it;
  bisector   inputs A, B (points): the plane bisecting AB at right angles;
  p          inputs n, d (the plane r . n = d): its distance from O;
  dcs        inputs n, d (the plane r . n = d): the direction cosines of the unit normal in its normal form
             r . n^ = p (p >= 0);
  p_point    inputs a, n: the distance from O of the plane through a with normal n.
params["form"] ("eq" or "zero", for p and dcs) is how the stem writes the plane: ax + by + cz = d, or
ax + by + cz - d = 0 with the constant on the left.

A plane answer is compared as a plane, whatever multiple its equation was written with: its value is the
Tuple (a, b, c, d) of ax + by + cz = d scaled to coprime integers with the first nonzero of a, b, c positive.
RAW gives the (normal, constant) each model writes, for the option text.

The key comes from the definitions: a plane through A with normal n is the set of points R with AR
perpendicular to n, (R - A) . n = 0, expanded in x, y, z; the perpendicular bisector of AB is the set of points
equidistant from A and B. The distance from O is |ON| for the point N of the plane nearest O, which lies on the
line through O along the normal; the unit normal of the normal form points from O to N.
"""
from functools import reduce
from math import gcd

from sympy import Matrix, Rational, Tuple, expand, sqrt, symbols

_x, _y, _z = symbols("x y z")
_R = Matrix([_x, _y, _z])


def _v(t):
    return Matrix(list(t))


def _from_expr(e):
    """(normal, constant) of the plane e = 0, e linear in x, y, z, written as ax + by + cz = d."""
    e = expand(e)
    n = Matrix([e.coeff(s) for s in (_x, _y, _z)])
    return n, -e.subs({_x: 0, _y: 0, _z: 0})


def _canon(n, d):
    vals = [Rational(c) for c in (*n, d)]
    den = reduce(lambda a, b: a * b // gcd(a, b), [c.q for c in vals], 1)
    ints = [int(c * den) for c in vals]
    g = reduce(gcd, [abs(c) for c in ints if c] or [1])
    ints = [c // g for c in ints]
    if next(c for c in ints[:3] if c != 0) < 0:
        ints = [-c for c in ints]
    return Tuple(*ints)


# ---------- the (normal, constant) each model writes ----------

def _key_raw(v, p):
    ask = p["ask"]
    if ask in ("vec", "cart", "p_point"):
        return _from_expr((_R - _v(v["a"])).dot(_v(v["n"])))
    if ask == "parallel":
        return _from_expr((_R - _v(v["a"])).dot(_v(v["m"])))
    if ask == "bisector":
        A, B = _v(v["A"]), _v(v["B"])
        return _from_expr((_R - A).dot(_R - A) - (_R - B).dot(_R - B))
    raise ValueError(f"{ask}: not a plane")


def _point_normal(v, p):
    """The point and normal a student reads off the question."""
    ask = p["ask"]
    if ask in ("vec", "cart", "p_point"):
        return _v(v["a"]), _v(v["n"])
    if ask == "parallel":
        return _v(v["a"]), _v(v["m"])
    if ask == "bisector":
        A, B = _v(v["A"]), _v(v["B"])
        return (A + B) / 2, B - A
    raise ValueError(f"{ask}: no point and normal")


def m1_raw(v, p):  # the constant dropped: r . n = 0, the plane of the family through O
    _, n = _point_normal(v, p)
    return n, 0


def m2_raw(v, p):  # the point's position vector used as the normal: r . a = a . n
    a, n = _point_normal(v, p)
    return a, a.dot(n)


def m3_raw(v, p):  # sign slip: a(x + x1) + b(y + y1) + c(z + z1) = 0, constant -a . n
    a, n = _point_normal(v, p)
    return n, -a.dot(n)


def _plane(raw):
    def f(v, p):
        if p["ask"] in ("p", "dcs", "p_point"):
            raise ValueError("asks for a number")
        return _canon(*raw(v, p))
    return f


# ---------- distance from O and the unit normal ----------

def _given(v, p):
    """The plane r . n = d the question is about."""
    if p["ask"] == "p_point":
        return _key_raw(v, p)
    return _v(v["n"]), v["d"]


def _foot(n, d):
    """The point of the plane r . n = d nearest O: on the line t n, with (t n) . n = d."""
    return (d / n.dot(n)) * n


def _key_number(v, p):
    n, d = _given(v, p)
    N = _foot(n, d)
    if p["ask"] in ("p", "p_point"):
        return sqrt(N.dot(N))
    if p["ask"] == "dcs":
        if d == 0:
            raise ValueError("plane through O")
        return Tuple(*(N / sqrt(N.dot(N))))
    raise ValueError("asks for a plane")


def _written_constant(v, p):
    """The constant as the stem writes it: the right side of ax + by + cz = d, or the -d of ... - d = 0."""
    _, d = _given(v, p)
    return -d if p.get("form") == "zero" else d


def m1_number(v, p):  # r . n = 0 through O: distance 0
    if p["ask"] != "p_point":
        raise ValueError("needs a point and a normal")
    return Rational(0)


def m2_number(v, p):  # normal a: the plane r . a = a . n
    if p["ask"] != "p_point":
        raise ValueError("needs a point and a normal")
    a, n = _v(v["a"]), _v(v["n"])
    return abs(a.dot(n)) / sqrt(a.dot(a))


def m4_number(v, p):  # the equation read as already in normal form: p = d, direction cosines = a, b, c
    n, d = _given(v, p)
    if p["ask"] == "dcs":
        return Tuple(*n)
    return d


def m5_number(v, p):  # |n| taken as a^2 + b^2 + c^2 (no square root)
    n, d = _given(v, p)
    if p["ask"] == "dcs":
        s = -1 if d < 0 else 1
        return Tuple(*(s * n / n.dot(n)))
    return abs(d) / n.dot(n)


def m6_number(v, p):  # p left negative: divides by |n| without making the constant positive first
    n, d = _given(v, p)
    if p["ask"] == "dcs":
        if d >= 0:
            raise ValueError("constant already positive")
        return Tuple(*(n / sqrt(n.dot(n))))
    c = _written_constant(v, p)
    if c >= 0:
        raise ValueError("constant already positive")
    return c / sqrt(n.dot(n))


def _either(plane, number):
    def f(v, p):
        return number(v, p) if p["ask"] in ("p", "dcs", "p_point") else plane(v, p)
    return f


def _no(v, p):
    raise ValueError("does not apply")


RAW = {"key": _key_raw, "C06-M1": m1_raw, "C06-M2": m2_raw, "C06-M3": m3_raw}

MODELS = {
    "key": _either(_plane(_key_raw), _key_number),
    "C06-M1": _either(_plane(m1_raw), m1_number),
    "C06-M2": _either(_plane(m2_raw), m2_number),
    "C06-M3": _either(_plane(m3_raw), _no),
    "C06-M4": _either(_no, m4_number),
    "C06-M5": _either(_no, m5_number),
    "C06-M6": _either(_no, m6_number),
}
