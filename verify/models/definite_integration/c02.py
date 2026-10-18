"""C02 The fundamental theorem of integral calculus: answer models (the key, and one per misconception).

Inputs:
- f: the integrand as the question prints it; a, b: the lower and upper limits.
- r: f rewritten as a sum of standard terms (defaults to f); it must equal f on [a, b].
- F1, F2: the antiderivative a student writes, split as F = F1 + F2 (F2 = the terms after the first;
  "0" when F has one term). Every model checks that F' = r.
The key is sympy's definite integrate of r, cross-checked numerically against the integral of f.
"""
from sympy import Add, Integer, Integral, N, Symbol, cos, cot, csc, diff, exp, integrate, sec, simplify, sin, tan

_FUNCS = (sin, cos, tan, cot, sec, csc, exp)


def _x(v):
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _parts(v):
    x = _x(v)
    f = v["f"]
    r = v.get("r", f)
    F1, F2 = v["F1"], v.get("F2", Integer(0))
    assert simplify(diff(F1 + F2, x) - r) == 0, "F1 + F2 is not an antiderivative of r"
    return x, f, r, F1, F2, v["a"], v["b"]


def _at(F, x, t):
    return simplify(F.subs(x, t))


def key(v, p):
    x, f, r, F1, F2, a, b = _parts(v)
    val = simplify(integrate(r, (x, a, b)))
    num = Integral(f, (x, a, b)).evalf(30)
    assert abs(N(val, 30) - num) < 1e-12, f"key {val} disagrees with the numeric integral {num}"
    return val


def m1(v, p):
    """Subtracts the wrong way round: F(a) - F(b)."""
    x, f, r, F1, F2, a, b = _parts(v)
    F = F1 + F2
    return simplify(_at(F, x, a) - _at(F, x, b))


def m2(v, p):
    """Puts the limits into the integrand instead of an antiderivative: f(b) - f(a)."""
    x, f, r, F1, F2, a, b = _parts(v)
    return simplify(_at(f, x, b) - _at(f, x, a))


def m3(v, p):
    """Takes the value at the lower limit as 0 and keeps only F(b)."""
    x, f, r, F1, F2, a, b = _parts(v)
    F = F1 + F2
    if _at(F, x, a) == 0:
        raise ValueError("F(a) = 0: same as the key")
    return _at(F, x, b)


def m4(v, p):
    """Subtracts only the first term of F(a): F(b) - F1(a) + F2(a)."""
    x, f, r, F1, F2, a, b = _parts(v)
    if _at(F2, x, a) == 0:
        raise ValueError("F2(a) = 0: same as the key")
    return simplify(_at(F1 + F2, x, b) - _at(F1, x, a) + _at(F2, x, a))


def _inner_coeff(term, x):
    """The a in a term g(ax) (sin, cos, exp, ... of a linear argument), or 1 for powers of x."""
    coeffs = set()
    for fn in term.atoms(*_FUNCS):
        arg = fn.args[0]
        if arg.has(x):
            coeffs.add(simplify(diff(arg, x)))
    if len(coeffs) > 1:
        raise ValueError(f"mixed arguments in {term}")
    return coeffs.pop() if coeffs else Integer(1)


def m5(v, p):
    """Drops the 1/a when integrating g(ax): integral of cos 7x taken as sin 7x."""
    x, f, r, F1, F2, a, b = _parts(v)
    total, used = Integer(0), False
    for term in Add.make_args(r.expand()):
        k = _inner_coeff(term, x)
        if k != 1:
            used = True
        total += k * integrate(term, x)
    if not used:
        raise ValueError("no term in ax with a not 1")
    return simplify(_at(total, x, b) - _at(total, x, a))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
