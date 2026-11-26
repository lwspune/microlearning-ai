"""C05 Elevation of boiling point: answer models (the key, and one per misconception).

dTb = Kb m, m = 1000 W2 / (M2 W1) with W1, W2 in grams; so M2 = 1000 Kb W2 / (dTb W1).
params["ask"]:
  "M2":    molar mass of the solute (inputs W2, W1, Kb, T0, T: solvent and solution boiling points);
  "Tb":    boiling point of the solution (inputs W2, M2, W1, Kb, T0), 5 significant figures;
  "dTb":   the elevation (inputs W2, M2, W1, Kb);
  "W2":    mass of solute dissolved (inputs dT, Kb, W1, M2);
  "kb_def": the concentration at which dTb = Kb (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"kb_def": {"key": "one_molal", "C05-M2": "one_mass_percent", "C05-M3": "unit_mole_fraction",
                    "C05-M4": "one_molar"}}


def _rise(v, *, lower=False, grams_solute=False, grams_solvent=False, solution_mass=False):
    """The elevation for given W2, M2, W1, Kb, under one rule."""
    W2, W1, Kb = v["W2"], v["W1"], v["Kb"]
    if solution_mass:
        W1 = W1 + W2
    if grams_solute:
        return Kb * W2 * 1000 / W1  # mass of solute per kg, as if it were moles
    m = W2 / v["M2"] / (W1 if grams_solvent else W1 / 1000)
    return -Kb * m if lower else Kb * m


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "M2":
        W2, W1, Kb = v["W2"], v["W1"], v["Kb"]
        dT = v["T"] if rule == "tb_as_rise" else v["T"] - v["T0"]
        if rule == "molality_as_moles":
            return sig(W2 * Kb / dT)
        if rule == "solution_mass":
            W1 = W1 + W2
        return sig((1 if rule == "grams_solvent" else 1000) * Kb * W2 / (dT * W1))
    if ask in ("Tb", "dTb"):
        kw = {"lower": rule == "lower", "grams_solute": rule == "grams_solute",
              "grams_solvent": rule == "grams_solvent", "solution_mass": rule == "solution_mass"}
        rise = _rise(v, **kw)
        return sig(v["T0"] + rise, 5) if ask == "Tb" else sig(rise)
    if ask == "W2":
        dT, Kb, W1, M2 = v["dT"], v["Kb"], v["W1"], v["M2"]
        m = Kb / dT if rule == "inverted" else dT / Kb
        if rule == "molality_as_moles":
            return sig(m * M2)
        return sig(m * (W1 if rule == "grams_solvent" else W1 / 1000) * M2)
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
    "C05-M1": _m("C05-M1", ("Tb",), "lower"),  # thinks a solute lowers the boiling point
    "C05-M2": _m("C05-M2", ("Tb", "dTb"), "grams_solute"),  # counts grams of solute, not moles
    "C05-M3": _m("C05-M3"),  # thinks dTb follows the mole fraction, as vapour pressure lowering does
    "C05-M4": _m("C05-M4"),  # takes the concentration as molarity
    "C05-M5": _m("C05-M5", ("M2",), "tb_as_rise"),  # uses the solution's boiling point as dTb
    "C05-M6": _m("C05-M6", ("M2", "Tb", "dTb", "W2"), "grams_solvent"),  # solvent mass in g where kg belongs
    "C05-M7": _m("C05-M7", ("M2", "dTb"), "solution_mass"),  # uses the solution's mass for the solvent's
    "C05-M8": _m("C05-M8", ("M2", "W2"), "molality_as_moles"),  # treats the molality as the moles of solute
    "C05-M9": _m("C05-M9", ("W2",), "inverted"),  # takes m = Kb / dTb
}
