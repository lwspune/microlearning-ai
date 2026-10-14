"""C09 Product into sum: answer models (the key, and one per misconception).

params["fg"] names the product k f(a) g(b): "sc" (sin a cos b), "cs" (cos a sin b), "cc", "ss";
or "tt" for tan a tan b, read as (2 sin a sin b) / (2 cos a cos b).
inputs: a, b (radians, or expressions in x and y) and k (the coefficient; default 1).

The key never uses the formulas being taught: it writes each factor in exponentials
(sin t = (e^{it} - e^{-it}) / 2i, cos t = (e^{it} + e^{-it}) / 2), multiplies out, and pairs
e^{i theta} with e^{-i theta} back into cos theta and sin theta.
Each misconception is the student's own formula for 2 f(a) g(b); the value is then k/2 times it.
"""
from collections import defaultdict

from sympy import I, Rational, cos, simplify, sin

_EXP = {  # factor -> {sign of the exponent: coefficient}
    "s": {1: 1 / (2 * I), -1: -1 / (2 * I)},
    "c": {1: Rational(1, 2), -1: Rational(1, 2)},
}


def _euler(f, g, a, b):
    """f(a) g(b) as a sum of cos and sin of a + b and a - b, from the exponential forms."""
    terms = defaultdict(lambda: 0)
    for s1, c1 in _EXP[f].items():
        for s2, c2 in _EXP[g].items():
            terms[(s1, s2)] += c1 * c2
    out = 0
    for s2 in (1, -1):  # theta = a + s2*b: pair e^{i theta} (s1 = 1) with e^{-i theta} (s1 = -1)
        cp, cm = terms[(1, s2)], terms[(-1, -s2)]
        theta = a + s2 * b
        out += simplify(cp + cm) * cos(theta) + simplify(I * (cp - cm)) * sin(theta)
    return out


def _right(fg, a, b, half=False):
    """The correct 2 f(a) g(b); with half=True the angles are halved (C09-M4)."""
    p, m = (a + b, a - b) if not half else ((a + b) / 2, (a - b) / 2)
    return {
        "sc": sin(p) + sin(m),
        "cs": sin(p) - sin(m),
        "cc": cos(m) + cos(p),
        "ss": cos(m) - cos(p),
    }[fg]


def _value(rule, v, p):
    """k f(a) g(b) by a student's rule for 2 f g, or tan a tan b as the ratio of two such products."""
    fg, a, b = p["fg"], v["a"], v["b"]
    if fg == "tt":
        return simplify(rule("ss", a, b) / rule("cc", a, b))
    return v.get("k", 1) * rule(fg, a, b) / 2


def key(v, p):
    fg, a, b = p["fg"], v["a"], v["b"]
    if fg == "tt":
        return simplify(_euler("s", "s", a, b) / _euler("c", "c", a, b))
    return v.get("k", 1) * _euler(fg[0], fg[1], a, b)


def m1(v, p):
    """Reverses the sign in the sin-sin formula: 2 sin A sin B = cos(A + B) - cos(A - B)."""
    def rule(fg, a, b):
        return cos(a + b) - cos(a - b) if fg == "ss" else _right(fg, a, b)

    if p["fg"] not in ("ss", "tt"):
        raise ValueError("only for a sin-sin product")
    return _value(rule, v, p)


def m2(v, p):
    """Swaps the sin-cos and cos-sin formulas: 2 sin A cos B = sin(A + B) - sin(A - B)
    and 2 cos A sin B = sin(A + B) + sin(A - B)."""
    if p["fg"] not in ("sc", "cs"):
        raise ValueError("only for a sin-cos product")

    def rule(fg, a, b):
        return _right({"sc": "cs", "cs": "sc"}[fg], a, b)

    return _value(rule, v, p)


def m3(v, p):
    """Reads the formula without its 2: sin A cos B = sin(A + B) + sin(A - B), and so on,
    so the answer comes out twice the true one."""
    if p["fg"] == "tt":
        raise ValueError("the 2s cancel in a ratio")
    return _value(lambda fg, a, b: 2 * _right(fg, a, b), v, p)


def m4(v, p):
    """Halves the angles, as in the sum-into-product formulas:
    2 sin A cos B = sin((A + B)/2) + sin((A - B)/2), and so on."""
    return _value(lambda fg, a, b: _right(fg, a, b, half=True), v, p)


def m5(v, p):
    """Swaps the cos-cos and sin-sin formulas: 2 cos A cos B = cos(A - B) - cos(A + B)
    and 2 sin A sin B = cos(A - B) + cos(A + B)."""
    if p["fg"] not in ("cc", "ss", "tt"):
        raise ValueError("only for a cos-cos or sin-sin product")

    def rule(fg, a, b):
        return _right({"cc": "ss", "ss": "cc"}[fg], a, b)

    return _value(rule, v, p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
