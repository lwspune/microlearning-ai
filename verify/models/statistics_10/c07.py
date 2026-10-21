"""C07 Frequency polygon: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  point  the point plotted for one class: limits v["l"], v["u"], frequency v["f"] -> (x, y)
  left   where the polygon meets the x-axis on the left: lower limits v["lo"], upper limits v["hi"]
  right  the same on the right
  class  the class a vertex (v["x"], v["y"]) stands for, classes of width v["h"] -> (lower, upper)
  zero   the two zero-frequency classes, from the x-axis points v["a"] and v["b"], width v["h"]
         -> ((lower, upper), (lower, upper))

The key works from the definition: each class is plotted at its class mark (the middle of the
class) with its frequency, and the polygon is closed at the class marks of the empty classes just
before the first class and just after the last, where the frequency is 0. For inclusive classes
(20-24, 25-29, ...) the step from one class to the next is the gap between lower limits.
"""
from sympy import Rational, Tuple


def _ask(p, *allowed):
    a = p.get("ask")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _mark(l, u):
    return Rational(l + u, 2)


def _step(v):
    """The distance from one class to the next: the gap between successive lower limits."""
    lo = list(v["lo"])
    return lo[1] - lo[0]


def _ends(v):
    lo, hi = list(v["lo"]), list(v["hi"])
    return lo, hi, _mark(lo[0], hi[0]), _mark(lo[-1], hi[-1])


def key(v, p):
    a = _ask(p, "point", "left", "right", "class", "zero")
    if a == "point":
        return Tuple(_mark(v["l"], v["u"]), v["f"])
    if a in ("left", "right"):
        lo, hi, first, last = _ends(v)
        return first - _step(v) if a == "left" else last + _step(v)
    half = Rational(v["h"], 2)
    if a == "class":
        return Tuple(v["x"] - half, v["x"] + half)
    return Tuple(Tuple(v["a"] - half, v["a"] + half), Tuple(v["b"] - half, v["b"] + half))


def m1(v, p):
    """Uses the lower limit of a class where its class mark belongs."""
    a = _ask(p, "point", "left", "class", "zero")
    if a == "point":
        return Tuple(v["l"], v["f"])
    if a == "left":
        lo, hi, first, last = _ends(v)
        return lo[0] - _step(v)  # the lower limit of the empty class before the first
    h = v["h"]
    if a == "class":
        return Tuple(v["x"], v["x"] + h)
    return Tuple(Tuple(v["a"], v["a"] + h), Tuple(v["b"], v["b"] + h))


def m2(v, p):
    """Uses the upper limit of a class where its class mark belongs."""
    a = _ask(p, "point", "right", "class", "zero")
    if a == "point":
        return Tuple(v["u"], v["f"])
    if a == "right":
        lo, hi, first, last = _ends(v)
        return hi[-1] + _step(v)  # the upper limit of the empty class after the last
    h = v["h"]
    if a == "class":
        return Tuple(v["x"] - h, v["x"])
    return Tuple(Tuple(v["a"] - h, v["a"]), Tuple(v["b"] - h, v["b"]))


def m3(v, p):
    """Closes the polygon at the outer limits of the first and last classes (the histogram's outer edges)."""
    a = _ask(p, "left", "right", "zero")
    if a == "left":
        return list(v["lo"])[0]
    if a == "right":
        return list(v["hi"])[-1]
    # Reading a polygon: takes a and b as the outer limits of the data, so the empty classes lie beyond them.
    h = v["h"]
    return Tuple(Tuple(v["a"] - h, v["a"]), Tuple(v["b"], v["b"] + h))


def m4(v, p):
    """Drops straight down to the x-axis at the first and last class marks."""
    a = _ask(p, "left", "right")
    lo, hi, first, last = _ends(v)
    return first if a == "left" else last


def m5(v, p):
    """Swaps the axes: frequency along the x-axis, class mark up the y-axis."""
    a = _ask(p, "point", "class")
    if a == "point":
        return Tuple(v["f"], _mark(v["l"], v["u"]))
    half = Rational(v["h"], 2)
    return Tuple(v["y"] - half, v["y"] + half)


def m6(v, p):
    """Inclusive classes: starts the imagined class at the last upper limit, as if classes were continuous."""
    a = _ask(p, "left", "right")
    lo, hi = list(v["lo"]), list(v["hi"])
    if lo[1] == hi[0]:
        raise ValueError("classes are continuous: this mistake gives the key")
    width = hi[0] - lo[0]
    if a == "right":
        return _mark(hi[-1], hi[-1] + width)
    return _mark(lo[0] - width, lo[0])


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
