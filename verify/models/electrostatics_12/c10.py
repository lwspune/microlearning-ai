"""C10 Conductors and dielectrics: answer models (the key, and one per misconception).

In a conductor in equilibrium E = 0 inside and the charge sits on the outer surface; a closed conducting shell
shields its inside. A dielectric of constant k reduces a field E0 to E0/k. params["ask"]:
  "car":    why a car is safe in lightning (named);  "where": where a conductor's charge sits (named);
  "polar":  what a polar dielectric is (named);       "vdg": what a Van de Graaff generator is used for (named);
  "field":  E, in V/m, inside a dielectric of constant k in an applied field E0 (inputs E0, k).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "car": {"key": "shield", "C10-M1": "tyres", "C10-M2": "volume", "C10-M3": "air"},
    "where": {"key": "outer", "C10-M2": "volume", "C10-M4": "centre", "C10-M5": "inner"},
    "polar": {"key": "random_dipoles", "C10-M6": "no_dipoles", "C10-M7": "aligned", "C10-M8": "conducts"},
    "vdg": {"key": "accelerate", "C10-M12": "large_current", "C10-M13": "transformer", "C10-M14": "lightning_rod"},
}


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    E0, k = v["E0"], v["k"]
    return sig(E0 / k, p.get("sf", 3))


def _m(mid, f=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if f is None:
            raise ValueError("does not apply to this item")
        return sig(f(v["E0"], v["k"]), p.get("sf", 3))
    return model


MODELS = {
    "key": key,
    "C10-M1": _m("C10-M1"),  # credits the rubber tyres
    "C10-M2": _m("C10-M2"),  # thinks charge spreads through a conductor's volume
    "C10-M3": _m("C10-M3"),  # thinks the air inside shields, like a dielectric
    "C10-M4": _m("C10-M4"),  # thinks charge collects at the centre
    "C10-M5": _m("C10-M5"),  # thinks charge sits on the inner surface of a hollow conductor
    "C10-M6": _m("C10-M6"),  # thinks polar molecules have no dipole moment
    "C10-M7": _m("C10-M7"),  # thinks polar dipoles are aligned even without a field
    "C10-M8": _m("C10-M8"),  # confuses polar with conducting
    "C10-M9": _m("C10-M9", lambda E0, k: E0 * k),  # multiplies by k
    "C10-M10": _m("C10-M10", lambda E0, k: E0),  # thinks a dielectric leaves the field unchanged
    "C10-M11": _m("C10-M11", lambda E0, k: E0 / k**2),  # divides by k^2
    "C10-M12": _m("C10-M12"),  # thinks a Van de Graaff gives a large current
    "C10-M13": _m("C10-M13"),  # confuses a Van de Graaff with a transformer
    "C10-M14": _m("C10-M14"),  # thinks a Van de Graaff is a lightning conductor
}
