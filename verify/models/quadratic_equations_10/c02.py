"""C02 Roots of a quadratic equation: answer models (the key, and one per misconception).

Inputs (sympy): E = the left side of "E = 0", a quadratic in the variable named params["var"]
(x or m), its coefficients numbers or one unknown k; r = the value put in for the variable.
params["ask"]: value (E at r, default) | k (the k that makes r a root, i.e. E(r) = 0).
"""
from sympy import Poly, Symbol, expand, solve


def _var(v, p):
    for s in v["E"].free_symbols:
        if s.name == p["var"]:
            return s
    raise ValueError(f"no variable {p['var']} in E")


def _coeffs(v, p):
    """a, b, c of E = a v^2 + b v + c (they may contain k)."""
    x = _var(v, p)
    P = Poly(expand(v["E"]), x)
    if P.degree() != 2:
        raise ValueError("E is not quadratic in the variable")
    return [P.coeff_monomial(x**n) for n in (2, 1, 0)]


def _k(e):
    for s in e.free_symbols:
        if s.name == "k":
            return s
    raise ValueError("no unknown k")


def _answer(v, p, val):
    """The value of E at r, or, for a find-k item, the k that makes that value 0."""
    if p.get("ask", "value") == "value":
        return expand(val)
    k = _k(val)
    roots = solve(expand(val), k)
    if len(roots) != 1:
        raise ValueError(f"not one value of k: {roots}")
    return roots[0]


def _linear(v, p):
    """The substituted equation as A k + B = 0 (find-k items only)."""
    if p.get("ask") != "k":
        raise ValueError("only for find-k items")
    val = expand(v["E"].subs(_var(v, p), v["r"]))
    k = _k(val)
    A, B = val.coeff(k, 1), val.coeff(k, 0)
    if A == 0 or expand(val - A * k - B) != 0:
        raise ValueError("not linear in k")
    return A, B


def key(v, p):
    """From the definition: a root makes the equation true, so E(r) = 0."""
    return _answer(v, p, v["E"].subs(_var(v, p), v["r"]))


def m1(v, p):
    """Squares a negative value to a negative: (-2)^2 = -4."""
    a, b, c = _coeffs(v, p)
    r = v["r"]
    if not r < 0:
        raise ValueError("needs a negative value")
    return _answer(v, p, a * (-(r**2)) + b * r + c)


def m2(v, p):
    """Takes the square as doubling: 3^2 = 6."""
    a, b, c = _coeffs(v, p)
    r = v["r"]
    if r**2 == 2 * r:
        raise ValueError("r^2 = 2r here")
    return _answer(v, p, a * (2 * r) + b * r + c)


def m3(v, p):
    """Moves the number across without changing its sign: 9k - 18 = 0 gives 9k = -18."""
    A, B = _linear(v, p)
    return B / A


def m4(v, p):
    """Puts in the opposite of the value: root 3 read as x = -3 (from the factor x - 3)."""
    return _answer(v, p, v["E"].subs(_var(v, p), -v["r"]))


def m5(v, p):
    """Divides the wrong way round: 9k = 18 gives k = 9/18."""
    A, B = _linear(v, p)
    if B == 0:
        raise ValueError("B = 0")
    return A / (-B)


def m6(v, p):
    """Squares the coefficient too: a x^2 read as (a x)^2."""
    a, b, c = _coeffs(v, p)
    if not a.is_number or a in (1, -1):
        raise ValueError("needs a numeric coefficient of x^2 other than 1 or -1")
    return _answer(v, p, (a * v["r"]) ** 2 + b * v["r"] + c)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
