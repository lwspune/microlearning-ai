"""C03 Minors and cofactors: answer models (the key, and one per misconception).

Inputs: A (a square Matrix). params["ask"] is one of
  "minor"      M_ij              (params i, j count from 1)
  "cofactor"   A_ij              (params i, j)
  "cofmatrix"  the matrix of cofactors [A_ij]
  "expand"     a_r1 A_r1 + a_r2 A_r2 + ... (expansion along row r; params r)
  "alien"      a_r1 A_s1 + a_r2 A_s2 + ... (row r's elements with row s's cofactors; params r, s)

The key uses sympy's own minor, cofactor and det (Bareiss), so it never expands by hand;
the models build each minor by deleting a row and a column and evaluating it themselves.
"""
from sympy import Matrix, sympify


def _A(v):
    A = Matrix(v["A"])
    if A.rows != A.cols or A.rows < 2:
        raise ValueError("A must be square, at least 2 x 2")
    return A


def _idx(p, n, *names):
    """1-based params as 0-based indices into an n x n matrix."""
    out = [int(sympify(p[k])) - 1 for k in names]
    if any(i < 0 or i >= n for i in out):
        raise ValueError("no such row or column")
    return out


def _det(M, plus=False):
    """A determinant by expansion along row 1; plus=True evaluates every 2 x 2 as ad + bc."""
    n = M.rows
    if n == 1:
        return M[0, 0]
    if n == 2:
        a, b, c, d = M[0, 0], M[0, 1], M[1, 0], M[1, 1]
        return a * d + b * c if plus else a * d - b * c
    return sum((-1) ** j * M[0, j] * _det(_sub(M, 0, j), plus) for j in range(n))


def _sub(M, i, j):
    """M with row i and column j deleted."""
    rows = [r for r in range(M.rows) if r != i]
    cols = [c for c in range(M.cols) if c != j]
    return M.extract(rows, cols)


def _answer(A, p, minor, sign, alien=None):
    """The asked quantity, built from a minor rule minor(A, i, j) and a sign rule sign(i, j) (0-based)."""
    cof = lambda i, j: sign(i, j) * minor(A, i, j)
    ask = p["ask"]
    if ask == "minor":
        i, j = _idx(p, A.rows, "i", "j")
        return minor(A, i, j)
    if ask == "cofactor":
        i, j = _idx(p, A.rows, "i", "j")
        return cof(i, j)
    if ask == "cofmatrix":
        return Matrix(A.rows, A.cols, lambda i, j: cof(i, j))
    if ask == "expand":
        (r,) = _idx(p, A.rows, "r")
        return sum(A[r, j] * cof(r, j) for j in range(A.cols))
    if ask == "alien":
        r, s = _idx(p, A.rows, "r", "s")
        if r == s:
            raise ValueError("alien needs two different rows")
        return sum(A[r, j] * cof(s, j) for j in range(A.cols))
    raise ValueError(f"unknown ask {ask!r}")


_minor = lambda A, i, j: _det(_sub(A, i, j))
_chess = lambda i, j: (-1) ** (i + j)


def key(v, p):
    A = _A(v)
    ask = p["ask"]
    if ask == "minor":
        i, j = _idx(p, A.rows, "i", "j")
        return A.minor(i, j)
    if ask == "cofactor":
        i, j = _idx(p, A.rows, "i", "j")
        return A.cofactor(i, j)
    if ask == "cofmatrix":
        return A.cofactor_matrix()
    if ask == "expand":
        _idx(p, A.rows, "r")
        return A.det()
    if ask == "alien":
        r, s = _idx(p, A.rows, "r", "s")
        if r == s:
            raise ValueError("alien needs two different rows")
        return sum(A[r, j] * A.cofactor(s, j) for j in range(A.cols))
    raise ValueError(f"unknown ask {ask!r}")


def m1(v, p):
    """Minor and cofactor are the same thing: the sign (-1)^(i+j) is never applied
    (and a minor asked for comes out signed, as a cofactor)."""
    A = _A(v)
    if p["ask"] == "minor":
        i, j = _idx(p, A.rows, "i", "j")
        return _chess(i, j) * _minor(A, i, j)
    return _answer(A, p, _minor, lambda i, j: 1)


def m2(v, p):
    """Rows and columns mixed up: for M_ij, deletes row j and column i."""
    A = _A(v)
    return _answer(A, p, lambda A, i, j: _det(_sub(A, j, i)), _chess)


def m3(v, p):
    """Each 2 x 2 minor evaluated as ad + bc instead of ad - bc."""
    A = _A(v)
    if A.rows < 3:
        raise ValueError("a 2 x 2 matrix has 1 x 1 minors")
    return _answer(A, p, lambda A, i, j: _det(_sub(A, i, j), plus=True), _chess)


def m4(v, p):
    """Every row takes the signs + - + of row 1: sign (-1)^(1+j) whatever the row."""
    A = _A(v)
    if p["ask"] == "minor":
        raise ValueError("no sign in a minor")
    return _answer(A, p, _minor, lambda i, j: (-1) ** j)


def m5(v, p):
    """Any row's elements times any row's cofactors give |A|."""
    A = _A(v)
    if p["ask"] != "alien":
        raise ValueError("only for mixed rows")
    return A.det()


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
