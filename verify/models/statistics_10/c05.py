"""C05 Mode of grouped data: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  formula  the mode from given v["L"], v["f1"], v["f0"], v["f2"], v["h"]
  table    the mode of a grouped table: lower limits v["lo"], upper limits v["hi"], frequencies v["f"]
           (classes may have gaps, like 1-3, 4-6; the key makes them continuous first)

The key works from the book's definition: the modal class is the class with the highest
frequency; L is its (continuous) lower limit, h its width, f0 and f2 the frequencies of the
classes just before and just after it (0 when there is none), and
mode = L + (f1 - f0) / (2 f1 - f0 - f2) * h.
"""
from sympy import Rational


def _ask(p, *allowed):
    a = p.get("ask", "table")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _parts(v, p, continuous=True):
    """(L, f1, f0, f2, h) for the item; continuous=False keeps the printed limits of a gapped table."""
    if _ask(p, "formula", "table") == "formula":
        return v["L"], v["f1"], v["f0"], v["f2"], v["h"]
    lo = [Rational(a) for a in v["lo"]]
    hi = [Rational(b) for b in v["hi"]]
    fs = [Rational(f) for f in v["f"]]
    top = max(fs)
    if fs.count(top) != 1:
        raise ValueError("the table needs a single modal class")
    i = fs.index(top)
    gap = lo[1] - hi[0] if len(lo) > 1 else 0
    if not continuous and gap == 0:
        raise ValueError("the classes are already continuous")
    half = gap / 2 if continuous else 0
    L = lo[i] - half
    h = hi[i] - lo[i] + 2 * half
    f0 = fs[i - 1] if i > 0 else 0
    f2 = fs[i + 1] if i + 1 < len(fs) else 0
    return L, top, f0, f2, h


def _mode(L, f1, f0, f2, h):
    return L + Rational(f1 - f0) / (2 * f1 - f0 - f2) * h


def key(v, p):
    """The book's formula on the modal class, after making the classes continuous."""
    return _mode(*_parts(v, p))


def m1(v, p):
    """Gives the highest frequency f1 as the mode (confuses the mode with how often it occurs)."""
    return _parts(v, p)[1]


def m2(v, p):
    """Uses the printed limits of a gapped table: L is the printed lower limit, h = upper - lower."""
    _ask(p, "table")
    return _mode(*_parts(v, p, continuous=False))


def m3(v, p):
    """Swaps f0 and f2: puts f1 - f2 (the class after) in the numerator."""
    L, f1, f0, f2, h = _parts(v, p)
    return _mode(L, f1, f2, f0, h)


def m4(v, p):
    """Forgets to multiply the fraction by h."""
    L, f1, f0, f2, h = _parts(v, p)
    if h == 1:
        raise ValueError("h = 1: the slip gives the key")
    return L + Rational(f1 - f0) / (2 * f1 - f0 - f2)


def m5(v, p):
    """Gives the class mark (middle) of the modal class as the mode."""
    L, f1, f0, f2, h = _parts(v, p)
    return L + Rational(h) / 2


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
