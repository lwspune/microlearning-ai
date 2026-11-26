"""C04 Lowering of vapour pressure: answer models (the key, and one per misconception).

Nonvolatile solute (2) in solvent (1): P_1 = x_1 P_1^0, dP = P_1^0 - P_1 = P_1^0 x_2, dP / P_1^0 = x_2;
dilute: dP / P_1^0 = W_2 M_1 / (M_2 W_1).
params["ask"]:
  "P_mass": the solution's vapour pressure. inputs P1o, W1, M1, W2, M2 (g, g/mol).
  "P_mol":  the solution's vapour pressure. inputs P1o, n1, n2 (mol).
  "x2":     the solute's mole fraction. inputs P1o, P1.
  "M2":     the solute's molar mass (book's dilute formula). inputs P1o, P1, W1, M1, W2.
"""
from chemistry import sig


def _solve(v, p, mode):
    ask = p["ask"]
    P1o = v["P1o"]
    if ask in ("P_mass", "P_mol"):
        if ask == "P_mass":
            n1, n2 = v["W1"] / v["M1"], v["W2"] / v["M2"]
            if mode == "M2":  # masses in place of moles
                n1, n2 = v["W1"], v["W2"]
        else:
            n1, n2 = v["n1"], v["n2"]
            if mode == "M2":
                raise ValueError("does not apply to this item")
        x2 = n2 / (n1 + n2)
        if mode == "M6":  # x_2 taken as n_2 / n_1 in a solution that is not dilute
            x2 = n2 / n1
        if mode in ("key", "M2", "M6"):
            return sig(P1o * (1 - x2))
        if mode == "M1":  # stops at the lowering
            return sig(P1o * x2)
        if mode == "M3":  # thinks the solute raises the vapour pressure
            return sig(P1o * (1 + x2))
    if ask == "x2":
        P1 = v["P1"]
        if mode == "key":
            return sig((P1o - P1) / P1o)
        if mode == "M1":
            return sig(P1o - P1)
        if mode == "M4":  # divides the lowering by the solution's vapour pressure
            return sig((P1o - P1) / P1)
        if mode == "M5":  # P_1 / P_1^0, the solvent's mole fraction
            return sig(P1 / P1o)
    if ask == "M2":
        P1, W1, M1, W2 = v["P1"], v["W1"], v["M1"], v["W2"]
        rel = (P1o - P1) / P1o
        if mode == "key":
            return sig(W2 * M1 / (rel * W1))
        if mode == "M1":  # the lowering dP itself as the relative lowering
            return sig(W2 * M1 / ((P1o - P1) * W1))
        if mode == "M2":  # the solvent's mass in place of its moles
            return sig(W2 / (rel * W1))
        if mode == "M5":  # P_1 / P_1^0 in place of dP / P_1^0
            return sig(W2 * M1 / ((P1 / P1o) * W1))
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p, "key")


def _m(mode):
    return lambda v, p: _solve(v, p, mode)


MODELS = {
    "key": key,
    "C04-M1": _m("M1"),  # gives the lowering dP
    "C04-M2": _m("M2"),  # masses in place of moles
    "C04-M3": _m("M3"),  # thinks the solute raises the vapour pressure
    "C04-M4": _m("M4"),  # divides the lowering by P_1, not P_1^0
    "C04-M5": _m("M5"),  # uses P_1 / P_1^0 (the solvent's share) where dP / P_1^0 belongs
    "C04-M6": _m("M6"),  # x_2 as n_2 / n_1 in a concentrated solution
}
