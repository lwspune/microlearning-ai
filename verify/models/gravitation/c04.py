"""C04 How g varies: answer models (the key, and one per misconception).

params["ask"]:
  "hfrac":  height h, in km, at which g falls by a fraction f (small h: g_h = g(1 - 2h/R)) (inputs R, f);
  "gdepth": g, in m/s^2, at depth d (inputs g, R, d; same units for R and d);
  "gheight": g, in m/s^2, at height h, not small, from G, M, R (inputs G, M, R, h in km);
  "spin":   the drop in g, in m/s^2, from the Earth's spin at latitude lat (inputs R in km, w in rad/s, lat in radians);
  "gmax":   where on the Earth g is greatest (a named answer);
  "centre": a particle's weight at the Earth's centre (a named answer).
"""
from sympy import Symbol, cos, sin

from physics import sig

NAMED = {
    "gmax": {"key": "at_pole", "C04-M6": "at_equator", "C04-M4": "at_centre", "C04-M5": "same_everywhere"},
    "centre": {"key": "zero_weight", "C04-M4": "infinite_weight", "C04-M5": "same_weight", "C04-M3": "more_than_poles"},
}


def _solve(v, p, *, depth_f=False, height_f=False, grows=False, inv_sq=False, same=False, from_c=False,
           becomes=False, two_wrong=False, cos1=False, sin2=False, no_lat=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "hfrac":
        R, f = v["R"], v["f"]
        drop = 1 - f if becomes else f  # fraction by which g falls
        if depth_f:
            return sig(R * drop, n)
        return sig(2 * R * drop if two_wrong else R * drop / 2, n)
    if ask == "gdepth":
        g, R, d = v["g"], v["R"], v["d"]
        if height_f:
            return sig(g * (1 - 2 * d / R), n)
        if grows:
            return sig(g * (1 + d / R), n)
        if inv_sq:
            return sig(g * (R / (R - d)) ** 2, n)
        return sig(g * (1 - d / R), n)
    if ask == "gheight":
        G, M, R, h = v["G"], v["M"], v["R"] * 1000, v["h"] * 1000
        g0 = G * M / R**2
        if same:
            return sig(g0, n)
        if depth_f:
            return sig(g0 * (1 - h / R), n)
        if from_c:
            return sig(G * M / h**2, n)
        return sig(G * M / (R + h) ** 2, n)
    if ask == "spin":
        a = v["R"] * 1000 * v["w"] ** 2
        lat = v["lat"]
        if no_lat:
            return sig(a, n)
        return sig(a * (cos(lat) if cos1 else (sin(lat) ** 2 if sin2 else cos(lat) ** 2)), n)
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
    "C04-M1": _m("C04-M1", ("hfrac", "gheight"), depth_f=True),  # uses the depth rule g(1 - h/R) for a height
    "C04-M2": _m("C04-M2", ("gdepth",), height_f=True),  # uses the height rule g(1 - 2d/R) for a depth
    "C04-M3": _m("C04-M3", ("gdepth",), grows=True),  # thinks g grows on going down, nearer the centre
    "C04-M4": _m("C04-M4", ("gdepth",), inv_sq=True),  # applies GM/r^2 inside the Earth, as if all the mass pulled
    "C04-M5": _m("C04-M5", ("gheight",), same=True),  # thinks g is the same everywhere
    "C04-M6": _m("C04-M6"),  # thinks g is greatest at the equator
    "C04-M7": _m("C04-M7", ("gheight",), from_c=True),  # takes the height as the distance from the centre
    "C04-M8": _m("C04-M8", ("spin",), cos1=True),  # uses cos(lat), not cos^2(lat)
    "C04-M9": _m("C04-M9", ("spin",), sin2=True),  # uses sin^2(lat), measuring the latitude from the pole
    "C04-M10": _m("C04-M10", ("spin",), no_lat=True),  # ignores the latitude, using the equator's value
    "C04-M11": _m("C04-M11", ("hfrac",), becomes=True),  # reads "falls by 10%" as "falls to 10%"
    "C04-M12": _m("C04-M12", ("hfrac",), two_wrong=True),  # multiplies by 2 instead of dividing when solving for h
}
