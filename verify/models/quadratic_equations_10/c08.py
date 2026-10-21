"""C08 Expressions in the roots: answer models (the key, and one per misconception).

Inputs: either a, b, c of ax^2 + bx + c = 0 (a != 0), whose roots are alpha and beta,
        or s = alpha + beta and t = alpha^3 + beta^3 (params out = "prod").
Params: out = "sq"    -> alpha^2 + beta^2;
        out = "cube"  -> alpha^3 + beta^3;
        out = "diff"  -> (alpha - beta)^2;
        out = "ratio" -> alpha/beta + beta/alpha;
        out = "prod"  -> alpha*beta, from s and t.
The key is computed from the roots themselves (solved directly), never from the identities.
"""
from sympy import Symbol, simplify, solve

_X = Symbol("x")
_A, _B = Symbol("alpha"), Symbol("beta")


def _roots(v):
    a, b, c = v["a"], v["b"], v["c"]
    r = solve(a * _X**2 + b * _X + c, _X)
    if len(r) == 1:
        r = [r[0], r[0]]
    return r


def key(v, p):
    out = p["out"]
    if out == "prod":
        sols = solve([_A + _B - v["s"], _A**3 + _B**3 - v["t"]], [_A, _B], dict=True)
        vals = {simplify(d[_A] * d[_B]) for d in sols}
        if len(vals) != 1:
            raise ValueError("alpha*beta not fixed by s and t")
        return vals.pop()
    al, be = _roots(v)
    expr = {
        "sq": al**2 + be**2,
        "cube": al**3 + be**3,
        "diff": (al - be) ** 2,
        "ratio": al / be + be / al,
    }[out]
    return simplify(expr)


def _sp(v):
    """The right sum and product, read from a, b, c."""
    return -v["b"] / v["a"], v["c"] / v["a"]


def _from_sp(s, P, out, sq_sign=-1, cube_sign=-1, diff_coeff=-4):
    """Each expression from s and P, with (possibly wrong) correction terms."""
    sq = s**2 + sq_sign * 2 * P
    if out == "sq":
        return sq
    if out == "cube":
        return s**3 + cube_sign * 3 * P * s
    if out == "diff":
        return s**2 + diff_coeff * P
    if out == "ratio":
        return sq / P
    raise ValueError("unknown out")


def m1(v, p):
    """Drops the correction term: alpha^2 + beta^2 = (alpha + beta)^2, alpha^3 + beta^3 = (alpha + beta)^3,
    (alpha - beta)^2 = alpha^2 + beta^2."""
    out = p["out"]
    if out == "prod":
        raise ValueError("no correction term to drop when solving back")
    s, P = _sp(v)
    if out == "sq":
        return s**2
    if out == "cube":
        return s**3
    if out == "diff":
        return s**2 - 2 * P
    if out == "ratio":
        return s**2 / P
    raise ValueError("unknown out")


def m2(v, p):
    """Adds the correction term instead of subtracting it: (alpha + beta)^2 + 2 alpha beta, and so on."""
    if p["out"] == "prod":
        s, t = v["s"], v["t"]
        return (t - s**3) / (3 * s)  # from t = s^3 + 3 P s
    s, P = _sp(v)
    return _from_sp(s, P, p["out"], sq_sign=1, cube_sign=1, diff_coeff=4)


def m3(v, p):
    """Takes alpha + beta = b/a (drops the minus sign)."""
    if p["out"] == "prod":
        raise ValueError("the sum is given")
    s, P = _sp(v)
    return _from_sp(-s, P, p["out"])


def m4(v, p):
    """Forgets to divide by a: alpha + beta = -b, alpha beta = c."""
    if p["out"] == "prod":
        raise ValueError("the sum is given")
    if v["a"] == 1:
        raise ValueError("a = 1")
    return _from_sp(-v["b"], v["c"], p["out"])


def m5(v, p):
    """Drops the factor (alpha + beta): alpha^3 + beta^3 = (alpha + beta)^3 - 3 alpha beta."""
    out = p["out"]
    if out == "prod":
        s, t = v["s"], v["t"]
        return (s**3 - t) / 3
    if out != "cube":
        raise ValueError("cubes only")
    s, P = _sp(v)
    return s**3 - 3 * P


def m6(v, p):
    """Solving t = s^3 - 3 P s for P, moves t across '=' without changing its sign: 3 P s = s^3 + t."""
    if p["out"] != "prod":
        raise ValueError("solving back only")
    s, t = v["s"], v["t"]
    return (s**3 + t) / (3 * s)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
