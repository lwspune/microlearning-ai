"""C01 Is it a quadratic equation?: answer models (the key, and one per misconception).

Inputs: L and R, the two sides of the equation as printed (sympy keeps brackets unexpanded).
Params: out = "form" -> the simplified equation P = 0, as the polynomial P (leading coefficient
positive), whose degree says whether it is quadratic; out = "abc" -> Tuple(a, b, c) of
ax^2 + bx + c = 0 with a > 0.
"""
from sympy import Add, Poly, Tuple, expand, fraction, together


def _var(v):
    syms = (v["L"].free_symbols | v["R"].free_symbols)
    if len(syms) != 1:
        raise ValueError("one variable expected")
    return next(iter(syms))


def _clear(L, R, x):
    """Multiply both whole sides by the power of x that clears every denominator."""
    k = 0
    for side in (L, R):
        for t in Add.make_args(expand(side)):
            d = fraction(together(t))[1]
            if d.has(x):
                k = max(k, Poly(d, x).degree())
    return expand(L * x**k), expand(R * x**k)


def _norm(P, x):
    P = expand(P)
    if P.free_symbols != {x}:
        raise ValueError("no variable left")
    return -P if Poly(P, x).LC() < 0 else P


def _out(P, x, p):
    """The form P, or (a, b, c) when P has degree 2."""
    if p.get("out") == "abc":
        c = Poly(P, x).all_coeffs()
        if len(c) != 3:
            raise ValueError("not quadratic, so no a, b, c")
        return Tuple(*c)
    return P


def _key_form(v):
    x = _var(v)
    L, R = _clear(v["L"], v["R"], x)
    return _norm(L - R, x), x


def key(v, p):
    """Clear fractions by multiplying every term, bring all to one side (signs change), combine."""
    P, x = _key_form(v)
    return _out(P, x, p)


def m1(v, p):
    """Ignores the terms with the variable in a denominator: drops them, then simplifies."""
    x = _var(v)
    keep = lambda s: Add(*[t for t in Add.make_args(expand(s)) if t.is_polynomial(x)])
    if keep(v["L"]) - keep(v["R"]) == expand(v["L"] - v["R"]):
        raise ValueError("no fraction term to drop")
    return _out(_norm(keep(v["L"]) - keep(v["R"]), x), x, p)


def m2(v, p):
    """Moves the right side across '=' without changing its signs: L + R = 0."""
    x = _var(v)
    L, R = _clear(v["L"], v["R"], x)
    return _out(_norm(L + R, x), x, p)


def m3(v, p):
    """Cancels the highest power whenever it appears on both sides, whatever its coefficients."""
    x = _var(v)
    L, R = _clear(v["L"], v["R"], x)
    PL, PR = Poly(L, x), Poly(R, x)
    n = max(PL.degree(), PR.degree())
    if n < 1 or PL.degree() != n or PR.degree() != n:
        raise ValueError("highest power not on both sides")
    if PL.LC() == PR.LC():
        raise ValueError("equal coefficients: cancelling is right here")
    return _out(_norm((L - PL.LC() * x**n) - (R - PR.LC() * x**n), x), x, p)


def m4(v, p):
    """Squares a bracket term by term, with no middle term: (x - 1)^2 = x^2 + 1."""
    sq = lambda e: e.is_Pow and e.exp == 2 and e.base.is_Add
    L, R = (s.replace(sq, lambda e: Add(*[a**2 for a in e.base.args])) for s in (v["L"], v["R"]))
    if L == v["L"] and R == v["R"]:
        raise ValueError("no bracket squared")
    return key({"L": L, "R": R}, p)


def m5(v, p):
    """Drops the minus signs: writes every coefficient as positive."""
    P, x = _key_form(v)
    c = Poly(P, x).all_coeffs()
    if all(k >= 0 for k in c):
        raise ValueError("no minus sign to drop")
    n = len(c) - 1
    return _out(Add(*[abs(k) * x**(n - i) for i, k in enumerate(c)]), x, p)


def m6(v, p):
    """Swaps b and c: takes the constant as b and the coefficient of x as c."""
    if p.get("out") != "abc":
        raise ValueError("only for a, b, c")
    a, b, c = key(v, p)
    if b == c:
        raise ValueError("b = c: swapping changes nothing")
    return Tuple(a, c, b)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
