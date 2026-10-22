"""C03 30-60-90 and 45-45-90 triangles: answer models (the key, and one per misconception).

Every item is one right-angled triangle with angles 30-60-90 or 45-45-90 (degrees).
Inputs: g, the given side; a, the angle (in degrees) opposite the given side; b, the angle opposite
the side asked for. The hypotenuse is the side opposite 90.

The key uses the sine of each angle (side = hypotenuse x sin of the opposite angle), not the
theorem's multipliers; each misconception uses its own (wrong) multiplier for each angle.
"""
from sympy import Rational, Symbol, pi, sin, sqrt


def _real(e):
    """Any letter in the side as a real symbol, the way the verifier reads option values."""
    return e.subs({s: Symbol(s.name, real=True) for s in e.free_symbols})


def _check(v):
    a, b = int(v["a"]), int(v["b"])
    angles = {a, b}
    if a == b or not angles <= {30, 45, 60, 90}:
        raise ValueError("not a 30-60-90 or 45-45-90 triangle question")
    if 45 in angles and not angles <= {45, 90}:
        raise ValueError("45 mixed with 30 or 60")
    return _real(v["g"]), a, b


def _ratio(g, a, b, mult):
    """Side opposite b from side g opposite a, with mult[angle] = side / hypotenuse."""
    return g * mult[b] / mult[a]


def _is45(a, b):
    return 45 in (a, b)


def key(v, p):
    g, a, b = _check(v)
    s = lambda d: sin(pi * d / 180)
    return g * s(b) / s(a)


TRUE = {30: Rational(1, 2), 60: sqrt(3) / 2, 45: 1 / sqrt(2), 90: 1}


def m1(v, p):
    """Swaps the 30 and 60 multipliers: puts sqrt(3)/2 opposite 30 and 1/2 opposite 60."""
    g, a, b = _check(v)
    if _is45(a, b):
        raise ValueError("no 30 or 60 angle")
    return _ratio(g, a, b, {30: sqrt(3) / 2, 60: Rational(1, 2), 90: 1})


def m2(v, p):
    """Turns the rule round: multiplies by the multiplier where it should divide, and divides where it should multiply."""
    g, a, b = _check(v)
    return _ratio(g, b, a, TRUE)


def m3(v, p):
    """Uses the 45-45-90 rule in a 30-60-90 triangle: each side 1/sqrt(2) of the hypotenuse."""
    g, a, b = _check(v)
    if _is45(a, b):
        raise ValueError("already a 45-45-90 triangle")
    return _ratio(g, a, b, {30: 1 / sqrt(2), 60: 1 / sqrt(2), 90: 1})


def m4(v, p):
    """Uses the 30 rule in a 45-45-90 triangle: each equal side half the hypotenuse."""
    g, a, b = _check(v)
    if not _is45(a, b):
        raise ValueError("not a 45-45-90 triangle")
    return _ratio(g, a, b, {45: Rational(1, 2), 90: 1})


def m5(v, p):
    """Finds the side through Pythagoras but stops at its square (forgets the square root)."""
    g, a, b = _check(v)
    if b == 30 or (a == 30 and b == 90):
        raise ValueError("found by halving or doubling, no square root taken")
    return key(v, p) ** 2


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
