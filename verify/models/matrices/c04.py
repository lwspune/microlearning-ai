"""C04 Adjoint of a matrix: answer models (the key, and one per misconception).

Inputs: A (a square Matrix). params["ask"] is one of
  "adj"    the matrix adj A (the default)
  "entry"  one entry of adj A (params i, j count from 1)
  "pair"   two entries of adj A as a Tuple (params at = "i1 j1, i2 j2")

The key is sympy's own adjugate(); the models build each cofactor by deleting a row and a
column and evaluating the minor themselves.
"""
from sympy import Matrix, Tuple, sympify


def _A(v):
    A = Matrix(v["A"])
    if A.rows != A.cols or A.rows < 2:
        raise ValueError("A must be square, at least 2 x 2")
    return A


def _minor(A, i, j):
    """M_ij (0-based): A with row i and column j deleted, then its determinant."""
    rows = [r for r in range(A.rows) if r != i]
    cols = [c for c in range(A.cols) if c != j]
    return A.extract(rows, cols).det(method="berkowitz")


def _ask(M, p):
    """Project the matrix a model gives onto what the item asks for."""
    ask = p.get("ask", "adj")
    if ask == "adj":
        return M
    if ask == "entry":
        i, j = int(sympify(p["i"])) - 1, int(sympify(p["j"])) - 1
        return M[i, j]
    if ask == "pair":
        cells = [[int(n) - 1 for n in c.split()] for c in p["at"].split(",")]
        return Tuple(*[M[i, j] for i, j in cells])
    raise ValueError(f"unknown ask {ask!r}")


def key(v, p):
    return _ask(_A(v).adjugate(), p)


def m1(v, p):
    """adj A is the cofactor matrix itself: the transpose is left out."""
    A = _A(v)
    return _ask(Matrix(A.rows, A.cols, lambda i, j: (-1) ** (i + j) * _minor(A, i, j)), p)


def m2(v, p):
    """Minors used in place of cofactors: no sign (-1)^(i+j), then transposed.
    For 2 x 2 this swaps the diagonal and leaves the other two alone."""
    A = _A(v)
    return _ask(Matrix(A.rows, A.cols, lambda i, j: _minor(A, i, j)).T, p)


def m3(v, p):
    """Elements a_ij used in place of cofactors A_ij: A's entries take the signs (-1)^(i+j),
    then the matrix is transposed."""
    A = _A(v)
    return _ask(Matrix(A.rows, A.cols, lambda i, j: (-1) ** (i + j) * A[i, j]).T, p)


def m4(v, p):
    """2 x 2 shortcut on the wrong pairs: swaps b and c and negates a and d."""
    A = _A(v)
    if A.rows != 2:
        raise ValueError("the shortcut is for 2 x 2 only")
    a, b, c, d = A[0, 0], A[0, 1], A[1, 0], A[1, 1]
    return _ask(Matrix([[-a, c], [b, -d]]), p)


def m5(v, p):
    """Every row takes the signs + - + of row 1: sign (-1)^(1+j) whatever the row, then transposed."""
    A = _A(v)
    if A.rows < 3:
        raise ValueError("needs 3 x 3: in 2 x 2 the pattern is too short to show")
    return _ask(Matrix(A.rows, A.cols, lambda i, j: (-1) ** j * _minor(A, i, j)).T, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
