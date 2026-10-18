"""C03 Cancelling the common factor: answer models (the key, and one per misconception).

The item's function is params["f"], a string in x (sympy syntax); the point is inputs["a"].
params["form"] says what substituting x = a gives: "0/0" (one fraction) or "inf-inf"
(a sum of fractions that each blow up). A limit that does not exist is Symbol("dne").
"""
from sympy import Add, Poly, PolynomialError, S, Symbol, limit, real_root
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)
DNE = Symbol("dne")


def _parse(p, evaluate=True):
    return parse_expr(p["f"], local_dict={"x": x}, evaluate=evaluate)


def _limit(f, a):
    """The two-sided limit, from the definition (both one-sided limits, equal and finite)."""
    left, right = limit(f, x, a, "-"), limit(f, x, a, "+")
    if left == right and left.is_finite:
        return left
    return DNE


def key(v, p):
    return _limit(_parse(p), v["a"])


def m1(v, p):
    """M1: 0/0 read as 1, as if a number over itself."""
    if p.get("form") != "0/0":
        raise ValueError("needs a 0/0 fraction")
    return S.One


def m2(v, p):
    """M2: 0/0 read as 0, because the numerator is 0."""
    if p.get("form") != "0/0":
        raise ValueError("needs a 0/0 fraction")
    return S.Zero


def m3(v, p):
    """M3: a sign lost after cancelling: a negative factor, such as (a - x) or (1 - 2), taken as positive."""
    k = key(v, p)
    if k == DNE or k == 0:
        raise ValueError("no sign to lose")
    return -k


def m4(v, p):
    """M4: f(a) is undefined, so the limit is taken not to exist."""
    if key(v, p) == DNE:
        raise ValueError("the limit really does not exist")
    return DNE


def m5(v, p):
    """M5: infinity minus infinity read as 0 (each term's limit taken separately)."""
    if p.get("form") != "inf-inf":
        raise ValueError("needs a sum of terms that each blow up")
    return S.Zero


def _wrong_cubes(e):
    """Every binomial cubic k(x^3 - r^3) rewritten with the middle sign flipped: k(x - r)(x^2 - rx + r^2)."""
    hit = []

    def swap(a):
        try:
            q = Poly(a, x)
        except PolynomialError:
            return a
        if q.degree() != 3 or any(q.coeff_monomial(x**n) != 0 for n in (1, 2)) or q.coeff_monomial(1) == 0:
            return a
        k = q.LC()
        r = real_root(-q.coeff_monomial(1) / k, 3)
        hit.append(r)
        return k * (x - r) * (x**2 - r * x + r**2)

    out = e.replace(lambda a: isinstance(a, Add), swap)
    return out, hit


def m6(v, p):
    """M6: a^3 - b^3 factorised as (a - b)(a^2 - ab + b^2), the middle sign flipped."""
    e, hit = _wrong_cubes(_parse(p))
    if not hit:
        raise ValueError("no sum or difference of cubes")
    out = _limit(e, v["a"])
    if out == DNE:
        raise ValueError("the slip leaves no limit")
    return out


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
