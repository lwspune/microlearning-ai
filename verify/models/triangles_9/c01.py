"""C01 Angle sum and exterior angle: answer models (the key, and one per misconception).

Every answer is an angle in degrees (a plain number; items use fmt="deg").

params["ask"]:
  "ext"        inputs top, base: the two remote interior angles; side through the base vertex
               produced past the third vertex. Find the exterior angle there.
  "remote"     inputs ext (the exterior angle) and given (one remote interior angle).
               Find the other remote interior angle.
  "expr"       angles x + o1, x + o2, x + o3 (inputs o1, o2, o3); params["idx"] the asked one.
  "ratio_ext"  angles in the ratio r1 : r2 : r3 (inputs); the side through the r2 vertex is
               produced past the r3 vertex. Find the exterior angle there.
  "two_step"   book 3.1 SolvedEx.2: Q-R-S on a line, T on seg PR, seg TS drawn. inputs
               q = angle PQR, p = angle QPR, s = angle TSR. Find angle RTS.

The key uses only the angle sum (180) and the linear pair (180), never the remote interior
angles theorem being taught.
"""
from sympy import Abs, Integer

STRAIGHT = Integer(180)


def _third(a, b, total=STRAIGHT):
    """The third angle of a triangle whose angles add to `total`."""
    return total - a - b


def _x(v, total=STRAIGHT):
    """x when the angles are x + o1, x + o2, x + o3 and they add to `total`."""
    return (total - v["o1"] - v["o2"] - v["o3"]) / 3


def _ratio_x(v, total=STRAIGHT):
    return total / (v["r1"] + v["r2"] + v["r3"])


def key(v, p):
    ask = p["ask"]
    if ask == "ext":
        interior = _third(v["top"], v["base"])
        return STRAIGHT - interior                       # linear pair
    if ask == "remote":
        interior = STRAIGHT - v["ext"]                   # linear pair
        return _third(interior, v["given"])
    if ask == "expr":
        return _x(v) + v["o" + p["idx"]]
    if ask == "ratio_ext":
        return STRAIGHT - v["r3"] * _ratio_x(v)
    if ask == "two_step":
        prs = STRAIGHT - _third(v["q"], v["p"])          # linear pair at R
        return _third(prs, v["s"])                       # angle TRS = angle PRS
    raise ValueError(ask)


def m1(v, p):
    """Swaps the exterior angle and the interior angle at the same vertex."""
    ask = p["ask"]
    if ask == "ext":
        return _third(v["top"], v["base"])
    if ask == "remote":
        return _third(v["ext"], v["given"])              # takes the exterior angle as interior
    if ask == "ratio_ext":
        return v["r3"] * _ratio_x(v)
    if ask == "two_step":
        return _third(_third(v["q"], v["p"]), v["s"])
    raise ValueError("M1 needs an exterior angle")


def m2(v, p):
    """The angles of a triangle add up to 360 degrees."""
    ask = p["ask"]
    if ask == "expr":
        return _x(v, 360) + v["o" + p["idx"]]
    if ask == "ratio_ext":
        return (v["r1"] + v["r2"]) * _ratio_x(v, 360)
    raise ValueError("M2 needs an angle-sum equation")


def m3(v, p):
    """The exterior angle is the difference of the remote interior angles."""
    ask = p["ask"]
    if ask == "ext":
        return Abs(v["top"] - v["base"])
    if ask == "remote":
        return v["ext"] + v["given"]
    if ask == "ratio_ext":
        return Abs(v["r1"] - v["r2"]) * _ratio_x(v)
    if ask == "two_step":
        return _third(Abs(v["q"] - v["p"]), v["s"])
    raise ValueError("M3 needs an exterior angle")


def m4(v, p):
    """Stops one step short: reports the first value found (x, or the angle on the way)."""
    ask = p["ask"]
    if ask == "remote":
        return STRAIGHT - v["ext"]
    if ask == "expr":
        return _x(v)
    if ask == "ratio_ext":
        return _ratio_x(v)
    if ask == "two_step":
        return STRAIGHT - _third(v["q"], v["p"])         # angle PRS, the first answer
    raise ValueError("M4 needs a two-step question")


def m5(v, p):
    """Pairs the exterior angle with the remote angle on the same line, as a linear pair."""
    ask = p["ask"]
    if ask == "ext":
        return STRAIGHT - v["base"]
    if ask == "ratio_ext":
        return STRAIGHT - v["r2"] * _ratio_x(v)
    raise ValueError("M5 needs a remote angle on the produced side")


def m6(v, p):
    """Moves the constant across '=' without changing its sign."""
    if p["ask"] != "expr":
        raise ValueError("M6 needs x + constants")
    x = (STRAIGHT + v["o1"] + v["o2"] + v["o3"]) / 3
    return x + v["o" + p["idx"]]


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
