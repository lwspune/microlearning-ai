"""C04 First law of thermodynamics: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "lid":   ΔU, in J, of a gas heated with Q joules that lifts a lid through d metres with force F (inputs Q, F, d);
  "gas":   ΔU, in J, of a gas taking in Q joules while expanding at constant pressure p from V1 to V2 litres (inputs Q, p, V1, V2);
  "out":   ΔU of a gas that gives out Q_out of heat while W_on of work is done on it (inputs Q_out, W_on; same units);
  "boil":  ΔU, in kJ, of m kg of water boiled at pressure p, its volume going from V1 to V2 m^3 (inputs m, L (kJ/kg), p, V1, V2);
  "signs": the signs of Q, W and ΔU for fuel burned in a rigid chamber that warms a water bath (a named answer).

The key uses the first law with the book's convention, Q = ΔU + W: Q is the heat added to the system and W the work
done by it, so heat given out and work done on the system count as negative. It solves for ΔU in sympy.
"""
from sympy import Rational, Symbol, solve

from physics import sig

_dU = Symbol("dU")

NAMED = {
    "signs": {"key": "Qneg_W0_dUneg", "C04-M5": "Qpos_W0_dUpos", "C04-M6": "Qneg_Wpos_dUneg", "C04-M7": "Qneg_W0_dU0"},
}


def _first_law(Q, W, *, add=False, no_W=False, reverse=False):
    if no_W:
        W = 0
    if reverse:
        return W - Q
    if add:
        return Q + W
    (dU,) = solve(Q - (_dU + W), _dU)  # Q = ΔU + W
    return dU


def _solve(v, p, *, flip_Q=False, litres=False, **kw):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lid":
        Q, W = v["Q"], v["F"] * v["d"]
    elif ask == "gas":
        unit = 1 if litres else Rational(1, 1000)
        Q, W = v["Q"], v["p"] * (v["V2"] - v["V1"]) * unit
    elif ask == "out":
        Q, W = -v["Q_out"], -v["W_on"]
    elif ask == "boil":
        Q, W = v["m"] * v["L"], v["p"] * (v["V2"] - v["V1"]) / 1000  # in kJ
    else:
        raise ValueError(f"unknown ask {ask}")
    if flip_Q:
        Q = -Q
    return sig(_first_law(Q, W, **kw), n)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if mid not in NAMED.get(p["ask"], {}):
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def _numeric(p):
    if p["ask"] in NAMED:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Adds the work: ΔU = Q + W."""
    _numeric(p)
    return _solve(v, p, add=True)


def m2(v, p):
    """Leaves out the work done."""
    _numeric(p)
    return _solve(v, p, no_W=True)


def m3(v, p):
    """Reverses the law: ΔU = W - Q."""
    _numeric(p)
    return _solve(v, p, reverse=True)


def m4(v, p):
    """Leaves the volume in litres."""
    if p["ask"] != "gas":
        raise ValueError("does not apply to this item")
    return _solve(v, p, litres=True)


def m5(v, p):
    """Counts heat given out by the system as heat taken in."""
    if p["ask"] in NAMED:
        return _named(p, "C04-M5")
    if p["ask"] != "out":
        raise ValueError("no heat is given out in this item")
    return _solve(v, p, flip_Q=True)


def m6(v, p):
    """Thinks a pressure rise at constant volume means work is done."""
    return _named(p, "C04-M6")


def m7(v, p):
    """Thinks a closed system's internal energy cannot change."""
    return _named(p, "C04-M7")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6, "C04-M7": m7}
