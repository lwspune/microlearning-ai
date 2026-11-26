"""C11 Gibbs energy and spontaneity: answer models (the key, and one per misconception).

Delta G = Delta H - T Delta S; spontaneous when Delta G < 0. With Delta H and Delta S of the same sign the change
over is at T* = Delta H / Delta S.
inputs: dH (kJ), dS (J/K), T (K; the Celsius figure the stem also shows is T - 273).
params["ask"]:
  "dG":        Delta G in kJ;
  "range":     the temperatures at which the reaction is spontaneous (named: below_T, above_T, all_T, no_T);
  "criterion": the condition for spontaneity in terms of Gibbs energy (named).
params["sf"]: significant figures (default 3).
"""
from sympy import Symbol

from chemistry import sig

CRITERION = {"key": "dG_negative", "C11-M4": "dG_positive", "C11-M5": "dH_negative", "C11-M6": "dS_positive"}


def _range(dH, dS, rule=None):
    """Where Delta G < 0 (or, reversed, Delta G > 0) for the signs of Delta H and Delta S."""
    if rule == "dH_only":
        return "all_T" if dH < 0 else "no_T"
    if rule == "dS_only":
        return "all_T" if dS > 0 else "no_T"
    if dH < 0 and dS > 0:
        out = "all_T"
    elif dH > 0 and dS < 0:
        out = "no_T"
    elif dH < 0:
        out = "below_T"
    else:
        out = "above_T"
    if rule == "reversed":
        out = {"all_T": "no_T", "no_T": "all_T", "below_T": "above_T", "above_T": "below_T"}[out]
    return out


def _solve(v, p, rule=None):
    ask, n = p["ask"], int(p.get("sf", 3))
    if ask == "criterion":
        return Symbol(CRITERION[rule.split(":")[1]] if rule else CRITERION["key"])
    if ask == "range":
        return Symbol(_range(v["dH"], v["dS"], rule.split(":")[0] if rule else None))
    if ask == "dG":
        T = v["T"] - 273 if rule == "celsius" else v["T"]
        TdS = T * v["dS"] if rule == "no_kJ" else T * v["dS"] / 1000
        return sig(v["dH"] + TdS if rule == "plus" else v["dH"] - TdS, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, rule):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        out = _solve(v, p, rule)
        if out == key(v, p):
            raise ValueError("gives the key on this item")
        return out
    return model


MODELS = {
    "key": key,
    "C11-M1": _m(("dG",), "no_kJ"),  # Delta H in kJ with Delta S in J/K, unconverted
    "C11-M2": _m(("dG",), "plus"),  # Delta G = Delta H + T Delta S
    "C11-M3": _m(("dG",), "celsius"),  # Celsius temperature
    "C11-M4": _m(("range", "criterion"), "reversed:C11-M4"),  # spontaneous when Delta G > 0
    "C11-M5": _m(("range", "criterion"), "dH_only:C11-M5"),  # Delta H alone decides
    "C11-M6": _m(("range", "criterion"), "dS_only:C11-M6"),  # Delta S of the system alone decides
}
