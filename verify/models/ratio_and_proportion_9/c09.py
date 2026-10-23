"""C09 The k-method: answer models (the key, and one per misconception).

Params (strings):
  kind="prop": a/b = c/d = k, so a = bk and c = dk.
  kind="cont": a, b, c in continued proportion, a/b = b/c = k, so b = ck and a = ck^2.
  expr: the expression in a, b, c, d to write in terms of k (and the letters left).
"""
from sympy import Add, Symbol, cancel, expand, factor, fraction, sympify

a, b, c, d, k = (Symbol(s) for s in "abcdk")
_LOC = {"a": a, "b": b, "c": c, "d": d, "k": k}


def _expr(p):
    return sympify(p["expr"], locals=_LOC)


def _subs(p):
    """The right substitution, straight from the definition of the common ratio k."""
    if p["kind"] == "prop":
        return {a: b * k, c: d * k}
    if p["kind"] == "cont":
        return {b: c * k, a: c * k**2}
    raise ValueError("unknown kind")


def _sub_simplify(e, subs):
    return factor(cancel(e.xreplace(subs)))


def key(v, p):
    return _sub_simplify(_expr(p), _subs(p))


def m1(v, p):
    """Continued proportion: writes a = ck as well as b = ck (forgets a = bk = ck^2)."""
    if p["kind"] != "cont":
        raise ValueError("needs continued proportion")
    return _sub_simplify(_expr(p), {a: c * k, b: c * k})


def m2(v, p):
    """Turns the ratio upside down: from a/b = k writes b = ak, so a = b/k."""
    if p["kind"] == "prop":
        subs = {a: b / k, c: d / k}
    else:
        subs = {b: c / k, a: c / k**2}
    return _sub_simplify(_expr(p), subs)


def m3(v, p):
    """Squares the letter but not k: (bk)^2 = b^2 k."""
    e, subs = _expr(p), _subs(p)

    def is_pow(x):
        return x.is_Pow and x.base in subs and x.exp.is_Integer and x.exp > 1

    def slip(x):
        s = subs[x.base]
        kpart = s.as_independent(k)[1]
        return (s / kpart) ** x.exp * kpart

    wrong = e.replace(is_pow, slip)
    if wrong == e:
        raise ValueError("no power of a substituted letter")
    return _sub_simplify(wrong, subs)


def m4(v, p):
    """Believes the k-method always ends at k, whatever the expression."""
    return k


def m5(v, p):
    """Continued proportion: squares the wrong letter, a = c^2 k."""
    if p["kind"] != "cont":
        raise ValueError("needs continued proportion")
    return _sub_simplify(_expr(p), {a: c**2 * k, b: c * k})


def m6(v, p):
    """Cancels terms common to the numerator and the denominator, not factors."""
    num, den = fraction(cancel(key(v, p)))
    nt, dt = set(Add.make_args(expand(num))), set(Add.make_args(expand(den)))
    common = nt & dt
    if not common:
        raise ValueError("no common term")
    n_left, d_left = Add(*(nt - common)), Add(*(dt - common))
    if n_left == 0 or d_left == 0:
        raise ValueError("nothing left after cancelling")
    return cancel(n_left / d_left)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
