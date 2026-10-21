"""C07 Equations reducible to linear form: answer models (the key, and one per misconception).

Inputs: a1, b1, c1, a2, b2, c2, the pair read as a_i * (1/U) + b_i * (1/V) = c_i.
Params: "U", "V" (expressions in x and y, default "x" and "y") and "form":
"recip" (the stem shows a/U + b/V = c) or "split" (the stem shows (b x + a y)/(xy) = c).
Answers are the pair (x, y) as the complex number x + y*I.
"""
from sympy import I, Rational, symbols, solve, sympify

x, y = symbols("x y", real=True)
m, n = symbols("m n")
_LOC = {"x": x, "y": y}


def _uv(p):
    return sympify(p.get("U", "x"), locals=_LOC), sympify(p.get("V", "y"), locals=_LOC)


def _plain(p):
    U, V = _uv(p)
    return U == x and V == y


def _coef(v):
    return [v[k] for k in ("a1", "b1", "c1", "a2", "b2", "c2")]


def _pair(eqs, unknowns):
    sol = solve(eqs, unknowns, dict=True)
    if len(sol) != 1 or any(u not in sol[0] for u in unknowns):
        raise ValueError("no unique solution")
    return sol[0][unknowns[0]], sol[0][unknowns[1]]


def _mn(a1, b1, c1, a2, b2, c2):
    """The linear pair in m = 1/U, n = 1/V."""
    return _pair([a1 * m + b1 * n - c1, a2 * m + b2 * n - c2], [m, n])


def _back(p, U_val, V_val):
    """Solve U = U_val, V = V_val for (x, y)."""
    U, V = _uv(p)
    X, Y = _pair([U - U_val, V - V_val], [x, y])
    return X + Y * I


def _invert(p, mm, nn):
    if mm == 0 or nn == 0:
        raise ValueError("m or n is 0: no reciprocal")
    return _back(p, 1 / mm, 1 / nn)


def key(v, p):
    """Solve the original equations in x and y directly (no substitution)."""
    a1, b1, c1, a2, b2, c2 = _coef(v)
    U, V = _uv(p)
    sols = solve([a1 / U + b1 / V - c1, a2 / U + b2 / V - c2], [x, y], dict=True)
    sols = [s for s in sols if U.subs(s) != 0 and V.subs(s) != 0]
    if len(sols) != 1:
        raise ValueError(f"expected one solution, got {sols}")
    return sols[0][x] + sols[0][y] * I


def m1(v, p):
    """Stops at m and n: gives x = m, y = n."""
    mm, nn = _mn(*_coef(v))
    return mm + nn * I


def m2(v, p):
    """For 1/(x + y) = p, writes x + y = p (no reciprocal), then solves for x and y."""
    if _plain(p):
        raise ValueError("U, V are x, y: same as M1")
    mm, nn = _mn(*_coef(v))
    return _back(p, mm, nn)


def m3(v, p):
    """Goes back as if p stood for 1/x: x = 1/p, y = 1/q."""
    if _plain(p):
        raise ValueError("U, V are x, y: same as the key")
    mm, nn = _mn(*_coef(v))
    if mm == 0 or nn == 0:
        raise ValueError("no reciprocal")
    return 1 / mm + I / nn


def m4(v, p):
    """Splits (bx + ay)/(xy) as b/x + a/y: each numerator letter kept under its own letter."""
    if p.get("form") != "split":
        raise ValueError("only for (bx + ay)/(xy) stems")
    a1, b1, c1, a2, b2, c2 = _coef(v)
    mm, nn = _mn(b1, a1, c1, b2, a2, c2)
    return _invert(p, mm, nn)


def m5(v, p):
    """Multiplies by xy but leaves the right side as it was: b x + a y = c, solved as a linear pair."""
    if not _plain(p):
        raise ValueError("only for 1/x, 1/y stems")
    a1, b1, c1, a2, b2, c2 = _coef(v)
    X, Y = _pair([b1 * x + a1 * y - c1, b2 * x + a2 * y - c2], [x, y])
    return X + Y * I


def _misread(c):
    """1/(3x) read as 3 * (1/x): a fractional coefficient p/q becomes p * q."""
    c = Rational(c)
    return c if c.q == 1 else c.p * c.q


def m6(v, p):
    """Reads 1/(3x) as 3/x (3m instead of m/3), then solves correctly."""
    a1, b1, c1, a2, b2, c2 = _coef(v)
    if all(Rational(c).q == 1 for c in (a1, b1, a2, b2)):
        raise ValueError("no fractional coefficient to misread")
    mm, nn = _mn(_misread(a1), _misread(b1), c1, _misread(a2), _misread(b2), c2)
    return _invert(p, mm, nn)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
