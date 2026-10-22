"""C06 Cyclic quadrilateral: answer models (the key, and one per misconception).

Angles and arcs are measures in degrees (plain numbers). params["form"] picks the item shape:
  split  inputs opp (the angle opposite the target vertex), adj (an angle at a vertex next to it),
         part (a known part of the target angle, for then=minus); the target vertex's whole angle
         is found first, then params["then"]: "minus" (whole - part) or "iso" (a base angle of the
         isosceles triangle whose apex angle is the whole angle).
  pair   inputs a, b, c, d: angle 1 = a x + b and angle 2 = c x + d are opposite angles;
         optional e, f: angle 3 = e x + f is next to angle 1. params["ask"]: "1", "2" or "x".
  ratio  inputs p, q: p * (angle 1) = q * (angle 2), angles 1 and 2 opposite; asks angle 2.
  arc    input g: the angle PQR of cyclic PQRS with side PQ = side RQ; asks m(arc QR).
"""
from sympy import Integer, Symbol, solve

X = Symbol("x")
HALF_TURN = Integer(180)


def _angle(a):
    if not 0 < a < HALF_TURN:
        raise ValueError("not an angle of a quadrilateral")
    return a


def _finish(whole, v, p):
    whole = _angle(whole)
    if p["then"] == "minus":
        return _angle(whole - v["part"])
    if p["then"] == "iso":
        return _angle((HALF_TURN - whole) / 2)
    raise ValueError("unknown finish")


def _pair(v, p, total=HALF_TURN, rule="sum", stop=False, other=False):
    a, b, c, d = v["a"], v["b"], v["c"], v["d"]
    if rule == "sum":
        eq = (a + c) * X + b + d - total
    elif rule == "equal":
        eq = a * X + b - (c * X + d)
    elif rule == "adjacent":
        eq = (a + v["e"]) * X + b + v["f"] - total
    else:
        raise ValueError(rule)
    (x,) = solve(eq, X)
    if x <= 0:
        raise ValueError("x not positive")
    ask = p["ask"]
    if stop:
        if ask == "x":
            raise ValueError("x is the answer")
        return x
    if ask == "x":
        return x
    if other:
        ask = {"1": "2", "2": "1"}[ask]
    return _angle(a * x + b if ask == "1" else c * x + d)


def _ratio(v, total=HALF_TURN):
    # p * A = q * C, so A = q k and C = p k.
    return total / (v["p"] + v["q"])


def key(v, p):
    f = p["form"]
    if f == "split":
        return _finish(HALF_TURN - v["opp"], v, p)
    if f == "pair":
        return _pair(v, p)
    if f == "ratio":
        return _angle(v["p"] * _ratio(v))
    if f == "arc":
        # angle PSR is opposite angle PQR; it intercepts arc PQR, which the equal chords halve.
        psr = HALF_TURN - v["g"]
        return 2 * psr / 2
    raise ValueError(f)


def m1(v, p):
    """Opposite angles equal (as in a parallelogram)."""
    f = p["form"]
    if f == "split":
        return _finish(v["opp"], v, p)
    if f == "pair":
        return _pair(v, p, rule="equal")
    if f == "arc":
        return 2 * v["g"] / 2
    raise ValueError("M1 does not apply")


def m2(v, p):
    """Pairs adjacent angles as the supplementary pair."""
    f = p["form"]
    if f == "split":
        return _finish(HALF_TURN - v["adj"], v, p)
    if f == "pair" and "e" in v:
        return _pair(v, p, rule="adjacent")
    raise ValueError("M2 needs an adjacent angle")


def m3(v, p):
    """Inscribed angle taken equal to its arc: never doubles the angle to get the arc."""
    if p["form"] == "arc":
        return (HALF_TURN - v["g"]) / 2
    raise ValueError("M3 needs an arc")


def m4(v, p):
    """Gives the other angle of the opposite pair."""
    f = p["form"]
    if f == "pair":
        if p["ask"] == "x":
            raise ValueError("x is the answer")
        return _pair(v, p, other=True)
    if f == "ratio":
        return _angle(v["q"] * _ratio(v))
    raise ValueError("M4 does not apply")


def m5(v, p):
    """Opposite angles add up to 360 degrees."""
    f = p["form"]
    if f == "pair":
        return _pair(v, p, total=Integer(360))
    if f == "ratio":
        return _angle(v["p"] * _ratio(v, Integer(360)))
    raise ValueError("M5 does not apply")


def m6(v, p):
    """Stops early: gives the value found on the way (x, the multiplier k, or the first angle or arc)."""
    f = p["form"]
    if f == "split":
        return _angle(HALF_TURN - v["opp"])
    if f == "pair":
        return _pair(v, p, stop=True)
    if f == "ratio":
        return _ratio(v)
    if f == "arc":
        return 2 * (HALF_TURN - v["g"])
    raise ValueError(f)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
