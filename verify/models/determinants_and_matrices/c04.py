"""C04 Cramer's rule: answer models (the key, and one per misconception).

v["A"] is the system as a Matrix, one row per equation as printed in the stem:
  [a, b, k, r]       for  a*x + b*y + k = r          (two unknowns)
  [a, b, c, k, r]    for  a*x + b*y + c*z + k = r    (three unknowns)
k is 0 unless the stem writes a constant on the left (e.g. 6x + 5y + 8 = 0).
params:
  "ask": "all" (the tuple (x, y[, z])) | "x" | "y" | "z" (one value).
  "sub": "recip" when the stem's unknowns appear as 1/x, 1/y, 1/z: the matrix then holds the
         coefficients of p = 1/x, q = 1/y, r = 1/z, and the answer is x, y, z themselves.
"""
from sympy import Matrix, Tuple, linsolve, simplify, symbols

NAMES = "xyz"


def _parts(v):
    """Coefficient matrix and the true right-hand sides (r - k)."""
    A = v["A"]
    n = A.cols - 2
    return A[:, :n], Matrix([A[i, n + 1] - A[i, n] for i in range(A.rows)]), n


def _answer(vals, p, invert=True):
    vals = list(vals)
    if p.get("sub") == "recip" and invert:
        if any(t == 0 for t in vals):
            raise ValueError("a reciprocal unknown came out 0")
        vals = [1 / t for t in vals]
    vals = [simplify(t) for t in vals]
    if p["ask"] == "all":
        return Tuple(*vals)
    return vals[NAMES.index(p["ask"])]


def _det(M, plus=False):
    """Determinant; plus=True expands a 3 x 3 along row 1 with signs + + + (C01 slip)."""
    if not plus:
        return M.det()
    if M.rows != 3:
        raise ValueError("the + + + slip is a 3 x 3 expansion")
    return sum(M[0, j] * M.minor_submatrix(0, j).det() for j in range(3))


def _cramer(C, b, n, plus=False, rows=False, inverted=False):
    """Cramer's rule as a student might run it, with the chosen slips."""
    D = _det(C, plus)
    out = []
    for j in range(n):
        M = C.copy()
        if rows:
            M[j, :] = b.T  # constants written into row j instead of column j
        else:
            M[:, j] = b
        Dj = _det(M, plus)
        if inverted:
            if Dj == 0:
                raise ValueError(f"D_{NAMES[j]} = 0, nothing to divide by")
            out.append(D / Dj)
        else:
            if D == 0:
                raise ValueError("D = 0")
            out.append(Dj / D)
    return out


def key(v, p):
    """Straight from the equations: solve the linear system (no determinants)."""
    C, b, n = _parts(v)
    xs = symbols(f"u0:{n}")
    sols = list(linsolve((C, b), *xs))
    if len(sols) != 1 or any(s.free_symbols for s in sols[0]):
        raise ValueError("no unique solution")
    return _answer(sols[0], p)


def m1(v, p):
    """Divides the wrong way: x = D / D_x."""
    C, b, n = _parts(v)
    return _answer(_cramer(C, b, n, inverted=True), p)


def m2(v, p):
    """Writes the constants into row j of D instead of column j."""
    C, b, n = _parts(v)
    return _answer(_cramer(C, b, n, rows=True), p)


def m3(v, p):
    """Expands every 3 x 3 determinant with signs + + + instead of + - +."""
    C, b, n = _parts(v)
    return _answer(_cramer(C, b, n, plus=True), p)


def m4(v, p):
    """Takes the constant of 'ax + by + k = 0' as k, without changing its sign."""
    A = v["A"]
    n = A.cols - 2
    if all(A[i, n] == 0 for i in range(A.rows)):
        raise ValueError("no constant on the left")
    C = A[:, :n]
    b = Matrix([A[i, n + 1] + A[i, n] for i in range(A.rows)])
    return _answer(_cramer(C, b, n), p)


def m5(v, p):
    """Solves for p = 1/x, q = 1/y, r = 1/z and reports those as x, y, z."""
    if p.get("sub") != "recip":
        raise ValueError("no substitution in this item")
    C, b, n = _parts(v)
    return _answer(_cramer(C, b, n), p, invert=False)


def m6(v, p):
    """Closes the gap left by a missing unknown instead of writing 0 there."""
    C, b, n = _parts(v)
    G = C.copy()
    for i in range(C.rows):
        nz = [C[i, j] for j in range(n) if C[i, j] != 0]
        for j in range(n):
            G[i, j] = nz[j] if j < len(nz) else 0
    if G == C:
        raise ValueError("no gap to close")
    return _answer(_cramer(G, b, n), p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
