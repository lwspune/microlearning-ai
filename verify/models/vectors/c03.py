"""C03 Collinear and coplanar vectors: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  ratio  inputs A, B, C (points); params num, den name two of AB, AC, BC, ...:
         the scalar k with (num) = k (den), e.g. AC = k AB;
  comb3  inputs r, a, b, c: (x, y, z) with r = x a + y b + z c, as a Tuple;
  comb2  inputs a, b, c: (m, n) with a = m b + n c (a coplanar with b and c), as a Tuple.
Points and vectors come in as tuples "(1, -3, 4)".

The key is the definition: XY = y - x for points X, Y; k is the scalar that makes the two vectors
equal component by component; the coefficients make the vector equation hold in every component.
"""
from sympy import Abs, Matrix, Tuple, linsolve, symbols


def _v(t):
    return Matrix(list(t))


def _pts(v):
    return {"A": _v(v["A"]), "B": _v(v["B"]), "C": _v(v["C"])}


def _disp(v, name):  # "AC" -> c - a
    P = _pts(v)
    return P[name[1]] - P[name[0]]


def _k(v, p):
    """k with num = k den, from the definition: every component must agree."""
    num, den = _disp(v, p["num"]), _disp(v, p["den"])
    k = symbols("k")
    sol = linsolve(list(num - k * den), [k])
    assert len(sol) == 1, "the points are not collinear"
    (kk,) = list(sol)[0]
    return kk


def _solve(cols, rhs):
    """The coefficients t with sum t_i cols_i = rhs, from every component."""
    ts = symbols(f"t0:{len(cols)}")
    eqs = list(sum((t * c for t, c in zip(ts, cols)), Matrix([0, 0, 0])) - rhs)
    sol = linsolve(eqs, list(ts))
    assert len(sol) == 1, "no unique combination"
    return Tuple(*list(sol)[0])


def _comb(v, p):
    if p["ask"] == "comb3":
        return [_v(v["a"]), _v(v["b"]), _v(v["c"])], _v(v["r"])
    if p["ask"] == "comb2":
        return [_v(v["b"]), _v(v["c"])], _v(v["a"])
    raise ValueError("no linear combination asked")


def key(v, p):
    if p["ask"] == "ratio":
        return _k(v, p)
    cols, rhs = _comb(v, p)
    return _solve(cols, rhs)


def m1(v, p):  # tests the position vectors (c = k b) instead of AC = k AB: k from the first usable component
    if p["ask"] != "ratio":
        raise ValueError("no points involved")
    P = _pts(v)
    top, bottom = P[p["num"][1]], P[p["den"][1]]
    for t, b in zip(top, bottom):
        if b != 0:
            return t / b
    raise ValueError("no usable component")


def m2(v, p):  # builds each equation from one vector's own components: solves the transposed system
    cols, rhs = _comb(v, p)
    n = len(cols)
    M = Matrix.hstack(*cols)[:n, :]  # with two unknowns the student uses the first two equations
    return Tuple(*M.T.solve(rhs[:n, :]))


def m3(v, p):  # k as the ratio of lengths: always positive
    if p["ask"] != "ratio":
        raise ValueError("no ratio asked")
    return Abs(_k(v, p))


def m4(v, p):  # writes the relation the other way round: den = k num, so 1/k
    if p["ask"] != "ratio":
        raise ValueError("no ratio asked")
    return 1 / _k(v, p)


def m5(v, p):  # each coefficient read off one component, as if each vector lay along one axis
    cols, rhs = _comb(v, p)
    out = []
    for i, c in enumerate(cols):
        if c[i] == 0:
            raise ValueError("division by a zero component")
        out.append(rhs[i] / c[i])
    return Tuple(*out)


def m6(v, p):  # moves the given vector across without changing its sign: every coefficient negated
    cols, rhs = _comb(v, p)
    return _solve(cols, -rhs)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
