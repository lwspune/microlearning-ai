"""C01 Frequency distributions: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  limits  whole-number data in inclusive classes (gap 1 between classes); the class mark is
          v["m"] and the width v["h"], or v["marks"] (all the class marks) and v["k"] (which
          class) -> the class limits, Tuple(lower, upper)
  bounds  the same inputs -> the class boundaries, Tuple(lower, upper)
  less    a table of classes starting at v["lo"] with width v["h"] and frequencies v["fs"],
          or raw observations v["xs"] grouped that way -> how many are less than v["x"]
  more    the same inputs -> how many are v["x"] or more
Classes in a table are exclusive: a class a-b holds a <= value < b. v["x"] is a boundary.
"""
from sympy import Rational, Tuple


def _ask(p):
    return p["ask"]


# ---- classes from a class mark -------------------------------------------------------------

def _mark_width(v):
    """The class mark and the width; with a list of marks, the width is the gap between them."""
    if "marks" in v:
        ms = [Rational(m) for m in v["marks"]]
        return ms[int(v["k"]) - 1], ms[1] - ms[0]
    return Rational(v["m"]), Rational(v["h"])


def _bounds(m, h):
    """A class's boundaries sit half a width either side of its mark."""
    return m - h / 2, m + h / 2


def key(v, p):
    a = _ask(p)
    if a in ("limits", "bounds"):
        lb, ub = _bounds(*_mark_width(v))
        if a == "bounds":
            return Tuple(lb, ub)
        # Whole-number data: the limits are the whole numbers just inside the boundaries.
        return Tuple(lb + Rational(1, 2), ub - Rational(1, 2))
    if a in ("less", "more"):
        x = Rational(v["x"])
        if "xs" in v:
            xs = [Rational(t) for t in v["xs"]]
            return sum(1 for t in xs if (t < x if a == "less" else t >= x))
        cl = _classes(v)
        if a == "less":
            return sum(f for lo, hi, f in cl if hi <= x)
        return sum(f for lo, hi, f in cl if lo >= x)
    raise ValueError(a)


# ---- counts from a table -------------------------------------------------------------------

def _classes(v):
    """[(lower, upper, frequency)], tallying raw observations when the item gives them."""
    lo, h = Rational(v["lo"]), Rational(v["h"])
    if "xs" in v:
        xs = [Rational(t) for t in v["xs"]]
        k = int(v["k"])
        fs = [sum(1 for t in xs if lo + i * h <= t < lo + (i + 1) * h) for i in range(k)]
        assert sum(fs) == len(xs), "an observation falls outside the classes"
    else:
        fs = [Rational(f) for f in v["fs"]]
    return [(lo + i * h, lo + (i + 1) * h, f) for i, f in enumerate(fs)]


def _count_only(p):
    if _ask(p) not in ("less", "more"):
        raise ValueError("only for a count read from a table")


def m1(v, p):
    """Takes an inclusive class's limits and boundaries to be the same thing."""
    a = _ask(p)
    if a not in ("limits", "bounds"):
        raise ValueError("only for inclusive classes")
    lb, ub = _bounds(*_mark_width(v))
    if a == "limits":
        return Tuple(lb, ub)  # gives the boundaries as the limits
    return Tuple(lb + Rational(1, 2), ub - Rational(1, 2))  # gives the limits as the boundaries


def m2(v, p):
    """Takes the class mark as the lower end: the class runs from its mark up one width."""
    if _ask(p) not in ("limits", "bounds"):
        raise ValueError("only for a class found from its mark")
    m, h = _mark_width(v)
    return Tuple(m, m + h)


def m3(v, p):
    """Goes a whole width either side of the class mark, not half a width."""
    if _ask(p) not in ("limits", "bounds"):
        raise ValueError("only for a class found from its mark")
    m, h = _mark_width(v)
    return Tuple(m - h, m + h)


def m4(v, p):
    """Gives one class's own frequency instead of the running total."""
    _count_only(p)
    x = Rational(v["x"])
    cl = _classes(v)
    if _ask(p) == "less":
        return next(f for lo, hi, f in cl if hi == x)  # the class just below x
    return next(f for lo, hi, f in cl if lo == x)  # the class just above x


def m5(v, p):
    """Also counts the class on the far side of x, because it has x as one end."""
    _count_only(p)
    x = Rational(v["x"])
    cl = _classes(v)
    if _ask(p) == "less":
        return sum(f for lo, hi, f in cl if lo <= x)
    return sum(f for lo, hi, f in cl if hi >= x)


def m6(v, p):
    """Mixes up 'less than' and 'more than': adds the classes on the wrong side of x."""
    _count_only(p)
    flip = {"less": "more", "more": "less"}[_ask(p)]
    return key(v, {**p, "ask": flip})


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
