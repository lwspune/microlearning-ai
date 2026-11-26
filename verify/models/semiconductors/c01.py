"""C01 Band theory of solids: answer models (the key, and one per misconception).

params["ask"]:
  "classify":  what a solid with a 6 eV gap is (named);
  "why_semi":  why a semiconductor conducts at room temperature (named);
  "sigma":     conductivity n e (mu_e + mu_h) of a pure semiconductor (inputs n, e, mue, muh);
  "conductor": the band picture of a conductor (named);
  "temp":      how a semiconductor's conductivity changes as it warms (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "classify": {"key": "insulator", "C01-M1": "semiconductor_b", "C01-M2": "conductor_b", "C01-M3": "semi_when_warm"},
    "why_semi": {"key": "small_gap", "C01-M4": "free_in_vb", "C01-M5": "bands_overlap", "C01-M6": "cb_full"},
    "conductor": {"key": "overlap", "C01-M10": "large_gap", "C01-M11": "small_gap_c", "C01-M12": "cb_filled"},
    "temp": {"key": "rises", "C01-M13": "falls", "C01-M14": "unchanged", "C01-M15": "becomes_zero"},
}


def _solve(v, p, *, e_only=False, no_e=False, minus=False):
    n = p.get("sf", 3)
    mu = v["mue"] if e_only else (v["mue"] - v["muh"] if minus else v["mue"] + v["muh"])
    return sig(v["n"] * (1 if no_e else v["e"]) * mu, n)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if not kw:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    **{f"C01-M{i}": _m(f"C01-M{i}") for i in (1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15)},
    "C01-M7": _m("C01-M7", e_only=True),  # counts only the electrons
    "C01-M8": _m("C01-M8", no_e=True),  # leaves out the charge e
    "C01-M9": _m("C01-M9", minus=True),  # subtracts the hole mobility
}
