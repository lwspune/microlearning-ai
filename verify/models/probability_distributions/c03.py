"""C03 Writing a probability distribution: answer models (the key, and one per misconception).

X counts the "successes" in an experiment, params["kind"]:

"trials": n independent trials (tosses of a coin or a die); inputs n and either p (the chance of a
  success on one trial) or ratio (one face is `ratio` times as likely as the other; params["succ"] is
  "minor" when the success is the less likely face, "major" when it is the more likely one).
"draw": n balls drawn one after another from a bag of a special balls and b others;
  params["replace"] is "yes" (each ball put back) or "no" (kept out, the same as drawing together).
  X is the number of special balls drawn.

Input x present: the answer is P(X = x). Absent: the whole table, Tuple(P(X = 0), ..., P(X = n)).
"""
from itertools import permutations, product
from math import comb

from sympy import Rational, Tuple


def _p(v, p):
    """The chance of a success on one trial."""
    if "p" in v:
        return Rational(v["p"])
    r = Rational(v["ratio"])
    minor = 1 / (r + 1)
    return minor if p["succ"] == "minor" else 1 - minor


def _xs(v):
    return [int(v["x"])] if "x" in v else list(range(int(v["n"]) + 1))


def _out(v, vals):
    return vals[0] if "x" in v else Tuple(*vals)


def _trials_dist(n, q_succ):
    """P(X = x) for x = 0..n, summing the chance of every sequence of successes (1) and failures (0)."""
    out = [Rational(0)] * (n + 1)
    for seq in product((1, 0), repeat=n):
        w = Rational(1)
        for s in seq:
            w *= q_succ if s else 1 - q_succ
        out[sum(seq)] += w
    return out


def _draw_dist(a, b, n, replace):
    """P(X = x) for x = 0..n, listing every ordered draw of labelled balls (all equally likely)."""
    balls = [1] * a + [0] * b
    idx = range(a + b)
    draws = product(idx, repeat=n) if replace else permutations(idx, n)
    counts = [0] * (n + 1)
    total = 0
    for d in draws:
        total += 1
        counts[sum(balls[i] for i in d)] += 1
    return [Rational(c, total) for c in counts]


def _dist(v, p, replace=None):
    n = int(v["n"])
    if p["kind"] == "trials":
        return _trials_dist(n, _p(v, p))
    rep = (p["replace"] == "yes") if replace is None else replace
    return _draw_dist(int(v["a"]), int(v["b"]), n, rep)


def key(v, p):
    d = _dist(v, p)
    return _out(v, [d[x] for x in _xs(v)])


def m1(v, p):
    """Every value of X equally likely: 1 / (number of values X can take)."""
    d = _dist(v, p)
    k = sum(1 for t in d if t != 0)
    return _out(v, [Rational(1, k) if d[x] != 0 else Rational(0) for x in _xs(v)])


def m2(v, p):
    """One order only (HT but not TH): the key divided by nCx, the number of orders."""
    n, d = int(v["n"]), _dist(v, p)
    return _out(v, [d[x] / comb(n, x) for x in _xs(v)])


def m3(v, p):
    """The wrong draw scheme: draws without replacement worked as if each ball were put back, or the reverse."""
    if p["kind"] != "draw":
        raise ValueError("only for draws from a bag")
    d = _dist(v, p, replace=p["replace"] != "yes")
    return _out(v, [d[x] for x in _xs(v)])


def m4(v, p):
    """Successes only: counts the ways to get the x successes but drops the factor for the rest
    failing. Trials or draws with replacement: nCx p^x. Draws without replacement: aCx / NCn."""
    n = int(v["n"])
    if p["kind"] == "draw" and p["replace"] == "no":
        a, b = int(v["a"]), int(v["b"])
        return _out(v, [Rational(comb(a, x), comb(a + b, n)) for x in _xs(v)])
    s = _p(v, p) if p["kind"] == "trials" else Rational(int(v["a"]), int(v["a"]) + int(v["b"]))
    return _out(v, [comb(n, x) * s**x for x in _xs(v)])


def m5(v, p):
    """Reads "r times as likely" as a chance of 1/r for the less likely face (the other gets 1 - 1/r)."""
    if p["kind"] != "trials" or "ratio" not in v:
        raise ValueError("only when one face is r times as likely as the other")
    r = Rational(v["ratio"])
    minor = 1 / r
    s = minor if p["succ"] == "minor" else 1 - minor
    d = _trials_dist(int(v["n"]), s)
    return _out(v, [d[x] for x in _xs(v)])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
