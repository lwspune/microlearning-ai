"""C04 Double inequalities: answer models (the key, and one per misconception).

The item is lo (L) middle (R) hi, with L and R each "lt" (<) or "le" (<=), solved for real x.
Inputs and params:
  form "frac":  middle = (p x + q) / d, d > 0 (d = 1 for no fraction); inputs lo, hi, p, q, d.
                The usual route: multiply every part by d, subtract q, divide by p.
  form "shift": middle = k + p x / d, d > 0; inputs lo, hi, k, p, d.
                The usual route: subtract k from every part, multiply by d / p.
  L, R: "lt" or "le".
The key solves the two inequalities lo (L) middle and middle (R) hi separately with sympy and
intersects them, never by the three-part method being taught.
"""
from sympy import Interval, S, Symbol, oo, solveset

x = Symbol("x", real=True)


def _middle(v, p):
    if p["form"] == "frac":
        return (v["p"] * x + v["q"]) / v["d"]
    if p["form"] == "shift":
        return v["k"] + v["p"] * x / v["d"]
    raise ValueError(p["form"])


def _strict(sign):
    if sign not in ("lt", "le"):
        raise ValueError(sign)
    return sign == "lt"


def _ends(v, p):
    """The two ends after the correct steps, in their old seats: e1 from lo, e2 from hi."""
    if p["form"] == "frac":
        return [(e * v["d"] - v["q"]) / v["p"] for e in (v["lo"], v["hi"])]
    return [(e - v["k"]) * v["d"] / v["p"] for e in (v["lo"], v["hi"])]


def key(v, p):
    m = _middle(v, p)
    left = (v["lo"] < m) if _strict(p["L"]) else (v["lo"] <= m)
    right = (m < v["hi"]) if _strict(p["R"]) else (m <= v["hi"])
    return solveset(left, x, S.Reals).intersect(solveset(right, x, S.Reals))


def m1(v, p):
    """Does each step to the middle only: the ends never change, so lo (L) x (R) hi."""
    return Interval(v["lo"], v["hi"], _strict(p["L"]), _strict(p["R"]))


def m2(v, p):
    """Divides by a negative p without turning the signs: e1 (L) x (R) e2 with e1 > e2, so no x."""
    if v["p"] > 0:
        raise ValueError("p > 0: nothing to turn")
    e1, e2 = _ends(v, p)
    return Interval(e1, e2, _strict(p["L"]), _strict(p["R"]))  # empty, as e1 > e2


def m3(v, p):
    """Turns the first sign only: x (L) e1 from the left part, x (R) e2 from the right, both kept."""
    if v["p"] > 0:
        raise ValueError("p > 0: nothing to turn")
    e1, e2 = _ends(v, p)
    a = Interval(-oo, e1, True, _strict(p["L"]))
    b = Interval(-oo, e2, True, _strict(p["R"]))
    return a.intersect(b)


def m4(v, p):
    """Turns both signs and puts the smaller number on the left, but leaves each sign in its old
    seat: e2 (L) x (R) e1, so the strict end swaps."""
    if v["p"] > 0:
        raise ValueError("p > 0: nothing to turn")
    if p["L"] == p["R"]:
        raise ValueError("both signs alike: the swap gives the key")
    e1, e2 = _ends(v, p)
    return Interval(e2, e1, _strict(p["L"]), _strict(p["R"]))


def m5(v, p):
    """Does every step to all three parts except the last one, the division by the coefficient
    of x, which it does to the middle only."""
    if v["p"] < 0:
        raise ValueError("p < 0: only modelled for a positive coefficient")
    if p["form"] == "frac":
        e1, e2 = (e * v["d"] - v["q"] for e in (v["lo"], v["hi"]))
    else:
        e1, e2 = (e - v["k"] for e in (v["lo"], v["hi"]))
    return Interval(e1, e2, _strict(p["L"]), _strict(p["R"]))


def m6(v, p):
    """Clears the fraction from the middle only (the ends are not multiplied by d), then does the
    other steps correctly, turning the signs for a negative p."""
    if p["form"] != "frac" or v["d"] == 1:
        raise ValueError("needs a fraction (p x + q) / d to clear")
    e1, e2 = ((e - v["q"]) / v["p"] for e in (v["lo"], v["hi"]))
    if v["p"] > 0:
        return Interval(e1, e2, _strict(p["L"]), _strict(p["R"]))
    return Interval(e2, e1, _strict(p["R"]), _strict(p["L"]))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
