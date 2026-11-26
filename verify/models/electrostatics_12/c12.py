"""C12 Capacitors in series and parallel: answer models (the key, and one per misconception).

Parallel: C = C1 + C2 + ..., same V. Series: 1/C = 1/C1 + 1/C2 + ..., same Q. params["ask"]:
  "series":   equivalent, in uF, of C1, C2 in series (inputs C1, C2);
  "parallel": equivalent, in uF, of C1, C2, C3 in parallel (inputs C1, C2, C3);
  "v_series": PD, in V, across C1 when C1, C2 in series sit across V (inputs C1, C2, V);
  "q_par":    charge, in uC, on C2 when C1, C2 in parallel sit across V (inputs C1, C2, V);
  "network":  equivalent, in uF, of two Ca in series, that pair in parallel with Cb (inputs Ca, Cb).
"""
from sympy import Rational

from physics import sig


def _ser(*cs):
    return 1 / sum(1 / c for c in cs)


def _solve(v, p, *, swap=False, no_invert=False, average=False, series_for_par=False, multiply=False, more_v=False,
           equal_v=False, full_v=False, equal_q=False, series_split=False, total_q=False, all_series=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "series":
        c1, c2 = v["C1"], v["C2"]
        if swap:
            return sig(c1 + c2, n)
        if no_invert:
            return sig(1 / c1 + 1 / c2, n)
        if average:
            return sig((c1 + c2) / 2, n)
        return sig(_ser(c1, c2), n)
    if ask == "parallel":
        cs = (v["C1"], v["C2"], v["C3"])
        if series_for_par:
            return sig(_ser(*cs), n)
        if multiply:
            return sig(cs[0] * cs[1] * cs[2], n)
        if average:
            return sig(sum(cs) / 3, n)
        return sig(sum(cs), n)
    if ask == "v_series":
        c1, c2, V = v["C1"], v["C2"], v["V"]
        if equal_v:
            return sig(V / 2, n)
        if full_v:
            return sig(V, n)
        return sig(V * c1 / (c1 + c2) if more_v else V * c2 / (c1 + c2), n)  # V1 = Q/C1 = V C2/(C1 + C2)
    if ask == "q_par":
        c1, c2, V = v["C1"], v["C2"], v["V"]
        if equal_q:
            return sig((c1 + c2) * V / 2, n)
        if series_split:
            return sig(c2 * V * c1 / (c1 + c2), n)  # puts the series share of V across C2
        if total_q:
            return sig((c1 + c2) * V, n)
        return sig(c2 * V, n)
    if ask == "network":
        ca, cb = v["Ca"], v["Cb"]
        if all_series:
            return sig(_ser(ca, ca, cb), n)
        pair = 2 * ca if swap else (2 / ca if no_invert else ca / 2)
        return sig(pair + cb, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C12-M1": _m(("series", "network"), swap=True),  # adds series capacitances, as if in parallel
    "C12-M2": _m(("series", "network"), no_invert=True),  # forgets to invert the sum of reciprocals
    "C12-M3": _m(("series", "parallel"), average=True),  # averages the capacitances
    "C12-M4": _m(("parallel",), series_for_par=True),  # uses the series rule for parallel
    "C12-M5": _m(("parallel",), multiply=True),  # multiplies parallel capacitances
    "C12-M6": _m(("v_series",), more_v=True),  # gives the larger capacitor the larger voltage in series
    "C12-M7": _m(("v_series",), equal_v=True),  # splits the series voltage equally
    "C12-M8": _m(("v_series",), full_v=True),  # gives each series capacitor the full voltage
    "C12-M9": _m(("q_par",), equal_q=True),  # shares the charge equally in parallel
    "C12-M10": _m(("q_par",), series_split=True),  # uses the series voltage split for a parallel pair
    "C12-M11": _m(("q_par",), total_q=True),  # gives the total charge
    "C12-M12": _m(("network",), all_series=True),  # puts all three in series
}
