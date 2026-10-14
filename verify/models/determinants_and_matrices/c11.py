"""C11 The transpose: answer models (the key, and one per misconception).

Inputs (sympy): A, B = matrices; a, b = numbers (a defaults to 1, b to 0).
params["form"]:
  T     (aA)^T                     (B unused)
  sumT  aA^T + bB^T                (A, B the same order)
  Tof   (aA + bB^T)^T              (B^T the order of A)
  AB    (AB)^T
Each "wrong transpose" model replaces the transpose everywhere by its own operation W.
"""
from sympy import Integer, Matrix


def _T(M):
    """The transpose from the definition: the (i, j) entry of M^T is the (j, i) entry of M."""
    m, n = M.shape
    return Matrix(n, m, lambda i, j: M[j, i])


def _cw(M):
    """A quarter turn clockwise: the first row becomes the last column."""
    m, n = M.shape
    return Matrix(n, m, lambda i, j: M[m - 1 - j, i])


def _acw(M):
    """A quarter turn anticlockwise: each row written up its column, bottom to top."""
    m, n = M.shape
    return Matrix(n, m, lambda i, j: M[j, n - 1 - i])


def _reshape(M):
    """Keeps the reading order, re-broken into rows of the new length."""
    m, n = M.shape
    if m == n:
        raise ValueError("a square matrix reshapes to itself")
    return M.reshape(n, m)


def _ab(v):
    return v.get("a", Integer(1)), v.get("b", Integer(0))


def _eval(v, p, W):
    """The asked expression with every transpose done by W."""
    a, b = _ab(v)
    A, form = v["A"], p["form"]
    if form == "T":
        return W(a * A)
    if form == "sumT":
        return a * W(A) + b * W(v["B"])
    if form == "Tof":
        return W(a * A + b * W(v["B"]))
    if form == "AB":
        return W(A * v["B"])
    raise ValueError(f"unknown form {form}")


def key(v, p):
    return _eval(v, p, _T)


def m1(v, p):
    """(AB)^T = A^T B^T: the order is not reversed."""
    if p["form"] != "AB":
        raise ValueError("a product law")
    return _T(v["A"]) * _T(v["B"])


def m2(v, p):
    """(AB)^T = BA: the order is reversed but the factors are not transposed."""
    if p["form"] != "AB":
        raise ValueError("a product law")
    return v["B"] * v["A"]


def m3(v, p):
    """Turns the matrix a quarter turn clockwise: the first row becomes the last column."""
    return _eval(v, p, _cw)


def m4(v, p):
    """Keeps the entries in reading order and re-breaks them into rows of the new length."""
    return _eval(v, p, _reshape)


def m5(v, p):
    """Works out the inside but never transposes the result."""
    a, b = _ab(v)
    A, form = v["A"], p["form"]
    if form == "T":
        return a * A
    if form == "sumT":
        return a * A + b * v["B"]
    if form == "Tof":
        return a * A + b * _T(v["B"])
    if form == "AB":
        return A * v["B"]
    raise ValueError(f"unknown form {form}")


def m6(v, p):
    """Turns the matrix a quarter turn anticlockwise: each row is written up its column."""
    return _eval(v, p, _acw)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
