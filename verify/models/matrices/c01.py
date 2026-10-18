"""C01 Elementary transformations: answer models (the key, and one per misconception).

Inputs: A (Matrix). params["ops"]: the transformations, applied in order, each one of
  "swap R i j"     R_i <-> R_j        (or C for columns)
  "mul R i k"      R_i -> k R_i, k != 0
  "add R i j k"    R_i -> R_i + k R_j
Indices count from 1; k is any sympy number ("-2", "1/5"). Answer: the final Matrix.

The key multiplies by elementary matrices (E A for a row operation, A E for a column
operation), so it never touches the rows directly; the models edit rows and columns by hand.
"""
from sympy import Matrix, eye, sympify


def _parse(op):
    parts = op.split()
    kind, line = parts[0], parts[1]
    if line not in ("R", "C") or kind not in ("swap", "mul", "add"):
        raise ValueError(f"bad op {op!r}")
    nums = [int(x) - 1 for x in parts[2:4 if kind != "mul" else 3]]
    k = sympify(parts[-1]) if kind != "swap" else None
    if kind == "mul" and k == 0:
        raise ValueError("k must be nonzero")
    return kind, line, nums, k


def _elementary(n, kind, nums, k):
    """The n x n elementary matrix of a row operation (its transpose acts on columns)."""
    E = eye(n)
    if kind == "swap":
        i, j = nums
        E[i, i] = E[j, j] = 0
        E[i, j] = E[j, i] = 1
    elif kind == "mul":
        E[nums[0], nums[0]] = k
    else:  # add: row i gets k times row j
        i, j = nums
        E[i, j] += k
    return E


def key(v, p):
    M = Matrix(v["A"])
    for op in p["ops"]:
        kind, line, nums, k = _parse(op)
        if line == "R":
            M = _elementary(M.rows, kind, nums, k) * M
        else:
            M = M * _elementary(M.cols, kind, nums, k).T
    return M


def _get(M, line, i):
    return M[i, :] if line == "R" else M[:, i]


def _put(M, line, i, vec):
    if line == "R":
        M[i, :] = vec
    else:
        M[:, i] = vec


def _check(M, line, nums):
    size = M.rows if line == "R" else M.cols
    if any(i < 0 or i >= size for i in nums):
        raise ValueError("no such row or column")


def _apply(M, op, how=None, src=None):
    """One transformation done by hand on a copy of M, with mistake `how`.
    src: the matrix the new lines are computed from (the stale-values mistake reads the original)."""
    kind, line, nums, k = _parse(op)
    if how == "flip":  # rows and columns confused
        line = "C" if line == "R" else "R"
    _check(M, line, nums)
    M = Matrix(M)
    S = M if src is None else src
    if kind == "swap":
        i, j = nums
        a, b = _get(S, line, i), _get(S, line, j)
        _put(M, line, i, b)
        _put(M, line, j, a)
    elif kind == "mul":
        if how == "whole":  # k times the whole matrix
            return k * M
        _put(M, line, nums[0], k * _get(S, line, nums[0]))
    else:
        i, j = nums
        kk = -k if (how == "sign" and k < 0) else k
        new = _get(S, line, i) + kk * _get(S, line, j)
        if how == "target":  # the new line written over R_j instead of R_i
            _put(M, line, j, new)
        else:
            _put(M, line, i, new)
            if how == "helper":  # R_j left multiplied by k
                _put(M, line, j, k * _get(S, line, j))
    return M


def _run(v, p, how):
    A = Matrix(v["A"])
    M = A
    for op in p["ops"]:
        M = _apply(M, op, how)
    if M == key(v, p):
        raise ValueError(f"{how} gives the key here")
    return M


def m1(v, p):
    """Rows and columns confused: an R operation done on columns, a C operation on rows."""
    return _run(v, p, "flip")


def m2(v, p):
    """R_i -> R_i + k R_j written over R_j: the new row replaces the row that was multiplied."""
    return _run(v, p, "target")


def m3(v, p):
    """R_i -> R_i + k R_j done, but R_j is also left multiplied by k."""
    return _run(v, p, "helper")


def m4(v, p):
    """k R_i taken as k A: every entry multiplied, not just row i."""
    return _run(v, p, "whole")


def m5(v, p):
    """R_i -> R_i - k R_j worked as R_i + k R_j: the minus sign dropped."""
    return _run(v, p, "sign")


def m6(v, p):
    """A later transformation computed from the original matrix, not from the one the earlier step produced."""
    A = Matrix(v["A"])
    M = A
    for op in p["ops"]:
        M = _apply(M, op, None, src=A)
    if M == key(v, p):
        raise ValueError("stale values give the key here")
    return M


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
