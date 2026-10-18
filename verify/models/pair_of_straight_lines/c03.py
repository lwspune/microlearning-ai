"""C03 Sum and product of slopes: answer models (the key, and one per misconception).

The pair is a x^2 + c xy + b y^2 = 0, so c = 2h is the WHOLE coefficient of xy.
Inputs: a, c, b (sympy numbers; on a "find" item exactly one of them holds the unknown k),
and t, d or n as the condition needs.
params["ask"] is one of
  "sum"     m1 + m2
  "diff"    |m1 - m2|
  "k"       the real value(s) of k that meet params["cond"]:
              "sum_t_prod"  m1 + m2 = t * m1 m2
              "diff"        one slope exceeds the other by d (|m1 - m2| = d)
              "ratio"       one slope is n times the other
A single value comes back as a number, two or more as a FiniteSet.

The key never uses the sum and product formulas: the slopes are the roots of
a + c m + b m^2 = 0 (put y = mx in the pair), solved outright, and each condition
is imposed on those roots and checked again on the concrete slopes.
"""
from sympy import FiniteSet, S, Symbol, im, simplify, solve, sqrt

K = Symbol("k")
M = Symbol("m")


def _abc(v):
    return v["a"], v["c"], v["b"]


def _unknown(v):
    free = set().union(*(v[x].free_symbols for x in ("a", "c", "b")))
    if free != {K}:
        raise ValueError("a 'find' item needs exactly the unknown k among a, c, b")
    return K


def _answer(vals):
    vals = sorted(set(simplify(x) for x in vals), key=lambda x: float(x))
    if not vals:
        raise ValueError("no real value of k")
    return vals[0] if len(vals) == 1 else FiniteSet(*vals)


def _real_k(sols):
    out = []
    for s in sols:
        s = simplify(s)
        if s.free_symbols or im(s) != 0:
            continue
        out.append(s)
    return out


# ---- the key: slopes as the roots themselves --------------------------------------

def _slopes(a, c, b):
    if b == 0:
        raise ValueError("b = 0: one line is x = 0, which has no slope")
    return solve(a + c * M + b * M**2, M)


def _cond(r1, r2, v, p):
    cond = p["cond"]
    if cond == "sum_t_prod":
        return [r1 + r2 - v["t"] * r1 * r2]
    if cond == "diff":
        return [r1 - r2 - v["d"], r2 - r1 - v["d"]]
    if cond == "ratio":
        return [r1 - v["n"] * r2, r2 - v["n"] * r1]
    raise ValueError(f"unknown cond {cond!r}")


def _holds(a, c, b, v, p):
    """Check the condition on the concrete slopes for a numeric pair."""
    rs = _slopes(a, c, b)
    if len(rs) != 2 or any(im(r) != 0 for r in rs):
        return False
    r1, r2 = rs
    return any(simplify(e) == 0 for e in _cond(r1, r2, v, p))


def key(v, p):
    a, c, b = _abc(v)
    ask = p["ask"]
    if ask in ("sum", "diff"):
        rs = _slopes(a, c, b)
        if len(rs) != 2:
            raise ValueError("coincident lines")
        r1, r2 = rs
        return simplify(r1 + r2) if ask == "sum" else simplify(abs(r1 - r2))
    k = _unknown(v)
    r1, r2 = _slopes(a, c, b)
    cands = []
    for e in _cond(r1, r2, v, p):
        cands += solve(e, k)
    good = [s for s in _real_k(cands) if _holds(a.subs(k, s), c.subs(k, s), b.subs(k, s), v, p)]
    return _answer(good)


# ---- the misconceptions: a wrong sum or product formula, or a wrong last step ------

def _from_formulas(v, p, S_, P_, diff_rhs=None, positive_root=False):
    """Impose the condition on a (possibly wrong) sum S_ and product P_ of the slopes."""
    ask = p["ask"]
    if ask == "sum":
        return simplify(S_)
    if ask == "diff":
        sq = simplify(S_**2 - 4 * P_)
        if diff_rhs == "unsquared":
            return sq
        if sq < 0:
            raise ValueError("no real slopes under this model")
        return sqrt(sq)
    k = _unknown(v)
    cond = p["cond"]
    if cond == "sum_t_prod":
        sols = solve(S_ - v["t"] * P_, k)
    elif cond == "diff":
        rhs = v["d"] if diff_rhs == "unsquared" else v["d"] ** 2
        sols = solve(S_**2 - 4 * P_ - rhs, k)
        if positive_root:
            if len(sols) != 2 or simplify(sols[0] + sols[1]) != 0:
                raise ValueError("no plus-or-minus root to drop")
            sols = [max(sols, key=lambda x: float(x))]
    elif cond == "ratio":
        n = v["n"]
        m = Symbol("m_1")
        if positive_root:
            # m * n m = P gives m^2 = P / n; keeps only m = +sqrt(P / n)
            if P_.free_symbols:
                raise ValueError("needs a numeric product")
            sols = solve(S_ - (1 + n) * sqrt(P_ / n), k)
        else:
            sols = [s[k] for s in solve([S_ - (1 + n) * m, P_ - n * m**2], [m, k], dict=True)]
    else:
        raise ValueError(f"unknown cond {cond!r}")
    return _answer(_real_k(sols))


def m1(v, p):
    """Slopes taken as the roots of a m^2 + 2h m + b = 0 (x/y in place of y/x)."""
    a, c, b = _abc(v)
    return _from_formulas(v, p, -c / a, b / a)


def m2(v, p):
    """h taken as the whole coefficient of xy, so the sum comes out as -2(c)/b."""
    a, c, b = _abc(v)
    return _from_formulas(v, p, -2 * c / b, a / b)


def m3(v, p):
    """The minus sign dropped: sum of slopes = 2h/b."""
    a, c, b = _abc(v)
    if p["ask"] != "sum" and p.get("cond") != "sum_t_prod":
        raise ValueError("the sign is squared away here")
    return _from_formulas(v, p, c / b, a / b)


def m4(v, p):
    """(m1 + m2)^2 - 4 m1 m2 taken as the difference itself, not its square."""
    a, c, b = _abc(v)
    if p["ask"] != "diff" and p.get("cond") != "diff":
        raise ValueError("only for a difference of slopes")
    return _from_formulas(v, p, -c / b, a / b, diff_rhs="unsquared")


def m5(v, p):
    """Sum of slopes remembered as -h/b."""
    a, c, b = _abc(v)
    return _from_formulas(v, p, -c / (2 * b), a / b)


def m6(v, p):
    """Only the positive square root kept, so one of the two answers is lost."""
    a, c, b = _abc(v)
    if p["ask"] != "k" or p["cond"] not in ("diff", "ratio"):
        raise ValueError("no square root to take here")
    return _from_formulas(v, p, -c / b, a / b, positive_root=True)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
