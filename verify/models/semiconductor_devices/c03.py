"""C03 Ripple and filter circuits: answer models (the key, and one per misconception).

Ripple factor r = (rms value of the AC component) / (DC value): 1.21 for a half-wave rectifier, 0.482 for a
full-wave one. The ripple of a full-wave rectifier on a supply of frequency f has frequency 2f (f for half wave).
A choke has reactance X_L = 2 pi f L; a capacitor X_C = 1 / (2 pi f C).
params["ask"]:
  "Vac":  rms AC component, in V, from Vdc (input Vdc; param "rect": "half" or "full");
  "Vdc":  DC value, in V, from Vac (input Vac; param "rect");
  "XC":   reactance of a filter capacitor to the ripple, in ohm (inputs f supply Hz, C farad; full-wave);
  "XL":   reactance of a choke to the ripple, in ohm (inputs f, L henry; full-wave);
  "why", "better": named answers.
"""
from sympy import Rational, Symbol, pi

from physics import sig

R = {"half": Rational("1.21"), "full": Rational("0.482")}
OTHER = {"half": "full", "full": "half"}

NAMED = {
    "why": {"key": "remove_ripple", "C03-M6": "protect_diodes", "C03-M7": "does_rectifying", "C03-M8": "block_dc"},
    "better": {"key": "larger_C", "C03-M10": "smaller_C", "C03-M2": "use_half_wave", "C03-M5": "lower_ripple_f"},
}


def _solve(v, p, *, invert=False, other=False, pct=False, supply_f=False, no_2pi=False, swap_x=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("Vac", "Vdc"):
        r = R[OTHER[p["rect"]] if other else p["rect"]]
        if pct:
            r = r / 100
        if invert:
            r = 1 / r
        return sig(v["Vdc"] * r if ask == "Vac" else v["Vac"] / r, n)
    if ask in ("XC", "XL"):
        f = v["f"] if supply_f else 2 * v["f"]
        w = f if no_2pi else 2 * pi * f
        if ask == "XL":
            return sig(1 / (w * v["L"]) if swap_x else w * v["L"], n)
        return sig(w * v["C"] if swap_x else 1 / (w * v["C"]), n)
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
    "C03-M1": _m("C03-M1", ("Vac", "Vdc"), invert=True),  # inverts the ripple factor
    "C03-M2": _m("C03-M2", ("Vac", "Vdc"), other=True),  # uses the other rectifier's ripple factor
    "C03-M3": _m("C03-M3", ("XC", "XL"), supply_f=True),  # takes the supply frequency as the full-wave ripple's
    "C03-M4": _m("C03-M4", ("XC", "XL"), no_2pi=True),  # drops the 2 pi in the reactance
    "C03-M5": _m("C03-M5", ("XC", "XL"), swap_x=True),  # swaps the reactance formulas of L and C
    "C03-M6": _m("C03-M6"),  # thinks the rectifier's output is already steady DC
    "C03-M7": _m("C03-M7"),  # thinks the filter does the rectifying
    "C03-M8": _m("C03-M8"),  # thinks the filter blocks the DC and passes the AC to the load
    "C03-M9": _m("C03-M9", ("Vac", "Vdc"), pct=True),  # reads the ripple factor as a percentage
    "C03-M10": _m("C03-M10"),  # thinks a smaller capacitor smooths better
}
