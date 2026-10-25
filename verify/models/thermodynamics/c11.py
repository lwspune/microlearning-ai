"""C11 Carnot engine: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "T_C":     cold-reservoir temperature, in °C, of a Carnot engine of efficiency eta with its hot reservoir at T_H_C °C
             (inputs eta, T_H_C);
  "depends": what a Carnot engine's efficiency depends on (a named answer);
  "W":       work, in J, a Carnot engine does taking in Q_H between reservoirs at T_H and T_C kelvin (inputs Q_H, T_H, T_C);
  "why":     why a Carnot cycle has two isothermal and two adiabatic steps (a named answer);
  "eta":     efficiency, in %, of a Carnot engine between T_H_C and T_C_C °C (inputs T_H_C, T_C_C).

The key uses the Carnot efficiency eta = 1 - T_C / T_H with absolute temperatures (°C + 273, as the book does),
Q_C / Q_H = T_C / T_H, and W = eta Q_H, solving in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)

NAMED = {
    "depends": {"key": "reservoir_temps", "C11-M4": "working_substance", "C11-M5": "heat_taken_in", "C11-M6": "engine_size"},
    "why": {"key": "heat_at_reservoir_temps", "C11-M10": "arbitrary", "C11-M11": "heat_in_adiabatics", "C11-M12": "isochoric_too"},
}


def _eta(TH, TC, *, over_TC=False, ratio=False, ideal=False):
    if ideal:
        return 1
    if over_TC:
        return (TH - TC) / TC
    if ratio:
        return TC / TH
    return 1 - TC / TH


def _solve(v, p, *, celsius=False, times=False, kelvin=False, rejected=False, **kw):
    ask, n = p["ask"], p.get("sf", 3)
    K = 0 if celsius else 273
    if ask == "T_C":
        TH = v["T_H_C"] + K
        if times:
            TC = v["eta"] * TH
        else:
            (TC,) = solve(1 - _x / TH - v["eta"], _x)  # eta = 1 - T_C / T_H
        return sig(TC if (kelvin or celsius) else TC - 273, n)
    if ask == "W":
        if rejected:
            return sig(v["Q_H"] * v["T_C"] / v["T_H"], n)  # Q_C / Q_H = T_C / T_H
        return sig(_eta(v["T_H"], v["T_C"], **kw) * v["Q_H"], n)
    if ask == "eta":
        return sig(100 * _eta(v["T_H_C"] + K, v["T_C_C"] + K, **kw), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


def _numeric(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C11-M1": _numeric(("T_C", "eta"), celsius=True),  # uses Celsius temperatures
    "C11-M2": _numeric(("T_C",), times=True),  # takes T_C = eta T_H
    "C11-M3": _numeric(("T_C",), kelvin=True),  # leaves the answer in kelvin
    "C11-M4": _named("C11-M4"),
    "C11-M5": _named("C11-M5"),
    "C11-M6": _named("C11-M6"),
    "C11-M7": _numeric(("W",), rejected=True),  # gives the heat rejected instead of the work
    "C11-M8": _numeric(("W", "eta"), over_TC=True),  # divides the temperature difference by T_C
    "C11-M9": _numeric(("W",), ideal=True),  # thinks an ideal engine has efficiency 1
    "C11-M10": _named("C11-M10"),
    "C11-M11": _named("C11-M11"),
    "C11-M12": _named("C11-M12"),
    "C11-M13": _numeric(("eta",), ratio=True),  # takes eta = T_C / T_H
}
