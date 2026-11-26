"""C04 The first law of thermodynamics: answer models (the key, and one per misconception).

dU = Q + W: heat absorbed and work done on the system are positive.
params["ask"]:
  "dU":  dU from heat q and work w (magnitudes) with params qdir "in"/"out", wdir "on"/"by";
  "Q":   Q from dU (signed) and work w (magnitude) with wdir;
  "adiabatic": dU of an insulated gas expanding against P (bar) from V1 to V2 (L), in J;
  "adiabatic_law": the first law for an adiabatic process (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"adiabatic_law": {"key": "dU_eq_W", "C04-M1": "dU_eq_minus_W", "C04-M3": "Q_eq_minus_W",
                           "C04-M4": "dU_eq_Q"}}


def _signed(v, p):
    Q = None
    if "q" in v:
        Q = v["q"] if p.get("qdir", "in") == "in" else -v["q"]
    W = v["w"] if p.get("wdir", "on") == "on" else -v["w"]
    return Q, W


def _solve(v, p, how):
    n = p.get("sf", 3)
    ask = p["ask"]
    if ask == "dU":
        if how not in ("key", "M1", "M2", "M5"):
            raise ValueError("does not apply to this item")
        Q, W = _signed(v, p)
        if how in ("M1", "M5"):
            W = -W
        if how in ("M2", "M5"):
            Q = -Q
        return sig(Q + W, n)
    if ask == "Q":
        if how not in ("key", "M1", "M2", "M5"):
            raise ValueError("does not apply to this item")
        _, W = _signed(v, p)
        if how in ("M1", "M5"):
            W = -W
        Q = v["dU"] - W
        return sig(-Q if how in ("M2", "M5") else Q, n)
    if ask == "adiabatic":
        if how not in ("key", "M1", "M3", "M6"):
            raise ValueError("does not apply to this item")
        if how == "M3":
            return sig(0, n)  # takes dU = 0 when no heat flows
        W = -v["P"] * (v["V2"] - v["V1"]) * (1 if how == "M6" else 100)
        return sig(-W if how == "M1" else W, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1"),  # flips the sign of W: uses dU = Q - W with W = -P_ext dV
    "C04-M2": _m("C04-M2"),  # flips the sign of Q: heat released taken as positive
    "C04-M3": _m("C04-M3"),  # swaps isothermal and adiabatic: dU = 0 when no heat flows
    "C04-M4": _m("C04-M4"),  # swaps adiabatic and isochoric: dU = Q when no heat flows
    "C04-M5": _m("C04-M5"),  # takes both signs from the surroundings' side
    "C04-M6": _m("C04-M6"),  # leaves the work in L bar, as if it were J
}
