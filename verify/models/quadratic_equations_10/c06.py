"""C06 Nature of roots: answer models (the key, and one per misconception).

Inputs (sympy): a, b, c = the coefficients of a x^2 + b x + c = 0 (numbers, or expressions in one
unknown such as k or m). params["ask"]:
  delta  -> the value of the discriminant
  nature -> Tuple(discriminant, real_unequal | real_equal | not_real)
  k      -> FiniteSet of the values of the unknown that give real and equal roots
"""
from sympy import FiniteSet, Poly, Symbol, Tuple, discriminant, expand, im, solve, sqrt, sympify

X = Symbol("X")
UNEQUAL, EQUAL, NOT_REAL = Symbol("real_unequal"), Symbol("real_equal"), Symbol("not_real")


def _abc(v):
    return v["a"], v["b"], v["c"]


def _unknown(v):
    syms = set().union(*(sympify(e).free_symbols for e in _abc(v)))
    if len(syms) != 1:
        raise ValueError("needs exactly one unknown in a, b, c")
    return syms.pop()


def _nature(d):
    """The nature from the sign of a (wrongly or rightly computed) discriminant."""
    return UNEQUAL if d > 0 else EQUAL if d == 0 else NOT_REAL


def _answer(v, p, d):
    """Turn a discriminant rule d(a, b, c) into the asked answer."""
    a, b, c = _abc(v)
    ask = p.get("ask", "delta")
    if ask == "delta":
        return expand(d(a, b, c))
    if ask == "nature":
        val = expand(d(a, b, c))
        return Tuple(val, _nature(val))
    u = _unknown(v)
    sols = solve(expand(d(a, b, c)), u)
    sols = [s for s in sols if im(s) == 0 and expand(a.subs(u, s)) != 0]
    if not sols:
        raise ValueError("no real value of the unknown")
    return FiniteSet(*sols)


def key(v, p):
    """From the definition: solve the equation itself and look at its roots."""
    a, b, c = _abc(v)
    ask = p.get("ask", "delta")
    if ask == "delta":
        return expand(discriminant(Poly(a * X**2 + b * X + c, X)))
    if ask == "nature":
        roots = solve(a * X**2 + b * X + c, X)
        d = expand(discriminant(Poly(a * X**2 + b * X + c, X)))
        if any(im(r) != 0 for r in roots):
            return Tuple(d, NOT_REAL)
        return Tuple(d, EQUAL if len(roots) == 1 else UNEQUAL)
    # k: the values for which the equation is quadratic (a != 0) with exactly one distinct root.
    u = _unknown(v)
    cands = solve(expand(b**2 - 4 * a * c), u) + solve(expand(a), u)
    good = []
    for s in set(cands):
        A, B, C = (expand(e.subs(u, s)) for e in (a, b, c))
        if A == 0 or im(s) != 0:
            continue
        roots = solve(A * X**2 + B * X + C, X)
        if len(roots) == 1:
            good.append(s)
    return FiniteSet(*good)


def m1(v, p):
    """Squares a negative b to a negative number: (-5)^2 = -25."""
    b = v["b"]
    if not sympify(b).could_extract_minus_sign():
        raise ValueError("needs a negative b")
    return _answer(v, p, lambda a, b, c: -(b**2) - 4 * a * c)


def m2(v, p):
    """Gets the sign of the 4ac term wrong: works out b^2 + 4ac."""
    a, b, c = _abc(v)
    if expand(a * c) == 0:
        raise ValueError("ac = 0")
    return _answer(v, p, lambda a, b, c: b**2 + 4 * a * c)


def m3(v, p):
    """Takes the discriminant to be the square root sqrt(b^2 - 4ac) from the formula."""
    if p.get("ask", "delta") == "k":
        raise ValueError("sqrt(D) = 0 gives the same k")
    a, b, c = _abc(v)
    d = expand(b**2 - 4 * a * c)
    if d < 0 or d in (0, 1):
        raise ValueError("sqrt not real, or equal to D")
    return _answer(v, p, lambda a, b, c: sqrt(b**2 - 4 * a * c))


def m4(v, p):
    """Reads a negative discriminant as real and unequal roots (thinks it only makes the roots negative)."""
    if p.get("ask") != "nature":
        raise ValueError("nature items only")
    a, b, c = _abc(v)
    d = expand(b**2 - 4 * a * c)
    if not d < 0:
        raise ValueError("needs D < 0")
    return Tuple(d, UNEQUAL)


def m5(v, p):
    """Keeps the value of k that makes a = 0, so the equation is no longer quadratic."""
    if p.get("ask") != "k":
        raise ValueError("find-k items only")
    a, b, c = _abc(v)
    u = _unknown(v)
    sols = [s for s in solve(expand(b**2 - 4 * a * c), u) if im(s) == 0]
    if all(expand(a.subs(u, s)) != 0 for s in sols):
        raise ValueError("no root makes a = 0")
    return FiniteSet(*sols)


def m6(v, p):
    """Forgets the 4: works out b^2 - ac."""
    a, b, c = _abc(v)
    if expand(a * c) == 0:
        raise ValueError("ac = 0")
    return _answer(v, p, lambda a, b, c: b**2 - a * c)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
