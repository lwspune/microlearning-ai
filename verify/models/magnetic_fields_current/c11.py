"""C11 Solenoid and toroid: answer models (the key, and one per misconception).

Long solenoid: B = mu0 n I inside (n turns per metre), half that at an end. Toroid: B = mu0 N I / (2 pi r).
params["ask"]:
  "sol":     B, in T, inside a solenoid L_cm long, radius R_cm, N turns, current I (inputs L_cm, R_cm, N, I);
  "sol_pi":  B, in T, at the centre of a solenoid pi m long, diameter d_cm, N turns, current I (inputs d_cm, N, I);
  "tor_i":   current, in A, for field B in a toroid of radius r_cm with N turns (inputs B, r_cm, N);
  "tor":     the field inside a toroid (named);
  "outside": the field just outside a long solenoid (named).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

mu0 = BOOK["mu0"]
cm = Rational(1, 100)
NAMED = {
    "tor": {"key": "toroid", "C11-M9": "mu0NI", "C11-M3": "loop", "C11-M10": "times_2pir"},
    "outside": {"key": "zero", "C11-M11": "same", "C11-M12": "half", "C11-M13": "toroid_out"},
}


def _solve(v, p, *, big_n=False, in_cm=False, loop=False, end=False, diam_len=False, no_2pi=False, diameter=False,
           invert=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "sol":
        L, R, N, I = v["L_cm"] * (1 if in_cm else cm), v["R_cm"] * cm, v["N"], v["I"]
        if loop:
            return sig(mu0 * N * I / (2 * R), n)
        return sig(mu0 * (N if big_n else N / L) * I, n)
    if ask == "sol_pi":
        L = v["d_cm"] * cm if diam_len else pi
        N, I = v["N"], v["I"]
        if big_n:
            return sig(mu0 * N * I, n)
        B = mu0 * N / L * I
        return sig(B / 2 if end else B, n)
    if ask == "tor_i":
        B, r, N = v["B"], v["r_cm"] * cm, v["N"]
        if diameter:
            r = 2 * r
        if invert:
            return sig(mu0 * N / (B * 2 * pi * r), n)
        return sig(B * r / (mu0 * N) if no_2pi else B * 2 * pi * r / (mu0 * N), n)
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
    "C11-M1": _m("C11-M1", ("sol", "sol_pi"), big_n=True),  # uses the total turns N for n
    "C11-M2": _m("C11-M2", ("sol",), in_cm=True),  # leaves the length in cm
    "C11-M3": _m("C11-M3", ("sol",), loop=True),  # uses the circular loop's formula
    "C11-M4": _m("C11-M4", ("sol_pi",), end=True),  # gives the field at an end
    "C11-M5": _m("C11-M5", ("sol_pi",), diam_len=True),  # takes the diameter as the length
    "C11-M6": _m("C11-M6", ("tor_i",), no_2pi=True),  # forgets the 2 pi of the circle
    "C11-M7": _m("C11-M7", ("tor_i",), diameter=True),  # uses the diameter for the radius
    "C11-M8": _m("C11-M8", ("tor_i",), invert=True),  # turns the formula upside down
    "C11-M9": _m("C11-M9"),  # leaves out the toroid's length: B = mu0 N I
    "C11-M10": _m("C11-M10"),  # multiplies by 2 pi r instead of dividing
    "C11-M11": _m("C11-M11"),  # thinks the field outside equals the field inside
    "C11-M12": _m("C11-M12"),  # thinks the field outside is half the field inside
    "C11-M13": _m("C11-M13"),  # uses the toroid formula outside a solenoid
}
