"""C04 Cumulative frequency: answer models (the key, and one per misconception).

Inputs: f, the frequencies of the classes in order (top of the table first), and k, the 0-based
index of the class asked about.
p["type"] picks the table:
  lt - less than type: the cumulative frequency of class k (observations below its upper limit)
  ge - equal to or more than type: the cumulative frequency of class k (observations at or above
       its lower limit)
p["ask"] is "count" when the stem asks "how many ... less than x" / "x or more" instead of naming
the class (only then can a student pick the class on the wrong side of x).
"""
from sympy import Integer


def _fk(v):
    f = [Integer(x) for x in v["f"]]
    k = int(v["k"])
    if not 0 <= k < len(f):
        raise ValueError("k is not a class of the table")
    return f, k


def _type(p):
    t = p.get("type")
    if t not in ("lt", "ge"):
        raise ValueError(f"unknown table type {t!r}")
    return t


def key(v, p):
    f, k = _fk(v)
    return sum(f[: k + 1]) if _type(p) == "lt" else sum(f[k:])


def m1(v, p):
    """Gives the class's own frequency: forgets to add the other classes."""
    f, k = _fk(v)
    _type(p)
    return f[k]


def m2(v, p):
    """Adds in the wrong direction: a less than entry from the class downwards, an or-more entry from the top."""
    f, k = _fk(v)
    return sum(f[k:]) if _type(p) == "lt" else sum(f[: k + 1])


def m3(v, p):
    """Picks the class on the wrong side of x: for "less than x" the class starting at x,
    for "x or more" the class ending at x, so one class too many is counted."""
    if p.get("ask") != "count":
        raise ValueError("the stem names the class")
    f, k = _fk(v)
    if _type(p) == "lt":
        if k + 1 >= len(f):
            raise ValueError("no class after k")
        return sum(f[: k + 2])
    if k == 0:
        raise ValueError("no class before k")
    return sum(f[k - 1:])


def m4(v, p):
    """Leaves out the class itself: adds only the classes before it (less than) or after it (or more)."""
    f, k = _fk(v)
    if _type(p) == "lt":
        if k == 0:
            raise ValueError("no class before k")
        return sum(f[:k])
    if k == len(f) - 1:
        raise ValueError("no class after k")
    return sum(f[k + 1:])


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
