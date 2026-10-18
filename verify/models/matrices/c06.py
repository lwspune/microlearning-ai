"""C06 Inverse by the adjoint method: answer models (the key, and one per misconception).

Inputs: A (a square Matrix with |A| != 0). params["ask"] is one of
  "inv"    the matrix A^{-1} (the default)
  "entry"  one entry of A^{-1} (params i, j count from 1)

The key is sympy's own inv() (Gauss-Jordan), so it never goes through the adjoint
formula being taught; the models build each cofactor by deleting a row and a column
and evaluating the minor themselves.
"""
from sympy import Matrix, sympify


def _A(v):
    A = Matrix(v["A"])
    if A.rows != A.cols or A.rows < 2:
        raise ValueError("A must be square, at least 2 x 2")
    if A.det() == 0:
        raise ValueError("A is singular: no inverse")
    return A


def _minor(A, i, j):
    """M_ij (0-based): A with row i and column j deleted, then its determinant."""
    rows = [r for r in range(A.rows) if r != i]
    cols = [c for c in range(A.cols) if c != j]
    return A.extract(rows, cols).det(method="berkowitz")


def _cof(A):
    """The cofactor matrix [A_ij]."""
    return Matrix(A.rows, A.cols, lambda i, j: (-1) ** (i + j) * _minor(A, i, j))


def _det(A):
    """|A| by expansion along row 1."""
    return sum(A[0, j] * (-1) ** j * _minor(A, 0, j) for j in range(A.cols))


def _ask(M, p):
    """Project the matrix a model gives onto what the item asks for."""
    ask = p.get("ask", "inv")
    if ask == "inv":
        return M
    if ask == "entry":
        i, j = int(sympify(p["i"])) - 1, int(sympify(p["j"])) - 1
        return M[i, j]
    raise ValueError(f"unknown ask {ask!r}")


def key(v, p):
    return _ask(_A(v).inv(method="GE"), p)


def m1(v, p):
    """The cofactor matrix divided by |A|: the transpose is left out."""
    A = _A(v)
    return _ask(_cof(A) / _det(A), p)


def m2(v, p):
    """adj A taken as the inverse itself: the division by |A| is left out."""
    A = _A(v)
    return _ask(_cof(A).T, p)


def m3(v, p):
    """adj A multiplied by |A| instead of divided by it."""
    A = _A(v)
    return _ask(_det(A) * _cof(A).T, p)


def m4(v, p):
    """The transpose A^T used in place of adj A, then divided by |A|."""
    A = _A(v)
    return _ask(A.T / _det(A), p)


def m5(v, p):
    """Minors used without the signs (-1)^(i+j): transposed, then divided by |A|.
    For 2 x 2 this swaps the diagonal and leaves b and c alone."""
    A = _A(v)
    return _ask(Matrix(A.rows, A.cols, lambda i, j: _minor(A, i, j)).T / _det(A), p)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
