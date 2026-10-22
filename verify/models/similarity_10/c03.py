"""C03 Three parallel lines and two transversals: answer models (the key, and one per misconception).

Two forms (params["form"]):
- "four": inputs a1, a2 (the two intercepts on the first transversal, in order) and b1 (the
  intercept on the second transversal that corresponds to a1). The unknown b2 corresponds to a2.
  params["ask"] = "part" asks for b2, "whole" for b1 + b2.
- "split": inputs a1, a2 (and a3) the intercepts on the first transversal, T the whole length on
  the second; params["i"] (a string index, "0" first) picks the part asked for.
The key works from the definition: corresponding intercepts are proportional, b = a * scale with
one scale factor for the whole transversal.
"""


def _a(v):
    return [v[k] for k in ("a1", "a2", "a3") if k in v]


def _pos(x):
    if x <= 0:
        raise ValueError("not a length")
    return x


def key(v, p):
    if p["form"] == "four":
        b2 = v["a2"] * v["b1"] / v["a1"]
        return b2 if p["ask"] == "part" else v["b1"] + b2
    a = _a(v)
    return a[int(p["i"])] * v["T"] / sum(a)


def m1(v, p):
    """Pairs the intercepts the wrong way round: AB/BC = QR/PQ (or flips the scale factor)."""
    if p["form"] == "four":
        b2 = v["a1"] * v["b1"] / v["a2"]
        return b2 if p["ask"] == "part" else v["b1"] + b2
    a = _a(v)
    return a[int(p["i"])] * sum(a) / v["T"]


def m2(v, p):
    """Thinks parallel lines cut equal intercepts: the unknown piece equals its partner on the other transversal."""
    if p["form"] == "four":
        return v["a2"] if p["ask"] == "part" else v["b1"] + v["a2"]
    return _a(v)[int(p["i"])]


def m3(v, p):
    """Keeps the difference instead of the ratio: AB - BC = PQ - QR (each piece grows by the same amount)."""
    if p["form"] == "four":
        b2 = _pos(v["b1"] - v["a1"] + v["a2"])
        return b2 if p["ask"] == "part" else v["b1"] + b2
    a = _a(v)
    return _pos(a[int(p["i"])] + (v["T"] - sum(a)) / len(a))


def m4(v, p):
    """Mixes part-to-whole with part-to-part: CE/AE = DF/BD, or AB/BC = PQ/PR."""
    if p["form"] == "four":
        b2 = v["b1"] * v["a2"] / (v["a1"] + v["a2"])
        return b2 if p["ask"] == "part" else v["b1"] + b2
    a = _a(v)
    if len(a) != 2:
        raise ValueError("needs two intercepts")
    i = int(p["i"])
    return v["T"] * a[i] / a[1 - i]


def m5(v, p):
    """Asked for the whole length, stops at the missing intercept."""
    if p["form"] != "four" or p["ask"] != "whole":
        raise ValueError("only when the whole is asked")
    return v["a2"] * v["b1"] / v["a1"]


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
