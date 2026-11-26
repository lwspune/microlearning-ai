"""C11 Mutual inductance: answer models (the key, and one per misconception).

N2 Phi2 = M I1; e2 = -M dI1/dt; a coil of N2 turns round a long solenoid (N1 turns, length l, area A):
M = mu0 N1 N2 A / l. params["ask"]:
  "link":    change of flux linkage, in Wb, when I1 goes from I1a to I1b in t s (inputs M, I1a, I1b, t);
  "emf":     the emf, in V, in the other coil (inputs M_mH, I1a, I1b, t);
  "M":       M, in mH, from an emf of e_mV and a rate r A/s (inputs e_mV, r);
  "formula": M for a coil round a long solenoid (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"formula": {"key": "N1N2A_over_l", "C11-M12": "N1sq", "C11-M13": "times_l", "C11-M14": "no_N1"}}
milli = Rational(1, 1000)


def _solve(v, p, *, over_t=False, over_dI=False, times_t=False, mH_as_H=False, add=False, one=False, mult=False,
           invert=False, mV_as_V=False, no_t=False, zero=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("link", "emf"):
        M = v["M"] if ask == "link" else v["M_mH"] * (1 if mH_as_H else milli)
        a, b = v["I1a"], v["I1b"]
        dI = a + b if add else (b if one else abs(b - a))
        if zero:
            return 0
        if ask == "link":
            if over_t:
                return sig(M * dI / v["t"], n)
            if over_dI:
                return sig(M / dI, n)
            if times_t:
                return sig(M * dI * v["t"], n)
            return sig(M * dI, n)
        if no_t:
            return sig(M * dI, n)
        return sig(M * dI * v["t"] if times_t else M * dI / v["t"], n)
    if ask == "M":
        e = v["e_mV"] * (1 if mV_as_V else milli)
        if mult:
            M = e * v["r"]
        elif invert:
            M = v["r"] / e
        else:
            M = e / v["r"]
        return sig(M / milli, n)
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
    "C11-M1": _m("C11-M1", ("link",), over_t=True),  # divides by the time: gives the emf
    "C11-M2": _m("C11-M2", ("link",), over_dI=True),  # divides M by the change in current
    "C11-M3": _m("C11-M3", ("link", "emf"), times_t=True),  # multiplies by the time
    "C11-M4": _m("C11-M4", ("emf",), mH_as_H=True),  # reads mH as H
    "C11-M5": _m("C11-M5", ("emf",), add=True),  # adds the two currents
    "C11-M6": _m("C11-M6", ("emf",), one=True),  # uses one current, not the change
    "C11-M7": _m("C11-M7", ("M",), mult=True),  # multiplies the emf by the rate
    "C11-M8": _m("C11-M8", ("M",), invert=True),  # turns the ratio upside down
    "C11-M9": _m("C11-M9", ("M",), mV_as_V=True),  # reads mV as V
    "C11-M10": _m("C11-M10", ("emf",), no_t=True),  # forgets to divide by the time
    "C11-M11": _m("C11-M11", ("emf",), zero=True),  # thinks a current falling to zero induces nothing
    "C11-M12": _m("C11-M12"),  # uses the solenoid's self-inductance
    "C11-M13": _m("C11-M13"),  # multiplies by l
    "C11-M14": _m("C11-M14"),  # forgets N1
}
