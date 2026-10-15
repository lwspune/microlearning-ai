"""C04 Complement and odds: answer models (the key, and one per misconception).

Every item is about one event A in a finite sample space of equally likely outcomes.
params["kind"] says how n(A) and n(S) come from the inputs:
  count   - inputs m = n(A), n = n(S), counted in the stem's own list
  square  - inputs n: tickets 1..n, A = "the number is a perfect square"
  atleast - inputs N, G, r: r things drawn at random from N, of which G are of the kind
            asked about; A = "at least one of that kind is drawn"
params["ask"] says what the item asks for:
  prob    - P(A)
  favour  - the odds in favour of A, n(A) : n(A'), as the Rational n(A)/n(A')
  against - the odds against A, n(A') : n(A), as the Rational n(A')/n(A)
"""
from math import comb, isqrt

from sympy import Rational


def _counts(v, p):
    """(n(A), n(S)), counted straight from the definition of the event."""
    kind = p["kind"]
    if kind == "count":
        return int(v["m"]), int(v["n"])
    if kind == "square":
        n = int(v["n"])
        return sum(1 for k in range(1, n + 1) if isqrt(k) ** 2 == k), n
    if kind == "atleast":
        N, G, r = int(v["N"]), int(v["G"]), int(v["r"])
        # Add up the draws with exactly k of the kind, k = 1..r (no complement used).
        return sum(comb(G, k) * comb(N - G, r - k) for k in range(1, r + 1)), comb(N, r)
    raise ValueError(f"unknown kind {kind}")


def _answer(fav, total, ask):
    if ask == "prob":
        return Rational(fav, total)
    if ask == "favour":
        return Rational(fav, total - fav)
    if ask == "against":
        return Rational(total - fav, fav)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    fav, total = _counts(v, p)
    return _answer(fav, total, p["ask"])


def m1(v, p):
    """Odds take the total: in favour n(A) : n(S), against n(S) : n(A) ('1 in 5' read as '5 to 1 against')."""
    fav, total = _counts(v, p)
    if p["ask"] == "favour":
        return Rational(fav, total)
    if p["ask"] == "against":
        return Rational(total, fav)
    raise ValueError("M1 is about odds")


def m2(v, p):
    """Odds in favour and odds against swapped."""
    fav, total = _counts(v, p)
    if p["ask"] == "favour":
        return Rational(total - fav, fav)
    if p["ask"] == "against":
        return Rational(fav, total - fav)
    raise ValueError("M2 is about odds")


def m3(v, p):
    """The complement of 'at least one' taken as 'all': n(A) = n(S) - (draws with all r of the kind)."""
    if p["kind"] != "atleast":
        raise ValueError("M3 needs an 'at least one' event")
    N, G, r = int(v["N"]), int(v["G"]), int(v["r"])
    if comb(G, r) == 0:
        raise ValueError("'all of the kind' is impossible here, so M3 gives no wrong answer")
    total = comb(N, r)
    return _answer(total - comb(G, r), total, p["ask"])


def m4(v, p):
    """Odds against read as the probability of failure: n(A') : n(S)."""
    if p["ask"] != "against":
        raise ValueError("M4 is about odds against")
    fav, total = _counts(v, p)
    return Rational(total - fav, total)


def m5(v, p):
    """Stops at P(none): forgets the 1 - P(none) step."""
    if p["kind"] != "atleast" or p["ask"] != "prob":
        raise ValueError("M5 needs a probability of 'at least one' (on odds it agrees with M2)")
    N, G, r = int(v["N"]), int(v["G"]), int(v["r"])
    return Rational(comb(N - G, r), comb(N, r))


def m6(v, p):
    """'At least one' read as 'exactly one'."""
    if p["kind"] != "atleast":
        raise ValueError("M6 needs an 'at least one' event")
    N, G, r = int(v["N"]), int(v["G"]), int(v["r"])
    total = comb(N, r)
    return _answer(G * comb(N - G, r - 1), total, p["ask"])


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
