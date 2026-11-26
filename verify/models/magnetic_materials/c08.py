"""C08 Permanent magnets, electromagnets and shielding: answer models (the key, and one per misconception).

An electromagnet: a solenoid of N turns on length L_cm (n = N / L) round a core of relative permeability mur gives
B = mu0 mur n I. params["ask"]:
  "em":     that field, in T (inputs N, L_cm, mur, I);
  "core":   the properties that suit a transformer core (named);
  "perm":   the properties that suit a permanent magnet (named);
  "electro": the property that suits an electromagnet's core (named);
  "box":    the Earth's field inside a hollow iron box (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

mu0 = BOOK["mu0"]
CM = Rational(1, 100)
NAMED = {
    "core": {"key": "lowc_lowr", "C08-M1": "lowc_highr", "C08-M2": "highc_highr", "C08-M3": "highc_lowr"},
    "perm": {"key": "highr_highc", "C08-M4": "highr_lowc", "C08-M5": "lowr_lowc", "C08-M6": "lowr_highc"},
    "electro": {"key": "highmu_lowr", "C08-M7": "highr", "C08-M8": "highc", "C08-M9": "lowmu"},
    "box": {"key": "less", "C08-M10": "same", "C08-M11": "more", "C08-M12": "zero"},
}


def _solve(v, p, *, no_mur=False, use_N=False, cm=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "em":
        L = v["L_cm"] * (1 if cm else CM)
        turns = v["N"] if use_N else v["N"] / L
        return sig(mu0 * (1 if no_mur else v["mur"]) * turns * v["I"], n)
    raise ValueError(f"unknown ask {ask}")



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
    "C08-M1": _m("C08-M1"),  # thinks a core must keep its magnetism
    "C08-M2": _m("C08-M2"),  # chooses a permanent magnet's properties for a core
    "C08-M3": _m("C08-M3"),  # thinks high coercivity makes a narrow loop
    "C08-M4": _m("C08-M4"),  # thinks only retentivity matters for a permanent magnet
    "C08-M5": _m("C08-M5"),  # picks soft iron's properties for a permanent magnet
    "C08-M6": _m("C08-M6"),  # thinks only coercivity matters for a permanent magnet
    "C08-M7": _m("C08-M7"),  # thinks an electromagnet's core should keep its magnetism
    "C08-M8": _m("C08-M8"),  # thinks an electromagnet's core should resist demagnetising
    "C08-M9": _m("C08-M9"),  # thinks low permeability lets the field through
    "C08-M10": _m("C08-M10"),  # thinks iron does not change the field inside
    "C08-M11": _m("C08-M11"),  # thinks the iron gathers the field into the hollow
    "C08-M12": _m("C08-M12"),  # thinks the shielding is perfect
    "C08-M13": _m("C08-M13", ("em",), no_mur=True),  # forgets mu_r
    "C08-M14": _m("C08-M14", ("em",), use_N=True),  # uses N for n
    "C08-M15": _m("C08-M15", ("em",), cm=True),  # leaves the length in cm
}
