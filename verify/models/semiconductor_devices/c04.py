"""C04 The Zener diode: answer models (the key, and one per misconception).

A Zener regulator: supply Vs, series resistor R_S, the Zener (reverse biased, V_Z) in parallel with the load R_L.
I_S = (Vs - V_Z) / R_S, I_L = V_Z / R_L, I_Z = I_S - I_L; the largest safe Zener current is P_Z / V_Z.
params["ask"]:
  "Imax": the largest Zener current, in A (inputs P power rating W, VZ, Vs);
  "RS":   the least series resistance, in ohm, so the Zener stays within its rating (inputs P, VZ, Vs);
  "IZ":   the Zener current, in mA (inputs Vs, VZ, RS, RL in ohm);
  "rs_why", "differ", "breakdown": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "rs_why": {"key": "protect_zener", "C04-M3": "reverse_bias_it", "C04-M1": "forward_bias_it",
               "C04-M4": "protect_load"},
    "differ": {"key": "heavy_rev_safe", "C04-M1": "heavy_forward", "C04-M2": "heavy_below_breakdown",
               "C04-M9": "light_rev_safe"},
    "breakdown": {"key": "I_varies_V_const", "C04-M14": "V_varies_I_const", "C04-M1": "forward_knee",
                  "C04-M2": "destroyed"},
}


def _solve(v, p, *, use_vs=False, use_drop=False, times=False, no_vz=False, vz_only=False, no_load=False,
           add_load=False, load_vs=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("Imax", "RS"):
        P, VZ, Vs = v["P"], v["VZ"], v["Vs"]
        if times:
            I = P * VZ
        elif use_vs:
            I = P / Vs
        elif use_drop:
            I = P / (Vs - VZ)
        else:
            I = P / VZ
        if ask == "Imax":
            return sig(I, n)
        if no_vz:
            return sig(Vs / I, n)
        if vz_only:
            return sig(VZ / I, n)
        return sig((Vs - VZ) / I, n)
    if ask == "IZ":
        Vs, VZ, RS, RL = v["Vs"], v["VZ"], v["RS"], v["RL"]
        IS = (Vs - VZ) / RS
        IL = (Vs if load_vs else VZ) / RL
        if no_load:
            return sig(IS * 1000, n)
        return sig((IS + IL if add_load else IS - IL) * 1000, n)
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
    "C04-M1": _m("C04-M1"),  # thinks a Zener is used forward biased, like an ordinary diode
    "C04-M2": _m("C04-M2"),  # thinks breakdown destroys a Zener
    "C04-M3": _m("C04-M3"),  # thinks R_S is there to reverse-bias the Zener
    "C04-M4": _m("C04-M4"),  # thinks R_S protects the load
    "C04-M5": _m("C04-M5", ("Imax", "RS"), use_vs=True),  # uses the supply voltage in I = P / V
    "C04-M6": _m("C04-M6", ("RS",), no_vz=True),  # R_S = Vs / I, forgetting V_Z
    "C04-M7": _m("C04-M7", ("IZ",), no_load=True),  # takes the Zener current as the whole series current
    "C04-M8": _m("C04-M8", ("IZ",), add_load=True),  # adds the load current
    "C04-M9": _m("C04-M9"),  # thinks lighter doping gives a lower breakdown voltage
    "C04-M10": _m("C04-M10", ("Imax",), use_drop=True),  # uses the drop across R_S in I = P / V
    "C04-M11": _m("C04-M11", ("Imax",), times=True),  # multiplies power by voltage
    "C04-M12": _m("C04-M12", ("RS",), vz_only=True),  # R_S = V_Z / I
    "C04-M13": _m("C04-M13", ("IZ",), load_vs=True),  # gives the load the whole supply voltage
    "C04-M14": _m("C04-M14"),  # swaps the breakdown region with the reverse saturation region
}
