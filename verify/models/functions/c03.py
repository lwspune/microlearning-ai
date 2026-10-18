"""C03 Domain and range: answer models (the key, and one per misconception).

The item's function is params["f"], a string in x parsed unevaluated, written with
  Sqrt(u)       an even (square) root,      Cbrt(u)  a cube root,
  Log(u)        a log to a fixed base,      Logb(u, b)  log of u to the base b,
and "/" for division. Each model walks the expression, collects the conditions
a student with that idea writes down, and intersects their solution sets in R.
"""
from sympy import Eq, Function, Pow, S, Symbol, fraction, log, real_root, solveset, sqrt, together
from sympy import Poly, PolynomialError
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)
Sqrt, Cbrt, Log, Logb = Function("Sqrt"), Function("Cbrt"), Function("Log"), Function("Logb")
_LOCALS = {"x": x, "Sqrt": Sqrt, "Cbrt": Cbrt, "Log": Log, "Logb": Logb}


def _parse(p):
    return parse_expr(p["f"], local_dict=_LOCALS, evaluate=False)


def _real(e):
    """The expression with the placeholder functions replaced by real sympy ones."""
    return e.replace(Sqrt, lambda u: sqrt(u)).replace(Cbrt, lambda u: real_root(u, 3)).replace(
        Log, lambda u: log(u)).replace(Logb, lambda u, b: log(u) / log(b))


def _conditions(e, rules):
    """(g, rel) pairs: g >= 0, g > 0 or g != 0, as the rules say."""
    out = []
    if isinstance(e, Pow) and e.exp.is_negative:
        if not rules.get("skip_den"):
            out.append((e.base, "!="))
    elif isinstance(e, Sqrt):
        out.append((e.args[0], ">" if rules.get("root_strict") else ">="))
    elif isinstance(e, Cbrt):
        if rules.get("odd_root_even"):
            out.append((e.args[0], ">="))
    elif isinstance(e, Log):
        out.append((e.args[0], ">=" if rules.get("log_zero") else ">"))
    elif isinstance(e, Logb):
        u, b = e.args
        out.append((u, ">=" if rules.get("log_zero") else ">"))
        out.append((b, ">"))
        if not rules.get("skip_base_one"):
            out.append((b - 1, "!="))
    for a in e.args:
        out += _conditions(a, rules)
    return out


def _flip_lead(g):
    """M4: the student reads a negative leading x-coefficient as positive (5 - x > 0 as x - 5 > 0)."""
    n, d = fraction(together(g))
    try:
        pn, pd = Poly(n, x), Poly(d, x)
    except PolynomialError:
        return g
    sign = lambda q: -1 if q.degree() > 0 and q.LC() < 0 else 1
    return (sign(pn) * n) / (sign(pd) * d)


def _drop_minus_root(g):
    """M6: k - a x^2 >= 0 read as x <= sqrt(k/a), the negative side forgotten."""
    try:
        q = Poly(g, x)
    except PolynomialError:
        return g
    if q.degree() == 2 and q.coeff_monomial(x) == 0 and q.LC() < 0 and q.coeff_monomial(1) > 0:
        return sqrt(q.coeff_monomial(1) / -q.LC()) - x
    return g


def _domain(p, rules=None, transform=None):
    rules = rules or {}
    e = _parse(p)
    if rules.get("skip_den"):  # M3: every 1/b read as b, so b = 0 is never excluded (u/v >= 0 solved as uv >= 0)
        e = e.replace(lambda a: isinstance(a, Pow) and a.exp.is_negative, lambda a: Pow(a.base, -a.exp, evaluate=False))
    conds = _conditions(e, rules)
    if transform:
        new = [(transform(g) if rel != "!=" else g, rel) for g, rel in conds]
        if all((_real(a) - _real(b)).simplify() == 0 for (a, _), (b, _) in zip(conds, new)):
            raise ValueError("no condition this mistake changes")
        conds = new
    dom = S.Reals
    for g, rel in conds:
        g = _real(g)
        if rel == "!=":
            dom = dom - solveset(Eq(g, 0), x, S.Reals)
        else:
            dom = dom.intersect(solveset(g >= 0 if rel == ">=" else g > 0, x, S.Reals))
    return dom


def _needs(p, *names):
    if not any(n in p["f"] for n in names):
        raise ValueError(f"no {' or '.join(names)} in this function")


def key(v, p):
    return _domain(p)


def m1(v, p):  # strictness swapped: radicand > 0 (thinks sqrt(0) undefined), log argument >= 0
    _needs(p, "Sqrt", "Log")
    return _domain(p, {"root_strict": True, "log_zero": True})


def m2(v, p):  # a cube root treated like a square root: radicand >= 0
    _needs(p, "Cbrt")
    return _domain(p, {"odd_root_even": True})


def m3(v, p):  # the zero-denominator check skipped
    _needs(p, "/")
    return _domain(p, {"skip_den": True})


def m4(v, p):  # a negative leading coefficient read as positive
    return _domain(p, transform=_flip_lead)


def m5(v, p):  # log base: b > 0 kept, b != 1 forgotten
    _needs(p, "Logb")
    return _domain(p, {"skip_base_one": True})


def m6(v, p):  # x^2 <= k read as x <= sqrt(k)
    return _domain(p, transform=_drop_minus_root)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
