"""C12 The Cayley-Hamilton theorem: answer models (the key, and one per misconception).

Inputs (2 x 2 items): A, a 2 x 2 Matrix; for ask "poly" also p, q (the polynomial A^2 + pA + qI).
Inputs (given-polynomial items): r1, r2, with (A - r1 I)(A - r2 I) = O, A non-singular, and n,
the order of A (default 2).

params["ask"] is one of
  "xy"     the pair (x, y) with A^2 + xA + yI = O
  "poly"   the matrix A^2 + pA + qI
  "pair"   the pair (cA, cI) with A^{-1} = cA*A + cI*I
  "combo"  params["expr"], an expression in cA and cI (e.g. "2*cA + 3*cI")
  "inv"    the matrix A^{-1}

The key never uses the theorem: "xy" and "pair" solve the entry equations directly, "poly" and
"inv" compute with sympy, and a given-polynomial item builds a concrete non-scalar A (diagonal,
with r1 and r2 on the diagonal) that satisfies the polynomial and solves for its inverse.
The models apply a believed relation A^2 + c1 A + c0 I = O (the true one has c1 = -tr A,
c0 = |A|), then reduce or invert with it.
"""
from sympy import Matrix, Tuple, diag, eye, solve, symbols, sympify

_cA, _cI = symbols("cA cI")


def _A(v):
    A = Matrix(v["A"])
    if A.shape != (2, 2):
        raise ValueError("A must be 2 x 2")
    return A


def _concrete(v):
    """A non-scalar matrix of order n with (A - r1 I)(A - r2 I) = O, and its order."""
    r1, r2 = sympify(v["r1"]), sympify(v["r2"])
    if r1 == r2 or r1 == 0 or r2 == 0:
        raise ValueError("need distinct non-zero roots")
    n = int(v.get("n", 2))
    return diag(r1, *([r2] * (n - 1))), n


def _solve_pair(A, target):
    """(cA, cI) with cA*A + cI*I = target, from the entry equations."""
    eqs = list(_cA * A + _cI * eye(A.rows) - target)
    sol = solve(eqs, [_cA, _cI], dict=True)
    if len(sol) != 1 or len(sol[0]) != 2:
        raise ValueError("no unique (cA, cI)")
    return sol[0][_cA], sol[0][_cI]


def _from_pair(cA, cI, A, p):
    ask = p.get("ask")
    if ask == "pair":
        return Tuple(cA, cI)
    if ask == "combo":
        return sympify(p["expr"], locals={"cA": _cA, "cI": _cI}).subs({_cA: cA, _cI: cI})
    if ask == "inv":
        return cA * A + cI * eye(A.rows)
    raise ValueError(f"ask {ask!r} is not about the inverse")


def key(v, p):
    ask = p.get("ask")
    if "r1" in v:
        A, _ = _concrete(v)
        return _from_pair(*_solve_pair(A, A.inv()), A, p)
    A = _A(v)
    if ask == "xy":
        x, y = _solve_pair(A, -A**2)
        return Tuple(x, y)
    if ask == "poly":
        return A**2 + sympify(v["p"]) * A + sympify(v["q"]) * eye(2)
    if A.det() == 0:
        raise ValueError("A is singular")
    return _from_pair(*_solve_pair(A, A.inv()), A, p)


def _believed(v, p, c1, c0):
    """Answer the item from a believed relation A^2 + c1 A + c0 I = O (2 x 2 items)."""
    A = _A(v)
    ask = p.get("ask")
    if ask == "xy":
        return Tuple(c1, c0)
    if ask == "poly":
        # A^2 = -c1 A - c0 I, so A^2 + pA + qI = (p - c1)A + (q - c0)I
        return (sympify(v["p"]) - c1) * A + (sympify(v["q"]) - c0) * eye(2)
    if c0 == 0:
        raise ValueError("believed constant term is 0: no inverse from it")
    # Multiply by A^{-1}: A + c1 I + c0 A^{-1} = O
    return _from_pair(-1 / c0, -c1 / c0, A, p)


def _tr_det(v):
    A = _A(v)
    return A[0, 0] + A[1, 1], A[0, 0] * A[1, 1] - A[0, 1] * A[1, 0], A


def m1(v, p):
    """The determinant term with a minus: A^2 - (tr A)A - |A|I = O."""
    if "r1" in v:
        raise ValueError("polynomial is given")
    t, d, _ = _tr_det(v)
    return _believed(v, p, -t, -d)


def m2(v, p):
    """The trace term with a plus: A^2 + (tr A)A + |A|I = O."""
    if "r1" in v:
        raise ValueError("polynomial is given")
    t, d, _ = _tr_det(v)
    return _believed(v, p, t, d)


def m3(v, p):
    """|A| worked out as ad + bc, then the theorem used correctly."""
    if "r1" in v:
        raise ValueError("polynomial is given")
    t, _, A = _tr_det(v)
    return _believed(v, p, -t, A[0, 0] * A[1, 1] + A[0, 1] * A[1, 0])


def _true_coeffs(v):
    """(c1, c0, A) of the true relation: from the theorem for a 2 x 2 A, else the given factors."""
    if "r1" in v:
        A, _ = _concrete(v)
        r1, r2 = sympify(v["r1"]), sympify(v["r2"])
        return -(r1 + r2), r1 * r2, A
    t, d, A = _tr_det(v)
    return -t, d, A


def m4(v, p):
    """Sign lost moving terms across: from A + c1 I + c0 A^{-1} = O, A^{-1} = (A + c1 I)/c0."""
    if p.get("ask") not in ("pair", "combo", "inv"):
        raise ValueError("only for the inverse")
    c1, c0, A = _true_coeffs(v)
    return _from_pair(1 / c0, c1 / c0, A, p)


def m5(v, p):
    """No division by the constant term: A^{-1} = -(A + c1 I), i.e. (tr A)I - A = adj A for 2 x 2."""
    if p.get("ask") not in ("pair", "combo", "inv"):
        raise ValueError("only for the inverse")
    c1, _, A = _true_coeffs(v)
    return _from_pair(-1, -c1, A, p)


def m6(v, p):
    """(A - r1 I)(A - r2 I) = O read as A = r1 I, so A^{-1} = I/r1."""
    if "r1" not in v:
        raise ValueError("needs a factored polynomial")
    if p.get("ask") not in ("pair", "combo"):
        raise ValueError("only for (cA, cI)")
    A, _ = _concrete(v)
    return _from_pair(0, 1 / sympify(v["r1"]), A, p)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
