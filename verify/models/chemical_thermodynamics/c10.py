"""C10 Entropy and the second law: answer models (the key, and one per misconception).

Delta S_surr = -Delta H / T; Delta S_total = Delta S_sys + Delta S_surr; a phase change at its transition temperature
has Delta S = Q_rev / T = Delta H / T. Answers in J/K (or J/(K mol)).
inputs: dH (kJ, or kJ/mol), T (K; the Celsius figure the stem also shows is T - 273), dS (J/K, Delta S of the system).
params["ask"]:
  "dS_surr":  Delta S of the surroundings;
  "dS_total": Delta S_total;
  "dS_phase": Delta S of a phase change at its transition temperature;
  "second_law": the criterion for a spontaneous process (named).
params["sf"]: significant figures (default 3).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"second_law": {"key": "total_positive", "C10-M4": "system_positive", "C10-M5": "enthalpy_negative",
                        "C10-M6": "total_zero"}}


def _solve(v, p, rule=None):
    ask, n = p["ask"], int(p.get("sf", 3))
    T = v["T"] - 273 if rule == "celsius" else v["T"]
    q = v["dH"] if rule == "no_kJ" else v["dH"] * 1000  # J
    if ask == "dS_phase":
        return sig(-q / T if rule == "sign" else q / T, n)
    surr = q / T if rule == "sign" else -q / T
    if ask == "dS_surr":
        return sig(surr, n)
    if ask == "dS_total":
        if rule == "system_only":
            return sig(v["dS"], n)
        return sig(v["dS"] + surr, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), rule=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C10-M1": _m("C10-M1", ("dS_surr", "dS_total", "dS_phase"), "sign"),  # sign of Delta H / T wrong
    "C10-M2": _m("C10-M2", ("dS_surr", "dS_total", "dS_phase"), "no_kJ"),  # kJ not turned into J
    "C10-M3": _m("C10-M3", ("dS_surr", "dS_total", "dS_phase"), "celsius"),  # Celsius temperature
    "C10-M4": _m("C10-M4", ("dS_total",), "system_only"),  # only the system's entropy counts
    "C10-M5": _m("C10-M5"),  # exothermic means spontaneous
    "C10-M6": _m("C10-M6"),  # total entropy is conserved, like energy
}
