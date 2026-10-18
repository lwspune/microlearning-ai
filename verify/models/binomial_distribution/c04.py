"""C04 Mean and variance of a binomial distribution: answer models (the key, and one per misconception).

Inputs (sympy numbers, whichever the item gives): n, p, mean, var, sd.  params["ask"] picks the answer:
  "e_var" -> (E(X), Var(X)) from n, p          "sd"    -> SD(X) from n, p
  "p_sd"  -> (p, SD(X)) from n, mean           "n_var" -> (n, Var(X)) from p, mean
  "q"     -> q from mean, sd                   "n"     -> n from mean, var (or NO_SUCH)

The key never uses E = np or Var = npq: it lists P(X = r) = nCr p^r q^(n - r) for r = 0..n and sums
r P(X = r) and r^2 P(X = r).  Where n or p is unknown it searches n = 1..N_MAX; for each n the mean
rises strictly with p, so at most one p fits a given mean, and the candidate p = mean/n is accepted
only if the summed mean and variance both match.
"""
from fractions import Fraction
from math import comb

from sympy import Rational, Symbol, Tuple, nsimplify, sqrt, sympify

NO_SUCH = Symbol("no_such_distribution")
N_MAX = 400


def _f(x):
    """A sympy rational as a Fraction."""
    x = Rational(nsimplify(sympify(x)))
    return Fraction(int(x.p), int(x.q))


def _r(x):
    return Rational(x.numerator, x.denominator)


def _moments(n, p):
    """(mean, variance) of B(n, p), by summing the binomial terms (exact Fractions)."""
    if not (0 < p < 1):
        raise ValueError("need 0 < p < 1")
    q = 1 - p
    probs = [comb(n, r) * p**r * q ** (n - r) for r in range(n + 1)]
    assert sum(probs) == 1
    m1 = sum(r * pr for r, pr in enumerate(probs))
    m2 = sum(r * r * pr for r, pr in enumerate(probs))
    return m1, m2 - m1 * m1


def _p_for_mean(n, mean):
    """The one p in (0, 1) with summed mean equal to `mean` for this n, or None."""
    p = mean / n
    if not (0 < p < 1):
        return None
    return p if _moments(n, p)[0] == mean else None


def _solve(mean, var):
    """(n, p) of the binomial distribution with this mean and variance, or None."""
    for n in range(1, N_MAX + 1):
        p = _p_for_mean(n, mean)
        if p is not None and _moments(n, p)[1] == var:
            return n, p
    return None


def key(v, prm):
    ask = prm["ask"]
    if ask in ("e_var", "sd"):
        n, p = int(v["n"]), _f(v["p"])
        m, var = _moments(n, p)
        return Tuple(_r(m), _r(var)) if ask == "e_var" else sqrt(_r(var))
    if ask == "p_sd":
        n, mean = int(v["n"]), _f(v["mean"])
        p = _p_for_mean(n, mean)
        if p is None:
            raise ValueError("no p fits")
        return Tuple(_r(p), sqrt(_r(_moments(n, p)[1])))
    if ask == "n_var":
        p, mean = _f(v["p"]), _f(v["mean"])
        for n in range(1, N_MAX + 1):
            if _moments(n, p)[0] == mean:
                return Tuple(n, _r(_moments(n, p)[1]))
        raise ValueError("no n fits")
    if ask in ("q", "n"):
        mean = _f(v["mean"])
        var = _f(v["sd"]) ** 2 if ask == "q" else _f(v["var"])
        found = _solve(mean, var)
        if ask == "n":
            return NO_SUCH if found is None else found[0]
        if found is None:
            raise ValueError("no such distribution")
        return _r(1 - found[1])
    raise ValueError(ask)


def _given(v):
    return {k: Rational(nsimplify(sympify(x))) for k, x in v.items()}


def _formula(v, prm, mean_f, var_f, inverse):
    """Answer `ask` with a (possibly wrong) mean rule mean_f(n, p), variance rule var_f(n, p), and
    inverse(mean, var) -> (n, p) for working back."""
    g, ask = _given(v), prm["ask"]
    if ask == "e_var":
        return Tuple(mean_f(g["n"], g["p"]), var_f(g["n"], g["p"]))
    if ask == "sd":
        return sqrt(var_f(g["n"], g["p"]))
    if ask == "p_sd":
        n = g["n"]
        # solve mean_f(n, p) = mean for p (both rules are linear in p)
        p = g["mean"] / n if mean_f(1, Rational(1, 3)) == Rational(1, 3) else 1 - g["mean"] / n
        return Tuple(p, sqrt(var_f(n, p)))
    if ask == "n_var":
        p = g["p"]
        n = g["mean"] / mean_f(1, p)
        return Tuple(n, var_f(n, p))
    if ask in ("q", "n"):
        var = g["sd"] ** 2 if ask == "q" else g["var"]
        n, p = inverse(g["mean"], var)
        return 1 - p if ask == "q" else n
    raise ValueError(ask)


def m1(v, prm):
    """Var = np: leaves out q, so the variance equals the mean."""
    if prm["ask"] in ("q", "n"):
        raise ValueError("M1 gives no n or q from a mean and a variance")
    return _formula(v, prm, lambda n, p: n * p, lambda n, p: n * p, None)


def m2(v, prm):
    """Swaps p and q: E = nq, and reads Var/mean as p (so n = mean/p with that p)."""
    def inverse(mean, var):
        p = var / mean
        return mean / p, p
    return _formula(v, prm, lambda n, p: n * (1 - p), lambda n, p: n * p * (1 - p), inverse)


def m3(v, prm):
    """Mixes up variance and SD: gives npq for the SD (or its root for Var), and uses a given SD as Var."""
    g, ask = _given(v), prm["ask"]
    if ask == "e_var":
        return Tuple(g["n"] * g["p"], sqrt(g["n"] * g["p"] * (1 - g["p"])))
    if ask == "sd":
        return g["n"] * g["p"] * (1 - g["p"])
    if ask == "p_sd":
        p = g["mean"] / g["n"]
        return Tuple(p, g["n"] * p * (1 - p))
    if ask == "n_var":
        n = g["mean"] / g["p"]
        return Tuple(n, sqrt(n * g["p"] * (1 - g["p"])))
    if ask == "q":
        return g["sd"] / g["mean"]
    raise ValueError("M3 needs an SD in the question")


def m4(v, prm):
    """Var = n^2 pq: treats X as n times one trial's outcome; so mean = np, n·mean·q = Var."""
    def inverse(mean, var):
        n = mean + var / mean  # n^2 p q = n * mean * (1 - mean/n) = mean (n - mean)
        return n, mean / n
    return _formula(v, prm, lambda n, p: n * p, lambda n, p: n**2 * p * (1 - p), inverse)


def m5(v, prm):
    """Takes the ratio upside down, q = mean/Var, so a variance above the mean still gives q < 1."""
    if prm["ask"] not in ("q", "n"):
        raise ValueError("M5 needs a mean and a variance")
    def inverse(mean, var):
        q = mean / var
        p = 1 - q
        return mean / p, p
    return _formula(v, prm, None, None, inverse)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
