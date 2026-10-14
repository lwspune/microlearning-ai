"""C07 Expanding to evaluate numbers: answer models (the key, and one per misconception).

inputs: a, b (sympy numbers, possibly surds), n (a positive integer).
params["op"]: "plus" -> (a + b)^n; "minus" -> (a - b)^n;
              "sum"  -> (a + b)^n + (a - b)^n; "diff" -> (a + b)^n - (a - b)^n.
"""
from sympy import binomial, expand, radsimp


def _abn(v):
    return v["a"], v["b"], int(v["n"])


def _tidy(x):
    return radsimp(expand(x))


def _combine(op, plus, minus):
    """plus = the student's value of (a + b)^n, minus = their value of (a - b)^n."""
    return {"plus": plus, "minus": minus, "sum": plus + minus, "diff": plus - minus}[op]


def key(v, p):
    """The number itself, raised to the power directly (no expansion by hand)."""
    a, b, n = _abn(v)
    return _tidy(_combine(p["op"], (a + b) ** n, (a - b) ** n))


def m1(v, p):
    """(a + b)^n = a^n + b^n: keeps only the first and last terms."""
    a, b, n = _abn(v)
    return _tidy(_combine(p["op"], a**n + b**n, a**n + (-b) ** n))


def m2(v, p):
    """Keeps the wrong terms: in the sum, the odd-placed terms (with odd powers of b) survive
    and double; in the difference, the even-placed ones do. So the sum is worked as the difference
    and the other way round."""
    a, b, n = _abn(v)
    op = p["op"]
    if op not in ("sum", "diff"):
        raise ValueError("only for a sum or difference of two powers")
    return _tidy(_combine("diff" if op == "sum" else "sum", (a + b) ** n, (a - b) ** n))


def m3(v, p):
    """Finds the surviving terms but adds them once instead of twice."""
    if p["op"] not in ("sum", "diff"):
        raise ValueError("only for a sum or difference of two powers")
    return _tidy(key(v, p) / 2)


def m4(v, p):
    """In (a - b)^n every term after the first gets a minus sign, instead of the signs alternating."""
    a, b, n = _abn(v)
    if p["op"] == "plus":
        raise ValueError("no (a - b)^n to expand")
    wrong_minus = a**n - sum(binomial(n, r) * a ** (n - r) * b**r for r in range(1, n + 1))
    return _tidy(_combine(p["op"], (a + b) ** n, wrong_minus))


def m5(v, p):
    """Leaves out the binomial coefficients: (a + b)^n = a^n + a^(n-1) b + ... + b^n."""
    a, b, n = _abn(v)
    plain = lambda s: sum(a ** (n - r) * (s * b) ** r for r in range(n + 1))
    return _tidy(_combine(p["op"], plain(1), plain(-1)))


def m6(v, p):
    """Stops after the first two terms, a^n + n a^(n-1) b, as if approximating."""
    a, b, n = _abn(v)
    if p["op"] not in ("plus", "minus"):
        raise ValueError("only for a single power")
    s = 1 if p["op"] == "plus" else -1
    return _tidy(a**n + n * a ** (n - 1) * s * b)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
