"""C04 Expected value and variance: answer models (the key, and one per misconception).

The distribution comes from params["exp"]:
  table          inputs x, p: Tuples of the values and their probabilities.
  die            one fair die; X is the number on the top face.
  two_dice_sum   two fair dice; X is the sum of the numbers.
  two_dice_six   two fair dice; X is the number of sixes.
  larger_of_two  two different numbers drawn from 1..n (input n); X is the larger.
  bernoulli      X = 1 with probability q (input q), else X = 0.
The experiments are enumerated outcome by outcome, never read off a table.
params["ask"]: "E" (the expected value), "var" (the variance) or "sd" (the standard deviation).
"""
from itertools import combinations, product

from sympy import Rational, S, sqrt


def _dist(v, p):
    """[(x, P(X = x))], the values in increasing order."""
    exp = p["exp"]
    if exp == "table":
        pairs = [(S(x), S(q)) for x, q in zip(v["x"], v["p"])]
    else:
        if exp == "die":
            outcomes = [(a,) for a in range(1, 7)]
            X = lambda o: o[0]
        elif exp == "two_dice_sum":
            outcomes = list(product(range(1, 7), repeat=2))
            X = lambda o: o[0] + o[1]
        elif exp == "two_dice_six":
            outcomes = list(product(range(1, 7), repeat=2))
            X = lambda o: o.count(6)
        elif exp == "larger_of_two":
            outcomes = list(combinations(range(1, int(v["n"]) + 1), 2))
            X = lambda o: max(o)
        elif exp == "bernoulli":
            q = S(v["q"])
            return [(S(0), 1 - q), (S(1), q)]
        else:
            raise ValueError(f"unknown experiment {exp}")
        counts = {}
        for o in outcomes:
            counts[X(o)] = counts.get(X(o), 0) + 1
        pairs = [(S(x), Rational(c, len(outcomes))) for x, c in sorted(counts.items())]
    assert sum(q for _, q in pairs) == 1, "probabilities must add to 1"
    assert all(0 <= q <= 1 for _, q in pairs), "each probability lies in [0, 1]"
    return pairs


def _mean(d):
    return sum(x * q for x, q in d)


def _var(d):
    """From the definition: the expected squared distance from the mean."""
    mu = _mean(d)
    return sum((x - mu) ** 2 * q for x, q in d)


def _report(E, var, p):
    ask = p["ask"]
    if ask == "E":
        if E is None:
            raise ValueError("this mistake is about the variance")
        return E
    if var is None:
        raise ValueError("this mistake is about the expected value")
    if var < 0:
        raise ValueError("negative variance: implausible option")
    return var if ask == "var" else sqrt(var)


def _ex2(d):
    return sum(x**2 * q for x, q in d)


def key(v, p):
    d = _dist(v, p)
    return _report(_mean(d), _var(d), p)


def m1(v, p):
    """Takes the most likely value (the mode) as the expected value."""
    if p["ask"] != "E":
        raise ValueError("about E(X) only")
    d = _dist(v, p)
    top = max(q for _, q in d)
    modes = [x for x, q in d if q == top]
    if len(modes) != 1:
        raise ValueError("no single most likely value")
    return modes[0]


def m2(v, p):
    """Ignores the probabilities: averages the listed values as if each were equally likely."""
    xs = [x for x, _ in _dist(v, p)]
    flat = [(x, Rational(1, len(xs))) for x in xs]
    return _report(_mean(flat), _var(flat), p)


def m3(v, p):
    """Stops at E(X^2) = sum x^2 P(x): forgets to subtract [E(X)]^2."""
    d = _dist(v, p)
    return _report(None, _ex2(d), p)


def m4(v, p):
    """Subtracts E(X) instead of [E(X)]^2."""
    d = _dist(v, p)
    return _report(None, _ex2(d) - _mean(d), p)


def m5(v, p):
    """Swaps variance and standard deviation: gives sigma for Var(X), and Var(X) for sigma."""
    d = _dist(v, p)
    var = _var(d)
    if p["ask"] == "var":
        return sqrt(var)
    if p["ask"] == "sd":
        return var
    raise ValueError("about Var(X) and sigma only")


def m6(v, p):
    """Divides sum x P(x) by the number of values, as for the mean of a list."""
    if p["ask"] != "E":
        raise ValueError("about E(X) only")
    d = _dist(v, p)
    return _mean(d) / len(d)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
