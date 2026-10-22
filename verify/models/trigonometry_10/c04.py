"""C04 Angles of elevation and depression: answer models (the key, and one per misconception).

Every item is one right-angled triangle ABC, right-angled at B, with the angle theta at the ground
point C (an angle of depression is moved there as an alternate angle). Its sides, named from C:
  opp = AB (the vertical height), adj = BC (the ground distance), hyp = AC (the line of sight,
  string, ladder or broken part).
Inputs v: g (the given side's length), e (an extra height outside the triangle, optional), and the
angle either as th (radians, a standard angle) or as the book's given values s, c, t
(sin, cos, tan of theta).
Params p: kind ("elev" | "dep"), given ("opp" | "adj" | "hyp"), ask (sides joined by "+", e.g.
"opp" or "opp+hyp" for a broken tree's whole height).
"""
from sympy import cos, pi, sin, tan

SIDES = ("opp", "adj", "hyp")


def _ratios(v, complement=False):
    """(sin, cos, tan) of theta, or of 90 degrees - theta when `complement`."""
    if "th" in v:
        a = pi / 2 - v["th"] if complement else v["th"]
        return sin(a), cos(a), tan(a)
    s, c, t = v["s"], v["c"], v["t"]
    return (c, s, 1 / t) if complement else (s, c, t)


def _sides(given, g, r):
    """All three sides from one known side and the ratios r = (sin, cos, tan), each found with the
    ratio that links it to the known side (as the book does, so its rounded values stay exact)."""
    s, c, t = r
    if given == "opp":
        return {"opp": g, "adj": g / t, "hyp": g / s}
    if given == "adj":
        return {"opp": g * t, "adj": g, "hyp": g / c}
    return {"opp": g * s, "adj": g * c, "hyp": g}


def _asked(p):
    return p["ask"].split("+")


def _extra(v):
    return v.get("e", 0)


def key(v, p):
    sd = _sides(p["given"], v["g"], _ratios(v))
    return sum(sd[k] for k in _asked(p)) + _extra(v)


def m1(v, p):
    """Swaps opposite and adjacent for the angle of elevation (works with 90 degrees - theta)."""
    if p["kind"] != "elev":
        raise ValueError("an angle of elevation item")
    sd = _sides(p["given"], v["g"], _ratios(v, complement=True))
    return sum(sd[k] for k in _asked(p)) + _extra(v)


def m2(v, p):
    """Mixes up the slanting side and a straight side: a given height or distance is taken as the
    line of sight; a given slanting side (ladder) is taken as the ground distance."""
    given = "adj" if p["given"] == "hyp" else "hyp"
    sd = _sides(given, v["g"], _ratios(v))
    return sum(sd[k] for k in _asked(p)) + _extra(v)


def m3(v, p):
    """Puts the angle of depression inside the triangle at the top A, between the vertical and the
    line of sight (so the angle at C becomes 90 degrees - theta)."""
    if p["kind"] != "dep":
        raise ValueError("an angle of depression item")
    sd = _sides(p["given"], v["g"], _ratios(v, complement=True))
    return sum(sd[k] for k in _asked(p)) + _extra(v)


def m4(v, p):
    """Finds the other unknown side of the triangle instead of the one asked."""
    ask = _asked(p)
    if len(ask) != 1:
        raise ValueError("one side asked")
    other = [k for k in SIDES if k not in (p["given"], ask[0])][0]
    return _sides(p["given"], v["g"], _ratios(v))[other] + _extra(v)


def m5(v, p):
    """Stops at the first side found: leaves out the extra height (platform) or, for a broken
    tree, the broken part."""
    ask = _asked(p)
    if "e" not in v and len(ask) == 1:
        raise ValueError("nothing to add")
    return _sides(p["given"], v["g"], _ratios(v))[ask[0]]


# The ratio linking two sides, as (numerator, denominator, index into (sin, cos, tan)).
_RATIO = {frozenset(("opp", "hyp")): ("opp", "hyp", 0), frozenset(("adj", "hyp")): ("adj", "hyp", 1),
          frozenset(("opp", "adj")): ("opp", "adj", 2)}


def m6(v, p):
    """Rearranging slip: when the unknown side is in the ratio's denominator, multiplies the known
    side by the ratio instead of dividing by it."""
    r = _ratios(v)
    g, total, slipped = v["g"], 0, False
    for k in _asked(p):
        _, den, i = _RATIO[frozenset((p["given"], k))]
        total += g * r[i]   # right when the unknown is the numerator, the slip when it is the denominator
        slipped = slipped or k == den
    if not slipped:
        raise ValueError("the unknown is never in a denominator")
    return total + _extra(v)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
