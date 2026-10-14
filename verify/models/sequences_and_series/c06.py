"""C06 The nth term from the sum: answer models (the key, and one per misconception).

Inputs: S = S_n as an expression in the symbol n; n = the symbol n; k = a term number (ask "tk").
params["ask"]: "tn" (t_n as an expression, for n >= 2), "tk" (the value t_k),
"t1" (the first term) or "ratio" (t_2 / t_1).
"""
from sympy import Integer, simplify


def _S(v, m):
    return v["S"].subs(v["n"], m)


def _const(v):
    """The constant part of S_n (the part with no n in it), e.g. -5 in 5(4^n - 1)."""
    return v["S"].expand().as_independent(v["n"])[0]


def _answer(v, p, t):
    """Reads the asked quantity off a rule t(m) for the mth term."""
    ask = p["ask"]
    if ask == "tn":
        return simplify(t(v["n"]))
    if ask == "tk":
        return simplify(t(v["k"]))
    if ask == "t1":
        return simplify(t(Integer(1)))
    return simplify(t(Integer(2)) / t(Integer(1)))


def key(v, p):
    """From the definition S_m = t_1 + ... + t_m: t_1 = S_1, and each later term is the step S_m - S_(m-1)."""
    def t(m):
        return _S(v, 1) if m == 1 else _S(v, m) - _S(v, m - 1)
    if p["ask"] == "tn":
        tn = simplify(_S(v, v["n"]) - _S(v, v["n"] - 1))
        for m in range(2, 6):  # the expression must reproduce the running totals from the 2nd term on
            assert simplify(_S(v, 1) + sum(tn.subs(v["n"], j) for j in range(2, m + 1)) - _S(v, m)) == 0
        return tn
    return _answer(v, p, t)


def m1(v, p):
    """Takes the sum as the term: t_m = S_m."""
    return _answer(v, p, lambda m: _S(v, m))


def m2(v, p):
    """Subtracts only the n-part of S_(n-1): the minus sign misses its constant, so the
    constants double instead of cancelling: t_m = S_m - S_(m-1) + 2c."""
    c = _const(v)
    if c == 0:
        raise ValueError("S_n has no constant part to mishandle")
    return _answer(v, p, lambda m: _S(v, m) - _S(v, m - 1) + 2 * c)


def m3(v, p):
    """Off by one: takes t_m = S_(m+1) - S_m, the term after the one asked."""
    return _answer(v, p, lambda m: _S(v, m + 1) - _S(v, m))


def m4(v, p):
    """Uses t_m = S_m - S_(m-1) for m = 1 too (t_1 = S_1 - S_0), so a constant in S_n
    goes missing from the first term and the sequence looks like a G.P."""
    if p["ask"] in ("tn", "tk"):
        raise ValueError("same as the key from the 2nd term on")
    if _S(v, 0) == 0:
        raise ValueError("S_0 = 0, so S_1 - S_0 is the right first term")
    return _answer(v, p, lambda m: _S(v, m) - _S(v, m - 1))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4}
