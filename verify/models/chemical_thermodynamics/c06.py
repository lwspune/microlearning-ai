"""C06 Enthalpies of physical changes: answer models (the key, and one per misconception).

Heat for a phase change = n * dH (n = m / M); warming water = m c dT; dH_sub = dH_fus + dH_vap.
inputs: m (g), M (g/mol), fus, vap (kJ/mol), c (J/(g K)), T1, T2 (deg C, the warming stage).
params: "stages", a space-separated list of melt | heat | vap | sub in the forward order;
        "sign" -1 for the reverse change (freezing, condensing, deposition: heat released).
Answers in kJ.
"""
from sympy import Integer

from chemistry import sig


def _solve(v, p, how):
    sf = p.get("sf", 3)
    stages = p["stages"].split()
    sign = int(p.get("sign", 1))
    if how in ("M2", "M3") and "sub" not in stages:
        raise ValueError("no sublimation here")
    if how in ("M5", "M6") and "heat" not in stages:
        raise ValueError("no warming stage here")
    if how == "M4" and sign == 1:
        raise ValueError("no reverse change here")
    m = v["m"]
    n = m / v["M"]
    if how == "M1":
        m, n = n, m  # moles and grams swapped
    total = Integer(0)
    for s in stages:
        if s == "melt":
            total += n * v["fus"]
        elif s == "vap":
            total += n * v["vap"]
        elif s == "sub":
            dsub = {"M2": v["vap"] - v["fus"], "M3": v["vap"]}.get(how, v["fus"] + v["vap"])
            total += n * dsub
        elif s == "heat":
            if how == "M5":
                continue
            dT = v["T2"] + 273 if how == "M6" else v["T2"] - v["T1"]
            total += m * v["c"] * dT / 1000
    return sig(total if how == "M4" else sign * total, sf)


def key(v, p):
    return _solve(v, p, "key")


def _m(how):
    def model(v, p):
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m("M1"),  # swaps moles and grams (n dH with grams, m c dT with moles)
    "C06-M2": _m("M2"),  # takes dH_sub = dH_vap - dH_fus
    "C06-M3": _m("M3"),  # takes dH_sub = dH_vap, leaving out melting
    "C06-M4": _m("M4"),  # keeps the + sign for the reverse change (freezing, condensing)
    "C06-M5": _m("M5"),  # leaves out the warming stage
    "C06-M6": _m("M6"),  # uses the final temperature in K in place of the change dT
}
