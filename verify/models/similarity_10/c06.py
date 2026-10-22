"""C06 Using similar triangles: answer models (the key, and one per misconception).

Triangle 1 holds the unknown side x; triangle 2 is similar to it.
params["story"] picks the question:
  ratio     : q = the side of triangle 2 that corresponds to x;
              r (in triangle 1) and s (in triangle 2) = a known pair of corresponding sides  -> x
  parts     : X on BA, Y on BC, XY || AC, AX : BX = m : n, XY = q  -> AC
  perimeter : triangle ABC has sides a, b, c; the similar triangle has perimeter P
              -> the side corresponding to c
  mean      : D on BC with angle BAC = angle ADC; inputs CB, CD  -> CA

The key uses the scale factor k (every side of triangle 1 is k times its partner), which is
what "similar" means; each misconception applies its own wrong rule.
"""
from sympy import sqrt


def _story(p, *allowed):
    if p["story"] not in allowed:
        raise ValueError(f"not modelled for {p['story']}")
    return p["story"]


def key(v, p):
    st = p["story"]
    if st == "ratio":
        k = v["r"] / v["s"]
        return k * v["q"]
    if st == "parts":
        k = (v["m"] + v["n"]) / v["n"]  # BA : BX
        return k * v["q"]
    if st == "perimeter":
        k = v["P"] / (v["a"] + v["b"] + v["c"])
        return k * v["c"]
    if st == "mean":
        return sqrt(v["CB"] * v["CD"])  # CB/CA = CA/CD
    raise ValueError(st)


def m1(v, p):
    """Ratio upside down on one side: the scale factor is inverted."""
    st = _story(p, "ratio", "parts", "perimeter")
    if st == "ratio":
        return v["q"] * v["s"] / v["r"]
    if st == "parts":
        return v["q"] * v["n"] / (v["m"] + v["n"])
    return v["c"] * (v["a"] + v["b"] + v["c"]) / v["P"]


def m2(v, p):
    """Additive thinking: corresponding sides differ by the same amount."""
    st = _story(p, "ratio", "perimeter", "mean")
    if st == "ratio":
        return v["q"] + v["r"] - v["s"]
    if st == "perimeter":
        return v["c"] + v["P"] - (v["a"] + v["b"] + v["c"])
    # CA - CD = CB - CA
    return (v["CB"] + v["CD"]) / 2


def m3(v, p):
    """Part for whole: uses AX : BX as the ratio of corresponding sides."""
    _story(p, "parts")
    return v["q"] * v["m"] / v["n"]


def m4(v, p):
    """Corresponding sides taken as equal, as in congruent triangles."""
    st = p["story"]
    if st == "ratio" or st == "parts":
        return v["q"]
    if st == "perimeter":
        return v["c"]
    if st == "mean":
        return v["CD"]  # CA in triangle CBA corresponds to CD in triangle CAD
    raise ValueError(st)


def m5(v, p):
    """Stops at CA^2 = CB x CD and gives CB x CD as CA."""
    _story(p, "mean")
    return v["CB"] * v["CD"]


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
