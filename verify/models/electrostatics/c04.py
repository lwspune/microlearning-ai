"""C04 Electric field and lines of force: answer models (the key, and one per misconception).

E = F/q0; a point charge gives E = k q / r^2 (k = 9e9, the book's value); between parallel plates E = V/d.
params["ask"]:
  "point":  field of a charge q at r cm (inputs q, r);
  "drop":   force on a charge q between plates d cm apart at a potential difference V (inputs q, V, d);
  "plates": field between plates d mm apart at a potential difference V (inputs V, d);
  "tri":    field at the midpoint P of the hypotenuse of a right isosceles triangle with equal sides s cm,
            qB at the right angle, equal charges qA = qC at the other corners (inputs qB, qA, s);
  "electron", "lines": named answers.
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

NAMED = {
    "electron": {"key": "to_positive", "C04-M6": "to_negative", "C04-M7": "stays_still", "C04-M8": "parallel_plates"},
    "lines": {"key": "never_cross", "C04-M9": "paths_of_charge", "C04-M10": "start_negative", "C04-M11": "closed_loops"},
}

K = BOOK["k_e"]
CM = Rational(1, 100)
MM = Rational(1, 1000)


def _solve(v, p, *, inv1=False, no_cm=False, times_d=False, no_mm=False, no_k=False, flip=False, all_three=False,
           side=False, d_over_v=False):
    ask = p["ask"]
    k = 1 if no_k else K
    if ask == "point":
        r = v["r"] if no_cm else v["r"] * CM
        return sig(k * abs(v["q"]) / (r if inv1 else r**2))
    if ask == "drop":
        d = v["d"] if no_cm else v["d"] * CM
        E = v["V"] * d if times_d else v["V"] / d
        return sig(E / v["q"] if flip else v["q"] * E)
    if ask == "plates":
        d = v["d"] if no_mm else v["d"] * MM
        if times_d:
            return sig(v["V"] * d)
        return sig(d / v["V"] if d_over_v else v["V"] / d)
    if ask == "tri":
        s = v["s"] if no_cm else v["s"] * CM
        bp = s if side else s / sqrt(2)
        q = v["qB"] + 2 * v["qA"] if all_three else v["qB"]
        return sig(K * q / bp**2)
    raise ValueError("unknown ask")


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
    "C04-M1": _m("C04-M1", ("drop",), flip=True),  # turns E = F/q0 upside down
    "C04-M2": _m("C04-M2", ("point",), inv1=True),  # uses 1/r
    "C04-M3": _m("C04-M3", ("point", "drop", "tri"), no_cm=True),  # leaves cm unconverted
    "C04-M4": _m("C04-M4", ("drop", "plates"), times_d=True),  # E = V d
    "C04-M5": _m("C04-M5", ("plates",), no_mm=True),  # leaves mm unconverted
    "C04-M6": _m("C04-M6"),  # thinks an electron moves along the field
    "C04-M7": _m("C04-M7"),  # thinks a charge at rest feels no force
    "C04-M8": _m("C04-M8"),  # thinks it moves parallel to the plates
    "C04-M9": _m("C04-M9"),  # thinks lines of force are the paths of charges
    "C04-M10": _m("C04-M10"),  # thinks lines start on negative charges
    "C04-M11": _m("C04-M11"),  # thinks electric lines form closed loops
    "C04-M12": _m("C04-M12", ("point",), no_k=True),  # leaves out 1/(4 pi eps0)
    "C04-M13": _m("C04-M13", ("tri",), all_three=True),  # adds the magnitudes of all three fields
    "C04-M14": _m("C04-M14", ("tri",), side=True),  # uses the side for the distance BP
    "C04-M15": _m("C04-M15", ("plates",), d_over_v=True),  # divides d by V
}
