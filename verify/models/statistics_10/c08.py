"""C08 Pie diagram: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  angle   the central angle (degrees) of a part: its amount v["a"] out of the total v["T"]
          (a percentage is an amount out of T = 100); v["n"] is the number of parts
  amount  the amount of a part whose sector has central angle v["th"], out of the total v["T"]
          (T = 100 asks for its percentage); v["n"] is the number of parts
  total   the total, when a part of amount v["a"] has central angle v["th"]
  other   another part's amount: a part of amount v["a"] has angle v["th"]; the asked part has v["th2"]

The key works from the definition: a part's share of the 360 degree circle equals its share of the
total, so angle / 360 = amount / total.
"""
from sympy import Rational

FULL = 360


def _ask(p, *allowed):
    a = p.get("ask")
    if a not in allowed:
        raise ValueError(f"not modelled for {a}")
    return a


def _scaled(v, p, whole):
    """Every type, with the circle taken as `whole` degrees instead of 360."""
    a = _ask(p, "angle", "amount", "total", "other")
    if a == "angle":
        return v["a"] / v["T"] * whole
    if a == "amount":
        return v["th"] / whole * v["T"]
    if a == "total":
        return v["a"] * whole / v["th"]
    return v["a"] / v["th"] * v["th2"]


def key(v, p):
    """angle / 360 = amount / total, solved for the unknown."""
    return _scaled(v, p, Rational(FULL))


def m1(v, p):
    """Takes the whole circle as 100 (mixes degrees with percentages)."""
    if _ask(p, "angle", "amount", "total", "other") == "other":
        raise ValueError("the circle's size cancels between two parts")
    return _scaled(v, p, Rational(100))


def m2(v, p):
    """Sets the proportion up the wrong way: treats the known amount as the whole circle's, so
    answers known amount x angle / 360."""
    a = _ask(p, "total", "other")
    return v["a"] * (v["th"] if a == "total" else v["th2"]) / FULL


def m3(v, p):
    """Takes the whole circle as 180 degrees (a straight angle)."""
    if _ask(p, "angle", "amount", "total", "other") == "other":
        raise ValueError("the circle's size cancels between two parts")
    return _scaled(v, p, Rational(180))


def m4(v, p):
    """Gives every part an equal share, whatever its value."""
    a = _ask(p, "angle", "amount", "other")
    if a == "angle":
        return Rational(FULL) / v["n"]
    if a == "amount":
        return v["T"] / v["n"]
    return v["a"]


def m5(v, p):
    """Two-step question: stops at the total and gives it as the asked part's amount."""
    _ask(p, "other")
    return v["a"] * FULL / v["th"]


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
