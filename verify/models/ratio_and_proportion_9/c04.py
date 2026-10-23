"""C04 Combining ratios: answer models (the key, and one per misconception).

Each item gives params (strings):
  kind: "abc"   find a : b : c from ab="p:q" and bc="r:s"     -> Tuple, reduced to whole numbers
        "ac"    find a : c from ab and bc                     -> the number a/c
        "expr"  value of expr (in a, b, c, degree 0) from ab and bc
        "blank" prop="A|B|C|D", A/B = C/D with one entry "?"  -> the missing number
        "eq"    prop="A|B|C|D" in x, (A) : (B) = (C) : (D)     -> x
"""
from functools import reduce

from sympy import Eq, Integer, Rational, Symbol, Tuple, expand, gcd, ilcm, simplify, solve, sympify

X = Symbol("x", real=True)
A, B, C = Symbol("a"), Symbol("b"), Symbol("c")


def _s(t):
    return sympify(t, locals={"x": X, "a": A, "b": B, "c": C})


def _ratio(t):
    p, q = (Integer(int(u)) for u in t.split(":"))
    return p, q


def _whole(triple):
    """A triple of positive rationals as the reduced whole-number ratio."""
    den = reduce(ilcm, [Rational(t).q for t in triple], 1)
    ints = [Rational(t) * den for t in triple]
    g = reduce(gcd, ints)
    return tuple(Integer(t / g) for t in ints)


def _answer(p, triple):
    """Turn a (wrong or right) a : b : c into the item's answer."""
    a, b, c = triple
    if p["kind"] == "abc":
        return Tuple(*_whole(triple))
    if p["kind"] == "ac":
        return Integer(1) * a / c
    if p["kind"] == "expr":
        out = simplify(_s(p["expr"]).subs({A: a, B: b, C: c}))
        if out.free_symbols:
            raise ValueError("expression is not of degree 0")
        return out
    raise ValueError("not a combining item")


def _parts(p):
    return _ratio(p["ab"]) + _ratio(p["bc"])


def _prop(p):
    return [None if t == "?" else _s(t) for t in p["prop"].split("|")]


def _wrong(v, p, out):
    if simplify(out - key(v, p)) == 0 if not isinstance(out, Tuple) else out == key(v, p):
        raise ValueError("this rule gives the key here")
    return out


def key(v, p):
    """From the definition: a/b = p/q and b/c = r/s, so with c = 1, b = r/s and a = (p/q) b."""
    k = p["kind"]
    if k in ("abc", "ac", "expr"):
        pp, q, r, s = _parts(p)
        c = Integer(1)
        b = Rational(r, s) * c
        a = Rational(pp, q) * b
        return _answer(p, (a, b, c))
    if k == "blank":
        t = Symbol("t")
        a, b, c, d = [t if u is None else u for u in _prop(p)]
        sol = solve(Eq(a / b, c / d), t)
        assert len(sol) == 1
        return sol[0]
    if k == "eq":
        a, b, c, d = _prop(p)
        sol = [x for x in solve(Eq(a / b, c / d), X) if b.subs(X, x) != 0 and d.subs(X, x) != 0]
        assert len(sol) == 1
        return sol[0]
    raise ValueError(k)


def m1(v, p):
    """Joins the two ratios as they stand, without making b the same: a : b : c = p : q : s."""
    if p["kind"] not in ("abc", "ac", "expr"):
        raise ValueError("not a combining item")
    pp, q, r, s = _parts(p)
    return _wrong(v, p, _answer(p, (pp, q, s)))


def m2(v, p):
    """Makes two terms equal by adding the same number to both terms of a ratio (2 : 1 -> 5 : 4),
    or fills a blank in a/b = c/d by adding the same number to both terms."""
    k = p["kind"]
    if k in ("abc", "ac", "expr"):
        pp, q, r, s = _parts(p)
        if q == r:
            raise ValueError("b is already the same")
        if q < r:
            triple = (pp + (r - q), r, s)
        else:
            triple = (pp, q, s + (q - r))
        return _wrong(v, p, _answer(p, triple))
    if k == "blank":
        a, b, c, d = _prop(p)
        if d is None:
            return _wrong(v, p, b + (c - a))
        if c is None:
            return _wrong(v, p, a + (d - b))
        raise ValueError("blank must be on the right")
    raise ValueError("not modelled here")


def _first_only(n, e):
    """n * e with n multiplied into the x term only: 3(x + 2) -> 3x + 2."""
    e = expand(e)
    return n * e.coeff(X, 1) * X + e.coeff(X, 0)


def m3(v, p):
    """Multiplies only one term by the factor: makes b the LCM but leaves a and c as they were,
    keeps the other term of a/b unchanged, or multiplies only the x term of a bracket."""
    k = p["kind"]
    if k in ("abc", "ac", "expr"):
        pp, q, r, s = _parts(p)
        if q == r:
            raise ValueError("b is already the same")
        return _wrong(v, p, _answer(p, (pp, Integer(ilcm(q, r)), s)))
    if k == "blank":
        a, b, c, d = _prop(p)
        if d is None:
            return _wrong(v, p, b)
        if c is None:
            return _wrong(v, p, a)
        raise ValueError("blank must be on the right")
    if k == "eq":
        a, b, c, d = _prop(p)
        if d.free_symbols or c.free_symbols:
            raise ValueError("needs a number : number on the right")
        sol = solve(Eq(_first_only(d, a), _first_only(c, b)), X)
        if len(sol) != 1:
            raise ValueError("no single solution")
        return _wrong(v, p, sol[0])
    raise ValueError(k)


def m4(v, p):
    """Finds a/c by dividing the ratios, (a/b) / (b/c), instead of multiplying them."""
    if p["kind"] != "ac":
        raise ValueError("only for a : c")
    pp, q, r, s = _parts(p)
    return _wrong(v, p, Rational(pp, q) / Rational(r, s))


def m5(v, p):
    """Cross-multiplies the wrong pairs: from a/b = c/d writes a x c = b x d."""
    k = p["kind"]
    a, b, c, d = _prop(p) if k in ("blank", "eq") else (None,) * 4
    if k == "blank":
        t = Symbol("t")
        a, b, c, d = [t if u is None else u for u in (a, b, c, d)]
        sol = solve(Eq(a * c, b * d), t)
    elif k == "eq":
        sol = [x for x in solve(Eq(a * c, b * d), X) if b.subs(X, x) != 0 and d.subs(X, x) != 0]
    else:
        raise ValueError("only for a/b = c/d")
    if len(sol) != 1:
        raise ValueError("no single solution")
    return _wrong(v, p, sol[0])


def m6(v, p):
    """Solving ad = bc: moves the constant term across '=' without changing its sign."""
    if p["kind"] != "eq":
        raise ValueError("only for equations")
    a, b, c, d = _prop(p)
    lhs, rhs = expand(a * d), expand(b * c)
    sq = lhs.coeff(X, 2)
    if rhs.coeff(X, 2) != sq:
        raise ValueError("x^2 terms do not cancel")
    lhs, rhs = expand(lhs - sq * X**2), expand(rhs - sq * X**2)
    al, be, ga, de = lhs.coeff(X, 1), lhs.coeff(X, 0), rhs.coeff(X, 1), rhs.coeff(X, 0)
    if be == 0 or al == ga:
        raise ValueError("needs a constant on the left and an x term that stays")
    return _wrong(v, p, (de + be) / (al - ga))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
