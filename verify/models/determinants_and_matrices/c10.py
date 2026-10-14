"""C10 Properties of matrix multiplication: answer models (the key, and one per misconception).

Inputs (sympy): A, and sometimes B, square Matrices of the same order.
params["expr"]: a matrix expression in A, B, I (the identity) and maybe k, written in sympy syntax
with the factors in the order the question gives them, e.g. "B*A", "(A + B)**2", "A**2 - 5*A + 7*I".
params["ask"]: "value" (default): the matrix the expression equals;
               "k": the k that makes the expression the zero matrix O.

The key multiplies row by column (sympy's own product), keeping every factor in its order.
For "k", the key solves all four (or nine) entry equations together; a misconception model gets
an inconsistent set, and the student is taken to solve the first entry, (1, 1), as the book does.
"""
from sympy import Add, Mul, Poly, Pow, Symbol, eye, ones, solve, symbols, sympify

_A, _B, _I = symbols("A B I", commutative=False)
_K = Symbol("k")
_NC = {"A": _A, "B": _B, "I": _I, "k": _K}


def _row_by_column(X, Y):
    return X * Y


def _entry_by_entry(X, Y):
    return X.multiply_elementwise(Y)


def _row_by_row(X, Y):
    return X * Y.T


def _eval(e, v, prod, ident, split_square=False):
    """The value of expression e, with `prod` for every product of two matrices and `ident`
    for I. split_square: (X + Y)**2 is taken as X**2 + Y**2."""
    if e == _A:
        return v["A"]
    if e == _B:
        return v["B"]
    if e == _I:
        return ident
    if e.is_commutative and not e.has(_A, _B, _I):
        return e
    if isinstance(e, Add):
        out = None
        for t in e.args:
            val = _eval(t, v, prod, ident, split_square)
            out = val if out is None else out + val
        return out
    if isinstance(e, Mul):
        scalar, mats = 1, []
        for f in e.args:
            val = _eval(f, v, prod, ident, split_square)
            if hasattr(val, "shape"):
                mats.append(val)
            else:
                scalar *= val
        out = mats[0]
        for M in mats[1:]:
            out = prod(out, M)
        return scalar * out
    if isinstance(e, Pow):
        base, n = e.args
        if split_square and isinstance(base, Add) and n == 2:
            return _eval(Add(*[t**2 for t in base.args]), v, prod, ident)
        X = _eval(base, v, prod, ident, split_square)
        out = X
        for _ in range(int(n) - 1):
            out = prod(out, X)
        return out
    raise ValueError(f"can't evaluate {e}")


def _expr(p):
    return sympify(p["expr"], locals=_NC)


def _n(v):
    return v["A"].shape[0]


def _answer(M, p, whole=False):
    """M is the student's matrix. "value": M itself; "k": the k that makes M = O."""
    if p.get("ask", "value") == "value":
        return M.applyfunc(lambda x: x.expand())
    if whole:
        sols = solve(list(M), _K, dict=True)
        if len(sols) != 1:
            raise ValueError(f"no single k: {sols}")
        return sols[0][_K]
    roots = solve(M[0, 0], _K)
    if len(roots) != 1:
        raise ValueError(f"(1, 1) entry gives {roots}")
    return roots[0]


def key(v, p):
    """Row by column, the factors in the order written; I is the identity."""
    return _answer(_eval(_expr(p), v, _row_by_column, eye(_n(v))), p, whole=True)


def m1(v, p):
    """Takes AB = BA: expands and reorders as with numbers, so BA becomes AB and (A + B)^2 becomes A^2 + 2AB + B^2."""
    e = _expr(p)
    a, b, i = symbols("A B I")  # commutative stand-ins
    flat = Poly(e.subs({_A: a, _B: b, _I: i}).expand(), a, b, i)
    # Each monomial rebuilt with A before B: the order a student who takes AB = BA writes.
    reordered = Add(*[c * _A**pa * _B**pb * _I**pi for (pa, pb, pi), c in flat.terms()])
    if (reordered - e.expand()).expand() == 0:
        raise ValueError("the order of the factors doesn't change this expression")
    return _answer(_eval(reordered, v, _row_by_column, eye(_n(v))), p)


def m2(v, p):
    """Multiplies matching entries, so A^2 squares every entry of A."""
    return _answer(_eval(_expr(p), v, _entry_by_entry, eye(_n(v))), p)


def m3(v, p):
    """Reads cI as the number c added to every entry (I taken as a matrix of 1s)."""
    e = _expr(p)
    if not e.has(_I):
        raise ValueError("no I in the expression")
    return _answer(_eval(e, v, _row_by_column, ones(_n(v))), p)


def m4(v, p):
    """Squares a sum term by term: (A + B)^2 = A^2 + B^2."""
    e = _expr(p)
    if not any(isinstance(s, Pow) and isinstance(s.args[0], Add) for s in e.atoms(Pow) | {e}):
        raise ValueError("no square of a sum")
    return _answer(_eval(e, v, _row_by_column, eye(_n(v)), split_square=True), p)


def m5(v, p):
    """Multiplies row by row: entry (i, j) is row i of the first times row j of the second."""
    return _answer(_eval(_expr(p), v, _row_by_row, eye(_n(v))), p)


def m6(v, p):
    """Moves the I term across the equals sign without changing its sign (finding k)."""
    if p.get("ask") != "k":
        raise ValueError("a sign slip in solving for k")
    e = _expr(p)
    if not e.has(_I):
        raise ValueError("no I term")
    return _answer(_eval(e, v, _row_by_column, -eye(_n(v))), p)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
