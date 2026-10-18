"""C08 Cross product: answer models (the key, and one per misconception).

params["ask"] says what the item asks (inputs are component tuples):
  axb       inputs a, b: the vector a x b;
  bxa       inputs a, b: the vector b x a;
  sum_diff  inputs a, b: the vector (a + b) x (a - b);
  pq_pr     inputs P, Q, R (points): the vector PQ x PR.

The key uses sympy's own Matrix.cross, never the cofactor expansion a student writes, so it is an
independent check of the determinant rule the models get wrong.
"""
from sympy import Matrix, zeros


def _v(t):
    return Matrix(list(t))


def _pair(v, p):
    """The two factors, in order, of the cross product the item asks for."""
    ask = p["ask"]
    if ask == "axb":
        return _v(v["a"]), _v(v["b"])
    if ask == "bxa":
        return _v(v["b"]), _v(v["a"])
    if ask == "sum_diff":
        a, b = _v(v["a"]), _v(v["b"])
        return a + b, a - b
    if ask == "pq_pr":
        P, Q, R = _v(v["P"]), _v(v["Q"]), _v(v["R"])
        return Q - P, R - P
    raise ValueError(ask)


def _expand(u, w, signs=(1, -1, 1), minor=lambda a, b, c, d: a * d - b * c):
    """The determinant with rows i j k, u, w, expanded along the first row: each unit vector times
    its sign times the 2 by 2 minor |a b; c d| left when its row and column are struck out."""
    cols = [(1, 2), (0, 2), (0, 1)]
    return Matrix([s * minor(u[i], u[j], w[i], w[j]) for s, (i, j) in zip(signs, cols)])


def key(v, p):
    u, w = _pair(v, p)
    return u.cross(w)


def m1(v, p):  # the j term keeps a + sign: the cofactor signs + - + are forgotten
    u, w = _pair(v, p)
    return _expand(u, w, signs=(1, 1, 1))


def m2(v, p):  # the cross product taken as commutative: b x a = a x b
    ask = p["ask"]
    if ask == "bxa":  # computes a x b instead
        return _v(v["a"]).cross(_v(v["b"]))
    if ask == "sum_diff":  # a x a - a x b + b x a - b x b, with b x a = a x b, cancels to 0
        return zeros(3, 1)
    raise ValueError(f"{ask}: the order of the factors does not matter here")


def m3(v, p):  # multiplies matching components, as in the dot product, and keeps them as a vector
    u, w = _pair(v, p)
    return Matrix([u[i] * w[i] for i in range(3)])


def m4(v, p):  # each 2 by 2 minor |a b; c d| taken as bc - ad, the diagonals the wrong way round
    u, w = _pair(v, p)
    return _expand(u, w, minor=lambda a, b, c, d: b * c - a * d)


def m5(v, p):  # uses the position vectors of Q and R in place of PQ and PR
    if p["ask"] != "pq_pr":
        raise ValueError("no points")
    return _v(v["Q"]).cross(_v(v["R"]))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
