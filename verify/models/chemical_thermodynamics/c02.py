"""C02 Pressure-volume work: answer models (the key, and one per misconception).

W = -P_ext * dV, work done on the system positive; 1 dm^3 bar = 100 J, 1 L atm = 101.3 J.
params["ask"]:
  "W":   work for an expansion or compression (inputs P, V1, V2; optional Vm: the gas first expands
         freely into vacuum from V1 to Vm, then against P from Vm to V2);
  "rxn": work for a gas reaction A + B -> C at constant P with volumes a, b in mL (inputs P, a, b);
  "P":   the external pressure from the work (inputs W in J, V1, V2), in bar.
params: "unit" "bar" (P in bar, V in dm^3, default) or "atm" (P in atm, V in L); "out" "J" (default) or "kJ".
"""
from sympy import Abs, Rational

from chemistry import sig

_FACTOR = {"bar": 100, "atm": Rational(1013, 10)}  # J per (pressure unit x dm^3)


def _solve(v, p, how):
    n = p.get("sf", 3)
    f = 1 if how == "M2" else _FACTOR[p.get("unit", "bar")]
    out = Rational(1, 1000) if p.get("out") == "kJ" else 1
    ask = p["ask"]
    if ask == "W":
        P, V1, V2 = v["P"], v["V1"], v["V2"]
        start = v.get("Vm", V1)
        if how == "M4":
            if "Vm" not in v:
                raise ValueError("no expansion into vacuum here")
            start = V1  # the free stage taken as working against P too
        dV = V2 if how == "M3" else V2 - start
        W = -P * dV * f
        return sig((-W if how == "M1" else W) * out, n)
    if ask == "rxn":
        if how in ("M3", "M4"):
            raise ValueError("does not apply to this item")
        scale = 1 if how == "M5" else Rational(1, 1000)  # mL to dm^3, or not
        dV = -min(v["a"], v["b"]) * scale  # two gas volumes become one: the volume falls by the smaller one
        W = -v["P"] * dV * f
        return sig((-W if how == "M1" else W) * out, n)
    if ask == "P":
        if how in ("M4", "M5"):
            raise ValueError("does not apply to this item")
        W, V1, V2 = v["W"], v["V1"], v["V2"]
        if how == "M3":
            return sig(Abs(W) / (f * V2), n)
        P = -W / (f * (V2 - V1))
        return sig(-P if how == "M1" else P, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p, "key")


def _m(how):
    def model(v, p):
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C02-M1": _m("M1"),  # drops the minus sign: W = +P_ext dV
    "C02-M2": _m("M2"),  # leaves the answer in dm^3 bar (or L atm) as if it were J
    "C02-M3": _m("M3"),  # uses the final volume in place of the change in volume
    "C02-M4": _m("M4"),  # thinks expansion into vacuum also does work against P_ext
    "C02-M5": _m("M5"),  # takes mL as dm^3 (forgets to divide by 1000)
}
