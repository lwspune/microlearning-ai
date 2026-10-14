"""C08 Eliminating θ: answer models (the key, and one per misconception).

An item gives  cx*x = hx + ax*fx(θ)^n  and  cy*y = hy + ay*fy(θ)^n,
inputs cx, hx, ax, cy, hy, ay, n (sympy), params fx, fy (cos, sin, sec, tan, cosec, cot).
Every answer is written as "(expression in x, y) = 1"; a model returns that left side.
"""
from sympy import Integer, Rational, Symbol

x, y = Symbol("x", real=True), Symbol("y", real=True)  # the verifier reads option values with real x, y

# For each pair, the identity  first² ± second² = 1  (the function written first comes first).
PAIRS = {
    frozenset({"cos", "sin"}): ("cos", +1),
    frozenset({"sec", "tan"}): ("sec", -1),
    frozenset({"cosec", "cot"}): ("cosec", -1),
}


def _parts(v, p):
    pair = frozenset({p["fx"], p["fy"]})
    if pair not in PAIRS:
        raise ValueError(f"no identity links {p['fx']} and {p['fy']}")
    first, sign = PAIRS[pair]
    n = v.get("n", Integer(1))
    return first, sign, n


def _combine(sq, p, first, sign):
    """sq: {name: the expression for name(θ)²}; returns first² + sign * second²."""
    second = p["fy"] if p["fx"] == first else p["fx"]
    return sq[first] + sign * sq[second]


def _solve(v, p, how):
    """The expression for each function's square, solving each equation for fx(θ)^n the way `how` says."""
    first, sign, n = _parts(v, p)
    sq = {}
    for var, f, c, h, a in ((x, p["fx"], v["cx"], v["hx"], v["ax"]), (y, p["fy"], v["cy"], v["hy"], v["ay"])):
        sq[f] = how(var, c, h, a, n)
    return first, sign, sq


def key(v, p):
    # f^n = (c*var - h)/a, so f² = ((c*var - h)/a)^(2/n); then the Pythagorean identity of the pair.
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: ((c * var - h) / a) ** (Rational(2) / n))
    return _combine(sq, p, first, sign)


def m1(v, p):
    """Adds the squares for every pair, as if sec²θ + tan²θ = 1."""
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: ((c * var - h) / a) ** (Rational(2) / n))
    if sign == 1:
        raise ValueError("sin/cos pair: adding is right")
    return _combine(sq, p, first, +1)


def m2(v, p):
    """Subtracts the wrong way round: tan²θ − sec²θ = 1 (cot²θ − cosec²θ = 1)."""
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: ((c * var - h) / a) ** (Rational(2) / n))
    if sign == 1:
        raise ValueError("sin/cos pair: no subtraction to reverse")
    return -_combine(sq, p, first, sign)


def m3(v, p):
    """Raises the numerator to the power but not the coefficient: (x/a)² taken as x²/a."""
    def how(var, c, h, a, n):
        if a < 0:
            raise ValueError("negative coefficient")
        return (c * var - h) ** (Rational(2) / n) / a
    first, sign, sq = _solve(v, p, how)
    return _combine(sq, p, first, sign)


def m4(v, p):
    """Moves the constant term across with the wrong sign: x = h + a f gives f = (x + h)/a."""
    if v["hx"] == 0 and v["hy"] == 0:
        raise ValueError("no constant term to move")
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: ((c * var + h) / a) ** (Rational(2) / n))
    return _combine(sq, p, first, sign)


def m5(v, p):
    """Treats cos³θ = x/a like cos θ = x/a: squares x/a, as if cos⁶θ + sin⁶θ = 1."""
    first, sign, n = _parts(v, p)
    if n == 1:
        raise ValueError("no cube to ignore")
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: ((c * var - h) / a) ** 2)
    return _combine(sq, p, first, sign)


def m6(v, p):
    """Multiplies by the coefficient instead of dividing: x = a cos θ gives cos θ = a x."""
    first, sign, sq = _solve(v, p, lambda var, c, h, a, n: (a * (c * var - h)) ** (Rational(2) / n))
    return _combine(sq, p, first, sign)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
