"""C05 Loci from distances: answer models (the key, and one per misconception).

params["ask"] picks the question type (inputs A, B: points as Tuples):
  equi    PA = PB                         -> the equation of the set
  sumsq   PA^2 + PB^2 = c (input c)       -> the equation of the set
  sumdist PA + PB = s (input s, s > AB)   -> the equation of the set
An equation is the polynomial E with E = 0, made unique: rational content removed and the first
non-zero coefficient (in the order x^2, y^2, z^2, x, y, z) positive. x and y are real symbols and
z a plain one, as the verifier parses them.

The key comes from the definition, P(x, y, z) with the distance formula: PA = PB is PA^2 - PB^2 = 0;
PA^2 + PB^2 = c directly; PA + PB = s is the product of (s +- PA +- PB) over all four signs, which
is s^4 + (PA^2 - PB^2)^2 - 2s^2(PA^2 + PB^2) = 0 and has no square roots left.
The models instead follow the book's steps (expand, isolate a root, square), each with its own slip.
"""
from sympy import Poly, Symbol, expand

_x, _y = Symbol("x", real=True), Symbol("y", real=True)
_z = Symbol("z")
_P = (_x, _y, _z)
_ORDER = [_x**2, _y**2, _z**2, _x, _y, _z]


def _norm(e):
    e = expand(e)
    if not (e.free_symbols & set(_P)):
        raise ValueError("no x, y or z left: not the equation of a set")
    _, e = e.as_content_primitive()
    e = expand(e)
    p = Poly(e, *_P)
    for m in _ORDER:
        c = p.coeff_monomial(m)
        if c != 0:
            return expand(-e) if c.could_extract_minus_sign() else e
    return e


def _d2(A):
    """PA^2 by the distance formula."""
    return sum((s - a) ** 2 for s, a in zip(_P, A))


def key(v, p):
    A, B, ask = v["A"], v["B"], p["ask"]
    u, w = expand(_d2(A)), expand(_d2(B))
    if ask == "equi":
        return _norm(u - w)
    if ask == "sumsq":
        return _norm(u + w - v["c"])
    if ask == "sumdist":
        s = v["s"]
        if s**2 <= sum((a - b) ** 2 for a, b in zip(A, B)):
            raise ValueError("s must exceed AB")
        return _norm(s**4 + (u - w) ** 2 - 2 * s**2 * (u + w))
    raise ValueError(ask)


def _steps(v, p, E, one_side=False):
    """The book's steps with PA^2 expanded as E(A)."""
    A, B, ask = v["A"], v["B"], p["ask"]
    u, w = expand(E(A)), expand(E(B))
    if ask == "equi":
        return _norm(u - w)
    if ask == "sumsq":
        return _norm(u + w - v["c"])
    if ask == "sumdist":
        s = v["s"]
        R = expand((s**2 + w - u) / (2 * s))  # PB = R after PA = s - PB is squared and tidied
        return _norm(R - w if one_side else R**2 - w)
    raise ValueError(ask)


def m1(v, p):
    """Squares a sum term by term: (x - a)^2 = x^2 + a^2, and (PA + PB)^2 = PA^2 + PB^2."""
    ask = p["ask"]
    if ask == "sumdist":
        return _norm(_d2(v["A"]) + _d2(v["B"]) - v["s"] ** 2)
    if ask == "sumsq":
        return _steps(v, p, lambda A: sum(s**2 + a**2 for s, a in zip(_P, A)))
    raise ValueError("PA = PB loses x, y and z under this rule")


def m2(v, p):
    """Sign slip: expands (x - a)^2 as x^2 + 2ax + a^2."""
    return _steps(v, p, lambda A: sum((s + a) ** 2 for s, a in zip(_P, A)))


def m3(v, p):
    """Forgets the constant terms: (x - a)^2 as x^2 - 2ax, dropping a^2."""
    return _steps(v, p, lambda A: sum(s**2 - 2 * a * s for s, a in zip(_P, A)))


def m4(v, p):
    """Halves the middle term: (x - a)^2 as x^2 - ax + a^2."""
    if p["ask"] == "sumdist":
        raise ValueError("only where the distance squares are the only expansions")
    return _steps(v, p, lambda A: sum(s**2 - a * s + a**2 for s, a in zip(_P, A)))


def m5(v, p):
    """At the second squaring, squares only the root side: PB = L becomes PB^2 = L."""
    if p["ask"] != "sumdist":
        raise ValueError("only for a sum of distances")
    return _steps(v, p, _d2, one_side=True)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
