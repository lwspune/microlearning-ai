"""C07 Properties of the inverse and adjoint: answer models (the key, and one per misconception).

params["ask"] is one of
  "k"        A(adj A) = kI: the number k.                      inputs: A
  "adjdet"   |adj A|.                                           inputs: A
  "abinv"    (AB)^{-1}.                                         inputs: A, B
  "frominv"  A, given A^{-1} = cM.                              inputs: c, M
  "invinv"   (A^{-1})^{-1}, given A (A^{-1} = (1/|A|) adj A).   inputs: A

The keys use sympy's own inv(), det() and adjugate() on the products, never the property
being taught.
"""
from sympy import Matrix, Rational, eye, sympify


def _sq(v, name="A"):
    M = Matrix(v[name])
    if M.rows != M.cols or M.rows < 2:
        raise ValueError(f"{name} must be square, at least 2 x 2")
    return M


def _cm(v, p):
    """A^{-1} written as c M: given directly ("frominv"), or as (1/|A|) adj A ("invinv")."""
    if p["ask"] == "frominv":
        return sympify(v["c"]), _sq(v, "M")
    A = _sq(v)
    d = A.det()
    if d == 0:
        raise ValueError("A is singular")
    return Rational(1) / d, A.adjugate()


def _ab(v):
    A, B = _sq(v, "A"), _sq(v, "B")
    if A.shape != B.shape:
        raise ValueError("A and B must have the same order")
    if A.det() == 0 or B.det() == 0:
        raise ValueError("A and B must be invertible")
    return A, B


def key(v, p):
    ask = p["ask"]
    if ask == "k":
        A = _sq(v)
        P = A * A.adjugate()
        k = P[0, 0]
        assert P == k * eye(A.rows)
        return k
    if ask == "adjdet":
        return _sq(v).adjugate().det()
    if ask == "abinv":
        A, B = _ab(v)
        return (A * B).inv()
    if ask in ("frominv", "invinv"):
        c, M = _cm(v, p)
        return (c * M).inv()
    raise ValueError(f"unknown ask {ask!r}")


def m1(v, p):
    """adj A taken as A^{-1} itself (the 1/|A| forgotten): A(adj A) = I, |adj A| = |A^{-1}| = 1/|A|,
    (AB)^{-1} = adj(AB), and A = adj(A^{-1})."""
    ask = p["ask"]
    if ask == "k":
        _sq(v)
        return Rational(1)
    if ask == "adjdet":
        d = _sq(v).det()
        if d == 0:
            raise ValueError("A is singular")
        return 1 / d
    if ask == "abinv":
        A, B = _ab(v)
        return (A * B).adjugate()
    if ask in ("frominv", "invinv"):
        c, M = _cm(v, p)
        return (c * M).adjugate()
    raise ValueError(f"{ask}: not modelled")


def m2(v, p):
    """The determinant of |A| I (which is |A|^n) taken for the scalar: k = |A|^n, and
    |adj A| = |A|^n (the one |A| never divided out)."""
    ask = p["ask"]
    if ask in ("k", "adjdet"):
        A = _sq(v)
        return A.det() ** A.rows
    raise ValueError(f"{ask}: not modelled")


def m3(v, p):
    """adj A has the same determinant as A, as a transpose would: |adj A| = |A|."""
    if p["ask"] != "adjdet":
        raise ValueError("only for |adj A|")
    return _sq(v).det()


def m4(v, p):
    """(AB)^{-1} = A^{-1} B^{-1}: the order kept."""
    if p["ask"] != "abinv":
        raise ValueError("only for (AB)^{-1}")
    A, B = _ab(v)
    return A.inv() * B.inv()


def m5(v, p):
    """(cM)^{-1} = (1/c) M: only the number in front is inverted, the matrix kept."""
    if p["ask"] not in ("frominv", "invinv"):
        raise ValueError("only for undoing an inverse")
    c, M = _cm(v, p)
    return M / c


def m6(v, p):
    """Sign slip in the determinant (bc - ad for a 2 x 2): -|A| used for |A| in k and in
    inverse = adj / |A|."""
    ask = p["ask"]
    if ask == "k":
        return -_sq(v).det()
    if ask == "abinv":
        A, B = _ab(v)
        P = A * B
        return P.adjugate() / (-P.det())
    if ask in ("frominv", "invinv"):
        c, M = _cm(v, p)
        N = c * M
        return N.adjugate() / (-N.det())
    raise ValueError(f"{ask}: not modelled")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
