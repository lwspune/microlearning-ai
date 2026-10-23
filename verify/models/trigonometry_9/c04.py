"""C04 Relations among the ratios: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["kind"]:
- "co" (complementary angles): input a, an angle in degrees; params["rel"] says which blank is asked:
  "sin_cos" (sin a = cos __), "cos_sin" (cos a = sin __) or "tan_tan" (tan a x tan __ = 1).
  The answer is the blank, in degrees.
- "id" (one ratio from another): params["given"] is "sin" (input s) or "cos" (input c), and
  params["find"] is "tan" or "sin"; an item that finds sin from cos may also give t = tan theta.

The key finds the angle itself with an inverse function and evaluates there, never by the identities
being taught. Each misconception applies its one wrong rule.
"""
from sympy import acos, asin, atan, cos, pi, simplify, sin, sqrt, tan


def _rad(d):
    return d * pi / 180


def _deg(r):
    return simplify(r * 180 / pi)


def key(v, p):
    if p["kind"] == "co":
        a = _rad(v["a"])
        rel = p["rel"]
        if rel == "sin_cos":
            return _deg(acos(sin(a)))
        if rel == "cos_sin":
            return _deg(asin(cos(a)))
        return _deg(atan(1 / tan(a)))
    t = asin(v["s"]) if p["given"] == "sin" else acos(v["c"])
    return simplify({"sin": sin, "cos": cos, "tan": tan}[p["find"]](t))


def _co(v, p, rule):
    if p["kind"] != "co":
        raise ValueError("not a complementary-angle item")
    return rule(v["a"])


def _id(v, p, other):
    """sin and cos from the given one, the missing one from other(given value)."""
    if p["kind"] != "id":
        raise ValueError("not a one-ratio-from-another item")
    if p["given"] == "sin":
        s = v["s"]
        c = other(s)
    else:
        c = v["c"]
        s = other(c)
    if p["find"] == "tan":
        return simplify(s / c)
    return simplify(s)


def m1(v, p):
    """Takes the complement as 180 - theta (mixes up complementary and supplementary angles)."""
    return _co(v, p, lambda a: 180 - a)


def m2(v, p):
    """Keeps the same angle when the ratio changes: sin theta = cos theta."""
    return _co(v, p, lambda a: a)


def m3(v, p):
    """Drops the squares: sin theta + cos theta = 1."""
    return _id(v, p, lambda g: 1 - g)


def m4(v, p):
    """Forgets the square root: takes 1 - sin^2 theta as cos theta (or 1 - cos^2 theta as sin theta)."""
    return _id(v, p, lambda g: 1 - g**2)


def m5(v, p):
    """Turns the quotient upside down: tan theta = cos theta / sin theta."""
    if p["kind"] != "id":
        raise ValueError("not a one-ratio-from-another item")
    if p["find"] == "tan":
        s = v["s"] if p["given"] == "sin" else sqrt(1 - v["c"] ** 2)
        c = v["c"] if p["given"] == "cos" else sqrt(1 - v["s"] ** 2)
        return simplify(c / s)
    if "t" not in v:
        raise ValueError("needs tan theta in the stem")
    return simplify(v["c"] / v["t"])


def m6(v, p):
    """Adds the angle to 90 degrees: takes cos(90 + theta) for sin theta."""
    return _co(v, p, lambda a: 90 + a)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
