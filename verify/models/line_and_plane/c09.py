"""C09 Distance of a point from a plane: answer models (the key, and one per misconception).

Inputs: the point P (a tuple "(4, -3, 1)"), the plane's normal n (a tuple) and its constant d, with the
plane written n . r = d (so 3x + 4y - 12z + 20 = 0 is n = (3, 4, -12), d = -20).
params["form"]: "vec" when the plane was given as r . n = d, "cart" when in Cartesian form.

The key comes from the definition: the distance is the least |X - P| over points X of the plane, found by
minimising |X - P|^2 subject to n . X = d (a Lagrange multiplier), not from the formula being taught.
"""
from sympy import Abs, Matrix, Symbol, solve, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _parts(v):
    P, n, d = _v(v["P"]), _v(v["n"]), v["d"]
    return P, n, d, sqrt(n.dot(n))


def key(v, p):
    P, n, d, _ = _parts(v)
    x, y, z, mu = symbols("x y z mu", real=True)
    X = Matrix([x, y, z])
    f = (X - P).dot(X - P) - mu * (n.dot(X) - d)
    sol = solve([f.diff(s) for s in (x, y, z)] + [n.dot(X) - d], [x, y, z, mu], dict=True)
    (s,) = sol
    M = X.subs(s)
    return sqrt((M - P).dot(M - P))


def m1(v, p):  # drops the modulus: reports the signed value (p . n - d)/|n|, negative on one side
    P, n, d, ln = _parts(v)
    return (P.dot(n) - d) / ln


def m2(v, p):  # forgets to divide by |n|: takes |p . n - d| itself as the distance
    P, n, d, ln = _parts(v)
    return Abs(P.dot(n) - d)


def m3(v, p):  # divides by a^2 + b^2 + c^2 instead of its square root
    P, n, d, ln = _parts(v)
    return Abs(P.dot(n) - d) / n.dot(n)


def m4(v, p):  # moves the constant across without changing its sign: |p . n + d| / |n|
    P, n, d, ln = _parts(v)
    return Abs(P.dot(n) + d) / ln


def m5(v, p):  # normalises the normal but not the constant: |p . n/|n| - d|
    if p.get("form") != "vec":
        raise ValueError("the plane is not in vector form")
    P, n, d, ln = _parts(v)
    return Abs(P.dot(n) / ln - d)


def m6(v, p):  # gives the plane's distance from the origin, |d|/|n|, ignoring the point
    P, n, d, ln = _parts(v)
    return Abs(d) / ln


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
