"""C13 Special square matrices: answer models (the key, and one per misconception).

params["ask"]:
  rot   inputs theta (an angle in radians) and n: the power A^n of the 2 x 2 rotation matrix A.
        params["form"] = "std": A = [[cos t, -sin t], [sin t, cos t]];
                         "cw":  A = [[cos t, sin t], [-sin t, cos t]].
  poly  inputs c and n: the power (I + cA)^n, where params["type"] says what A is:
        "idem" (A^2 = A), "invol" (A^2 = I) or "nil" (A^2 = O).
        With an input A (a concrete matrix of that type) the answer is the matrix (I + cA)^n;
        without one it is Tuple(a, b), meaning aI + bA.
"""
from sympy import Matrix, Poly, Symbol, Tuple, cos, eye, floor, pi, sin, simplify, zeros

_t = Symbol("t")  # stands for A in a polynomial; I and A commute, so (I + cA)^n expands like (1 + ct)^n

# What A^2 is replaced by, for each type, as a polynomial in t.
_RULE = {"idem": _t, "invol": 1, "nil": 0}
_SWAP_IDEM_INVOL = {"idem": "invol", "invol": "idem"}
_SWAP_IDEM_NIL = {"idem": "nil", "nil": "idem"}


def _rot(theta, form):
    c, s = cos(theta), sin(theta)
    if form == "std":
        return Matrix([[c, -s], [s, c]])
    if form == "cw":
        return Matrix([[c, s], [-s, c]])
    raise ValueError(f"no form {form}")


def _clean(M):
    return M.applyfunc(simplify)


def _reduce(expr, rule):
    """expr, a polynomial in t, with t^2 replaced by the rule until it is a + b t."""
    p = Poly(expr, _t)
    r = p.rem(Poly(_t**2 - rule, _t))
    return Tuple(r.coeff_monomial(1), r.coeff_monomial(_t))


def _as_matrix(ab, A):
    a, b = ab
    return a * eye(A.rows) + b * A


def _check_type(A, kind):
    """A concrete matrix must really be of the type the question names."""
    A2 = A * A
    ok = {"idem": A2 == A, "invol": A2 == eye(A.rows), "nil": A2 == zeros(A.rows, A.cols) and A != zeros(A.rows, A.cols)}[kind]
    if not ok:
        raise ValueError(f"A is not {kind}")


def _poly_answer(v, p, kind):
    """(I + cA)^n worked out with A^2 replaced by the rule for `kind`."""
    c, n = v["c"], int(v["n"])
    ab = _reduce((1 + c * _t) ** n, _RULE[kind])
    return _as_matrix(ab, v["A"]) if "A" in v else ab


def _need(p, ask):
    if p["ask"] != ask:
        raise ValueError(f"only for ask={ask}")


# ---- the key ----------------------------------------------------------------------------------

def key(v, p):
    if p["ask"] == "rot":
        # Straight from the definition: multiply A by itself n times, row by column.
        A = _rot(v["theta"], p["form"])
        P = eye(2)
        for _ in range(int(v["n"])):
            P = P * A
        return _clean(P)
    if p["ask"] == "poly":
        if "A" in v:
            A = v["A"]
            _check_type(A, p["type"])
            P = eye(A.rows)
            for _ in range(int(v["n"])):
                P = P * (eye(A.rows) + v["c"] * A)
            return P
        return _poly_answer(v, p, p["type"])
    raise ValueError(f"no ask {p['ask']}")


# ---- misconceptions ---------------------------------------------------------------------------

def m1(v, p):
    """Multiplies matching entries, so a power of a matrix raises each entry to that power."""
    n = int(v["n"])
    if p["ask"] == "rot":
        return _clean(_rot(v["theta"], p["form"]).applyfunc(lambda e: e**n))
    if p["ask"] == "poly":
        if "A" not in v:
            raise ValueError("needs a concrete matrix")
        B = eye(v["A"].rows) + v["c"] * v["A"]
        return B.applyfunc(lambda e: e**n)
    raise ValueError(f"no ask {p['ask']}")


def m2(v, p):
    """Mixes up idempotent (A^2 = A) and involutory (A^2 = I): uses the other type's rule."""
    _need(p, "poly")
    if p["type"] not in _SWAP_IDEM_INVOL:
        raise ValueError("only for an idempotent or involutory matrix")
    return _poly_answer(v, p, _SWAP_IDEM_INVOL[p["type"]])


def m3(v, p):
    """Takes an orthogonal matrix to be its own inverse (A^-1 = A), so A^2 = I: A^n is I or A."""
    _need(p, "rot")
    n = int(v["n"])
    return eye(2) if n % 2 == 0 else _clean(_rot(v["theta"], p["form"]))


def m4(v, p):
    """Thinks a half-turn brings a rotation back to I (R(pi) = I), so angles repeat every pi, not 2 pi."""
    _need(p, "rot")
    phi = v["n"] * v["theta"]
    phi = phi - pi * floor(phi / pi)
    return _clean(_rot(phi, p["form"]))


def m5(v, p):
    """Drops the middle terms of the binomial: (I + cA)^n = I + c^n A^n."""
    _need(p, "poly")
    c, n = v["c"], int(v["n"])
    ab = _reduce(1 + c**n * _t**n, _RULE[p["type"]])
    return _as_matrix(ab, v["A"]) if "A" in v else ab


def m6(v, p):
    """Mixes up idempotent (A^2 = A) and nilpotent (A^2 = O): uses the other type's rule."""
    _need(p, "poly")
    if p["type"] not in _SWAP_IDEM_NIL:
        raise ValueError("only for an idempotent or nilpotent matrix")
    return _poly_answer(v, p, _SWAP_IDEM_NIL[p["type"]])


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5, "C13-M6": m6}
