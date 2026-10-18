"""C10 Scalar triple product: answer models (the key, and one per misconception).

Inputs are component tuples named by single letters (a, b, c, ...).
params:
  terms  the products to add, "+"-separated; each term is three input names, so "bca" means
         [b c a] = b . (c x a). "abc+bac" means [a b c] + [b a c].
  base   the order the stem lists the vectors in (e.g. "abc"): the order a student who ignores
         the order of a triple product writes them in.

The key uses sympy's Matrix.cross and dot, never the determinant a student expands, so it is an
independent check of the determinant rule and of the sign rules the models get wrong.
"""
from sympy import Matrix


def _vecs(v, order):
    return [Matrix(list(v[ch])) for ch in order]


def _terms(p):
    return p["terms"].split("+")


def _true(v, order):
    x, y, z = _vecs(v, order)
    return x.dot(y.cross(z))


def _expand(v, order, signs=(1, -1, 1), minor=lambda a, b, c, d: a * d - b * c, weights=True):
    """The determinant with the three vectors as rows, expanded along row 1: each entry of row 1
    (or 1, if weights is False) times its sign times the 2 by 2 minor |a b; c d| left when its row
    and column are struck out."""
    x, y, z = _vecs(v, order)
    cols = [(1, 2), (0, 2), (0, 1)]
    return sum((x[k] if weights else 1) * s * minor(y[i], y[j], z[i], z[j])
               for k, (s, (i, j)) in enumerate(zip(signs, cols)))


def key(v, p):
    return sum(_true(v, t) for t in _terms(p))


def m1(v, p):  # the middle term keeps a + sign: the cofactor signs + - + are forgotten
    return sum(_expand(v, t, signs=(1, 1, 1)) for t in _terms(p))


def m2(v, p):  # the order is ignored: every product taken as [base], rows in the order listed
    return sum(_true(v, p["base"]) for _ in _terms(p))


def m3(v, p):  # every change of order flips the sign, a cyclic shift included
    b = p["base"]
    return sum(_true(v, b) * (1 if t == b else -1) for t in _terms(p))


def m4(v, p):  # multiplies matching components of all three, a1b1c1 + a2b2c2 + a3b3c3
    out = 0
    for t in _terms(p):
        x, y, z = _vecs(v, t)
        out += sum(x[i] * y[i] * z[i] for i in range(3))
    return out


def m5(v, p):  # each 2 by 2 minor |a b; c d| taken as bc - ad, the diagonals the wrong way round
    return sum(_expand(v, t, minor=lambda a, b, c, d: b * c - a * d) for t in _terms(p))


def m6(v, p):  # works out b x c and adds its components, never multiplying by the first vector
    return sum(_expand(v, t, weights=False) for t in _terms(p))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
