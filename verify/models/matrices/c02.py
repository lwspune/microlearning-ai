"""C02 Inverse by elementary transformations: answer models (the key, and one per misconception).

Inputs: A, a square invertible Matrix.
params["by"]: "row" (write A = IA, row operations) or "col" (write A = AI, column operations).
Column operations on A are row operations on A^T, so every "col" model is its "row" model
run on A^T and transposed back.

The row procedure is the book's, column by column (Balbharati XII, 2.2 Solved Ex.2 and 3):
for column j, interchange rows if the pivot a_jj is 0, divide row j by the pivot, then clear
every other entry of column j. The slip models replay it with one kind of step left off I.
"""
from sympy import Matrix, eye


def _gauss_jordan(A, skip=None, stop=False):
    """The I side after reducing A to I column by column; `skip` ("swap" or "scale")
    is a kind of step done to A but not to I. Raises if that step never happens.
    With `stop`, returns the I side as soon as the left side is upper triangular."""
    M, B = Matrix(A), eye(A.rows)
    n, skipped = A.rows, False
    for j in range(n):
        if M[j, j] == 0:
            k = next(k for k in range(j + 1, n) if M[k, j] != 0)
            M.row_swap(j, k)
            if skip == "swap":
                skipped = True
            else:
                B.row_swap(j, k)
        piv = M[j, j]
        if piv != 1:
            M[j, :] = M[j, :] / piv
            if skip == "scale":
                skipped = True
            else:
                B[j, :] = B[j, :] / piv
        for i in range(n):
            if i != j and M[i, j] != 0:
                m = M[i, j]
                M[i, :] = M[i, :] - m * M[j, :]
                B[i, :] = B[i, :] - m * B[j, :]
        if stop and M != eye(n) and M.is_upper:
            return B
    assert M == eye(n)
    if stop:
        raise ValueError("the left side is never triangular before it is I")
    if skip and not skipped:
        raise ValueError(f"no {skip} step in this reduction")
    return B


def _forward(A):
    """The book's row steps, but only below the diagonal: interchange on a 0 pivot, make the
    pivot 1, clear below it. Returns (R, U) with RA = U, U upper triangular with 1s on its diagonal."""
    M, R = Matrix(A), eye(A.rows)
    n = A.rows
    for j in range(n):
        if M[j, j] == 0:
            k = next(k for k in range(j + 1, n) if M[k, j] != 0)
            M.row_swap(j, k)
            R.row_swap(j, k)
        piv = M[j, j]
        M[j, :] = M[j, :] / piv
        R[j, :] = R[j, :] / piv
        for i in range(j + 1, n):
            if M[i, j] != 0:
                m = M[i, j]
                M[i, :] = M[i, :] - m * M[j, :]
                R[i, :] = R[i, :] - m * R[j, :]
    return R, M


def _by(v, p, row_model):
    A = v["A"]
    if p["by"] == "row":
        return row_model(A)
    if p["by"] == "col":
        return row_model(A.T).T
    raise ValueError(f"no method {p['by']}")


def key(v, p):
    """Straight from the definition: the B with AB = I, by sympy's own inverse."""
    _by(v, p, lambda A: A)
    return v["A"].inv()


def _mixed(A):
    """Rows clear below the diagonal (RA = U), columns finish (UC = I, so C = U^-1);
    every step lands on I, giving R C, where RAC = I means the inverse is C R."""
    R, U = _forward(A)
    out = R * U.inv()
    if out == A.inv():
        raise ValueError("mixing gives the inverse here: A is already upper triangular")
    return out


def m1(v, p):
    """Mixes the two kinds: clears below the diagonal with rows, finishes with columns."""
    return _by(v, p, _mixed)


def m2(v, p):
    """Row operations on A but the same-named column operations on I (or the reverse):
    each step on I is the transpose of the right one, so I ends as (A^-1)^T."""
    out = v["A"].inv().T
    if out == v["A"].inv():
        raise ValueError("A^-1 is symmetric")
    return out


def m3(v, p):
    """Interchanges two rows of A but not of I."""
    return _by(v, p, lambda A: _gauss_jordan(A, "swap"))


def m4(v, p):
    """Divides a row of A by its pivot but not the same row of I."""
    return _by(v, p, lambda A: _gauss_jordan(A, "scale"))


def m5(v, p):
    """Stops once A is upper triangular and reads the I side as the inverse."""
    return _by(v, p, lambda A: _gauss_jordan(A, stop=True))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
