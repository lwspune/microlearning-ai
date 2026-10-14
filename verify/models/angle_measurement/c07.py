"""C07 Angles between clock hands: answer models (the key, and one per misconception).

Inputs: h (the hour, 1 to 12) and m (minutes past it). params["ask"] picks the answer:
  "smaller": the smaller angle between the hands (0 to 180 degrees)
  "reflex":  the other angle, 360 minus the smaller one
  "gain":    how many degrees the minute hand gains on the hour hand in m minutes
Answers are in degrees, as exact Rationals.

The key places each hand from 12 by its own rate, straight from the definition: the hour hand
turns 360 degrees in 12 hours, the minute hand 360 degrees in 60 minutes.
"""
from sympy import Rational, floor

FULL = Rational(360)


def _hands(h, m):
    """Each hand's angle, clockwise from 12, in degrees."""
    hours = (h % 12) + m / Rational(60)
    return hours * FULL / 12, m * FULL / 60


def _report(d, p):
    """The angle the question asks for, from any angle d between the hands."""
    d = d % FULL
    small = min(d, FULL - d)
    if p["ask"] == "smaller":
        return small
    if p["ask"] == "reflex":
        return FULL - small
    raise ValueError(f"unknown ask {p['ask']}")


def key(v, p):
    h, m = v.get("h", 0), v["m"]
    if p["ask"] == "gain":
        # In m minutes the minute hand turns 360 m / 60, the hour hand 360 m / 720.
        return m * FULL / 60 - m * FULL / 720
    hour, minute = _hands(h, m)
    return _report(hour - minute, p)


def m1(v, p):
    """The hour hand stays on its hour mark while the minutes pass."""
    h, m = v.get("h", 0), v["m"]
    if p["ask"] == "gain":
        return 6 * m
    return _report(30 * (h % 12) - 6 * m, p)


def m2(v, p):
    """The hour hand drifts m/2 degrees back, toward the previous hour, instead of on."""
    h, m = v.get("h", 0), v["m"]
    if p["ask"] == "gain":
        return 6 * m + m / Rational(2)
    return _report(30 * (h % 12) - m / Rational(2) - 6 * m, p)


def m3(v, p):
    """Gives the other angle: the reflex one when the smaller is asked, and the other way round."""
    if p["ask"] == "gain":
        raise ValueError("no second angle for a gain")
    other = {"smaller": "reflex", "reflex": "smaller"}[p["ask"]]
    return key(v, {**p, "ask": other})


def m4(v, p):
    """Reads half a degree as 50 minutes (decimal thinking): 22.5 degrees written as 22 degrees 50'."""
    k = key(v, p)
    if k - floor(k) != Rational(1, 2):
        raise ValueError("the key has no half degree")
    return floor(k) + Rational(50, 60)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4}
