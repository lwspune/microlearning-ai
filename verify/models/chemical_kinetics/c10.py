"""C10 Effect of a catalyst: answer models (the key, and one per misconception).

A catalyst gives a new path whose peak is lower, so both barriers fall by the same amount and dH (and K) are
unchanged. The rate rises by the ratio of the fractions over the barriers: e^((Ea - Ea_cat)/RT) (same A).
Energies in kJ/mol; R = 8.314 J/(K mol).
params["ask"]:
  "factor": how many times faster with the catalyst (inputs Ea, Ec: the barriers, T);
  "Erc":    the catalysed reverse barrier from the reactants R0, products Q, uncatalysed peak Pk and
            catalysed peak Pc (inputs R0, Q, Pk, Pc);
  "dHc":    dH of the catalysed reaction (same inputs).
"""
from sympy import exp

from chemistry import BOOK, sig

R = BOOK["R"]


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "factor":
        Ea, Ec, T = v["Ea"], v["Ec"], v["T"]
        if rule == "m4":
            return sig(exp((Ea - Ec) / (R * T)))
        if rule == "m5":
            return sig(Ea / Ec)
        if rule == "m6":
            return sig((Ea - Ec) * 1000 / (R * T))
        if rule is None:
            return sig(exp((Ea - Ec) * 1000 / (R * T)))
    if ask in ("Erc", "dHc"):
        R0, Q, Pk, Pc = v["R0"], v["Q"], v["Pk"], v["Pc"]
        efc = Pc - R0  # the catalysed forward barrier (every model reads this one right)
        erc = {None: Pc - Q, "m1": Pk - Q, "m2": (Pk - Q) + (Pk - Pc), "m3": Pc}.get(rule)
        if erc is not None:
            if rule == "m3":  # both barriers read from zero
                efc = Pc
            return sig(erc) if ask == "Erc" else sig(efc - erc)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C10-M1": _m("m1"),  # lowers only the forward barrier; the reverse one is unchanged
    "C10-M2": _m("m2"),  # thinks the catalyst favours the products: the reverse barrier rises as the forward falls
    "C10-M3": _m("m3"),  # reads a barrier as the peak's height above zero
    "C10-M4": _m("m4"),  # Ea in kJ/mol with R in J/(K mol)
    "C10-M5": _m("m5"),  # takes the rate as inversely proportional to Ea: factor Ea / Ea_cat
    "C10-M6": _m("m6"),  # forgets the exponential: factor (Ea - Ea_cat) / RT
}
