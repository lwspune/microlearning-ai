"""C04 Echo, reverberation and acoustics: answer models (the key, and one per misconception).

params["ask"]:
  "walls": what the walls of a concert hall should do (a named answer);
  "depth": depth, in m, of a reflector whose echo returns after t s, sound speed v (inputs v, t);
  "time":  time, in s, for the echo from a wall d m away, sound speed v (inputs d, v);
  "cliffs": speed of sound, in m/s, from echoes after t1 and t2 s off two cliffs D m apart (inputs D, t1, t2);
  "claps": distance, in m, from a wall when r claps a minute each meet the last clap's echo, sound speed v
           (inputs r, v);
  "least": least distance, in m, of a reflector for a distinct echo, persistence tp s, sound speed v (inputs v, tp).

The key: an echo travels to the reflector and back, so 2 d = v t.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "walls": {"key": "absorb_sound", "C04-M1": "reflect_sound", "C04-M2": "amplify_sound",
              "C04-M3": "transmit_sound"},
}


def _solve(v, p, *, one_way=False, wrong2=False, flip=False, diff=False, rate=False):
    ask, n = p["ask"], p.get("sf", 3)
    # f is the factor on the far side of 2 d = v t: d = v t / f
    f = 1 if one_way else (Rational(1, 2) if wrong2 else 2)
    if ask in ("depth", "least"):
        t = v["t"] if ask == "depth" else v["tp"]
        return sig(v["v"] / t if flip else v["v"] * t / f, n)
    if ask == "time":
        if flip:
            return sig(v["v"] / v["d"], n)
        return sig(v["d"] * f / v["v"], n)
    if ask == "cliffs":
        t = v["t2"] - v["t1"] if diff else v["t1"] + v["t2"]
        return sig(f * v["D"] / t, n)
    if ask == "claps":
        dt = v["r"] / 60 if rate else 60 / v["r"]
        return sig(v["v"] * dt / f, n)
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


ALL = ("depth", "time", "cliffs", "claps", "least")
MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1"),  # reflecting walls make music sound better
    "C04-M2": _m("C04-M2"),  # walls can amplify sound
    "C04-M3": _m("C04-M3"),  # walls should let the sound out
    "C04-M4": _m("C04-M4", ALL, one_way=True),  # forgets the return journey
    "C04-M5": _m("C04-M5", ALL, wrong2=True),  # puts the factor 2 on the wrong side
    "C04-M6": _m("C04-M6", ("depth", "time", "least"), flip=True),  # divides speed by time (or by distance)
    "C04-M7": _m("C04-M7", ("cliffs",), diff=True),  # uses the difference of the echo times
    "C04-M8": _m("C04-M8", ("claps",), rate=True),  # takes claps per minute / 60 as the interval
}
