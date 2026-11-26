"""C06 Earth satellites: answer models (the key, and one per misconception).

A satellite in a circular orbit of radius r = R + h: gravity is the centripetal force, GMm/r^2 = m v^2 / r, so
v = sqrt(GM/r) and T = 2 pi r / v = 2 pi sqrt(r^3 / GM). params["ask"]:
  "v":      orbital speed, in m/s, at height h (inputs G, M, R, h in m);
  "T":      period, in s, at height h (inputs G, M, R, h in m);
  "vratio": v_B / v_A for satellites with masses in the ratio mB and orbit radii in the ratio rB (inputs mB, rB);
  "geo":    height, in m, of a geostationary orbit (inputs G, M, R in m, T in s);
  "Trho":   period, in s, of a satellite skimming a planet of density rho (inputs G, rho);
  "geodef": which satellite is geostationary (a named answer).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import sig

NAMED = {
    "geodef": {"key": "equatorial_west_east_24h", "C06-M8": "any_24h_orbit", "C06-M10": "equatorial_east_west_24h",
               "C06-M11": "at_rest_no_gravity"},
}


def _solve(v, p, *, use_R=False, use_h=False, energy=False, no_2pi=False, radius=False, mass=False, grows=False,
           inv_r=False, vol=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 2 if energy else 1  # energy: (1/2) m v^2 = GMm/r, so v^2 = 2GM/r
    if ask in ("v", "T"):
        r = v["R"] if use_R else (v["h"] if use_h else v["R"] + v["h"])
        GM = v["G"] * v["M"]
        if ask == "v":
            return sig(sqrt(k * GM / r), n)
        return sig((1 if no_2pi else 2 * pi) * sqrt(r**3 / (k * GM)), n)
    if ask == "vratio":
        mB, rB = v["mB"], v["rB"]
        if grows:
            return sig(sqrt(rB), n)
        if inv_r:
            return sig(1 / rB, n)
        if mass:
            return sig(sqrt(mB / rB), n)
        return sig(1 / sqrt(rB), n)
    if ask == "geo":
        GM, T = v["G"] * v["M"], v["T"]
        c = 1 if no_2pi else 4 * pi**2
        r = (k * GM * T**2 / c) ** Rational(1, 3)
        return sig(r if radius else r - v["R"], n)
    if ask == "Trho":
        G, rho = v["G"], v["rho"]
        GM_R3 = G * rho * (1 if vol else Rational(4, 3) * pi)  # GM / R^3 with M = (4/3) pi R^3 rho
        return sig((1 if no_2pi else 2 * pi) * sqrt(1 / (k * GM_R3)), n)
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
    "C06-M1": _m("C06-M1", ("v", "T"), use_R=True),  # uses R for the orbit radius, forgetting the height
    "C06-M2": _m("C06-M2", ("v", "T"), use_h=True),  # uses the height h for the orbit radius
    "C06-M3": _m("C06-M3", ("v", "geo", "Trho"), energy=True),  # sets (1/2) m v^2 = GMm/r instead of balancing forces
    "C06-M4": _m("C06-M4", ("vratio",), mass=True),  # thinks the orbital speed grows with the satellite's mass
    "C06-M5": _m("C06-M5", ("T", "geo", "Trho"), no_2pi=True),  # leaves out the 2 pi in the period
    "C06-M6": _m("C06-M6", ("geo",), radius=True),  # gives the orbit radius as the height
    "C06-M7": _m("C06-M7", ("vratio",), grows=True),  # thinks a bigger orbit means a faster satellite
    "C06-M8": _m("C06-M8"),  # thinks any satellite with a 24 h period is geostationary
    "C06-M9": _m("C06-M9", ("vratio",), inv_r=True),  # takes v as varying as 1/r
    "C06-M10": _m("C06-M10"),  # thinks the direction of revolution does not matter
    "C06-M11": _m("C06-M11"),  # thinks a geostationary satellite is at rest, where gravity is zero
    "C06-M12": _m("C06-M12", ("Trho",), vol=True),  # takes the planet's volume as R^3, dropping the 4/3 pi
}
