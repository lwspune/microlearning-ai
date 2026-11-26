"""C04 Motional emf: answer models (the key, and one per misconception).

params["ask"] picks the question; params["unit"] is "V" or "mV" (the unit the answer is given in):
  "earth": a rod moving horizontally through the Earth's field (an axle, an aircraft's wings). Inputs l (m), v (m/s)
           or vk (km/h), Bp (the field component at right angles to both the rod and its velocity, in T) and Bo (the
           other component, in T).
  "fall":  a horizontal east-west wire dropped from height h (m), the emf as it is about to hit the ground. Inputs
           l, h, g, Bp (horizontal component), Bo (vertical component).
  "force": the force that keeps a rod of length l (m) sliding at a steady v (m/s) on frictionless rails joined
           through a resistance R (ohm), in a field B (T), in N.
  "dirfall": a named answer (see NAMED).

The key works from the definition: the free charges in the rod feel q v x B along it, so e = B l v with B the
component at right angles to l and v. With a resistance R, I = e/R and the force on the rod is B I l = B^2 l^2 v/R.
"""
from sympy import Integer, Symbol, sqrt

from physics import sig

NAMED = {
    # Ex Q.4: a horizontal east-west wire falling through the Earth's horizontal field (pointing north).
    "dirfall": {"key": "east_high", "C04-M5": "west_high", "C04-M6": "no_emf", "C04-M7": "current_flows"},
}

SCALE = {"V": Integer(1), "mV": Integer(1000)}


def _speed(v, kmh_raw):
    if "vk" in v:
        return v["vk"] if kmh_raw else v["vk"] * 1000 / 3600
    return v["v"]


def _solve(v, p, *, kmh_raw=False, other=False, total=False, avg=False, open_zero=False, no_force=False,
           power=False, no_R=False):
    ask = p["ask"]
    if ask in ("earth", "fall"):
        if open_zero:
            return Integer(0)
        B = sqrt(v["Bp"] ** 2 + v["Bo"] ** 2) if total else (v["Bo"] if other else v["Bp"])
        if ask == "earth":
            speed = _speed(v, kmh_raw)
        else:
            speed = sqrt(2 * v["g"] * v["h"])
            if avg:
                speed = speed / 2
        return sig(B * v["l"] * speed * SCALE[p["unit"]])
    if ask == "force":
        if no_force:
            return Integer(0)
        B, l, s, R = v["B"], v["l"], v["v"], v["R"]
        e = B * l * s
        current = e if no_R else e / R
        F = B * current * l
        return sig(F * s if power else F)
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
    "C04-M1": _m("C04-M1", ("earth",), kmh_raw=True),  # leaves the speed in km/h
    "C04-M2": _m("C04-M2", ("earth", "fall"), other=True),  # uses the component of the field that does not count
    "C04-M3": _m("C04-M3", ("earth", "fall"), total=True),  # uses the whole field, not its perpendicular component
    "C04-M4": _m("C04-M4", ("fall",), avg=True),  # uses the average speed of the fall for the emf at the end
    "C04-M5": _m("C04-M5"),  # gets the positive end reversed
    "C04-M6": _m("C04-M6", ("earth",), open_zero=True),  # thinks a rod not in a closed circuit has no emf
    "C04-M7": _m("C04-M7"),  # thinks the emf drives a steady current along an open wire
    "C04-M8": _m("C04-M8", ("force",), no_force=True),  # thinks steady motion on smooth rails needs no force
    "C04-M9": _m("C04-M9", ("force",), power=True),  # gives the power B^2 l^2 v^2 / R for the force
    "C04-M10": _m("C04-M10", ("force",), no_R=True),  # leaves out the resistance: I = B l v
}
