"""C03 Properties of determinants: answer models (the key, and one per misconception).

Two shapes of item, both driven by params["ops"], a list of row/column operations:
  "R1<->R3"        interchange two rows (or "C1<->C3", columns)
  "R2*3"           multiply row 2 by 3; "R2,R3*1/2" multiplies rows 2 and 3 (taking 2 out of each)
  "all*2"          multiply every entry by 2 (the matrix 2A)
  "R1=2*R1+R3"     replace a row by a combination of rows (columns likewise)
  "T"              transpose
Forward (params mode="fwd"): inputs d (= |A|) and n (the order); B is A after the ops; the answer
is |B|. Route (mode="route"): inputs M (the matrix asked about) and either A with d (|A| = d) or e
(an expression, the answer being |M| / e); the ops are the student's route from M to a matrix
whose determinant they then know.

Each misconception is a wrong belief about how one operation changes the determinant; the models
multiply those beliefs along the ops.
"""
from sympy import Matrix, Symbol, cancel, symbols, sympify


def _generic(n):
    return Matrix(n, n, symbols(f"g0:{n * n}"))


def _parse(op, n):
    """(kind, details) for one op string."""
    op = op.replace(" ", "")
    if op == "T":
        return ("T",)
    if "<->" in op:
        a, b = op.split("<->")
        return ("swap", a[0], int(a[1:]) - 1, int(b[1:]) - 1)
    if "=" in op:
        lhs, rhs = op.split("=")
        line, i = lhs[0], int(lhs[1:]) - 1
        expr = sympify(rhs, locals={f"{line}{k}": Symbol(f"{line}{k}") for k in range(1, n + 1)})
        coeffs = [expr.coeff(Symbol(f"{line}{k}")) for k in range(1, n + 1)]
        return ("comb", line, i, coeffs)
    which, k = op.split("*", 1)
    k = sympify(k)
    if which == "all":
        return ("all", k)
    idx = [int(w[1:]) - 1 for w in which.split(",")]
    return ("mul", which[0], idx, k)


def _apply(m, op):
    n = m.shape[0]
    o = _parse(op, n)
    if o[0] == "T":
        return m.T
    if o[0] == "all":
        return o[1] * m
    cols = o[1] == "C"
    w = m.T if cols else Matrix(m)
    w = Matrix(w)
    if o[0] == "swap":
        w.row_swap(o[2], o[3])
    elif o[0] == "mul":
        for i in o[2]:
            w[i, :] = o[3] * w[i, :]
    else:
        _, _, i, coeffs = o
        new = sum((c * w[k, :] for k, c in enumerate(coeffs)), Matrix.zeros(1, n))
        w[i, :] = new
    return w.T if cols else w


def _factor(op, n, belief):
    """How the determinant changes under one op, as the given belief has it."""
    o = _parse(op, n)
    kind = o[0]
    if kind == "T":
        return -1 if belief == "M5" else 1
    if kind == "swap":
        return 1 if belief == "M2" else -1
    if kind == "all":
        k = o[1]
        return {"M1": k, "M3": 1}.get(belief, k**n)
    if kind == "mul":
        k, r = o[3], len(o[2])
        return {"M1": k, "M3": 1, "M4": k ** (n * r)}.get(belief, k**r)
    a = o[3][o[2]]  # comb: the coefficient of the row being replaced
    if a == 0:
        raise ValueError("a row replaced without itself is not a row operation")
    return {"M3": 1, "M4": a**n}.get(belief, a)


def _base(v):
    """det(M') is known as a multiple of |A| (= d) or of the expression e."""
    if "A" in v:
        return v["A"].det(), v["d"]
    return v["e"], 1


def _constant(x):
    x = cancel(x)
    if x.free_symbols:
        raise ValueError(f"not a constant multiple: {x}")
    return x


def key(v, p):
    """Straight from the definition: the determinant of the actual matrix, compared with |A|."""
    if p.get("mode") == "route":
        base, d = _base(v)
        return d * _constant(Matrix(v["M"]).det() / base)
    n = int(v["n"])
    g = _generic(n)
    b = g
    for op in p["ops"]:
        b = _apply(b, op)
    return v["d"] * _constant(b.det() / g.det())


def _believe(belief):
    def model(v, p):
        if p.get("mode") == "route":
            m = Matrix(v["M"])
            n = m.shape[0]
            f = 1
            for op in p["ops"]:
                m = _apply(m, op)
                f *= _factor(op, n, belief)
            base, d = _base(v)
            return d * _constant(m.det() / base) / f
        n = int(v["n"])
        f = 1
        for op in p["ops"]:
            f *= _factor(op, n, belief)
        return v["d"] * f

    model.__doc__ = _DOCS[belief]
    return model


_DOCS = {
    "M1": "A factor common to several rows (or every entry, kA) comes out once: |kA| = k|A|.",
    "M2": "Interchanging two rows or columns leaves the determinant as it was.",
    "M3": "Rows treated like equations: multiplying a row by k, or R_i -> aR_i + bR_j, changes nothing.",
    "M4": "Multiplying one row by k multiplies the determinant by k^n, as if the whole matrix were scaled.",
    "M5": "Transposing flips the sign, as if it interchanged rows: |A^T| = -|A|.",
}

MODELS = {"key": key, **{f"C03-{m}": _believe(m) for m in _DOCS}}
