"""C09 Multiplying matrices: answer models (the key, and one per misconception).

Inputs (sympy): A, B = Matrices (the product asked about is AB).
params["ask"]: matrix (AB itself, default) | entry (the entry in row i, column j of AB;
params i, j, 1-based) | order (the order of AB, a Tuple (rows, columns)).
params["k"]: for ask=matrix, the answer is AB - kI (default k = 0).
A product a model says can't be formed is the named answer Symbol("not_defined").
"""
from sympy import Symbol, Tuple, eye, sympify

NOT_DEFINED = Symbol("not_defined")


def _finish(C, p, order=None):
    """Project a product C (None if it can't be formed) onto what the item asks."""
    if C is None:
        return NOT_DEFINED
    ask = p.get("ask", "matrix")
    if ask == "order":
        return Tuple(*(order or C.shape))
    if ask == "entry":
        return C[int(p["i"]) - 1, int(p["j"]) - 1]
    k = sympify(p.get("k", "0"))
    return C - k * eye(C.rows) if k != 0 else C


def key(v, p):
    """From the definition: AB exists only if columns of A = rows of B (sympy's own product)."""
    A, B = v["A"], v["B"]
    return _finish(A * B if A.cols == B.rows else None, p)


def m1(v, p):
    """Multiplies matching entries, as in addition: needs A and B of the same order."""
    A, B = v["A"], v["B"]
    return _finish(A.multiply_elementwise(B) if A.shape == B.shape else None, p)


def m2(v, p):
    """Works out BA: row of B times column of A (the order of the factors ignored)."""
    A, B = v["A"], v["B"]
    return _finish(B * A if B.cols == A.rows else None, p)


def m3(v, p):
    """Row i of A times row j of B: (AB)_ij = sum a_ik b_jk, i.e. A B^T."""
    A, B = v["A"], v["B"]
    return _finish(A * B.T if A.cols == B.cols else None, p)


def m4(v, p):
    """Column i of A times column j of B: (AB)_ij = sum a_ki b_kj, i.e. A^T B."""
    A, B = v["A"], v["B"]
    return _finish(A.T * B if A.rows == B.rows else None, p)


def m5(v, p):
    """The order of AB from the inner numbers: m x n times n x p gives n x n."""
    if p.get("ask") != "order":
        raise ValueError("an order mistake only")
    A, B = v["A"], v["B"]
    return NOT_DEFINED if A.cols != B.rows else Tuple(A.cols, B.rows)


def m6(v, p):
    """Rows and columns swapped: c_ij read as row j, column i; the order written columns x rows."""
    A, B = v["A"], v["B"]
    if A.cols != B.rows:
        return NOT_DEFINED
    C = A * B
    ask = p.get("ask", "matrix")
    if ask == "order":
        return Tuple(C.cols, C.rows)
    if ask == "entry":
        return C[int(p["j"]) - 1, int(p["i"]) - 1]
    return _finish(C.T, p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
