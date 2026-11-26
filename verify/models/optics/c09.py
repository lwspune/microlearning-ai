"""C09 The human eye and its defects: answer models (the key, and one per misconception).

Cartesian signs, light from left to right, the thin lens equation 1/v - 1/u = 1/f, power P = 1/f with f in metres.
Short sight (myopia), far point d: a concave lens images a distant object (u = -oo) at the far point (v = -d),
so f = -d. Long sight (hypermetropia), near point d: a convex lens images an object at 25 cm (u = -25 cm) at the
near point (v = -d). The eye lens, a distance v from the retina, focuses an object at distance d: 1/f = 1/v + 1/d.
params["ask"]:
  "far":   power (D) of the lens for a short-sighted eye with far point d cm (input d);
  "near":  near point (cm) of a person whose reading glass has power Pr (D); Pd (D), the distance glasses'
           power, is a red herring (inputs Pr, Pd);
  "eye":   power (D) of the eye lens, v cm from the retina, looking at an object d cm away (inputs v, d);
  "myopia", "focus", "image": named answers.
"""
from sympy import Integer, Symbol

from physics import sig

D0 = Integer(25)  # cm, least distance of distinct vision of a normal eye
NAMED = {
    "myopia": {"key": "near_clear_concave", "C09-M1": "far_clear_convex", "C09-M4": "near_clear_convex",
               "C09-M10": "neither_bifocal"},
    "focus": {"key": "lens_thicker", "C09-M2": "lens_moves", "C09-M3": "pupil_focuses", "C09-M9": "lens_thinner"},
    "image": {"key": "distant_before", "C09-M1": "nearby_beyond", "C09-M4": "distant_beyond",
              "C09-M7": "nearby_before"},
}


def _solve(v, p, *, convex=False, rules=False, cm=False, mirror=False, far=False, fixed=False, backward=False):
    ask = p["ask"]
    if ask == "far":
        d = v["d"]
        if rules:  # the long-sight rule: object at 25 cm, image at the far point
            inv_f = 1 / (-d) - 1 / (-D0)
        else:
            inv_f = 1 / (-d)  # f = -d
            if convex:
                inv_f = -inv_f
        return sig(inv_f if cm else 100 * inv_f)  # 1/f in 1/cm; times 100 for 1/m
    if ask == "near":
        if far:  # the far point of the distance glasses
            return sig(100 / abs(v["Pd"]))
        f = 100 / v["Pr"]  # cm
        if rules:  # the short-sight rule: near point = |f|
            return sig(abs(f))
        u = -D0
        inv_v = 1 / f - 1 / u if mirror else 1 / f + 1 / u
        return sig(abs(1 / inv_v))
    if ask == "eye":
        vv, d = v["v"], v["d"]
        if fixed:  # the lens keeps the focal length it has for a distant object
            inv_f = 1 / vv
        elif backward:
            inv_f = 1 / vv - 1 / d
        else:
            inv_f = 1 / vv + 1 / d
        return sig(inv_f if cm else 100 * inv_f)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C09-M1": _m("C09-M1"),  # swaps myopia and hypermetropia
    "C09-M2": _m("C09-M2", ("eye",), fixed=True),  # the eye focuses like a camera: fixed f, the lens moves
    "C09-M3": _m("C09-M3"),  # thinks the pupil does the focusing
    "C09-M4": _m("C09-M4", ("far",), convex=True),  # thinks a short-sighted eye is too weak: a convex lens
    "C09-M5": _m("C09-M5", ("near",), mirror=True),  # the mirror equation for the spectacle lens
    "C09-M6": _m("C09-M6", ("far", "near"), rules=True),  # swaps the two correction rules
    "C09-M7": _m("C09-M7", ("near",), far=True),  # confuses the near point with the far point
    "C09-M8": _m("C09-M8", ("far", "eye"), cm=True),  # f in cm in P = 1/f
    "C09-M9": _m("C09-M9", ("eye",), backward=True),  # accommodation backwards: f longer for a near object
    "C09-M10": _m("C09-M10"),  # confuses short sight with presbyopia
}
