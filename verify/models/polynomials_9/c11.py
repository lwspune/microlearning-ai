"""C11 Factorising by substitution: answer models (the key, and one per misconception).

params:
  var:   the variable, "x" or "y".
  expr:  the stem's expression, as written (brackets and all).
  block: the repeated block that m stands for, e.g. "x**2 - x".
  terms: the expression in m, one string "coef:shift,shift,..." per term: coef times the
         product of (m + shift) over its shifts. (x^2 - x)^2 is "1:0,0"; -8(m + 8) is "-8:8".
  k:     the number added at the end.
  ask:   "factor" (the full factorisation in the variable) or "quad" (the expression in m).
"""
from sympy import Integer, Mul, Poly, Symbol, expand, factor, roots, sympify

M = Symbol("m")


def _var(p):
    return Symbol(p["var"], real=True)


def _locals(p):
    return {p["var"]: _var(p), "m": M}


def _terms(p):
    out = []
    for t in p["terms"]:
        c, shifts = t.split(":")
        out.append((Integer(c), [Integer(s) for s in shifts.split(",")]))
    return out


def _quad(p, term_rule=None):
    """The expression in m, with term_rule(coef, shifts) rewriting a term (None: the right way)."""
    total = Integer(p["k"])
    for c, shifts in _terms(p):
        if term_rule is not None:
            total += term_rule(c, shifts)
        else:
            total += c * Mul(*[M + s for s in shifts])
    return expand(total)


def _block(p):
    return sympify(p["block"], locals=_locals(p))


def _back(q, p):
    """Put the block back for m and factorise as far as the integers allow."""
    return factor(expand(q.subs(M, _block(p))))


def _answer(q, p):
    if p["ask"] == "quad":
        return q
    if p["ask"] == "factor":
        return _back(q, p)
    raise ValueError(p["ask"])


def key(v, p):
    """From the definition: expand the stem's expression and factorise it over the integers."""
    e = expand(sympify(p["expr"], locals=_locals(p)))
    if expand(_quad(p).subs(M, _block(p))) != e:
        raise ValueError("terms do not match expr")
    if p["ask"] == "quad":
        return _quad(p)
    return factor(e)


def m1(v, p):
    """Splits the middle term with the right numbers but the wrong signs: m^2 - 8m + 12 = (m + 6)(m + 2)."""
    if p["ask"] != "factor":
        raise ValueError("a factorisation item")
    q = _quad(p)
    r = roots(Poly(q, M))
    if Poly(q, M).degree() != 2 or sum(r.values()) != 2 or not all(t.is_integer for t in r):
        raise ValueError("needs integer roots")
    return _back(expand(q.subs(M, -M)), p)


def m2(v, p):
    """Puts the variable back for m instead of the whole block: (m - 6)(m - 2) becomes (x - 6)(x - 2)."""
    if p["ask"] != "factor":
        raise ValueError("a factorisation item")
    return factor(_quad(p).subs(M, _var(p)))


def m3(v, p):
    """Leaves out the number added at the end, as if it did not change the factors."""
    if Integer(p["k"]) == 0:
        raise ValueError("needs a constant")
    return _answer(expand(_quad(p) - Integer(p["k"])), p)


def m4(v, p):
    """Multiplies the number outside a bracket into its first term only: -8(m + 8) = -8m + 8."""
    def rule(c, shifts):
        if len(shifts) == 1 and shifts[0] != 0 and c != 1:
            return c * M + shifts[0]
        return c * Mul(*[M + s for s in shifts])
    if not any(len(s) == 1 and s[0] != 0 and c != 1 for c, s in _terms(p)):
        raise ValueError("needs k(m + s)")
    return _answer(_quad(p, rule), p)


def m5(v, p):
    """Multiplies two brackets as first times first plus last times last: (m + 1)(m + 2) = m^2 + 2."""
    def rule(c, shifts):
        if len(shifts) == 2 and any(s != 0 for s in shifts):
            return c * (M**2 + shifts[0] * shifts[1])
        return c * Mul(*[M + s for s in shifts])
    if not any(len(s) == 2 and any(t != 0 for t in s) for _, s in _terms(p)):
        raise ValueError("needs (m + a)(m + b)")
    return _answer(_quad(p, rule), p)


def m6(v, p):
    """Lets the minus sign outside a bracket reach its first term only: -8(m + 8) = -8m + 64."""
    def rule(c, shifts):
        if len(shifts) == 1 and shifts[0] != 0 and c < 0:
            return c * M - c * shifts[0]
        return c * Mul(*[M + s for s in shifts])
    if not any(len(s) == 1 and s[0] != 0 and c < 0 for c, s in _terms(p)):
        raise ValueError("needs -k(m + s)")
    return _answer(_quad(p, rule), p)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
