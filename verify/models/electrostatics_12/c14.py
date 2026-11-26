"""C14 Energy stored in a capacitor: answer models (the key, and one per misconception).

U = Q^2/2C = CV^2/2 = QV/2; energy density (1/2) k eps0 E^2. params["ask"]:
  "double_q": what doubling the charge does to the energy (named);
  "share":    energy lost, in J, when C1_uF at V volts is joined to an uncharged C2_uF (inputs C1_uF, C2_uF, V);
  "ratio":    stored : dissipated while charging (named);
  "slab":     change in energy when a slab k is removed from C (F) held at V volts (named, built from the numbers);
  "density":  energy, in J, in a cube of side a_cm, constant k, in a field E (inputs a_cm, k, E);
  "vratio":   Vp : Vs for equal energy in parallel and series, capacitances 1 : 2 (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

eps0 = BOOK["eps0"]
uF = Rational(1, 10**6)
NAMED = {
    "double_q": {"key": "four", "C14-M1": "two", "C14-M2": "half", "C14-M3": "same"},
    "ratio": {"key": "one_one", "C14-M7": "one_two", "C14-M8": "two_one", "C14-M9": "none_lost"},
    "slab": {"key": "down_480", "C14-M10": "up_1440", "C14-M11": "down_240", "C14-M12": "down_960"},
    "vratio": {"key": "r2_3", "C14-M15": "three_r2", "C14-M16": "two_nine", "C14-M17": "one_one"},
}


def _solve(v, p, *, final=False, initial=False, half=False, no_k=False, no_half=False, cm3=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "share":
        c1, c2, V = v["C1_uF"] * uF, v["C2_uF"] * uF, v["V"]
        Ui = c1 * V**2 / 2
        Q = c1 * V
        Uf = Q**2 / (2 * (c1 + c2))
        if final:
            return sig(Uf, n)
        if initial:
            return sig(Ui, n)
        if half:
            return sig(Ui / 2, n)
        return sig(Ui - Uf, n)
    if ask == "density":
        a = v["a_cm"] * (1 if cm3 else Rational(1, 100))
        k = 1 if no_k else v["k"]
        u = (1 if no_half else Rational(1, 2)) * k * eps0 * v["E"] ** 2
        return sig(u * a**3, n)
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
    "C14-M1": _m("C14-M1"),  # takes U as proportional to Q
    "C14-M2": _m("C14-M2"),  # thinks more charge means less energy
    "C14-M3": _m("C14-M3"),  # thinks the energy depends only on C
    "C14-M4": _m("C14-M4", ("share",), final=True),  # gives the final energy instead of the loss
    "C14-M5": _m("C14-M5", ("share",), initial=True),  # gives the initial energy as the loss
    "C14-M6": _m("C14-M6", ("share",), half=True),  # takes half the initial energy as the loss
    "C14-M7": _m("C14-M7"),  # confuses the energy supplied with the energy dissipated
    "C14-M8": _m("C14-M8"),  # thinks twice as much is stored as is dissipated
    "C14-M9": _m("C14-M9"),  # thinks nothing is dissipated
    "C14-M10": _m("C14-M10"),  # treats Q as fixed though V is held constant
    "C14-M11": _m("C14-M11"),  # gives the air capacitor's energy as the change
    "C14-M12": _m("C14-M12", ("density",), no_half=True),  # forgets the half
    "C14-M13": _m("C14-M13", ("density",), no_k=True),  # forgets the dielectric constant
    "C14-M14": _m("C14-M14", ("density",), cm3=True),  # leaves the volume in cm^3
    "C14-M15": _m("C14-M15"),  # turns the ratio upside down
    "C14-M16": _m("C14-M16"),  # forgets the square root
    "C14-M17": _m("C14-M17"),  # thinks equal energies need equal voltages
}
