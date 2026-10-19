"""C03 Logarithmic equations: answer models (the key, and one per misconception).

p["ask"] picks the equation:
  base   log_{b^2}(m x + p) = log_b(n x + q)        -> the set of real solutions
  sum    log_b(x + p) + log_b(x + q) = k            -> the set of real solutions
  mixed  log_b x + log_{b^2} x = k                  -> x
  ap     log c, log(a^x - p), log(a^x + q) in A.P.  -> x
The key solves from the definition: a log is defined only for a positive argument, and
log_b N = k means N = b^k. Every model checks the domain except C03-M1.
"""
from sympy import FiniteSet, Rational, Symbol, log, solve

X = Symbol("x", real=True)
T = Symbol("t", positive=True)


def _ask(p):
    return p["ask"]


def _real_roots(eq):
    return [r for r in solve(eq, X) if r.is_real]


def _keep(roots, args):
    """Only the roots that make every argument positive."""
    return FiniteSet(*[r for r in roots if all(a.subs(X, r) > 0 for a in args)])


def _base_args(v):
    return v["m"] * X + v["p"], v["n"] * X + v["q"]


def _sum_args(v):
    return X + v["p"], X + v["q"]


def _ap_t(v, eq):
    """The value of t = a^x from a condition on t; t must be positive and make a^x - p positive."""
    ts = [r for r in solve(eq, T) if r.is_real and r > v["p"]]
    if len(ts) != 1:
        raise ValueError(f"expected one valid t, got {ts}")
    return ts[0]


def _ap_key_t(v):
    # 2 log(t - p) = log c + log(t + q)  <=>  (t - p)^2 = c (t + q)
    return _ap_t(v, (T - v["p"]) ** 2 - v["c"] * (T + v["q"]))


def key(v, p):
    a = _ask(p)
    if a == "base":
        A, B = _base_args(v)
        # log_{b^2} A = (1/2) log_b A, so log_b A = 2 log_b B = log_b B^2.
        return _keep(_real_roots(A - B**2), (A, B))
    if a == "sum":
        A, B = _sum_args(v)
        return _keep(_real_roots(A * B - v["b"] ** v["k"]), (A, B))
    if a == "mixed":
        # log_b x + (1/2) log_b x = k, so log_b x = 2k/3.
        return v["b"] ** (Rational(2, 3) * v["k"])
    if a == "ap":
        return log(_ap_key_t(v), v["a"])
    raise ValueError(a)


def m1(v, p):
    """Keeps every root of the algebraic equation: never checks that each log is defined."""
    a = _ask(p)
    if a == "base":
        A, B = _base_args(v)
        return FiniteSet(*_real_roots(A - B**2))
    if a == "sum":
        A, B = _sum_args(v)
        return FiniteSet(*_real_roots(A * B - v["b"] ** v["k"]))
    raise ValueError("no root to wrongly keep")


def m2(v, p):
    """Turns the change of base upside down: log_{b^2} N = 2 log_b N."""
    a = _ask(p)
    if a == "base":
        A, B = _base_args(v)
        # 2 log_b A = log_b B, so A^2 = B.
        return _keep(_real_roots(A**2 - B), (A, B))
    if a == "mixed":
        # log_b x + 2 log_b x = k.
        return v["b"] ** (v["k"] / 3)
    raise ValueError("no change of base")


def m3(v, p):
    """Mixes up which number is the base: log_b N = k read as N = k^b, and a^x = t as x = log_t a."""
    a = _ask(p)
    if a == "sum":
        A, B = _sum_args(v)
        return _keep(_real_roots(A * B - v["k"] ** v["b"]), (A, B))
    if a == "mixed":
        return (Rational(2, 3) * v["k"]) ** v["b"]
    if a == "ap":
        return log(v["a"], _ap_key_t(v))
    raise ValueError("no switch between log and exponential form")


def m4(v, p):
    """Adds logs by adding the numbers: log M + log N = log(M + N)."""
    a = _ask(p)
    if a == "sum":
        A, B = _sum_args(v)
        return _keep(_real_roots(A + B - v["b"] ** v["k"]), (A, B))
    if a == "ap":
        # 2 log(t - p) = log(c + t + q).
        return log(_ap_t(v, (T - v["p"]) ** 2 - (v["c"] + T + v["q"])), v["a"])
    raise ValueError("no sum of logs")


def m5(v, p):
    """Reads logs in A.P. as the numbers in A.P.: 2(t - p) = c + (t + q)."""
    if _ask(p) != "ap":
        raise ValueError("only for logs in A.P.")
    return log(_ap_t(v, 2 * (T - v["p"]) - (v["c"] + T + v["q"])), v["a"])


def m6(v, p):
    """Treats logs to different bases as if they had the same base."""
    a = _ask(p)
    if a == "base":
        A, B = _base_args(v)
        return _keep(_real_roots(A - B), (A, B))
    if a == "mixed":
        # log_b x + log_b x = k.
        return v["b"] ** (v["k"] / 2)
    raise ValueError("only one base")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
