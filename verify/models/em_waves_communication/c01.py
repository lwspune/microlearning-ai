"""C01 Electromagnetic waves: answer models (the key, and one per misconception).

E = cB, c = 3e8 m/s; intensity grows as amplitude squared. params["ask"]:
  "B_from_E":  amplitude of B for a wave of field amplitude E and frequency f (inputs E, f);
  "E_from_B":  amplitude of E from B (input B);
  "intensity": intensity ratio for an amplitude ratio k (input k);
  "direction", "glass", "pure": named.
"""
from sympy import Rational, Symbol, sqrt

from physics import sig

C = 3 * 10**8
NAMED = {
    "direction": {"key": "e_cross_b", "C01-M8": "e_dot_b", "C01-M9": "along_e", "C01-M10": "along_b"},
    "glass": {"key": "unchanged_f", "C01-M11": "f_rises", "C01-M12": "f_falls", "C01-M13": "f_thickness"},
    "pure": {"key": "not_possible", "C01-M14": "pure_electric", "C01-M15": "pure_magnetic", "C01-M16": "both_separately"},
}


def _solve(v, p, *, inv=False, by_f=False, equal=False, kms=False, linear=False, root=False, double=False):
    ask, n = p["ask"], p.get("sf", 3)
    c = Rational(C, 1000) if kms else C
    if ask == "B_from_E":
        if equal:
            return sig(v["E"], n)
        if by_f:
            return sig(v["E"] / v["f"], n)
        return sig(v["E"] * c if inv else v["E"] / c, n)
    if ask == "E_from_B":
        if equal:
            return sig(v["B"], n)
        return sig(v["B"] / c if inv else v["B"] * c, n)
    if ask == "intensity":
        k = v["k"]
        if linear:
            return sig(k, n)
        if root:
            return sig(sqrt(k), n)
        if double:
            return sig(2 * k, n)
        return sig(k**2, n)
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
    "C01-M1": _m("C01-M1", ("B_from_E", "E_from_B"), inv=True),  # turns E = cB round
    "C01-M2": _m("C01-M2", ("B_from_E",), by_f=True),  # divides by the frequency instead of c
    "C01-M3": _m("C01-M3", ("B_from_E", "E_from_B"), equal=True),  # takes E and B as equal
    "C01-M4": _m("C01-M4", ("E_from_B",), kms=True),  # uses c in km/s
    "C01-M5": _m("C01-M5", ("intensity",), linear=True),  # intensity proportional to amplitude
    "C01-M6": _m("C01-M6", ("intensity",), root=True),  # intensity as the square root
    "C01-M7": _m("C01-M7", ("intensity",), double=True),  # doubles the ratio
    **{f"C01-M{i}": _m(f"C01-M{i}") for i in range(8, 17)},
}
