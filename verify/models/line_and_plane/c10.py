"""C10 Angle between planes, and a line and a plane: answer models (the key, and one per misconception).

Inputs (tuples of numbers):
  planes items (params["ask"] = "planes"): n1, n2, the planes' normals (the coefficients of x, y, z).
  line-plane items (params["ask"] = "lineplane"): a, a point on the line; b, its direction; n, the plane's normal.
Every model returns the angle in radians.

The key never uses the dot-product formula being taught.
  Planes: the planes meet along u = n1 x n2. Inside each plane, v_i = n_i x u is perpendicular to that
  line, so the angle between the planes is the acute angle between v1 and v2, from the cosine rule on
  the triangle they make. Parallel planes (u = 0) meet at 0.
  Line and plane: the shadow (projection) of b on the plane is p = n x (b x n) / |n|^2. b, p and b - p
  form a right triangle with the right angle at p's tip, so sin theta = |b - p| / |b|.
"""
from sympy import Matrix, acos, asin, simplify, sqrt


def _v(t):
    return Matrix(list(t))


def _len2(u):
    return sum(c**2 for c in u)


def _dot(u, w):
    return sum(x * y for x, y in zip(u, w))


def _check(c):
    c = simplify(c)
    if abs(c) > 1:
        raise ValueError(f"impossible ratio {c}")
    return c


def _ask(p, want):
    if p["ask"] != want:
        raise ValueError(f"only for {want} items")


def key(v, p):
    if p["ask"] == "planes":
        n1, n2 = _v(v["n1"]), _v(v["n2"])
        u = n1.cross(n2)
        if _len2(u) == 0:
            return acos(1)  # parallel planes
        v1, v2 = n1.cross(u), n2.cross(u)
        cos_rule = (_len2(v1) + _len2(v2) - _len2(v1 - v2)) / (2 * sqrt(_len2(v1) * _len2(v2)))
        return acos(_check(abs(cos_rule)))
    b, n = _v(v["b"]), _v(v["n"])
    shadow = n.cross(b.cross(n)) / _len2(n)
    return asin(_check(sqrt(_len2(b - shadow) / _len2(b))))


def m1(v, p):
    """Line and plane: takes the angle between the line and the normal, cos theta = |b.n| / (|b||n|)."""
    _ask(p, "lineplane")
    b, n = _v(v["b"]), _v(v["n"])
    return acos(_check(abs(_dot(b, n)) / sqrt(_len2(b) * _len2(n))))


def m2(v, p):
    """Planes: uses sin theta = |n1.n2| / (|n1||n2|), as for a line and a plane (90 degrees minus the angle
    between the normals)."""
    _ask(p, "planes")
    n1, n2 = _v(v["n1"]), _v(v["n2"])
    return asin(_check(abs(_dot(n1, n2)) / sqrt(_len2(n1) * _len2(n2))))


def m3(v, p):
    """Planes: drops the modulus, cos theta = n1.n2 / (|n1||n2|), so a negative dot product gives an obtuse angle."""
    _ask(p, "planes")
    n1, n2 = _v(v["n1"]), _v(v["n2"])
    return acos(_check(_dot(n1, n2) / sqrt(_len2(n1) * _len2(n2))))


def m4(v, p):
    """Line and plane: uses the line's point (position vector a) in place of its direction b."""
    _ask(p, "lineplane")
    a, n = _v(v["a"]), _v(v["n"])
    if _len2(a) == 0:
        raise ValueError("a line through the origin has a = 0")
    return asin(_check(abs(_dot(a, n)) / sqrt(_len2(a) * _len2(n))))


def m5(v, p):
    """Takes a length as the sum of squares without the square root: |n| = a^2 + b^2 + c^2."""
    if p["ask"] == "planes":
        n1, n2 = _v(v["n1"]), _v(v["n2"])
        return acos(_check(abs(_dot(n1, n2)) / (_len2(n1) * _len2(n2))))
    b, n = _v(v["b"]), _v(v["n"])
    return asin(_check(abs(_dot(b, n)) / (_len2(b) * _len2(n))))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5}
