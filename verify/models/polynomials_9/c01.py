"""C01 Polynomials and their degree: answer models (the key, and one per misconception).

An item gives its expression term by term, in the order the stem writes them:
  params {"terms": ["5", "3*x**4"], "vars": "x", "ask": "degree" | "class"}
"vars" names the variables (comma-separated, e.g. "m,n"); every other letter is a constant.
"degree" answers a number (or NOT_POLY); "class" answers LINEAR / QUADRATIC / CUBIC (or NOT_POLY).
"""
from sympy import Integer, Symbol, sympify

NOT_POLY = Symbol("not_poly")
CLASS = {1: Symbol("linear"), 2: Symbol("quadratic"), 3: Symbol("cubic")}


def _terms(p):
    names = [n.strip() for n in p["vars"].split(",")]
    vs = [Symbol(n) for n in names]
    loc = {n: s for n, s in zip(names, vs)}
    out = []
    for t in p["terms"]:
        c, exps = sympify(t, locals=loc), []
        for v in vs:
            c, e = c.as_coeff_exponent(v)
            exps.append(e)
        out.append((c, exps))   # (coefficient, index of each variable)
    return out


def _is_poly(terms):
    return all(e.is_integer and e >= 0 for _, es in terms for e in es)


def _deg(es):
    return sum(es, Integer(0))


def _answer(p, d):
    if p["ask"] == "degree":
        return d
    if d not in CLASS:
        raise ValueError(f"degree {d} has no class name")
    return CLASS[d]


def key(v, p):
    ts = _terms(p)
    if not _is_poly(ts):
        return NOT_POLY
    return _answer(p, max(_deg(es) for _, es in ts))


def _poly_only(ts):
    if not _is_poly(ts):
        raise ValueError("not a polynomial: this slip is about degree")


def m1(v, p):
    """Takes the index of the first term written, not the highest."""
    ts = _terms(p)
    return _answer(p, _deg(ts[0][1]))


def m2(v, p):
    """In two or more variables, takes the highest single index, not the sum in a term."""
    ts = _terms(p)
    _poly_only(ts)
    if len(ts[0][1]) < 2:
        raise ValueError("one variable")
    return _answer(p, max(max(es) for _, es in ts))


def m3(v, p):
    """Counts the terms and calls that the degree."""
    return _answer(p, Integer(len(p["terms"])))


def m4(v, p):
    """Gives the coefficient of the highest-index term as the degree."""
    ts = _terms(p)
    _poly_only(ts)
    if p["ask"] != "degree":
        raise ValueError("a coefficient is not a class")
    top = max(_deg(es) for _, es in ts)
    return [c for c, es in ts if _deg(es) == top][0]


def m5(v, p):
    """Accepts any index (negative, a fraction) as a polynomial and takes the highest one."""
    ts = _terms(p)
    if _is_poly(ts):
        raise ValueError("already a polynomial")
    return _answer(p, max(_deg(es) for _, es in ts))


def m6(v, p):
    """Rejects an expression whose coefficient or constant is a root or a fraction."""
    ts = _terms(p)
    if not _is_poly(ts):
        raise ValueError("not a polynomial anyway")
    if all(c.is_integer for c, _ in ts):
        raise ValueError("no root or fraction coefficient")
    return NOT_POLY


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
