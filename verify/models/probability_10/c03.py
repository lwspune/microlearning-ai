"""C03 Probability of an event: answer models (the key, and one per misconception).

Every item names what it asks in params["ask"]:
  prob    P(A) for a one-stage experiment, built from params["exp"]:
            numbers  tickets / die faces numbered lo..hi (inputs lo, hi); the event is params["cond"]:
                     "lt" (less than input k) or "square" (a perfect square)
            bag      objects in kinds: params["kinds"] = "red,blue,green", inputs c1, c2, c3 the counts,
                     params["pick"] the kind asked for
            word     one card per letter of params["word"]; params["pick"] the letter asked for
  nS      n(S), given n(A) (input a) and P(A) (input p)
  range   the interval in which P(A) always lies

The key lists every outcome and counts: P(A) = n(A) / n(S).
"""
from sympy import Integer, Interval, Rational, oo, sqrt


def _outcomes(v, p):
    """(every outcome, the favourable ones) for a prob item."""
    exp = p["exp"]
    if exp == "numbers":
        s = list(range(int(v["lo"]), int(v["hi"]) + 1))
        cond = p["cond"]
        if cond == "lt":
            a = [x for x in s if x < int(v["k"])]
        elif cond == "square":
            a = [x for x in s if x >= 0 and int(sqrt(x)) ** 2 == x]
        else:
            raise ValueError(cond)
        return s, a
    if exp == "bag":
        kinds = p["kinds"].split(",")
        s = [k for i, k in enumerate(kinds) for _ in range(int(v[f"c{i + 1}"]))]
        return s, [x for x in s if x == p["pick"]]
    if exp == "word":
        s = list(p["word"])
        return s, [x for x in s if x == p["pick"]]
    raise ValueError(exp)


def _counts(v, p):
    s, a = _outcomes(v, p)
    return Integer(len(s)), Integer(len(a))


def key(v, p):
    ask = p["ask"]
    if ask == "prob":
        n_s, n_a = _counts(v, p)
        return n_a / n_s
    if ask == "nS":
        return v["a"] / v["p"]
    if ask == "range":
        return Interval(0, 1)
    raise ValueError(ask)


def m1(v, p):
    """Writes the fraction upside down: P(A) = n(S) / n(A)."""
    ask = p["ask"]
    if ask == "prob":
        n_s, n_a = _counts(v, p)
        if n_a == 0:
            raise ValueError("n(A) = 0")
        return n_s / n_a
    if ask == "nS":
        return v["p"] * v["a"]          # from P(A) = n(S) / n(A)
    if ask == "range":
        return Interval(1, oo)          # n(S) / n(A) is never below 1
    raise ValueError(ask)


def m2(v, p):
    """Compares favourable with unfavourable: P(A) = n(A) / (n(S) - n(A))."""
    ask = p["ask"]
    if ask == "prob":
        n_s, n_a = _counts(v, p)
        if n_s == n_a:
            raise ValueError("no unfavourable outcome")
        return n_a / (n_s - n_a)
    if ask == "nS":
        return v["a"] / v["p"] + v["a"]  # n(S) - n(A) = n(A) / P(A)
    if ask == "range":
        return Interval(0, oo)          # n(A) / (n(S) - n(A)) has no upper limit
    raise ValueError(ask)


def m3(v, p):
    """Counts each kind (colour, letter) as one outcome: P(A) = 1 / number of kinds."""
    if p["ask"] != "prob" or p["exp"] == "numbers":
        raise ValueError("only for objects that come in kinds")
    s, _ = _outcomes(v, p)
    if len(set(s)) == len(s):
        raise ValueError("every kind is one object")
    return Rational(1, len(set(s)))


def m4(v, p):
    """Takes the event to be one outcome: P(A) = 1 / n(S), so n(S) = 1 / P(A)."""
    ask = p["ask"]
    if ask == "prob":
        n_s, _ = _counts(v, p)
        return 1 / n_s
    if ask == "nS":
        return 1 / v["p"]
    raise ValueError(ask)


def m5(v, p):
    """Leaves out the impossible and the sure event: 0 < P(A) < 1."""
    if p["ask"] != "range":
        raise ValueError("range items only")
    return Interval.open(0, 1)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
