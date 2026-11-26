"""C05 Projectile motion: answer models (the key, and one per misconception).

params["ask"]:
  "height": greatest height, in m, from initial components ux, uy (inputs ux, uy, g);
  "umin":   least speed, in m/s, for a range R at angle th (radians) (inputs R, th, g);
  "cliff":  distance, in m, from the foot of a cliff of height h where a body thrown horizontally at u lands (inputs u, h, g);
  "flight": time of flight, in s, at speed u and angle th (inputs u, th, g);
  "top":    speed, in m/s, at the highest point (inputs u, th);
  "bus":    the path, seen from the road, of a ball dropped from a moving bus (a named answer).
"""
from sympy import Symbol, cos, sin, sqrt

from physics import sig

NAMED = {
    "bus": {"key": "parabola_forward", "C05-M1": "parabola_back", "C05-M8": "straight_down", "C05-M9": "slant_line"},
}


def _solve(v, p, *, swap=False, whole=False, no2=False, sin1=False, two_sin=False, no_root=False, no_half=False,
           h_over_u=False, to_top=False, zero=False, same=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "height":
        ux, uy, g = v["ux"], v["uy"], v["g"]
        w = sqrt(ux**2 + uy**2) if whole else (ux if swap else uy)
        return sig(w**2 / (g if no2 else 2 * g), n)
    if ask == "umin":
        R, th, g = v["R"], v["th"], v["g"]
        s = sin(th) if sin1 else (2 * sin(th) if two_sin else sin(2 * th))
        u2 = R * g / s
        return sig(u2 if no_root else sqrt(u2), n)
    if ask == "cliff":
        u, h, g = v["u"], v["h"], v["g"]
        if h_over_u:
            t = h / u
        elif no_root:
            t = 2 * h / g
        else:
            t = sqrt((h if no_half else 2 * h) / g)
        return sig(u * t, n)
    if ask == "flight":
        u, th, g = v["u"], v["th"], v["g"]
        uy = u if whole else u * (cos(th) if swap else sin(th))
        return sig(uy / g if to_top else 2 * uy / g, n)
    if ask == "top":
        u, th = v["u"], v["th"]
        if zero:
            return sig(0, n)
        if same:
            return sig(u, n)
        return sig(u * (sin(th) if swap else cos(th)), n)
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
    "C05-M1": _m("C05-M1"),  # thinks the forward velocity dies away
    "C05-M2": _m("C05-M2", ("height", "flight", "top"), swap=True),  # swaps sin and cos (or the components)
    "C05-M3": _m("C05-M3", ("height", "flight"), whole=True),  # uses the whole speed for the vertical motion
    "C05-M4": _m("C05-M4", ("height",), no2=True),  # forgets the 2 in 2g
    "C05-M5": _m("C05-M5", ("umin",), sin1=True),  # sin(theta) for sin(2 theta)
    "C05-M6": _m("C05-M6", ("umin",), two_sin=True),  # 2 sin(theta) for sin(2 theta)
    "C05-M7": _m("C05-M7", ("umin", "cliff"), no_root=True),  # forgets the square root
    "C05-M8": _m("C05-M8"),  # thinks the ball falls straight down
    "C05-M9": _m("C05-M9"),  # thinks the path is a straight slanting line
    "C05-M10": _m("C05-M10", ("cliff",), no_half=True),  # forgets the 1/2 in h = g t^2 / 2
    "C05-M11": _m("C05-M11", ("cliff",), h_over_u=True),  # times the fall with the throw speed
    "C05-M12": _m("C05-M12", ("flight",), to_top=True),  # gives the time to the top
    "C05-M13": _m("C05-M13", ("top",), zero=True),  # thinks the velocity is zero at the top
    "C05-M14": _m("C05-M14", ("top",), same=True),  # thinks the speed never changes
}
