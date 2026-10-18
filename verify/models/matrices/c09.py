"""C09 Solving equations by inversion: answer models (the key, and one per misconception).

Inputs: A (the coefficient matrix, rows = equations, columns = x, y, z in order) and
B (the column of constants), for the system AX = B.
params["ask"]: "X" (the default: the solution as a Tuple (x, y[, z])) or one unknown,
"x", "y" or "z".
params["order"] (C09-M2 only): for each equation, the unknowns in the order its terms are
written, e.g. ["xy", "yx"] for 2x + 3y = 9, y - x = -2.

The key never inverts A: it solves the equations the system stands for (linsolve).
The models use A^{-1} = adj A / |A| the way a student does.
"""
from sympy import Matrix, Tuple, linsolve, symbols, zeros

NAMES = "xyz"


def _sys(v):
    A, B = Matrix(v["A"]), Matrix(v["B"])
    if A.rows != A.cols or B.shape != (A.rows, 1):
        raise ValueError("need a square A and a column B")
    if A.det() == 0:
        raise ValueError("A is singular: inversion does not apply")
    return A, B


def _ask(X, p):
    ask = p.get("ask", "X")
    if ask == "X":
        return Tuple(*X)
    if ask in NAMES[: len(X)]:
        return X[NAMES.index(ask)]
    raise ValueError(f"unknown ask {ask!r}")


def key(v, p):
    A, B = _sys(v)
    xs = symbols(f"u0:{A.rows}")
    sols = list(linsolve((A, B), xs))
    if len(sols) != 1 or any(s.free_symbols & set(xs) for s in sols[0]):
        raise ValueError("no unique solution")
    return _ask(Matrix(list(sols[0])), p)


def m1(v, p):
    """Uses the cofactor matrix without its transpose, [A_ij] / |A|, as A^{-1}
    (the same as writing each equation as a column of A)."""
    A, B = _sys(v)
    return _ask(A.adjugate().T / A.det() * B, p)


def m2(v, p):
    """Copies each equation's coefficients in the order its terms are written, so a
    missing unknown gets no 0 and y - x is read as (1, -1)."""
    A, B = _sys(v)
    order = p.get("order")
    if not order or len(order) != A.rows:
        raise ValueError("needs the written order of each equation")
    W = zeros(A.rows, A.cols)
    for i, row in enumerate(order):
        cs = [A[i, NAMES.index(n)] for n in row if A[i, NAMES.index(n)] != 0]
        for j, c in enumerate(cs):
            W[i, j] = c
    if W == A:
        raise ValueError("written in x, y, z order: nothing to misread")
    if W.det() == 0:
        raise ValueError("the misread matrix is singular")
    return _ask(W.inv() * B, p)


def m3(v, p):
    """Uses adj A in place of A^{-1}: X = (adj A) B, the 1/|A| left out."""
    A, B = _sys(v)
    return _ask(A.adjugate() * B, p)


def m4(v, p):
    """Divides B by A as if A were a number: X = B / |A|."""
    A, B = _sys(v)
    return _ask(B / A.det(), p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4}
