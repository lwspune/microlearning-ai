"""C02 Angle between two lines: answer models (the key, and one per misconception).

Each line comes in as a point P (a tuple), a row of denominators d and a row of numerator
coefficients p (default (1, 1, 1)): the Cartesian form (p1 x - .)/d1 = (p2 y - .)/d2 = (p3 z - .)/d3,
so its true direction ratios are d_i / p_i. A line in vector form, or "x = -y, z = 2", has p = (1, 1, 1)
and d its direction vector. "2x = 3y = -z" has p = (2, 3, -1), d = (1, 1, 1).
Inputs: P1, d1, p1, P2, d2, p2. A d may hold the unknown k.

params["ask"]:
  angle  the acute angle between the lines, in radians;
  cos    the cosine of that acute angle;
  perp   the value of k that makes the lines perpendicular.

The key never uses the dot product: the angle comes from the cosine rule on the triangle the two
direction vectors make (cos = (|u|^2 + |w|^2 - |u - w|^2) / (2|u||w|)), and perpendicularity from
Pythagoras (|u + w|^2 = |u|^2 + |w|^2).
"""
from sympy import Matrix, Symbol, acos, simplify, solve, sqrt

K = Symbol("k")


def _v(t):
    return Matrix(list(t))


def _len2(u):
    return sum(c**2 for c in u)


def _dot(u, w):
    return sum(x * y for x, y in zip(u, w))


def _p(v, n):
    return _v(v.get(f"p{n}", (1, 1, 1)))


def _true_dirs(v):
    return [_v([d / c for d, c in zip(v[f"d{n}"], _p(v, n))]) for n in (1, 2)]


def _finish(u, w, p, cos_signed, absolute=True):
    """Turn a cosine into what the item asks; perp items solve a dot-product equation instead."""
    c = simplify(abs(cos_signed) if absolute else cos_signed)
    if abs(c) > 1:
        raise ValueError(f"cos theta = {c} is impossible")
    if p["ask"] == "cos":
        return c
    if p["ask"] == "angle":
        return acos(c)
    raise ValueError("not an angle item")


def _cos(u, w):
    return _dot(u, w) / sqrt(_len2(u) * _len2(w))


def _perp(u, w, rhs=0):
    sols = solve(_dot(u, w) - rhs, K)
    if len(sols) != 1:
        raise ValueError(f"no single k: {sols}")
    return sols[0]


def _reading(v, p, dirs):
    """Answer the item with the direction ratios a misreading gives."""
    u, w = dirs
    if p["ask"] == "perp":
        return _perp(u, w)
    return _finish(u, w, p, _cos(u, w))


def key(v, p):
    u, w = _true_dirs(v)
    if p["ask"] == "perp":
        sols = solve(_len2(u + w) - _len2(u) - _len2(w), K)  # Pythagoras on the two directions
        assert len(sols) == 1, sols
        return sols[0]
    cos_rule = (_len2(u) + _len2(w) - _len2(u - w)) / (2 * sqrt(_len2(u) * _len2(w)))
    return _finish(u, w, p, cos_rule)


def m1(v, p):
    """Uses the points (position vectors) on the lines instead of their directions."""
    if p["ask"] == "perp":
        raise ValueError("the points hold no k")
    a, b = _v(v["P1"]), _v(v["P2"])
    if _len2(a) == 0 or _len2(b) == 0:
        raise ValueError("a line through the origin gives a zero position vector")
    return _finish(a, b, p, _cos(a, b))


def m2(v, p):
    """Reads the denominators as the direction ratios, whatever the numerators say."""
    return _reading(v, p, [_v(v["d1"]), _v(v["d2"])])


def m3(v, p):
    """Drops the modulus: cos theta = b1.b2 / (|b1||b2|) with its sign, so an obtuse angle."""
    if p["ask"] == "perp":
        raise ValueError("perpendicularity has no sign to drop")
    u, w = _true_dirs(v)
    return _finish(u, w, p, _cos(u, w), absolute=False)


def m4(v, p):
    """cos theta = |a1 a2 + b1 b2 + c1 c2| with direction ratios: the direction-cosine formula,
    without dividing by the lengths."""
    if p["ask"] == "perp":
        raise ValueError("perpendicularity needs no lengths")
    u, w = _true_dirs(v)
    return _finish(u, w, p, _dot(u, w))


def m5(v, p):
    """Ignores a minus sign in front of x, y or z: reads (1 - x)/3 as (x - 1)/3, but does divide by
    the coefficient (7y - 14)/(2k) -> 2k/7."""
    return _reading(v, p, [_v([d / abs(c) for d, c in zip(v[f"d{n}"], _p(v, n))]) for n in (1, 2)])


def m6(v, p):
    """Forgets to divide by the coefficient of x, y or z: reads (7y - 14)/(2k) as direction ratio 2k,
    though it does handle the sign of (1 - x)."""
    return _reading(v, p, [_v([d * (1 if c > 0 else -1) for d, c in zip(v[f"d{n}"], _p(v, n))]) for n in (1, 2)])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
