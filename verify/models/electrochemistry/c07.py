"""C07 Electrode potentials and the series: answer models (the key, and one per misconception).

E0_cell = E0_cathode - E0_anode, with standard reduction potentials; E0 is intensive (no coefficients).
A higher E0 means a stronger oxidising agent (the left-hand, oxidised form); a lower E0 a stronger reducing
agent (the right-hand, reduced form).
params["ask"]:
  "E0cell":    E0_cell in V (inputs Ec, Ea: the cathode's and anode's E0; cc, ca: the coefficients of their
               species in the balanced equation, used only by the coefficient slip);
  "E_anode":   the anode's E0 from E0_cell (inputs E0, Ec, cc, ca);
  "strongest": the strongest oxidising and reducing agents (params couples: ["ox/red/E0", ...]); named ox_and_red;
  "order":     the oxidising agents in increasing strength (params species: ["name/E0/L or R", ...], L for the
               oxidised, left-hand form of its couple); named a_lt_b_lt_c.
"""
from sympy import Symbol, sympify

from chemistry import sig


def _value(v, p, rule):
    ask = p["ask"]
    if ask == "E0cell":
        Ec, Ea = v["Ec"], v["Ea"]
        return sig({"key": Ec - Ea, "add": Ec + Ea, "reverse": Ea - Ec,
                    "coeff": v["cc"] * Ec - v["ca"] * Ea}[rule])
    if ask == "E_anode":
        E0, Ec = v["E0"], v["Ec"]
        return sig({"key": Ec - E0, "add": E0 - Ec, "reverse": E0 + Ec,
                    "coeff": (v["cc"] * Ec - E0) / v["ca"]}[rule])
    raise ValueError("does not apply to this item")


def _couples(p):
    out = []
    for c in p["couples"]:
        ox, red, e = c.split("/")
        out.append((ox, red, sympify(e)))
    return out


def _strongest(p, rule):
    cs = _couples(p)
    hi, lo = max(cs, key=lambda c: c[2]), min(cs, key=lambda c: c[2])
    if rule == "key":
        return Symbol(f"{hi[0]}_and_{lo[1]}")
    if rule == "series_reversed":
        return Symbol(f"{lo[0]}_and_{hi[1]}")
    if rule == "wrong_side":
        return Symbol(f"{hi[1]}_and_{lo[0]}")
    if rule == "magnitude":
        big, small = max(cs, key=lambda c: abs(c[2])), min(cs, key=lambda c: abs(c[2]))
        return Symbol(f"{big[0]}_and_{small[1]}")
    raise ValueError("does not apply to this item")


def _order(p, rule):
    sp = []
    for s in p["species"]:
        name, e, side = s.split("/")
        sp.append((name, sympify(e), side))
    left = [s for s in sp if s[2] == "L"]
    if rule == "key":
        chosen = sorted(left, key=lambda s: s[1])
    elif rule == "series_reversed":
        chosen = sorted(left, key=lambda s: -s[1])
    elif rule == "wrong_side":  # every species listed taken as an oxidising agent
        chosen = sorted(sp, key=lambda s: s[1])
    elif rule == "magnitude":
        chosen = sorted(left, key=lambda s: abs(s[1]))
    else:
        raise ValueError("does not apply to this item")
    return Symbol("_lt_".join(s[0] for s in chosen))


def _m(rule):
    def model(v, p):
        if p["ask"] == "strongest":
            return _strongest(p, rule)
        if p["ask"] == "order":
            return _order(p, rule)
        if rule not in ("key", "add", "reverse", "coeff"):
            raise ValueError("does not apply to this item")
        return _value(v, p, rule)
    return model


MODELS = {
    "key": _m("key"),
    "C07-M1": _m("add"),  # adds the two reduction potentials
    "C07-M2": _m("reverse"),  # E0_anode - E0_cathode
    "C07-M3": _m("coeff"),  # multiplies each E0 by its coefficient in the equation
    "C07-M4": _m("series_reversed"),  # a higher E0 taken as a stronger reducing agent
    "C07-M5": _m("wrong_side"),  # takes the species on the wrong side of the half reaction
    "C07-M6": _m("magnitude"),  # ranks by the size of E0, ignoring its sign
}
