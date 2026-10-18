"""C03 At least, at most and word problems: answer models (the key, and one per misconception).

Inputs: n (trials), p (chance of success), k (the bound), k2 (upper bound, "between" only),
c (target probability, ask="min_n" only; n is then what is asked).
params["ev"]: ge (X >= k), le (X <= k), gt (X > k), lt (X < k), between (k <= X <= k2).
params["ask"]: "prob" (default) or "min_n" (smallest n with P(event) > c).
"""
from sympy import Rational, binomial

_CAP = 400  # min_n search limit


def _values(ev, n, k, k2=None):
    """The values of X that make up the event."""
    test = {
        "ge": lambda r: r >= k,
        "le": lambda r: r <= k,
        "gt": lambda r: r > k,
        "lt": lambda r: r < k,
        "between": lambda r: k <= r <= k2,
    }[ev]
    return [r for r in range(n + 1) if test(r)]


def _term(n, p, r, coeff=True):
    return (binomial(n, r) if coeff else 1) * p**r * (1 - p) ** (n - r)


def _prob(n, p, ev, k, k2=None, coeff=True):
    """P(event), adding the binomial terms one by one (the definition)."""
    return sum((_term(n, p, r, coeff) for r in _values(ev, n, k, k2)), Rational(0))


def _ints(v):
    k = int(v["k"])
    k2 = int(v["k2"]) if "k2" in v else None
    return k, k2


def _answer(v, p, prob_of_n):
    """Either P(event) for the given n, or the smallest n with P(event) > c."""
    if p.get("ask", "prob") == "min_n":
        c = v["c"]
        for n in range(1, _CAP + 1):
            if prob_of_n(n) > c:
                return Rational(n)
        raise ValueError("no n reaches the target")
    return prob_of_n(int(v["n"]))


def key(v, p):
    k, k2 = _ints(v)
    return _answer(v, p, lambda n: _prob(n, v["p"], p["ev"], k, k2))


_FLIP = {"ge": "gt", "gt": "ge", "le": "lt", "lt": "le"}


def m1(v, p):
    """Boundary misread: 'at least k' as more than k, 'more than k' as k or more, etc.;
    'between a and b' (both included) with the ends left out."""
    k, k2 = _ints(v)
    ev = p["ev"]
    if ev == "between":
        return _answer(v, p, lambda n: _prob(n, v["p"], "between", k + 1, k2 - 1))
    return _answer(v, p, lambda n: _prob(n, v["p"], _FLIP[ev], k))


def m2(v, p):
    """Success and failure swapped: p taken as the chance of the other outcome."""
    k, k2 = _ints(v)
    return _answer(v, p, lambda n: _prob(n, 1 - v["p"], p["ev"], k, k2))


def m3(v, p):
    """Stops at the complement: gives P(values left out), forgetting to subtract it from 1."""
    k, k2 = _ints(v)
    return _answer(v, p, lambda n: 1 - _prob(n, v["p"], p["ev"], k, k2))


def m4(v, p):
    """'At least one' as n x p: adds the single-trial chances."""
    k, _ = _ints(v)
    if p["ev"] != "ge" or k != 1:
        raise ValueError("only for at least one")
    return _answer(v, p, lambda n: n * v["p"])


def m5(v, p):
    """'At least k' / 'at most k' taken as exactly k."""
    k, _ = _ints(v)
    if p["ev"] not in ("ge", "le"):
        raise ValueError("only for at least / at most")
    return _answer(v, p, lambda n: _term(n, v["p"], k))


def m6(v, p):
    """Adds p^r q^(n - r) for the needed values without the factor nCr."""
    k, k2 = _ints(v)
    return _answer(v, p, lambda n: _prob(n, v["p"], p["ev"], k, k2, coeff=False))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
