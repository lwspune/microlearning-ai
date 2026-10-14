"""C11 Inserting means: answer models (the key, and one per misconception).

Inputs: a, b = the given end numbers, k = how many numbers to insert between them.
params["kind"]: "ap" (A.M.s), "gp" (G.M.s) or "hp" (H.M.s).
Every answer is a Tuple of the k inserted numbers, in order from a to b.
"""
from sympy import Rational, Tuple, linsolve, real_root, simplify, solve, symbols


def _xs(k):
    return symbols(f"x1:{int(k) + 1}", real=True)


def _ap_from_definition(a, b, k):
    """Solve for x1..xk so that a, x1, ..., xk, b have equal differences."""
    xs = _xs(k)
    seq = [a, *xs, b]
    eqs = [seq[i + 1] - seq[i] - (seq[i + 2] - seq[i + 1]) for i in range(len(seq) - 2)]
    (sol,) = linsolve(eqs, xs)
    return [simplify(s) for s in sol]


def _gp_from_definition(a, b, k):
    """Solve for real x1..xk so that a, x1, ..., xk, b have equal ratios (t_{i+1}^2 = t_i t_{i+2})."""
    xs = _xs(k)
    seq = [a, *xs, b]
    eqs = [seq[i + 1] ** 2 - seq[i] * seq[i + 2] for i in range(len(seq) - 2)]
    sols = [s for s in solve(eqs, xs, dict=True) if all(s[x].is_real and s[x] != 0 for x in xs)]
    vals = {tuple(simplify(s[x]) for x in xs) for s in sols}
    if len(vals) != 1:
        raise ValueError(f"not exactly one real G.P. through {a} and {b}: {vals}")
    return list(vals.pop())


def key(v, p):
    a, b, k = v["a"], v["b"], v["k"]
    if p["kind"] == "ap":
        return Tuple(*_ap_from_definition(a, b, k))
    if p["kind"] == "gp":
        return Tuple(*_gp_from_definition(a, b, k))
    # H.P.: the reciprocals are in A.P.
    return Tuple(*[1 / h for h in _ap_from_definition(1 / a, 1 / b, k)])


def _with_power(v, p, n_minus_1):
    """The inserted numbers when b is taken as t with a + (n_minus_1)d or ar^(n_minus_1)."""
    a, b, k = v["a"], v["b"], int(v["k"])
    if p["kind"] == "gp":
        q = b / a
        if q < 0 and n_minus_1 % 2 == 0:
            raise ValueError("no real ratio")
        r = real_root(q, n_minus_1)
        return Tuple(*[simplify(a * r**j) for j in range(1, k + 1)])
    lo, hi = (a, b) if p["kind"] == "ap" else (1 / a, 1 / b)
    d = (hi - lo) / n_minus_1
    terms = [lo + j * d for j in range(1, k + 1)]
    return Tuple(*(terms if p["kind"] == "ap" else [1 / t for t in terms]))


def m1(v, p):
    """Counts k + 1 terms instead of k + 2: b = t_{k+1}, so d = (b - a)/k or r^k = b/a."""
    return _with_power(v, p, int(v["k"]))


def m2(v, p):
    """Knows there are k + 2 terms but puts the power n in place of n - 1: b = ar^(k+2) or a + (k+2)d."""
    return _with_power(v, p, int(v["k"]) + 2)


def m3(v, p):
    """H.P.: finds the A.P. of reciprocals correctly but gives its middle terms without flipping them back."""
    if p["kind"] != "hp":
        raise ValueError("only an H.P. has reciprocals to flip back")
    a, b, k = v["a"], v["b"], v["k"]
    return Tuple(*_ap_from_definition(1 / a, 1 / b, k))


def m4(v, p):
    """Takes every kind of mean as equally spaced: inserts A.M.s between a and b for a G.P. or an H.P."""
    if p["kind"] == "ap":
        raise ValueError("for an A.P. this is the key")
    return Tuple(*_ap_from_definition(v["a"], v["b"], v["k"]))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4}
