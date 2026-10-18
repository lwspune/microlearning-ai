"""C01 Integration as the reverse of differentiation: answer models (the key, and one per misconception).

Inputs, two styles:
- Integral: f, the integrand (a sum of standard terms: k x^n, k a^x, k e^x, k sin x, k cos x,
  k sec^2 x, k cosec^2 x, k sec x tan x, k cosec x cot x). The answer is an antiderivative + c.
- Find f: fp, the given f'(x); a and fa, the given value f(a) = fa. The answer is f(x).
The key is sympy's integrate (checked by differentiating back); each wrong answer integrates
term by term with one wrong rule. In find-f items every model except M5 then fits c properly.
"""
from sympy import Add, Integer, Pow, Symbol, cos, cot, csc, diff, exp, integrate, log, sec, simplify, sin, tan

C = Symbol("c")


def _x(e):
    for s in e.free_symbols:
        if s.name == "x":
            return s
    return Symbol("x", real=True)


def _split(term, x):
    """A term as (k, kind, n): kind is pow (x^n), exp (n^x), or a trig name."""
    k, rest = term.as_independent(x, as_Add=False)
    if rest == 1:
        return k, "pow", Integer(0)
    if rest == x:
        return k, "pow", Integer(1)
    if isinstance(rest, Pow) and rest.base == x and not rest.exp.has(x):
        return k, "pow", rest.exp
    if isinstance(rest, exp) and rest.args[0] == x:
        return k, "exp", exp(1)
    if isinstance(rest, Pow) and rest.exp == x and not rest.base.has(x):
        return k, "exp", rest.base
    table = {sin(x): "sin", cos(x): "cos", sec(x) ** 2: "sec2", csc(x) ** 2: "csc2",
             sec(x) * tan(x): "sectan", csc(x) * cot(x): "csccot"}
    for form, name in table.items():
        if simplify(rest - form) == 0:
            return k, name, None
    raise ValueError(f"not a standard term: {term}")


def _right(kind, n, x):
    """The standard formula for one basic term."""
    if kind == "pow":
        return log(x) if n == -1 else x ** (n + 1) / (n + 1)
    if kind == "exp":
        return n ** x / log(n)
    return {"sin": -cos(x), "cos": sin(x), "sec2": tan(x), "csc2": -cot(x),
            "sectan": sec(x), "csccot": -csc(x)}[kind]


def _termwise(f, x, rule):
    """Integrate f term by term, using rule(kind, n, x) (None = the right formula)."""
    total, used = Integer(0), False
    for term in Add.make_args(f.expand()):
        k, kind, n = _split(term, x)
        r = rule(kind, n, x)
        if r is None:
            r = _right(kind, n, x)
        else:
            used = True
        total += k * r
    if not used:
        raise ValueError("rule doesn't apply to any term")
    return total


def _answer(v, F, x, fit=True):
    """Integral items: F + c. Find-f items: F plus the constant that makes f(a) = fa."""
    if "f" in v:
        return F + C
    if not fit:
        return F + v["fa"]
    return F + v["fa"] - F.subs(x, v["a"])


def _integrand(v):
    f = v["f"] if "f" in v else v["fp"]
    return f, _x(f)


def key(v, p):
    f, x = _integrand(v)
    F = integrate(f, x)
    assert simplify(diff(F, x) - f) == 0
    return _answer(v, F, x)


def m1(v, p):
    """Differentiates instead of integrating."""
    f, x = _integrand(v)
    return _answer(v, diff(f, x), x)


def m2(v, p):
    """Steps a negative power the wrong way: x^n -> x^(n-1)/(n-1) for n < 0."""
    f, x = _integrand(v)
    rule = lambda kind, n, x: x ** (n - 1) / (n - 1) if kind == "pow" and n < 0 and n != -1 else None
    return _answer(v, _termwise(f, x, rule), x)


def m3(v, p):
    """Uses the power rule on a^x: a^(x+1)/(x+1)."""
    f, x = _integrand(v)
    rule = lambda kind, n, x: n ** (x + 1) / (x + 1) if kind == "exp" else None
    return _answer(v, _termwise(f, x, rule), x)


def m4(v, p):
    """Drops the minus sign: sin x -> cos x, cosec^2 x -> cot x, cosec x cot x -> cosec x."""
    f, x = _integrand(v)
    rule = lambda kind, n, x: -_right(kind, n, x) if kind in ("sin", "csc2", "csccot") else None
    return _answer(v, _termwise(f, x, rule), x)


def m5(v, p):
    """Takes the given value f(a) as c, without subtracting F(a)."""
    if "f" in v:
        raise ValueError("find-f items only")
    f, x = _integrand(v)
    F = integrate(f, x)
    if simplify(F.subs(x, v["a"])) == 0:
        raise ValueError("F(a) = 0: same as the key")
    return _answer(v, F, x, fit=False)


def m6(v, p):
    """Raises the power but doesn't divide by the new power: x^n -> x^(n+1)."""
    f, x = _integrand(v)
    rule = lambda kind, n, x: x ** (n + 1) if kind == "pow" and n not in (-1, 0) else None
    return _answer(v, _termwise(f, x, rule), x)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
