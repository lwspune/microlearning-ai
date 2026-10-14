"""C07 Simplifying with identities: answer models (the key, and one per misconception).

Inputs: L, the expression in x (standing for theta), written with sin, cos, tan, cot, sec, csc.
  t (optional): the given value of tan x; the item then asks for the value of L.
  Without t the item asks what L simplifies to, an expression in x.
params["den"]: "cos-first" when the book prints the denominator with its cos term first (C07-M5).
"""
from sympy import Add, Pow, cos, cot, csc, expand, fraction, sec, simplify, sin, sqrt, tan


def _var(L):
    (x,) = L.free_symbols
    return x


def _to_sin_cos(e, x, recip=None, quot=None):
    """Rewrites tan, cot, sec, cosec in sin and cos. recip / quot override the true definitions."""
    s, c = sin(x), cos(x)
    sec_, csc_ = recip or (1 / c, 1 / s)
    tan_, cot_ = quot or (s / c, c / s)
    return e.subs({sec(x): sec_, csc(x): csc_, tan(x): tan_, cot(x): cot_}, simultaneous=True)


def _finish(e, x, v, swap=False):
    """The value of e (in sin and cos) for the given tan x, else e simplified.
    The point (1, t) lies on the terminal arm, so r = sqrt(1 + t^2), sin = t/r, cos = 1/r.
    swap: the student who believes tan = cos/sin takes cos/sin = t instead."""
    if "t" not in v:
        return simplify(e)
    t = v["t"]
    r = sqrt(1 + t**2)
    s, c = (1 / r, t / r) if swap else (t / r, 1 / r)
    return simplify(e.subs({sin(x): s, cos(x): c}, simultaneous=True))


def key(v, p):
    """Straight from the definitions of the six ratios."""
    L = v["L"]
    x = _var(L)
    return _finish(_to_sin_cos(L, x), x, v)


def m1(v, p):
    """Mixes up the reciprocals: sec = 1/sin and cosec = 1/cos."""
    L = v["L"]
    x = _var(L)
    if not L.has(sec(x)) and not L.has(csc(x)):
        raise ValueError("no sec or cosec to convert")
    return _finish(_to_sin_cos(L, x, recip=(1 / sin(x), 1 / cos(x))), x, v)


def m2(v, p):
    """Writes tan upside down: tan = cos/sin (and cot = sin/cos). A given tan = t is read as cos/sin = t."""
    L = v["L"]
    x = _var(L)
    if not L.has(tan(x)) and not L.has(cot(x)) and "t" not in v:
        raise ValueError("no tan or cot to convert")
    return _finish(_to_sin_cos(L, x, quot=(cos(x) / sin(x), sin(x) / cos(x))), x, v, swap="t" in v)


def _square_termwise(e):
    """(a + b)^2 -> a^2 + b^2 and (a - b)^2 -> a^2 - b^2: each term squared, keeping its sign."""
    if isinstance(e, Pow) and e.exp == 2 and isinstance(e.base, Add):
        out = 0
        for term in e.base.args:
            co, rest = term.as_coeff_Mul()
            out += (1 if co > 0 else -1) * (co * rest) ** 2
        return out
    if e.args:
        return e.func(*[_square_termwise(a) for a in e.args])
    return e


def m3(v, p):
    """Squares a sum or difference term by term: (a +- b)^2 = a^2 +- b^2."""
    L = v["L"]
    x = _var(L)
    wrong = _square_termwise(L)
    if wrong == L:
        raise ValueError("no square of a sum")
    return _finish(_to_sin_cos(wrong, x), x, v)


def m4(v, p):
    """Cancels term by term across a fraction: (p + q)/(r + s) = p/r + q/s, pairing like terms."""
    L = v["L"]
    num, den = fraction(L)
    dens = list(Add.make_args(den))
    if len(dens) < 2:
        raise ValueError("the denominator is not a sum")
    out = 0
    for term in Add.make_args(num):
        ratios = [term / d for d in dens if (term / d).is_number]
        if len(ratios) != 1:
            raise ValueError(f"no like term for {term} in the denominator")
        out += ratios[0]
    return simplify(out)


def m5(v, p):
    """Divides through by cos but, with the denominator printed cos-first, puts tan on its first term."""
    if p.get("den") != "cos-first":
        raise ValueError("the denominator is printed sin-first")
    L = v["L"]
    x = _var(L)
    num, den = fraction(L)
    wrong = num / den.subs({sin(x): cos(x), cos(x): sin(x)}, simultaneous=True)
    return _finish(_to_sin_cos(wrong, x), x, v)


def m6(v, p):
    """Drops the 1 from the Pythagorean identities: sec^2 = tan^2 and cosec^2 = cot^2."""
    L = v["L"]
    x = _var(L)
    e = expand(L)
    if not e.has(sec(x) ** 2) and not e.has(csc(x) ** 2):
        raise ValueError("no sec^2 or cosec^2")
    e = e.subs({sec(x) ** 2: tan(x) ** 2, csc(x) ** 2: cot(x) ** 2}, simultaneous=True)
    return _finish(_to_sin_cos(e, x), x, v)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
