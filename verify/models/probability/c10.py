"""C10 Total probability and Bayes' theorem: answer models (the key, and one per misconception).

Inputs: pri = (P(E_1), ..., P(E_n)), the causes' chances (mutually exclusive, exhaustive);
either lik = (P(A | E_1), ..., P(A | E_n)), or, for bags and jars, fav and tot: the counts of
favourable balls and of all balls in each bag (so P(A | E_j) = fav_j / tot_j); k = the cause
asked about (1-based). p["ask"]: "total" for P(A), "post" for P(E_k | A).
"""
from sympy import Rational


def _pri(v):
    return [Rational(x) for x in v["pri"]]


def _lik(v):
    if "lik" in v:
        return [Rational(x) for x in v["lik"]]
    return [Rational(f) / Rational(t) for f, t in zip(v["fav"], v["tot"])]


def _k(v):
    return int(v["k"]) - 1


def _joint(v):
    """P(E_j and A) for each cause: the multiplication theorem."""
    return [e * a for e, a in zip(_pri(v), _lik(v))]


def _post_only(p):
    if p["ask"] != "post":
        raise ValueError("only for a question asking P(E_k | A)")


def key(v, p):
    # A happens through exactly one cause, so P(A) adds the pieces P(E_j and A);
    # P(E_k | A) is the share of P(A) that came through E_k (the definition of conditional probability).
    joint = _joint(v)
    total = sum(joint)
    if p["ask"] == "total":
        return total
    return joint[_k(v)] / total


def m1(v, p):
    """Swaps the condition: gives P(A | E_k) for P(E_k | A)."""
    _post_only(p)
    return _lik(v)[_k(v)]


def m2(v, p):
    """Drops the priors: uses P(A | E_j) wherever the formula has P(E_j) P(A | E_j)."""
    lik = _lik(v)
    if p["ask"] == "total":
        return sum(lik)
    if len(set(_pri(v))) == 1:
        raise ValueError("with equal priors, dropping them gives the key")
    return lik[_k(v)] / sum(lik)


def m3(v, p):
    """Stops at the numerator: gives P(E_k and A) = P(E_k) P(A | E_k) for P(E_k | A)."""
    _post_only(p)
    return _joint(v)[_k(v)]


def m4(v, p):
    """Pools the bags: treats every ball in every bag as equally likely to be drawn."""
    if "fav" not in v:
        raise ValueError("only for balls drawn from bags")
    fav, tot = [Rational(x) for x in v["fav"]], [Rational(x) for x in v["tot"]]
    if p["ask"] == "total":
        return sum(fav) / sum(tot)
    return fav[_k(v)] / sum(fav)


def m5(v, p):
    """Counts one route only: gives P(E_k) P(A | E_k) for P(A)."""
    if p["ask"] != "total":
        raise ValueError("only for a question asking P(A)")
    return _joint(v)[_k(v)]


def m6(v, p):
    """Stops at the denominator: gives P(A) for P(E_k | A)."""
    _post_only(p)
    return sum(_joint(v))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
