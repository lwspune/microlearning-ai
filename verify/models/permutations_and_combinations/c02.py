"""C02 Factorial notation: answer models (the key, and one per misconception).

params["form"]:
  quot      a!/b!.                          Inputs a, b (a >= b >= 0).
  diffquot  (a! - b!)/b!.                   Inputs a, b.
  lcm       n from n/c! = p/a! + q/b!.      Inputs c, a, b, p, q (c >= a, b).
  quot0     a!/(b! 0!).                     Inputs a, b.
  mul0      a! 0!/b!.                       Inputs a, b.
  binom     n!/(r!(n - r)!).                Inputs n, r (r = n - r, so the order of cancelling can't matter).
"""
from sympy import Integer, Symbol

NOT_DEFINED = Symbol("not_defined")


def _fact(n):
    """n! straight from the definition: 1 x 2 x ... x n, and the empty product 1 for 0!."""
    n = int(n)
    if n < 0:
        raise ValueError("no factorial of a negative number")
    out = Integer(1)
    for k in range(1, n + 1):
        out *= k
    return out


def _down(a, b):
    """a (a - 1) ... b, the factors from a down to b inclusive (empty, so 1, when b > a)."""
    out = Integer(1)
    for k in range(int(b), int(a) + 1):
        out *= k
    return out


# a!/b! under each belief.
def _r_key(a, b):
    return _fact(a) / _fact(b)


def _r_m1(a, b):
    """The ! passes through the division: a!/b! = (a/b)!."""
    q = a / b
    if not (q.is_integer and q >= 0):
        raise ValueError(f"{a}/{b} is not a whole number")
    return _fact(q)


def _r_m3(a, b):
    """Cancels down to and including b: a (a - 1) ... b, one factor too many."""
    return _down(a, b)


def _r_m4(a, b):
    """Like index laws: a!/b! = (a - b)!."""
    return _fact(a - b)


def _evaluate(v, p, ratio, zero=Integer(1), diff=None):
    """The item's expression, with a!/b! cancelled by `ratio`, 0! taken as `zero`, and
    a! - b! rewritten by `diff` when the belief has its own rule for it."""
    form = p["form"]
    if form == "quot":
        return ratio(v["a"], v["b"])
    if form == "diffquot":
        if diff:
            return diff(v["a"], v["b"]) / _fact(v["b"])
        return ratio(v["a"], v["b"]) - 1  # a!/b! - b!/b!
    if form == "lcm":
        return v["p"] * ratio(v["c"], v["a"]) + v["q"] * ratio(v["c"], v["b"])
    if form == "quot0":
        if zero == 0:
            return NOT_DEFINED
        return ratio(v["a"], v["b"]) / zero
    if form == "mul0":
        return ratio(v["a"], v["b"]) * zero
    if form == "binom":
        return ratio(v["n"], v["r"]) / _fact(v["n"] - v["r"])
    raise ValueError(f"no form {form}")


def key(v, p):
    """Every factorial written out as a product, then the arithmetic done on those numbers."""
    form = p["form"]
    f = _fact
    if form == "quot":
        return f(v["a"]) / f(v["b"])
    if form == "diffquot":
        return (f(v["a"]) - f(v["b"])) / f(v["b"])
    if form == "lcm":
        return f(v["c"]) * (v["p"] / f(v["a"]) + v["q"] / f(v["b"]))
    if form == "quot0":
        return f(v["a"]) / (f(v["b"]) * f(0))
    if form == "mul0":
        return f(v["a"]) * f(0) / f(v["b"])
    if form == "binom":
        return f(v["n"]) / (f(v["r"]) * f(v["n"] - v["r"]))
    raise ValueError(f"no form {form}")


def m1(v, p):
    """The ! passes through arithmetic: a!/b! = (a/b)!, a! - b! = (a - b)!."""
    return _evaluate(v, p, _r_m1, diff=lambda a, b: _fact(a - b))


def m2(v, p):
    """0! = 0: a product with 0! in it is 0, and dividing by 0! is dividing by zero."""
    if p["form"] not in ("quot0", "mul0"):
        raise ValueError("no 0! in the expression")
    return _evaluate(v, p, _r_key, zero=Integer(0))


def m3(v, p):
    """a!/b! = a (a - 1) ... b: keeps the factor b, which b! cancels."""
    return _evaluate(v, p, _r_m3)


def m4(v, p):
    """Factorials divided like powers: a!/b! = (a - b)!."""
    return _evaluate(v, p, _r_m4)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
