"""C02 Tangent segments from a point: answer models (the key, and one per misconception).

Seg RM and seg RN are tangent segments from R to a circle with centre O, touching it at M and N.
Angles are plain numbers of degrees. params["ask"]:
  central       v["t"] = angle MRN between the tangents; find the central angle MON.
  tangent       v["c"] = central angle MON; find the angle MRN between the tangents.
  half_tangent  v["c"] = central angle MON; find angle MRO (OR bisects angle MRN).
  in_tri        a circle inside triangle ABC touches its sides; v["p"] = perimeter, v["a"] = BC, and
                AB = AC (isosceles); find the tangent segment from A.
  ex_tri        a circle touches side BC at P from outside the triangle and AB, AC extended at M, N;
                v["c"] = AB, v["a"] = BC, v["p"] = perimeter; find AM.
"""
from sympy import Rational, sympify


def _half(x):
    return sympify(x) * Rational(1, 2)


def key(v, p):
    """Radii meet the tangents at right angles: angle MRN + angle MON = 360 - 90 - 90 = 180.
    Tangent segments from one point are equal."""
    ask = p["ask"]
    if ask == "central":
        return 360 - 90 - 90 - v["t"]
    if ask == "tangent":
        return 360 - 90 - 90 - v["c"]
    if ask == "half_tangent":
        return _half(360 - 90 - 90 - v["c"])
    if ask == "in_tri":
        ab = _half(v["p"] - v["a"])          # AB = AC
        bp = _half(v["a"])                   # BP = BR = CR = CQ, and BR + RC = BC
        return ab - bp
    if ask == "ex_tri":
        return _half(v["p"])                 # AM = AN and AM + AN = AB + BP + AC + CP = perimeter
    raise ValueError(ask)


def m1(v, p):
    """The angle between the tangents equals the central angle (opposite angles of OMRN equal)."""
    ask = p["ask"]
    if ask == "central":
        return v["t"]
    if ask == "tangent":
        return v["c"]
    if ask == "half_tangent":
        return _half(v["c"])
    raise ValueError("angles only")


def m2(v, p):
    """Mixes up the half angle that OR makes with the whole angle: gives the half when the
    whole is asked, and the whole when the half is asked."""
    ask = p["ask"]
    if ask == "central":
        return _half(180 - v["t"])           # angle MOR
    if ask == "tangent":
        return _half(180 - v["c"])           # angle MRO
    if ask == "half_tangent":
        return 180 - v["c"]                  # angle MRN
    raise ValueError("angles only")


def m3(v, p):
    """Adds the known angles of OMRN (the given one and the two right angles) and stops there."""
    ask = p["ask"]
    if ask == "central":
        return v["t"] + 90 + 90
    if ask == "tangent":
        return v["c"] + 90 + 90
    if ask == "half_tangent":
        return _half(v["c"] + 90 + 90)
    raise ValueError("angles only")


def m4(v, p):
    """The circle touches each side at its midpoint."""
    ask = p["ask"]
    if ask == "in_tri":
        return _half(_half(v["p"] - v["a"]))  # AP = AB / 2
    if ask == "ex_tri":
        return v["c"] + _half(v["a"])        # BM = BP = BC / 2
    raise ValueError("triangles only")


def m5(v, p):
    """Takes a whole side BC as the tangent segment from B (BP = BC)."""
    ask = p["ask"]
    if ask == "in_tri":
        return _half(v["p"] - v["a"]) - v["a"]
    if ask == "ex_tri":
        return v["c"] + v["a"]
    raise ValueError("triangles only")


def m6(v, p):
    """Gives AM + AN (the two equal tangent segments from A together), forgetting to halve."""
    ask = p["ask"]
    if ask == "in_tri":
        return 2 * key(v, p)
    if ask == "ex_tri":
        return v["p"]
    raise ValueError("triangles only")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
