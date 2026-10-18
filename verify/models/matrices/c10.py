"""C10 Solving equations by reduction: answer models (the key, and one per misconception).

Inputs: A (the square coefficient Matrix), B (the constants, a column Matrix).
params["ops"]: the row operations that bring A to upper triangular form, applied in order,
separated by ";", each "Ri=s*Ri+c*Rj" (R_i -> s R_i + c R_j, s != 0), e.g. "R2=2*R2-3*R1".
params["ask"] (optional): "all" (the default, the solution as a Tuple (x, y[, z])) or one
variable, "x", "y" or "z".

The key never row-reduces: it solves AX = B with linsolve. The models apply the stated
operations to the system the way a student does, then back-substitute from the last row.
"""
import re

from sympy import Matrix, Tuple, linsolve, sign, symbols, sympify

_R = symbols("R1:4")


def _system(v):
    A, B = Matrix(v["A"]), Matrix(v["B"])
    if A.rows != A.cols or B.shape != (A.rows, 1) or A.rows not in (2, 3):
        raise ValueError("A must be 2x2 or 3x3 and B a matching column")
    return A, B


def _ops(p):
    out = []
    for op in str(p.get("ops", "")).split(";"):
        m = re.fullmatch(r"\s*R(\d)\s*=\s*(.+?)\s*", op)
        if not m:
            raise ValueError(f"bad op {op!r}")
        i, rhs = int(m.group(1)) - 1, sympify(m.group(2), locals={f"R{k + 1}": r for k, r in enumerate(_R)})
        s = rhs.coeff(_R[i])
        others = [k for k, r in enumerate(_R) if k != i and rhs.coeff(r) != 0]
        if s == 0 or len(others) != 1 or rhs != s * _R[i] + rhs.coeff(_R[others[0]]) * _R[others[0]]:
            raise ValueError(f"op {op!r} is not R_i -> s R_i + c R_j")
        j = others[0]
        out.append((i, s, j, rhs.coeff(_R[j])))
    return out


def _reduce(A, B, ops, rhs="both"):
    """Applies the row operations to [A | B]. rhs: "both" (right), "none" (B left as it is),
    "nomult" (the constant gets s b_i +- b_j: the multiplier c is left off it)."""
    A, B = A.copy(), B.copy()
    for i, s, j, c in ops:
        A[i, :] = s * A[i, :] + c * A[j, :]
        if rhs == "both":
            B[i] = s * B[i] + c * B[j]
        elif rhs == "nomult":
            B[i] = s * B[i] + sign(c) * B[j]
    n = A.rows
    if any(A[r, k] != 0 for r in range(n) for k in range(r)) or any(A[k, k] == 0 for k in range(n)):
        raise ValueError("the operations don't leave A upper triangular with a nonzero diagonal")
    return A, B


def _back(T, b, mode="right"):
    """Back-substitution from the last row. mode: "right"; "diag" (each row read as
    a_ii x_i = b_i, the terms right of the diagonal ignored); "sign" (the known terms carried
    across without changing sign: a_ii x_i = b_i + sum a_ik x_k)."""
    n = T.rows
    x = [None] * n
    for r in range(n - 1, -1, -1):
        known = sum(T[r, k] * x[k] for k in range(r + 1, n))
        if mode == "right":
            x[r] = (b[r] - known) / T[r, r]
        elif mode == "diag":
            x[r] = b[r] / T[r, r]
        else:
            x[r] = (b[r] + known) / T[r, r]
    return x


def _ask(x, p):
    ask = p.get("ask", "all")
    if ask == "all":
        return Tuple(*x)
    names = "xyz"[: len(x)]
    if ask not in names:
        raise ValueError(f"unknown ask {ask!r}")
    return x[names.index(ask)]


def key(v, p):
    A, B = _system(v)
    xs = symbols(f"u0:{A.rows}")
    sols = list(linsolve((A, B), xs))
    if len(sols) != 1 or any(s.free_symbols for s in sols[0]):
        raise ValueError("no unique solution")
    return _ask(list(sols[0]), p)


def m1(v, p):
    """Applies the row operations to A only: the constants B are left unchanged."""
    A, B = _system(v)
    T, b = _reduce(A, B, _ops(p), rhs="none")
    return _ask(_back(T, b), p)


def m2(v, p):
    """Reads the triangular system as if it were diagonal: x_i = b_i / a_ii, ignoring the
    terms to the right of the diagonal."""
    A, B = _system(v)
    T, b = _reduce(A, B, _ops(p))
    return _ask(_back(T, b, "diag"), p)


def m3(v, p):
    """Back-substitutes without changing sign: a_ii x_i = b_i + (the known terms)."""
    A, B = _system(v)
    T, b = _reduce(A, B, _ops(p))
    return _ask(_back(T, b, "sign"), p)


def m4(v, p):
    """In R_i -> s R_i + c R_j, multiplies the coefficients by c but not the constant:
    b_i becomes s b_i +- b_j."""
    A, B = _system(v)
    ops = _ops(p)
    if all(abs(c) == 1 for _, _, _, c in ops):
        raise ValueError("every multiplier is 1 or -1, so the slip changes nothing")
    T, b = _reduce(A, B, ops, rhs="nomult")
    return _ask(_back(T, b), p)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
