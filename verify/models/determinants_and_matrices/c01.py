"""C01 Value of a determinant: answer models (the key, and one per misconception).

Inputs (sympy): A = a 2 x 2 or 3 x 3 Matrix, its entries numbers (possibly with I) or
expressions in one symbol x; k = the value the determinant equals (solve items only).
params["ask"]: value (the determinant, default) | x (the real values of x with |A| = k, a FiniteSet).
"""
from sympy import I, FiniteSet, S, Symbol, expand, rem, solveset

_J = Symbol("j")  # stands in for i when a model mistreats i^2


def _minor(A, j):
    """The 2 x 2 left after deleting row 1 and column j."""
    return A.extract([1, 2], [c for c in range(3) if c != j])


def _expand3(A, two):
    """Expand a 3 x 3 along row 1 with signs + - +, each 2 x 2 worked out by `two`."""
    return A[0, 0] * two(_minor(A, 0)) - A[0, 1] * two(_minor(A, 1)) + A[0, 2] * two(_minor(A, 2))


def _answer(v, p, d):
    """The determinant value d, or, for a solve item, the real x with d = k."""
    if p.get("ask", "value") == "value":
        return expand(d)
    (x,) = v["A"].free_symbols
    roots = solveset(expand(d - v["k"]), x, S.Reals)
    if not isinstance(roots, FiniteSet):
        raise ValueError(f"no finite set of real roots: {roots}")
    return roots


def key(v, p):
    """From the definition (sympy's own determinant)."""
    return _answer(v, p, v["A"].det())


def m1(v, p):
    """No alternating signs: a 3 x 3 expanded as a11 M11 + a12 M12 + a13 M13."""
    A = v["A"]
    if A.shape != (3, 3):
        raise ValueError("the sign pattern only matters for a 3 x 3")
    return _answer(v, p, sum(A[0, j] * _minor(A, j).det() for j in range(3)))


def m2(v, p):
    """The 2 x 2 diagonal rule stretched to a 3 x 3: a11 a22 a33 - a13 a22 a31."""
    A = v["A"]
    if A.shape != (3, 3):
        raise ValueError("a 2 x 2 is the diagonal rule")
    return _answer(v, p, A[0, 0] * A[1, 1] * A[2, 2] - A[0, 2] * A[1, 1] * A[2, 0])


def _cross_reversed(B):
    return B[0, 1] * B[1, 0] - B[0, 0] * B[1, 1]


def m3(v, p):
    """Cross products the wrong way round: bc - ad in every 2 x 2."""
    A = v["A"]
    d = _cross_reversed(A) if A.shape == (2, 2) else _expand3(A, _cross_reversed)
    return _answer(v, p, d)


def _cross_added(B):
    return B[0, 0] * B[1, 1] + B[0, 1] * B[1, 0]


def m4(v, p):
    """Adds the two cross products, ad + bc, in every 2 x 2 (the minus before a negative product is lost)."""
    A = v["A"]
    d = _cross_added(A) if A.shape == (2, 2) else _expand3(A, _cross_added)
    return _answer(v, p, d)


def m5(v, p):
    """Takes i^2 = 1 (so i^3 = i) while multiplying out entries with i."""
    A = v["A"]
    if not A.has(I):
        raise ValueError("no i in the entries")
    d = expand(A.subs(I, _J).det())
    return _answer(v, p, expand(rem(d, _J**2 - 1, _J)).subs(_J, I))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
