"""C05 The Doppler effect: answer models (the key, and one per misconception).

The book's formula: n = n0 (v +- vL) / (v -+ vs), upper signs for approach, lower for recession; n0 the frequency
emitted, v the speed of sound, vs and vL the speeds of source and listener along the line joining them.

params["ask"]:
  "src":    frequency heard, in Hz, from a source approaching a listener at rest (inputs n0, v, vs);
  "diff":   drop in frequency heard as a source passes a listener at rest (inputs n0, v, vs);
  "echo":   frequency, in Hz, of the echo a source approaching a fixed reflector at vs hears (inputs n0, v, vs);
  "angle":  frequency, in kHz, a car (listener, speed VL at angle aL to the line, chasing) hears from a bat (source,
            speed VS at angle aS, ahead, moving away) (inputs n0_k, v, VL, cL, VS, cS: cL, cS the cosines);
  "recede": the formula for a source moving away from a listener at rest (a named answer);
  "define": what the Doppler effect is (a named answer).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "recede": {"key": "f_recede", "C05-M1": "f_approach", "C05-M2": "f_listener_form", "C05-M4": "f_inverted"},
    "define": {"key": "apparent_freq", "C05-M10": "loudness_change", "C05-M11": "speed_change",
               "C05-M12": "emitted_change"},
}


def _hear(n0, v, vL=0, vs=0, *, approach_L=True, approach_s=True):
    num = v + vL if approach_L else v - vL
    den = v - vs if approach_s else v + vs
    return n0 * num / den


def _solve(v, p, *, sign=False, as_listener=False, still=False, rise=False, equal=False, stop=False, twice=False,
           full=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "src":
        if still:
            return sig(v["n0"], n)
        if as_listener:
            return sig(_hear(v["n0"], v["v"], vL=v["vs"]), n)
        return sig(_hear(v["n0"], v["v"], vs=v["vs"], approach_s=not sign), n)
    if ask == "diff":
        if as_listener:
            up = _hear(v["n0"], v["v"], vL=v["vs"])
            down = _hear(v["n0"], v["v"], vL=v["vs"], approach_L=False)
            return sig(up - down, n)
        up = _hear(v["n0"], v["v"], vs=v["vs"])
        down = _hear(v["n0"], v["v"], vs=v["vs"], approach_s=False)
        if rise:
            return sig(up - v["n0"], n)
        if equal:
            return sig(2 * (up - v["n0"]), n)
        return sig(up - down, n)
    if ask == "echo":
        at_target = _hear(v["n0"], v["v"], vs=v["vs"])
        if stop:
            return sig(at_target, n)
        if twice:
            return sig(_hear(at_target, v["v"], vs=v["vs"]), n)
        return sig(_hear(at_target, v["v"], vL=v["vs"], approach_L=not sign), n)
    if ask == "angle":
        if still:
            return sig(v["n0_k"], n)
        vL = v["VL"] if full else v["VL"] * v["cL"]
        vs = v["VS"] if full else v["VS"] * v["cS"]
        # the bat (ahead) moves away from the car: a receding source; the car chases it: an approaching listener
        return sig(_hear(v["n0_k"], v["v"], vL=vL, vs=vs, approach_s=sign), n)
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
    "C05-M1": _m("C05-M1", ("src", "echo", "angle"), sign=True),  # takes the sign for the wrong direction
    "C05-M2": _m("C05-M2", ("src", "diff"), as_listener=True),  # treats the source's motion like the listener's
    "C05-M3": _m("C05-M3", ("src", "angle"), still=True),  # thinks the frequency heard is the source's own
    "C05-M4": _m("C05-M4"),  # turns the ratio upside down
    "C05-M5": _m("C05-M5", ("diff",), rise=True),  # gives only the rise on approach
    "C05-M6": _m("C05-M6", ("diff",), equal=True),  # takes the fall on recession equal to the rise
    "C05-M7": _m("C05-M7", ("echo",), stop=True),  # gives the frequency at the target, not of the echo
    "C05-M8": _m("C05-M8", ("echo",), twice=True),  # treats the rocket as a moving source again for the echo
    "C05-M9": _m("C05-M9", ("angle",), full=True),  # uses the whole speeds, not their parts along the line
    "C05-M10": _m("C05-M10"),  # the Doppler effect is a change of loudness
    "C05-M11": _m("C05-M11"),  # it is a change in the speed of sound
    "C05-M12": _m("C05-M12"),  # it is a change in the frequency the source emits
}
