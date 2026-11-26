"""C06 Depression of freezing point: answer models (the key, and one per misconception).

dTf = Kf m, m = 1000 W2 / (M2 W1) with W1, W2 in grams; so M2 = 1000 Kf W2 / (dTf W1).
params["ask"]:
  "Tf_same_mass": freezing point of a second solution with the same mass per cent of another solute
                  (inputs Tf1, M1, M2, T0), 4 significant figures;
  "Kf":   Kf from a known solute (inputs W2, M2, W1, dT);
  "M_ref": molar mass of an unknown from a reference solute in the same solvent
           (inputs Wr, Mr, W1r, dTr for the reference; W2, W1, dT for the unknown);
  "Tf":   freezing point of a solution in °C (inputs W2, M2, W1, Kf, T0);
  "M2":   molar mass from the freezing points (inputs W2, W1, Kf, T0, T);
  "kf_unit": the unit of Kf (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"kf_unit": {"key": "K_kg_per_mol", "C06-M7": "K_mol_per_kg", "C06-M8": "K_L_per_mol",
                     "C06-M9": "kelvin_only"}}


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "Tf_same_mass":
        dT1 = v["T0"] - v["Tf1"]
        if rule == "same_mass":
            dT2 = dT1
        elif rule == "heavier_more":
            dT2 = dT1 * v["M2"] / v["M1"]
        else:
            dT2 = dT1 * v["M1"] / v["M2"]
        return sig(v["T0"] + dT2 if rule == "raises" else v["T0"] - dT2, 4)
    if ask == "Kf":
        W2, M2, W1, dT = v["W2"], v["M2"], v["W1"], v["dT"]
        if rule == "molality_as_moles":
            return sig(dT / (W2 / M2))
        m = W2 / M2 / (W1 if rule == "grams_solvent" else W1 / 1000)
        return sig(dT * m if rule == "multiplies" else dT / m)
    if ask == "M_ref":
        Wr, Mr, W1r, dTr, W2, W1, dT = (v[s] for s in ("Wr", "Mr", "W1r", "dTr", "W2", "W1", "dT"))
        if rule == "heavier_more":  # depression taken to grow with molar mass
            return sig(Mr * (W2 / Wr) * (W1r / W1) * (dT / dTr))
        if rule == "molality_as_moles":  # dTf = Kf n in both steps
            Kf = dTr / (Wr / Mr)
            return sig(W2 / (dT / Kf))
        mr = Wr / Mr / (W1r / 1000)
        Kf = dTr * mr if rule == "multiplies" else dTr / mr
        return sig(1000 * Kf * W2 / (dT * W1))
    if ask == "Tf":
        W2, M2, W1, Kf = v["W2"], v["M2"], v["W1"], v["Kf"]
        if rule == "molality_as_moles":
            dT = Kf * W2 / M2
        else:
            dT = Kf * W2 / M2 / (W1 if rule == "grams_solvent" else W1 / 1000)
        return sig(v["T0"] + dT if rule == "raises" else v["T0"] - dT)
    if ask == "M2":
        W2, W1, Kf = v["W2"], v["W1"], v["Kf"]
        dT = v["T"] if rule == "tf_as_drop" else v["T0"] - v["T"]
        if rule == "molality_as_moles":
            return sig(W2 * Kf / dT)
        return sig((1 if rule == "grams_solvent" else 1000) * Kf * W2 / (dT * W1))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), rule=None):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m("C06-M1", ("Tf_same_mass", "Tf"), "raises"),  # thinks a solute raises the freezing point
    "C06-M2": _m("C06-M2", ("Tf_same_mass",), "same_mass"),  # equal masses of solute, equal depressions
    "C06-M3": _m("C06-M3", ("Tf_same_mass", "M_ref"), "heavier_more"),  # heavier solute, bigger depression
    "C06-M4": _m("C06-M4", ("M2",), "tf_as_drop"),  # uses the solution's freezing point as dTf
    "C06-M5": _m("C06-M5", ("Kf", "Tf", "M2"), "grams_solvent"),  # solvent mass in g where kg belongs
    "C06-M6": _m("C06-M6", ("Kf", "M_ref", "Tf", "M2"), "molality_as_moles"),  # molality taken as moles
    "C06-M7": _m("C06-M7", ("Kf", "M_ref"), "multiplies"),  # Kf = dTf x m; unit K mol/kg
    "C06-M8": _m("C06-M8"),  # concentration in molarity: unit K L/mol
    "C06-M9": _m("C06-M9"),  # Kf is a temperature: unit K
}
