"""C06 Histogram: answer models (the key, and one per misconception).

Inputs: lower limits v["lo"], upper limits v["hi"] (as printed, inclusive or continuous),
frequencies v["f"] (one may hold the unknown x, fixed by the total v["N"]), and the class
index v["k"] (0-based) the question is about.

params["ask"] picks the question type:
  cls      the continuous class the bar of class k stands on -> Interval
  tallest  the continuous class the tallest bar stands on -> Interval
  draw     the height of the bar drawn over class k (from a table)
  read     the number of values in class k, read off a drawn histogram
  below    the number of values less than the upper limit of class k, read off a histogram

The key works from the definition: a bar stands on its continuous class (the gap between
classes split in half) and is as tall as the class's frequency.
"""
from sympy import Interval, Rational, solve, sympify


def _ask(p, *allowed):
    a = p.get("ask")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _freqs(v):
    """The frequencies, with an unknown fixed by the total N."""
    fs = [sympify(f) for f in v["f"]]
    syms = set().union(*(f.free_symbols for f in fs))
    if not syms:
        return fs
    if len(syms) != 1 or "N" not in v:
        raise ValueError("an unknown frequency needs one symbol and the total N")
    s = syms.pop()
    roots = [r for r in solve(sum(fs) - v["N"], s) if r.is_positive]
    if len(roots) != 1:
        raise ValueError(f"no single positive unknown: {roots}")
    return [f.subs(s, roots[0]) for f in fs]


def _gap(v):
    lo, hi = [Rational(a) for a in v["lo"]], [Rational(b) for b in v["hi"]]
    return lo[1] - hi[0]


def _limits(v, k):
    return Rational(v["lo"][k]), Rational(v["hi"][k])


def _continuous(v, k):
    a, b = _limits(v, k)
    g = _gap(v)
    return Interval(a - g / 2, b + g / 2)


def _width(v, k):
    """Width of a continuous class (all classes are equal here)."""
    c = _continuous(v, k)
    return c.end - c.start


def _k(v):
    return int(v["k"])


def _argmax(xs):
    m = max(xs)
    idx = [i for i, x in enumerate(xs) if x == m]
    if len(idx) != 1:
        raise ValueError("no single tallest bar")
    return idx[0]


def key(v, p):
    a = _ask(p, "cls", "tallest", "draw", "read", "below")
    fs = _freqs(v)
    if a == "cls":
        return _continuous(v, _k(v))
    if a == "tallest":
        return _continuous(v, _argmax(fs))
    if a in ("draw", "read"):
        return fs[_k(v)]
    return sum(fs[: _k(v) + 1])


def m1(v, p):
    """Keeps the printed (inclusive) limits: the bars stand on them, with gaps between."""
    a = _ask(p, "cls", "tallest")
    if _gap(v) == 0:
        raise ValueError("classes already continuous")
    k = _k(v) if a == "cls" else _argmax(_freqs(v))
    return Interval(*_limits(v, k))


def m2(v, p):
    """Closes the gap from one side: each lower limit drops to the previous upper limit."""
    a = _ask(p, "cls", "tallest")
    if _gap(v) == 0:
        raise ValueError("classes already continuous")
    k = _k(v) if a == "cls" else _argmax(_freqs(v))
    lo, hi = _limits(v, k)
    return Interval(lo - _gap(v), hi)


def m3(v, p):
    """Subtracts half the gap from both limits, so the class slides down instead of widening."""
    a = _ask(p, "cls", "tallest")
    if _gap(v) == 0:
        raise ValueError("classes already continuous")
    k = _k(v) if a == "cls" else _argmax(_freqs(v))
    lo, hi = _limits(v, k)
    g = _gap(v)
    return Interval(lo - g / 2, hi - g / 2)


def m4(v, p):
    """Takes a bar's area (height x class width) as the number of values in it."""
    a = _ask(p, "draw", "read", "below")
    fs, k = _freqs(v), _k(v)
    w = _width(v, k)
    if a == "draw":
        return fs[k] / w
    if a == "read":
        return fs[k] * w
    return sum(f * _width(v, j) for j, f in enumerate(fs[: k + 1]))


def m5(v, p):
    """Mixes up frequency and cumulative frequency: draws bars as running totals, or reads them as such."""
    a = _ask(p, "tallest", "draw", "read", "below")
    fs = _freqs(v)
    if a == "tallest":
        return _continuous(v, len(fs) - 1)  # running totals grow, so the last bar is tallest
    k = _k(v)
    if a == "draw":
        return sum(fs[: k + 1])
    if a == "read":
        if k == 0:
            raise ValueError("the first bar reads the same either way")
        return fs[k] - fs[k - 1]
    return fs[k]


def m6(v, p):
    """Takes the neighbouring bar: the one that starts at the class's upper limit."""
    a = _ask(p, "draw", "read", "below")
    fs, k = _freqs(v), _k(v)
    if k + 1 >= len(fs):
        raise ValueError("no next class")
    if a in ("draw", "read"):
        return fs[k + 1]
    return sum(fs[: k + 2])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
