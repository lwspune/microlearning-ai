"""C05 Singular and invertible matrices: answer models (the key, and one per misconception).

Inputs: A (a square Matrix), possibly holding the unknown named by params["var"].
params["ask"] is one of
  "verdict"  Tuple(|A| as the model finds it, Symbol("exists") or Symbol("none")):
             the determinant and whether A^{-1} exists
  "values"   the set of real values of params["var"] for which A^{-1} does NOT exist

The key decides existence from the rank (A^{-1} exists exactly when A has full rank) and
cross-checks that against the determinant, so it never leans on the rule being taught alone.
"""
from sympy import FiniteSet, Matrix, S, Symbol, Tuple, solveset

EXISTS, NONE = Symbol("exists"), Symbol("none")


def _A(v):
    A = Matrix(v["A"])
    if A.rows != A.cols or A.rows < 2:
        raise ValueError("A must be square, at least 2 x 2")
    return A


def _var(p):
    return Symbol(p.get("var", "k"))


def _roots(expr, p):
    return solveset(expr, _var(p), S.Reals)


def _verdict(d):
    return Tuple(d, NONE if d == 0 else EXISTS)


def _det(A):
    d = A.det(method="berkowitz").expand()
    if not A.free_symbols:
        assert (d == 0) == (A.rank() < A.rows), "determinant and rank disagree"
    return d


def key(v, p):
    A = _A(v)
    if p["ask"] == "verdict":
        return _verdict(_det(A))
    if p["ask"] == "values":
        return _roots(_det(A), p)
    raise ValueError(f"unknown ask {p['ask']!r}")


def m1(v, p):
    """Reversed test: A^{-1} exists only when |A| = 0 (singular and non-singular mixed up)."""
    A = _A(v)
    if p["ask"] == "verdict":
        d = _det(A)
        return Tuple(d, EXISTS if d == 0 else NONE)
    return S.Reals - key(v, p)


def m2(v, p):
    """Treats A like a number a, whose inverse 1/a fails at 0: A^{-1} fails when a diagonal entry is 0."""
    A = _A(v)
    if p["ask"] != "values":
        raise ValueError("the diagonal rule gives no determinant")
    out = S.EmptySet
    for i in range(A.rows):
        out = out | _roots(A[i, i], p)
    if out == S.EmptySet:
        raise ValueError("no diagonal entry can be 0")
    return out


def _per(A):
    """Every product added, no minus signs: ad + bc for 2 x 2, all-plus expansion for 3 x 3."""
    return A.per().expand()


def m3(v, p):
    """Adds the products instead of subtracting: |A| = ad + bc (and all plus signs for 3 x 3)."""
    A = _A(v)
    d = _per(A)
    return _verdict(d) if p["ask"] == "verdict" else _roots(d, p)


def m4(v, p):
    """3 x 3: expands along row 1 with signs + + + instead of + - +."""
    A = _A(v)
    if A.rows != 3:
        raise ValueError("needs 3 x 3")
    d = sum(A[0, j] * A.minor(0, j) for j in range(3)).expand()
    return _verdict(d) if p["ask"] == "verdict" else _roots(d, p)


def m5(v, p):
    """Keeps only the positive root of |A| = 0 (from lambda^2 = 1 takes lambda = 1 only)."""
    r = key(v, p) if p["ask"] == "values" else None
    if not isinstance(r, FiniteSet) or len(r) < 2:
        raise ValueError("needs |A| = 0 with two or more roots")
    return FiniteSet(max(r))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
