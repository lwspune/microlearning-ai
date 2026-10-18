"""C08 Matrix equations: answer models (the key, and one per misconception).

Inputs: A, B (Matrices), and C for the equation AXB = C. params["eq"] is one of
  "AX=B"   (the default)
  "XA=B"
  "AXB=C"
params["ask"] (optional): "X" (the default, the whole matrix) or "row" (params i, from 1:
that row of X as a 1-row Matrix).

The key never uses an inverse: it writes X with unknown entries and solves the linear
equations the matrix equation stands for. The models use A^{-1} = adj A / |A| the way a
student does.
"""
from sympy import Matrix, linsolve, symbols, sympify


def _sq(M, name):
    M = Matrix(M)
    if M.rows != M.cols:
        raise ValueError(f"{name} must be square")
    if M.det() == 0:
        raise ValueError(f"{name} is singular")
    return M


def _eq(p):
    eq = p.get("eq", "AX=B")
    if eq not in ("AX=B", "XA=B", "AXB=C"):
        raise ValueError(f"unknown eq {eq!r}")
    return eq


def _ask(X, p):
    ask = p.get("ask", "X")
    if ask == "X":
        return X
    if ask == "row":
        i = int(sympify(p["i"])) - 1
        return X.row(i)
    raise ValueError(f"unknown ask {ask!r}")


def _cof(A):
    """The cofactor matrix [A_ij] (adj A is its transpose)."""
    return A.adjugate().T


def _mul(P, Q):
    if P.cols != Q.rows:
        raise ValueError("product not defined")
    return P * Q


def key(v, p):
    eq, A, B = _eq(p), Matrix(v["A"]), Matrix(v["B"])
    if eq == "AX=B":
        r, c, lhs, rhs = A.cols, B.cols, lambda X: A * X, B
    elif eq == "XA=B":
        r, c, lhs, rhs = B.rows, A.rows, lambda X: X * A, B
    else:
        C = Matrix(v["C"])
        r, c, lhs, rhs = A.cols, B.rows, lambda X: A * X * B, C
    xs = symbols(f"x0:{r * c}")
    X = Matrix(r, c, xs)
    sols = list(linsolve(list(lhs(X) - rhs), xs))
    if len(sols) != 1 or any(s.free_symbols for s in sols[0]):
        raise ValueError("no unique X")
    return _ask(Matrix(r, c, list(sols[0])), p)


def m1(v, p):
    """The inverse goes on the wrong side: AX = B gives B A^{-1}, XA = B gives A^{-1} B,
    AXB = C gives B^{-1} C A^{-1}."""
    eq, A, B = _eq(p), _sq(v["A"], "A"), Matrix(v["B"])
    if eq == "AX=B":
        return _ask(_mul(B, A.inv()), p)
    if eq == "XA=B":
        return _ask(_mul(A.inv(), B), p)
    B = _sq(B, "B")
    return _ask(_mul(_mul(B.inv(), Matrix(v["C"])), A.inv()), p)


def m2(v, p):
    """Divides by A as if it were a number: B / |A| (and C / (|A||B|) for AXB = C)."""
    eq, A, B = _eq(p), _sq(v["A"], "A"), Matrix(v["B"])
    if eq == "AXB=C":
        B = _sq(B, "B")
        return _ask(Matrix(v["C"]) / (A.det() * B.det()), p)
    return _ask(B / A.det(), p)


def m3(v, p):
    """Uses adj A in place of A^{-1}: the 1/|A| is left out."""
    eq, A, B = _eq(p), _sq(v["A"], "A"), Matrix(v["B"])
    if eq == "AX=B":
        return _ask(_mul(A.adjugate(), B), p)
    if eq == "XA=B":
        return _ask(_mul(B, A.adjugate()), p)
    B = _sq(B, "B")
    return _ask(_mul(_mul(A.adjugate(), Matrix(v["C"])), B.adjugate()), p)


def m4(v, p):
    """Builds A^{-1} from the cofactor matrix without its transpose: [A_ij] / |A|."""
    eq, A, B = _eq(p), _sq(v["A"], "A"), Matrix(v["B"])
    if eq == "AX=B":
        return _ask(_mul(_cof(A) / A.det(), B), p)
    if eq == "XA=B":
        return _ask(_mul(B, _cof(A) / A.det()), p)
    B = _sq(B, "B")
    return _ask(_mul(_mul(_cof(A) / A.det(), Matrix(v["C"])), _cof(B) / B.det()), p)


def m5(v, p):
    """In AXB = C, slides X to the end as if AXB were ABX: X = (AB)^{-1} C."""
    if _eq(p) != "AXB=C":
        raise ValueError("only for AXB = C")
    A, B = _sq(v["A"], "A"), _sq(v["B"], "B")
    return _ask(_mul((A * B).inv(), Matrix(v["C"])), p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
