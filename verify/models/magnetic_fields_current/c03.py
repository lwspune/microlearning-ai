"""C03 The cyclotron: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "rev":  time between reversals of the field across the gap, in s. Inputs m, q, B.
  "fosc": frequency of the oscillator (the alternating voltage), in Hz. Inputs m, q, B.
  "KE":   kinetic energy of the ions leaving the dees, in MeV. Inputs m, q, R_cm (dee radius), f_MHz (oscillator).
  "raise", "gain": named answers (see NAMED).

The key works from the definitions: an ion takes half a period, pi m / (q B), for each semicircle in a dee, and
crosses the gap twice per turn, so the gap field reverses every T/2 and the oscillator runs at the cyclotron
frequency f = q B / (2 pi m). An ion leaves at the dee's rim R with speed v = 2 pi f R and KE = m v^2 / 2.
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

NAMED = {
    "raise": {"key": "stronger_B", "C03-M7": "more_voltage", "C03-M6": "faster_osc", "C03-M4": "field_in_dees"},
    "gain": {"key": "at_gap", "C03-M4": "inside_dee", "C03-M5": "from_B", "C03-M1": "once_per_rev"},
}


def _solve(v, p, *, once=False, no_2pi=False, no_half=False, double=False):
    ask = p["ask"]
    turn = 1 if no_2pi else 2 * pi
    # The oscillator frequency as a multiple of the cyclotron frequency, under each idea.
    osc = Rational(1, 2) if once else (2 if double else 1)
    if ask in ("rev", "fosc"):
        T = turn * v["m"] / (v["q"] * v["B"])  # period of revolution
        T_osc = T / osc
        if ask == "fosc":
            return sig(1 / T_osc)
        return sig(T_osc / 2)  # the field reverses twice per oscillator cycle
    if ask == "KE":
        f_c = v["f_MHz"] * 10**6 / osc  # the ion's revolution frequency
        speed = (1 if no_2pi else 2 * pi) * f_c * v["R_cm"] / 100
        ke = (1 if no_half else Rational(1, 2)) * v["m"] * speed**2
        return sig(ke / (BOOK["e"] * 10**6))
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
    "C03-M1": _m("C03-M1", ("rev", "fosc", "KE"), once=True),  # the field reverses once per revolution
    "C03-M2": _m("C03-M2", ("rev", "fosc", "KE"), no_2pi=True),  # drops the 2 pi (m/qB as the period, v = f R)
    "C03-M3": _m("C03-M3", ("KE",), no_half=True),  # drops the 1/2 in the kinetic energy
    "C03-M4": _m("C03-M4"),  # thinks the ions speed up inside the dees
    "C03-M5": _m("C03-M5"),  # thinks the magnetic field speeds up the ions
    "C03-M6": _m("C03-M6"),  # thinks a faster oscillator drives the ions round faster
    "C03-M7": _m("C03-M7"),  # thinks the final energy is set by the gap voltage
    "C03-M8": _m("C03-M8", ("rev", "fosc"), double=True),  # takes each reversal as a full oscillator cycle
}
