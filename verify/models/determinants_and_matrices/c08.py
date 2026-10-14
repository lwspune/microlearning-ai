"""C08 Adding matrices and scalar multiples: answer models (the key, and one per misconception).

params["kind"] picks the question type; inputs are sympy values.
  "combo":  a*A + b*B + c*C + k*I. Inputs: A (Matrix), a, and optionally B, b, C, c, k
            (k*I uses the identity of A's order). Answer: the Matrix.
  "solve":  a*A + b*B + r*X = c*C, find X. Inputs: A, B, C, a, b, r, c. Answer: X.
  "system": a1*X + b1*Y = P and a2*X + b2*Y = Q. Inputs: P, Q, a1, b1, a2, b2, m1, m2,
            where the student eliminates with m1*(first) - m2*(second); params["ask"] = "X" | "Y".
  "equal":  L + s*M = R, entries of L and M linear in x and y. Inputs: L, M, R, s (1 or -1).
            Answer: x + I*y, the pair (x, y).
"""
from sympy import I, Matrix, Symbol, eye, linsolve, ones, zeros


def _slip(c, e):
    """c * e, except minus times minus is kept as minus (the C08-M5 slip)."""
    if c.is_number and e.is_number and c < 0 and e < 0:
        return -c * e
    return c * e


def _scale(c, M, how):
    """c * M as a student with mistake `how` would write it."""
    if how == "row":  # the scalar's size reaches row 1 only; a minus sign still reaches every entry
        out = M * (1 if c > 0 else -1)
        out[0, :] = c * M[0, :]
        return out
    if how == "sign":
        return M.applyfunc(lambda e: _slip(c, e))
    return c * M


def _ident(n, k, how):
    """k*I of order n."""
    if how == "allk":  # k in every entry
        return k * ones(n, n)
    return _scale(k, eye(n), how)


def _combo(v, how):
    A = v["A"]
    out = zeros(*A.shape)
    for c, name in (("a", "A"), ("b", "B"), ("c", "C")):
        if name in v:
            out += _scale(v.get(c, 1), v[name], how)
    if "k" in v:
        out += _ident(A.rows, v["k"], how)
    return out


def _solve(v, how):
    """r*X = c*C - a*A - b*B, then X = (1/r) * that."""
    if how == "move":  # terms carried across without changing sign
        rhs = sum((_scale(t, v[n], None) for t, n in ((v["c"], "C"), (v["a"], "A"), (v["b"], "B"))), zeros(*v["A"].shape))
    else:
        rhs = sum((_scale(t, v[n], how) for t, n in ((v["c"], "C"), (-v["a"], "A"), (-v["b"], "B"))), zeros(*v["A"].shape))
    if how == "nodiv":
        return rhs
    return _scale(1 / v["r"], rhs, "row" if how == "row" else None)  # the M5 slip is in the subtraction only


def _system(v, p, how):
    """Eliminate with m1*(first) - m2*(second), then divide by the coefficient left."""
    m1, m2 = v["m1"], v["m2"]
    a, b = (v["a1"], v["a2"]) if p["ask"] == "X" else (v["b1"], v["b2"])
    other = (v["b1"], v["b2"]) if p["ask"] == "X" else (v["a1"], v["a2"])
    if m1 * other[0] - m2 * other[1] != 0:
        raise ValueError("the multipliers don't eliminate the other unknown")
    coef = m1 * a + _slip(-m2, b) if how == "sign" else m1 * a - m2 * b
    if how == "sign":
        rhs = _scale(m1, v["P"], how) + _scale(-m2, v["Q"], how)
    elif how == "row":  # m1*P and m2*Q each scaled in row 1 only
        rhs = _scale(m1, v["P"], how) - _scale(m2, v["Q"], how)
    else:
        rhs = m1 * v["P"] - m2 * v["Q"]
    if how == "nodiv":
        return rhs
    if coef == 0:
        raise ValueError("the coefficient left is 0")
    return _scale(1 / coef, rhs, "row" if how == "row" else None)  # the M5 slip is in the subtraction only


def _equal(v, how):
    """Solve entry by entry, one unknown at a time, the way the student would."""
    L, M, R, s = v["L"], v["M"], v["R"], v["s"]
    eqs = []
    for i in range(R.rows):
        for j in range(R.cols):
            e = L[i, j] + (_slip(s, M[i, j]) if how == "sign" else s * M[i, j])
            if e.free_symbols:
                eqs.append((e, R[i, j]))
    known = {}
    while len(known) < 2:
        progress = False
        for e, r in eqs:
            e = e.subs(known)
            free = e.free_symbols
            if len(free) != 1:
                continue
            (u,) = free
            a = e.coeff(u)
            k = e.subs(u, 0)
            if how == "move":
                known[u] = (r + k) / a
            elif how == "nodiv":
                known[u] = r - k
            else:
                known[u] = (r - k) / a
            progress = True
        if not progress:
            raise ValueError("no entry with a single unknown")
    byname = {str(u): t for u, t in known.items()}
    return byname["x"] + I * byname["y"]


def _answer(v, p, how):
    kind = p["kind"]
    if kind == "combo":
        return _combo(v, how)
    if kind == "solve":
        return _solve(v, how)
    if kind == "system":
        return _system(v, p, how)
    return _equal(v, how)


def key(v, p):
    """From the definitions: entry-by-entry sums, every entry scaled, unknowns solved exactly."""
    kind = p["kind"]
    if kind == "combo":
        return _combo(v, None)
    if kind == "solve":
        Xs = Matrix(*v["A"].shape, lambda i, j: Symbol(f"x{i}{j}"))
        eq = v["a"] * v["A"] + v["b"] * v["B"] + v["r"] * Xs - v["c"] * v["C"]
        (sol,) = linsolve(list(eq), list(Xs))
        return Matrix(*v["A"].shape, list(sol))
    if kind == "system":
        shape = v["P"].shape
        Xs = Matrix(*shape, lambda i, j: Symbol(f"x{i}{j}"))
        Ys = Matrix(*shape, lambda i, j: Symbol(f"y{i}{j}"))
        e1 = v["a1"] * Xs + v["b1"] * Ys - v["P"]
        e2 = v["a2"] * Xs + v["b2"] * Ys - v["Q"]
        (sol,) = linsolve(list(e1) + list(e2), list(Xs) + list(Ys))
        n = len(Xs)
        return Matrix(*shape, list(sol[:n] if p["ask"] == "X" else sol[n:]))
    eq = v["L"] + v["s"] * v["M"] - v["R"]
    syms = sorted(eq.free_symbols, key=str)  # x, y (the verifier makes them real, the drafter doesn't)
    (sol,) = linsolve([e for e in eq if e.free_symbols], syms)
    return sol[0] + I * sol[1]


def m1(v, p):
    """Scales only the first row, as when a number multiplies a determinant."""
    return _answer(v, p, "row")


def m2(v, p):
    """Takes k*I as the matrix with k in every entry (adds k to every entry)."""
    if p["kind"] != "combo" or "k" not in v:
        raise ValueError("no k*I in the question")
    return _combo(v, "allk")


def m3(v, p):
    """Carries a term across the = sign without changing its sign."""
    if p["kind"] not in ("solve", "equal"):
        raise ValueError("nothing is moved across the = sign")
    return _answer(v, p, "move")


def m4(v, p):
    """Stops at kX = M (or ky = n) and forgets to divide by k."""
    if p["kind"] == "combo":
        raise ValueError("nothing to divide by")
    return _answer(v, p, "nodiv")


def m5(v, p):
    """Takes minus times minus as minus: x - (-3) is written x - 3."""
    return _answer(v, p, "sign")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
