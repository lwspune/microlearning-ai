"""C02 Kinds of force: answer models (the key, and one per misconception).

params["ask"]:
  "static":   friction, in N, on a block of m kg (static coefficient mu) pushed horizontally by F1 N one way and F2 N
              the other, and not moving (inputs m, mu, F1, F2, g);
  "push":     normal force, in N, on a block of m kg pushed by F N at th degrees below the horizontal (inputs m, F, th, g);
  "brake":    braking force, in N, on a car of M kg at u km/h that coasts to rest in t s, but brakes to rest in s m
              (inputs M, u_kmh, t, s);
  "neutral":  distance from the heavier body (masses M1 > M2, d apart) where the two gravitational pulls cancel, in the
              unit of d (inputs M1, M2, d);
  "fraction": friction as a fraction of the weight of a car of Mc ton, coasting from u km/h to rest in s m, as a truck of
              Mt ton did (inputs u_kmh, s, g, Mt, Mc);
  "pseudo":   what a bob hung in a car does as the car speeds up and then moves steadily (a named answer).
"""
from sympy import Integer, Rational, Symbol, cos, pi, sin, sqrt

from physics import sig

NAMED = {
    "pseudo": {"key": "backThenVertical", "C02-M13": "forwards", "C02-M14": "alwaysVertical",
               "C02-M15": "backStaysTilted"},
}


def _solve(v, p, *, limiting=False, none=False, mass=False, mg=False, pull=False, cos_=False, total=False,
           add=False, no_2=False, no_root=False, swap=False, midway=False, same_force=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "static":
        m, mu, F, g = v["m"], v["mu"], v["F1"] - v["F2"], v["g"]
        if F >= mu * m * g:
            raise ValueError("the block would slide")
        if limiting:
            return sig(mu * m * g, n)
        if none:
            return Integer(0)
        if mass:
            return sig(mu * m, n)
        return sig(F, n)
    if ask == "push":
        m, F, th, g = v["m"], v["F"], v["th"] * pi / 180, v["g"]
        if mg:
            return sig(m * g, n)
        side = F * (cos(th) if cos_ else sin(th))
        return sig(m * g - side if pull else m * g + side, n)
    if ask == "brake":
        M, u = v["M"], v["u_kmh"] * Rational(5, 18)
        a_f = u / v["t"]
        a_1 = u**2 / ((1 if no_2 else 2) * v["s"])
        if total:
            return sig(M * a_1, n)
        return sig(M * (a_1 + a_f if add else a_1 - a_f), n)
    if ask == "neutral":
        M1, M2, d = v["M1"], v["M2"], v["d"]
        if midway:
            return sig(d / 2, n)
        w1, w2 = (M1, M2) if no_root else (sqrt(M1), sqrt(M2))
        return sig(d * (w2 if swap else w1) / (w1 + w2), n)
    if ask == "fraction":
        u = v["u_kmh"] * Rational(5, 18)
        a = u**2 / ((1 if no_2 else 2) * v["s"])
        if mass:
            return sig(a, n)  # friction / mass, not friction / weight
        if same_force:
            return sig(a / v["g"] * v["Mt"] / v["Mc"], n)
        return sig(a / v["g"], n)
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
    "C02-M1": _m("C02-M1", ("static",), limiting=True),  # static friction always at its limit mu N
    "C02-M2": _m("C02-M2", ("static",), none=True),  # no friction until the block slides
    "C02-M3": _m("C02-M3", ("static", "fraction"), mass=True),  # uses the mass for the weight
    "C02-M4": _m("C02-M4", ("push",), mg=True),  # normal force is always mg
    "C02-M5": _m("C02-M5", ("push",), pull=True),  # treats a push like a pull
    "C02-M6": _m("C02-M6", ("push",), cos_=True),  # takes the cos component as the vertical one
    "C02-M7": _m("C02-M7", ("brake",), total=True),  # brakes supply the whole retardation
    "C02-M8": _m("C02-M8", ("brake",), add=True),  # adds friction to the braking retardation
    "C02-M9": _m("C02-M9", ("brake", "fraction"), no_2=True),  # drops the 2 in v^2 = u^2 + 2as
    "C02-M10": _m("C02-M10", ("neutral",), no_root=True),  # forgets the square root (force ~ 1/r^2)
    "C02-M11": _m("C02-M11", ("neutral",), swap=True),  # gives the distance from the lighter body
    "C02-M12": _m("C02-M12", ("neutral",), midway=True),  # takes the midpoint
    "C02-M13": _m("C02-M13"),  # pseudo force along the frame's acceleration
    "C02-M14": _m("C02-M14"),  # pseudo forces are not real, so nothing happens
    "C02-M15": _m("C02-M15"),  # velocity, not acceleration, makes the pseudo force
    "C02-M16": _m("C02-M16", ("fraction",), same_force=True),  # same friction force for any vehicle
}
