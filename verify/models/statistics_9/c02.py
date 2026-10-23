"""C02 Class limits, width and class mark: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  mark     - the class mark of the class a-b
  width    - the class width of the class a-b
  class    - the class with class mark m and class width w, as Tuple(lower, upper)
  boundary - exclusive classes lo-(lo+h), (lo+h)-(lo+2h), ...: the class that takes the observation x,
             as Tuple(lower, upper), or Symbol("both") / Symbol("neither")
  count    - exclusive classes; how many of the observations obs fall in the class a-b
"""
from sympy import Integer, Rational, Symbol, Tuple, floor


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def _home(v):
    """The exclusive class lower <= x < upper."""
    lo, h, x = v["lo"], v["h"], v["x"]
    lower = lo + floor((x - lo) / h) * h
    return lower, lower + h


def _on_limit(v):
    lower, _ = _home(v)
    if v["x"] != lower:
        raise ValueError("the observation is not on a class limit")
    return lower


def key(v, p):
    k = p["kind"]
    if k == "mark":
        return (v["a"] + v["b"]) / 2
    if k == "width":
        return v["b"] - v["a"]
    if k == "class":
        return Tuple(v["m"] - v["w"] / 2, v["m"] + v["w"] / 2)
    if k == "boundary":
        return Tuple(*_home(v))
    if k == "count":
        return Integer(sum(1 for x in v["obs"] if v["a"] <= x < v["b"]))
    raise ValueError(k)


def m1(v, p):
    """Class mark = (upper - lower) / 2: subtracts the limits instead of adding them."""
    _kind(p, "mark")
    return (v["b"] - v["a"]) / 2


def m2(v, p):
    """Forgets to halve: class mark = lower + upper; the class runs a whole width either side of the mark."""
    if _kind(p, "mark", "class") == "mark":
        return v["a"] + v["b"]
    return Tuple(v["m"] - v["w"], v["m"] + v["w"])


def m3(v, p):
    """Counts both limits as inside the class: width = upper - lower + 1; a boundary value is in both classes."""
    k = _kind(p, "width", "class", "boundary", "count")
    if k == "width":
        return v["b"] - v["a"] + 1
    if k == "class":
        half = (v["w"] - 1) / Rational(2)
        return Tuple(v["m"] - half, v["m"] + half)
    if k == "boundary":
        _on_limit(v)
        return Symbol("both")
    return Integer(sum(1 for x in v["obs"] if v["a"] <= x <= v["b"]))


def m4(v, p):
    """Swaps class mark and class width."""
    k = _kind(p, "mark", "width", "class")
    if k == "mark":
        return v["b"] - v["a"]
    if k == "width":
        return (v["a"] + v["b"]) / 2
    return Tuple(v["w"] - v["m"] / 2, v["w"] + v["m"] / 2)


def m5(v, p):
    """Puts a boundary value in the class it ends: the upper limit belongs to the class."""
    k = _kind(p, "boundary", "count")
    if k == "boundary":
        lower = _on_limit(v)
        return Tuple(lower - v["h"], lower)
    return Integer(sum(1 for x in v["obs"] if v["a"] < x <= v["b"]))


def m6(v, p):
    """Counts neither limit as inside the class: width = upper - lower - 1; a boundary value is in no class."""
    k = _kind(p, "width", "class", "boundary", "count")
    if k == "width":
        return v["b"] - v["a"] - 1
    if k == "class":
        half = (v["w"] + 1) / Rational(2)
        return Tuple(v["m"] - half, v["m"] + half)
    if k == "boundary":
        _on_limit(v)
        return Symbol("neither")
    return Integer(sum(1 for x in v["obs"] if v["a"] < x < v["b"]))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
