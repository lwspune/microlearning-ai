"""C04 Permutations: nPr: answer models (the key, and one per misconception).

params["ask"]:
  eval   the number of arrangements of r out of n different things. Inputs n, r.
  solve  the n with nP_a = k * nP_b (a > b). Inputs a, b, k.
"""
from sympy import Integer

_MAX = 500  # largest n the solvers will try


def _fill(n, places, start=0):
    """Fill `places` places one at a time from n different things, the first place having
    n - start choices and each later place one fewer (the multiplication principle)."""
    out = Integer(1)
    for i in range(places):
        out *= n - start - i
    return out


def _solve(v, count, lo):
    """The least whole n >= lo with count(n, a) = k * count(n, b)."""
    a, b, k = int(v["a"]), int(v["b"]), v["k"]
    for n in range(lo, _MAX):
        if count(n, a) == k * count(n, b):
            return Integer(n)
    raise ValueError("no whole-number n")


def _model(count):
    """An answer model from a rule for counting r-arrangements of n things."""
    def f(v, p):
        if p["ask"] == "eval":
            return count(int(v["n"]), int(v["r"]))
        if p["ask"] == "solve":
            return _solve(v, count, int(v["a"]))
        raise ValueError(f"no ask {p['ask']}")
    return f


# key: r places, n choices for the first, one fewer for each next place.
key = _model(lambda n, r: _fill(n, r))
# M2: one factor too many: n(n - 1)...(n - r), r + 1 factors.
m2 = _model(lambda n, r: _fill(n, r + 1))
# M3: one factor too few: n(n - 1)...(n - r + 2), r - 1 factors.
m3 = _model(lambda n, r: _fill(n, r - 1))


def m1(v, p):
    """Lets a thing be used again: every place has all n choices, n^r."""
    if p["ask"] == "eval":
        return Integer(v["n"]) ** int(v["r"])
    if p["ask"] == "solve":
        return _solve(v, lambda n, r: Integer(n) ** r, int(v["a"]))
    raise ValueError(f"no ask {p['ask']}")


def m4(v, p):
    """Divides like powers: nP_a / nP_b = nP_(a - b)."""
    if p["ask"] != "solve":
        raise ValueError("no ratio of two permutations")
    a, b, k = int(v["a"]), int(v["b"]), v["k"]
    for n in range(a, _MAX):
        if _fill(n, a - b) == k:
            return Integer(n)
    raise ValueError("no whole-number n")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
