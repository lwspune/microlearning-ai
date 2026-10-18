"""C09 Logarithmic limits and e: answer models (the key, and one per misconception).

params["f"] is the question's function of x (sympy syntax) and params["at"] the point x tends to
(default 0). The key is that limit, found from the definition (both one-sided limits).

The models read the question's shape, written in t = x - at (t -> 0):
  params["kind"] = "pow": (N / D)^(m / t), with N = a + b t ("num": "a,b") and D = c + d t ("den": "c,d",
                   optional, else D = 1) and params["m"] (default 1).
  params["kind"] = "log": (log N - log D) / (s t), with "num", optional "den" and params["s"] (default 1).
The standard limits make log(a + b t) behave like log a + (b / a) t, so each factor contributes its
rate b / a, the constants log a cancel, and a "pow" limit is e^(m (rate N - rate D)) while a "log" limit
is (rate N - rate D) / s. Each misconception changes how a rate is read, or what is done with it.
"""
from sympy import E, Abs, Rational, S, Symbol, exp, limit, log, simplify, sympify
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)


def _limit(e, at):
    """The two-sided limit at `at`, from the definition (both one-sided limits, equal and finite)."""
    left, right = limit(e, x, at, "-"), limit(e, x, at, "+")
    if simplify(left - right) == 0 and left.is_finite is not False:
        return simplify(left)
    raise ValueError("no limit")


def key(v, p):
    f = parse_expr(p["f"], local_dict={"x": x, "e": E, "log": log})
    return _limit(f, sympify(p.get("at", "0")))


def _pieces(p):
    """[(a, b, sign)]: each a + b t, signed +1 for the numerator's log and -1 for the denominator's."""
    out = [tuple(Rational(s) for s in p["num"].split(",")) + (1,)]
    if p.get("den"):
        out.append(tuple(Rational(s) for s in p["den"].split(",")) + (-1,))
    return out


def _total(p, rate):
    return sum(sign * rate(a, b) for a, b, sign in _pieces(p))


def _value(p, total, m=None):
    """The answer the student writes from the total rate."""
    if p["kind"] == "pow":
        return exp((Rational(p.get("m", "1")) if m is None else m) * total)
    return total / Rational(p.get("s", "1"))


def _right(a, b):
    return b / a


def m1(v, p):
    """M1: 1^infinity read as 1: the base tends to 1, so any power of it is taken as 1."""
    if p["kind"] != "pow":
        raise ValueError("needs a power")
    return S.One


def m2(v, p):
    """M2: the constant isn't taken out: log(a + b t) treated as log(1 + b t), so the rate is b, not b / a."""
    if all(a == 1 for a, b, _ in _pieces(p)):
        raise ValueError("every constant is already 1")
    return _value(p, _total(p, lambda a, b: b))


def m3(v, p):
    """M3: the coefficient matched the wrong way round: (1 + k t)^(1/t) taken as e^(1/k), log(1 + k t)/t as 1/k."""
    return _value(p, _total(p, lambda a, b: a / b))


def m4(v, p):
    """M4: the minus sign lost: (1 - q t)^(1/t) taken as e^q (not e^(-q)), log(1 - q t)/t as q."""
    if all(b > 0 for a, b, _ in _pieces(p)):
        raise ValueError("no minus sign to lose")
    return _value(p, _total(p, lambda a, b: Abs(b) / a))


def m5(v, p):
    """M5: the two standard limits mixed up: a power's answer given as the exponent (e left out),
    a log quotient's answer given as e to that number."""
    if p["kind"] == "pow":
        return Rational(p.get("m", "1")) * _total(p, _right)
    return exp(_value(p, _total(p, _right)))


def m6(v, p):
    """M6: the constant in the exponent m / t dropped, as if the power were 1 / t."""
    if p["kind"] != "pow" or Rational(p.get("m", "1")) == 1:
        raise ValueError("needs an exponent m / x with m other than 1")
    return _value(p, _total(p, _right), m=S.One)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
