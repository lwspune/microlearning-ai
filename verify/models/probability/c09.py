"""C09 Independent events: answer models (the key, and one per misconception).

n independent events (people solving, shooters hitting, balls drawn from separate bags).
Inputs give each event's chance, either as probabilities p1, p2, ... or as odds a1 : b1, a2 : b2, ...
with params["odds"] a list saying "for" or "against" for each event.
params["ask"] picks the event asked about, by how many of the n events happen:
  "none" (0 happen), "atleast1" (1 or more), "exactly1", "exactly2".
"""
from itertools import combinations, product
from math import prod

from sympy import Rational


def _probs(v, p, ignore_against=False):
    """Each event's probability, from p1, p2, ... or from odds a_i : b_i."""
    if "p1" in v:
        return [Rational(v[f"p{i}"]) for i in range(1, len([k for k in v if k.startswith("p")]) + 1)]
    out = []
    for i, side in enumerate(p["odds"], start=1):
        a, b = Rational(v[f"a{i}"]), Rational(v[f"b{i}"])
        favour = side == "for" or ignore_against
        out.append(a / (a + b) if favour else b / (a + b))
    return out


def _wanted(ask, k, n):
    """Whether k events happening (out of n) is the event asked about."""
    return {"none": k == 0, "atleast1": k >= 1, "exactly1": k == 1, "exactly2": k == 2}[ask]


def _chance(ps, ask):
    """Lists every happen/fail pattern of the events, multiplies along it (independence) and adds the patterns asked for."""
    total = Rational(0)
    for pattern in product([True, False], repeat=len(ps)):
        if _wanted(ask, sum(pattern), len(ps)):
            total += prod((q if happens else 1 - q) for q, happens in zip(ps, pattern))
    return total


def key(v, p):
    return _chance(_probs(v, p), p["ask"])


def m1(v, p):
    """Takes 'not all of them' for 'none' (and for 'at least one', 'exactly one'): 1 - P(A)P(B)."""
    if p["ask"] not in ("none", "atleast1", "exactly1"):
        raise ValueError("no 'not both' reading of this event")
    return 1 - prod(_probs(v, p))


def m2(v, p):
    """Adds the chances as if the events were mutually exclusive: at least one = sum, none = 1 - sum."""
    s = sum(_probs(v, p))
    if p["ask"] == "atleast1":
        return s
    if p["ask"] == "none":
        return 1 - s
    raise ValueError("adding applies to 'at least one' and 'none'")


def m3(v, p):
    """For 'exactly k', multiplies only the k that happen and forgets the others must fail."""
    if not p["ask"].startswith("exactly"):
        raise ValueError("only for 'exactly k'")
    k = int(p["ask"][-1])
    return sum(prod(c) for c in combinations(_probs(v, p), k))


def m4(v, p):
    """Answers the opposite event: stops at P(none) for 'at least one', and so on (1 - the answer)."""
    return 1 - _chance(_probs(v, p), p["ask"])


def m5(v, p):
    """Reads odds against a : b as if they were odds in favour, then works correctly."""
    if "p1" in v or "against" not in p["odds"]:
        raise ValueError("needs odds against")
    return _chance(_probs(v, p, ignore_against=True), p["ask"])


def m6(v, p):
    """Reads 'exactly k' as 'at least k': counts the cases where more of them happen too."""
    if not p["ask"].startswith("exactly"):
        raise ValueError("only for 'exactly k'")
    k = int(p["ask"][-1])
    ps = _probs(v, p)
    total = Rational(0)
    for pattern in product([True, False], repeat=len(ps)):
        if sum(pattern) >= k:
            total += prod((q if h else 1 - q) for q, h in zip(ps, pattern))
    return total


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
