"""C10 Heat engines and the second law: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "forbids":  which process the second law rules out (a named answer);
  "eta":      efficiency of an engine taking in Q_H from the hot reservoir and rejecting Q_C (inputs Q_H, Q_C);
  "Q_H":      heat an engine of efficiency eta must take in to do work W (inputs eta, W);
  "limit":    what limits a heat engine's efficiency (a named answer);
  "clausius": Clausius's statement of the second law (a named answer).

The key uses the first law over a cycle, W = Q_H - Q_C, and the efficiency eta = W / Q_H = 1 - Q_C / Q_H, solving in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)

NAMED = {
    "forbids": {"key": "all_heat_to_work", "C10-M1": "hot_to_cold", "C10-M2": "partial_engine", "C10-M3": "refrigerator"},
    "limit": {"key": "reservoir_temperatures", "C10-M9": "friction_only", "C10-M10": "fuel_burned", "C10-M11": "engine_size"},
    "clausius": {"key": "not_cold_to_hot", "C10-M1": "not_hot_to_cold", "C10-M2": "no_heat_to_work", "C10-M12": "energy_conserved"},
}


def _solve(v, p, *, ratio_C=False, per_rejected=False, per_total=False, times=False, rejected=False, one_minus=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "eta":
        QH, QC = v["Q_H"], v["Q_C"]
        W = QH - QC  # first law over a cycle
        if ratio_C:
            return sig(QC / QH, n)
        if per_rejected:
            return sig(W / QC, n)
        if per_total:
            return sig(W / (QH + QC), n)
        return sig(W / QH, n)
    if ask == "Q_H":
        eta, W = v["eta"], v["W"]
        if times:
            return sig(eta * W, n)
        if one_minus:
            eta = 1 - eta
        (QH,) = solve(eta * _x - W, _x)  # eta = W / Q_H
        return sig(QH - W if rejected else QH, n)
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


def _numeric(ask, **kw):
    def model(v, p):
        if p["ask"] != ask:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C10-M1": _named("C10-M1"),
    "C10-M2": _named("C10-M2"),
    "C10-M3": _named("C10-M3"),
    "C10-M4": _numeric("eta", ratio_C=True),  # takes eta = Q_C / Q_H
    "C10-M5": _numeric("eta", per_rejected=True),  # divides the work by the heat rejected
    "C10-M6": _numeric("eta", per_total=True),  # divides the work by all the heat exchanged
    "C10-M7": _numeric("Q_H", times=True),  # multiplies by the efficiency instead of dividing
    "C10-M8": _numeric("Q_H", rejected=True),  # gives the heat rejected instead of the heat taken in
    "C10-M9": _named("C10-M9"),
    "C10-M10": _named("C10-M10"),
    "C10-M11": _named("C10-M11"),
    "C10-M12": _named("C10-M12"),
    "C10-M13": _numeric("Q_H", one_minus=True),  # uses 1 - eta for eta
}
