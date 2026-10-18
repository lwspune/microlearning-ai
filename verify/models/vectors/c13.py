"""C13 Identities with triple products: answer models (the key, and one per misconception).

Inputs:
  u, v, w  the three vectors in the bracket [u v w], each a tuple of its coefficients of
           a, b, c: "(1, 2, -1)" means a + 2b - c.
  t        optional: the value of [a b c]. Without it the answer is a multiple of
           T = [a b c], a plain symbol.
  g        optional: the value of [u v w] is given and the question asks for [a b c]
           (the answer is g / k, where [u v w] = k [a b c]).

Expanding [u v w] gives 27 terms of the form p q r [x y z] with x, y, z each one of a, b, c.
Terms with a repeated vector vanish; the six left are the orders of a, b, c, each +[a b c]
for a cyclic order and -[a b c] for a swapped one. The models get one of those moves wrong.

The key never expands: it builds a, b, c from free components, forms u, v, w, and divides
u . (v x w) by a . (b x c) with sympy's own cross and dot.
"""
from itertools import permutations

from sympy import Matrix, Symbol, cancel, symbols

T = Symbol("T")

_A = Matrix(symbols("a1:4"))
_B = Matrix(symbols("b1:4"))
_C = Matrix(symbols("c1:4"))


def _rows(v):
    return [list(v[n]) for n in ("u", "v", "w")]


def _sign(p):
    """+1 for a cyclic order of (0, 1, 2), -1 for a swapped one."""
    return 1 if p in ((0, 1, 2), (1, 2, 0), (2, 0, 1)) else -1


def _terms(v):
    """The six surviving terms: (order, coefficient product, coefficients)."""
    m = _rows(v)
    out = []
    for p in permutations(range(3)):
        cs = [m[i][p[i]] for i in range(3)]
        out.append((p, cs[0] * cs[1] * cs[2], cs))
    return out


def _answer(v, k):
    """The multiple k of [a b c] turned into what the item asks for."""
    if "g" in v:
        if k == 0:
            raise ValueError("[u v w] = 0 whatever [a b c] is")
        return v["g"] / k
    return k * v.get("t", T)


def key(v, p):
    u, x, w = ([r[0] * _A + r[1] * _B + r[2] * _C for r in _rows(v)])
    k = cancel(u.dot(x.cross(w)) / _A.dot(_B.cross(_C)))
    return _answer(v, k)


def m1(v, p):  # the order is ignored: every surviving term counted as +[a b c]
    return _answer(v, sum(prod for _, prod, _ in _terms(v)))


def m2(v, p):  # every change of order flips the sign, a cyclic shift included
    return _answer(v, sum(prod * (1 if o == (0, 1, 2) else -1) for o, prod, _ in _terms(v)))


def m3(v, p):  # keeps only the term in the listed order: a from u, b from v, c from w
    m = _rows(v)
    return _answer(v, m[0][0] * m[1][1] * m[2][2])


def m4(v, p):  # takes the scalars out of the bracket by adding them, not multiplying
    if any(sum(1 for x in r if x != 0) != 1 for r in _rows(v)):
        raise ValueError("only for a bracket of plain multiples, like [2b 3a 4c]")
    return _answer(v, sum(_sign(o) * sum(cs) for o, prod, cs in _terms(v) if prod != 0))


def m5(v, p):  # the determinant of the coefficients with the middle term given a + sign
    m = Matrix(_rows(v))
    k = sum(m[0, j] * m.minor_submatrix(0, j).det() for j in range(3))
    return _answer(v, k)


def m6(v, p):  # loses the minus signs of the coefficients when multiplying out
    return _answer(v, Matrix(_rows(v)).applyfunc(abs).det())


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5, "C13-M6": m6}
