"""C07 The median: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  raw    the observations v["xs"] (a tuple, in the order printed) -> the median
  part   v["a"] * (median of the first v["k"] of v["xs"]) + v["b"] * (median of the last v["k"])
  disc   values v["xs"] with frequencies v["fs"] -> the median
  grp    classes of width v["h"] starting at v["lo"], frequencies v["fs"] -> the median
"""
from sympy import Rational


def _ask(p):
    return p.get("ask", "raw")


def _nums(t):
    """Exact rationals, also for decimals that sympify turned into floats."""
    return [Rational(str(x)) for x in t]


def _mid(xs):
    """The middle of a list as it stands: one value (odd n) or the mean of two (even n)."""
    n = len(xs)
    if n % 2:
        return xs[n // 2]
    return (xs[n // 2 - 1] + xs[n // 2]) / 2


def _median(xs):
    """From the definition: sort, then take the middle."""
    return _mid(sorted(xs))


def _mean(xs):
    return sum(xs) / len(xs)


def _parts(v):
    xs, k = _nums(v["xs"]), int(v["k"])
    return xs[:k], xs[-k:]


def _combine(v, f):
    first, last = _parts(v)
    return v["a"] * f(first) + v["b"] * f(last)


def _expand(v):
    """The frequency table written out as raw data."""
    return [x for x, f in zip(_nums(v["xs"]), _nums(v["fs"])) for _ in range(int(f))]


def _classes(v):
    lo, h, fs = Rational(str(v["lo"])), Rational(str(v["h"])), _nums(v["fs"])
    return lo, h, fs


def _ogive_at(v, target):
    """Walks the cumulative-frequency polygon (class boundaries, c.f.) to the height target."""
    lo, h, fs = _classes(v)
    cf = 0
    for i, f in enumerate(fs):
        if cf + f >= target:
            return lo + i * h + (target - cf) / f * h
        cf += f
    raise ValueError("target above N")


def key(v, p):
    a = _ask(p)
    if a == "raw":
        return _median(_nums(v["xs"]))
    if a == "part":
        return _combine(v, _median)
    if a == "disc":
        return _median(_expand(v))
    if a == "grp":
        return _ogive_at(v, sum(_classes(v)[2]) / 2)
    raise ValueError(a)


def m1(v, p):
    """Reads the middle of the list as printed, without sorting it first."""
    a = _ask(p)
    if a == "raw":
        return _mid(_nums(v["xs"]))
    if a == "part":
        return _combine(v, _mid)
    raise ValueError("only for raw observations")


def m2(v, p):
    """With an even count, takes one middle value (the (n/2)-th) instead of averaging the two."""
    if _ask(p) != "raw":
        raise ValueError("only for raw observations")
    xs = sorted(_nums(v["xs"]))
    if len(xs) % 2:
        raise ValueError("needs an even count")
    return xs[len(xs) // 2 - 1]


def m3(v, p):
    """Works out the mean instead of the median (class marks as values for grouped data)."""
    a = _ask(p)
    if a == "raw":
        return _mean(_nums(v["xs"]))
    if a == "part":
        return _combine(v, _mean)
    if a == "disc":
        return _mean(_expand(v))
    if a == "grp":
        lo, h, fs = _classes(v)
        marks = [lo + i * h + h / 2 for i in range(len(fs))]
        return sum(m * f for m, f in zip(marks, fs)) / sum(fs)
    raise ValueError(a)


def m4(v, p):
    """Ignores the frequencies: takes the median of the listed values (class marks for classes)."""
    a = _ask(p)
    if a == "disc":
        return _median(_nums(v["xs"]))
    if a == "grp":
        lo, h, fs = _classes(v)
        return _median([lo + i * h + h / 2 for i in range(len(fs))])
    raise ValueError("only for frequency tables")


def m5(v, p):
    """Grouped formula with cf taken up to and including the median class, not the classes before it."""
    if _ask(p) != "grp":
        raise ValueError("only for grouped data")
    lo, h, fs = _classes(v)
    half = sum(fs) / 2
    cf = 0
    for i, f in enumerate(fs):
        if cf + f >= half:
            return lo + i * h + (half - (cf + f)) / f * h
        cf += f
    raise ValueError("no median class")


def m6(v, p):
    """Gives the median's position ((n + 1)/2, or N/2 in the grouped formula) instead of the value there."""
    a = _ask(p)
    if a == "raw":
        return Rational(len(v["xs"]) + 1, 2)
    if a == "part":
        pos = Rational(int(v["k"]) + 1, 2)
        return v["a"] * pos + v["b"] * pos
    if a == "disc":
        return (sum(_nums(v["fs"])) + 1) / 2
    if a == "grp":
        return sum(_classes(v)[2]) / 2
    raise ValueError(a)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
