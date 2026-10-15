"""C06 Addition for three events: answer models (the key, and one per misconception).

params["type"] picks the question:
  prob  inputs a, b, c = P(A), P(B), P(C); ab, bc, ca = P(A ∩ B), P(B ∩ C), P(C ∩ A);
        abc = P(A ∩ B ∩ C). params["ask"]: "union" (at least one) or "none" (none of the three).
  div   a number drawn at random from 1 to N; inputs N, d1, d2, d3. The probability that it is
        divisible by d1 or d2 or d3.
  odds  A, B, C: one of them must happen and only one can. Inputs a1, b1 (the odds for A are
        a1 : b1) and a2, b2 (for B); params["A"], params["B"] = "against" | "for" say which way
        each is given. params["ask"] = "against" | "for": the odds asked for C, returned as the
        Rational p/q for "p : q".
"""
from functools import reduce
from math import lcm

from sympy import Rational


def _p(a, b, way):
    """P(E) from odds a : b given in favour of ("for") or against E."""
    return Rational(a, a + b) if way == "for" else Rational(b, a + b)


def _ask(u, p):
    """The asked probability from P(A ∪ B ∪ C)."""
    out = 1 - u if p.get("ask") == "none" else u
    if not 0 <= out <= 1:
        raise ValueError(f"gives {out}, not a probability")
    return out


def _terms(v, p):
    """(sum of singles, sum of pairs, triple) as probabilities, for prob and div items."""
    if p["type"] == "prob":
        return v["a"] + v["b"] + v["c"], v["ab"] + v["bc"] + v["ca"], v["abc"]
    if p["type"] == "div":
        n, ds = int(v["N"]), [int(v["d1"]), int(v["d2"]), int(v["d3"])]
        cnt = lambda *k: n // reduce(lcm, k)
        s = cnt(ds[0]) + cnt(ds[1]) + cnt(ds[2])
        pr = cnt(ds[0], ds[1]) + cnt(ds[1], ds[2]) + cnt(ds[2], ds[0])
        return Rational(s, n), Rational(pr, n), Rational(cnt(*ds), n)
    raise ValueError("needs overlapping events")


def _odds_out(pc, p):
    if not 0 < pc < 1:
        raise ValueError(f"P(C) = {pc}")
    return (1 - pc) / pc if p["ask"] == "against" else pc / (1 - pc)


def _pc(v, p, flip_against=False):
    a1, b1, a2, b2 = (int(v[k]) for k in ("a1", "b1", "a2", "b2"))
    wa, wb = p["A"], p["B"]
    if flip_against:
        if "against" not in (wa, wb):
            raise ValueError("no odds against given")
        wa, wb = "for", "for"  # reads every odds as in favour: P = a/(a + b)
    return 1 - _p(a1, b1, wa) - _p(a2, b2, wb)


def key(v, p):
    """From the definitions: add up the eight Venn regions, count the numbers one by one, or use
    P(A) + P(B) + P(C) = P(S) = 1 for events of which exactly one happens."""
    t = p["type"]
    if t == "prob":
        x = v["abc"]
        ab, bc, ca = v["ab"] - x, v["bc"] - x, v["ca"] - x
        a, b, c = v["a"] - ab - ca - x, v["b"] - ab - bc - x, v["c"] - bc - ca - x
        cells = [a, b, c, ab, bc, ca, x]
        if any(r < 0 for r in cells):
            raise ValueError("inconsistent data")
        return _ask(sum(cells), p)
    if t == "div":
        n, ds = int(v["N"]), [int(v["d1"]), int(v["d2"]), int(v["d3"])]
        return Rational(sum(1 for k in range(1, n + 1) if any(k % d == 0 for d in ds)), n)
    return _odds_out(_pc(v, p), p)


def m1(v, p):
    """Forgets to add back the triple: P(A) + P(B) + P(C) − (pairs)."""
    s, pr, _ = _terms(v, p)
    return _ask(s - pr, p)


def m2(v, p):
    """Just adds the three, as if the events could not happen together."""
    s, _, _ = _terms(v, p)
    return _ask(s, p)


def m3(v, p):
    """Subtracts the triple along with the pairs: (singles) − (pairs) − P(A ∩ B ∩ C)."""
    s, pr, x = _terms(v, p)
    return _ask(s - pr - x, p)


def m4(v, p):
    """Gives the odds the wrong way round: P(C) : P(C') for odds against, and the reverse."""
    if p["type"] != "odds":
        raise ValueError("no odds asked")
    return 1 / _odds_out(_pc(v, p), p)


def m5(v, p):
    """Turns odds against a : b into P = a/(a + b), the rule for odds in favour."""
    if p["type"] != "odds":
        raise ValueError("no odds given")
    return _odds_out(_pc(v, p, flip_against=True), p)


def m6(v, p):
    """Writes odds as part : whole: odds against C as P(C') : 1, odds in favour as P(C) : 1."""
    if p["type"] != "odds":
        raise ValueError("no odds asked")
    pc = _pc(v, p)
    if not 0 < pc < 1:
        raise ValueError(f"P(C) = {pc}")
    return 1 - pc if p["ask"] == "against" else pc


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
