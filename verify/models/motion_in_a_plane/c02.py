"""C02 Graphs of motion: answer models (the key, and one per misconception).

params["ask"]:
  "area3":  distance, in m, in the first t2 s of a v-t graph that rises from rest to V at t1, stays at V until t2 and
            falls to rest at t3 (inputs V, t1, t2, t3);
  "metro":  distance, in km, between two stations: from rest to v_kmh in ta s, steady, then to rest in td s, T s in all
            (inputs v_kmh, T, ta, td);
  "xslope": velocity, in m/s, from a straight x-t graph through (t1, x1) and (t2, x2);
  "vslope": acceleration, in m/s^2, from a straight v-t graph through (t1, v1) and (t2, v2);
  "uniform": which statement about the graphs of uniformly accelerated motion is right (a named answer).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "uniform": {"key": "vt_line_slope_a", "C02-M5": "vt_parabola", "C02-M6": "area_is_a", "C02-M10": "xt_line"},
}


def _solve(v, p, *, rect=False, flat=False, whole=False, kmh=False, over_t=False, area=False, inv=False,
           unsigned=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "area3":
        V, t1, t2, t3 = v["V"], v["t1"], v["t2"], v["t3"]
        if rect:
            return sig(V * t2, n)
        if flat:
            return sig(V * (t2 - t1), n)
        d = V * t1 / 2 + V * (t2 - t1)
        return sig(d + V * (t3 - t2) / 2 if whole else d, n)
    if ask == "metro":
        u = v["v_kmh"] * (1 if kmh else Rational(5, 18))
        T, ta, td = v["T"], v["ta"], v["td"]
        if rect:
            d = u * T
        elif flat:
            d = u * (T - ta - td)
        else:
            d = u * (T - (ta + td) / 2)
        return sig(d / 1000, n)
    if ask in ("xslope", "vslope"):
        k = "x" if ask == "xslope" else "v"
        t1, y1, t2, y2 = v["t1"], v[k + "1"], v["t2"], v[k + "2"]
        if over_t:
            return sig(y2 / t2, n)
        if area:
            return sig((y1 + y2) * (t2 - t1) / 2, n)
        if inv:
            return sig((t2 - t1) / (y2 - y1), n)
        s = (y2 - y1) / (t2 - t1)
        return sig(abs(s) if unsigned else s, n)
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
    "C02-M1": _m("C02-M1", ("area3", "metro"), rect=True),  # top speed times the whole time
    "C02-M2": _m("C02-M2", ("area3", "metro"), flat=True),  # counts only the steady-speed part
    "C02-M3": _m("C02-M3", ("metro",), kmh=True),  # leaves the speed in km/h
    "C02-M4": _m("C02-M4", ("area3",), whole=True),  # takes the area of the whole graph
    "C02-M5": _m("C02-M5"),  # thinks uniform acceleration gives a curved v-t graph
    "C02-M6": _m("C02-M6", ("xslope", "vslope"), area=True),  # takes the area for the slope
    "C02-M7": _m("C02-M7", ("xslope", "vslope"), over_t=True),  # divides one reading by its time
    "C02-M8": _m("C02-M8", ("xslope",), inv=True),  # run over rise
    "C02-M9": _m("C02-M9", ("vslope",), unsigned=True),  # drops the sign of a falling line
    "C02-M10": _m("C02-M10"),  # thinks a straight x-t graph means uniform acceleration
}
