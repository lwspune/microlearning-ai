"""C11 Word problems as linear systems: answer models (the key, and one per misconception).

Inputs: A (the square coefficient matrix, one row per condition, columns in the order
x, y, z) and B (the column of right-hand sides), so the problem is AX = B.
params (all optional):
  "ask"  an expression in x, y, z: the quantity the question asks for (default: the whole
         solution as a Tuple (x, y, z), or (x, y) for two unknowns);
  "var"  the unknown that "ask" is built from (C11-M5 answers it bare);
  "cmp"  the row (from 1) of a "P is d more than Q" / "Q subtracted from P" condition,
         written P - Q = d (C11-M1 takes the difference the other way; C11-M6 drops Q,
         the terms with negative coefficients);
  "pct"  the rows (from 1, comma-separated) whose coefficients are percentage rates r/100
         (C11-M2 uses r instead and keeps the right-hand side).

The key never inverts A: it solves the equations directly with linsolve. The models apply
a student's wrong rule, then answer "ask" from the values they get.
"""
from sympy import Matrix, Symbol, Tuple, linsolve, sympify

_X = [Symbol("x"), Symbol("y"), Symbol("z")]


def _AB(v):
    A, B = Matrix(v["A"]), Matrix(v["B"])
    if A.rows != A.cols or B.shape != (A.rows, 1) or A.rows > 3:
        raise ValueError("A must be square (at most 3 x 3) and B a matching column")
    return A, B


def _answer(sol, p):
    """The asked quantity from a solution vector."""
    n = len(sol)
    if "ask" not in p:
        return Tuple(*sol)
    expr = sympify(p["ask"], locals={s.name: s for s in _X})
    return expr.subs({_X[i]: sol[i] for i in range(n)})


def _inv(A):
    if A.det() == 0:
        raise ValueError("A is singular")
    return A.inv()


def _rows(s):
    return [int(r) - 1 for r in str(s).split(",")]


def key(v, p):
    A, B = _AB(v)
    xs = _X[: A.rows]
    sols = list(linsolve((A, B), xs))
    if len(sols) != 1 or any(e.free_symbols for e in sols[0]):
        raise ValueError("no unique solution")
    return _answer(list(sols[0]), p)


def m1(v, p):
    """Takes a difference the wrong way round: "P is d more than Q" as Q - P = d."""
    if "cmp" not in p:
        raise ValueError("no comparison condition")
    A, B = _AB(v)
    B = B.copy()
    r = int(p["cmp"]) - 1
    B[r] = -B[r]
    return _answer(list(_inv(A) * B), p)


def m2(v, p):
    """Uses a rate of r% as r (not r/100) and keeps the income on the right as it is."""
    if "pct" not in p:
        raise ValueError("no percentage rates")
    A, B = _AB(v)
    A = A.copy()
    for r in _rows(p["pct"]):
        A[r, :] = A[r, :] * 100
    return _answer(list(_inv(A) * B), p)


def m3(v, p):
    """Uses adj A in place of A^{-1}: X = (adj A)B, the 1/|A| left out."""
    A, B = _AB(v)
    _inv(A)
    return _answer(list(A.adjugate() * B), p)


def m4(v, p):
    """Writes each condition's coefficients down a column, not across a row: solves A^T X = B.
    (The same values come from building A^{-1} with the cofactor matrix untransposed.)"""
    A, B = _AB(v)
    return _answer(list(_inv(A.T) * B), p)


def m5(v, p):
    """Stops at the unknown: gives the value of "var" when the question asks for "ask"."""
    if "ask" not in p or "var" not in p:
        raise ValueError("the question asks for an unknown itself")
    A, B = _AB(v)
    sol = list(_inv(A) * B)
    q = dict(p)
    q["ask"] = p["var"]
    return _answer(sol, q)


def m6(v, p):
    """Drops the "than Q" part of a comparison: "P is d more than Q" written as P = d,
    so the Q terms (the negative coefficients of row "cmp") are left out."""
    if "cmp" not in p:
        raise ValueError("no comparison condition")
    A, B = _AB(v)
    A = A.copy()
    r = int(p["cmp"]) - 1
    for j in range(A.cols):
        if A[r, j] < 0:
            A[r, j] = 0
    return _answer(list(_inv(A) * B), p)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
