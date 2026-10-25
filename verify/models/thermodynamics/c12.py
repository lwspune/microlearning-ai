"""C12 Refrigerators and heat pumps: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "cop_T":  coefficient of performance of a Carnot refrigerator (params["kind"] "fridge") or heat pump ("pump")
            working between T_C and T_H kelvin (inputs T_C, T_H);
  "cop_Q":  coefficient of performance of a refrigerator that removes Q_C from inside for work W (inputs Q_C, W);
  "reject": where the refrigerant rejects its heat (a named answer);
  "pump":   how a heat pump warms a room (a named answer).

The key uses energy conservation over a cycle, Q_H = Q_C + W, a refrigerator's COP = Q_C / W, a heat pump's
COP = Q_H / W, and for Carnot devices Q_C / Q_H = T_C / T_H, solving in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_QC, _QH, _W = Symbol("Q_C"), Symbol("Q_H"), Symbol("W")

NAMED = {
    "reject": {"key": "condenser", "C12-M4": "evaporator", "C12-M5": "cold_chamber", "C12-M6": "compressor"},
    "pump": {"key": "moves_heat_in", "C12-M10": "makes_heat", "C12-M11": "moves_heat_out", "C12-M12": "no_work"},
}


def _carnot(TC, TH):
    """Q_C, Q_H and W for a Carnot cycle moving 1 J out of the cold side, from Q_C/Q_H = T_C/T_H and Q_H = Q_C + W."""
    sol = solve([_QC - 1, _QC / _QH - TC / TH, _QH - _QC - _W], [_QC, _QH, _W], dict=True)[0]
    return sol[_QC], sol[_QH], sol[_W]


def _solve(v, p, *, swap=False, ratio=False, efficiency=False, upside=False, per_QH=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "cop_T":
        TC, TH = v["T_C"], v["T_H"]
        if ratio:
            return sig(TC / TH, n)
        if efficiency:
            return sig(1 - TC / TH, n)
        QC, QH, W = _carnot(TC, TH)
        pump = (p["kind"] == "pump") != swap  # swap: uses the other device's COP
        return sig((QH if pump else QC) / W, n)
    if ask == "cop_Q":
        QC, W = v["Q_C"], v["W"]
        QH = QC + W
        if swap:
            return sig(QH / W, n)
        if upside:
            return sig(W / QC, n)
        if per_QH:
            return sig(QC / QH, n)
        return sig(QC / W, n)
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


def _numeric(asks, kind=None, **kw):
    def model(v, p):
        if p["ask"] not in asks or (kind and p.get("kind", "fridge") != kind):
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C12-M1": _numeric(("cop_T", "cop_Q"), kind="fridge", swap=True),  # uses the heat pump's COP for a refrigerator
    "C12-M2": _numeric(("cop_T",), ratio=True),  # takes the COP as T_C / T_H
    "C12-M3": _numeric(("cop_T",), efficiency=True),  # gives the Carnot engine's efficiency instead
    "C12-M4": _named("C12-M4"),
    "C12-M5": _named("C12-M5"),
    "C12-M6": _named("C12-M6"),
    "C12-M7": _numeric(("cop_T",), kind="pump", swap=True),  # uses the refrigerator's COP for a heat pump
    "C12-M8": _numeric(("cop_Q",), upside=True),  # divides the work by the heat removed
    "C12-M9": _numeric(("cop_Q",), per_QH=True),  # divides by the heat rejected instead of the work
    "C12-M10": _named("C12-M10"),
    "C12-M11": _named("C12-M11"),
    "C12-M12": _named("C12-M12"),
}
