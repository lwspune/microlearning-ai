"""C06 Polarization and Malus' law: answer models (the key, and one per misconception).

Unpolarized light through a polarizer keeps half its intensity; polarized light of intensity I through an analyser
at theta to it keeps I cos^2 theta. params["ask"] picks the quantity:
  "two":       fraction of I0 (unpolarized) through two polaroids at a1, a2 degrees from the vertical (inputs a1, a2);
  "three":     fraction of I0 through P1, P2 at t1 to P1, P3 at t2 to P2 (inputs t1, t2, degrees);
  "analyser":  intensity of polarized light I through an analyser at t degrees (inputs I, t);
  "unpol":     what a polarizer does to unpolarized light (a named answer);
  "transverse": which phenomenon proves light is transverse (a named answer).
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import sig

sp_half = Rational(1, 2)

NAMED = {
    "unpol": {"key": "half", "C06-M1": "same", "C06-M5": "orientation", "C06-M6": "zero"},
    "transverse": {"key": "polarization", "C06-M7": "interference", "C06-M8": "diffraction", "C06-M9": "reflection"},
}


def _d(x):
    return x * pi / 180


def _malus(t, *, first_power=False, use_sin=False):
    f = sin(_d(t)) if use_sin else cos(_d(t))
    return f if first_power else f**2


def _solve(v, p, *, no_half=False, from_vertical=False, first_power=False, crossed=False, half_again=False,
           use_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    h = 1 if no_half else sp_half
    if ask == "two":
        t = v["a1"] if from_vertical else abs(v["a2"] - v["a1"])
        return sig(h * _malus(t, first_power=first_power), n)
    if ask == "three":
        if crossed:
            return sig(h * _malus(v["t1"] + v["t2"]), n)  # takes P3 against P1 only
        return sig(h * _malus(v["t1"], first_power=first_power) * _malus(v["t2"], first_power=first_power), n)
    if ask == "analyser":
        return sig(v["I"] * (sp_half if half_again else 1) * _malus(v["t"], first_power=first_power, use_sin=use_sin), n)
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
    "C06-M1": _m("C06-M1", ("two", "three"), no_half=True),  # forgets that the first polarizer halves unpolarized light
    "C06-M2": _m("C06-M2", ("two",), from_vertical=True),  # uses the angle with the vertical, not between the axes
    "C06-M3": _m("C06-M3", ("two", "three", "analyser"), first_power=True),  # uses cos theta instead of cos^2 theta
    "C06-M4": _m("C06-M4", ("three",), crossed=True),  # takes P3 against P1 alone, ignoring P2
    "C06-M5": _m("C06-M5"),  # applies Malus' law to unpolarized light
    "C06-M6": _m("C06-M6"),  # thinks a polarizer blocks unpolarized light
    "C06-M7": _m("C06-M7"),  # takes interference as proof that light is transverse
    "C06-M8": _m("C06-M8"),  # takes diffraction as proof that light is transverse
    "C06-M9": _m("C06-M9"),  # takes reflection as proof that light is transverse
    "C06-M10": _m("C06-M10", ("analyser",), half_again=True),  # halves already polarized light at the analyser
    "C06-M11": _m("C06-M11", ("analyser",), use_sin=True),  # uses sin^2 instead of cos^2
}
