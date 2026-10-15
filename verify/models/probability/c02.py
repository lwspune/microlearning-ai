"""C02 Probability of an event: answer models (the key, and one per misconception).

params["kind"]:
  dice2   two fair dice. params["event"]: sum_eq (sum = k), sum_ge (sum >= k), prod_odd. Input k.
  bag     one ball from a bag. Inputs r, u, b (red, blue, black); params["event"]: colours, e.g. "blue,black".
  leap    a year of n days picked at random; event: 53 Sundays. Input n (366 for a leap year).
  loaded  a die with P(face j) proportional to j; event: an odd number. No inputs.
"""
from fractions import Fraction

from sympy import Rational

FACES = range(1, 7)
COLOURS = ("red", "blue", "black")


def _dice_event(p, k):
    ev = p["event"]
    if ev == "sum_eq":
        return lambda a, b: a + b == k
    if ev == "sum_ge":
        return lambda a, b: a + b >= k
    if ev == "prod_odd":
        return lambda a, b: (a * b) % 2 == 1
    raise ValueError(f"no event {ev}")


def _counts(v, p):
    """(n(A), n(S)) straight from listing the equally likely outcomes."""
    kind = p["kind"]
    if kind == "dice2":
        hit = _dice_event(p, int(v.get("k", 0)))
        pairs = [(a, b) for a in FACES for b in FACES]
        return sum(1 for a, b in pairs if hit(a, b)), len(pairs)
    if kind == "bag":
        n = {"red": int(v["r"]), "blue": int(v["u"]), "black": int(v["b"])}
        want = p["event"].split(",")
        return sum(n[c] for c in want), sum(n.values())
    if kind == "leap":
        days = int(v["n"])
        # The year starts on each weekday equally often; day d of the year (0-based) falls on (start + d) % 7.
        # Sunday = 0. Count the starts that give 53 Sundays.
        good = sum(1 for s in range(7) if sum(1 for d in range(days) if (s + d) % 7 == 0) == 53)
        return good, 7
    raise ValueError(f"no counts for {kind}")


def key(v, p):
    if p["kind"] == "loaded":
        w = {j: Fraction(j) for j in FACES}
        total = sum(w.values())
        return Rational(sum(w[j] for j in FACES if j % 2) / total)
    a, s = _counts(v, p)
    return Rational(a, s)


def m1(v, p):
    """Lists outcomes that are not equally likely and counts each as one: two dice as unordered pairs,
    balls by colour, a year as '52 or 53 Sundays', a loaded die as fair."""
    kind = p["kind"]
    if kind == "dice2":
        hit = _dice_event(p, int(v.get("k", 0)))
        pairs = [(a, b) for a in FACES for b in FACES if a <= b]
        return Rational(sum(1 for a, b in pairs if hit(a, b)), len(pairs))
    if kind == "bag":
        return Rational(len(p["event"].split(",")), len(COLOURS))
    if kind == "leap":
        return Rational(1, 2)  # 52 Sundays or 53 Sundays
    if kind == "loaded":
        return Rational(sum(1 for j in FACES if j % 2), 6)
    raise ValueError(kind)


def m2(v, p):
    """Favourable over unfavourable: n(A) / (n(S) - n(A)), which is the odds, not the probability."""
    if p["kind"] == "loaded":
        odd = sum(j for j in FACES if j % 2)
        return Rational(odd, sum(FACES) - odd)
    a, s = _counts(v, p)
    return Rational(a, s - a)


def m3(v, p):
    """Two dice give 6 + 6 = 12 outcomes; a 'this on one die and that on the other' count is added too."""
    if p["kind"] != "dice2":
        raise ValueError("only for two dice")
    if p["event"] == "prod_odd":
        return Rational(3 + 3, 12)  # odd on the first (3) + odd on the second (3)
    a, _ = _counts(v, p)
    return Rational(a, 12)


def m4(v, p):
    """Reads 'at least k' as 'more than k', leaving out the boundary value."""
    if p.get("event") != "sum_ge":
        raise ValueError("no 'at least' in the question")
    k = int(v["k"])
    hits = sum(1 for a in FACES for b in FACES if a + b > k)
    return Rational(hits, 36)


def m5(v, p):
    """Answers with the complement: counts the outcomes where the event fails."""
    if p["kind"] == "loaded":
        raise ValueError("not used")
    a, s = _counts(v, p)
    return Rational(s - a, s)


def m6(v, p):
    """'Proportional to j' read as P(j) = j/6, never checking that the six probabilities total 1."""
    if p["kind"] != "loaded":
        raise ValueError("only for a loaded die")
    return Rational(sum(j for j in FACES if j % 2), 6)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
