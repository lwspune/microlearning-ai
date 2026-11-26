"""C06 The bipolar junction transistor: answer models (the key, and one per misconception).

Emitter (heavily doped), thin lightly doped base, collector (doped in between: the book's page 358, not its page-357
misprint). In the active region the emitter-base junction is forward biased and the collector-base junction reverse
biased; in saturation both are forward biased, at cut-off both reverse. I_E = I_B + I_C. params["ask"]:
  "IE": the emitter current, in mA, from I_B in uA and I_C in mA (inputs IB_uA, IC_mA);
  "largest", "thin", "doping", "sat", "carriers": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "largest": {"key": "emitter_I", "C06-M1": "collector_I", "C06-M2": "base_I", "C06-M3": "cb_junction"},
    "thin": {"key": "few_recombine", "C06-M4": "big_base_current", "C06-M5": "low_resistance", "C06-M6": "base_supplies"},
    "doping": {"key": "e_c_b", "C06-M7": "e_b_c", "C06-M8": "all_equal", "C06-M9": "b_e_c"},
    "sat": {"key": "both_forward", "C06-M10": "active_bias", "C06-M11": "both_reverse", "C06-M12": "eb_rev_cb_fwd"},
    "carriers": {"key": "electrons_to_C", "C06-M13": "holes_to_C", "C06-M2": "electrons_out_B", "C06-M14": "electrons_from_C"},
}


def _solve(v, p, *, no_conv=False, minus=False, drop_IB=False):
    if p["ask"] != "IE":
        raise ValueError(f"unknown ask {p['ask']}")
    IC = v["IC_mA"]
    IB = v["IB_uA"] if no_conv else v["IB_uA"] / 1000
    if drop_IB:
        return sig(IC)
    return sig(IC - IB if minus else IC + IB)


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
    "C06-M1": _m("C06-M1"),  # thinks the collector, the output, carries the most current
    "C06-M2": _m("C06-M2"),  # thinks the base, which controls, carries the most current
    "C06-M3": _m("C06-M3"),  # thinks the reverse-biased junction, with the large voltage, carries the most
    "C06-M4": _m("C06-M4"),  # thinks the base is made thin so that its current is large
    "C06-M5": _m("C06-M5"),  # thinks a thin, lightly doped base conducts well
    "C06-M6": _m("C06-M6"),  # gives the base the emitter's job of supplying carriers
    "C06-M7": _m("C06-M7"),  # follows the book's misprint: collector lightest
    "C06-M8": _m("C06-M8"),  # thinks all three regions are doped alike
    "C06-M9": _m("C06-M9"),  # thinks the base, which controls, is the most heavily doped
    "C06-M10": _m("C06-M10"),  # confuses saturation with the active region
    "C06-M11": _m("C06-M11"),  # confuses saturation with cut-off
    "C06-M12": _m("C06-M12"),  # swaps the biases of the two junctions
    "C06-M13": _m("C06-M13"),  # thinks holes carry the current in an n-p-n transistor
    "C06-M14": _m("C06-M14"),  # takes the electrons to flow along the conventional current, C to E
    "C06-M15": _m("C06-M15", ("IE",), no_conv=True),  # adds the base current in uA to the collector current in mA
    "C06-M16": _m("C06-M16", ("IE",), minus=True),  # subtracts the base current
    "C06-M17": _m("C06-M17", ("IE",), drop_IB=True),  # drops the base current as too small to count
}
