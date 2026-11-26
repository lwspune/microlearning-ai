"""C05 The metre bridge: answer models (the key, and one per misconception).

At balance X / R = l / (100 - l), with X in the gap whose wire length l is measured from that end. params["ask"]:
  "x":       X, in ohm, with R in the other gap and the null point at l cm from X's end (inputs R, l);
  "bangle":  resistance, in ohm, of a bangle joined at opposite points in the left gap, R in the right gap (inputs R, l);
  "cell":    current, in A, from a cell of emf e when gaps P, Q balance across a wire of resistance W (inputs e, P, Q, W);
  "third":   why the null point should be in the middle third (named);
  "kelvin":  how balance shows in Kelvin's method (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "third": {"key": "least_error", "C05-M9": "uniform", "C05-M10": "ends_middle", "C05-M11": "sensitive"},
    "kelvin": {"key": "unchanged", "C05-M12": "zero", "C05-M13": "fifty", "C05-M14": "no_cell"},
}


def _solve(v, p, *, invert=False, over_100=False, rest_100=False, whole=False, half=False, gaps=False, wire=False,
           series=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("x", "bangle"):
        R, l = v["R"], v["l"]
        if over_100:
            gap = R * l / 100
        elif rest_100:
            gap = R * (100 - l) / 100
        elif invert:
            gap = R * (100 - l) / l
        else:
            gap = R * l / (100 - l)
        if ask == "x":
            return sig(gap, n)
        if whole:
            return sig(gap, n)  # takes the gap's resistance as the bangle's
        if half:
            return sig(2 * gap, n)  # takes one half of the bangle as the gap
        return sig(4 * gap, n)  # halves R/2 in parallel give R/4
    if ask == "cell":
        e, P, Q, W = v["e"], v["P"], v["Q"], v["W"]
        if gaps:
            return sig(e / (P + Q), n)
        if wire:
            return sig(e / W, n)
        if series:
            return sig(e / (P + Q + W), n)
        Rp = (P + Q) * W / (P + Q + W)  # at balance no current crosses: gaps in series, in parallel with the wire
        return sig(e / Rp, n)
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
    "C05-M1": _m("C05-M1", ("x", "bangle"), invert=True),  # turns the length ratio upside down
    "C05-M2": _m("C05-M2", ("x",), over_100=True),  # takes X = R l / 100
    "C05-M3": _m("C05-M3", ("x",), rest_100=True),  # takes X = R (100 - l) / 100
    "C05-M4": _m("C05-M4", ("bangle",), whole=True),  # takes the gap's resistance as the whole bangle's
    "C05-M5": _m("C05-M5", ("bangle",), half=True),  # takes one half of the bangle as the gap
    "C05-M6": _m("C05-M6", ("cell",), gaps=True),  # counts only the gap resistances
    "C05-M7": _m("C05-M7", ("cell",), wire=True),  # counts only the wire
    "C05-M8": _m("C05-M8", ("cell",), series=True),  # puts the wire and the gaps all in series
    "C05-M9": _m("C05-M9"),  # thinks the wire is most uniform in the middle
    "C05-M10": _m("C05-M10"),  # thinks end resistances matter most in the middle
    "C05-M11": _m("C05-M11"),  # thinks the galvanometer is most sensitive there
    "C05-M12": _m("C05-M12"),  # expects zero deflection in Kelvin's method
    "C05-M13": _m("C05-M13"),  # expects the balance point at 50 cm
    "C05-M14": _m("C05-M14"),  # thinks no current leaves the cell at balance
}
