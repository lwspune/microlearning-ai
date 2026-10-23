"""C09 Factor theorem: answer models (the key, and one per misconception).

inputs["p"] is a polynomial in x (it may hold one unknown coefficient m) and inputs["d"]
the divisor x - a. params["ask"] says what the item asks for:
  "test": is d a factor of p? The answer is Tuple(a used, p(a)); the option text adds the verdict.
  "coef": the value of m for which d is a factor of p.
"""
from sympy import Poly, Symbol, Tuple, expand, rem, solve


def _syms(v):
    """x and the unknown m as the inputs were parsed (real or plain, found by name)."""
    found = {s.name: s for e in v.values() for s in e.free_symbols}
    return found.get("x", Symbol("x", real=True)), found.get("m")


def _terms(p, x):
    """(power, coefficient) of each term of p as a polynomial in x."""
    return [(n, c) for (n,), c in Poly(expand(p), x).terms()]


def _value(p, x, a, power):
    """p(a), with power(a, n) standing for a^n and coefficients multiplied in as usual."""
    return expand(sum(c * power(a, n) for n, c in _terms(p, x)))


def _answer(val, a, p, m):
    if p["ask"] == "test":
        if m is not None:
            raise ValueError("a test item has no unknown")
        return Tuple(a, val)
    if p["ask"] == "coef":
        sol = solve(val, m)
        if len(sol) != 1:
            raise ValueError("no single m")
        return sol[0]
    raise ValueError(p["ask"])


def _a(v, x):
    """The a of the divisor x - a."""
    d = expand(v["d"])
    if Poly(d, x).degree() != 1 or Poly(d, x).LC() != 1:
        raise ValueError("divisor must be x - a")
    return -d.subs(x, 0)


def key(v, p):
    """From the definition: x - a is a factor when the division leaves remainder 0."""
    x, m = _syms(v)
    a = _a(v, x)
    r = expand(rem(expand(v["p"]), expand(v["d"]), x))
    return _answer(r, a, p, m)


def m1(v, p):
    """Takes a as the number written in the divisor, sign and all: x + 3 tested with x = 3."""
    x, m = _syms(v)
    a = -_a(v, x)
    return _answer(_value(v["p"], x, a, lambda b, n: b**n), a, p, m)


def m2(v, p):
    """Believes a negative number to an even power is negative: (-3)^2 = -9."""
    x, m = _syms(v)
    a = _a(v, x)
    if not (a < 0 and any(n >= 2 and n % 2 == 0 for n, _ in _terms(v["p"], x))):
        raise ValueError("needs a negative a and an even power")
    return _answer(_value(v["p"], x, a, lambda b, n: -abs(b) ** n if n % 2 == 0 and n else b**n), a, p, m)


def m3(v, p):
    """Multiplies the base by the index: 2^3 = 6, (-3)^2 = -6."""
    x, m = _syms(v)
    a = _a(v, x)
    if not any(n >= 2 for n, _ in _terms(v["p"], x)):
        raise ValueError("needs a power of 2 or more")
    return _answer(_value(v["p"], x, a, lambda b, n: n * b if n >= 2 else b**n), a, p, m)


def m4(v, p):
    """Solving A + Bm = 0, moves A across without changing its sign: m = A/B."""
    x, m = _syms(v)
    if p["ask"] != "coef":
        raise ValueError("needs an unknown to solve for")
    a = _a(v, x)
    val = _value(v["p"], x, a, lambda b, n: b**n)
    B = val.coeff(m, 1)
    A = expand(val - B * m)
    if A == 0:
        raise ValueError("no constant to move")
    return A / B


def m5(v, p):
    """Multiplies a coefficient into the base before the power: 2x^3 at x = 3 as (2 x 3)^3 = 216."""
    x, m = _syms(v)
    a = _a(v, x)
    terms = _terms(v["p"], x)
    if any(n >= 2 and c.free_symbols for n, c in terms):
        raise ValueError("an unknown coefficient on a power")
    if not any(n >= 2 and abs(c) != 1 for n, c in terms):
        raise ValueError("needs a coefficient other than 1 on a power")
    val = expand(sum(((1 if c > 0 else -1) * (abs(c) * a) ** n if n >= 2 else c * a**n) for n, c in terms))
    return _answer(val, a, p, m)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
