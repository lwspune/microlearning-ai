"""C07 Logarithm rules: answer models (the key, and one per misconception).

params["ask"] picks the question shape; inputs are sympy numbers.
  ratio   log_a m / log_a n                  inputs m, n, a (the common base)
  logpow  log N^k in terms of a = log 2, b = log 3   inputs N, k (N a product of 2s and 3s)
  lnexp   ln e^p - ln e^q                    inputs p, q
  solve   k log_a x = c, find x             inputs k, a, c
  eval    log_a N                            inputs a, N (N a rational power of a)
Each misconception model raises ValueError where its wrong rule has nothing to act on.
"""
from sympy import E, Rational, Symbol, expand_log, factorint, log, simplify, sqrt

A, B = Symbol("a"), Symbol("b")  # log 2 and log 3; the verifier parses letters other than x, y as plain symbols


def _clean(e):
    """A log expression in lowest terms: log 81 as 4 log 3, then cancelled."""
    return simplify(expand_log(e, force=True))


def _ab(n):
    """log n in terms of a = log 2 and b = log 3, from the prime factors of the rational n."""
    n = Rational(n)
    out = 0
    for prime, e in {**factorint(n.p), **{q: -e for q, e in factorint(n.q).items()}}.items():
        if prime not in (2, 3):
            raise ValueError(f"{n} has the prime factor {prime}")
        out += e * (A if prime == 2 else B)
    return out


def _power_of(base, n):
    """The exponent e with base^e = n, read off the definition (base^e = n)."""
    e = _clean(log(n) / log(base))
    if not e.is_rational:
        raise ValueError(f"{n} is not a rational power of {base}")
    return e


def key(v, p):
    ask = p["ask"]
    if ask == "ratio":
        a = v["a"]
        return _clean((log(v["m"]) / log(a)) / (log(v["n"]) / log(a)))  # each log_a in natural logs, then cancelled
    if ask == "logpow":
        return v["k"] * _ab(v["N"])
    if ask == "lnexp":
        return log(E ** v["p"]) - log(E ** v["q"])
    if ask == "solve":
        return v["a"] ** (v["c"] / v["k"])  # a^y = x with y = c / k
    if ask == "eval":
        return _power_of(v["a"], v["N"])
    raise ValueError(ask)


def m1(v, p):
    """Log treated as a number multiplying its argument: it spreads over sums and cancels in a fraction."""
    ask = p["ask"]
    if ask == "ratio":
        return v["m"] / v["n"]  # log m / log n "=" m / n
    if ask == "lnexp":
        return log(E ** v["p"] - E ** v["q"])  # ln m - ln n "=" ln(m - n)
    raise ValueError("no sum or fraction of logs")


def m2(v, p):
    """log(mn) = log m * log n and log(m/n) = log m / log n, either way round."""
    ask = p["ask"]
    if ask == "ratio":
        return _clean(log(v["m"] / v["n"]) / log(v["a"]))  # log_a m / log_a n "=" log_a(m/n)
    if ask == "logpow":
        terms = [e * (A if q == 2 else B) for q, e in factorint(Rational(v["N"]).p).items()]
        if len(terms) < 2:
            raise ValueError("not a product")
        out = 1
        for t in terms:
            out *= t
        return v["k"] * out  # log(2^5 * 3) "=" log 2^5 * log 3
    if ask == "eval":
        n = Rational(v["N"])
        if n.q == 1:
            raise ValueError("not a quotient")
        return _clean(log(n.p) / log(n.q))  # log_a(p/q) "=" log_a p / log_a q
    raise ValueError("no product or quotient")


def m3(v, p):
    """log m^k = (log m)^k: the power goes on the log, not in front of it."""
    ask = p["ask"]
    if ask == "logpow":
        return sqrt(_ab(v["N"])) if v["k"] == Rational(1, 2) else _ab(v["N"]) ** v["k"]
    if ask == "lnexp":
        return log(E) ** v["p"] - log(E) ** v["q"]  # (ln e)^9 - (ln e)^4
    if ask == "eval":
        return 1 ** _power_of(v["a"], v["N"])  # log_a a^e "=" (log_a a)^e
    raise ValueError("no power inside a log")


def m4(v, p):
    """k log m = log(km): the power becomes a factor inside the log."""
    ask = p["ask"]
    if ask == "logpow":
        return _ab(v["k"] * v["N"])  # log 96^(1/2) "=" log(96/2)
    if ask == "lnexp":
        return log(Rational(v["p"], v["q"]))  # ln(9e) - ln(4e) = ln(9/4)
    if ask == "solve":
        return v["a"] ** v["c"] / v["k"]  # log_a(kx) = c
    raise ValueError("no coefficient on a log")


def m5(v, p):
    """Swaps base and argument: log_a b taken as log_b a (change of base upside down)."""
    ask = p["ask"]
    if ask == "ratio":
        return 1 / key(v, p)  # log_m a / log_n a = log_a n / log_a m
    if ask == "solve":
        return v["a"] ** (v["k"] / v["c"])  # log_x a = c / k, so x^(c/k) = a
    if ask == "eval":
        return 1 / key(v, p)
    raise ValueError("no base to swap")


def m6(v, p):
    """Reads log_a x = y as x = y^a: base and exponent change places."""
    if p["ask"] == "solve":
        return (v["c"] / v["k"]) ** v["a"]
    raise ValueError("no equation log_a x = y to undo")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
