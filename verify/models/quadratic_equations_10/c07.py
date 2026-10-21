"""C07 Sum and product of the roots: answer models (the key, and one per misconception).

Inputs (sympy): E = the left side of "E = 0", a quadratic in the variable named params["var"],
its coefficients numbers or expressions in one unknown k; d = the given difference of the roots
(ask "diff" only).
params["ask"]:
  sum     -> alpha + beta
  product -> alpha * beta
  double  -> the k for which the sum of the roots is double their product
  diff    -> the k for which the difference of the roots is d
"""
from sympy import Poly, expand, simplify, solve, sqrt


def _var(v, p):
    for s in v["E"].free_symbols:
        if s.name == p["var"]:
            return s
    raise ValueError(f"no variable {p['var']} in E")


def _coeffs(v, p):
    """a, b, c of E = a x^2 + b x + c (they may contain k)."""
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


def _one(sols):
    sols = list(dict.fromkeys(simplify(s) for s in sols))
    if len(sols) != 1:
        raise ValueError(f"not one value of k: {sols}")
    return sols[0]


def _answer(v, p, S, P, double=None, halve=True):
    """Answer the item's question from a student's sum S and product P of the roots.

    double: how the student writes 2 * P (default: correctly).
    halve: False when the student adds alpha + beta = S and alpha - beta = d and forgets to halve.
    """
    ask = p["ask"]
    if ask == "sum":
        return simplify(S)
    if ask == "product":
        return simplify(P)
    if ask == "double":
        twoP = double(P) if double else 2 * P
        e = expand(S - twoP)
        return _one(solve(e, _k(e)))
    if ask == "diff":
        if S.free_symbols:
            raise ValueError("the sum must be a number for a difference item")
        alpha = (S + v["d"]) / 2 if halve else S + v["d"]
        beta = S - alpha
        e = expand(alpha * beta - P)
        return _one(solve(e, _k(e)))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """From the definition: find the two roots themselves, then add, multiply or compare them."""
    a, b, c = _coeffs(v, p)
    r1 = (-b + sqrt(b**2 - 4 * a * c)) / (2 * a)
    r2 = (-b - sqrt(b**2 - 4 * a * c)) / (2 * a)
    if p["ask"] == "diff":
        e = expand((r1 - r2) ** 2 - v["d"] ** 2)
        return _one(solve(e, _k(e)))
    return _answer(v, p, simplify(r1 + r2), simplify(expand(r1 * r2)))


def m1(v, p):
    """Drops the minus sign of the sum: alpha + beta = b/a."""
    if p["ask"] == "product":
        raise ValueError("the product is unchanged")
    a, b, c = _coeffs(v, p)
    return _answer(v, p, b / a, c / a)


def m2(v, p):
    """Swaps the two results: alpha + beta = c/a and alpha * beta = -b/a."""
    a, b, c = _coeffs(v, p)
    return _answer(v, p, c / a, -b / a)


def m3(v, p):
    """Forgets to divide by a: alpha + beta = -b and alpha * beta = c."""
    a, b, c = _coeffs(v, p)
    if a == 1:
        raise ValueError("a = 1 here")
    return _answer(v, p, -b, c)


def m4(v, p):
    """Puts a minus sign on the product too: alpha * beta = -c/a."""
    if p["ask"] == "sum":
        raise ValueError("the sum is unchanged")
    a, b, c = _coeffs(v, p)
    return _answer(v, p, -b / a, -c / a)


def m5(v, p):
    """Adds alpha + beta = S and alpha - beta = d to get 2 alpha, then forgets to halve it."""
    if p["ask"] != "diff":
        raise ValueError("only for difference items")
    a, b, c = _coeffs(v, p)
    return _answer(v, p, -b / a, c / a, halve=False)


def m6(v, p):
    """Doubles only the first term of the product: 2(k + 3) written as 2k + 3."""
    if p["ask"] != "double":
        raise ValueError("only for 'sum is double the product' items")
    a, b, c = _coeffs(v, p)

    def first_only(P):
        P = expand(P)
        k = _k(P)
        A, B = P.coeff(k, 1), P.coeff(k, 0)
        if B == 0 or expand(P - A * k - B) != 0:
            raise ValueError("product is not a k-term plus a number")
        return 2 * A * k + B

    return _answer(v, p, -b / a, c / a, double=first_only)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
