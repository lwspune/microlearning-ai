"""C02 General solution of sin θ = sin α: answer models (the key, and one per misconception).

Every model returns the solution set over the window [0, 4π) as a FiniteSet, so equivalent
forms of a general solution compare equal. Inputs: k (the multiple, sin kθ), s (the value of
the given ratio), a (the α the item writes). Param f: "sin" (sin kθ = s) or "cosec" (cosec kθ = s).
"""
from sympy import EmptySet, FiniteSet, Interval, S, asin, pi, sin, simplify

W = Interval.Ropen(0, 4 * pi)
_NS = range(-60, 61)


def _sine_value(v, p):
    """The value sin kθ must take."""
    return 1 / v["s"] if p.get("f", "sin") == "cosec" else v["s"]


def _solve(k, c):
    """Every θ in W with sin kθ = c, straight from sine's values: in each turn sine takes c at
    asin(c) and at π − asin(c), and nowhere else; none when |c| > 1."""
    if abs(c) > 1:
        return S.EmptySet
    base = asin(c)
    out = set()
    for m in _NS:
        for x in (base + 2 * m * pi, pi - base + 2 * m * pi):
            th = simplify(x / k)
            if th in W:
                out.add(th)
    sols = FiniteSet(*out)
    assert all(simplify(sin(k * t) - c) == 0 for t in sols)
    return sols


def _family(k, rhs):
    """θ in W from kθ = rhs(n), n an integer."""
    return FiniteSet(*[t for t in (simplify(rhs(n) / k) for n in _NS) if t in W])


def key(v, p):
    return _solve(v["k"], _sine_value(v, p))


def m1(v, p):
    """Drops (−1)^n: kθ = nπ + α."""
    return _family(v["k"], lambda n: n * pi + v["a"])


def m2(v, p):
    """Cosine's form: kθ = 2nπ ± α."""
    a = v["a"]
    return _family(v["k"], lambda n: 2 * n * pi + a) | _family(v["k"], lambda n: 2 * n * pi - a)


def m3(v, p):
    """Divides only α by k: θ = nπ + (−1)^n α/k."""
    if v["k"] == 1:
        raise ValueError("needs a multiple angle")
    return _family(1, lambda n: n * pi + (-1) ** n * v["a"] / v["k"])


def m4(v, p):
    """Drops the minus sign: solves sin kθ = |c|."""
    c = _sine_value(v, p)
    if c >= 0:
        raise ValueError("needs a negative value")
    return _solve(v["k"], -c)


def m5(v, p):
    """Only the family kθ = 2nπ + α."""
    return _family(v["k"], lambda n: 2 * n * pi + v["a"])


def m6(v, p):
    """Reads cosec kθ = c as sin kθ = c."""
    if p.get("f") != "cosec":
        raise ValueError("needs a cosec equation")
    return _solve(v["k"], v["s"])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
