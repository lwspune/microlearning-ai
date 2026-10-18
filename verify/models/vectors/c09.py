"""C09 Areas and unit normals from the cross product: answer models (the key, and one per misconception).

params["ask"] says what the item asks (vector inputs are component tuples):
  par_sides   inputs a, b: the area of the parallelogram with adjacent sides a and b;
  par_pts     inputs K, L, M, N (points): the area of parallelogram KLMN (adjacent sides KL, KN);
  tri_pts     inputs A, B, C (points): the area of triangle ABC;
  par_angle   inputs la, lb, th: the area of the parallelogram with sides of length la, lb at angle th (radians);
  angle       inputs d (a.b), c (a x b as a tuple): the angle between a and b;
  normal_pts  inputs A, B, C (points): a unit vector perpendicular to the plane ABC.

The key never uses the cross product: areas come from |u|^2 |w|^2 - (u.w)^2 (base times height with
sin^2 = 1 - cos^2), the angle from |a|^2 |b|^2 = |a x b|^2 + (a.b)^2, and the unit normal from the null
space of the two sides, with its first non-zero component made positive.
"""
from sympy import Matrix, Rational, acos, atan, cos, sin, sqrt

HALF = Rational(1, 2)


def _v(t):
    return Matrix(list(t))


def _sq(u):
    return u.dot(u)


def _mag(u):
    return sqrt(_sq(u))


def _sides(v, p):
    """The two sides from one vertex, and the area factor: 1 for a parallelogram, 1/2 for a triangle."""
    ask = p["ask"]
    if ask == "par_sides":
        return _v(v["a"]), _v(v["b"]), 1
    if ask == "par_pts":
        K = _v(v["K"])
        return _v(v["L"]) - K, _v(v["N"]) - K, 1
    if ask in ("tri_pts", "normal_pts"):
        A = _v(v["A"])
        return _v(v["B"]) - A, _v(v["C"]) - A, HALF
    raise ValueError(ask)


def key(v, p):
    ask = p["ask"]
    if ask == "par_angle":
        return v["la"] * v["lb"] * sin(v["th"])
    if ask == "angle":
        ab = sqrt(_sq(_v(v["c"])) + v["d"] ** 2)  # |a||b|
        return acos(v["d"] / ab)
    u, w, f = _sides(v, p)
    if ask == "normal_pts":
        n = Matrix([u.T, w.T]).nullspace()[0]
        n = n / _mag(n)
        first = next(x for x in n if x != 0)
        return n if first > 0 else -n
    return f * sqrt(_sq(u) * _sq(w) - u.dot(w) ** 2)


def m1(v, p):  # mixes up the two areas: |a x b| for a triangle, half of it for a parallelogram
    ask = p["ask"]
    if ask == "par_angle":
        return HALF * v["la"] * v["lb"] * sin(v["th"])
    if ask in ("angle", "normal_pts"):
        raise ValueError("no area asked")
    u, w, f = _sides(v, p)
    return (1 if f == HALF else HALF) * _mag(u.cross(w))


def m2(v, p):  # takes |a x b| = |a||b| cos(theta), the dot product's formula
    ask = p["ask"]
    if ask == "par_angle":
        return v["la"] * v["lb"] * cos(v["th"])
    if ask == "angle":  # then a.b is the sine part: tan(theta) = a.b / |a x b|
        return atan(v["d"] / _mag(_v(v["c"])))
    raise ValueError("no angle in play")


def m3(v, p):  # takes |a x b| = |a||b|, dropping sin(theta): a rectangle's area
    ask = p["ask"]
    if ask == "par_angle":
        return v["la"] * v["lb"]
    if ask == "angle":  # |a||b| = |a x b|, so cos(theta) = a.b / |a x b|
        return acos(v["d"] / _mag(_v(v["c"])))
    u, w, f = _sides(v, p)
    if ask == "normal_pts":  # divides a x b by |a||b|
        return u.cross(w) / (_mag(u) * _mag(w))
    return f * _mag(u) * _mag(w)


def m4(v, p):  # crosses the position vectors of two vertices in place of the sides from one vertex
    ask = p["ask"]
    if ask == "par_pts":
        return _mag(_v(v["L"]).cross(_v(v["N"])))
    if ask == "tri_pts":
        return HALF * _mag(_v(v["B"]).cross(_v(v["C"])))
    if ask == "normal_pts":
        n = _v(v["B"]).cross(_v(v["C"]))
        return n / _mag(n)
    raise ValueError("no points")


def m5(v, p):  # takes a magnitude as the sum of squares, forgetting the square root
    ask = p["ask"]
    if ask == "par_angle":
        raise ValueError("no magnitude to find")
    if ask == "angle":
        return atan(_sq(_v(v["c"])) / v["d"])
    u, w, f = _sides(v, p)
    n = u.cross(w)
    if ask == "normal_pts":
        return n / _sq(n)
    return f * _sq(n)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
