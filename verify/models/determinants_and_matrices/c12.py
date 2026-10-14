"""C12 Symmetric and skew-symmetric matrices: answer models (the key, and one per misconception).

Inputs (sympy): A = a square matrix (for "findx" its entries hold the unknown x).
params["ask"]:
  type   is A symmetric, skew-symmetric, both or neither? The answer is Symbol(name):
         symmetric | skew_symmetric | both | neither.
  findx  params["cond"] = "sym" | "skew": the value of x that makes A that type.
  part   params["part"] = "P" | "Q": in A = P + Q with P symmetric and Q skew-symmetric, P or Q.
"""
from sympy import Matrix, Symbol, solve, symbols

_NAMES = {(True, False): "symmetric", (False, True): "skew_symmetric", (True, True): "both", (False, False): "neither"}
_SWAP = {"symmetric": "skew_symmetric", "skew_symmetric": "symmetric"}


def _T(M):
    """The transpose from the definition: the (i, j) entry of M^T is the (j, i) entry of M."""
    n = M.rows
    return Matrix(n, n, lambda i, j: M[j, i])


def _W(M):
    """The reflection in the other diagonal (top right to bottom left): (i, j) takes (n+1-j, n+1-i)."""
    n = M.rows
    return Matrix(n, n, lambda i, j: M[n - 1 - j, n - 1 - i])


def _square(v):
    A = v["A"]
    if A.rows != A.cols:
        raise ValueError("not square")
    return A


def _label(sym, skew):
    return Symbol(_NAMES[(bool(sym), bool(skew))])


def _type_by(A, R):
    """The type, testing A = R(A) and A = -R(A) entry by entry."""
    return _label(A == R(A), A == -R(A))


def _cells(A):
    n = A.rows
    return [(i, j) for i in range(n) for j in range(n)]


def _unknown(A):
    """The one unknown in A (the verifier may parse x with assumptions, so it is found, not named)."""
    syms = A.free_symbols
    if len(syms) != 1:
        raise ValueError(f"needs one unknown, has {syms}")
    return syms.pop()


def _solve_x(eqs, x):
    sol = set()
    for e in eqs:
        s = solve(e, x)
        if len(s) != 1:
            raise ValueError(f"{e} = 0 gives {s}")
        sol.add(s[0])
    if len(sol) != 1:
        raise ValueError(f"the equations disagree: {sol}")
    return sol.pop()


def _findx_by(A, partner, sign):
    """Solves entry = sign * (its partner) for every entry holding x."""
    n, x = A.rows, _unknown(A)
    eqs = [A[i, j] - sign * A[partner(i, j, n)] for i, j in _cells(A) if A[i, j].has(x)]
    return _solve_x(eqs, x)


def _main(i, j, n):
    return (j, i)


def _anti(i, j, n):
    return (n - 1 - j, n - 1 - i)


def _sign(p):
    return {"sym": 1, "skew": -1}[p["cond"]]


def _part_by(A, R, part):
    if part == "P":
        return (A + R(A)) / 2
    return (A - R(A)) / 2


# ---- the key ----------------------------------------------------------------------------------

def key(v, p):
    A = _square(v)
    if p["ask"] == "type":
        return _type_by(A, _T)
    if p["ask"] == "findx":
        x = _findx_by(A, _main, _sign(p))
        B = A.subs(_unknown(A), x)
        if B != _sign(p) * _T(B):
            raise ValueError("no x makes A that type")
        return x
    if p["ask"] == "part":
        # From the definitions alone: unknown P with p_ij = p_ji, unknown Q with q_ij = -q_ji, P + Q = A.
        n = A.rows
        ps = {(i, j): symbols(f"p{min(i, j)}{max(i, j)}") for i, j in _cells(A)}
        qs = {(i, j): (0 if i == j else (1 if i < j else -1) * symbols(f"q{min(i, j)}{max(i, j)}")) for i, j in _cells(A)}
        P = Matrix(n, n, lambda i, j: ps[(i, j)])
        Q = Matrix(n, n, lambda i, j: qs[(i, j)])
        unknowns = sorted((P.free_symbols | Q.free_symbols), key=str)
        sol = solve(list(P + Q - A), unknowns, dict=True)
        if len(sol) != 1:
            raise ValueError("no unique split")
        return (P if p["part"] == "P" else Q).subs(sol[0])
    raise ValueError(f"no ask {p['ask']}")


# ---- misconceptions ---------------------------------------------------------------------------

def m1(v, p):
    """Skew-symmetric only needs a_ij = -a_ji off the diagonal; the diagonal may be anything."""
    if p["ask"] != "type":
        raise ValueError("only for naming the type")
    A = _square(v)
    skew = all(A[i, j] == -A[j, i] for i, j in _cells(A) if i != j)
    return _label(A == _T(A), skew)


def m2(v, p):
    """Forgets the half: takes P = A + A^T and Q = A - A^T."""
    if p["ask"] != "part":
        raise ValueError("only for the split A = P + Q")
    A = _square(v)
    return A + _T(A) if p["part"] == "P" else A - _T(A)


def m3(v, p):
    """Swaps the two conditions: symmetric means A^T = -A, skew-symmetric means A^T = A."""
    A = _square(v)
    if p["ask"] == "type":
        name = str(_type_by(A, _T))
        if name not in _SWAP:
            raise ValueError(f"{name} reads the same under the swap")
        return Symbol(_SWAP[name])
    if p["ask"] == "findx":
        return _findx_by(A, _main, -_sign(p))
    if p["ask"] == "part":
        return _part_by(A, _T, "Q" if p["part"] == "P" else "P")
    raise ValueError(f"no ask {p['ask']}")


def m4(v, p):
    """Mirrors in the other diagonal (top right to bottom left) instead of the leading diagonal."""
    A = _square(v)
    if p["ask"] == "type":
        return _type_by(A, _W)
    if p["ask"] == "findx":
        return _findx_by(A, _anti, _sign(p))
    if p["ask"] == "part":
        return _part_by(A, _W, p["part"])
    raise ValueError(f"no ask {p['ask']}")


def m5(v, p):
    """Calls a matrix symmetric when mirror entries are equal in size, ignoring their signs (5 and -5 'match')."""
    if p["ask"] != "type":
        raise ValueError("only for naming the type")
    A = _square(v)
    sym = all(A[i, j] == A[j, i] or A[i, j] == -A[j, i] for i, j in _cells(A))
    return _label(sym, A == -_T(A))


def m6(v, p):
    """Writes a_ij = -a_ji with the unknown entry on the right and negates only its x-term: -(2x - 3) as -2x - 3."""
    if p["ask"] != "findx" or p["cond"] != "skew":
        raise ValueError("only for finding x in a skew-symmetric matrix")
    A = _square(v)
    x = _unknown(A)
    eqs = []
    for i, j in _cells(A):
        e = A[i, j]
        if e.has(x) and i != j:
            const = e.subs(x, 0)
            if const == 0:
                raise ValueError("a one-term entry has no bracket to slip on")
            eqs.append(A[j, i] - (-(e - const) + const))
    return _solve_x(eqs, x)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
