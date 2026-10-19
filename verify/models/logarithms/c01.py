"""C01 Changing bases and summing reciprocals: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  sum    v["t"]: a tuple of (p, m, q, n), each the log log_{p^m} q^n -> their sum
  prod   v["t"] as for sum -> their product
  recip  v["bases"]: the bases b, v["n"]: n -> the sum of 1/log_b n; v["r"], v["m"], v["k"]
         say how the student meets the combined log: n = r^m and the product of the bases = r^k
  nest   log_{a^m} of L nested roots sqrt(a sqrt(a ... sqrt(a))): v["a"], v["m"], v["L"]
  power  (p^r)^(log_{p^m} q^n): v["p"], v["r"], v["m"], v["q"], v["n"]
The key works from the definition, log_b x = ln x / ln b, never via the rules being taught.
"""
from sympy import Integer, Rational, log, prod, simplify, sqrt


def _ask(p):
    return p["ask"]


def _terms(v):
    return [tuple(Integer(x) if not isinstance(x, Rational) else x for x in t) for t in v["t"]]


def _combine(vals, p):
    return simplify(sum(vals) if _ask(p) == "sum" else prod(vals))


def _ln_ratio(q, pp):
    """log_p q, as a ratio of natural logs."""
    return log(q) / log(pp)


def _nested(a, depth):
    """sqrt(a sqrt(a ... sqrt(a))) with `depth` square roots, built from the inside out."""
    x = sqrt(a)
    for _ in range(depth - 1):
        x = sqrt(a * x)
    return x


def key(v, p):
    a = _ask(p)
    if a in ("sum", "prod"):
        return _combine([log(q**n) / log(pp**m) for pp, m, q, n in _terms(v)], p)
    if a == "recip":
        return simplify(sum(log(b) / log(v["n"]) for b in v["bases"]))
    if a == "nest":
        return simplify(log(_nested(v["a"], int(v["L"]))) / log(v["a"] ** v["m"]))
    if a == "power":
        return simplify((v["p"] ** v["r"]) ** (log(v["q"] ** v["n"]) / log(v["p"] ** v["m"])))
    raise ValueError(a)


def _base_rule(v, p, f):
    """A wrong rule log_{a^m} b^n = f(m, n) log_a b, applied wherever a power sits in a base."""
    a = _ask(p)
    if a in ("sum", "prod"):
        return _combine([f(m, n) * _ln_ratio(q, pp) for pp, m, q, n in _terms(v)], p)
    if a == "recip":
        # The bases are flipped and combined correctly into log_n(product) = log_{r^m} r^k.
        return f(v["m"], v["k"])
    if a == "nest":
        e = 1 - Rational(1, 2 ** int(v["L"]))  # the nested root is a^e
        return f(v["m"], e)
    if a == "power":
        # (p^r)^(f(m, n) log_p q) = q^(r f(m, n)).
        return v["q"] ** (v["r"] * f(v["m"], v["n"]))
    raise ValueError(a)


def m1(v, p):
    """Turns the fraction upside down: log_{a^m} b^n = (m/n) log_a b."""
    return _base_rule(v, p, lambda m, n: m / n)


def m2(v, p):
    """Multiplies both powers out in front: log_{a^m} b^n = mn log_a b."""
    return _base_rule(v, p, lambda m, n: m * n)


def m3(v, p):
    """Adds the arguments: log_n 2 + log_n 3 + ... = log_n(2 + 3 + ...)."""
    if _ask(p) != "recip":
        raise ValueError("only for a sum of reciprocals")
    return simplify(log(sum(v["bases"])) / log(v["n"]))


def m4(v, p):
    """Lets the logs cancel: log_a b = ln b / ln a read as b / a."""
    a = _ask(p)
    if a in ("sum", "prod"):
        return _combine([Rational(q**n, pp**m) for pp, m, q, n in _terms(v)], p)
    if a == "recip":
        return sum(Rational(b, v["n"]) for b in v["bases"])  # 1/log_b n = 1/(n/b) = b/n
    raise ValueError("only for logs of plain numbers")


def m5(v, p):
    """Reads L nested square roots as one 2^L-th root: sqrt(a sqrt(a sqrt(a))) = a^(1/8)."""
    if _ask(p) != "nest":
        raise ValueError("only for nested roots")
    return Rational(1, 2 ** int(v["L"])) / v["m"]


def m6(v, p):
    """Brings the multiple out as a factor: a^(k log_a x) = kx instead of x^k."""
    if _ask(p) != "power":
        raise ValueError("only for a power whose exponent is a log")
    k = v["r"] * v["n"] / v["m"]  # (p^r)^((n/m) log_p q) = p^(k log_p q)
    if k == 1:
        raise ValueError("k = 1 gives the key")
    return k * v["q"]


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
