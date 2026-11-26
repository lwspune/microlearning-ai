"""C08 Newton's law of cooling: answer models (the key, and one per misconception).

params["ask"]:
  "rate": rate of cooling at T2, given rate r1 at T1 and surroundings at T0 (inputs r1, T1, T2, T0);
  "temp": temperature at which the rate is r2, given rate r1 at T1 and surroundings at T0 (inputs r1, T1, r2, T0);
  "curve": the shape of the cooling curve (named);
  "graph": the graph of rate of cooling against excess temperature (named);
  "valid": when the law holds (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "curve": {"key": "steep_then_level", "C08-M5": "straight_fall", "C08-M6": "slow_then_fast", "C08-M7": "below_room"},
    "graph": {"key": "line_through_origin", "C08-M8": "flattening_curve", "C08-M9": "horizontal_line", "C08-M10": "falling_line"},
    "valid": {"key": "small_excess", "C08-M11": "any_excess", "C08-M12": "vacuum_only", "C08-M13": "at_room_temp"},
}


def _solve(v, p, *, to_T=False, inverse=False, constant=False, excess=False):
    ask, n = p["ask"], p.get("sf", 3)
    T0 = 0 if to_T else v["T0"]
    if ask == "rate":
        r1, e1, e2 = v["r1"], v["T1"] - T0, v["T2"] - T0
        if constant:
            return sig(r1, n)
        return sig(r1 * e1 / e2 if inverse else r1 * e2 / e1, n)
    if ask == "temp":
        r1, r2, e1 = v["r1"], v["r2"], v["T1"] - T0
        e2 = e1 * r1 / r2 if inverse else e1 * r2 / r1
        return sig(e2 if excess else e2 + T0, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


def _n(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C08-M1": _m(("rate", "temp"), to_T=True),  # rate proportional to T itself, not T - T0
    "C08-M2": _m(("rate", "temp"), inverse=True),  # rate inversely proportional to the excess
    "C08-M3": _m(("rate",), constant=True),  # rate the same at every temperature
    "C08-M4": _m(("temp",), excess=True),  # gives the excess temperature, not T
    **{f"C08-M{i}": _n(f"C08-M{i}") for i in range(5, 14)},
}
