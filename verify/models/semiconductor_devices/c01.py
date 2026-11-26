"""C01 Doping and the p-n junction: answer models (the key, and one per misconception).

params["ask"]:
  "pure":   what a pure semiconductor is called (named);
  "ptype":  a description of a p-type semiconductor (named);
  "dope_n": what a pentavalent impurity makes of a pure crystal (named);
  "fwd":    what forward bias does to the depletion layer and the current (named);
  "rev":    the current when the p side goes to the cell's negative terminal (named);
  "If":     the forward current, in mA, of a diode in series with a resistor (inputs V volts, R ohms, Vb the
            barrier potential of the diode's material, Vo the other material's barrier).

The key works from the definitions: a pure crystal is intrinsic, with n_e = n_h; a trivalent impurity gives p-type
(holes in the majority), a pentavalent one n-type (electrons in the majority), and the crystal stays neutral; with
the p side at the higher potential the junction is forward biased, the barrier falls and the depletion layer
narrows; a forward-biased diode drops about its barrier potential, so I = (V - Vb) / R.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "pure": {"key": "intrinsic_sc", "C01-M1": "extrinsic_sc", "C01-M9": "insulator_sc", "C01-M10": "ntype_sc"},
    "ptype": {"key": "tri_holes", "C01-M2": "penta_electrons", "C01-M3": "tri_holes_charged",
              "C01-M11": "tri_electrons"},
    "dope_n": {"key": "ntype_neutral", "C01-M2": "ptype_neutral", "C01-M3": "ntype_negative",
               "C01-M11": "ntype_holes"},
    "fwd": {"key": "narrows_majority", "C01-M5": "widens_none", "C01-M12": "same_majority",
            "C01-M11": "narrows_minority"},
    "rev": {"key": "zero_minority", "C01-M4": "fwd_current", "C01-M8": "ohmic_current", "C01-M11": "zero_majority"},
}


def _solve(v, p, *, no_barrier=False, other=False, add=False):
    n = p.get("sf", 3)
    if p["ask"] != "If":
        raise ValueError(f"unknown ask {p['ask']}")
    V, R = v["V"], v["R"]
    Vb = 0 if no_barrier else (v["Vo"] if other else v["Vb"])
    drop = -Vb if add else Vb
    return sig((V - drop) / R * 1000, n)


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
    "C01-M1": _m("C01-M1"),  # takes "extrinsic" to mean pure
    "C01-M2": _m("C01-M2"),  # swaps the dopants: trivalent makes n-type, pentavalent p-type
    "C01-M3": _m("C01-M3"),  # thinks a doped crystal carries a net charge
    "C01-M4": _m("C01-M4"),  # takes the p side on the negative terminal as forward bias
    "C01-M5": _m("C01-M5"),  # swaps the effects of forward and reverse bias on the depletion layer
    "C01-M6": _m("C01-M6", ("If",), no_barrier=True),  # ignores the barrier potential
    "C01-M7": _m("C01-M7", ("If",), other=True),  # uses the other material's barrier (0.3 V for silicon)
    "C01-M8": _m("C01-M8"),  # thinks a diode conducts either way, like a resistor
    "C01-M9": _m("C01-M9"),  # thinks a pure semiconductor has no free carriers at room temperature
    "C01-M10": _m("C01-M10"),  # thinks breaking a bond frees an electron but leaves no hole
    "C01-M11": _m("C01-M11"),  # swaps majority and minority carriers
    "C01-M12": _m("C01-M12"),  # thinks bias changes the current but not the depletion layer
    "C01-M13": _m("C01-M13", ("If",), add=True),  # adds the barrier potential to the cell's voltage
}
