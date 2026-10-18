"""C04 Shortest distance between two lines: answer models (the key, and one per misconception).

Inputs: the lines r = a1 + lambda b1 and r = a2 + mu b2, as tuples a1, b1, a2, b2 ("(4, -1, 0)").
Parallel lines are given with b2 a multiple of b1.

The key comes from the definition: the shortest distance is the least value of |Q - P| over all
points P = a1 + lambda b1 and Q = a2 + mu b2, found by setting both partial derivatives of
|Q - P|^2 to 0. For parallel lines every lambda pairs with some mu, so lambda is fixed at 0.
"""
from sympy import Abs, Matrix, S, diff, solve, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _len(u):
    return sqrt(u.dot(u))


def _lines(v):
    return _v(v["a1"]), _v(v["b1"]), _v(v["a2"]), _v(v["b2"])


def _parallel(b1, b2):
    return b1.cross(b2) == Matrix([0, 0, 0])


def key(v, p):
    a1, b1, a2, b2 = _lines(v)
    lam, mu = symbols("lambda mu", real=True)
    if _parallel(b1, b2):
        lam = 0
    PQ = (a2 + mu * b2) - (a1 + lam * b1)
    d2 = PQ.dot(PQ)
    unknowns = [mu] if lam == 0 else [lam, mu]
    sol = solve([diff(d2, u) for u in unknowns], unknowns, dict=True)[0]
    return _len(PQ.subs(sol))


def m1(v, p):  # takes the distance between the two given points, |a2 - a1|
    a1, b1, a2, b2 = _lines(v)
    return _len(a2 - a1)


def m2(v, p):  # projects on a direction that is not a unit vector: never divides by its length
    a1, b1, a2, b2 = _lines(v)
    if _parallel(b1, b2):
        return _len((a2 - a1).cross(b1))
    return Abs((a2 - a1).dot(b1.cross(b2)))


def m3(v, p):  # parallel lines: measures a2 - a1 along the lines, |(a2 - a1) . b| / |b|, not across them
    a1, b1, a2, b2 = _lines(v)
    if not _parallel(b1, b2):
        raise ValueError("parallel lines only")
    return Abs((a2 - a1).dot(b1)) / _len(b1)


def m4(v, p):  # uses the skew-lines formula on parallel lines: b1 x b2 = 0, so it reports d = 0
    a1, b1, a2, b2 = _lines(v)
    if not _parallel(b1, b2):
        raise ValueError("only parallel lines make b1 x b2 = 0")
    return S.Zero


def m5(v, p):  # expands b1 x b2 without the minus sign on the j term
    a1, b1, a2, b2 = _lines(v)
    if _parallel(b1, b2):
        raise ValueError("skew lines only")
    n = b1.cross(b2)
    n = Matrix([n[0], -n[1], n[2]])
    if n[1] == 0:
        raise ValueError("the j component is 0: the slip gives the key")
    return Abs((a2 - a1).dot(n)) / _len(n)


def m6(v, p):  # drops the modulus: reports the signed value of the formula
    a1, b1, a2, b2 = _lines(v)
    if _parallel(b1, b2):
        raise ValueError("the parallel formula is a length, never negative")
    s = (a2 - a1).dot(b1.cross(b2))
    if s >= 0:
        raise ValueError("the triple product is not negative: the slip gives the key")
    return s / _len(b1.cross(b2))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
