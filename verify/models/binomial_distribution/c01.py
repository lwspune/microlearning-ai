"""C01 Bernoulli trials: answer models (the key, and one per misconception).

Three kinds of item, chosen by params["ask"]:
  "classify"  one situation; the answer names the first condition that fails, or says it is Bernoulli.
              inputs: p (chance of success on the first trial), k (number of raw results of one trial),
              F (1 if the number of trials is fixed), T (1 if every result is either success or failure),
              C (1 if the trials are independent with the same p, e.g. drawing with replacement).
  "count"     params["s"]: a list of situations "p;k;F;T;C"; the answer is how many are Bernoulli.
  "np"        inputs: n (number of trials), fav and tot (favourable and total equally likely results of
              one trial); the answer is the pair (n, p).
"""
from sympy import Integer, Rational, Symbol, Tuple, sympify

BERNOULLI = Symbol("yes_bernoulli")
P_CHANGES = Symbol("p_changes")
N_NOT_FIXED = Symbol("n_not_fixed")
MANY = Symbol("many_outcomes")
UNEQUAL = Symbol("unequal")


def _sit(v, p):
    """The situation's (p, k, F, T, C) from the inputs."""
    return v["p"], v["k"], v["F"], v["T"], v["C"]


def _sits(p):
    out = []
    for s in p["s"]:
        a, k, f, t, c = (sympify(x) for x in s.split(";"))
        out.append((a, k, f, t, c))
    return out


def _verdict(F, T, C, check_F=True, check_C=True):
    """Check the conditions in turn: fixed n, two outcomes, independent with constant p."""
    if check_F and F == 0:
        return N_NOT_FIXED
    if T == 0:
        return MANY
    if check_C and C == 0:
        return P_CHANGES
    return BERNOULLI


def _p(v):
    if v["fav"] <= 0 or v["fav"] >= v["tot"]:
        raise ValueError("success must be possible and not certain")
    return Rational(v["fav"], v["tot"])


def key(v, p):
    ask = p["ask"]
    if ask == "classify":
        _, _, F, T, C = _sit(v, p)
        return _verdict(F, T, C)
    if ask == "count":
        return Integer(sum(1 for (_, _, F, T, C) in _sits(p) if _verdict(F, T, C) == BERNOULLI))
    if ask == "np":
        return Tuple(v["n"], _p(v))
    raise ValueError(ask)


def m1(v, p):
    """Drawing without replacement is fine: ignores whether p stays the same."""
    ask = p["ask"]
    if ask == "classify":
        _, _, F, T, C = _sit(v, p)
        if C != 0:
            raise ValueError("p is constant here, so this belief gives the key")
        return _verdict(F, T, C, check_C=False)
    if ask == "count":
        return Integer(sum(1 for (_, _, F, T, C) in _sits(p) if _verdict(F, T, C, check_C=False) == BERNOULLI))
    raise ValueError("not a Bernoulli check")


def m2(v, p):
    """Success and failure must be equally likely: p = 1/2."""
    ask = p["ask"]
    if ask == "classify":
        a = _sit(v, p)[0]
        if a == Rational(1, 2):
            raise ValueError("p is 1/2 here")
        return UNEQUAL
    if ask == "count":
        return Integer(sum(1 for (a, _, F, T, C) in _sits(p) if _verdict(F, T, C) == BERNOULLI and a == Rational(1, 2)))
    if ask == "np":
        if _p(v) == Rational(1, 2):
            raise ValueError("p is 1/2 here")
        return Tuple(v["n"], Rational(1, 2))
    raise ValueError(ask)


def m3(v, p):
    """A trial with more than two raw results (a die's six faces) can't be a Bernoulli trial."""
    ask = p["ask"]
    if ask == "classify":
        _, k, F, T, C = _sit(v, p)
        if T == 0 or k <= 2:
            raise ValueError("no grouped results here")
        return MANY
    if ask == "count":
        return Integer(sum(1 for (_, k, F, T, C) in _sits(p) if _verdict(F, T, C) == BERNOULLI and k == 2))
    raise ValueError("not a Bernoulli check")


def m4(v, p):
    """Repeating until something happens still gives Bernoulli trials: ignores a fixed n."""
    if p["ask"] != "classify":
        raise ValueError("not a single-situation check")
    _, _, F, T, C = _sit(v, p)
    if F != 0:
        raise ValueError("n is fixed here, so this belief gives the key")
    return _verdict(F, T, C, check_F=False)


def m5(v, p):
    """n is the number of results (objects, faces, choices) of one trial, not the number of trials."""
    if p["ask"] != "np":
        raise ValueError("not an n and p item")
    if v["tot"] == v["n"]:
        raise ValueError("tot equals n here")
    return Tuple(v["tot"], _p(v))


def m6(v, p):
    """Takes q, the chance of failure, as p."""
    if p["ask"] != "np":
        raise ValueError("not an n and p item")
    return Tuple(v["n"], 1 - _p(v))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
