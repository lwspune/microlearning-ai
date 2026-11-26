"""C05 Electrical energy and power: answer models (the key, and one per misconception).

P = VI = I^2 R = V^2/R; energy W = Pt, in kWh when P is in kW and t in hours; heat H = W/J in calories.
params["ask"]:
  "energy": energy in kWh used by a device drawing I amperes at V volts for h hours (inputs V, I, h);
  "heat":   heat in kcal from V volts, I amperes in h hours, with J joules per calorie (inputs V, I, h, J);
  "lowR":   which of several lamps rated at the same voltage has the least resistance (named);
  "half":   power of a lamp rated P watts at V0 volts when run at V volts (inputs P, V0, V);
  "joule":  energy in joules used by a P kW device in m minutes (inputs P, m).
"""
from sympy import Symbol

from physics import sig

NAMED = {"lowR": {"key": "highest_power", "C05-M10": "lowest_power", "C05-M11": "all_equal", "C05-M12": "need_current"}}


def _solve(v, p, *, power=False, watts=False, div=False, timesJ=False, raw_t=False, v_over_i=False, linear=False,
           rated=False, nosq=False):
    ask = p["ask"]
    if ask == "energy":
        P = v["V"] * v["I"] if watts else v["V"] * v["I"] / 1000
        if power:
            return sig(P)
        return sig(P / v["h"] if div else P * v["h"])
    if ask == "heat":
        P = v["V"] / v["I"] if v_over_i else v["V"] * v["I"]
        t = v["h"] if raw_t else v["h"] * 3600
        W = P * t
        return sig((W * v["J"] if timesJ else W / v["J"]) / 1000)
    if ask == "half":
        R = v["V0"] ** 2 / v["P"]
        if rated:
            return sig(v["P"])
        if linear:
            return sig(v["P"] * v["V"] / v["V0"])
        return sig(v["V"] / R if nosq else v["V"] ** 2 / R)
    if ask == "joule":
        P = v["P"] if watts else v["P"] * 1000
        t = v["m"] if raw_t else v["m"] * 60
        return sig(P / t if div else P * t)
    raise ValueError(ask)


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
    "C05-M1": _m("C05-M1", ("energy",), power=True),  # gives the power as the energy
    "C05-M2": _m("C05-M2", ("energy", "joule"), watts=True),  # mixes up W and kW
    "C05-M3": _m("C05-M3", ("energy", "joule"), div=True),  # divides by the time
    "C05-M4": _m("C05-M4", ("heat",), timesJ=True),  # multiplies by J
    "C05-M5": _m("C05-M5", ("heat", "joule"), raw_t=True),  # leaves the time in hours or minutes
    "C05-M6": _m("C05-M6", ("heat",), v_over_i=True),  # takes P = V/I
    "C05-M7": _m("C05-M7", ("half",), linear=True),  # takes the power proportional to V
    "C05-M8": _m("C05-M8", ("half",), rated=True),  # thinks a lamp always gives its rated power
    "C05-M9": _m("C05-M9", ("half",), nosq=True),  # forgets to square V
    "C05-M10": _m("C05-M10"),  # thinks a higher power means a higher resistance
    "C05-M11": _m("C05-M11"),  # thinks lamps at one voltage have equal resistance
    "C05-M12": _m("C05-M12"),  # thinks the currents must be given
}
