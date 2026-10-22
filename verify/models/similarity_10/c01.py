"""C01 Ratio of areas of two triangles: answer models (the key, and one per misconception).

Three kinds of item (params kind):
- "bh": two triangles with bases b1, b2 and heights h1, h2 (a common base or equal heights
  is given as equal inputs). The answer is A1 / A2.
- "split": triangle ABC with B-D-C and common vertex A. Inputs: any two of BD, DC, BC.
  params num, den in {"BD", "DC", "BC"} name the bases of the two triangles compared
  (BD for ABD, DC for ADC, BC for ABC). The answer is A(num) / A(den).
- "missing": two triangles with equal heights (or a common base) whose areas are in the
  ratio r1 : r2 (smaller : bigger). Input known is the smaller triangle's base (or height);
  the answer is the bigger triangle's base (or height).
The key works out each area as (1/2) x base x height with a symbolic height, never by the
ratio rules being taught.
"""
from sympy import Rational, Symbol, solve, sqrt

_h = Symbol("h", positive=True)


def _area(b, h):
    return Rational(1, 2) * b * h


def _split(v):
    s = dict(v)
    if "BC" not in s:
        s["BC"] = s["BD"] + s["DC"]
    elif "BD" not in s:
        s["BD"] = s["BC"] - s["DC"]
    elif "DC" not in s:
        s["DC"] = s["BC"] - s["BD"]
    return s


def key(v, p):
    k = p["kind"]
    if k == "bh":
        return _area(v["b1"], v["h1"]) / _area(v["b2"], v["h2"])
    if k == "split":
        s = _split(v)
        return _area(s[p["num"]], _h) / _area(s[p["den"]], _h)
    if k == "missing":
        # A1 = (1/2) known h and A2 = (1/2) x h with A1 / A2 = r1 / r2, solved for x.
        x = Symbol("x", positive=True)
        return solve(_area(v["known"], _h) * v["r2"] - _area(x, _h) * v["r1"], x)[0]
    raise ValueError(k)


def m1(v, p):
    """Compares the bases only, even when the heights differ."""
    if p["kind"] != "bh":
        raise ValueError("bases only applies to two separate triangles")
    if v["h1"] == v["h2"]:
        raise ValueError("equal heights: the bases alone give the key")
    return v["b1"] / v["b2"]


def m2(v, p):
    """Compares the heights only, even when the bases differ."""
    if p["kind"] != "bh":
        raise ValueError("heights only applies to two separate triangles")
    if v["b1"] == v["b2"]:
        raise ValueError("equal bases: the heights alone give the key")
    return v["h1"] / v["h2"]


def m3(v, p):
    """Turns the ratio upside down (the second triangle's base or height on top)."""
    if p["kind"] == "missing":
        return v["known"] * v["r1"] / v["r2"]
    return 1 / key(v, p)


def m4(v, p):
    """Squares the ratio, as for similar triangles."""
    if p["kind"] == "missing":
        return v["known"] * sqrt(v["r2"] / v["r1"])
    return key(v, p) ** 2


def m5(v, p):
    """On a split base, mixes up the whole base BC with the other part."""
    if p["kind"] != "split":
        raise ValueError("needs a base split at D")
    s = _split(v)
    num, den = p["num"], p["den"]
    if num == "BC":
        raise ValueError("whole on top: not modelled")
    wrong = {"BD": "DC", "DC": "BD"}[num] if den == "BC" else "BC"
    return s[num] / s[wrong]


def m6(v, p):
    """Reads the ratio r1 : r2 as a difference: adds r2 - r1 to the known length."""
    if p["kind"] != "missing":
        raise ValueError("needs a ratio and a missing length")
    return v["known"] + (v["r2"] - v["r1"])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
