"""C08 The van't Hoff factor: answer models (the key, and one per misconception).

i = observed colligative property / that calculated for no dissociation; dTf = i Kf m, pi = i M R T.
params["ask"]:
  "i_ratio":  i from two osmotic pressures, electrolyte and nonelectrolyte (inputs P_obs, P_calc; n = ions per unit);
  "i_fp":     i from a freezing point (inputs dT, Kf, m; n);
  "pi_fp":    pi at T from a freezing point (inputs dT, Kf, m, T; n);
  "m_full":   molality from the freezing point, complete dissociation (inputs dT, Kf; n ions, k kinds of ion);
  "pi_full":  pi of a fully dissociated salt (inputs C, T; n, k);
  "mass_pi":  mass of salt for a given pi (inputs P, V, M2, T, i; n).
"""
from chemistry import BOOK, sig

R = BOOK["R_atm"]


def _i(v, p, rule):
    """The van't Hoff factor a rule uses."""
    if rule == "no_i":
        return 1
    if rule == "full":
        return v["n"]
    if rule == "kinds":
        return v["k"]
    ask = p["ask"]
    if ask == "i_ratio":
        obs, calc = v["P_obs"], v["P_calc"]
    elif ask in ("i_fp", "pi_fp"):
        obs, calc = v["dT"], v["Kf"] * v["m"]
    else:
        return v["i"] if "i" in v else v["n"]
    if rule == "difference":
        return obs - calc
    return calc / obs if rule == "inverted" else obs / calc


def _solve(v, p, rule=None):
    ask = p["ask"]
    i = _i(v, p, rule)
    wrong_side = rule == "wrong_side"
    if ask in ("i_ratio", "i_fp"):
        return sig(i)
    if ask == "pi_fp":
        return sig(i * v["m"] * R * v["T"])
    if ask == "m_full":
        return sig(i * v["dT"] / v["Kf"] if wrong_side else v["dT"] / (i * v["Kf"]))
    if ask == "pi_full":
        return sig(v["C"] * R * v["T"] / i if wrong_side else i * v["C"] * R * v["T"])
    if ask == "mass_pi":
        n2 = v["P"] * v["V"] / (R * v["T"])
        return sig((n2 * i if wrong_side else n2 / i) * v["M2"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, rule):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        if rule == "kinds" and "k" not in v:
            raise ValueError("needs the kinds of ion")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C08-M1": _m(("pi_fp", "m_full", "pi_full", "mass_pi"), "no_i"),  # leaves out i
    "C08-M2": _m(("i_ratio", "i_fp", "pi_fp"), "inverted"),  # i = calculated / observed
    "C08-M3": _m(("m_full", "pi_full"), "kinds"),  # counts the kinds of ion, not the ions
    "C08-M4": _m(("m_full", "pi_full", "mass_pi"), "wrong_side"),  # multiplies by i where it divides, or back
    "C08-M5": _m(("i_ratio", "i_fp", "pi_fp", "mass_pi"), "full"),  # i = ions per formula unit despite the data
    "C08-M6": _m(("i_ratio", "i_fp"), "difference"),  # i = observed - calculated
}
